/* =====================================================
   parche.js · fOnefan
   Restaura, sin tocar app.js:
   - Pilotos, escuderías y circuitos (si la sección quedó vacía)
   - Columna derecha: Constructores arriba y, debajo, Pilotos con chances
   - Horarios en Argentina para carreras próximas
   - Fichas de circuitos (vigentes e históricos) coherentes con el calendario
   - Fichas de circuito acomodadas para celular
   - Trazado del circuito en las tarjetas de Calendario y en Próximas carreras
   - Reemplaza los mensajes "requieren conexión a la API"
   - Botón "subir" en la página (no dentro de las fichas)
   - Aviso si la lista histórica tarda o no carga
   - Aviso si no carga la foto de motoristas
   ===================================================== */
(function () {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const sinAcentos = s => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z]/g, '');
  const LIVE = () => (typeof a0_0x484245 !== 'undefined' && a0_0x484245) || {};
  const pad = n => String(n).padStart(2, '0');
  const TZ_AR = 'America/Argentina/Buenos_Aires';
  const TITULO_CHANCES = /pilotos con chances/i;
  const MSG_API = /requieren conexi[oó]n a la API/i;

  const CARDS = { drv: [], team: [], race: [] };
  const WAIT_TICKS = 3; // ~7,5 s con el intervalo de 2,5 s
  const waitCount = { drv: 0, team: 0, circ: 0 };

  /* ---------- Estilos propios ---------- */

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

      .parche-circ-ficha .m-title{font-size:clamp(28px,8vw,40px);line-height:1;word-break:break-word;margin:8px 0 18px}
      .parche-circ-ficha .box{padding:14px}
      .parche-circ-ficha .box h4{font-size:12px;margin-bottom:8px}
      .parche-circ-ficha .line{display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:10px 0}
      .parche-circ-ficha .line span{font-size:13px;color:var(--muted)}
      .parche-circ-ficha .line strong{font-size:15px;white-space:normal;text-align:left;overflow-wrap:anywhere}

      /* Trazado dentro de las tarjetas de carreras próximas */
      .cal-track{display:flex;justify-content:center;align-items:center;margin:10px 0 2px;height:110px}
      .cal-track svg{width:100%;height:100%;max-width:180px;overflow:visible}
      .cal-track path{fill:none !important;stroke:var(--red);stroke-width:2.2;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}
      .up-track{display:flex;align-items:center;gap:12px;margin-top:8px}
      .up-track .up-svg{width:72px;height:56px;flex-shrink:0}
      .up-track .up-svg svg{width:100%;height:100%;overflow:visible}
      .up-track .up-svg path{fill:none !important;stroke:var(--red);stroke-width:2.2;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}
      .up-track small{color:var(--muted);font-size:12px}

      @media (max-width:640px){
        .modal .panel-m{padding:20px 16px;max-height:92vh}
        .parche-circ-ficha .m-title{font-size:30px}
        .parche-circ-ficha .x{top:12px;right:12px}
        .parche-circ-ficha .line strong{font-size:14px}
        .cal-track{height:90px}
        .up-track .up-svg{width:60px;height:46px}
      }
    `;
    document.head.appendChild(st);
  }

  /* ---------- Datos ---------- */

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
      flag: r.flag || '',
      sprint: !!r.sprint,
      done: !!r.done,
      sessions: r.sessions || []
    }));
  }

  /* ---------- Imágenes ---------- */

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

  /* ---------- Render de secciones vacías ---------- */

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

  /* ---------- Mensajes "requieren conexión a la API": se quitan ---------- */

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

  /* ---------- Aviso si la lista histórica tarda o no carga ---------- */

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

  /* ---------- Circuitos ---------- */

  function renderCircuits() {
    const grid = $('#circGrid');
    if (!grid || grid.querySelector('.circ')) return;
    const races = getRaces();
    CARDS.race = races;
    grid.innerHTML = races.map((r, i) => `
      <div class="glass circ parche-card" data-k="race" data-i="${i}">
        <span class="eyebrow">Ronda ${pad(r.round)} · ${esc(r.flag)}</span>
        <h3>${esc(r.name)}</h3>
        <div class="muted" style="font-size:14px">${esc(r.place)}</div>
        <div class="foot">
          <span class="meta">${esc(r.date)}</span>
          <span class="ficha">${r.done ? 'Finalizada' : (r.sprint ? 'Con Sprint' : 'Ver ficha')} <i>→</i></span>
        </div>
      </div>`).join('');
  }

  function openCircuitVigente(circId) {
    const races = getRaces().filter(r => r.circuitId === circId).sort((a, b) => a.round - b.round);
    if (!races.length) return;
    const first = races[0];
    const next = races.find(r => !r.done);
    const estado = next ? `Vigente · próxima ronda ${pad(next.round)}` : 'Vigente · temporada 2026 disputada';

    openModal(`
      <span class="eyebrow">Circuito · Vigente 2026</span>
      <h3 class="display m-title">${esc(first.circuit || first.name)}</h3>
      <div class="box">
        <div class="line"><span>Lugar</span><strong>${esc(first.place || '—')}</strong></div>
        <div class="line"><span>Estado</span><strong>${esc(estado)}</strong></div>
      </div>
      <div class="box" style="margin-top:18px">
        <h4>🏁 Carreras 2026 en este circuito</h4>
        ${races.map(r => `
          <div class="line">
            <span>Ronda ${pad(r.round)} · ${esc(r.name)}</span>
            <strong>${esc(r.date)}${r.done ? ' · Finalizada' : ''}</strong>
          </div>`).join('')}
      </div>`, 'parche-circ-ficha');
  }

  document.addEventListener('click', e => {
    const c = e.target.closest('[data-circ]');
    if (!c) return;
    const id = c.dataset.circ;
    const vigente = getRaces().some(r => r.circuitId === id);
    if (!vigente) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    openCircuitVigente(id);
  }, true);

  /* ---------- Trazado en las tarjetas de carreras (Calendario e Inicio) ---------- */

  // Copia el SVG del trazado desde la pestaña Circuitos (ya dibujada)
  function trackSvgFor(circuitId) {
    if (!circuitId) return '';
    const el = Array.from(document.querySelectorAll('#circGrid [data-circ]'))
      .find(x => x.dataset.circ === circuitId);
    const svg = el ? el.querySelector('svg') : null;
    if (!svg) return '';
    const copy = svg.cloneNode(true);
    copy.removeAttribute('width');
    copy.removeAttribute('height');
    copy.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    return copy.outerHTML;
  }

  function addTracksToCalendar() {
    const grid = document.getElementById('calGrid');
    if (!grid) return;
    const races = getRaces();
    grid.querySelectorAll('[data-race]').forEach(card => {
      if (card.querySelector('.cal-track')) return;
      const race = races.find(r => r.id === card.dataset.race);
      if (!race || !race.circuitId) return;
      const svg = trackSvgFor(race.circuitId);
      if (!svg) return;
      const wrap = document.createElement('div');
      wrap.className = 'cal-track';
      wrap.innerHTML = svg;
      // Va después del número de ronda y el nombre, antes del pie de la tarjeta
      const foot = card.querySelector('.foot');
      if (foot) card.insertBefore(wrap, foot);
      else card.appendChild(wrap);
    });
  }

  function addTracksToUpcoming() {
    const list = document.getElementById('upList');
    if (!list) return;
    const races = getRaces().filter(r => !r.done);
    list.querySelectorAll('[data-race]').forEach(item => {
      if (item.querySelector('.up-track')) return;
      const race = races.find(r => r.id === item.dataset.race);
      if (!race || !race.circuitId) return;
      const svg = trackSvgFor(race.circuitId);
      if (!svg) return;
      const wrap = document.createElement('div');
      wrap.className = 'up-track';
      wrap.innerHTML = `<div class="up-svg">${svg}</div><small>${esc(race.circuit || race.place || '')}</small>`;
      item.appendChild(wrap);
    });
  }

  /* ---------- Columna derecha: Constructores arriba, Pilotos con chances debajo ---------- */

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

  /* ---------- Fichas ---------- */

  function openModal(html, extraClass) {
    const m = $('#modal'), b = $('#mBody');
    if (!m || !b) return;
    b.innerHTML = html;
    const panel = m.querySelector('.panel-m');
    if (panel) {
      panel.className = 'glass panel-m' + (extraClass ? ' ' + extraClass : '');
    }
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
    const ses = (race.sessions || [])
      .slice()
      .sort((a, b) => (Date.parse(a.when) || 0) - (Date.parse(b.when) || 0));

    if (!ses.length) {
      return '<p class="muted" style="font-size:14px">Horarios no disponibles todavía.</p>';
    }

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

    if (k === 'race') {
      const r = CARDS.race[i];
      if (!r) return;
      if (!r.done) { openHorarios(r); return; }
      openModal(`
        <span class="eyebrow">Ronda ${pad(r.round)} · ${esc(r.flag)}</span>
        <h3 class="display m-title">${esc(r.name)}</h3>
        <div class="box">
          <div class="line"><span>Fechas</span><strong>${esc(r.date)}</strong></div>
          <div class="line"><span>Lugar</span><strong>${esc(r.place || '—')}</strong></div>
          <div class="line"><span>Formato</span><strong>${r.sprint ? 'Con Sprint' : 'Estándar'}</strong></div>
          <div class="line"><span>Estado</span><strong>Finalizada</strong></div>
        </div>`);
    }
  });

  /* ---------- Botón "subir" (solo en la página) ---------- */

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

  /* ---------- Foto de motoristas: aviso si no carga ---------- */

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

  /* ---------- Bucle ---------- */

  function tick() {
    try {
      quitarMensajesAPI();
      renderDrivers();
      renderTeams();
      renderCircuits();
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