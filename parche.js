/* =====================================================
   parche.js · fOnefan
   Restaura, sin tocar app.js:
   - Pilotos, escuderías y circuitos (si la sección quedó vacía)
   - Bloque "Pilotos con chances" bajo la tabla de constructores
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

  // Estado de las tarjetas (para abrir la ficha al tocarlas)
  const CARDS = { drv: [], team: [], race: [] };

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
      round: r.round || r.r,
      name: r.name,
      date: r.dateLabel || r.date || '',
      place: r.place || r.circuit || '',
      flag: r.flag || '',
      sprint: !!r.sprint,
      done: !!r.done
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

  /* ---------- Pilotos con chances ---------- */

  function renderContenders() {
    const dt = $('#drvTable');
    const anchor = dt ? dt.closest('.two') : null;
    const target = anchor || $('#v-standings');
    if (!target) return;

    // Elimina la versión anterior (si existe) y deja solo la nueva
    document.querySelectorAll('.contend').forEach(el => { if (el.id !== 'parcheChances') el.remove(); });

    let box = $('#parcheChances');
    if (!box) {
      box = document.createElement('section');
      box.id = 'parcheChances';
      box.className = 'glass contend';
      box.style.marginTop = '22px';
      target.after(box);
    }

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
      <div class="ct-head">
        <span class="eyebrow">Chances</span>
        <h3 class="display">Pilotos con chances de ser campeón</h3>
        <p class="muted">${left.length ? `Quedan ${left.length} carreras · ${pool} pts por repartir.` : 'Temporada finalizada.'}</p>
      </div>`;

    if (!left.length || leader.pts - second.pts > pool) {
      box.innerHTML = head + `
        <div class="ct-decided">
          <span class="eyebrow">${left.length ? 'Título matemáticamente decidido' : 'Campeón del mundo'}</span>
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

  /* ---------- Fichas al tocar una tarjeta ---------- */

  function openModal(html) {
    const m = $('#modal'), b = $('#mBody');
    if (!m || !b) return;
    b.innerHTML = html;
    m.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

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
      openModal(`
        <span class="eyebrow">Ronda ${pad(r.round)} · ${esc(r.flag)}</span>
        <h3 class="display m-title">${esc(r.name)}</h3>
        <div class="box">
          <div class="line"><span>Fechas</span><strong>${esc(r.date)}</strong></div>
          <div class="line"><span>Lugar</span><strong>${esc(r.place || '—')}</strong></div>
          <div class="line"><span>Formato</span><strong>${r.sprint ? 'Con Sprint' : 'Estándar'}</strong></div>
          <div class="line"><span>Estado</span><strong>${r.done ? 'Finalizada' : 'Por correr'}</strong></div>
        </div>`);
    }
  });

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
      renderDrivers();
      renderTeams();
      renderCircuits();
      renderContenders();
      checkMotores();
    } catch (err) {
      console.warn('[parche fOnefan]', err);
    }
  }

  window.addEventListener('load', () => {
    tick();
    setInterval(tick, 2500);
  });
})();