/* parche.js · fOnefan*/
(function () {
  'use strict';
const HOF_PILOTOS_FIJO = [{"season":2025,"driverId":"norris","name":"Lando Norris","nat":"British","teamId":"mclaren","team":"McLaren","points":423},{"season":2024,"driverId":"max_verstappen","name":"Max Verstappen","nat":"Dutch","teamId":"red_bull","team":"Red Bull","points":437},{"season":2023,"driverId":"max_verstappen","name":"Max Verstappen","nat":"Dutch","teamId":"red_bull","team":"Red Bull","points":575},{"season":2022,"driverId":"max_verstappen","name":"Max Verstappen","nat":"Dutch","teamId":"red_bull","team":"Red Bull","points":454},{"season":2021,"driverId":"max_verstappen","name":"Max Verstappen","nat":"Dutch","teamId":"red_bull","team":"Red Bull","points":395.5},{"season":2020,"driverId":"hamilton","name":"Lewis Hamilton","nat":"British","teamId":"mercedes","team":"Mercedes","points":347},{"season":2019,"driverId":"hamilton","name":"Lewis Hamilton","nat":"British","teamId":"mercedes","team":"Mercedes","points":413},{"season":2018,"driverId":"hamilton","name":"Lewis Hamilton","nat":"British","teamId":"mercedes","team":"Mercedes","points":408},{"season":2017,"driverId":"hamilton","name":"Lewis Hamilton","nat":"British","teamId":"mercedes","team":"Mercedes","points":363},{"season":2016,"driverId":"rosberg","name":"Nico Rosberg","nat":"German","teamId":"mercedes","team":"Mercedes","points":385},{"season":2015,"driverId":"hamilton","name":"Lewis Hamilton","nat":"British","teamId":"mercedes","team":"Mercedes","points":381},{"season":2014,"driverId":"hamilton","name":"Lewis Hamilton","nat":"British","teamId":"mercedes","team":"Mercedes","points":384},{"season":2013,"driverId":"vettel","name":"Sebastian Vettel","nat":"German","teamId":"red_bull","team":"Red Bull","points":397},{"season":2012,"driverId":"vettel","name":"Sebastian Vettel","nat":"German","teamId":"red_bull","team":"Red Bull","points":281},{"season":2011,"driverId":"vettel","name":"Sebastian Vettel","nat":"German","teamId":"red_bull","team":"Red Bull","points":392},{"season":2010,"driverId":"vettel","name":"Sebastian Vettel","nat":"German","teamId":"red_bull","team":"Red Bull","points":256},{"season":2009,"driverId":"button","name":"Jenson Button","nat":"British","teamId":"brawn","team":"Brawn","points":95},{"season":2008,"driverId":"hamilton","name":"Lewis Hamilton","nat":"British","teamId":"mclaren","team":"McLaren","points":98},{"season":2007,"driverId":"raikkonen","name":"Kimi Räikkönen","nat":"Finnish","teamId":"ferrari","team":"Ferrari","points":110},{"season":2006,"driverId":"alonso","name":"Fernando Alonso","nat":"Spanish","teamId":"renault","team":"Renault","points":134},{"season":2005,"driverId":"alonso","name":"Fernando Alonso","nat":"Spanish","teamId":"renault","team":"Renault","points":133},{"season":2004,"driverId":"michael_schumacher","name":"Michael Schumacher","nat":"German","teamId":"ferrari","team":"Ferrari","points":148},{"season":2003,"driverId":"michael_schumacher","name":"Michael Schumacher","nat":"German","teamId":"ferrari","team":"Ferrari","points":93},{"season":2002,"driverId":"michael_schumacher","name":"Michael Schumacher","nat":"German","teamId":"ferrari","team":"Ferrari","points":144},{"season":2001,"driverId":"michael_schumacher","name":"Michael Schumacher","nat":"German","teamId":"ferrari","team":"Ferrari","points":123},{"season":2000,"driverId":"michael_schumacher","name":"Michael Schumacher","nat":"German","teamId":"ferrari","team":"Ferrari","points":108},{"season":1999,"driverId":"hakkinen","name":"Mika Häkkinen","nat":"Finnish","teamId":"mclaren","team":"McLaren","points":76},{"season":1998,"driverId":"hakkinen","name":"Mika Häkkinen","nat":"Finnish","teamId":"mclaren","team":"McLaren","points":100},{"season":1997,"driverId":"villeneuve","name":"Jacques Villeneuve","nat":"Canadian","teamId":"williams","team":"Williams","points":81},{"season":1996,"driverId":"damon_hill","name":"Damon Hill","nat":"British","teamId":"williams","team":"Williams","points":97},{"season":1995,"driverId":"michael_schumacher","name":"Michael Schumacher","nat":"German","teamId":"benetton","team":"Benetton","points":102},{"season":1994,"driverId":"michael_schumacher","name":"Michael Schumacher","nat":"German","teamId":"benetton","team":"Benetton","points":92},{"season":1993,"driverId":"prost","name":"Alain Prost","nat":"French","teamId":"williams","team":"Williams","points":99},{"season":1992,"driverId":"mansell","name":"Nigel Mansell","nat":"British","teamId":"williams","team":"Williams","points":108},{"season":1991,"driverId":"senna","name":"Ayrton Senna","nat":"Brazilian","teamId":"mclaren","team":"McLaren","points":96},{"season":1990,"driverId":"senna","name":"Ayrton Senna","nat":"Brazilian","teamId":"mclaren","team":"McLaren","points":78},{"season":1989,"driverId":"prost","name":"Alain Prost","nat":"French","teamId":"mclaren","team":"McLaren","points":76},{"season":1988,"driverId":"senna","name":"Ayrton Senna","nat":"Brazilian","teamId":"mclaren","team":"McLaren","points":90},{"season":1987,"driverId":"piquet","name":"Nelson Piquet","nat":"Brazilian","teamId":"williams","team":"Williams","points":73},{"season":1986,"driverId":"prost","name":"Alain Prost","nat":"French","teamId":"mclaren","team":"McLaren","points":72},{"season":1985,"driverId":"prost","name":"Alain Prost","nat":"French","teamId":"mclaren","team":"McLaren","points":73},{"season":1984,"driverId":"lauda","name":"Niki Lauda","nat":"Austrian","teamId":"mclaren","team":"McLaren","points":72},{"season":1983,"driverId":"piquet","name":"Nelson Piquet","nat":"Brazilian","teamId":"brabham","team":"Brabham","points":59},{"season":1982,"driverId":"keke_rosberg","name":"Keke Rosberg","nat":"Finnish","teamId":"williams","team":"Williams","points":44},{"season":1981,"driverId":"piquet","name":"Nelson Piquet","nat":"Brazilian","teamId":"brabham","team":"Brabham","points":50},{"season":1980,"driverId":"jones","name":"Alan Jones","nat":"Australian","teamId":"williams","team":"Williams","points":67},{"season":1979,"driverId":"scheckter","name":"Jody Scheckter","nat":"South African","teamId":"ferrari","team":"Ferrari","points":51},{"season":1978,"driverId":"mario_andretti","name":"Mario Andretti","nat":"American","teamId":"team_lotus","team":"Team Lotus","points":64},{"season":1977,"driverId":"lauda","name":"Niki Lauda","nat":"Austrian","teamId":"ferrari","team":"Ferrari","points":70},{"season":1976,"driverId":"hunt","name":"James Hunt","nat":"British","teamId":"mclaren","team":"McLaren","points":69},{"season":1975,"driverId":"lauda","name":"Niki Lauda","nat":"Austrian","teamId":"ferrari","team":"Ferrari","points":64.5},{"season":1974,"driverId":"emerson_fittipaldi","name":"Emerson Fittipaldi","nat":"Brazilian","teamId":"mclaren","team":"McLaren","points":55},{"season":1973,"driverId":"stewart","name":"Jackie Stewart","nat":"British","teamId":"tyrrell","team":"Tyrrell","points":71},{"season":1972,"driverId":"emerson_fittipaldi","name":"Emerson Fittipaldi","nat":"Brazilian","teamId":"team_lotus","team":"Team Lotus","points":61},{"season":1971,"driverId":"stewart","name":"Jackie Stewart","nat":"British","teamId":"tyrrell","team":"Tyrrell","points":62},{"season":1970,"driverId":"rindt","name":"Jochen Rindt","nat":"Austrian","teamId":"team_lotus","team":"Team Lotus","points":45},{"season":1969,"driverId":"stewart","name":"Jackie Stewart","nat":"British","teamId":"matra-ford","team":"Matra-Ford","points":63},{"season":1968,"driverId":"hill","name":"Graham Hill","nat":"British","teamId":"lotus-ford","team":"Lotus-Ford","points":48},{"season":1967,"driverId":"hulme","name":"Denny Hulme","nat":"New Zealander","teamId":"brabham-repco","team":"Brabham-Repco","points":51},{"season":1966,"driverId":"jack_brabham","name":"Jack Brabham","nat":"Australian","teamId":"brabham-repco","team":"Brabham-Repco","points":42},{"season":1965,"driverId":"clark","name":"Jim Clark","nat":"British","teamId":"lotus-climax","team":"Lotus-Climax","points":54},{"season":1964,"driverId":"surtees","name":"John Surtees","nat":"British","teamId":"ferrari","team":"Ferrari","points":40},{"season":1963,"driverId":"clark","name":"Jim Clark","nat":"British","teamId":"lotus-climax","team":"Lotus-Climax","points":54},{"season":1962,"driverId":"hill","name":"Graham Hill","nat":"British","teamId":"brm","team":"BRM","points":42},{"season":1961,"driverId":"phil_hill","name":"Phil Hill","nat":"American","teamId":"ferrari","team":"Ferrari","points":34},{"season":1960,"driverId":"jack_brabham","name":"Jack Brabham","nat":"Australian","teamId":"cooper-climax","team":"Cooper-Climax","points":43},{"season":1959,"driverId":"jack_brabham","name":"Jack Brabham","nat":"Australian","teamId":"cooper-climax","team":"Cooper-Climax","points":31},{"season":1958,"driverId":"hawthorn","name":"Mike Hawthorn","nat":"British","teamId":"ferrari","team":"Ferrari","points":42},{"season":1957,"driverId":"fangio","name":"Juan Fangio","nat":"Argentine","teamId":"maserati","team":"Maserati","points":40},{"season":1956,"driverId":"fangio","name":"Juan Fangio","nat":"Argentine","teamId":"ferrari","team":"Ferrari","points":30},{"season":1955,"driverId":"fangio","name":"Juan Fangio","nat":"Argentine","teamId":"mercedes","team":"Mercedes","points":40},{"season":1954,"driverId":"fangio","name":"Juan Fangio","nat":"Argentine","teamId":"mercedes","team":"Maserati / Mercedes","points":42},{"season":1953,"driverId":"ascari","name":"Alberto Ascari","nat":"Italian","teamId":"ferrari","team":"Ferrari","points":34.5},{"season":1952,"driverId":"ascari","name":"Alberto Ascari","nat":"Italian","teamId":"ferrari","team":"Ferrari","points":36},{"season":1951,"driverId":"fangio","name":"Juan Fangio","nat":"Argentine","teamId":"alfa","team":"Alfa Romeo","points":31},{"season":1950,"driverId":"farina","name":"Nino Farina","nat":"Italian","teamId":"alfa","team":"Alfa Romeo","points":30}];

  /*Caché de la API histórica*/

  const CACHE_PREFIX = 'fo-api:';
  const DAY = 24 * 60 * 60 * 1000;
  const SEASON_NOW = new Date().getFullYear();

  function ttlFor(url) {
    const m = url.match(/\/ergast\/f1\/(\d{4})\//);
    if (m && +m[1] < SEASON_NOW) return 7 * DAY;
    return 10 * 60 * 1000;
  }

  function esRespuestaValida(body) {
    return !!(body && body.MRData && typeof body.MRData === 'object');
  }

  function tieneDatos(body) {
    const m = body && body.MRData;
    if (!m) return false;
    const t = m.StandingsTable || m.RaceTable || m.CircuitTable || m.DriverTable;
    if (!t) return false;
    const listas = Object.values(t).find(Array.isArray);
    return listas ? listas.length > 0 : false;
  }

  function readCache(key) {
    try {
      const raw = localStorage.getItem(CACHE_PREFIX + key);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      if (!obj || Date.now() > obj.exp || !esRespuestaValida(obj.body)) {
        localStorage.removeItem(CACHE_PREFIX + key);
        return null;
      }
      return obj.body;
    } catch (e) {
      try { localStorage.removeItem(CACHE_PREFIX + key); } catch (_) {}
      return null;
    }
  }

  function writeCache(key, body, ttl) {
    if (!tieneDatos(body)) return;
    try {
      localStorage.setItem(CACHE_PREFIX + key, JSON.stringify({ exp: Date.now() + ttl, body }));
    } catch (e) { /* cuota llena: seguimos sin caché */ }
  }

  // Limpieza: borra entradas viejas o dañadas de versiones anteriores
  (function limpiarCacheDañada() {
    try {
      Object.keys(localStorage)
        .filter(k => k.startsWith(CACHE_PREFIX))
        .forEach(k => {
          try {
            const obj = JSON.parse(localStorage.getItem(k));
            if (!obj || Date.now() > obj.exp || !tieneDatos(obj.body)) localStorage.removeItem(k);
          } catch (e) { localStorage.removeItem(k); }
        });
    } catch (e) {}
  })();

  const realFetch = window.fetch.bind(window);

  window.fetch = function (input, init) {
    const url = typeof input === 'string' ? input : (input && input.url) || '';
    const method = (init && init.method) || (input && input.method) || 'GET';
    if (method !== 'GET' || url.indexOf('api.jolpi.ca/ergast/f1/') === -1) {
      return realFetch(input, init);
    }

    const cached = readCache(url);
    if (cached) {
      return Promise.resolve(new Response(JSON.stringify(cached), {
        status: 200, headers: { 'Content-Type': 'application/json' }
      }));
    }

    return realFetch(input, init).then(res => {
      if (res.ok) {
        res.clone().json()
          .then(body => writeCache(url, body, ttlFor(url)))
          .catch(() => {});
      }
      return res;
    });
  };

  const VEGAS_ID = 'las-vegas-1';
  const VEGAS_ACTUAL = { lat: 36.175, lon: -115.1364 };
  const CAESARS = { lat: 36.1169, lon: -115.175 };

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

  /*Utilidades*/

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

      /* ===== Modal: nada se sale de la tarjeta ===== */
      #modal .panel-m{overflow-x:hidden}
      #modal .line{flex-wrap:wrap;align-items:baseline;row-gap:2px}
      #modal .line > span{flex:0 0 auto;max-width:100%}
      #modal .line > strong{white-space:normal;overflow-wrap:anywhere;min-width:0;margin-left:auto;text-align:right}
      #modal .panel-m{overscroll-behavior:contain;-webkit-overflow-scrolling:touch}

      /* ===== Salón de la Fama (escuderías y pilotos) ===== */
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
      .parche-loading{color:var(--muted,#8b8b99);font-size:15px;padding:12px 0}

      /* Trazados en calendario */
      .cal-track{display:flex;justify-content:center;align-items:center;margin:10px 0 2px;height:110px}
      .cal-track svg{width:100%;height:100%;max-width:180px;overflow:visible}
      .cal-track path{fill:none !important;stroke:var(--red);stroke-width:2.2;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}

      /* ===== Próximas carreras ===== */
      .up{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:12px 16px;padding:12px 18px}
      .up .up-track{display:flex;align-items:center;gap:8px;margin:0;padding:0;background:none;border:none}
      .up .up-track .up-svg{width:46px;height:32px;flex-shrink:0;display:grid;place-items:center}
      .up .up-track .up-svg svg{width:100%;height:100%;overflow:visible}
      .up .up-track .up-svg path{fill:none !important;stroke:var(--red,#e10600);stroke-width:2.2;vector-effect:non-scaling-stroke;stroke-linejoin:round;stroke-linecap:round}
      .up .up-track small{display:none}

      /* ===== Campeonato ===== */
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
      .num-faq[open] summary::after{content:"–"}
      .num-faq .info-text{margin:0;padding:0 20px 18px}

      /* ===== Modal de carreras por correr: horarios y resultados de sesiones terminadas ===== */
      .parche-top-list{display:grid;gap:2px}
      .parche-top-list .line span{font-weight:600}
      .parche-res-title{font-family:var(--f-nav,'Barlow Condensed',sans-serif);font-size:13px;letter-spacing:.14em;
        text-transform:uppercase;color:#8fb4ff;margin:26px 0 4px;font-weight:800;display:flex;align-items:center;gap:10px}
      .parche-res-title::after{content:"";flex:1;height:1px;background:rgba(143,180,255,.35)}

      /* ===== Vuelta rápida en la ficha de carreras finalizadas ===== */
      .fl-box{margin-top:18px;padding:18px;border-radius:18px;background:rgba(179,92,255,.10);
        border:1px solid rgba(179,92,255,.45)}
      .fl-box h4{font-family:var(--f-nav,'Barlow Condensed',sans-serif);font-size:13px;letter-spacing:.14em;
        text-transform:uppercase;color:#d8b4fe;margin-bottom:12px;font-weight:700}
      .fl-main{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
      .fl-tag{font-family:var(--f-nav,'Barlow Condensed',sans-serif);font-weight:800;font-size:11px;
        letter-spacing:.14em;text-transform:uppercase;color:#0b0b11;background:#b35cff;
        padding:4px 9px;border-radius:6px;white-space:nowrap}
      .fl-time{font-family:'Orbitron',sans-serif;font-size:clamp(20px,3vw,28px);font-weight:700;color:#fff;
        font-variant-numeric:tabular-nums;letter-spacing:.02em}
      .fl-driver{font-weight:700;font-size:17px;color:#fff;line-height:1.2}
      .fl-team{font-size:13px;color:#b9b9c7;margin-top:2px}
      .fl-none{color:var(--muted,#8b8b99);font-size:14px}

      /* ===== Carrera en curso (fin de semana activo): calendario e inicio ===== */
      .race.race-live,
      .up.race-live,
      .hero-r.race-live-hero{
        border-color:#e10600 !important;
        box-shadow:0 0 0 1px rgba(225,6,0,.5),0 0 28px rgba(225,6,0,.35);
        background:linear-gradient(180deg,rgba(225,6,0,.16),var(--card,rgba(18,18,28,.86)) 60%);
        animation:raceLivePulse 2.2s ease-in-out infinite;
      }
      .race.race-live{position:relative;overflow:hidden}
      .race.race-live::before{
        content:"";position:absolute;left:0;right:0;top:0;height:4px;
        background:linear-gradient(90deg,#e10600,#ff5a4f,#e10600);
      }
      .race.race-live .rnd{color:#ff8a80}
      .race.race-live .badge{box-shadow:0 0 12px rgba(225,6,0,.6)}
      .race-live-tag{display:inline-flex;align-items:center;gap:7px;margin-top:10px;padding:5px 10px;
        border-radius:999px;background:rgba(225,6,0,.22);border:1px solid rgba(225,6,0,.7);
        font-family:var(--f-nav,'Barlow Condensed',sans-serif);font-size:12px;font-weight:800;
        letter-spacing:.14em;text-transform:uppercase;color:#fff}
      .race-live-tag i{width:8px;height:8px;border-radius:50%;background:#ff3b2e;
        animation:livePulse 1.6s infinite}
      .up.race-live .race-live-tag{margin-top:6px}
      .hero-r.race-live-hero{padding:16px;border-radius:18px}
      @keyframes raceLivePulse{
        0%,100%{box-shadow:0 0 0 1px rgba(225,6,0,.5),0 0 22px rgba(225,6,0,.25)}
        50%{box-shadow:0 0 0 2px rgba(225,6,0,.8),0 0 40px rgba(225,6,0,.55)}
      }
      @media (prefers-reduced-motion:reduce){
        .race.race-live,.up.race-live,.hero-r.race-live-hero{animation:none}
        .race-live-tag i{animation:none}
      }

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

  /*Pilotos actuales*/

  function renderDrivers() {
    const grid = $('#drvGrid');
    const tab = $('#drvTabs .chip.on');
    if (!grid || !tab || tab.dataset.dt !== 'act') return;

    const teams = getTeams();
    const list = getDrivers().sort((a, b) => b.pts - a.pts || a.name.localeCompare(b.name));
    CARDS.drv = list;

    const key = JSON.stringify(list.map(d => [d.id, d.pts, d.teamName]));
    if (grid.dataset.key === key && grid.children.length && grid.dataset.hofPil !== 'ok') return;
    grid.dataset.key = key;
    grid.dataset.hofPil = '';

    grid.innerHTML = list.map((d, i) => {
      const col = (teams.find(t => t.id === d.team) || {}).color || '#e10600';
      const realNum = d.num || NUM_MAP_2026[d.id] || pad(i + 1);
      return `
        <article class="glass dcard" data-drv="${esc(d.id)}" style="--c:${col}">
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

    const key = JSON.stringify(list.map(t => [t.id, t.pts]));
    if (grid.dataset.key === key && grid.children.length) return;
    grid.dataset.key = key;

    grid.innerHTML = list.map((t, i) => {
      const src = logoSrc(t.name);
      return `
        <article class="glass dcard parche-card" data-team-name="${esc(t.name)}" style="--c:${t.color}">
          <div class="dc-hel team-hel">
            ${src ? imgTag(src, 'team-logo') : `<span class="tc-name-only">${esc(t.name)}</span>`}
          </div>
          <div class="dhead"><span class="dnum">${pad(i + 1)}</span></div>
          <h3>${esc(t.name)}</h3>
          <div class="dfoot"><span>${t.pts} pts</span><span>Ver ficha →</span></div>
        </article>`;
    }).join('');
  }

  const sleepP = ms => new Promise(r => setTimeout(r, ms));
  const careerMap = {};
  const CARRERA_TTL = 12 * 60 * 60 * 1000;

  // Pedido a la API 
  async function jol(path) {
    for (let i = 0; i < 4; i++) {
      try { return await a0_0x182c22(path, 1); }
      catch (e) { if (i === 3) throw e; await sleepP(2000 * (i + 1)); }
    }
  }

  // Estadísticas de carrera de UN piloto (solo cuando se abre su ficha)
  async function careerStats(id) {
    const k = 'fo-carrera:' + id;
    try {
      const raw = JSON.parse(localStorage.getItem(k) || 'null');
      if (raw && Date.now() < raw.exp && raw.st) return raw.st;
    } catch (e) {}

    const races = [];
    let off = 0, total = Infinity;
    while (off < total) {
      const j = await jol(`/drivers/${id}/results.json?limit=100&offset=${off}`);
      total = +j.MRData.total || 0;
      const rs = j.MRData.RaceTable.Races || [];
      if (!rs.length) break;
      races.push(...rs);
      off += 100;
      if (off < total) await sleepP(350);
    }

    const st = {
      starts: 0, wins: 0, podiums: 0, poles: 0, fl: 0, pts: 0,
      first: null, last: null, team: '', teamDate: '', number: '', teams: [],
      name: id, nat: '', dob: '', code: '', num: ''
    };

    races.forEach(r => {
      const res = (r.Results || [])[0];
      if (!res) return;
      const d = r.date;
      st.starts++;
      if (res.position === '1') st.wins++;
      if (['1', '2', '3'].includes(res.position)) st.podiums++;
      if (res.grid === '1') st.poles++;
      if (res.FastestLap && res.FastestLap.rank === '1') st.fl++;
      st.pts += +res.points || 0;
      if (!st.first || d < st.first) st.first = d;
      if (!st.last || d > st.last) st.last = d;

      const cn = res.Constructor && res.Constructor.name;
      if (cn && !st.teams.includes(cn)) st.teams.push(cn);
      if (cn && d >= st.teamDate) { st.teamDate = d; st.team = cn; st.number = res.number || st.number; }

      const dr = res.Driver || {};
      st.name = [dr.givenName, dr.familyName].filter(Boolean).join(' ') || st.name;
      st.nat = dr.nationality || st.nat;
      st.dob = dr.dateOfBirth || st.dob;
      st.code = dr.code || st.code;
      st.num = dr.permanentNumber || st.num;
    });

    try {
      localStorage.setItem(k, JSON.stringify({ exp: Date.now() + CARRERA_TTL, st }));
    } catch (e) {}
    return st;
  }

  // Campeones de todas las temporadas
  async function cargarCampeonesPilotos() {
    const j = await jol('/driverStandings/1.json?limit=100');
    const listas = j.MRData.StandingsTable.StandingsLists || [];
    return listas.map(l => {
      const s = l.DriverStandings[0];
      const dr = s.Driver;
      return {
        season: +l.season,
        driverId: dr.driverId,
        name: [dr.givenName, dr.familyName].filter(Boolean).join(' '),
        nat: dr.nationality || '',
        dob: dr.dateOfBirth || '',
        code: dr.code || '',
        num: dr.permanentNumber || '',
        team: (s.Constructors || []).map(c => c.name).join(' / '),
        points: +s.points || 0,
        wins: +s.wins || 0
      };
    }).sort((a, b) => b.season - a.season);
  }

  window.a0_0x521c52 = async function () {
    if (HOF_PILOTOS_FIJO && HOF_PILOTOS_FIJO.length) {
      a0_0x484245.champs = HOF_PILOTOS_FIJO;
      a0_0x484245.champsDone = true;
      return HOF_PILOTOS_FIJO;
    }
    const champs = await cargarCampeonesPilotos();
    a0_0x484245.champs = champs;
    a0_0x484245.champsDone = true;
    return champs;
  };

  window.a0_0x536bd9 = function () {};

  window.a0_0xdd43dd = function () {};

  // Ficha de piloto: pide solo a ese piloto
  window.a0_0x12a8c8 = async function (id) {
    a0_0x522712 = id;
    const d = (LIVE().drivers || []).find(x => x.id === id) || {};
    a0_0x4491d0(`
      <span class="eyebrow">Piloto</span>
      <h3 class="display m-title">${esc(d.name || id)}</h3>
      <div class="box"><p class="muted" style="font-size:13px">Cargando estadísticas de la carrera…</p></div>`);

    try {
      await Promise.all([
        careerStats(id).then(st => { careerMap[id] = st; }),
        a0_0x31cdae(id).catch(() => null)
      ]);
      a0_0x4722c6.drv = { list: [], byId: careerMap, stats: careerMap, info: {} };
      if (a0_0x522712 === id) a0_0x3f0359('#mBody').innerHTML = a0_0x21906d(id);
    } catch (err) {
      console.warn('[fOnefan] carrera de', id, err);
      if (a0_0x522712 === id) a0_0x3f0359('#mBody').innerHTML = a0_0x21906d(id, true);
    }
  };

  window.a0_0x5bdb86 = function () {};

  /*Salón de la Fama de pilotos */

  let champsPromesa = null;

  function asegurarCampeones() {
  if (LIVE().champs && LIVE().champs.length) return Promise.resolve(LIVE().champs);

  if (HOF_PILOTOS_FIJO && HOF_PILOTOS_FIJO.length) {
    LIVE().champs = HOF_PILOTOS_FIJO;
    LIVE().champsDone = true;
    return Promise.resolve(HOF_PILOTOS_FIJO);
  }

  if (!champsPromesa) {
    champsPromesa = cargarCampeonesPilotos()
      .then(list => {
        LIVE().champs = list;
        LIVE().champsDone = true;
        return list;
      })
      .catch(err => {
        champsPromesa = null;
        throw err;
      });
  }
  return champsPromesa;
}

  function buildHofPilotos(champs) {
    const porPiloto = {};
    champs.forEach(c => {
      const p = (porPiloto[c.driverId] = porPiloto[c.driverId] || {
        id: c.driverId, name: c.name, nat: c.nat, titles: [], team: c.team
      });
      p.titles.push(c.season);
      p.team = c.team;
    });
    return Object.values(porPiloto)
      .map(p => ({ ...p, n: p.titles.length, titles: p.titles.sort((a, b) => b - a) }))
      .sort((a, b) => b.n - a.n || a.name.localeCompare(b.name));
  }

  function pintarHofPilotos(champs) {
    const grid = $('#drvGrid');
    const status = $('#drvStatus');
    if (!grid) return;
    const lista = buildHofPilotos(champs);
    grid.dataset.hofPil = 'ok';
    grid.innerHTML = lista.map(p => `
      <article class="hof-card">
        <div class="hof-top">
          <span class="hof-num">${p.n}</span>
          <span class="hof-lbl">${p.n === 1 ? 'título' : 'títulos'}</span>
        </div>
        <div class="hof-name">${esc(p.name)}</div>
        <div class="hof-pais">${esc(p.nat)}${p.team ? ' · ' + esc(p.team) : ''}</div>
        <div class="hof-yrs">${p.titles.map(y => `<span class="hof-yr">${y}</span>`).join('')}</div>
      </article>`).join('');
    if (status) status.textContent = lista.length + ' campeones del mundo · temporadas 1950–2025';
  }

  function renderHofPilotos() {
    const tab = $('#drvTabs .chip.on');
    if (!tab || tab.dataset.dt !== 'hof') return;

    const grid = $('#drvGrid');
    if (!grid) return;

    const champs = LIVE().champs || [];
    if (champs.length) {
      if (grid.dataset.hofPil !== 'ok') pintarHofPilotos(champs);
      return;
    }

    if (grid.dataset.hofPil !== 'loading') {
      grid.dataset.hofPil = 'loading';
      grid.innerHTML = '<p class="parche-loading">Cargando campeones…</p>';
      asegurarCampeones()
        .then(list => {
          const t = $('#drvTabs .chip.on');
          if (t && t.dataset.dt === 'hof') pintarHofPilotos(list);
        })
        .catch(err => {
          console.warn('[fOnefan] campeones', err);
          const g = $('#drvGrid');
          if (g) {
            g.dataset.hofPil = 'error';
            g.innerHTML = '<p class="parche-loading">No se pudo cargar el Salón de la Fama. Tocá Recargar.</p>';
          }
        });
    }
  }

  function setDrvTab(dt) {
    document.querySelectorAll('#drvTabs .chip').forEach(c => {
      c.classList.toggle('on', c.dataset.dt === dt);
    });
    const tools = $('#drvTools');
    if (tools) tools.style.display = 'none';

    const grid = $('#drvGrid');
    const status = $('#drvStatus');
    if (status) status.textContent = '';
    if (!grid) return;

    grid.dataset.key = '';
    grid.dataset.hofPil = '';
    grid.innerHTML = '';

    if (dt === 'act') renderDrivers();
    else renderHofPilotos();
  }

  document.addEventListener('click', e => {
    const chip = e.target.closest && e.target.closest('#drvTabs .chip');
    if (!chip) return;
    e.stopImmediatePropagation();
    e.preventDefault();
    setDrvTab(chip.dataset.dt);
  }, true);

  /* Salón de la Fama de escuderías*/

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
    grid.dataset.key = '';
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
  }

  /*Mensajes y avisos*/

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

  /*Circuitos*/

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
        return { x: x, dist, prio };
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

  /*Trazados en calendario y "Próximas"*/

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

  /*Carrera en curso (fin de semana activo)*/
  function rangoFinDeSemana(race) {
    const ses = (race.sessions || [])
      .map(s => Date.parse(s.when))
      .filter(t => !isNaN(t))
      .sort((a, b) => a - b);
    if (!ses.length) return null;
    return { inicio: ses[0] - 60 * 60 * 1000, fin: ses[ses.length - 1] + 3 * 60 * 60 * 1000 };
  }

  function carreraEnCurso(race) {
    if (!race || race.done) return false;
    const r = rangoFinDeSemana(race);
    if (!r) return false;
    const now = Date.now();
    return now >= r.inicio && now <= r.fin;
  }

  // Marca la tarjeta en curso en Calendario, Próximas (Inicio) y el hero del próximo GP.
  function marcarCarreraEnCurso() {
    const races = getRaces();

    // Calendario: tarjeta completa + etiqueta
    const grid = document.getElementById('calGrid');
    if (grid) {
      grid.querySelectorAll('[data-race]').forEach(card => {
        const race = races.find(r => r.id === card.dataset.race);
        const activa = carreraEnCurso(race);
        card.classList.toggle('race-live', activa);
        let tag = card.querySelector('.race-live-tag');
        if (activa && !tag) {
          tag = document.createElement('div');
          tag.className = 'race-live-tag';
          tag.innerHTML = '<i></i>Fin de semana en curso';
          const foot = card.querySelector('.foot');
          if (foot) card.insertBefore(tag, foot);
          else card.appendChild(tag);
        } else if (!activa && tag) {
          tag.remove();
        }
      });
    }

    // Inicio: "Próximas carreras"
    const up = document.getElementById('upList');
    if (up) {
      up.querySelectorAll('[data-race]').forEach(item => {
        const race = races.find(r => r.id === item.dataset.race);
        const activa = carreraEnCurso(race);
        item.classList.toggle('race-live', activa);
        let tag = item.querySelector('.race-live-tag');
        if (activa && !tag) {
          tag = document.createElement('div');
          tag.className = 'race-live-tag';
          tag.innerHTML = '<i></i>En curso';
          item.appendChild(tag);
        } else if (!activa && tag) {
          tag.remove();
        }
      });
    }

    // Inicio: hero con el próximo Gran Premio
    const hero = document.querySelector('.hero-r');
    if (hero) {
      const next = races.find(r => !r.done);
      const activa = carreraEnCurso(next);
      hero.classList.toggle('race-live-hero', activa);
    }
  }

  /*Vuelta rápida en la ficha de carreras finalizadas*/
  const FL_MEM = {};
  const FL_PEND = {};
  const FL_KEY = round => 'fo-vl:' + round;
  let flRaceActiva = null;   
  let flObserver = null;     
  function getFastestLap(round) {
    if (FL_MEM[round]) return Promise.resolve(FL_MEM[round]);

    try {
      const g = JSON.parse(localStorage.getItem(FL_KEY(round)) || 'null');
      if (g && (g.none || (g.time && g.name))) {
        FL_MEM[round] = g;
        return Promise.resolve(g);
      }
    } catch (e) {}

    if (FL_PEND[round]) return FL_PEND[round];

    FL_PEND[round] = (async () => {
      try {
        const j = await a0_0x182c22('/' + a0_0x30d883 + '/' + round + '/fastest/1/results.json');
        const race = j && j.MRData && j.MRData.RaceTable && j.MRData.RaceTable.Races[0];
        const res = race && race.Results && race.Results[0];
        const fl = res && res.FastestLap;
        const info = (fl && fl.Time && fl.Time.time)
          ? {
              name: a0_0x505882(res.Driver),
              team: (res.Constructor && res.Constructor.name) || '',
              time: fl.Time.time
            }
          : { none: true };
        FL_MEM[round] = info;
        try { localStorage.setItem(FL_KEY(round), JSON.stringify(info)); } catch (e) {}
        return info;
      } catch (e) {
        return null;
      } finally {
        delete FL_PEND[round];
      }
    })();
    return FL_PEND[round];
  }

  function fastestBoxHTML(info) {
    if (info.none) {
      return `
        <div class="fl-box">
          <h4>Vuelta rápida</h4>
          <p class="fl-none">Sin dato de vuelta rápida para esta carrera.</p>
        </div>`;
    }
    return `
      <div class="fl-box">
        <h4>Vuelta rápida</h4>
        <div class="fl-main">
          <span class="fl-tag">Mejor vuelta</span>
          <span class="fl-time">${esc(info.time)}</span>
        </div>
        <div class="fl-driver">${esc(info.name)}</div>
        ${info.team ? `<div class="fl-team">${esc(info.team)}</div>` : ''}
      </div>`;
  }

  function insertarFastestSiFalta() {
    const body = $('#mBody');
    if (!body || flRaceActiva == null) return;
    if (body.querySelector('.fl-box')) return;
    if (!body.querySelector('.line')) return;
    const info = FL_MEM[flRaceActiva];
    if (!info) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = fastestBoxHTML(info).trim();
    body.appendChild(wrap.firstElementChild);
  }

  function observarFicha() {
    const body = $('#mBody');
    if (!body) return;
    if (!flObserver) {
      flObserver = new MutationObserver(() => {
        if (flRaceActiva == null) return;
        flObserver.disconnect();
        try { insertarFastestSiFalta(); } finally {
          flObserver.observe(body, { childList: true, subtree: false });
        }
      });
    }
    flObserver.observe(body, { childList: true, subtree: false });
  }

  document.addEventListener('click', e => {
    const c = e.target.closest('[data-race]');
    if (!c) return;
    const race = getRaces().find(r => r.id === c.dataset.race);
    if (!race || !race.done) { flRaceActiva = null; return; }

    flRaceActiva = race.round;
    observarFicha();
    getFastestLap(race.round).then(info => {
      if (info && flRaceActiva === race.round) insertarFastestSiFalta();
    });
  }, true);

  document.addEventListener('click', e => {
    if (e.target.closest('.x, #mClose')) flRaceActiva = null;
  });

  /*Campeonato*/

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

  /*Modal y horarios*/

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

  /*Top 3 de sesiones terminadas y clasificación*/

  const OF1_BASE = 'https://api.openf1.org/v1/';
  const topCache = {};
  let sesionesCache = null;
  let sesionesCacheAt = 0;
  const SESIONES_TTL = 30 * 60 * 1000; 

  let of1PausaHasta = 0;

async function of1(path) {
  if (Date.now() < of1PausaHasta) throw new Error('OpenF1 en pausa');
  const r = await fetch(OF1_BASE + path);
  if (r.status === 429) {
    of1PausaHasta = Date.now() + 60 * 1000;
    throw new Error('HTTP 429');
  }
  if (!r.ok) throw new Error('HTTP ' + r.status);
  return await r.json();
}

  async function sesionesOF1() {
    const ahora = Date.now();
    if (sesionesCache && ahora - sesionesCacheAt < SESIONES_TTL) return sesionesCache;
    const datos = await of1('sessions?year=2026');
    sesionesCache = datos;
    sesionesCacheAt = ahora;
    return datos;
  }

  function etiquetaSesionTop(name) {
    const n = String(name || '').toLowerCase();
    if (n.includes('practice 1')) return 'Práctica 1';
    if (n.includes('practice 2')) return 'Práctica 2';
    if (n.includes('practice 3')) return 'Práctica 3';
    if (n.includes('sprint qualifying') || n.includes('sprint shootout')) return 'Clasificación Sprint';
    if (n.includes('sprint')) return 'Carrera Sprint';
    if (n.includes('qualifying')) return 'Clasificación';
    return name;
  }

  function fmtTiempo(v) {
    if (v == null || isNaN(v)) return '—';
    const m = Math.floor(v / 60);
    return m + ':' + (v - m * 60).toFixed(3).padStart(6, '0');
  }

  async function topSesion(session) {
    const key = session.session_key;
    if (topCache[key]) return topCache[key];
    try {
      const guardado = JSON.parse(localStorage.getItem('fo-top:' + key) || 'null');
      if (guardado && guardado.length) { topCache[key] = guardado; return guardado; }
    } catch (e) {}
    const [res, drv] = await Promise.all([
      of1('session_result?session_key=' + key),
      of1('drivers?session_key=' + key)
    ]);
    const info = {};
    drv.forEach(d => { info[d.driver_number] = d; });
    const top = res
      .filter(x => +x.position > 0 && !x.dnf && !x.dns && !x.dsq)
      .sort((a, b) => a.position - b.position)
      .slice(0, 3)
      .map(x => {
        const d = info[x.driver_number] || {};
        const dur = Array.isArray(x.duration) ? x.duration.filter(v => v != null).pop() : x.duration;
        return { pos: +x.position, name: d.full_name || d.last_name || '—', time: fmtTiempo(dur) };
      });
    if (top.length) {
      topCache[key] = top;
      try { localStorage.setItem('fo-top:' + key, JSON.stringify(top)); } catch (e) {}
    }
    return top;
  }

  function tarjetaTop(titulo, filas) {
    return `
      <div class="box" style="margin-top:12px">
        <h4>🏁 ${esc(titulo)} · Top 3</h4>
        <div class="parche-top-list">
          ${filas.map(f => `<div class="line"><span>P${f.pos} · ${esc(f.name)}</span><strong>${esc(f.time)}</strong></div>`).join('')}
        </div>
      </div>`;
  }

  async function bloqueResultados(race) {
    const now = Date.now();
    const partes = [];
    try {
      const whens = (race.sessions || []).map(s => Date.parse(s.when)).filter(t => !isNaN(t));
      if (whens.length) {
        const desde = Math.min(...whens) - 86400000;
        const hasta = Math.max(...whens) + 86400000;
        const todas = await sesionesOF1();
        const terminadas = todas
          .filter(s => {
            const inicio = Date.parse(s.date_start);
            if (isNaN(inicio) || inicio < desde || inicio > hasta) return false;
            const fin = Date.parse(s.date_end) || inicio + 7200000;
            return fin < now;
          })
          .sort((a, b) => Date.parse(a.date_start) - Date.parse(b.date_start));

        for (const s of terminadas) {
          const top = await topSesion(s);
          if (top.length) partes.push(tarjetaTop(etiquetaSesionTop(s.session_name), top));
        }
      }
    } catch (e) {
      console.warn('[fOnefan] sesiones no disponibles:', e.message);
    }
    try {
      const data = await a0_0x5632f4(race.round);
      if (data && data.quali && data.quali.length && !partes.some(p => /Clasificación ·/.test(p) || />Clasificación</.test(p))) {
        const quali = data.quali.slice(0, 3).map(q => ({ pos: q.pos, name: q.name, time: q.time }));
        partes.push(tarjetaTop('Clasificación', quali));
      }
    } catch (e) {
      console.warn('[fOnefan] clasificación no disponible:', e.message);
    }

    if (!partes.length) return '';
    return `<div class="parche-res-title">Resultados de sesiones terminadas:</div>${partes.join('')}`;
  }

  function openHorarios(race) {
    const b = $('#mBody');
    const m = $('#modal');
    if (!b || !m) return;
    b.innerHTML = `
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
      </div>
      <div id="parcheTops"></div>`;
    const panel = m.querySelector('.panel-m');
    if (panel) panel.scrollTop = 0;
    m.classList.add('open');
    document.body.style.overflow = 'hidden';

    bloqueResultados(race)
      .then(html => {
        const cont = document.getElementById('parcheTops');
        if (cont && cont.isConnected) cont.innerHTML = html;
      })
      .catch(err => console.warn('[fOnefan] resultados de sesiones', err));
  }

  document.addEventListener('click', e => {
    const c = e.target.closest('[data-race]');
    if (!c) return;
    const race = getRaces().find(r => r.id === c.dataset.race);
    if (!race || race.done) return;
    openHorarios(race);
  });

  document.addEventListener('click', e => {
    const c = e.target.closest('.parche-card[data-team-name]');
    if (!c) return;
    const teamName = c.dataset.teamName;
    if (teamName && typeof window.a0_0x243121 === 'function') {
      window.a0_0x243121(teamName);
    }
  });

  /*Números de pilotos*/

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
          <p class="num-note">Datos de la temporada 2026. Los números de pilotos que se fueron hace poco pueden estar reservados.</p>
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

  function injectTrackFix() {
    if ($('#parcheTrackFix')) return;
    const st = document.createElement('style');
    st.id = 'parcheTrackFix';
    st.textContent = `
      /* Próximas carreras: el texto ocupa el espacio libre y el trazado tiene columna propia */
      #upList .up{
        display:grid !important;
        grid-template-columns:minmax(0,1fr) 64px !important;
        align-items:center;
        column-gap:14px;
        row-gap:6px;
        overflow:hidden;
      }
      #upList .up > *:not(.up-track){min-width:0;overflow-wrap:anywhere}
      #upList .up .up-track{
        grid-column:2;
        grid-row:1 / span 2;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        margin:0;
        padding:0;
        background:none;
        border:0;
        overflow:hidden;
        box-sizing:border-box;
      }
      #upList .up .up-track .up-svg{
        position:relative;
        width:56px;
        height:40px;
        flex-shrink:0;
        display:flex;
        align-items:center;
        justify-content:center;
        overflow:hidden;
      }
      #upList .up .up-track .up-svg svg{
        display:block;
        width:100%;
        height:100%;
        max-width:100%;
        max-height:100%;
        overflow:visible;
      }
      #upList .up .up-track .up-svg path{
        vector-effect:non-scaling-stroke;
        stroke-width:1.8;
      }
      #upList .up .up-track small{display:none}

      /* Calendario: misma idea, caja fija dentro de la tarjeta */
      #calGrid .cal-track{
        position:relative;
        height:100px;
        overflow:hidden;
        margin:8px 0 2px;
        display:flex;
        justify-content:center;
        align-items:center;
        box-sizing:border-box;
      }
      #calGrid .cal-track svg{
        width:100%;
        height:100%;
        max-width:180px;
        max-height:100%;
        overflow:visible;
        display:block;
      }

      @media (max-width:640px){
        #upList .up{grid-template-columns:minmax(0,1fr) 48px !important;column-gap:10px}
        #upList .up .up-track .up-svg{width:44px;height:32px}
      }
    `;
    document.head.appendChild(st);
  }

  /*Botón "subir"*/

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
      injectStyles();
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
      marcarCarreraEnCurso();
      renderHofPilotos();
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

  
(function () {
  if (typeof INFO_SECTIONS === 'undefined') return;
  const sec = INFO_SECTIONS.find(s => /neum[aá]tic/i.test(s.title || ''));
  if (!sec) return;
  sec.items = sec.items.filter(it => !(it.type === 'card' && /undercut/i.test(it.title || '')));
})();
})();