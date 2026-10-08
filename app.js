// app.js - Lógica principal e interactividad para DriverWin

const pointsSystemRace = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
const pointsSystemSprint = [8, 7, 6, 5, 4, 3, 2, 1];
let simulationState = {};

document.addEventListener('DOMContentLoaded', async () => {
    // 1. Cargar componentes externos primero
    await loadComponent('navbar-container', 'components/navbar.html');
    await loadComponent('footer-container', 'components/footer.html');

    // 2. Inicializar la aplicación una vez inyectados los elementos visuales
    initApp();
});

async function loadComponent(id, file) {
    try {
        let response = await fetch(file);
        if (!response.ok) throw new Error(`No se pudo cargar ${file}`);
        let html = await response.text();
        document.getElementById(id).innerHTML = html;
    } catch (error) {
        console.error(`Error en componente ${file}:`, error);
    }
}

function initApp() {
    populateSelects();
    renderRacesSimulator();
    renderCalendar();
    renderHistory();
    renderCircuits();
    calculateStandings();
    loadFavoritesFromStorage();
}

// Control de Pestañas Principales
function switchMainTab(tab) {
    const views = ['simulator', 'calendar', 'history', 'circuits'];
    const buttons = {
        'simulator': 'navSimBtn',
        'calendar': 'navCalBtn',
        'history': 'navHistBtn',
        'circuits': 'navCircBtn'
    };

    views.forEach(v => {
        const section = document.getElementById(`view${v.charAt(0).toUpperCase() + v.slice(1)}`);
        const btn = document.getElementById(buttons[v]);
        if (section) section.classList.add('hidden');
        if (btn) btn.className = "px-4 py-2 rounded-md text-gray-400 hover:text-white transition";
    });

    const activeSection = document.getElementById(`view${tab.charAt(0).toUpperCase() + tab.slice(1)}`);
    const activeBtn = document.getElementById(buttons[tab]);
    
    if (activeSection) activeSection.classList.remove('hidden');
    if (activeBtn) activeBtn.className = "px-4 py-2 rounded-md bg-f1red text-white transition font-bold";
}

// Poblar Selectores de Favoritos
function populateSelects() {
    const driverSelect = document.getElementById('favoriteDriver');
    const teamSelect = document.getElementById('favoriteTeam');
    if (!driverSelect || !teamSelect) return;

    F1Data.drivers.forEach(d => {
        let opt = document.createElement('option');
        opt.value = d.id;
        opt.textContent = d.name;
        driverSelect.appendChild(opt);
    });

    F1Data.teams.forEach(t => {
        let opt = document.createElement('option');
        opt.value = t.id;
        opt.textContent = t.name;
        teamSelect.appendChild(opt);
    });

    driverSelect.addEventListener('change', updateFavorites);
    teamSelect.addEventListener('change', updateFavorites);
}

// Renderizar Simulador de Carreras
function renderRacesSimulator() {
    const container = document.getElementById('racesContainer');
    if (!container) return;
    container.innerHTML = '';

    F1Data.remainingRaces.forEach(race => {
        let raceDiv = document.createElement('div');
        raceDiv.className = 'bg-gray-900/60 border border-gray-800 p-4 rounded-lg';
        
        let html = `<div class="flex justify-between items-center mb-3">
            <h3 class="font-bold text-sm text-f1red">${race.name}</h3>
            ${race.hasSprint ? '<span class="bg-yellow-500/10 text-yellow-500 text-[10px] px-2 py-0.5 rounded font-semibold">Sprint Weekend</span>' : ''}
        </div>`;

        // Carrera Principal
        html += `<div class="mb-2"><p class="text-[11px] text-gray-400 mb-1 font-semibold">Top 10 Carrera Principal:</p><div class="grid grid-cols-2 sm:grid-cols-5 gap-1.5">`;
        for (let i = 0; i < 10; i++) {
            html += `<div>
                <span class="text-[9px] text-gray-500 block">P${i+1}</span>
                <select data-race="${race.id}" data-type="race" data-pos="${i}" class="pos-select w-full bg-f1card border border-gray-700 text-xs rounded p-1 text-white focus:border-f1red">
                    <option value="">--</option>
                    ${F1Data.drivers.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
                </select>
            </div>`;
        }
        html += `</div></div>`;

        // Sprint
        if (race.hasSprint) {
            html += `<div class="mt-3 pt-3 border-t border-gray-800"><p class="text-[11px] text-gray-400 mb-1 font-semibold">Top 8 Carrera Sprint:</p><div class="grid grid-cols-2 sm:grid-cols-4 gap-1.5">`;
            for (let i = 0; i < 8; i++) {
                html += `<div>
                    <span class="text-[9px] text-gray-500 block">Sprint P${i+1}</span>
                    <select data-race="${race.id}" data-type="sprint" data-pos="${i}" class="pos-select w-full bg-f1card border border-gray-700 text-xs rounded p-1 text-white focus:border-f1red">
                        <option value="">--</option>
                        ${F1Data.drivers.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
                    </select>
                </div>`;
            }
            html += `</div></div>`;
        }

        raceDiv.innerHTML = html;
        container.appendChild(raceDiv);
    });

    document.querySelectorAll('.pos-select').forEach(sel => {
        sel.addEventListener('change', (e) => handleSelectChange(e.target));
    });
}

function handleSelectChange(target) {
    const raceId = target.dataset.race;
    const type = target.dataset.type;
    const pos = parseInt(target.dataset.pos);
    const val = target.value;

    if (!simulationState[raceId]) {
        simulationState[raceId] = { race: new Array(10).fill(''), sprint: new Array(8).fill('') };
    }

    simulationState[raceId][type][pos] = val;
    calculateStandings();
}

// Calcular Puntos y Actualizar Tablas
function calculateStandings() {
    let driverPoints = {};
    F1Data.drivers.forEach(d => driverPoints[d.id] = d.basePts);

    Object.keys(simulationState).forEach(raceId => {
        let rData = simulationState[raceId];
        if (rData.race) {
            rData.race.forEach((driverId, index) => {
                if (driverId && pointsSystemRace[index] !== undefined) {
                    driverPoints[driverId] = (driverPoints[driverId] || 0) + pointsSystemRace[index];
                }
            });
        }
        if (rData.sprint) {
            rData.sprint.forEach((driverId, index) => {
                if (driverId && pointsSystemSprint[index] !== undefined) {
                    driverPoints[driverId] = (driverPoints[driverId] || 0) + pointsSystemSprint[index];
                }
            });
        }
    });

    let sortedDrivers = Object.keys(driverPoints).map(id => {
        return { id, pts: driverPoints[id], obj: F1Data.drivers.find(d => d.id === id) };
    }).sort((a, b) => b.pts - a.pts);

    let teamPoints = {};
    F1Data.teams.forEach(t => teamPoints[t.id] = 0);
    sortedDrivers.forEach(item => {
        let tId = item.obj.team;
        teamPoints[tId] = (teamPoints[tId] || 0) + item.pts;
    });

    let sortedTeams = Object.keys(teamPoints).map(id => {
        return { id, pts: teamPoints[id], obj: F1Data.teams.find(t => t.id === id) };
    }).sort((a, b) => b.pts - a.pts);

    renderTables(sortedDrivers, sortedTeams);
    updateScenarioAnalysis(sortedDrivers);
}

function renderTables(sortedDrivers, sortedTeams) {
    const dBody = document.getElementById('driversTableBody');
    if (dBody) {
        dBody.innerHTML = '';
        sortedDrivers.forEach((item, index) => {
            let tr = document.createElement('tr');
            tr.className = "hover:bg-white/5 transition";
            tr.innerHTML = `
                <td class="py-2 font-bold text-gray-500 text-xs">#${index + 1}</td>
                <td class="py-2 font-semibold text-xs">${item.obj.name}</td>
                <td class="py-2 text-right font-black text-f1red text-xs">${item.pts}</td>
            `;
            dBody.appendChild(tr);
        });
    }

    const tBody = document.getElementById('teamsTableBody');
    if (tBody) {
        tBody.innerHTML = '';
        sortedTeams.forEach((item, index) => {
            let tr = document.createElement('tr');
            tr.className = "hover:bg-white/5 transition";
            tr.innerHTML = `
                <td class="py-2 font-bold text-gray-500 text-xs">#${index + 1}</td>
                <td class="py-2 font-semibold text-xs">${item.obj.name}</td>
                <td class="py-2 text-right font-black text-xs">${item.pts}</td>
            `;
            tBody.appendChild(tr);
        });
    }
}

function switchTableTab(tab) {
    const dBtn = document.getElementById('tabDriversBtn');
    const tBtn = document.getElementById('tabTeamsBtn');
    const dCont = document.getElementById('driversTableContainer');
    const tCont = document.getElementById('teamsTableContainer');
    if (!dBtn || !tBtn || !dCont || !tCont) return;

    if (tab === 'drivers') {
        dBtn.className = "flex-1 pb-2 font-bold text-xs border-b-2 border-f1red text-white uppercase tracking-wider";
        tBtn.className = "flex-1 pb-2 font-bold text-xs border-b-2 border-transparent text-gray-400 uppercase tracking-wider";
        dCont.classList.remove('hidden');
        tCont.classList.add('hidden');
    } else {
        tBtn.className = "flex-1 pb-2 font-bold text-xs border-b-2 border-f1red text-white uppercase tracking-wider";
        dBtn.className = "flex-1 pb-2 font-bold text-xs border-b-2 border-transparent text-gray-400 uppercase tracking-wider";
        tCont.classList.remove('hidden');
        dCont.classList.add('hidden');
    }
}

function updateFavorites() {
    const dSelect = document.getElementById('favoriteDriver');
    const tSelect = document.getElementById('favoriteTeam');
    const card = document.getElementById('favoriteCard');
    if (!dSelect || !tSelect || !card) return;

    const dId = dSelect.value;
    const tId = tSelect.value;

    if (dId || tId) {
        card.classList.remove('hidden');
        let driver = F1Data.drivers.find(d => d.id === dId);
        let team = F1Data.teams.find(t => t.id === tId);

        document.getElementById('favDriverInfo').textContent = driver ? `Piloto: ${driver.name}` : 'Piloto: -';
        document.getElementById('favTeamInfo').textContent = team ? `Escudería: ${team.name}` : 'Escudería: -';
        
        localStorage.setItem('f1_fav_driver', dId);
        localStorage.setItem('f1_fav_team', tId);
    } else {
        card.classList.add('hidden');
    }
}

function updateScenarioAnalysis(sortedDrivers) {
    const dSelect = document.getElementById('favoriteDriver');
    const scenarioText = document.getElementById('favScenarioText');
    if (!dSelect || !scenarioText) return;
    const dId = dSelect.value;
    if (!dId) return;

    let leader = sortedDrivers[0];
    let favIndex = sortedDrivers.findIndex(d => d.id === dId);
    let favData = sortedDrivers[favIndex];

    if (favIndex === 0) {
        scenarioText.textContent = `¡${favData.obj.name} lidera el campeonato! Depende de sí mismo para conservar la corona.`;
    } else {
        let diff = leader.pts - favData.pts;
        scenarioText.textContent = `Está a ${diff} puntos de la cima. Necesita recortar una media de ${(diff / F1Data.remainingRaces.length).toFixed(1)} pts por carrera para alcanzarlo.`;
    }
}

function loadFavoritesFromStorage() {
    const savedDriver = localStorage.getItem('f1_fav_driver');
    const savedTeam = localStorage.getItem('f1_fav_team');
    const dSelect = document.getElementById('favoriteDriver');
    const tSelect = document.getElementById('favoriteTeam');

    if (savedDriver && dSelect) dSelect.value = savedDriver;
    if (savedTeam && tSelect) tSelect.value = savedTeam;
    updateFavorites();
}

function resetSimulation() {
    simulationState = {};
    document.querySelectorAll('.pos-select').forEach(sel => sel.value = "");
    calculateStandings();
}

// Renderizar Calendario
function renderCalendar() {
    const container = document.getElementById('calendarContainer');
    if (!container) return;
    container.innerHTML = '';
    F1Data.remainingRaces.forEach((race, idx) => {
        let card = document.createElement('div');
        card.className = "bg-gray-900 border border-gray-800 p-4 rounded-lg flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <span class="text-xs font-bold text-f1red">Ronda ${idx + 1}</span>
                <h3 class="font-black text-md mt-1">${race.name}</h3>
            </div>
            <div class="mt-4 flex justify-between items-center text-xs text-gray-400">
                <span>${race.hasSprint ? '⚡ Formato Sprint' : '🏁 Carrera Normal'}</span>
                <span class="bg-gray-800 text-white px-2 py-1 rounded">Próximamente</span>
            </div>
        `;
        container.appendChild(card);
    });
}

// Renderizar Historial 10 Años
function renderHistory() {
    const container = document.getElementById('historyContainer');
    if (!container) return;
    container.innerHTML = '';
    Object.keys(F1Data.history).sort((a,b) => b - a).forEach(year => {
        let data = F1Data.history[year];
        let card = document.createElement('div');
        card.className = "bg-gray-900 border border-gray-800 p-4 rounded-lg text-center flex flex-col justify-between";
        card.innerHTML = `
            <div>
                <span class="text-2xl font-black italic text-f1red">${year}</span>
                <div class="mt-3 space-y-2">
                    <p class="text-xs text-gray-400">👑 <strong class="text-white">${data.championDriver}</strong></p>
                    <p class="text-xs text-gray-400">🛡️ <strong class="text-white">${data.championTeam}</strong></p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Renderizar Circuitos y Récords
function renderCircuits() {
    const container = document.getElementById('circuitsContainer');
    if (!container) return;
    container.innerHTML = '';
    F1Data.circuits.forEach(c => {
        let card = document.createElement('div');
        card.className = "bg-gray-900 border border-gray-800 p-5 rounded-lg space-y-3";
        card.innerHTML = `
            <h3 class="font-bold text-md text-f1red">${c.name}</h3>
            <div class="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-gray-800">
                <div>
                    <span class="text-gray-500 block">Récord de Vuelta:</span>
                    <strong class="text-white">${c.lapRecord} (${c.recordYear})</strong>
                </div>
                <div>
                    <span class="text-gray-500 block">Piloto Récord:</span>
                    <strong class="text-white">${c.recordDriver}</strong>
                </div>
                <div class="col-span-2 mt-1">
                    <span class="text-gray-500 block">Máximo Ganador:</span>
                    <strong class="text-white">${c.mostWins}</strong>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}