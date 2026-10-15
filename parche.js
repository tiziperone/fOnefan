/* =====================================================
   parche.js · fOnefan
   - Caché de la API Jolpi (historia más rápida desde la 2.ª carga)
   - Trazado correcto de Las Vegas / Caesars Palace en todos los lugares
   - Vista previa de trazados en "Próximas" y calendario calculada directo
   - Circuitos vigentes: usa las tarjetas y la ficha completas de app.js
   - Mejoras para celulares: "Próximas carreras" y "Tabla de posiciones"
   ===================================================== */
(function () {
  'use strict';

  /* ---------- Caché de la API histórica ---------- */

  const CACHE_PREFIX = 'fo-api:';
  const DAY = 24 * 60 * 60 * 1000;
  const SEASON_NOW = new Date().getFullYear();

  // Temporada en curso: caché corta. Temporadas pasadas: caché larga.
  function ttlFor(url) {
    const m = url.match(/\/ergast\/f1\/(\d{4})\//);
    if (m && +m[1] < SEASON_NOW) return 7 * DAY;
    return 10 * 60 * 1000;
  }

  function readCache(key) {
    try {
      const raw = localStorage.getItem(CACHE_PREFIX + key);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      if (Date.now() > obj.exp) return null;
      return obj.body;
    } catch (e) { return null; }
  }

  function writeCache(key, body, ttl) {
    try {
      localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ exp: Date.now() + ttl, body }));
    } catch (e) { /* cuota llena: seguimos sin caché */ }
  }

  const realFetch = window.fetch.bind(window);

  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    const method = (init && init.method) || (input && input.method) || 'GET';
    if (method !== 'GET' || url.indexOf('api.jolpi.ca/ergast/f1/') === -1) {
      return realFetch(input, init);
    }

    const key = url;
    const cached = readCache(key);
    if (cached) {
      return Promise.resolve(new Response(JSON.stringify(cached), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      }));
    }

    return realFetch(input, init).then(res => {
      if (res.ok) {
        res.clone().json()
          .then(body => writeCache(key, body, ttlFor(url)))
          .catch(() => {});
      }
      return res;
    });
  };

  /* ---------- Trazados de Las Vegas y Caesars Palace ----------
     El buscador de app.js elige la pista más cercana por coordenadas y, para
     Las Vegas, caía en el viejo circuito de Caesars Palace. Se fuerzan las
     coordenadas de cada uno para que cada circuito use su propio trazado. */

  const VEGAS_ID = 'las-vegas-1';
  const VEGAS_ACTUAL = { lat: 36.175, lon: -115.1364 };   // entrada las-vegas-1
  const CAESARS = { lat: 36.1169, lon: -115.175 };         // entrada de Caesars Palace

  const esVegasActual = id => /vegas/i.test(String(id || '')) && !/caesar/i.test(String(id || ''));
  const esCaesarsId = id => /caesar/i.test(String(id || ''));
  const esCaesarsEntrada = c => c && Math.abs(c.lat - CAESARS.lat) < 0.001 && Math.abs(c.lon - CAESARS.lon) < 0.001;

  function corregirPos(c) {
    if (!c) return c;
    if (esVegasActual(c.circuitId)) return Object.assign({}, c, VEGAS_ACTUAL);
    if (esCaesarsId(c.circuitId)) return Object.assign({}, c, CAESARS);
    return c;
  }

  if (typeof window.a0_0x4d4387 === 'function') {
    const orig = window.a0_0x4d4387;
    window.a0_0x4d4387 = function (lista) {
      return orig.call(this, (lista || []).map(corregirPos));
    };
  }
  if (typeof window.a0_0xcf7b97 === 'function') {
    const orig = window.a0_0xcf7b97;
    window.a0_0xcf7b97 = function (c) {
      return orig.call(this, corregirPos(c));
    };
  }

  /* ---------- Resto de la página ---------- */

  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const sinAcentos = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z]/g, '');
  const LIVE = () => (typeof a0_0x484245 !== 'undefined' && a0_0x484245) || {};
  const pad = n => String(n).padStart(2, '0');
  const TZ_AR = 'America/Argentina/Buenos_Aires';
  const TITULO_CHANCES = /pilotos con chances/i;
  const MSG_API = /requieren conexi[oó]n a la API/i;

  const CARDS = { drv: [], team: [] };
  const WAIT_TICKS = 3;
  const waitCount = { drv: 0, team: 0, circ: 0 };

  function injectStyles() {
    if ($('#parcheStyle')) return;
    const st = document.createElement('style');
    st.id = 'parcheStyle';
    st.textContent = `
      .pt-btn{position:fixed;right:18px;bottom:22px;z-index:55;width:48px;height:48px;border-radius:50%;
        border:1px solid rgba(225,6,0,.6);background:var(--red,#e10600);color:#fff;font-size:22px;line-height:1;
        cursor:pointer;display:grid;place-items:center;box-shadow:0 8px 24px rgba(0,0,0,.45);
        opacity:0;transform:translateY(12px);pointer-events:none;transition:opacity .25s ease,transform .25s ease}
      .pt-btn.show{opacity:1;transform:none;pointer-events:auto}
      .pt-btn:hover{filter:brightness(1.15)}

      /* Trazados en calendario */
      .cal-track{display:flex;justify-content:center;align-items:center;margin:10px 0 2px;height:110px}
      .cal-track svg{width:100%;height:100%;max-width:180px;overflow:visible}
      .cal-track path{fill:none !important;stroke:var(--red);stroke-width:2.2;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}

      /* ===== Próximas carreras (Inicio) ===== */
      .up{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:8px 12px}
      .up>span{min-width:0;overflow-wrap:anywhere;line-height:1.3}
      .up>small{white-space:nowrap}
      .up .up-track{grid-column:1/-1;display:flex;align-items:center;gap:14px;margin:2px 0 0;
        padding:10px 12px;border-radius:12px;background:rgba(255,255,255,.035);border:1px solid var(--line)}
      .up .up-track .up-svg{width:88px;height:64px;flex-shrink:0;display:grid;place-items:center}
      .up .up-track .up-svg svg{width:100%;height:100%;overflow:visible}
      .up .up-track .up-svg path{fill:none !important;stroke:var(--red);stroke-width:2.2;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}
      .up .up-track small{color:var(--muted);font-size:13px;line-height:1.35;min-width:0;overflow-wrap:anywhere}

      /* ===== Campeonato: pequeños retoques generales ===== */
      #v-standings .srow:nth-child(-n+3) .pos{color:var(--red)}

      @media (max-width:640px){
        /* Próximas carreras */
        .up{grid-template-columns:1fr;padding:12px;font-size:14px;gap:6px}
        .up>small{white-space:normal;font-size:13px}
        .up .up-track{padding:10px;gap:12px}
        .up .up-track .up-svg{width:96px;height:68px}
        .cal-track{height:90px}

        /* Tabla de posiciones */
        #champTabs{display:grid !important;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:18px !important}
        #champTabs .chip{padding:10px 6px;text-align:center;font-size:12px;letter-spacing:.06em;line-height:1.2}
        #v-standings .sec-head p{font-size:14px;padding-left:12px}
        #v-standings .two{gap:16px}
        #v-standings .panel{padding:16px 12px;border-radius:18px}
        #v-standings .panel h3{margin-bottom:8px;font-size:12px}
        #v-standings .srow{grid-template-columns:26px minmax(0,1fr) auto;gap:10px;padding:10px 4px}
        #v-standings .who{gap:5px}
        #v-standings .who b{font-size:15px;white-space:normal;overflow:visible;text-overflow:clip;line-height:1.2}
        #v-standings .pts{font-size:15px;min-width:34px;text-align:right}
        #v-standings .pos{font-size:13px}

        /* Pilotos con chances */
        #parcheChances.panel{padding:16px 12px}
        #parcheChances .ct-card{padding:14px 12px 12px 16px}
        #parcheChances .ct-row{gap:10px}
        #parcheChances .ct-pos{font-size:22px;min-width:28px}
        #parcheChances .ct-info h3{font-size:16px;white-space:normal;overflow:visible;text-overflow:clip}
        #parcheChances .ct-pts b{font-size:20px}
        #parcheChances .ct-meta{font-size:12px;flex-direction:column;gap:4px}
        #parcheChances .ct-decided{padding:18px}
        #parcheChances .ct-decided b{font-size:24px}
      }
      @media (max-width:380px){
        #v-standings .srow{grid-template-columns:24px minmax(0,1fr) auto;gap:8px}
        #v-standings .who b{font-size:14px}
        .up .up-track .up-svg{width:80px;height:58px}
      }
    `;
    document.head.appendChild(st);
  }

  function getTeams() {
    const live = LIVE().teams;
    if (live && live.length) {
      return live.map(t => ({ id: t.id, name: t.name, color: t.color || '#e10600', pts: t.pts || 0 }));
    }
    if (typeof TEAMS === 'undefined') return [];
    const drv = getDrivers();
    return TEAMS.map(t => ({
      id: t.id, name: t.name, color: t.color,
      pts: drv.filter(d => d.team === t.id).reduce((a, d) => a + d.pts, 0)
    }));
  }

  function getDrivers() {
    const live = LIVE().drivers;
    if (live && live.length) {
      return live.map(d => ({
        id: d.id, name: d.name, team: d.team, teamName: d.teamName || '',
        pts: d.basePts || 0, code: d.code || '', num: d.num || ''
      }));
    }
    if (typeof DRIVERS === 'undefined') return [];
    return DRIVERS.map(d => {
      const t = (typeof TEAMS !== 'undefined' ? TEAMS : []).find(x => x.id === d.team) || {};
      return { id: d.id, name: d.name, team: d.team, teamName: t.name || '', pts: d.basePts || 0, code: '', num: '' };
    });
  }

  function getRaces() {
    const cal = LIVE().calendar;
    const src = cal && cal.length ? cal : (typeof CALENDAR !== 'undefined' ? CALENDAR : []);
    return src.map(r => ({
      id: r.id,
      round: r.round || r.r,
      name: r.name,
      date: r.dateLabel || r.date || '',
      place: r.place || r.circuit || '',
      circuit: r.circuit || '',
      circuitId: r.circuitId || null,
      lat: r.lat,
      lon: r.lon,
      flag: r.flag || '',
      sprint: !!r.sprint,
      done: !!r.done,
      sessions: r.sessions || []
    }));
  }

  function logoSrc(teamName) {
    if (typeof a0_0x415557 !== 'function') return '';
    const f = a0_0x415557(teamName);
    return f && f.length ? 'Fotos/' + f[0] : '';
  }

  function helmSrc(d) {
    if (typeof a0_0x519b69 === 'undefined') return '';
    const f = a0_0x519b69[d.id] || a0_0x519b69[sinAcentos(d.name.split(' ').pop())];
    return f ? 'Fotos/' + f : '';
  }

  const imgTag = (src, cls) => src
    ? `<img class="${cls}" src="${esc(src)}" alt="" loading="lazy" onerror="this.style.display='none'">`
    : '';

  function renderDrivers() {
    const grid = $('#drvGrid');
    const tab = $('#drvTabs .chip.on');
    if (!grid || (tab && tab.dataset.dt !== 'act')) return;
    if (grid.querySelector('.dcard')) return;
    const teams = getTeams();
    const list = getDrivers().sort((a, b) => b.pts - a.pts || a.name.localeCompare(b.name));
    CARDS.drv = list;
    grid.innerHTML = list.map((d, i) => {
      const col = (teams.find(t => t.id === d.team) || {}).color || '#e10600';
      return `
        <article class="glass dcard parche-card" data-k="drv" data-i="${i}" style="--c:${col}">
          <div class="dc-hel">${imgTag(helmSrc(d), 'helmet-img')}</div>
          <div class="dhead">
            <span class="dnum">${pad(i + 1)}</span>
            <span class="dcode">${esc(d.code || d.id.slice(0, 3).toUpperCase())}</span>
          </div>
          <h3>${esc(d.name)}</h3>
          <div class="dteam">${esc(d.teamName)}</div>
          <div class="dfoot"><span>${d.pts} pts</span><span>Ver ficha →</span></div>
        </article>`;
    }).join('');
  }

  function renderTeams() {
    const grid = $('#teamGrid');
    const tab = $('#teamTabs .chip.on');
    if (!grid || (tab && tab.dataset.tt !== 'act')) return;
    if (grid.querySelector('.dcard')) return;
    const list = getTeams().sort((a, b) => b.pts - a.pts);
    CARDS.team = list;
    grid.innerHTML = list.map((t, i) => {
      const src = logoSrc(t.name);
      return `
        <article class="glass dcard parche-card" data-k="team" data-i="${i}" style="--c:${t.color}">
          <div class="dc-hel team-hel">
            ${src ? imgTag(src, 'team-logo') : `<span class="tc-name-only">${esc(t.name)}</span>`}
          </div>
          <div class="dhead"><span class="dnum">${pad(i + 1)}</span></div>
          <h3>${esc(t.name)}</h3>
          <div class="dfoot"><span>${t.pts} pts</span><span>Ver ficha →</span></div>
        </article>`;
    }).join('');
  }

  function quitarMensajesAPI() {
    document.querySelectorAll('#drvStatus, #teamStatus, #drvTable, #teamTable, #drvGrid, #teamGrid, #circGrid').forEach(el => {
      if (MSG_API.test(el.textContent || '')) {
        el.querySelectorAll('*').forEach(n => { if (MSG_API.test(n.textContent || '') && n.children.length === 0) n.remove(); });
        if (MSG_API.test(el.textContent || '')) el.textContent = '';
      }
    });
    document.querySelectorAll('p.muted, .muted, .box p').forEach(p => {
      if (MSG_API.test(p.textContent || '')) p.remove();
    });
  }

  function avisoHTML(id) {
    return `
      <div class="glass panel parche-aviso" style="grid-column:1/-1">
        <h3>La historia todavía no cargó</h3>
        <p class="muted" style="font-size:14px;margin:8px 0 14px">
          Esta lista reúne datos desde 1950, así que tarda más en el celular o con conexión lenta.
          Si no aparece en un rato, tocá Recargar.
        </p>
        <button class="btn" type="button" data-parche-recargar="${id}">Recargar</button>
      </div>`;
  }

  function checkHistoryLoad() {
    const checks = [
      { grid: '#drvGrid', tabSel: '#drvTabs .chip.on', tabAttr: 'dt', key: 'drv' },
      { grid: '#teamGrid', tabSel: '#teamTabs .chip.on', tabAttr: 'tt', key: 'team' },
      { grid: '#circGrid', tabSel: '#circTabs .chip.on', tabAttr: 'circTab', key: 'circ' }
    ];
    checks.forEach(c => {
      const grid = $(c.grid);
      const tab = $(c.tabSel);
      if (!grid || !tab || tab.dataset[c.tabAttr] !== 'hist') { waitCount[c.key] = 0; return; }
      if (grid.querySelector('.parche-aviso')) return;
      if (grid.children.length > 0) { waitCount[c.key] = 0; return; }
      waitCount[c.key]++;
      if (waitCount[c.key] < WAIT_TICKS) return;
      grid.innerHTML = avisoHTML(c.key);
    });
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('[data-parche-recargar]');
    if (b) location.reload();
  });

  /* ---------- Circuitos vigentes ----------
     Se usan las tarjetas y la ficha completas de app.js (las mismas que
     "Historial de circuitos"). Solo se asegura que se rendericen si la
     cuadrícula quedó vacía. */
  function ensureCircuits() {
    const grid = $('#circGrid');
    if (!grid || grid.children.length) return;
    if (typeof a0_0x50272c !== 'function') return;
    const d = LIVE();
    if (!d.calendar || !d.calendar.length) return;
    if (typeof a0_0x4722c6 !== 'undefined' && a0_0x4722c6.tab !== 'vig') return;
    a0_0x50272c();
  }

  /* ---------- Historial: trazados repetidos ----------
     Si dos circuitos distintos terminan con exactamente el mismo dibujo,
     solo se queda con él el que está más cerca de ese trazado; el otro
     muestra "Trazado no disponible" en vez de uno falso. */
  function coordsDe(id) {
    const hist = (typeof a0_0x4722c6 !== 'undefined' && a0_0x4722c6.hist) || [];
    let c = hist.find(x => x.id === id);
    if (c && c.lat != null) return { lat: +c.lat, lon: +c.lon };
    const cal = LIVE().calendar || [];
    c = cal.find(x => x.circuitId === id);
    if (c && c.lat != null) return { lat: +c.lat, lon: +c.lon };
    return null;
  }

  function dedupeTracks() {
    const grid = $('#circGrid');
    if (!grid || typeof a0_0x7fb4d2 !== 'function') return;
    const cards = Array.from(grid.querySelectorAll('.circ[data-circ]'));
    if (cards.length < 2) return;

    const groups = {};
    cards.forEach(card => {
      const svg = card.querySelector('svg');
      if (!svg) return;
      const k = Array.from(svg.querySelectorAll('path')).map(p => p.getAttribute('d')).join('|');
      if (!k) return;
      (groups[k] = groups[k] || []).push({ card, svg });
    });

    Object.keys(groups).forEach(k => {
      const g = groups[k];
      if (g.length < 2) return;
      const meta = g.map(x => {
        const id = x.card.dataset.circ;
        const base = coordsDe(id);
        if (!base) return null;
        const pos = corregirPos({ circuitId: id, lat: base.lat, lon: base.lon });
        const entry = a0_0x7fb4d2(pos.lat, pos.lon);
        if (!entry) return null;
        const kx = Math.cos(pos.lat * Math.PI / 180);
        const dist = Math.hypot((entry.lon - pos.lon) * 111 * kx, (entry.lat - pos.lat) * 111);
        return { x, dist };
      });
      if (meta.some(m => !m)) return;
      meta.sort((a, b) => a.dist - b.dist);
      meta.slice(1).forEach(m => {
        const holder = m.x.svg.parentElement;
        if (holder && !holder.classList.contains('circ')) {
          holder.innerHTML = '<span class="trk-msg">Trazado no disponible</span>';
        }
      });
    });
  }

  /* ---------- Trazados en calendario y "Próximas" ----------
     Se calculan directo (sin copiar de las tarjetas de Circuitos), para que
     siempre coincidan con el circuito real de cada carrera. */

  const TRACK_CACHE = {};
  const TRACK_PEND = {};

  function cleanSvg(html) {
    const t = document.createElement('template');
    t.innerHTML = String(html || '').trim();
    const s = t.content.firstElementChild;
    if (!s || s.tagName.toLowerCase() !== 'svg') return '';
    s.removeAttribute('width');
    s.removeAttribute('height');
    s.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    return s.outerHTML;
  }

  function trackEntryFor(race) {
    const list = (typeof a0_0xcaf996 !== 'undefined') ? a0_0xcaf996 : [];
    if (esVegasActual(race.circuitId)) return list.find(c => c.id === VEGAS_ID) || null;
    if (esCaesarsId(race.circuitId)) return list.find(esCaesarsEntrada) || null;
    if (race.lat == null || race.lon == null || typeof a0_0x7fb4d2 !== 'function') return null;
    return a0_0x7fb4d2(race.lat, race.lon);
  }

  // Devuelve { key, svg } o null si todavía no está listo (se reintenta en el próximo ciclo).
  function trackFor(race) {
    if (!race || !race.circuitId) return null;
    const entry = trackEntryFor(race);
    if (!entry) return null;
    const key = entry.id;
    if (TRACK_CACHE[key]) return { key, svg: TRACK_CACHE[key] };

    if (typeof a0_0x4ca195 !== 'undefined' && a0_0x4ca195[key] && typeof a0_0x2b37b3 === 'function') {
      const svg = cleanSvg(a0_0x2b37b3(entry));
      if (svg) { TRACK_CACHE[key] = svg; return { key, svg }; }
    }

    if (!TRACK_PEND[key] && typeof a0_0x1f6c35 === 'function') {
      TRACK_PEND[key] = true;
      a0_0x1f6c35([key]).catch(() => {});
    }
    return null;
  }

  function addTracksToCalendar() {
    const grid = document.getElementById('calGrid');
    if (!grid) return;
    const races = getRaces();
    grid.querySelectorAll('[data-race]').forEach(card => {
      const race = races.find(r => r.id === card.dataset.race);
      const tr = trackFor(race);
      if (!tr) return;
      let wrap = card.querySelector('.cal-track');
      if (wrap && wrap.dataset.tk === tr.key) return;
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.className = 'cal-track';
        const foot = card.querySelector('.foot');
        if (foot) card.insertBefore(wrap, foot);
        else card.appendChild(wrap);
      }
      wrap.dataset.tk = tr.key;
      wrap.innerHTML = tr.svg;
    });
  }

  function addTracksToUpcoming() {
    const list = document.getElementById('upList');
    if (!list) return;
    const races = getRaces().filter(r => !r.done);
    list.querySelectorAll('[data-race]').forEach(item => {
      const race = races.find(r => r.id === item.dataset.race);
      const tr = trackFor(race);
      if (!tr) return;
      let wrap = item.querySelector('.up-track');
      if (wrap && wrap.dataset.tk === tr.key) return;
      if (!wrap) {
        wrap = document.createElement('div');
        wrap.className = 'up-track';
        item.appendChild(wrap);
      }
      wrap.dataset.tk = tr.key;
      wrap.innerHTML = `<div class="up-svg">${tr.svg}</div><small>${esc(race.circuit || race.place || '')}</small>`;
    });
  }

  /* ---------- Campeonato ---------- */

  function ensureGridLayout(two) {
    if (two.dataset.parche === '1') return;
    two.dataset.parche = '1';
    two.style.gridTemplateColumns = '1fr 1fr';
    two.style.alignItems = 'start';
  }

  function ensureRightColumn(two) {
    const teamTable = $('#teamTable');
    const teamPanel = teamTable ? teamTable.closest('.panel') : null;
    if (!teamPanel) return null;
    let right = $('#parcheRight');
    if (!right) {
      right = document.createElement('div');
      right.id = 'parcheRight';
      right.className = 'side';
    }
    if (right.parentElement !== two) two.appendChild(right);
    if (right.firstElementChild !== teamPanel) right.insertBefore(teamPanel, right.firstChild);
    return right;
  }

  function purgeStrayChances(right) {
    document.querySelectorAll('h3').forEach(h => {
      if (!TITULO_CHANCES.test(h.textContent || '')) return;
      const block = h.closest('.glass, .panel, .contend') || h.parentElement;
      if (!block) return;
      const isOurs = block.id === 'parcheChances' && block.parentElement === right;
      if (!isOurs) block.remove();
    });
  }

  function renderContenders() {
    const two = $('#v-standings .two');
    if (!two) return;
    ensureGridLayout(two);
    const right = ensureRightColumn(two);
    if (!right) return;
    purgeStrayChances(right);

    let box = $('#parcheChances');
    if (!box) {
      box = document.createElement('div');
      box.id = 'parcheChances';
      box.className = 'glass panel';
    }
    if (box.parentElement !== right || right.lastElementChild !== box) right.appendChild(box);

    const races = getRaces();
    const left = races.filter(r => !r.done);
    const pool = left.reduce((a, r) => a + 25 + (r.sprint ? 8 : 0), 0);
    const drivers = getDrivers().sort((a, b) => b.pts - a.pts);
    if (!drivers.length) return;

    const key = JSON.stringify([drivers.map(d => [d.id, d.pts]), pool]);
    if (box.dataset.key === key) return;
    box.dataset.key = key;

    const leader = drivers[0];
    const second = drivers[1] || { pts: 0 };
    const teams = getTeams();
    const head = `
      <h3>Pilotos con chances de salir campeones</h3>
      <p class="muted" style="font-size:14px;margin:-6px 0 14px">${left.length ? `Quedan ${left.length} carreras · ${pool} pts por repartir.` : 'Temporada finalizada.'}</p>`;

    if (!left.length || leader.pts - second.pts > pool) {
      box.innerHTML = head + `
        <div class="ct-decided">
          <span class="eyebrow">Campeón del mundo</span>
          <b>${esc(leader.name)}</b>
          <span class="muted">${leader.pts} pts</span>
        </div>`;
      return;
    }

    const max = leader.pts + pool || 1;
    const cands = drivers.filter(d => d.pts + pool >= leader.pts);
    const cards = cands.map((d, i) => {
      const col = (teams.find(t => t.id === d.team) || {}).color || '#e10600';
      const a = (d.pts / max) * 100;
      const b = Math.min((pool / max) * 100, 100 - a);
      const meta = i === 0
        ? '<span>Lidera el campeonato</span>'
        : `<span>A ${leader.pts - d.pts} pts del líder</span>`;
      return `
        <div class="ct-card glass" style="--c:${col}">
          <div class="ct-row">
            <span class="ct-pos">${i + 1}</span>
            <div class="ct-info">
              <h3>${esc(d.name)}</h3>
              <div class="dteam">${esc(d.teamName)}</div>
            </div>
            <div class="ct-pts"><b>${d.pts}</b><span>pts</span></div>
          </div>
          <div class="ct-bar">
            <i class="now" style="width:${a.toFixed(2)}%"></i>
            <i class="pot" style="left:${a.toFixed(2)}%;width:${b.toFixed(2)}%"></i>
          </div>
          <div class="ct-meta">${meta}<span class="ct-need">Máximo posible: ${d.pts + pool} pts</span></div>
        </div>`;
    }).join('');

    box.innerHTML = head + `<div class="ct-list">${cards}</div>`;
  }

  /* ---------- Modal y horarios ---------- */

  function openModal(html, extraClass) {
    const m = $('#modal'), b = $('#mBody');
    if (!m || !b) return;
    b.innerHTML = html;
    const panel = m.querySelector('.panel-m');
    if (panel) panel.className = 'glass panel-m' + (extraClass ? ' ' + extraClass : '');
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (panel) panel.scrollTop = 0;
  }

  const fmtDia = d => {
    const s = new Intl.DateTimeFormat('es-AR', { weekday: 'long', day: 'numeric', month: 'long', timeZone: TZ_AR }).format(d);
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  const fmtHora = d => new Intl.DateTimeFormat('es-AR', {
    hour: '2-digit', minute: '2-digit', hour12: false, timeZone: TZ_AR
  }).format(d) + ' hs';

  function etiquetaSesion(n) {
    const s = String(n || '').trim();
    if (/^clasificaci[oó]n$/i.test(s)) return 'Clasificación (Qualy)';
    return s;
  }

  function horariosHTML(race) {
    const ses = (race.sessions || []).slice().sort((a, b) => (Date.parse(a.when) || 0) - (Date.parse(b.when) || 0));
    if (!ses.length) return '<p class="muted" style="font-size:14px">Horarios no disponibles todavía.</p>';
    return ses.map(s => {
      const label = esc(etiquetaSesion(s.name));
      if (s.tbc || !s.when || isNaN(Date.parse(s.when))) {
        return `<div class="line"><span>${label}</span><strong>Por confirmar</strong></div>`;
      }
      const d = new Date(s.when);
      return `<div class="line"><span>${label}</span><strong>${esc(fmtDia(d))} · ${esc(fmtHora(d))}</strong></div>`;
    }).join('');
  }

  function openHorarios(race) {
    openModal(`
      <span class="eyebrow">Ronda ${pad(race.round)} · ${esc(race.flag)}</span>
      <h3 class="display m-title">${esc(race.name)}</h3>
      <div class="box">
        <h4>🕒 Horarios (hora de Argentina)</h4>
        ${horariosHTML(race)}
      </div>
      <div class="box" style="margin-top:18px">
        <div class="line"><span>Fechas</span><strong>${esc(race.date)}</strong></div>
        <div class="line"><span>Lugar</span><strong>${esc(race.place || '—')}</strong></div>
        <div class="line"><span>Formato</span><strong>${race.sprint ? 'Con Sprint' : 'Estándar'}</strong></div>
        <div class="line"><span>Estado</span><strong>Por correr</strong></div>
      </div>`);
  }

  document.addEventListener('click', e => {
    const c = e.target.closest('[data-race]');
    if (!c) return;
    const race = getRaces().find(r => r.id === c.dataset.race);
    if (!race || race.done) return;
    openHorarios(race);
  });

  document.addEventListener('click', e => {
    const c = e.target.closest('.parche-card');
    if (!c) return;
    const i = +c.dataset.i;
    const k = c.dataset.k;

    if (k === 'drv') {
      const d = CARDS.drv[i];
      if (!d) return;
      openModal(`
        <span class="eyebrow">Piloto · Temporada 2026</span>
        <h3 class="display m-title">${esc(d.name)}</h3>
        <div class="m-grid">
          <div class="stat"><span>Puntos 2026</span><strong>${d.pts}</strong></div>
          <div class="stat"><span>Posición</span><strong>${i + 1}º</strong></div>
          <div class="stat"><span>Escudería</span><strong>${esc(d.teamName || '—')}</strong></div>
          <div class="stat"><span>Número</span><strong>${esc(d.num || '—')}</strong></div>
        </div>`);
    }

    if (k === 'team') {
      const t = CARDS.team[i];
      if (!t) return;
      const drv = getDrivers().filter(d => d.team === t.id);
      const src = logoSrc(t.name);
      openModal(`
        <span class="eyebrow">Escudería · Temporada 2026</span>
        <h3 class="display m-title">${esc(t.name)}</h3>
        ${src ? `<div class="tc-modal-logo"><img class="team-logo big" src="${esc(src)}" alt=""></div>` : ''}
        <div class="m-grid">
          <div class="stat"><span>Puntos 2026</span><strong>${t.pts}</strong></div>
          <div class="stat"><span>Posición</span><strong>${i + 1}º</strong></div>
        </div>
        <div class="box" style="margin-top:18px">
          <h4>🏎️ Pilotos 2026</h4>
          ${drv.map(d => `<div class="line"><span>${esc(d.name)}</span><strong>${d.pts} pts</strong></div>`).join('') || '<p class="muted">Sin pilotos cargados.</p>'}
        </div>`);
    }
  });

  /* ---------- Botón "subir" ---------- */

  let topBtn = null;

  function ensureTopButton() {
    injectStyles();
    if (topBtn) return;
    topBtn = document.createElement('button');
    topBtn.className = 'pt-btn';
    topBtn.type = 'button';
    topBtn.setAttribute('aria-label', 'Subir');
    topBtn.title = 'Subir';
    topBtn.textContent = '↑';
    topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.body.appendChild(topBtn);
    window.addEventListener('scroll', syncTop, { passive: true });
  }

  function syncTop() {
    ensureTopButton();
    const modal = $('#modal');
    const open = modal && modal.classList.contains('open');
    topBtn.classList.toggle('show', !open && window.scrollY > 400);
  }

  function checkMotores() {
    document.querySelectorAll('img.motores-img').forEach(img => {
      if (img.dataset.chk) return;
      img.dataset.chk = '1';
      const fail = () => {
        const p = img.parentElement;
        if (!p || p.querySelector('.trk-msg')) return;
        img.style.display = 'none';
        p.insertAdjacentHTML('beforeend',
          '<span class="trk-msg">No se pudo cargar Fotos/motoristas.jpg. Revisá que el nombre y las mayúsculas del archivo coincidan.</span>');
      };
      img.addEventListener('error', fail);
      setTimeout(() => { if (img.complete && img.naturalWidth === 0) fail(); }, 4000);
    });
  }

  function tick() {
    try {
      quitarMensajesAPI();
      renderDrivers();
      renderTeams();
      ensureCircuits();
      dedupeTracks();
      renderContenders();
      addTracksToCalendar();
      addTracksToUpcoming();
      checkHistoryLoad();
      checkMotores();
    } catch (err) {
      console.warn('[parche fOnefan]', err);
    }
  }

  window.addEventListener('load', () => {
    ensureTopButton();
    tick();
    setInterval(tick, 2500);
    syncTop();
  });
})();