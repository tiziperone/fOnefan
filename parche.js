/* =====================================================
   parche.js · fOnefan
   - Caché de la API Jolpi (historia más rápida desde la 2.ª carga)
   - Trazado correcto de Las Vegas (vigente) y Caesars Palace (histórico)
   - Vista previa de trazados en "Próximas" y calendario calculada directo
   - Circuitos vigentes: usa las tarjetas y la ficha completas de app.js
   - Trazado de Las Vegas corregido en la tarjeta de circuitos vigentes
   - Celulares: sin saltos en tarjetas, "Próximas" y "Tabla de posiciones"
   - Modal de horarios: el texto ya no se sale de la tarjeta en celulares
   - Salón de la Fama de escuderías: títulos de constructores
   - Trazados contenidos dentro de su caja (sin encimarse con las tarjetas)
   - Info: sección "Números de pilotos"
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

  /* ---------- Trazados de Las Vegas y Caesars Palace ---------- */

  const VEGAS_ID = 'las-vegas-1';
  const VEGAS_ACTUAL = { lat: 36.175, lon: -115.1364 };   // entrada las-vegas-1
  const CAESARS = { lat: 36.1169, lon: -115.175 };         // entrada de Caesars Palace

  const esCaesarsId = id => /caesar/i.test(String(id || ''));
  const esVegasLike = id => /vegas/i.test(String(id || '')) && !esCaesarsId(id);
  const esCaesarsEntrada = c => c && Math.abs(c.lat - CAESARS.lat) < 0.001 && Math.abs(c.lon - CAESARS.lon) < 0.001;

  function enCalendario(id) {
    const cal = (typeof a0_0x484245 !== 'undefined' && a0_0x484245.calendar) || [];
    return cal.some(r => r.circuitId === id);
  }

  function corregirPos(c) {
    if (!c) return c;
    if (esCaesarsId(c.circuitId)) return Object.assign({}, c, CAESARS);
    if (esVegasLike(c.circuitId)) {
      return Object.assign({}, c, enCalendario(c.circuitId) ? VEGAS_ACTUAL : CAESARS);
    }
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
  const WAIT_TICKS = 1;
  const waitCount = { drv: 0, team: 0, circ: 0 };

  const NUM_MAP_2026 = {
    antonelli: '12', russell: '63', hamilton: '44', leclerc: '16',
    norris: '1', verstappen: '3', piastri: '81', hadjar: '6',
    lawson: '30', lindblad: '41', gasly: '10', colapinto: '43',
    bearman: '87', ocon: '31', bortoleto: '5', hulkenberg: '27',
    albon: '23', sainz: '55', alonso: '14', stroll: '18',
    bottas: '77', perez: '11'
  };

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

      /* ===== Circuitos: grilla estable ===== */
      .circs{grid-template-columns:repeat(auto-fill,minmax(min(320px,100%),1fr))}
      #circGrid{overflow-anchor:none}
      .circ{-webkit-tap-highlight-color:transparent;touch-action:manipulation;contain:layout paint}

      /* ===== Táctil: sin saltos al tocar o desplazar ===== */
      @media (hover:none),(pointer:coarse){
        .race:hover,.circ:hover,.dcard:hover,.hcard:hover,.dc:hover,.info-card:hover,.tyre-card:hover,
        .flag-card:hover,.term-card:hover,.part-card:hover,.ct-card:hover{transform:none !important}
        .circ,.race,.dcard,.hcard,.dc{transition:border-color .2s ease}
        .circ:hover .ficha{background:rgba(225,6,0,.12);border-color:rgba(225,6,0,.35)}
        .circ:hover .ficha i{transform:none}
        .circ:hover .trk path,.circ:hover path{stroke:#8a8a9c}
        .dcard:hover .helmet-img,.dcard:hover .team-logo,.dcard:hover .helmet,.dcard:hover .car-front{transform:none}
        .circ:active,.race:active,.dcard:active{border-color:rgba(225,6,0,.5)}
      }

      /* ===== Modal: nada se sale de la tarjeta (horarios, fichas, etc.) ===== */
      #modal .panel-m{overflow-x:hidden}
      #modal .line{flex-wrap:wrap;align-items:baseline;row-gap:2px}
      #modal .line > span{flex:0 0 auto;max-width:100%}
      #modal .line > strong{white-space:normal;overflow-wrap:anywhere;min-width:0;margin-left:auto;text-align:right}

      /* ===== Salón de la Fama de escuderías ===== */
      .hof-card{background:var(--card,rgba(18,18,28,.86));border:1px solid var(--line,rgba(255,255,255,.08));
        border-radius:22px;padding:22px;min-width:0}
      .hof-top{display:flex;align-items:baseline;gap:10px}
      .hof-num{font-family:var(--f-disp,'Titillium Web',sans-serif);font-weight:900;font-style:italic;font-size:56px;
        line-height:1;color:var(--red,#e10600);font-variant-numeric:tabular-nums}
      .hof-lbl{font-family:var(--f-nav,'Barlow Condensed',sans-serif);font-size:13px;letter-spacing:.16em;
        text-transform:uppercase;color:var(--muted,#8b8b99);font-weight:700}
      .hof-name{font-family:'Titillium Web',sans-serif;font-size:22px;font-weight:700;line-height:1.15;margin-top:12px;
        overflow-wrap:anywhere;color:var(--text,#f4f4f7)}
      .hof-pais{color:var(--muted,#8b8b99);font-size:14px;margin-top:3px;font-weight:500}
      .hof-yrs{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
      .hof-yr{font-weight:600;font-size:13px;padding:5px 11px;border-radius:999px;background:rgba(255,255,255,.05);
        border:1px solid var(--line,rgba(255,255,255,.08));color:var(--text,#f4f4f7);font-variant-numeric:tabular-nums}

      /* Trazados en calendario */
      .cal-track{display:flex;justify-content:center;align-items:center;margin:10px 0 2px;height:110px}
      .cal-track svg{width:100%;height:100%;max-width:180px;overflow:visible}
      .cal-track path{fill:none !important;stroke:var(--red);stroke-width:2.2;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}

      /* ===== Próximas carreras (Diseño horizontal estilizado) ===== */
      .up{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px 16px;padding:12px 18px}
      .up .up-track{display:flex;align-items:center;gap:8px;margin:0;padding:0;background:none;border:none}
      .up .up-track .up-svg{width:46px;height:32px;flex-shrink:0;display:grid;place-items:center}
      .up .up-track .up-svg svg{width:100%;height:100%;overflow:visible}
      .up .up-track .up-svg path{fill:none !important;stroke:var(--red,#e10600);stroke-width:2.2;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}
      .up .up-track small{display:none}

      /* ===== Campeonato: pequeños retoques generales ===== */
      #v-standings .srow:nth-child(-n+3) .pos{color:var(--red)}

      /* ===== Info · Números de pilotos ===== */
      .info-grid--numkeys,.info-grid--numsteps,.info-grid--numgrid,.info-grid--numfaq{grid-template-columns:1fr}

      .num-keys-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-top:14px}
      .num-key{border:1px solid var(--line);border-radius:16px;padding:16px;background:rgba(0,0,0,.3);display:grid;gap:6px;align-content:start}
      .num-key b{font-family:var(--f-disp);font-weight:900;font-style:italic;font-size:44px;line-height:1;font-variant-numeric:tabular-nums}
      .num-key span{font-family:var(--f-nav);font-size:12px;letter-spacing:.18em;text-transform:uppercase;font-weight:800}
      .num-key p{font-size:14px;line-height:1.55;color:#c4c4d0;margin:0}
      .num-key.k-gold{border-color:rgba(255,209,102,.4)}
      .num-key.k-gold b,.num-key.k-gold span{color:#ffd166}
      .num-key.k-red{border-color:rgba(225,6,0,.45)}
      .num-key.k-red b,.num-key.k-red span{color:var(--red)}
      .num-key.k-dark b{color:#8b8b99;text-decoration:line-through;text-decoration-thickness:3px}
      .num-key.k-dark span{color:#8b8b99}

      .num-steps-list{list-style:none;counter-reset:ns;display:grid;gap:14px;margin:16px 0 0;padding:0}
      .num-steps-list li{counter-increment:ns;display:grid;grid-template-columns:36px minmax(0,1fr);gap:12px;align-items:start}
      .num-steps-list li::before{content:counter(ns);width:36px;height:36px;border-radius:50%;background:var(--red);color:#fff;
        display:grid;place-items:center;font-family:var(--f-disp);font-weight:900;font-size:16px}
      .num-steps-list strong{display:block;font-size:16px;margin-bottom:2px}
      .num-steps-list span{font-size:14.5px;line-height:1.6;color:#c4c4d0}

      .num-card{padding:20px}
      .num-legend{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 4px}
      .num-f{appearance:none;cursor:pointer;display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);
        background:rgba(255,255,255,.04);color:#d8d8e2;padding:8px 14px;border-radius:999px;
        font-family:var(--f-nav);font-weight:700;font-size:13px;letter-spacing:.08em;text-transform:uppercase}
      .num-f.on{border-color:var(--red);background:rgba(225,6,0,.15);color:#fff}
      .num-f i{width:10px;height:10px;border-radius:50%;display:inline-block}
      .num-f b{font-family:'Orbitron',sans-serif;font-size:12px}
      .num-detail{min-height:52px;margin:12px 0;padding:12px 14px;border-radius:12px;background:rgba(0,0,0,.35);
        border:1px solid var(--line);font-size:14.5px;line-height:1.5;color:#d6d6e0}
      .num-detail[data-ns="use"]{border-color:rgba(225,6,0,.55)}
      .num-detail[data-ns="champ"]{border-color:rgba(255,209,102,.6)}
      .num-detail[data-ns="res"]{border-color:rgba(60,120,255,.55)}

      .num-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(52px,1fr));gap:6px}
      .num-cell{appearance:none;cursor:pointer;display:grid;gap:2px;justify-items:center;padding:8px 0 6px;border-radius:10px;
        border:1px solid var(--line);background:rgba(255,255,255,.03);color:#c0c0cb;
        font-family:'Orbitron',sans-serif;transition:opacity .2s ease,border-color .2s ease;-webkit-tap-highlight-color:transparent}
      .num-cell b{font-size:15px;font-variant-numeric:tabular-nums}
      .num-cell small{font-family:var(--f-nav);font-size:10px;letter-spacing:.08em;min-height:12px;font-weight:700}
      .num-cell[data-ns="use"]{background:rgba(225,6,0,.16);border-color:rgba(225,6,0,.55);color:#fff}
      .num-cell[data-ns="champ"]{background:rgba(255,209,102,.16);border-color:rgba(255,209,102,.6);color:#ffd166}
      .num-cell[data-ns="res"]{background:rgba(60,120,255,.14);border-color:rgba(60,120,255,.5);color:#8fb4ff}
      .num-cell[data-ns="ret"]{background:repeating-linear-gradient(45deg,rgba(255,255,255,.07) 0 4px,transparent 4px 8px);color:#6f6f7d}
      .num-cell[data-ns="ret"] b{text-decoration:line-through}
      .num-cell.sel{outline:2px solid #fff;outline-offset:1px}
      .num-grid[data-f="use"] .num-cell:not([data-ns="use"]):not([data-ns="champ"]),
      .num-grid[data-f="res"] .num-cell:not([data-ns="res"]),
      .num-grid[data-f="free"] .num-cell:not([data-ns="free"]),
      .num-grid[data-f="ret"] .num-cell:not([data-ns="ret"]){opacity:.18}
      .num-note{font-size:12.5px;color:#8b8b99;margin-top:12px;line-height:1.55}

      .info-card.num-faq{padding:0}
      .num-faq summary{list-style:none;cursor:pointer;padding:16px 48px 16px 20px;position:relative;
        font-family:var(--f-disp);font-weight:900;font-style:italic;font-size:19px;line-height:1.2}
      .num-faq summary::-webkit-details-marker{display:none}
      .num-faq summary::after{content:"+";position:absolute;right:18px;top:50%;transform:translateY(-50%);font-size:26px;color:var(--red);font-style:normal}
      .num-faq[open] summary::after{content:"2013"}
      .num-faq .info-text{margin:0;padding:0 20px 18px}

      @media (max-width:640px){
        .up{padding:10px 14px;gap:10px}
        .up .up-track .up-svg{width:36px;height:26px}
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

        /* Info · Números */
        .num-card{padding:16px 12px}
        .num-grid{grid-template-columns:repeat(5,minmax(0,1fr));gap:5px}
        .num-faq summary{font-size:17px;padding:14px 44px 14px 16px}
        .num-faq .info-text{padding:0 16px 16px}

        /* Salón de la Fama */
        .hof-card{padding:18px}
        .hof-num{font-size:48px}
        .hof-name{font-size:20px}
      }
      @media (max-width:380px){
        #v-standings .srow{grid-template-columns:24px minmax(0,1fr) auto;gap:8px}
        #v-standings .who b{font-size:14px}
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
        pts: d.basePts != null ? d.basePts : (d.pts || 0), code: d.code || '', num: d.num || d.driver_number || ''
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
    const teams = getTeams();
    const list = getDrivers().sort((a, b) => b.pts - a.pts || a.name.localeCompare(b.name));
    CARDS.drv = list;
    grid.innerHTML = list.map((d, i) => {
      const col = (teams.find(t => t.id === d.team) || {}).color || '#e10600';
      const realNum = d.num || NUM_MAP_2026[d.id] || pad(i + 1);
      return `
        <article class="glass dcard parche-card" data-k="drv" data-i="${i}" data-drv-name="${esc(d.name)}" style="--c:${col}">
          <div class="dc-hel">${imgTag(helmSrc(d), 'helmet-img')}</div>
          <div class="dhead">
            <span class="dnum">${pad(realNum)}</span>
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
    const list = getTeams().sort((a, b) => b.pts - a.pts);
    CARDS.team = list;
    grid.innerHTML = list.map((t, i) => {
      const src = logoSrc(t.name);
      return `
        <article class="glass dcard parche-card" data-k="team" data-i="${i}" data-team-name="${esc(t.name)}" style="--c:${t.color}">
          <div class="dc-hel team-hel">
            ${src ? imgTag(src, 'team-logo') : `<span class="tc-name-only">${esc(t.name)}</span>`}
          </div>
          <div class="dhead"><span class="dnum">${pad(i + 1)}</span></div>
          <h3>${esc(t.name)}</h3>
          <div class="dfoot"><span>${t.pts} pts</span><span>Ver ficha →</span></div>
        </article>`;
    }).join('');
  }

  /* ---------- Salón de la Fama de escuderías ---------- */

  const HOF_CAMPEONES = [
    [1958,'Vanwall'],[1959,'Cooper'],[1960,'Cooper'],[1961,'Ferrari'],[1962,'BRM'],
    [1963,'Lotus'],[1964,'Ferrari'],[1965,'Lotus'],[1966,'Brabham'],[1967,'Brabham'],
    [1968,'Lotus'],[1969,'Matra'],[1970,'Lotus'],[1971,'Tyrrell'],[1972,'Lotus'],
    [1973,'Lotus'],[1974,'McLaren'],[1975,'Ferrari'],[1976,'Ferrari'],[1977,'Ferrari'],
    [1978,'Lotus'],[1979,'Ferrari'],[1980,'Williams'],[1981,'Williams'],[1982,'Ferrari'],
    [1983,'Ferrari'],[1984,'McLaren'],[1985,'McLaren'],[1986,'Williams'],[1987,'Williams'],
    [1988,'McLaren'],[1989,'McLaren'],[1990,'McLaren'],[1991,'McLaren'],[1992,'Williams'],
    [1993,'Williams'],[1994,'Williams'],[1995,'Benetton'],[1996,'Williams'],[1997,'Williams'],
    [1998,'McLaren'],[1999,'Ferrari'],[2000,'Ferrari'],[2001,'Ferrari'],[2002,'Ferrari'],
    [2003,'Ferrari'],[2004,'Ferrari'],[2005,'Renault'],[2006,'Renault'],[2007,'Ferrari'],
    [2008,'Ferrari'],[2009,'Brawn GP'],[2010,'Red Bull'],[2011,'Red Bull'],[2012,'Red Bull'],
    [2013,'Red Bull'],[2014,'Mercedes'],[2015,'Mercedes'],[2016,'Mercedes'],[2017,'Mercedes'],
    [2018,'Mercedes'],[2019,'Mercedes'],[2020,'Mercedes'],[2021,'Mercedes'],[2022,'Red Bull'],
    [2023,'Red Bull'],[2024,'McLaren'],[2025,'McLaren']
  ];

  const HOF_META = {
    'Ferrari':  { label: 'Ferrari',          pais: 'Italia' },
    'McLaren':  { label: 'McLaren',          pais: 'Reino Unido' },
    'Williams': { label: 'Williams',         pais: 'Reino Unido' },
    'Mercedes': { label: 'Mercedes',         pais: 'Alemania' },
    'Lotus':    { label: 'Lotus',            pais: 'Reino Unido' },
    'Red Bull': { label: 'Red Bull Racing',  pais: 'Austria' },
    'Brabham':  { label: 'Brabham',          pais: 'Reino Unido' },
    'Cooper':   { label: 'Cooper',           pais: 'Reino Unido' },
    'Renault':  { label: 'Renault / Alpine', pais: 'Francia' },
    'Benetton': { label: 'Benetton',         pais: 'Italia' },
    'Brawn GP': { label: 'Brawn GP',         pais: 'Reino Unido' },
    'BRM':      { label: 'BRM',              pais: 'Reino Unido' },
    'Vanwall':  { label: 'Vanwall',          pais: 'Reino Unido' },
    'Matra':    { label: 'Matra',            pais: 'Francia' },
    'Tyrrell':  { label: 'Tyrrell',          pais: 'Reino Unido' }
  };

  function buildHof() {
    const grupos = {};
    HOF_CAMPEONES.forEach(([anio, eq]) => { (grupos[eq] = grupos[eq] || []).push(anio); });

    const lista = Object.keys(grupos).map(eq => {
      const anios = grupos[eq].slice().sort((a, b) => b - a);
      return { eq, anios, n: anios.length, primero: Math.min.apply(null, anios) };
    }).sort((a, b) => b.n - a.n || a.primero - b.primero);

    const sub = lista.length + ' escuderías campeonas · ' + HOF_CAMPEONES.length +
                ' campeonatos de constructores (1958–2025)';

    const html = lista.map(e => {
      const m = HOF_META[e.eq] || { label: e.eq, pais: '' };
      return '<article class="hof-card">' +
        '<div class="hof-top"><span class="hof-num">' + e.n + '</span>' +
        '<span class="hof-lbl">' + (e.n === 1 ? 'título' : 'títulos') + '</span></div>' +
        '<div class="hof-name">' + esc(m.label) + '</div>' +
        '<div class="hof-pais">' + esc(m.pais) + '</div>' +
        '<div class="hof-yrs">' + e.anios.map(y => '<span class="hof-yr">' + y + '</span>').join('') + '</div>' +
        '</article>';
    }).join('');

    return { sub, html };
  }

  function hofActivo() {
    const tab = $('#teamTabs .chip.on');
    return !!tab && tab.dataset.tt === 'hof';
  }

  function ensureHof() {
    const grid = $('#teamGrid');
    const status = $('#teamStatus');
    if (!grid || !hofActivo()) return;
    if (grid.dataset.hofOk === '1' && grid.querySelector('.hof-card')) return;

    injectStyles();
    const d = buildHof();
    grid.innerHTML = d.html;
    grid.dataset.hofOk = '1';
    if (status) status.textContent = d.sub;
  }

  function setChipsHof() {
    document.querySelectorAll('#teamTabs .chip').forEach(c => {
      c.classList.toggle('on', c.dataset.tt === 'hof');
    });
    const tools = $('#teamTools');
    if (tools) tools.style.display = 'none';
  }

  function watchHof() {
    window.addEventListener('click', e => {
      const chip = e.target.closest && e.target.closest('#teamTabs .chip');
      if (!chip || chip.dataset.tt !== 'hof') return;
      e.stopImmediatePropagation();
      e.stopPropagation();
      setChipsHof();
      const g = $('#teamGrid');
      if (g) g.dataset.hofOk = '';
      ensureHof();
    }, true);

    const grid = $('#teamGrid');
    if (grid && !grid.dataset.hofWatch) {
      grid.dataset.hofWatch = '1';
      new MutationObserver(() => ensureHof()).observe(grid, { childList: true });
    }
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

  function ensureCircuits() {
    const grid = $('#circGrid');
    if (!grid || grid.children.length) return;
    if (typeof a0_0x50272c !== 'function') return;
    const d = LIVE();
    if (!d.calendar || !d.calendar.length) return;
    if (typeof a0_0x4722c6 !== 'undefined' && a0_0x4722c6.tab !== 'vig') return;
    a0_0x50272c();
  }

  function fixVegasCard() {
    const card = document.querySelector('#circGrid .circ[data-circ="las-vegas-1"]');
    if (!card || card.dataset.vfix === '1') return;
    const holder = card.querySelector('.trk');
    if (!holder) return;
    const tr = trackFor({ circuitId: 'las-vegas-1', lat: VEGAS_ACTUAL.lat, lon: VEGAS_ACTUAL.lon });
    if (!tr) return;
    holder.innerHTML = tr.svg;
    card.dataset.vfix = '1';
  }

  function coordsDe(id) {
    const hist = (typeof a0_0x4722c6 !== 'undefined' && a0_0x4722c6.hist) || [];
    let c = hist.find(x => x.id === id);
    if (c && c.lat != null) return { lat: +c.lat, lon: +c.lon };
    const cal = LIVE().calendar || [];
    c = cal.find(x => x.circuitId === id);
    if (c && c.lat != null) return { lat: +c.lat, lon: +c.lon };
    return null;
  }

  let dedupeSig = '';

  function dedupeTracks() {
    const grid = $('#circGrid');
    if (!grid || typeof a0_0x7fb4d2 !== 'function') return;

    const sig = grid.children.length + ':' + grid.querySelectorAll('svg').length;
    if (sig === dedupeSig) return;
    dedupeSig = sig;

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
        const prio = enCalendario(id) ? 0 : (esCaesarsId(id) ? 1 : 2);
        return { x, dist, prio };
      });
      if (meta.some(m => !m)) return;
      meta.sort((a, b) => a.prio - b.prio || a.dist - b.dist);
      meta.slice(1).forEach(m => {
        const holder = m.x.svg.parentElement;
        if (holder && !holder.classList.contains('circ')) {
          holder.innerHTML = '<span class="trk-msg">Trazado no disponible</span>';
        }
      });
    });
  }

  /* ---------- Trazados en calendario y "Próximas" ---------- */

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
    if (esVegasLike(race.circuitId)) return list.find(c => c.id === VEGAS_ID) || null;
    if (esCaesarsId(race.circuitId)) return list.find(esCaesarsEntrada) || null;
    if (race.lat == null || race.lon == null || typeof a0_0x7fb4d2 !== 'function') return null;
    return a0_0x7fb4d2(race.lat, race.lon);
  }

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
      wrap.innerHTML = `<div class="up-svg">${tr.svg}</div>`;
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
    const k = c.dataset.k;

    if (k === 'drv') {
      const name = c.dataset.drvName;
      if (name && typeof window.a0_0x68b92b === 'function') {
        window.a0_0x68b92b(name);
      } else if (name && typeof window.a0_0x243121 === 'function') {
        window.a0_0x243121(name);
      }
    } else if (k === 'team') {
      const teamName = c.dataset.teamName;
      if (teamName && typeof window.a0_0x243121 === 'function') {
        window.a0_0x243121(teamName);
      }
    }
  });

  /* ---------- Info · Números de pilotos ---------- */

  const NUM_USO = {
    1:  ['Lando Norris', 'NOR', 'McLaren'],
    3:  ['Max Verstappen', 'VER', 'Red Bull'],
    5:  ['Gabriel Bortoleto', 'BOR', 'Audi'],
    6:  ['Isack Hadjar', 'HAD', 'Red Bull'],
    10: ['Pierre Gasly', 'GAS', 'Alpine'],
    11: ['Sergio Pérez', 'PER', 'Cadillac'],
    12: ['Kimi Antonelli', 'ANT', 'Mercedes'],
    14: ['Fernando Alonso', 'ALO', 'Aston Martin'],
    16: ['Charles Leclerc', 'LEC', 'Ferrari'],
    18: ['Lance Stroll', 'STR', 'Aston Martin'],
    23: ['Alexander Albon', 'ALB', 'Williams'],
    27: ['Nico Hülkenberg', 'HUL', 'Audi'],
    30: ['Liam Lawson', 'Racing Bulls'],
    31: ['Esteban Ocon', 'OCO', 'Haas'],
    41: ['Arvid Lindblad', 'LIN', 'Racing Bulls'],
    43: ['Franco Colapinto', 'COL', 'Alpine'],
    44: ['Lewis Hamilton', 'HAM', 'Ferrari'],
    55: ['Carlos Sainz', 'SAI', 'Williams'],
    63: ['George Russell', 'RUS', 'Mercedes'],
    77: ['Valtteri Bottas', 'BOT', 'Cadillac'],
    81: ['Oscar Piastri', 'PIA', 'McLaren'],
    87: ['Oliver Bearman', 'BEA', 'Haas']
  };

  const NUM_RES = {
    4:  'Reservado: es el número permanente de Lando Norris, que este año corre con el 1 como campeón.',
    2:  'Reservado: lo usó Logan Sargeant por última vez en 2024. Sigue congelado por el reglamento.',
    7:  'Reservado: lo usó Jack Doohan por última vez en 2025. Sigue congelado por el reglamento.',
    20: 'Reservado: lo usó Kevin Magnussen por última vez en 2024. Sigue congelado por el reglamento.',
    22: 'Reservado: lo usó Yuki Tsunoda por última vez en 2025. Sigue congelado por el reglamento.',
    24: 'Reservado: lo usó Zhou Guanyu por última vez en 2024. Sigue congelado por el reglamento.'
  };

  function numGridHTML() {
    let nUse = 0, nRes = 0, nFree = 0;
    const cells = [];
    for (let n = 1; n <= 99; n++) {
      let s = 'free', code = '·', info;
      const u = NUM_USO[n];
      if (n === 1) {
        s = 'champ'; code = u ? u[1] : 'CAM'; nUse++;
        info = '#1 · Lando Norris · McLaren. Número reservado para el campeón del mundo.';
      } else if (n === 17) {
        s = 'ret'; code = '✕';
        info = '#17 · Retirado para siempre en homenaje a Jules Bianchi.';
      } else if (u) {
        s = 'use'; code = u[1]; nUse++;
        info = '#' + n + ' · ' + u[0] + ' · ' + u[2];
      } else if (NUM_RES[n]) {
        s = 'res'; code = 'RES'; nRes++;
        info = '#' + n + ' · ' + NUM_RES[n];
      } else {
        nFree++;
        info = '#' + n + ' · Libre: ningún piloto lo usa ni lo tiene reservado. Un piloto nuevo podría elegirlo.';
      }
      cells.push(
        '<button type="button" class="num-cell" data-ns="' + s + '" data-nn="' + n + '" data-info="' + escI(info) +
        '" aria-label="' + escI(info) + '"><b>' + n + '</b><small>' + escI(code) + '</small></button>'
      );
    }
    return {
      counts: { use: nUse, res: nRes, free: nFree, ret: 1 },
      html: cells.join('')
    };
  }

  function addNumbersSection() {
    if (typeof INFO_SECTIONS === 'undefined' || typeof INFO_RENDER === 'undefined' || typeof escI !== 'function') return;
    if (INFO_SECTIONS.some(s => s.id === 'numeros')) return;

    INFO_RENDER.numkeys = it => `
      <article class="info-card glass">
        <h4>${escI(it.title)}</h4>
        <div class="num-keys-grid">
          <div class="num-key k-gold"><b>1</b><span>Campeón</span>
            <p>Está reservado para el campeón del mundo, que puede usarlo la temporada siguiente. Es opcional: Hamilton, por ejemplo, cuando fue campeón prefirió mantener el 44.</p></div>
          <div class="num-key k-red"><b>2–99</b><span>Libre elección</span>
            <p>Cada piloto elige uno para toda su carrera, siempre que ningún otro piloto lo tenga.</p></div>
          <div class="num-key k-dark"><b>17</b><span>Retirado</span>
            <p>Nadie puede llevarlo desde 2015, en homenaje a Jules Bianchi.</p></div>
        </div>
      </article>`;

    INFO_RENDER.numsteps = it => `
      <article class="info-card glass">
        <h4>${escI(it.title)}</h4>
        <ol class="num-steps-list">
          ${it.steps.map(s => `<li><div><strong>${escI(s[0])}</strong><span>${escI(s[1])}</span></div></li>`).join('')}
        </ol>
      </article>`;

    INFO_RENDER.numgrid = it => {
      const g = numGridHTML();
      return `
        <article class="info-card glass num-card">
          <h4>${escI(it.title)}</h4>
          <div class="num-legend">
            <button type="button" class="num-f" data-nf="use"><i style="background:#e10600"></i>En uso <b>${g.counts.use}</b></button>
            <button type="button" class="num-f" data-nf="res"><i style="background:#5b8cff"></i>Reservados <b>${g.counts.res}</b></button>
            <button type="button" class="num-f" data-nf="free"><i style="background:#8b8b99"></i>Libres <b>${g.counts.free}</b></button>
            <button type="button" class="num-f" data-nf="ret"><i style="background:#3a3a46"></i>Retirado <b>${g.counts.ret}</b></button>
          </div>
          <div class="num-detail" data-ns="none">Tocá un número para ver quién lo usa. Tocá un filtro para resaltar un grupo.</div>
          <div class="num-grid" data-f="all">${g.html}</div>
          <p class="num-note">Datos de la temporada 2026. Los números de pilotos que se fueron hace poco pueden estar reservados. La lista oficial es la de inscritos de la FIA.</p>
        </article>`;
    };

    INFO_RENDER.numfaq = it => `
      <details class="info-card glass num-faq">
        <summary>${escI(it.title)}</summary>
        <p class="info-text">${escI(it.t)}</p>
      </details>`;

    const steps = [
      ['Elegir', 'Al llegar a la F1, el piloto propone el número que quiere, entre 2 y 99. Muchos eligen uno ligado a su historia: un título de karting, un ídolo o una fecha.'],
      ['Revisar que esté disponible', 'No puede estar en uso, ni reservado por un piloto que se fue hace menos de dos temporadas, ni ser el 17.'],
      ['Plan B si está ocupado', 'Si el número elegido ya lo tiene otro piloto, hay que optar por otro.'],
      ['Confirmación', 'La FIA publica el número en la lista oficial de inscritos de la temporada. Desde ahí es del piloto para toda su carrera.']
    ];

    const sec = {
      id: 'numeros', icon: '🔢', title: 'Números de pilotos',
      intro: 'Cada piloto lleva un número en el auto y en el casco. Acá te contamos cómo se elige, cuáles están en uso o libres y qué pasa con el número cuando un piloto se retira.',
      items: [
        { type: 'card', icon: '🔢', title: 'Para qué sirven',
          t: 'Cada número identifica al piloto en pista y en los tiempos. Tiene que verse claramente desde el frente del auto y en el casco. Desde 2014 es permanente: lo acompaña toda su carrera, sin importar la escudería. Antes de 2014 los números dependían de la posición del equipo en el campeonato anterior.' },
        { type: 'numkeys', title: 'Los tres números clave',
          t: 'El 1 es del campeón del mundo, del 2 al 99 se elige libremente y el 17 está retirado desde 2015 en homenaje a Jules Bianchi.' },
        { type: 'numsteps', title: 'Cómo se asigna un número', steps,
          t: steps.map(s => s[0] + '. ' + s[1]).join(' ') },
        { type: 'numgrid', title: 'Mapa de números 2026',
          t: 'Mapa del 1 al 99 con los números en uso, reservados, libres y el retirado. Tocá un número para ver quién lo usa.' },

        { type: 'numfaq', title: '¿Se puede elegir cualquier número?',
          t: 'Sí, se elige con libertad y no hace falta ningún motivo especial. Las reglas son pocas: de 2 a 99, no puede ser el 17, ningún otro piloto puede tenerlo ni tenerlo reservado, y el 1 queda para el campeón.' },
        { type: 'numfaq', title: '¿Qué pasa si el número que quiero ya está tomado?',
          t: 'Hay que elegir otro. Cada número pertenece a un solo piloto. Así le pasó a Charles Leclerc: quería el 7, que era de Kimi Räikkönen, y terminó eligiendo el 16.' },
        { type: 'numfaq', title: '¿Qué pasa con el número cuando un piloto se retira?',
          t: 'Queda reservado a su nombre. Si pasan dos temporadas completas seguidas sin que corra, se libera y cualquier piloto puede elegirlo. Por eso, para elegir en 2026 no se podían usar números usados por última vez en 2024 o 2025.' },
        { type: 'numfaq', title: '¿Y si un piloto se va un tiempo y vuelve?',
          t: 'Si vuelve dentro de ese plazo, recupera su número. Alonso retomó el 14 en 2021 tras dos años fuera, y en 2026 Bottas volvió con el 77 y Pérez con el 11.' },
        { type: 'numfaq', title: '¿Se puede cambiar de número?',
          t: 'En general no: el número es para toda la carrera. La excepción es el campeón, que puede correr con el 1. Verstappen es un caso especial: dejó el 33 y para 2026 eligió el 3, que lo tenía Ricciardo (piloto que se retiró en 2024), Ricciardo y la FIA dieron su visto bueno para permitirle usar el número.' },
        { type: 'numfaq', title: '¿Qué pasa con el número 1?',
          t: 'Es para el campeón del mundo, y usarlo es opcional. Si lo usa, su número permanente queda reservado y lo recupera si ya no es campeón. En 2026 lo lleva Lando Norris, que deja el 4 en reserva.' },
        { type: 'numfaq', title: '¿Por qué no existe el 17?',
          t: 'Jules Bianchi corrió con el 17 y murió en 2015 por las heridas de un accidente en el GP de Japón 2014. La FIA retiró el número en su homenaje y desde entonces nadie puede usarlo.' },
        { type: 'numfaq', title: '¿Qué número lleva un piloto suplente?',
          t: 'Si reemplaza a un titular en una carrera, recibe un número temporal asignado por el equipo. No es su número permanente y no le quita ninguno a otro piloto.' }
      ]
    };

    let i = INFO_SECTIONS.findIndex(s => s.id === 'motoristas');
    if (i < 0) i = INFO_SECTIONS.findIndex(s => s.id === 'graficas');
    INFO_SECTIONS.splice(i >= 0 ? i + 1 : INFO_SECTIONS.length, 0, sec);
  }

  try { addNumbersSection(); } catch (err) { console.warn('[parche fOnefan] números', err); }

  document.addEventListener('click', e => {
    const cell = e.target.closest('.num-cell');
    if (cell) {
      const box = cell.closest('.num-card');
      if (!box) return;
      const d = box.querySelector('.num-detail');
      if (d) { d.textContent = cell.dataset.info || ''; d.dataset.ns = cell.dataset.ns; }
      box.querySelectorAll('.num-cell.sel').forEach(x => x.classList.remove('sel'));
      cell.classList.add('sel');
      return;
    }
    const f = e.target.closest('[data-nf]');
    if (f) {
      const box = f.closest('.num-card');
      const g = box && box.querySelector('.num-grid');
      if (!g) return;
      g.dataset.f = g.dataset.f === f.dataset.nf ? 'all' : f.dataset.nf;
      box.querySelectorAll('[data-nf]').forEach(b => b.classList.toggle('on', g.dataset.f === b.dataset.nf));
    }
  });

  /* ---------- Corrección de contención de trazados ---------- */
  function injectTrackFix() {
    if ($('#parcheTrackFix')) return;
    const st = document.createElement('style');
    st.id = 'parcheTrackFix';
    st.textContent = `
      #upList .up .up-track{
        box-sizing:border-box;
        padding:0;overflow:hidden;
        display:inline-flex;align-items:center;
      }
      #upList .up .up-track .up-svg{
        position:relative;width:44px;height:28px;
        overflow:hidden;display:grid;place-items:center;
      }
      #upList .up .up-track .up-svg svg{
        width:100%;height:100%;overflow:visible;display:block;
      }

      #calGrid .cal-track{
        position:relative;height:100px;overflow:hidden;
        margin:8px 0 2px;display:flex;justify-content:center;align-items:center;
      }
      #calGrid .cal-track svg{
        width:100%;height:100%;max-width:180px;overflow:visible;display:block;
      }
    `;
    document.head.appendChild(st);
  }

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
    if (document.hidden) return;
    try {
      injectTrackFix();
      quitarMensajesAPI();
      renderDrivers();
      renderTeams();
      ensureHof();
      ensureCircuits();
      fixVegasCard();
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
    watchHof();
    tick();
    setInterval(tick, 2500);
    syncTop();
  });
})();