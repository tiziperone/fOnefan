// data.js - Base de datos completa de DriverWin con Calendario 2026 oficial (Rondas 1 a 23/24)

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

    // Calendario Oficial 2026 (Completadas rondas 1 a 16, próximas desde Singapur en adelante)
    calendar: [
        { round: 1, id: 'australia', name: 'GP de Australia', date: '06 - 08 Mar', completed: true, hasSprint: false },
        { round: 2, id: 'china', name: 'GP de China', date: '13 - 15 Mar', completed: true, hasSprint: true },
        { round: 3, id: 'japon', name: 'GP de Japón', date: '27 - 29 Mar', completed: true, hasSprint: false },
        { round: 4, id: 'miami', name: 'GP de Miami', date: '01 - 03 May', completed: true, hasSprint: true },
        { round: 5, id: 'canada', name: 'GP de Canadá', date: '22 - 24 May', completed: true, hasSprint: false },
        { round: 6, id: 'monaco', name: 'GP de Mónaco', date: '05 - 07 Jun', completed: true, hasSprint: false },
        { round: 7, id: 'barcelona', name: 'GP de España (Barcelona)', date: '12 - 14 Jun', completed: true, hasSprint: false },
        { round: 8, id: 'austria', name: 'GP de Austria', date: '26 - 28 Jun', completed: true, hasSprint: false },
        { round: 9, id: 'silverstone', name: 'GP de Gran Bretaña', date: '03 - 05 Jul', completed: true, hasSprint: true },
        { round: 10, id: 'belgica', name: 'GP de Bélgica', date: '17 - 19 Jul', completed: true, hasSprint: false },
        { round: 11, id: 'hungria', name: 'GP de Hungría', date: '24 - 26 Jul', completed: true, hasSprint: false },
        { round: 12, id: 'paisesbajos', name: 'GP de Países Bajos', date: '21 - 23 Ago', completed: true, hasSprint: true },
        { round: 13, id: 'monza', name: 'GP de Italia (Monza)', date: '04 - 06 Sep', completed: true, hasSprint: false },
        { round: 14, id: 'espana', name: 'GP de España (Madrid)', date: '11 - 13 Sep', completed: true, hasSprint: false },
        { round: 15, id: 'azerbaiyan', name: 'GP de Azerbaiyán', date: '24 - 26 Sep', completed: true, hasSprint: false },
        { round: 16, id: 'bahrain', name: 'GP de Baréin', date: '02 - 04 Oct', completed: true, hasSprint: false },
        { round: 17, id: 'singapur', name: 'GP de Singapur', date: '09 - 11 Oct', completed: false, hasSprint: true },
        { round: 18, id: 'usa', name: 'GP de Estados Unidos (Austin)', date: '23 - 25 Oct', completed: false, hasSprint: false },
        { round: 19, id: 'mexico', name: 'GP de México', date: '30 Oct - 01 Nov', completed: false, hasSprint: false },
        { round: 20, id: 'brasil', name: 'GP de São Paulo (Brasil)', date: '06 - 08 Nov', completed: false, hasSprint: true },
        { round: 21, id: 'lasvegas', name: 'GP de Las Vegas', date: '19 - 21 Nov', completed: false, hasSprint: false },
        { round: 22, id: 'qatar', name: 'GP de Catar', date: '27 - 29 Nov', completed: false, hasSprint: true },
        { round: 23, id: 'abudhabi', name: 'GP de Abu Dabi', date: '04 - 06 Dic', completed: false, hasSprint: false }
    ],

    // Filtrar automáticamente las carreras restantes para el Simulador
    get remainingRaces() {
        return this.calendar.filter(r => !r.completed);
    },

    circuits: [
        { 
            id: 'monza', name: 'Monza', country: 'Italia', lapRecord: '1:21.046 (Barrichello, 2004)', mostWins: 'M. Schumacher / L. Hamilton (5)', schedule: 'Dom 10:00 ART', safetyCarProb: '45%', 
            history: 'Conocido como "El Templo de la Velocidad", Monza es uno de los circuitos más antiguos y rápidos del calendario.',
            svgPath: 'M30,80 C10,80 10,60 20,40 L40,15 C45,5 60,5 70,15 C85,30 90,60 80,75 C70,90 50,80 30,80 Z' 
        },
        { 
            id: 'singapur', name: 'Marina Bay', country: 'Singapur', lapRecord: '1:35.784 (Hamilton, 2023)', mostWins: 'Vettel / Hamilton (4)', schedule: 'Dom 09:00 ART (Nocturna)', safetyCarProb: '100%', 
            history: 'La primera carrera nocturna. Un circuito callejero extremadamente demandante físicamente por el calor y humedad.',
            svgPath: 'M20,50 L20,30 L40,30 L40,15 L60,15 L60,35 L80,35 L80,60 L60,60 L60,80 L35,80 L35,65 L20,65 Z' 
        },
        { 
            id: 'silverstone', name: 'Silverstone', country: 'Reino Unido', lapRecord: '1:27.097 (Verstappen, 2020)', mostWins: 'Lewis Hamilton (8)', schedule: 'Dom 11:00 ART', safetyCarProb: '60%', 
            history: 'Cuna de la F1 en 1950. Famoso por sus curvas legendarias Maggotts, Becketts y Chapel.',
            svgPath: 'M25,75 C10,65 15,40 30,30 L50,15 C65,5 85,25 80,45 C75,65 60,85 40,85 C30,85 28,78 25,75 Z' 
        },
        { 
            id: 'monaco', name: 'Mónaco', country: 'Mónaco', lapRecord: '1:12.909 (Hamilton, 2021)', mostWins: 'Ayrton Senna (6)', schedule: 'Dom 10:00 ART', safetyCarProb: '85%', 
            history: 'La joya de la corona. Un trazado estrecho donde adelantar es casi imposible, haciendo de la qualy el momento más crucial.',
            svgPath: 'M15,50 C15,30 35,20 50,30 C65,40 80,35 85,55 C90,75 75,85 55,80 C35,75 15,70 15,50 Z' 
        }
    ],

    history: {
        2025: { championDriver: 'Lando Norris', championTeam: 'McLaren' },
        2024: { championDriver: 'Max Verstappen', championTeam: 'McLaren' },
        2023: { championDriver: 'Max Verstappen', championTeam: 'Red Bull Racing' },
        2022: { championDriver: 'Max Verstappen', championTeam: 'Red Bull Racing' },
        2021: { championDriver: 'Max Verstappen', championTeam: 'Mercedes' },
        2020: { championDriver: 'Lewis Hamilton', championTeam: 'Mercedes' }
    }
};