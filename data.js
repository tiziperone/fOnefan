// data.js - Base de datos y registros históricos de DriverWin

const F1Data = {
    teams: [
        { id: 'redbull', name: 'Red Bull Racing', color: '#3671C6' },
        { id: 'mercedes', name: 'Mercedes', color: '#27F4D2' },
        { id: 'ferrari', name: 'Ferrari', color: '#E8002D' },
        { id: 'mclaren', name: 'McLaren', color: '#FF8000' },
        { id: 'alpine', name: 'Alpine', color: '#0093CC' },
        { id: 'williams', name: 'Williams', color: '#64C4FF' },
        { id: 'rb', name: 'Racing Bulls', color: '#6692FF' },
        { id: 'aston', name: 'Aston Martin', color: '#229971' },
        { id: 'haas', name: 'Haas', color: '#B6BABD' },
        { id: 'audi', name: 'Audi / Sauber', color: '#52E252' }
    ],

    drivers: [
        { id: 'max', name: 'Max Verstappen', team: 'redbull', basePts: 300 },
        { id: 'kimi', name: 'Andrea Kimi Antonelli', team: 'mercedes', basePts: 280 },
        { id: 'norris', name: 'Lando Norris', team: 'mclaren', basePts: 270 },
        { id: 'russell', name: 'George Russell', team: 'mercedes', basePts: 250 },
        { id: 'leclerc', name: 'Charles Leclerc', team: 'ferrari', basePts: 210 },
        { id: 'hamilton', name: 'Lewis Hamilton', team: 'ferrari', basePts: 180 },
        { id: 'piastri', name: 'Oscar Piastri', team: 'mclaren', basePts: 160 },
        { id: 'hadjar', name: 'Isack Hadjar', team: 'rb', basePts: 90 },
        { id: 'colapinto', name: 'Franco Colapinto', team: 'alpine', basePts: 45 },
        { id: 'lawson', name: 'Liam Lawson', team: 'rb', basePts: 60 }
    ],

    remainingRaces: [
        { id: 'usa', name: 'GP de Estados Unidos', hasSprint: true },
        { id: 'mexico', name: 'GP de México', hasSprint: false },
        { id: 'brazil', name: 'GP de São Paulo', hasSprint: true },
        { id: 'lasvegas', name: 'GP de Las Vegas', hasSprint: false },
        { id: 'qatar', name: 'GP de Catar', hasSprint: true },
        { id: 'abudhabi', name: 'GP de Abu Dabi', hasSprint: false }
    ],

    circuits: [
        { 
            id: 'monza', 
            name: 'Autodromo Nazionale Monza', 
            country: 'Italia', 
            lapRecord: '1:21.046 (Rubens Barrichello, 2004)', 
            mostWins: 'M. Schumacher / L. Hamilton (5)', 
            schedule: 'Domingo 10:00 ART', 
            safetyCarProb: '45%', 
            history: 'Conocido como "El Templo de la Velocidad", Monza es uno de los circuitos más antiguos y rápidos del calendario. Sus largas rectas y bajas cargas aerodinámicas obligan a los equipos a usar configuraciones de alerones ultra específicos.' 
        },
        { 
            id: 'singapur', 
            name: 'Marina Bay Street Circuit', 
            country: 'Singapur', 
            lapRecord: '1:35.784 (Lewis Hamilton, 2023)', 
            mostWins: 'Sebastian Vettel / Lewis Hamilton (4)', 
            schedule: 'Domingo 09:00 ART (Nocturna)', 
            safetyCarProb: '100%', 
            history: 'La primera carrera nocturna en la historia de la Fórmula 1. Es un circuito callejero extremadamente demandante físicamente para los pilotos debido al calor, la humedad y los muros cercanos.' 
        },
        { 
            id: 'silverstone', 
            name: 'Silverstone Circuit', 
            country: 'Reino Unido', 
            lapRecord: '1:27.097 (Max Verstappen, 2020)', 
            mostWins: 'Lewis Hamilton (8)', 
            schedule: 'Domingo 11:00 ART', 
            safetyCarProb: '60%', 
            history: 'Cuna del Campeonato Mundial de F1 en 1950. Famoso por sus curvas de alta velocidad legendarias como Maggotts, Becketts y Chapel, donde los monoplazas alcanzan fuerzas G impresionantes.' 
        },
        { 
            id: 'monaco', 
            name: 'Circuit de Monaco', 
            country: 'Mónaco', 
            lapRecord: '1:12.909 (Lewis Hamilton, 2021)', 
            mostWins: 'Ayrton Senna (6)', 
            schedule: 'Domingo 10:00 ART', 
            safetyCarProb: '85%', 
            history: 'La joya de la corona de la Fórmula 1. Un trazado callejero estrecho donde adelantar es prácticamente imposible, convirtiendo la sesión de clasificación del sábado en el momento más crucial del fin de semana.' 
        }
    ],

    history: {
        2025: { championDriver: 'Lando Norris', championTeam: 'McLaren' },
        2024: { championDriver: 'Max Verstappen', championTeam: 'McLaren' },
        2023: { championDriver: 'Max Verstappen', championTeam: 'Red Bull Racing' },
        2022: { championDriver: 'Max Verstappen', championTeam: 'Red Bull Racing' },
        2021: { championDriver: 'Max Verstappen', championTeam: 'Mercedes' },
        2020: { championDriver: 'Lewis Hamilton', championTeam: 'Mercedes' },
        2019: { championDriver: 'Lewis Hamilton', championTeam: 'Mercedes' },
        2018: { championDriver: 'Lewis Hamilton', championTeam: 'Mercedes' },
        2017: { championDriver: 'Lewis Hamilton', championTeam: 'Mercedes' },
        2016: { championDriver: 'Nico Rosberg', championTeam: 'Mercedes' }
    }
};