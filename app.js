// ================= DRIVERWIN · DATOS EN VIVO (Jolpica-F1 / Ergast) =================

const API = 'https://api.jolpi.ca/ergast/f1';
const SEASON = 2026;
const ART = 'America/Argentina/Buenos_Aires';

const TEAM_COLORS = {
  mercedes: '#27F4D2', ferrari: '#E8002D', mclaren: '#FF8000',
  red_bull: '#3671C6', redbull: '#3671C6', rb: '#6692FF', alpine: '#0093CC',
  haas: '#B6BABD', audi: '#52E252', sauber: '#52E252',
  williams: '#64C4FF', aston_martin: '#229971', cadillac: '#C9C9D1'
};

const FLAGS = {
  Australia:'🇦🇺', China:'🇨🇳', Japan:'🇯🇵', Bahrain:'🇧🇭', 'Saudi Arabia':'🇸🇦',
  USA:'🇺🇸', Italy:'🇮🇹', Monaco:'🇲🇨', Spain:'🇪🇸', Canada:'🇨🇦', Austria:'🇦🇹',
  UK:'🇬🇧', Hungary:'🇭🇺', Belgium:'🇧🇪', Netherlands:'🇳🇱', Azerbaijan:'🇦🇿',
  Singapore:'🇸🇬', Mexico:'🇲🇽', Brazil:'🇧🇷', UAE:'🇦🇪', Qatar:'🇶🇦'
};

const SESSION_NAMES = {
  FirstPractice: 'Práctica 1',
  SecondPractice: 'Práctica 2',
  ThirdPractice: 'Práctica 3',
  SprintQualifying: 'Clasificación Sprint',
  Sprint: 'Carrera Sprint',
  Qualifying: 'Clasificación'
};

const S = {
  source: 'api',        // 'api' | 'local'
  calendar: [],
  drivers: [],          // {id,name,team,teamName,basePts,pos}
  teams: [],            // {id,name,color,pts}
  history: [],          // {y,d,t}
  sim: {},
  details: {},          // cache de resultados por ronda
  updated: null
};

const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lastName = n => String(n).split(' ').pop();
const fmtDate = iso => new Date(iso + 'T00:00:00').toLocaleDateString('es', { day: 'numeric', month: 'short' });
const drvName = d => `${d.givenName} ${d.familyName}`;
const nextRace = () => S.calendar.find(r => !r.done) || null;
const teamColorByName = name => {
  const t = S.teams.find(x => x.name === name);
  return t ? t.color : '#888';
};

/* ============ HORA ARGENTINA ============ */
const fmtART = iso => {
  const t = new Date(iso).toLocaleString('es', {
    weekday: 'long', day: 'numeric', month: 'long', timeZone: ART
  });
  return t.charAt(0).toUpperCase() + t.slice(1);
};
const hourART = iso => new Date(iso).toLocaleTimeString('es', {
  hour: '2-digit', minute: '2-digit', timeZone: ART
});

/* ============ CARGA DE DATOS ============ */
async function getJSON(path) {
  const res = await fetch(API + path);
  if (!res.ok) throw new Error(`HTTP ${res.status} en ${path}`);
  return res.json();
}

function parseCalendar(json) {
  return json.MRData.RaceTable.Races.map(r => {
    const local = CALENDAR.find(c => c.r === +r.round);
    const when = r.time ? `${r.date}T${r.time}` : `${r.date}T23:59:59`;
    const loc = r.Circuit.Location;

    const sessions = [];
    for (const key of Object.keys(SESSION_NAMES)) {
      const s = r[key];
      if (!s?.date) continue;
      sessions.push({
        name: SESSION_NAMES[key],
        when: s.time ? `${s.date}T${s.time}` : `${s.date}T12:00:00Z`,
        tbc: !s.time
      });
    }
    sessions.push({ name: 'Carrera', when, tbc: !r.time });
    sessions.sort((a, b) => new Date(a.when) - new Date(b.when));

    return {
      round: +r.round,
      id: 'r' + r.round,
      name: local?.name || r.raceName,
      dateLabel: local?.date || fmtDate(r.date),
      start: r.date,
      when,
      sprint: !!r.Sprint,
      flag: FLAGS[loc.country] || '🏁',
      circuit: r.Circuit.circuitName,
      place: `${loc.locality}, ${loc.country}`,
      sessions,
      done: new Date(when) < new Date()
    };
  });
}

function parseDrivers(json) {
  const list = json.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
  return list.map(s => ({
    id: s.Driver.driverId,
    name: drvName(s.Driver),
    team: s.Constructors[0]?.constructorId || '',
    teamName: s.Constructors[0]?.name || '—',
    basePts: +s.points,
    pos: +s.position
  }));
}

function parseTeams(json) {
  const list = json.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || [];
  return list.map(s => ({
    id: s.Constructor.constructorId,
    name: s.Constructor.name,
    color: TEAM_COLORS[s.Constructor.constructorId] || '#888',
    pts: +s.points
  }));
}

async function loadSeason() {
  const [cal, ds, cs] = await Promise.all([
    getJSON(`/${SEASON}.json?limit=100`),
    getJSON(`/${SEASON}/driverStandings.json`),
    getJSON(`/${SEASON}/constructorStandings.json`)
  ]);
  S.calendar = parseCalendar(cal);
  S.drivers = parseDrivers(ds);
  S.teams = parseTeams(cs);
  if (!S.calendar.length || !S.drivers.length) throw new Error('Respuesta vacía de la API');
}

function loadLocal() {
  S.calendar = CALENDAR.map(r => ({
    round: r.r, id: r.id, name: r.name, dateLabel: r.date, start: r.start,
    when: r.start + 'T23:59:59', sprint: r.sprint, flag: r.flag,
    circuit: '', place: '', sessions: [], done: r.done
  }));
  S.drivers = DRIVERS.map(d => ({
    id: d.id, name: d.name, team: d.team,
    teamName: (TEAMS.find(t => t.id === d.team) || {}).name || '—',
    basePts: d.basePts, pos: 0
  }));
  S.teams = TEAMS.map(t => ({
    id: t.id, name: t.name, color: t.color,
    pts: DRIVERS.filter(d => d.team === t.id).reduce((s, d) => s + d.basePts, 0)
  }));
  S.history = HISTORY.map(h => ({ y: h.y, d: h.d, t: h.t }));
  S.source = 'local';
}

async function loadHistory() {
  const years = [SEASON - 1, SEASON - 2, SEASON - 3];
  const res = await Promise.allSettled(years.map(y =>
    getJSON(`/${y}/driverStandings.json`).then(j => ({ y, j }))));
  const out = res
    .filter(r => r.status === 'fulfilled')
    .map(({ value: { y, j } }) => {
      const champ = j.MRData.StandingsTable.StandingsLists[0]?.DriverStandings[0];
      return champ ? { y, d: drvName(champ.Driver), t: champ.Constructors[0]?.name || '—' } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.y - a.y);
  return out.length ? out : HISTORY.map(h => ({ y: h.y, d: h.d, t: h.t }));
}

/* Resultados de una ronda disputada (se piden al abrirla) */
async function loadDetail(round) {
  if (S.details[round]) return S.details[round];
  const [res, qua, spr, ds, cs] = await Promise.allSettled([
    getJSON(`/${SEASON}/${round}/results.json`),
    getJSON(`/${SEASON}/${round}/qualifying.json`),
    getJSON(`/${SEASON}/${round}/sprint.json`),
    getJSON(`/${SEASON}/${round}/driverStandings.json`),
    getJSON(`/${SEASON}/${round}/constructorStandings.json`)
  ]);
  const val = (x, f) => (x.status === 'fulfilled' ? f(x.value) : []);

  const d = {
    race: val(res, j => (j.MRData.RaceTable.Races[0]?.Results || []).map(x => ({
      pos: x.position, name: drvName(x.Driver), team: x.Constructor.name,
      pts: x.points, time: x.Time?.time || x.status
    }))),
    quali: val(qua, j => (j.MRData.RaceTable.Races[0]?.QualifyingResults || []).slice(0, 3).map(x => ({
      pos: x.position, name: drvName(x.Driver), time: x.Q3 || x.Q2 || x.Q1 || '—'
    }))),
    sprint: val(spr, j => (j.MRData.RaceTable.Races[0]?.SprintResults || []).slice(0, 3).map(x => ({
      pos: x.position, name: drvName(x.Driver), pts: x.points
    }))),
    drivers: val(ds, j => (j.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || []).map(x => ({
      pos: x.position, name: drvName(x.Driver), pts: x.points
    }))),
    teams: val(cs, j => (j.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || []).map(x => ({
      pos: x.position, name: x.Constructor.name, pts: x.points
    })))
  };
  S.details[round] = d;
  return d;
}

/* ============ CAMPEONATO Y SIMULACIÓN ============ */
function standings(sim = {}) {
  const delta = {};
  Object.values(sim).forEach(r => {
    r.race.forEach((id, i)  => { if (id) delta[id] = (delta[id] || 0) + PTS[i]; });
    r.sprint.forEach((id, i) => { if (id) delta[id] = (delta[id] || 0) + SPR[i]; });
  });
  const drivers = S.drivers
    .map(d => ({ ...d, pts: d.basePts + (delta[d.id] || 0) }))
    .sort((a, b) => b.pts - a.pts);
  const teams = S.teams
    .map(t => ({
      ...t,
      pts: t.pts + S.drivers.filter(d => d.team === t.id).reduce((s, d) => s + (delta[d.id] || 0), 0)
    }))
    .sort((a, b) => b.pts - a.pts);
  return { drivers, teams };
}

/* ============ NAVEGACIÓN ============ */
function show(v) {
  document.querySelectorAll('.view').forEach(s => s.classList.toggle('active', s.id === 'v-' + v));
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============ INICIO ============ */
let cdTimer = null;
function renderHome() {
  const next = nextRace();
  const leader = standings().drivers[0];

  if (next) {
    $('#nextName').textContent = next.name;
    $('#nextDate').textContent = `${next.dateLabel} · ${next.sprint ? 'Formato Sprint' : 'Fin de semana estándar'}`;
    startCountdown(next.when);
  } else {
    $('#nextName').textContent = 'Temporada finalizada';
    $('#nextDate').textContent = '';
  }

  $('#stTotal').textContent = S.calendar.length;
  $('#stDone').textContent = S.calendar.filter(r => r.done).length;
  $('#stLeft').textContent = S.calendar.filter(r => !r.done).length;
  $('#stLeader').textContent = lastName(leader.name);
  $('#stLeaderPts').textContent = `${leader.pts} pts · ${leader.teamName}`;

  $('#upList').innerHTML = S.calendar.filter(r => !r.done).slice(0, 5).map(r =>
    `<div class="up" data-race="${r.id}"><span>${r.flag} &nbsp;${esc(r.name)}</span><small>${esc(r.dateLabel)}</small></div>`
  ).join('');
}

function startCountdown(iso) {
  clearInterval(cdTimer);
  const target = new Date(iso);
  const p = n => String(n).padStart(2, '0');
  const tick = () => {
    const diff = Math.max(0, target - new Date());
    $('#cdD').textContent = p(Math.floor(diff / 86400000));
    $('#cdH').textContent = p(Math.floor(diff / 3600000) % 24);
    $('#cdM').textContent = p(Math.floor(diff / 60000) % 60);
    $('#cdS').textContent = p(Math.floor(diff / 1000) % 60);
  };
  tick();
  cdTimer = setInterval(tick, 1000);
}

/* ============ CALENDARIO ============ */
let calFilter = 'all';
function renderCalendar() {
  const next = nextRace();
  const list = S.calendar.filter(r =>
    calFilter === 'all' || (calFilter === 'done' ? r.done : !r.done));

  $('#calGrid').innerHTML = list.map((r, i) => {
    const isNext = next && r.id === next.id;
    const label = r.done ? 'Finalizada' : (isNext ? 'Próxima' : 'Programada');
    const cls = r.done ? 'b-done' : (isNext ? 'b-next' : 'b-soon');
    return `
    <article class="glass race ${r.done ? 'done' : ''} ${isNext ? 'next' : ''}" data-race="${r.id}" style="animation-delay:${i * 40}ms">
      <div class="rnd">RONDA ${String(r.round).padStart(2, '0')} · ${esc(r.dateLabel)}</div>
      <div class="flag">${r.flag}</div>
      <h3>${esc(r.name)}</h3>
      <div class="sub">${r.sprint ? '⚡ Formato Sprint' : 'Fin de semana estándar'}</div>
      <div class="foot">
        <span class="badge ${cls}">${label}</span>
        <span>${r.done ? 'Ver resultados →' : 'Ver ficha →'}</span>
      </div>
    </article>`;
  }).join('') || '<p class="muted">No hay rondas en este filtro.</p>';
}

/* ============ MODAL ============ */
function openModal(html) {
  $('#mBody').innerHTML = html;
  $('#modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  $('#modal').classList.remove('open');
  document.body.style.overflow = '';
}
const modalHead = r => `
  <span class="eyebrow">Ronda ${r.round} · ${esc(r.dateLabel)}</span>
  <h3 class="display m-title">${esc(r.name)}</h3>`;

function sessionsHTML(r) {
  if (!r.sessions.length) {
    return '<p class="muted">Horarios no disponibles. Se cargan desde la API cuando hay conexión.</p>';
  }
  const now = new Date();
  const nextIdx = r.sessions.findIndex(s => new Date(s.when) > now);
  return `<div class="sess-grid">${r.sessions.map((s, i) => {
    const past = new Date(s.when) < now;
    const isNext = i === nextIdx;
    return `
      <div class="sess ${past ? 'past' : ''} ${isNext ? 'is-next' : ''}">
        <span class="sess-name">${esc(s.name)}</span>
        <strong class="sess-time">${s.tbc ? 'Por confirmar' : hourART(s.when) + ' hs'}</strong>
        <small>${s.tbc ? '' : fmtART(s.when)}</small>
      </div>`;
  }).join('')}</div>`;
}

async function openRace(id) {
  const r = S.calendar.find(x => x.id === id);
  if (!r) return;

  if (!r.done) {
    const next = nextRace();
    const estado = next && next.id === r.id ? 'Próximo Gran Premio' : 'Programado';
    const notes = r.sprint
      ? 'Fin de semana con Sprint. La clasificación Sprint fija la parrilla de la Carrera Sprint, que reparte puntos del 1.º al 8.º (8-7-6-5-4-3-2-1). La clasificación principal fija la parrilla de la carrera.'
      : 'Fin de semana estándar. La clasificación principal fija la parrilla de la carrera, que reparte puntos del 1.º al 10.º (25-18-15-12-10-8-6-4-2-1).';

    return openModal(`${modalHead(r)}
      <div class="box" style="margin-bottom:18px">
        <h4>📅 Horarios · Hora de Argentina (ART)</h4>
        ${sessionsHTML(r)}
      </div>
      <div class="m-grid">
        <div class="box">
          <h4>ℹ️ Detalles</h4>
          <div class="line"><span>Circuito</span><strong>${esc(r.circuit || '—')}</strong></div>
          <div class="line"><span>Ubicación</span><strong>${esc(r.place || '—')}</strong></div>
          <div class="line"><span>Formato</span><strong>${r.sprint ? 'Con Sprint' : 'Estándar'}</strong></div>
          <div class="line"><span>Estado</span><strong>${estado}</strong></div>
        </div>
        <div class="box">
          <h4>💡 Lo que hay que saber</h4>
          <p class="muted" style="font-size:13px;line-height:1.7">${notes}</p>
          <p class="muted" style="font-size:13px;line-height:1.7;margin-top:10px">Los horarios se muestran en hora de Argentina (UTC−3), sin cambio de horario.</p>
        </div>
      </div>`);
  }

  if (S.source === 'local') {
    return openModal(`${modalHead(r)}
      <div class="box"><p class="muted">Los resultados por carrera requieren conexión a la API.</p></div>`);
  }

  openModal(`${modalHead(r)}<p class="muted">Cargando resultados…</p>`);
  try {
    const d = await loadDetail(r.round);
    $('#mBody').innerHTML = detailHTML(r, d);
  } catch (e) {
    console.warn(e);
    $('#mBody').innerHTML = `${modalHead(r)}
      <div class="box"><p class="muted">No se pudieron cargar los resultados. Intenta de nuevo más tarde.</p></div>`;
  }
}

function detailHTML(r, d) {
  if (!d.race.length) {
    return `${modalHead(r)}<div class="box"><p class="muted">Aún no hay resultados publicados para esta ronda.</p></div>`;
  }
  const quali = d.quali.map(q =>
    `<div class="line"><span>P${q.pos} · ${esc(q.name)}</span><strong>${esc(q.time)}</strong></div>`).join('');
  const sprint = d.sprint.map(s =>
    `<div class="line"><span>P${s.pos} · ${esc(s.name)}</span><strong>+${s.pts}</strong></div>`).join('');

  return `${modalHead(r)}
    <div class="m-grid">
      <div class="box"><h4>🏁 Clasificación · Top 3</h4>${quali || '<p class="muted">Sin datos</p>'}</div>
      ${r.sprint ? `<div class="box"><h4>⚡ Sprint · Top 3</h4>${sprint || '<p class="muted">Sin datos</p>'}</div>` : ''}
    </div>
    <div class="box" style="margin-top:18px">
      <h4>🏆 Top 10 · Carrera principal</h4>
      <div class="top10">
        ${d.race.slice(0, 10).map(p => `
          <div class="p10" style="border-top:2px solid ${teamColorByName(p.team)}">
            <div class="k">P${p.pos}</div>
            <div class="nm">${esc(p.name)}</div>
            <div class="tm">${esc(p.team)}</div>
            <div class="pt">+${p.pts} pts</div>
          </div>`).join('')}
      </div>
    </div>
    <div class="m-grid" style="margin-top:18px">
      <div class="box"><h4>📊 Mundial de pilotos tras la carrera</h4>
        <div class="scroll">${d.drivers.map(x => `<div class="line"><span><span class="muted mono">#${x.pos}</span> &nbsp;${esc(x.name)}</span><strong>${x.pts}</strong></div>`).join('')}</div>
      </div>
      <div class="box"><h4>🛡️ Mundial de constructores tras la carrera</h4>
        <div class="scroll">${d.teams.map(x => `<div class="line"><span><span class="muted mono">#${x.pos}</span> &nbsp;${esc(x.name)}</span><strong>${x.pts}</strong></div>`).join('')}</div>
      </div>
    </div>`;
}

/* ============ CAMPEONATO ============ */
function renderStandings() {
  const { drivers, teams } = standings(S.sim);
  const maxD = drivers[0].pts || 1, maxT = teams[0].pts || 1;

  $('#drvTable').innerHTML = drivers.map((d, i) => `
    <div class="srow">
      <span class="pos">${String(i + 1).padStart(2, '0')}</span>
      <div class="who"><b>${esc(d.name)}</b>
        <div class="bar"><i style="width:${d.pts / maxD * 100}%;background:${teamColorByName(d.teamName)}"></i></div>
        <small>${esc(d.teamName)}</small></div>
      <span class="pts">${d.pts}</span>
    </div>`).join('');

  $('#teamTable').innerHTML = teams.map((t, i) => `
    <div class="srow">
      <span class="pos">${String(i + 1).padStart(2, '0')}</span>
      <div class="who"><b><span class="dot" style="background:${t.color}"></span>${esc(t.name)}</b>
        <div class="bar"><i style="width:${t.pts / maxT * 100}%;background:${t.color}"></i></div></div>
      <span class="pts">${t.pts}</span>
    </div>`).join('');
}

/* ============ CIRCUITOS (datos locales) ============ */
function renderCircuits() {
  $('#circGrid').innerHTML = CIRCUITS.map((c, i) => `
    <div class="glass circ" data-circ="${c.id}" style="animation-delay:${i * 90}ms">
      <span class="eyebrow">${esc(c.country)}</span>
      <h3>${esc(c.name)}</h3>
      <svg viewBox="0 0 100 100"><path d="${c.path}"/></svg>
      <div class="foot">Primer GP ${esc(c.firstGP)} · Ver ficha →</div>
    </div>`).join('');
}

function openCircuit(id) {
  const c = CIRCUITS.find(x => x.id === id);
  if (!c) return;
  openModal(`
    <span class="eyebrow">${esc(c.country)}</span>
    <h3 class="display m-title">${esc(c.name)}</h3>
    <div class="m-grid">
      <div class="svg-box"><svg viewBox="0 0 100 100"><path d="${c.path}"/></svg></div>
      <div style="display:grid;gap:12px;align-content:start">
        <div class="stat"><span>Primer Gran Premio</span><strong>${esc(c.firstGP)}</strong></div>
        <div class="stat"><span>Longitud</span><strong>${esc(c.length)}</strong></div>
        <div class="stat"><span>Récord de vuelta</span><strong>${esc(c.record)}</strong></div>
        <div class="stat"><span>Máximo ganador</span><strong>${esc(c.wins)}</strong></div>
      </div>
    </div>
    <div class="box" style="margin-top:18px;border-color:rgba(225,6,0,.3);background:rgba(225,6,0,.08)">
      <h4 style="color:var(--red)">Archivo histórico</h4>
      <p style="line-height:1.7;color:#d6d6de">${esc(c.history)}</p>
    </div>`);
}

/* ============ SALÓN DE LA FAMA ============ */
function renderHOF() {
  const leader = standings().drivers[0];
  const live = `
    <div class="glass champ live">
      <span class="eyebrow">En curso</span>
      <div class="big" style="margin-top:14px;font-size:64px">${SEASON}</div>
      <h3>${esc(leader.name)}</h3>
      <p class="t">Líder provisional · ${leader.pts} pts</p>
    </div>`;
  $('#hofGrid').innerHTML = live + S.history.map((h, i) => `
    <div class="glass champ" style="animation-delay:${(i + 1) * 90}ms">
      <div class="big">${h.y}</div>
      <h3>${esc(h.d)}</h3>
      <p class="t">${esc(h.t)}</p>
    </div>`).join('');
}

/* ============ SIMULADOR ============ */
let DRIVER_OPTS = '';
const slots = (type, rid, n) => Array.from({ length: n }, (_, i) => `
  <label class="slot">
    <span>${type === 'race' ? 'P' : 'S'}${i + 1} · ${type === 'race' ? PTS[i] : SPR[i]} pts</span>
    <select data-r="${rid}" data-t="${type}" data-i="${i}"><option value="">—</option>${DRIVER_OPTS}</select>
  </label>`).join('');

function renderSim() {
  const rem = S.calendar.filter(r => !r.done);
  DRIVER_OPTS = S.drivers.map(d => `<option value="${d.id}">${esc(d.name)}</option>`).join('');
  $('#simFav').innerHTML = '<option value="">Elige un piloto…</option>' + DRIVER_OPTS;

  $('#simRaces').innerHTML = rem.length
    ? rem.map((r, i) => `
      <details class="glass acc" ${i === 0 ? 'open' : ''}>
        <summary>
          <span class="mono muted" style="font-size:12px">R${r.round}</span>
          <strong>${r.flag} ${esc(r.name)}</strong>
          <span class="badge ${r.sprint ? 'b-sprint' : 'b-done'}">${r.sprint ? 'Sprint' : 'Estándar'}</span>
        </summary>
        <div class="sub-label">Carrera principal</div>
        <div class="slots">${slots('race', r.id, 10)}</div>
        ${r.sprint ? `<div class="sub-label">Sprint</div><div class="slots">${slots('sprint', r.id, 8)}</div>` : ''}
      </details>`).join('')
    : '<p class="glass muted" style="padding:24px;text-align:center">No quedan carreras por simular.</p>';

  updateSummary();
}

function updateSummary() {
  const { drivers, teams } = standings(S.sim);
  const leader = drivers[0];
  const fav = drivers.find(d => d.id === $('#simFav').value);
  const remaining = S.calendar.filter(r => !r.done).length;

  $('#simRank').innerHTML = drivers.slice(0, 6).map((d, i) => `
    <div class="line"><span><span class="muted mono">${i + 1}.</span> &nbsp;${esc(lastName(d.name))}</span>
    <strong style="color:${teamColorByName(d.teamName)}">${d.pts}</strong></div>`).join('');

  $('#simTeams').innerHTML = teams.slice(0, 5).map(t => `
    <div class="line"><span><span class="dot" style="background:${t.color}"></span>${esc(t.name)}</span><strong>${t.pts}</strong></div>`).join('');

  if (!fav) {
    $('#simFavPts').textContent = '—';
    $('#simFavName').textContent = 'Sin seleccionar';
    $('#simNote').innerHTML = 'Elige un piloto para analizar su camino al título.';
    return;
  }

  $('#simFavPts').innerHTML = `${fav.pts}<small>pts</small>`;
  $('#simFavName').textContent = fav.name;

  if (fav.id === leader.id) {
    $('#simNote').innerHTML = '<b>Líder proyectado.</b> Mantiene el destino del campeonato en sus manos.';
  } else {
    const gap = leader.pts - fav.pts;
    $('#simNote').innerHTML = remaining
      ? `<b>Brecha de ${gap} pts</b> con ${esc(lastName(leader.name))}. Para alcanzarlo necesitaría superar al líder por un promedio de <b>${(gap / remaining).toFixed(1)} pts</b> en cada carrera restante.`
      : `<b>Diferencia final: ${gap} pts.</b> No quedan carreras por disputar.`;
  }
}

/* ============ EVENTOS ============ */
document.addEventListener('click', e => {
  const viewBtn = e.target.closest('[data-view]');
  if (viewBtn) return show(viewBtn.dataset.view);

  const chip = e.target.closest('[data-f]');
  if (chip) {
    calFilter = chip.dataset.f;
    document.querySelectorAll('.chip').forEach(c => c.classList.toggle('on', c === chip));
    return renderCalendar();
  }

  const race = e.target.closest('[data-race]');
  if (race) return openRace(race.dataset.race);

  const circ = e.target.closest('[data-circ]');
  if (circ) return openCircuit(circ.dataset.circ);

  if (e.target.id === 'modal' || e.target.closest('#mClose')) closeModal();
});

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

$('#simRaces').addEventListener('change', e => {
  const s = e.target;
  if (!s.dataset.r) return;
  const { r, t } = s.dataset, i = +s.dataset.i, v = s.value;
  S.sim[r] ??= { race: Array(10).fill(''), sprint: Array(8).fill('') };
  S.sim[r][t][i] = v;
  if (v) S.sim[r][t].forEach((x, j) => {
    if (j !== i && x === v) {
      S.sim[r][t][j] = '';
      const other = document.querySelector(`select[data-r="${r}"][data-t="${t}"][data-i="${j}"]`);
      if (other) other.value = '';
    }
  });
  renderStandings();
  updateSummary();
});

$('#simFav').addEventListener('change', updateSummary);
$('#simReset').addEventListener('click', () => {
  Object.keys(S.sim).forEach(k => delete S.sim[k]);
  document.querySelectorAll('#simRaces select').forEach(s => s.value = '');
  renderStandings();
  updateSummary();
});

/* ============ INICIALIZACIÓN ============ */
function renderAll() {
  renderHome();
  renderCalendar();
  renderStandings();
  renderCircuits();
  renderHOF();
  renderSim();
  const footer = document.querySelector('footer');
  footer.textContent = S.source === 'api'
    ? `DriverWin · Datos en vivo: Jolpica-F1 · ${new Date().toLocaleTimeString('es', { hour: '2-digit', minute: '2-digit' })}`
    : 'DriverWin · Sin conexión a la API: mostrando datos locales';
}

(async function init() {
  try {
    await loadSeason();
    S.source = 'api';
  } catch (err) {
    console.warn('API no disponible, usando datos locales:', err);
    loadLocal();
  }
  try {
    S.history = await loadHistory();
  } catch {
    S.history = HISTORY.map(h => ({ y: h.y, d: h.d, t: h.t }));
  }
  renderAll();
})();