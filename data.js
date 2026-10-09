// ================= DATOS DRIVERWIN · TEMPORADA 2026 =================

const PTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
const SPR = [8, 7, 6, 5, 4, 3, 2, 1];

const TEAMS = [
  { id: 'mercedes', name: 'Mercedes',         color: '#27F4D2' },
  { id: 'ferrari',  name: 'Ferrari',          color: '#E8002D' },
  { id: 'mclaren',  name: 'McLaren',          color: '#FF8000' },
  { id: 'redbull',  name: 'Red Bull Racing',  color: '#3671C6' },
  { id: 'rb',       name: 'Racing Bulls',     color: '#6692FF' },
  { id: 'alpine',   name: 'Alpine',           color: '#0093CC' },
  { id: 'haas',     name: 'Haas',             color: '#B6BABD' },
  { id: 'audi',     name: 'Audi',             color: '#52E252' },
  { id: 'williams', name: 'Williams',         color: '#64C4FF' },
  { id: 'aston',    name: 'Aston Martin',     color: '#229971' },
  { id: 'cadillac', name: 'Cadillac',         color: '#C9C9D1' }
];

const DRIVERS = [
  { id: 'antonelli', name: 'Andrea Kimi Antonelli', team: 'mercedes', basePts: 320 },
  { id: 'russell',   name: 'George Russell',        team: 'mercedes', basePts: 236 },
  { id: 'hamilton',  name: 'Lewis Hamilton',        team: 'ferrari',  basePts: 214 },
  { id: 'leclerc',   name: 'Charles Leclerc',       team: 'ferrari',  basePts: 191 },
  { id: 'norris',    name: 'Lando Norris',          team: 'mclaren',  basePts: 188 },
  { id: 'verstappen',name: 'Max Verstappen',        team: 'redbull',  basePts: 188 },
  { id: 'piastri',   name: 'Oscar Piastri',         team: 'mclaren',  basePts: 128 },
  { id: 'hadjar',    name: 'Isack Hadjar',          team: 'redbull',  basePts: 110 },
  { id: 'lawson',    name: 'Liam Lawson',           team: 'rb',       basePts: 65  },
  { id: 'lindblad',  name: 'Arvid Lindblad',        team: 'rb',       basePts: 25  },
  { id: 'gasly',     name: 'Pierre Gasly',          team: 'alpine',   basePts: 41  },
  { id: 'colapinto', name: 'Franco Colapinto',      team: 'alpine',   basePts: 27  },
  { id: 'bearman',   name: 'Oliver Bearman',        team: 'haas',     basePts: 20  },
  { id: 'ocon',      name: 'Esteban Ocon',          team: 'haas',     basePts: 7   },
  { id: 'bortoleto', name: 'Gabriel Bortoleto',     team: 'audi',     basePts: 10  },
  { id: 'hulkenberg',name: 'Nico Hülkenberg',       team: 'audi',     basePts: 7   },
  { id: 'albon',     name: 'Alexander Albon',       team: 'williams', basePts: 6   },
  { id: 'sainz',     name: 'Carlos Sainz',          team: 'williams', basePts: 6   },
  { id: 'alonso',    name: 'Fernando Alonso',       team: 'aston',    basePts: 7   },
  { id: 'stroll',    name: 'Lance Stroll',          team: 'aston',    basePts: 0   },
  { id: 'bottas',    name: 'Valtteri Bottas',       team: 'cadillac', basePts: 0   },
  { id: 'perez',     name: 'Sergio Pérez',          team: 'cadillac', basePts: 0   }
];

const CALENDAR = [
  { r: 1,  id: 'australia',   name: 'GP de Australia',            date: '06 - 08 Mar',    start: '2026-03-06', sprint: false, done: true,  flag: '🇦🇺' },
  { r: 2,  id: 'china',       name: 'GP de China',                date: '13 - 15 Mar',    start: '2026-03-13', sprint: true,  done: true,  flag: '🇨🇳' },
  { r: 3,  id: 'japon',       name: 'GP de Japón',                date: '27 - 29 Mar',    start: '2026-03-27', sprint: false, done: true,  flag: '🇯🇵' },
  { r: 4,  id: 'miami',       name: 'GP de Miami',                date: '01 - 03 May',    start: '2026-05-01', sprint: true,  done: true,  flag: '🇺🇸' },
  { r: 5,  id: 'canada',      name: 'GP de Canadá',               date: '22 - 24 May',    start: '2026-05-22', sprint: true,  done: true,  flag: '🇨🇦' },
  { r: 6,  id: 'monaco',      name: 'GP de Mónaco',               date: '05 - 07 Jun',    start: '2026-06-05', sprint: false, done: true,  flag: '🇲🇨' },
  { r: 7,  id: 'barcelona',   name: 'GP de Barcelona-Cataluña',   date: '12 - 14 Jun',    start: '2026-06-12', sprint: false, done: true,  flag: '🇪🇸' },
  { r: 8,  id: 'austria',     name: 'GP de Austria',              date: '26 - 28 Jun',    start: '2026-06-26', sprint: true,  done: true,  flag: '🇦🇹' },
  { r: 9,  id: 'silverstone', name: 'GP de Gran Bretaña',         date: '03 - 05 Jul',    start: '2026-07-03', sprint: true,  done: true,  flag: '🇬🇧' },
  { r: 10, id: 'belgica',     name: 'GP de Bélgica',              date: '17 - 19 Jul',    start: '2026-07-17', sprint: false, done: true,  flag: '🇧🇪' },
  { r: 11, id: 'hungria',     name: 'GP de Hungría',              date: '24 - 26 Jul',    start: '2026-07-24', sprint: false, done: true,  flag: '🇭🇺' },
  { r: 12, id: 'paisesbajos', name: 'GP de Países Bajos',         date: '21 - 23 Ago',    start: '2026-08-21', sprint: true,  done: true,  flag: '🇳🇱' },
  { r: 13, id: 'monza',       name: 'GP de Italia',               date: '04 - 06 Sep',    start: '2026-09-04', sprint: false, done: true,  flag: '🇮🇹' },
  { r: 14, id: 'madrid',      name: 'GP de España (Madrid)',      date: '11 - 13 Sep',    start: '2026-09-11', sprint: false, done: true,  flag: '🇪🇸' },
  { r: 15, id: 'azerbaiyan',  name: 'GP de Azerbaiyán',           date: '24 - 26 Sep',    start: '2026-09-24', sprint: false, done: true,  flag: '🇦🇿' },
  { r: 16, id: 'bahrain',     name: 'GP de Baréin',               date: '02 - 04 Oct',    start: '2026-10-02', sprint: false, done: true,  flag: '🇧🇭' },
  { r: 17, id: 'singapur',    name: 'GP de Singapur',             date: '09 - 11 Oct',    start: '2026-10-09', sprint: true,  done: false, flag: '🇸🇬' },
  { r: 18, id: 'usa',         name: 'GP de Estados Unidos',       date: '23 - 25 Oct',    start: '2026-10-23', sprint: true,  done: false, flag: '🇺🇸' },
  { r: 19, id: 'mexico',      name: 'GP de México',               date: '30 Oct - 01 Nov',start: '2026-10-30', sprint: false, done: false, flag: '🇲🇽' },
  { r: 20, id: 'brasil',      name: 'GP de São Paulo',            date: '06 - 08 Nov',    start: '2026-11-06', sprint: true,  done: false, flag: '🇧🇷' },
  { r: 21, id: 'lasvegas',    name: 'GP de Las Vegas',            date: '19 - 21 Nov',    start: '2026-11-19', sprint: false, done: false, flag: '🇺🇸' },
  { r: 22, id: 'qatar',       name: 'GP de Catar',                date: '27 - 29 Nov',    start: '2026-11-27', sprint: true,  done: false, flag: '🇶🇦' },
  { r: 23, id: 'abudhabi',    name: 'GP de Abu Dabi',             date: '04 - 06 Dic',    start: '2026-12-04', sprint: false, done: false, flag: '🇦🇪' }
];

const HISTORY = [
  { y: 2025, d: 'Lando Norris',     t: 'McLaren' },
  { y: 2024, d: 'Max Verstappen',   t: 'McLaren (constructores)' },
  { y: 2023, d: 'Max Verstappen',   t: 'Red Bull Racing' }
];

const CIRCUITS = [
  {
    id: 'monza', name: 'Monza', country: 'Italia',
    firstGP: '1950', length: '5,793 km',
    record: '1:21.046 (Barrichello, 2004)',
    wins: 'Michael Schumacher y Lewis Hamilton (5 cada uno)',
    history: 'Conocido como "El Templo de la Velocidad", Monza es uno de los circuitos más antiguos del calendario y uno de los de mayor velocidad media.',
    path: 'M30,80 C10,80 10,60 20,40 L40,15 C45,5 60,5 70,15 C85,30 90,60 80,75 C70,90 50,80 30,80 Z'
  },
  {
    id: 'singapur', name: 'Marina Bay', country: 'Singapur',
    firstGP: '2008', length: '4,940 km',
    record: 'Consultar formula1.com',
    wins: 'Consultar formula1.com',
    history: 'Circuito urbano nocturno. Su combinación de calor, humedad y curvas lentas lo convierte en una de las pruebas físicas más exigentes del calendario.',
    path: 'M20,50 L20,30 L40,30 L40,15 L60,15 L60,35 L80,35 L80,60 L60,60 L60,80 L35,80 L35,65 L20,65 Z'
  }
];