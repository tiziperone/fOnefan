/* =====================================================
   live.js · Actualización en vivo de fOnefan
   · Resultados oficiales: API Jolpi (cada 20 s mientras hay
     una sesión en curso o recién terminada).
   · Estado de la carrera: API OpenF1 (vuelta, Safety Car,
     bandera a cuadros), cada 10 s durante la sesión.
   Usa funciones y variables de app.js: no las renombres.
   Cargar DESPUÉS de app.js.
   ===================================================== */
(function () {
  'use strict';

  const JOLPI = 'https://api.jolpi.ca/ergast/f1/2026';
  const OPENF1 = 'https://api.openf1.org/v1';
  const SEC = 1000, MIN = 60 * SEC, HOUR = 60 * MIN;

  // Vueltas oficiales por ronda. null = desconocido (se muestra solo "Vuelta X").
  const RACE_LAPS = {
    1: 58, 2: 56, 3: 53, 4: 57, 5: 70, 6: 78, 7: 66, 8: 71, 9: 52, 10: 44,
    11: 70, 12: 72, 13: 53, 14: null, 15: 51, 16: 57, 17: 62, 18: 56,
    19: 71, 20: 71, 21: 50, 22: 57, 23: 58
  };
  const KIND_LABEL = { Race: 'Carrera', Sprint: 'Sprint', Quali: 'Clasificación', Practice: 'Práctica', Other: 'Sesión' };
  const STATE_LABEL = { normal: 'Normal', sc: 'Safety Car', vsc: 'VSC', red: 'Bandera roja' };

  const S = {
    lastRound: 0,            // última ronda con resultados oficiales (Jolpi)
    doneRounds: new Set(),   // rondas terminadas según OpenF1
    finished: new Set(),     // sesiones con bandera a cuadros
    rcState: {},             // estado de pista por sesión (normal, sc, vsc, red)
    session: null, sessionAt: 0,
    lapKey: null, lapNum: null, lapsAt: 0,
    live: null,              // sesión en curso
    needCore: false,         // hay que recargar pilotos/equipos/calendario
    retry: { n: 6, at: 0 },  // reintentos de clasificación tras una carrera
    finishAt: 0, jolpiAt: 0,
    lastSig: ''
  };

  const $ = sel => document.querySelector(sel);
  const pad = n => String(n).padStart(2, '0');
  const cal = () => (typeof a0_0x484245 !== 'undefined' && a0_0x484245.calendar) || [];
  const nameOfRound = n => { const r = cal().find(x => x.round === n); return r ? r.name : 'la última carrera'; };
  const pendingRounds = () => [...S.doneRounds].filter(n => n > S.lastRound);

  async function getJSON(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.json();
  }

  // Carrera del calendario más cercana a una fecha (cada GP cae en su fin de semana)
  function roundNear(iso) {
    const t = Date.parse(iso);
    let best = null, bestDiff = Infinity;
    for (const r of cal()) {
      const d = Math.abs(Date.parse(r.when) - t);
      if (d < bestDiff) { bestDiff = d; best = r; }
    }
    return bestDiff < 7 * 24 * HOUR ? best : null;
  }

  function kindOf(s) {
    const n = (s.session_name || s.session_type || '').toLowerCase();
    if (n === 'race') return 'Race';
    if (n === 'sprint') return 'Sprint';
    if (/qualif|shootout/.test(n)) return 'Quali';
    if (/practice/.test(n)) return 'Practice';
    return 'Other';
  }

  /* ---------- OpenF1: sesión, bandera, Safety Car y vuelta ---------- */

  async function pollSession() {
    if (!S.session || Date.now() - S.sessionAt > MIN) {
      S.sessionAt = Date.now();
      try {
        const list = await getJSON(OPENF1 + '/sessions?session_key=latest');
        S.session = list[0] || null;
      } catch (e) { /* se conserva la última sesión conocida */ }
    }
  }

  async function pollRC(s, round, kind) {
    const msgs = await getJSON(OPENF1 + '/race_control?session_key=' + s.session_key);
    msgs.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    let state = 'normal', finished = false;
    for (const m of msgs) {
      const t = String(m.message || '').toUpperCase();
      if (String(m.flag || '').toUpperCase() === 'CHEQUERED' || t.includes('CHEQUERED')) finished = true;
      if (t.includes('RED FLAG')) state = 'red';
      else if (t.includes('VIRTUAL SAFETY CAR DEPLOYED')) state = 'vsc';
      else if (t.includes('SAFETY CAR DEPLOYED') || t.includes('IN THIS LAP')) state = 'sc';
      else if (t.includes('ENDING') || t.includes('RESUMED') || t.includes('RESTART')) state = 'normal';
    }
    S.rcState[s.session_key] = state;
    if (finished && !S.finished.has(s.session_key)) {
      S.finished.add(s.session_key);
      S.finishAt = Date.now();
      S.retry = { n: 0, at: Date.now() + MIN };   // reintenta la clasificación en el próximo minuto
      S.needCore = true;
      if (kind === 'Race') S.doneRounds.add(round.round);
    }
  }

  async function pollLaps(s) {
    if (S.lapKey !== s.session_key) { S.lapKey = s.session_key; S.lapNum = null; S.lapsAt = 0; }
    if (Date.now() - S.lapsAt < 10 * SEC) return;
    S.lapsAt = Date.now();
    const since = new Date(Date.now() - 8 * MIN).toISOString();
    const laps = await getJSON(OPENF1 + '/laps?session_key=' + s.session_key + '&date_start>=' + since);
    if (laps.length) S.lapNum = Math.max(...laps.map(l => l.lap_number || 0));
  }

  async function pollOpenF1() {
    await pollSession();
    S.live = null;
    const s = S.session;
    if (!s) return;
    const round = roundNear(s.date_start);
    if (!round) return;

    const kind = kindOf(s);
    const t = Date.now();
    const start = Date.parse(s.date_start);
    const end = s.date_end ? Date.parse(s.date_end) : start + 3 * HOUR;
    const isRace = kind === 'Race' || kind === 'Sprint';

    if (isRace && t >= start - 5 * MIN && t <= end + 15 * MIN) {
      try { await pollRC(s, round, kind); } catch (e) { console.warn('[live] race control:', e.message); }
    }
    if (S.finished.has(s.session_key)) return;
    if (t < start - 5 * MIN || t > end + 10 * MIN) return;

    if (isRace && t >= start) {
      try { await pollLaps(s); } catch (e) { console.warn('[live] vueltas:', e.message); }
    }
    S.live = {
      round: round.round,
      kind,
      state: S.rcState[s.session_key] || 'normal',
      lap: isRace ? S.lapNum : null,
      started: t >= start
    };
  }

  /* ---------- Jolpi: última ronda con resultados oficiales ---------- */

  async function pollLastRound() {
    const j = await getJSON(JOLPI + '/last/results.json?limit=1');
    const races = j.MRData.RaceTable.Races || [];
    return races.length ? +races[0].round : 0;
  }

  // Una carrera está terminada si: Jolpi ya la publicó, OpenF1 vio la bandera
  // a cuadros, o (sin datos) pasaron 3 horas desde la largada.
  function applyDone() {
    const now = Date.now();
    cal().forEach(r => {
      const w = Date.parse(r.when);
      r.done = r.round <= S.lastRound || S.doneRounds.has(r.round) || (!isNaN(w) && now > w + 3 * HOUR);
    });
  }

  /* ---------- Render ---------- */

  function sig() {
    return JSON.stringify([
      S.lastRound,
      [...S.doneRounds],
      cal().map(r => r.done),
      a0_0x484245.drivers.map(d => [d.id, d.basePts]),
      a0_0x484245.teams.map(t => [t.id, t.pts])
    ]);
  }

  function render() {
    const s = sig();
    if (s === S.lastSig) return;
    S.lastSig = s;
    a0_0x3f7e81();                                     // home, calendario, campeonato, circuitos
    const view = document.querySelector('.view.active');
    if (view && view.id === 'v-pilotos') a0_0x5bdb86();
    if (view && view.id === 'v-escuderias') a0_0x34ca68();
    decorate();
  }

  function decorate() {
    const L = S.live;
    document.querySelectorAll('#calGrid .race').forEach(card => {
      const r = cal().find(x => x.id === card.dataset.race);
      const badge = card.querySelector('.badge');
      if (r && badge && L && L.round === r.round) {
        badge.textContent = 'EN VIVO';
        badge.className = 'badge b-live';
      }
    });
  }

  function banner() {
    const b = $('#liveBanner');
    if (!b) return;
    const pend = pendingRounds();
    b.hidden = !pend.length;
    if (pend.length) {
      b.textContent = 'Actualizando los resultados de ' + nameOfRound(Math.min(...pend)) +
        '. Las estadísticas se actualizan solas en cuanto la API oficial los publica.';
    }
  }

  // Bloque principal: contador o estado en vivo. Se actualiza cada segundo.
  function hero() {
    const pill = $('#heroPill'), nameEl = $('#nextName');
    if (!pill || !nameEl) return;
    const cd = $('#cdWrap'), box = $('#liveBox'), note = $('#pendingNote');

    const pend = pendingRounds();
    if (note) {
      note.hidden = !pend.length;
      if (pend.length) note.textContent = 'Publicando los resultados oficiales de ' + nameOfRound(Math.min(...pend)) + '…';
    }

    const next = cal().find(r => !r.done);
    if (!next) {
      pill.textContent = 'Temporada finalizada';
      nameEl.textContent = '—';
      cd.hidden = true; box.hidden = true;
      return;
    }

    nameEl.textContent = next.name;
    const L = S.live && S.live.round === next.round ? S.live : null;
    pill.textContent = L ? 'En vivo' : 'Próximo Gran Premio';
    cd.hidden = !!L;
    box.hidden = !L;

    if (L) {
      $('#lvTag').textContent = 'EN VIVO · ' + KIND_LABEL[L.kind];
      const lap = $('#lvLap'), st = $('#lvState');
      if (L.kind === 'Race' || L.kind === 'Sprint') {
        const total = L.kind === 'Race' ? RACE_LAPS[next.round] : null;
        lap.textContent = L.lap
          ? 'Vuelta ' + L.lap + (total ? ' de ' + total : '')
          : (L.started ? 'Carrera en curso' : 'Previa a la largada');
        st.textContent = STATE_LABEL[L.state] || 'Normal';
        st.className = 'lv-state st-' + L.state;
      } else {
        lap.textContent = L.kind === 'Quali' ? 'Clasificación en curso' : 'Sesión en curso';
        st.textContent = '';
        st.className = 'lv-state';
      }
    } else {
      const ms = Math.max(0, Date.parse(next.when) - Date.now());
      $('#cdD').textContent = pad(Math.floor(ms / (24 * HOUR)));
      $('#cdH').textContent = pad(Math.floor(ms / HOUR) % 24);
      $('#cdM').textContent = pad(Math.floor(ms / MIN) % 60);
      $('#cdS').textContent = pad(Math.floor(ms / SEC) % 60);
    }
  }

  /* ---------- Bucle principal ---------- */

  async function loop() {
    try { await pollOpenF1(); } catch (e) { console.warn('[live] sesión:', e.message); }

    const hot = !!S.live || pendingRounds().length > 0 || Date.now() - S.finishAt < 45 * MIN;
    if (Date.now() - S.jolpiAt >= (hot ? 20 * SEC : 2 * MIN)) {
      S.jolpiAt = Date.now();
      try {
        const last = await pollLastRound();
        if (last !== S.lastRound) { S.lastRound = last; S.needCore = true; }
      } catch (e) { console.warn('[live] resultados:', e.message); }
    }

    if (S.retry.n < 6 && Date.now() >= S.retry.at) {
      S.retry.n++;
      S.retry.at = Date.now() + MIN;
      S.needCore = true;
    }
    if (S.needCore) {
      S.needCore = false;
      try { await a0_0x510c39(); } catch (e) { console.warn('[live] clasificación:', e.message); }
    }

    applyDone();
    render();
    banner();
    decorate();
    setTimeout(loop, 10 * SEC);
  }

  function boot() {
    if (typeof a0_0x484245 === 'undefined' || !a0_0x484245.calendar || !a0_0x484245.calendar.length) {
      return setTimeout(boot, 300);
    }
    // Reemplaza el contador de app.js por el bloque en vivo
    if (typeof a0_0xeca4b2 !== 'undefined') clearInterval(a0_0xeca4b2);
    window.a0_0xeb3c54 = hero;

    const grid = $('#calGrid');
    if (grid) new MutationObserver(decorate).observe(grid, { childList: true });

    setInterval(hero, SEC);
    loop();
  }

  boot();
})();