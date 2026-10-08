// app.js - Lógica principal de DriverWin

const pointsSystemRace = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
const pointsSystemSprint = [8, 7, 6, 5, 4, 3, 2, 1];
let simulationState = {};

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('navbar-container', 'components/navbar.html');
    await loadComponent('footer-container', 'components/footer.html');
    initApp();
});

async function loadComponent(id, file) {
    try {
        let response = await fetch(file);
        if (response.ok) {
            document.getElementById(id).innerHTML = await response.text();
        }
    } catch (e) { console.error(e); }
}

function initApp() {
    populateSelects();
    renderRacesSimulator();
    renderCalendar();
    renderHistory();
    renderCircuits();
    calculateStandings();
    loadFavoritesFromStorage();
    
    // Vista por defecto: Calendario
    switchMainTab('calendar');
}

function switchMainTab(tab) {
    const views = ['simulator', 'calendar', 'history', 'circuits'];
    const buttons = { 'simulator': 'navSimBtn', 'calendar': 'navCalBtn', 'history': 'navHistBtn', 'circuits': 'navCircBtn' };

    views.forEach(v => {
        const section = document.getElementById(`view${v.charAt(0).toUpperCase() + v.slice(1)}`);
        const btn = document.getElementById(buttons[v]);
        if (section) section.classList.add('hidden');
        if (btn) btn.className = "px-5 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition";
    });

    const activeSection = document.getElementById(`view${tab.charAt(0).toUpperCase() + tab.slice(1)}`);
    const activeBtn = document.getElementById(buttons[tab]);
    
    if (activeSection) activeSection.classList.remove('hidden');
    if (activeBtn) activeBtn.className = "px-5 py-2.5 rounded-lg bg-f1red text-white transition shadow-[0_0_15px_rgba(225,6,0,0.4)]";
}

function populateSelects() {
    const driverSelect = document.getElementById('favoriteDriver');
    const teamSelect = document.getElementById('favoriteTeam');
    if (!driverSelect) return;

    F1Data.drivers.forEach(d => driverSelect.appendChild(new Option(d.name, d.id)));
    F1Data.teams.forEach(t => teamSelect.appendChild(new Option(t.name, t.id)));

    driverSelect.addEventListener('change', updateFavorites);
    teamSelect.addEventListener('change', updateFavorites);
}

// Simulador con Acordeón usando únicamente las carreras restantes
function renderRacesSimulator() {
    const container = document.getElementById('racesContainer');
    if (!container) return;
    container.innerHTML = '';

    F1Data.remainingRaces.forEach((race) => {
        let wrap = document.createElement('div');
        wrap.className = 'bg-f1card/60 border border-white/5 rounded-2xl shadow-lg backdrop-blur-sm overflow-hidden';
        
        let header = document.createElement('div');
        header.className = 'p-5 cursor-pointer hover:bg-white/5 transition flex justify-between items-center group';
        header.onclick = () => toggleAccordion(`acc-${race.id}`);
        header.innerHTML = `
            <div class="flex items-center space-x-4">
                <span class="text-f1red font-black text-xl italic w-8 text-center">R${race.round}</span>
                <div>
                    <h3 class="font-bold text-lg text-white group-hover:text-f1red transition">${race.name}</h3>
                    <span class="text-xs text-gray-500">${race.hasSprint ? '⚡ Incluye Sprint' : '🏁 Fin de Semana Normal'}</span>
                </div>
            </div>
            <div class="accordion-icon text-gray-500 group-hover:text-white">▼</div>
        `;

        let content = document.createElement('div');
        content.id = `acc-${race.id}`;
        content.className = 'accordion-content px-5 pb-6 border-t border-white/5 mx-2';
        
        let html = `<div class="mt-4"><p class="text-[10px] text-gray-400 mb-2 font-bold uppercase tracking-widest text-center">Predicción Carrera Principal</p><div class="grid grid-cols-2 sm:grid-cols-5 gap-3">`;
        for (let i = 0; i < 10; i++) {
            html += `<div>
                <span class="text-[10px] text-gray-500 block mb-1 font-semibold text-center">P${i+1}</span>
                <select data-race="${race.id}" data-type="race" data-pos="${i}" class="pos-select w-full bg-[#0a0a0c] border border-white/10 text-xs rounded-xl p-2.5 text-gray-300 focus:border-f1red focus:ring-1 focus:ring-f1red outline-none transition cursor-pointer">
                    <option value="">Piloto...</option>
                    ${F1Data.drivers.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
                </select>
            </div>`;
        }
        html += `</div></div>`;

        if (race.hasSprint) {
            html += `<div class="mt-6 pt-4 border-t border-white/5"><p class="text-[10px] text-gray-400 mb-2 font-bold uppercase tracking-widest text-center">Predicción Sprint</p><div class="grid grid-cols-2 sm:grid-cols-4 gap-3">`;
            for (let i = 0; i < 8; i++) {
                html += `<div>
                    <span class="text-[10px] text-gray-500 block mb-1 font-semibold text-center">P${i+1}</span>
                    <select data-race="${race.id}" data-type="sprint" data-pos="${i}" class="pos-select w-full bg-[#0a0a0c] border border-white/10 text-xs rounded-xl p-2.5 text-gray-300 focus:border-f1red outline-none transition cursor-pointer">
                        <option value="">Piloto...</option>
                        ${F1Data.drivers.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
                    </select>
                </div>`;
            }
            html += `</div></div>`;
        }

        content.innerHTML = html;
        wrap.appendChild(header);
        wrap.appendChild(content);
        container.appendChild(wrap);
    });

    document.querySelectorAll('.pos-select').forEach(sel => {
        sel.addEventListener('change', (e) => handleSelectChange(e.target));
    });
}

function toggleAccordion(id) {
    const el = document.getElementById(id);
    const parent = el.parentElement;
    if (el.classList.contains('open')) {
        el.classList.remove('open');
        parent.classList.remove('open');
    } else {
        document.querySelectorAll('.accordion-content').forEach(acc => { acc.classList.remove('open'); acc.parentElement.classList.remove('open'); });
        el.classList.add('open');
        parent.classList.add('open');
    }
}

function handleSelectChange(target) {
    const { race: raceId, type, pos } = target.dataset;
    if (!simulationState[raceId]) simulationState[raceId] = { race: new Array(10).fill(''), sprint: new Array(8).fill('') };
    simulationState[raceId][type][parseInt(pos)] = target.value;
    calculateStandings();
}

function calculateStandings() {
    let driverPoints = {};
    F1Data.drivers.forEach(d => driverPoints[d.id] = d.basePts);

    Object.keys(simulationState).forEach(raceId => {
        let rData = simulationState[raceId];
        if (rData.race) rData.race.forEach((dId, i) => { if (dId) driverPoints[dId] = (driverPoints[dId] || 0) + pointsSystemRace[i]; });
        if (rData.sprint) rData.sprint.forEach((dId, i) => { if (dId) driverPoints[dId] = (driverPoints[dId] || 0) + pointsSystemSprint[i]; });
    });

    let sortedDrivers = Object.keys(driverPoints).map(id => ({ id, pts: driverPoints[id], obj: F1Data.drivers.find(d => d.id === id) })).sort((a, b) => b.pts - a.pts);

    let teamPoints = {};
    F1Data.teams.forEach(t => teamPoints[t.id] = 0);
    sortedDrivers.forEach(item => { teamPoints[item.obj.team] = (teamPoints[item.obj.team] || 0) + item.pts; });
    let sortedTeams = Object.keys(teamPoints).map(id => ({ id, pts: teamPoints[id], obj: F1Data.teams.find(t => t.id === id) })).sort((a, b) => b.pts - a.pts);

    renderTables(sortedDrivers, sortedTeams);
    updateScenarioAnalysis(sortedDrivers);
}

function renderTables(dSort, tSort) {
    const dBody = document.getElementById('driversTableBody');
    if (dBody) {
        dBody.innerHTML = '';
        dSort.forEach((d, i) => {
            dBody.innerHTML += `<tr class="hover:bg-white/5 transition"><td class="py-3 px-2 font-bold text-gray-500 text-xs">#${i + 1}</td><td class="py-3 font-semibold text-sm text-gray-200">${d.obj.name}</td><td class="py-3 text-right font-black text-f1red text-sm pr-2">${d.pts}</td></tr>`;
        });
    }
    const tBody = document.getElementById('teamsTableBody');
    if (tBody) {
        tBody.innerHTML = '';
        tSort.forEach((t, i) => {
            tBody.innerHTML += `<tr class="hover:bg-white/5 transition"><td class="py-3 px-2 font-bold text-gray-500 text-xs">#${i + 1}</td><td class="py-3 font-semibold text-sm text-gray-200">${t.obj.name}</td><td class="py-3 text-right font-black text-sm pr-2">${t.pts}</td></tr>`;
        });
    }
}

function switchTableTab(tab) {
    const isD = tab === 'drivers';
    document.getElementById('tabDriversBtn').className = `flex-1 pb-2 font-black text-xs border-b-2 uppercase tracking-wider transition ${isD ? 'border-f1red text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`;
    document.getElementById('tabTeamsBtn').className = `flex-1 pb-2 font-black text-xs border-b-2 uppercase tracking-wider transition ${!isD ? 'border-f1red text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`;
    document.getElementById('driversTableContainer').classList.toggle('hidden', !isD);
    document.getElementById('teamsTableContainer').classList.toggle('hidden', isD);
}

function updateFavorites() {
    const dId = document.getElementById('favoriteDriver').value;
    const tId = document.getElementById('favoriteTeam').value;
    const card = document.getElementById('favoriteCard');
    
    if (dId || tId) {
        card.classList.remove('hidden');
        let driver = F1Data.drivers.find(d => d.id === dId);
        let team = F1Data.teams.find(t => t.id === tId);
        document.getElementById('favDriverInfo').textContent = driver ? driver.name : '-';
        document.getElementById('favTeamInfo').textContent = team ? team.name : '-';
        localStorage.setItem('f1_fav_driver', dId);
        localStorage.setItem('f1_fav_team', tId);
    } else {
        card.classList.add('hidden');
    }
}

function updateScenarioAnalysis(sortedDrivers) {
    const dId = document.getElementById('favoriteDriver').value;
    const txt = document.getElementById('favScenarioText');
    if (!dId || !txt) return;

    let lead = sortedDrivers[0], fav = sortedDrivers.find(d => d.id === dId);
    if (fav.id === lead.id) txt.innerHTML = `<strong class="text-white block mb-1">¡Líder del Campeonato!</strong> Mantiene su destino en sus manos.`;
    else {
        let diff = lead.pts - fav.pts;
        txt.innerHTML = `<strong class="text-white block mb-1">Brecha: -${diff} pts</strong> Necesita un promedio de <span class="text-f1red font-bold">${(diff / F1Data.remainingRaces.length).toFixed(1)} pts</span> de recorte por carrera.`;
    }
}

function loadFavoritesFromStorage() {
    let sD = localStorage.getItem('f1_fav_driver'), sT = localStorage.getItem('f1_fav_team');
    if (sD) document.getElementById('favoriteDriver').value = sD;
    if (sT) document.getElementById('favoriteTeam').value = sT;
    updateFavorites();
}

function resetSimulation() {
    simulationState = {};
    document.querySelectorAll('.pos-select').forEach(sel => sel.value = "");
    document.querySelectorAll('.accordion-content').forEach(acc => { acc.classList.remove('open'); acc.parentElement.classList.remove('open'); });
    calculateStandings();
}

// Renderizar Calendario completo con transparencia para pasadas
function renderCalendar() {
    const c = document.getElementById('calendarContainer');
    if (!c) return;
    c.innerHTML = '';
    
    F1Data.calendar.forEach((race) => {
        let cardStyle = race.completed 
            ? "bg-f1card/20 border-white/5 opacity-30 grayscale hover:opacity-75 hover:grayscale-0 transition duration-500" 
            : "bg-f1card/60 backdrop-blur-sm border border-white/5 hover:border-f1red/40 hover:bg-white/5 transition duration-300 shadow-xl group";

        let badgeStyle = race.completed
            ? "bg-gray-800/40 text-gray-400 border border-gray-700/50"
            : "bg-f1red/10 text-f1red border border-f1red/20";

        let statusText = race.completed ? "✓ Finalizada" : "Próximamente";

        c.innerHTML += `
            <div class="${cardStyle} p-6 rounded-2xl flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-4">
                        <span class="text-[10px] font-black tracking-widest uppercase ${badgeStyle} px-2.5 py-1 rounded-md">Ronda ${race.round}</span>
                        <span class="text-sm font-black italic text-gray-400">${race.date}</span>
                    </div>
                    <h3 class="font-black text-2xl mt-2 text-white">${race.name}</h3>
                </div>
                <div class="mt-6 flex justify-between items-center text-xs text-gray-400 font-bold tracking-wide uppercase pt-3 border-t border-white/5">
                    <span>${race.hasSprint ? '⚡ Formato Sprint' : '🏁 Carrera Estándar'}</span>
                    <span class="${race.completed ? 'text-gray-500' : 'text-f1red'} font-bold">${statusText}</span>
                </div>
            </div>`;
    });
}

function renderHistory() {
    const c = document.getElementById('historyContainer');
    if (!c) return;
    c.innerHTML = '';
    Object.keys(F1Data.history).sort((a,b) => b - a).forEach(year => {
        let d = F1Data.history[year];
        c.innerHTML += `
            <div class="bg-f1card/50 backdrop-blur-sm border border-white/5 p-6 rounded-2xl text-center flex flex-col justify-between hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.8)] transition duration-300">
                <span class="text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600">${year}</span>
                <div class="mt-6 pt-5 border-t border-white/5 space-y-3">
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-widest">👑 Campeón<strong class="text-white block mt-1 text-base capitalize normal-case">${d.championDriver}</strong></p>
                    <p class="text-xs text-gray-500 font-bold uppercase tracking-widest">🛡️ Constructor<strong class="text-gray-300 block mt-1 text-sm capitalize normal-case">${d.championTeam}</strong></p>
                </div>
            </div>`;
    });
}

function renderCircuits() {
    const c = document.getElementById('circuitsContainer');
    if (!c) return;
    c.innerHTML = '';
    F1Data.circuits.forEach(circuit => {
        c.innerHTML += `
            <div onclick="openCircuitModal('${circuit.id}')" class="circuit-card bg-f1card/40 backdrop-blur-sm border border-white/5 p-8 rounded-3xl cursor-pointer shadow-xl relative overflow-hidden group">
                <div class="absolute -right-10 -bottom-10 w-64 h-64 opacity-20 group-hover:opacity-100 transition duration-500 pointer-events-none">
                    <svg viewBox="0 0 100 100" class="circuit-svg w-full h-full"><path d="${circuit.svgPath}" /></svg>
                </div>
                <div class="relative z-10 w-2/3">
                    <span class="text-xs font-bold text-f1red uppercase tracking-widest">${circuit.country}</span>
                    <h3 class="font-black text-3xl mt-1 mb-6 text-gray-200 group-hover:text-white transition">${circuit.name}</h3>
                    <span class="inline-block bg-white/10 backdrop-blur border border-white/10 text-xs px-4 py-2 rounded-xl text-white font-bold group-hover:bg-f1red group-hover:border-f1red transition shadow-lg">Analizar Pista →</span>
                </div>
            </div>`;
    });
}

function openCircuitModal(id) {
    const c = F1Data.circuits.find(c => c.id === id);
    if (!c) return;

    document.getElementById('modalCircuitCountry').textContent = c.country;
    document.getElementById('modalCircuitName').textContent = c.name;
    document.getElementById('modalCircuitSchedule').textContent = c.schedule;
    document.getElementById('modalCircuitSafety').textContent = c.safetyCarProb;
    document.getElementById('modalCircuitRecord').textContent = c.lapRecord;
    document.getElementById('modalCircuitWins').textContent = c.mostWins;
    document.getElementById('modalCircuitHistory').textContent = c.history;
    
    document.querySelector('#modalCircuitSvg path').setAttribute('d', c.svgPath);

    const m = document.getElementById('circuitModal');
    m.classList.remove('hidden');
    setTimeout(() => { m.classList.remove('opacity-0'); m.classList.add('opacity-100'); }, 10);
}

function closeCircuitModal() {
    const m = document.getElementById('circuitModal');
    m.classList.remove('opacity-100');
    m.classList.add('opacity-0');
    setTimeout(() => { m.classList.add('hidden'); }, 500);
}