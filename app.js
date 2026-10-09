// ================= fOnefan · DATOS EN VIVO =================

const API = 'https://api.jolpi.ca/ergast/f1';
const SEASON = 2026;
const CHAMP_FROM = 2000;
const FIRST_SEASON = 1950;
const CHAMP_CACHE = 'dw_champ_v1_';
const DRV_CACHE = 'dw_drv_agg_v4';
const SDRV_CACHE = 'dw_sdrv_v1_';
const DCONS_CACHE = 'dw_dcons_v1_';
const DRV_FROM = 1950;
const ART = 'America/Argentina/Buenos_Aires';

// Trazados: SVG de julesr0y/pitlaneinsider (78 circuitos de la historia de F1)
const TRACK_RAW = 'https://raw.githubusercontent.com/julesr0y/pitlaneinsider/main/public/img/circuits/';
const TRACK_CACHE = 'dw_trk_svg_v2';

// bb = área del trazado dentro de su SVG; lat/lon = ubicación para cruzar con Jolpica
const TRACK_LIB = [
  {id:'adelaide-1',name:"Adelaide Street Circuit",lat:-34.9272,lon:138.6172,bb:[35.0,35.0,465.0,465.0]},
  {id:'aida-1',name:"Okayama International Circuit",lat:34.9150,lon:134.2211,bb:[35.0,36.3,465.0,463.7]},
  {id:'ain-diab-1',name:"Ain-Diab Circuit",lat:33.5786,lon:-7.6875,bb:[1109.4,1018.5,1539.1,1282.8]},
  {id:'aintree-1',name:"Aintree Motor Racing Circuit",lat:53.4769,lon:-2.9406,bb:[35.0,17.5,464.9,482.5]},
  {id:'anderstorp-1',name:"Anderstorp Raceway",lat:57.2642,lon:13.6014,bb:[35.1,29.4,465.0,470.7]},
  {id:'austin-1',name:"Circuit of the Americas",lat:30.1328,lon:-97.6411,bb:[35.0,38.9,465.0,461.3]},
  {id:'avus-1',name:"AVUS",lat:52.4806,lon:13.2514,bb:[35.0,40.3,465.0,459.8]},
  {id:'bahrain-1',name:"Bahrain International Circuit",lat:26.0325,lon:50.5106,bb:[35.0,98.9,465.0,401.1]},
  {id:'baku-1',name:"Baku City Circuit",lat:40.3725,lon:49.8533,bb:[35.0,12.5,465.1,487.7]},
  {id:'brands-hatch-2',name:"Brands Hatch",lat:51.3567,lon:0.2625,bb:[35.0,92.9,465.0,406.9]},
  {id:'bremgarten-1',name:"Circuit Bremgarten",lat:46.9500,lon:7.4108,bb:[35.0,116.8,465.0,383.1]},
  {id:'buddh-1',name:"Buddh International Circuit",lat:28.3506,lon:77.5350,bb:[35.0,27.3,465.1,472.7]},
  {id:'buenos-aires-4',name:"Autódromo Juan y Oscar Gálvez",lat:-34.6943,lon:-58.4594,bb:[35.0,40.6,465.0,459.4]},
  {id:'bugatti-1',name:"Bugatti Circuit",lat:47.9377,lon:0.2256,bb:[35.0,13.8,465.0,486.3]},
  {id:'caesars-palace-1',name:"Caesars Palace",lat:36.1169,lon:-115.1750,bb:[25.5,31.7,474.5,468.3]},
  {id:'catalunya-6',name:"Circuit de Barcelona-Catalunya",lat:41.5700,lon:2.2611,bb:[57.3,14.8,443.0,485.2]},
  {id:'clermont-ferrand-1',name:"Charade Circuit",lat:45.7472,lon:3.0389,bb:[35.1,33.3,465.0,466.7]},
  {id:'dallas-1',name:"Fair Park",lat:32.7819,lon:-96.7656,bb:[25.5,38.9,474.5,461.1]},
  {id:'detroit-2',name:"Detroit Street Circuit",lat:42.3297,lon:-83.0401,bb:[15.1,96.8,484.7,403.3]},
  {id:'dijon-2',name:"Dijon-Prenois",lat:47.3625,lon:4.8992,bb:[34.9,15.4,465.0,484.6]},
  {id:'donington-1',name:"Donington Park",lat:52.8298,lon:-1.3796,bb:[25.0,28.6,475.0,471.4]},
  {id:'east-london-1',name:"Prince George Circuit",lat:-33.0486,lon:27.8736,bb:[35.0,96.5,464.9,403.6]},
  {id:'estoril-2',name:"Autódromo do Estoril",lat:38.7508,lon:-9.3942,bb:[103.3,15.2,396.7,484.7]},
  {id:'fuji-2',name:"Fuji Speedway",lat:35.3717,lon:138.9267,bb:[35.0,52.1,465.0,448.0]},
  {id:'hockenheimring-4',name:"Hockenheimring",lat:49.3278,lon:8.5658,bb:[15.1,93.4,485.1,406.5]},
  {id:'hungaroring-3',name:"Hungaroring",lat:47.5822,lon:19.2511,bb:[41.2,15.1,459.2,485.0]},
  {id:'imola-3',name:"Autodromo Internazionale Enzo e Dino Ferrari",lat:44.3411,lon:11.7133,bb:[15.1,125.1,485.1,375.0]},
  {id:'indianapolis-2',name:"Indianapolis Motor Speedway",lat:39.7983,lon:-86.2328,bb:[135.8,11.3,364.2,488.6]},
  {id:'interlagos-2',name:"Autódromo José Carlos Pace",lat:-23.7011,lon:-46.6972,bb:[97.9,14.8,402.1,485.0]},
  {id:'istanbul-1',name:"Istanbul Park",lat:40.9517,lon:29.4050,bb:[34.9,32.0,465.0,468.0]},
  {id:'jacarepagua-1',name:"Autódromo Internacional Nelson Piquet",lat:-22.9756,lon:-43.3950,bb:[35.0,33.3,465.0,466.7]},
  {id:'jarama-2',name:"Circuito del Jarama",lat:40.6171,lon:-3.5856,bb:[76.6,15.0,423.4,485.2]},
  {id:'jeddah-1',name:"Jeddah Corniche Circuit",lat:21.5433,lon:39.1728,bb:[35.0,125.8,465.0,374.2]},
  {id:'jerez-2',name:"Circuito de Jerez",lat:36.7083,lon:-6.0342,bb:[17.4,15.0,482.4,485.0]},
  {id:'kyalami-2',name:"Kyalami Racing Circuit",lat:-25.9986,lon:28.0689,bb:[14.9,100.0,484.9,400.1]},
  {id:'las-vegas-1',name:"Las Vegas Street Circuit",lat:36.1750,lon:-115.1364,bb:[35.0,117.2,465.0,382.9]},
  {id:'long-beach-3',name:"Long Beach",lat:33.7664,lon:-118.1928,bb:[14.6,154.2,485.3,345.8]},
  {id:'lusail-1',name:"Lusail International Circuit",lat:25.4900,lon:51.4542,bb:[35.0,96.8,465.1,403.5]},
  {id:'madring-1',name:"Circuito de Madring",lat:40.4653,lon:-3.6153,bb:[15.0,107.7,485.0,392.3]},
  {id:'magny-cours-3',name:"Circuit de Nevers Magny-Cours",lat:46.8632,lon:3.1642,bb:[89.0,15.0,411.0,484.7]},
  {id:'marina-bay-4',name:"Marina Bay Street Circuit",lat:1.2915,lon:103.8638,bb:[15.0,98.0,485.0,402.0]},
  {id:'melbourne-2',name:"Melbourne Grand Prix Circuit",lat:-37.8497,lon:144.9683,bb:[57.3,15.0,442.4,485.0]},
  {id:'mexico-city-3',name:"Autódromo Hermanos Rodríguez",lat:19.4042,lon:-99.0888,bb:[15.0,74.0,485.0,425.9]},
  {id:'miami-1',name:"Miami International Autodrome",lat:25.9581,lon:-80.2389,bb:[35.0,172.0,465.0,328.0]},
  {id:'monaco-6',name:"Circuit de Monaco",lat:43.7347,lon:7.4206,bb:[71.1,14.6,429.1,485.4]},
  {id:'monsanto-1',name:"Circuito de Monsanto",lat:38.7197,lon:-9.2031,bb:[35.0,85.4,465.0,414.8]},
  {id:'mont-tremblant-1',name:"Circuit Mont-Tremblant",lat:46.1877,lon:-74.6099,bb:[35.0,106.4,465.0,393.6]},
  {id:'montjuic-1',name:"Circuito de Montjuïc",lat:41.3664,lon:2.1517,bb:[34.9,33.6,465.0,466.6]},
  {id:'montreal-6',name:"Circuit Gilles Villeneuve",lat:45.5006,lon:-73.5225,bb:[173.8,15.1,326.2,484.9]},
  {id:'monza-7',name:"Autodromo Nazionale Monza",lat:45.6206,lon:9.2894,bb:[114.3,15.6,385.6,484.6]},
  {id:'mosport-1',name:"Canadian Tire Motorsport Park",lat:44.0500,lon:-78.6778,bb:[34.9,36.6,465.1,463.4]},
  {id:'mugello-1',name:"Autodromo Internazionale del Mugello",lat:43.9975,lon:11.3719,bb:[30.2,118.3,470.1,381.8]},
  {id:'nivelles-1',name:"Nivelles-Baulers",lat:50.6211,lon:4.3269,bb:[34.7,121.9,465.1,378.1]},
  {id:'nurburgring-4',name:"Nürburgring",lat:50.3356,lon:6.9475,bb:[76.1,15.0,423.8,485.0]},
  {id:'paul-ricard-3',name:"Circuit Paul Ricard",lat:43.2506,lon:5.7917,bb:[15.2,101.4,485.0,398.6]},
  {id:'pedralbes-1',name:"Pedralbes Circuit",lat:41.3903,lon:2.1167,bb:[35.0,130.9,465.0,369.1]},
  {id:'pescara-1',name:"Pescara Circuit",lat:42.4750,lon:14.1508,bb:[35.0,73.8,465.1,426.2]},
  {id:'phoenix-2',name:"Phoenix Street Circuit",lat:33.4479,lon:-112.0746,bb:[15.0,168.5,484.9,331.5]},
  {id:'portimao-1',name:"Algarve International Circuit",lat:37.2219,lon:-8.6294,bb:[35.0,121.7,465.0,378.4]},
  {id:'porto-1',name:"Circuito da Boavista",lat:41.1705,lon:-8.6732,bb:[30.1,102.2,470.1,398.0]},
  {id:'reims-2',name:"Reims-Gueux",lat:49.2541,lon:3.9306,bb:[14.9,96.2,485.0,403.8]},
  {id:'riverside-1',name:"Riverside International Raceway",lat:33.9370,lon:-117.2726,bb:[35.0,29.3,465.0,470.8]},
  {id:'rouen-2',name:"Rouen-Les-Essarts",lat:49.3306,lon:1.0046,bb:[116.6,14.9,383.2,485.1]},
  {id:'sebring-1',name:"Sebring International Raceway",lat:27.4547,lon:-81.3483,bb:[35.0,33.9,465.0,466.1]},
  {id:'sepang-1',name:"Sepang International Circuit",lat:2.7606,lon:101.7375,bb:[35.0,58.5,465.0,441.5]},
  {id:'shanghai-1',name:"Shanghai International Circuit",lat:31.3389,lon:121.2197,bb:[34.9,49.8,465.0,450.2]},
  {id:'silverstone-8',name:"Silverstone Circuit",lat:52.0786,lon:-1.0169,bb:[107.2,15.0,392.8,485.1]},
  {id:'sochi-1',name:"Sochi Autodrom",lat:43.4103,lon:39.9683,bb:[35.0,32.9,465.0,467.1]},
  {id:'spa-francorchamps-4',name:"Circuit de Spa-Francorchamps",lat:50.4372,lon:5.9714,bb:[104.1,15.0,395.8,484.8]},
  {id:'spielberg-3',name:"Red Bull Ring",lat:47.2197,lon:14.7647,bb:[35.0,30.8,465.0,469.2]},
  {id:'suzuka-2',name:"Suzuka Circuit",lat:34.8431,lon:136.5406,bb:[14.9,121.0,484.9,379.0]},
  {id:'valencia-1',name:"Valencia Street Circuit",lat:39.4588,lon:-0.3256,bb:[35.0,20.6,465.0,479.4]},
  {id:'watkins-glen-3',name:"Watkins Glen International",lat:42.3369,lon:-76.9272,bb:[151.8,15.0,348.2,485.0]},
  {id:'yas-marina-2',name:"Yas Marina Circuit",lat:24.4672,lon:54.6031,bb:[137.7,15.0,362.3,484.9]},
  {id:'yeongam-1',name:"Korea International Circuit",lat:34.7333,lon:126.4167,bb:[35.0,45.0,465.0,455.0]},
  {id:'zandvoort-5',name:"Circuit Park Zandvoort",lat:52.3888,lon:4.5409,bb:[14.8,47.1,485.1,452.9]},
  {id:'zeltweg-1',name:"Zeltweg",lat:47.2022,lon:14.7422,bb:[35.0,104.9,465.0,395.1]},
  {id:'zolder-2',name:"Circuit Zolder",lat:50.9889,lon:5.2556,bb:[47.6,15.1,452.3,485.0]}
];

const TEAM_COLORS = {
  mercedes: '#27F4D2', ferrari: '#E8002D', mclaren: '#FF8000',
  red_bull: '#3671C6', redbull: '#3671C6', rb: '#6692FF', alpine: '#0093CC',
  haas: '#B6BABD', audi: '#52E252', sauber: '#52E252',
  williams: '#64C4FF', aston_martin: '#229971', cadillac: '#C9C9D1'
};

const NAME_COLORS = [
  [/red bull/i, '#3671C6'], [/racing bulls|^rb\b|alphatauri|toro rosso/i, '#6692FF'],
  [/ferrari/i, '#E8002D'], [/mercedes/i, '#27F4D2'], [/mclaren/i, '#FF8000'],
  [/alpine|renault/i, '#0093CC'], [/williams/i, '#64C4FF'], [/aston/i, '#229971'],
  [/haas/i, '#B6BABD'], [/audi|sauber/i, '#52E252'], [/cadillac/i, '#C9C9D1'],
  [/force india|racing point|jordan/i, '#F596C8'], [/brawn|honda|bar /i, '#CCCCCC'],
  [/lotus/i, '#FFB800'], [/benetton/i, '#2E8B57'], [/toyota/i, '#CC0000'],
  [/bmw/i, '#1E5BC6'], [/jaguar/i, '#2E7D32'], [/stewart/i, '#C0C0C0']
];

const TEAM_LOOK = [
  [/red bull/i,                                  {main:'#1c3f94', sec:'#e10600', acc:'#ffd60a'}],
  [/racing bulls|^rb\b|alphatauri|toro rosso/i,  {main:'#6692ff', sec:'#ffffff', acc:'#0a1a4a'}],
  [/mercedes/i,                                  {main:'#21d4b8', sec:'#ffffff', acc:'#0b0b10'}],
  [/ferrari/i,                                   {main:'#e10600', sec:'#ffd60a', acc:'#111111'}],
  [/mclaren/i,                                   {main:'#ff8000', sec:'#1e41ff', acc:'#ffffff'}],
  [/alpine|renault/i,                            {main:'#0093cc', sec:'#ff87bc', acc:'#ffffff'}],
  [/williams/i,                                  {main:'#64c4ff', sec:'#0b1f4a', acc:'#ffffff'}],
  [/aston/i,                                     {main:'#229971', sec:'#cfe6dc', acc:'#0c3b2e'}],
  [/haas/i,                                      {main:'#c9ccd0', sec:'#e10600', acc:'#111111'}],
  [/audi|sauber/i,                               {main:'#16161c', sec:'#52e252', acc:'#ffffff'}],
  [/cadillac/i,                                  {main:'#1a1a1a', sec:'#c9c9d1', acc:'#e10600'}]
];

const TEAM_FULL = {
  'ferrari': 'Scuderia Ferrari',
  'mclaren': 'McLaren F1 Team',
  'mercedes': 'Mercedes-AMG Petronas F1 Team',
  'red bull': 'Red Bull Racing',
  'alphatauri': 'Scuderia AlphaTauri',
  'toro rosso': 'Scuderia Toro Rosso',
  'rb f1 team': 'Racing Bulls',
  'visa cash app rb f1 team': 'Racing Bulls',
  'racing bulls': 'Racing Bulls',
  'alpine f1 team': 'Alpine F1 Team',
  'alpine': 'Alpine F1 Team',
  'renault': 'Renault F1 Team',
  'williams': 'Williams Racing',
  'aston martin': 'Aston Martin Aramco F1 Team',
  'racing point': 'BWT Racing Point F1 Team',
  'force india': 'Sahara Force India F1 Team',
  'haas f1 team': 'Haas F1 Team',
  'sauber': 'Stake F1 Team Kick Sauber',
  'kick sauber': 'Stake F1 Team Kick Sauber',
  'alfa romeo': 'Alfa Romeo F1 Team Stake',
  'audi': 'Audi F1 Team',
  'cadillac': 'Cadillac F1 Team',
  'bmw sauber': 'BMW Sauber F1 Team',
  'toyota': 'Panasonic Toyota Racing',
  'honda': 'Honda F1 Team',
  'brawn': 'Brawn GP',
  'bar': 'British American Racing',
  'jordan': 'Jordan Grand Prix',
  'minardi': 'Minardi Team',
  'benetton': 'Benetton Formula',
  'tyrrell': 'Tyrrell Racing Organisation',
  'stewart': 'Stewart Grand Prix',
  'jaguar': 'Jaguar Racing',
  'super aguri': 'Super Aguri F1 Team',
  'spyker': 'Spyker F1 Team',
  'midland': 'Midland F1 Racing',
  'lotus f1': 'Lotus F1 Team',
  'team lotus': 'Team Lotus',
  'lotus': 'Lotus',
  'caterham': 'Caterham F1 Team',
  'marussia': 'Marussia F1 Team',
  'manor marussia': 'Manor Marussia F1 Team',
  'hrt': 'HRT F1 Team',
  'virgin': 'Virgin Racing',
  'ligier': 'Ligier',
  'prost': 'Prost Grand Prix',
  'arrows': 'Arrows Grand Prix',
  'footwork': 'Footwork Arrows',
  'brm': 'BRM',
  'cooper': 'Cooper Car Company',
  'maserati': 'Officine Alberto Maserati',
  'vanwall': 'Vanwall'
};

const FLAGS = {
  Australia:'🇦🇺', China:'🇨🇳', Japan:'🇯🇵', Bahrain:'🇧🇭', 'Saudi Arabia':'🇸🇦',
  USA:'🇺🇸', Italy:'🇮🇹', Monaco:'🇲🇨', Spain:'🇪🇸', Canada:'🇨🇦', Austria:'🇦🇹',
  UK:'🇬🇧', Hungary:'🇭🇺', Belgium:'🇧🇪', Netherlands:'🇳🇱', Azerbaijan:'🇦🇿',
  Singapore:'🇸🇬', Mexico:'🇲🇽', Brazil:'🇧🇷', UAE:'🇦🇪', Qatar:'🇶🇦',
  Argentina:'🇦🇷', France:'🇫🇷', Germany:'🇩🇪', Portugal:'🇵🇹', Sweden:'🇸🇪',
  Turkey:'🇹🇷', India:'🇮🇳', Korea:'🇰🇷', 'South Africa':'🇿🇦', Malaysia:'🇲🇾',
  Russia:'🇷🇺', Morocco:'🇲🇦', Vietnam:'🇻🇳', Indonesia:'🇮🇩', Switzerland:'🇨🇭'
};

const COUNTRY_ES = {
  Australia:'Australia', Austria:'Austria', Azerbaijan:'Azerbaiyán', Bahrain:'Baréin',
  Belgium:'Bélgica', Brazil:'Brasil', Canada:'Canadá', China:'China', Spain:'España',
  UK:'Reino Unido', USA:'Estados Unidos', UAE:'Emiratos Árabes Unidos', Italy:'Italia',
  Japan:'Japón', Mexico:'México', Monaco:'Mónaco', Netherlands:'Países Bajos',
  Hungary:'Hungría', Qatar:'Catar', 'Saudi Arabia':'Arabia Saudí', Singapore:'Singapur',
  Russia:'Rusia', Portugal:'Portugal', Turkey:'Turquía', Argentina:'Argentina',
  Germany:'Alemania', France:'Francia', Sweden:'Suecia', Switzerland:'Suiza',
  Korea:'Corea del Sur', 'South Africa':'Sudáfrica', Malaysia:'Malasia', India:'India',
  Indonesia:'Indonesia', Morocco:'Marruecos', Vietnam:'Vietnam', Ireland:'Irlanda',
  'New Zealand':'Nueva Zelanda', 'Czech Republic':'República Checa', 'Hong Kong':'Hong Kong',
  Thailand:'Tailandia', Chile:'Chile', Peru:'Perú', Uruguay:'Uruguay', Colombia:'Colombia',
  Denmark:'Dinamarca', Poland:'Polonia', Rhodesia:'Rodesia', Ukraine:'Ucrania',
  Pakistan:'Pakistán', Greece:'Grecia', Finland:'Finlandia', Yugoslavia:'Yugoslavia'
};

const NAT_ES = {
  British:'británico', German:'alemán', French:'francés', Argentine:'argentino',
  Argentinian:'argentino', Austrian:'austríaco', Brazilian:'brasileño', Dutch:'neerlandés',
  Italian:'italiano', Finnish:'finlandés', Spanish:'español', Australian:'australiano',
  Mexican:'mexicano', Canadian:'canadiense', Monegasque:'monegasco', Polish:'polaco',
  Danish:'danés', Swedish:'sueco', Swiss:'suizo', Belgian:'belga', Japanese:'japonés',
  Chinese:'chino', Thai:'tailandés', Irish:'irlandés', 'New Zealander':'neozelandés',
  Venezuelan:'venezolano', Hungarian:'húngaro', Russian:'ruso', American:'estadounidense',
  'South African':'sudafricano', Indian:'indio', Colombian:'colombiano', Uruguayan:'uruguayo',
  Rhodesian:'rodesiano', Czech:'checo', Portuguese:'portugués', Indonesian:'indonesio',
  Malaysian:'malasio', Estonian:'estonio', Chilean:'chileno', Peruvian:'peruano',
  Israeli:'israelí', Ukrainian:'ucraniano', Liechtensteiner:'liechtensteiniano',
  Hong_Kong:'hongkonés'
};

const cty = c => COUNTRY_ES[c] || c || '—';
const natEs = n => {
  const v = NAT_ES[n] || n || '';
  return v ? v.charAt(0).toUpperCase() + v.slice(1) : '';
};
const teamFull = name => {
  const k = String(name || '').trim().toLowerCase();
  return TEAM_FULL[k] || name || '—';
};
const raceEs = n => String(n || '').replace(/Grand Prix/g, 'Gran Premio');

const SESSION_NAMES = {
  FirstPractice: 'Práctica 1',
  SecondPractice: 'Práctica 2',
  ThirdPractice: 'Práctica 3',
  SprintQualifying: 'Clasificación Sprint',
  Sprint: 'Carrera Sprint',
  Qualifying: 'Clasificación'
};

const TYRE = {
  SOFT: 'Blando (rojo)', MEDIUM: 'Medio (amarillo)', HARD: 'Duro (blanco)',
  INTERMEDIATE: 'Intermedio (verde)', WET: 'Mojado (azul)'
};

const ALIAS = {
  montmelo: 'barcelona', barcelonacatalunya: 'barcelona', catalunya: 'barcelona', circuitdebarcelonacatalunya: 'barcelona',
  spielberg: 'austria', redbullring: 'austria',
  spafrancorchamps: 'spa', circuitdespafrancorchamps: 'spa',
  budapest: 'hungaroring',
  sopaulo: 'saopaulo', interlagos: 'saopaulo', autodromojosecarlospace: 'saopaulo',
  yasisland: 'abudhabi', yasmarina: 'abudhabi', yasmarinacircuit: 'abudhabi',
  marinabay: 'singapore', marinabaystreetcircuit: 'singapore',
  montecarlo: 'monaco', montecarlocircuit: 'monaco',
  mexicocity: 'mexico', hermanosrodriguez: 'mexico', autodromohermanosrodriguez: 'mexico',
  miamigardens: 'miami', miamiinternationalautodrome: 'miami',
  sakhir: 'bahrain', bahraininternationalcircuit: 'bahrain',
  madring: 'madrid', ifema: 'madrid',
  lusail: 'qatar', losailinternationalcircuit: 'qatar',
  gillesvilleneuve: 'montreal', circuitgillesvilleneuve: 'montreal',
  sepanginternationalcircuit: 'sepang'
};

const S = {
  source: 'api',
  calendar: [],
  drivers: [],
  teams: [],
  champs: [],
  champsDone: false,
  sim: {},
  details: {}
};

const C = {
  tab: 'vig',
  hist: null,
  season: {},
  drv: null,
  drvPromise: null,
  drvProg: null,
  dteams: {}
};

let drvTab = 'act';
let drvQuery = '';
let drvModalId = null;

const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lastName = n => String(n).split(' ').pop();
const fmtDate = iso => new Date(iso + 'T00:00:00').toLocaleDateString('es', { day: 'numeric', month: 'short' });
const fmtDateY = iso => new Date(iso + 'T00:00:00').toLocaleDateString('es', { day: 'numeric', month: 'short', year: 'numeric' });
const drvName = d => `${d.givenName} ${d.familyName}`;
const nextRace = () => S.calendar.find(r => !r.done) || null;
const teamColorByName = name => {
  const t = S.teams.find(x => x.name === name);
  return t ? t.color : '#888';
};
const teamColorFor = name => {
  const t = S.teams.find(x => x.name === name);
  if (t) return t.color;
  const hit = NAME_COLORS.find(([re]) => re.test(name || ''));
  return hit ? hit[1] : '#e10600';
};
const norm = s => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const toSec = t => { const p = String(t).split(':'); return p.length === 2 ? (+p[0]) * 60 + (+p[1]) : +p[0]; };
const lineRow = (label, value) => `<div class="line"><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`;
const sleep = ms => new Promise(r => setTimeout(r, ms));
const readCache = k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } };
const writeCache = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const isFinish = s => /^(Finished|\+\d+ Laps?)$/.test(s || '');
const yearOf = iso => (iso ? String(iso).slice(0, 4) : '—');
const doneCount = () => S.calendar.filter(r => r.done).length;

function ageOn(dob, ref) {
  if (!dob || !ref) return null;
  const b = new Date(String(dob).slice(0, 10) + 'T00:00:00');
  const r = ref instanceof Date ? ref : new Date(String(ref).slice(0, 10) + 'T00:00:00');
  if (isNaN(b) || isNaN(r)) return null;
  let a = r.getFullYear() - b.getFullYear();
  const m = r.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && r.getDate() < b.getDate())) a--;
  return a;
}

/* ============ FOOTER ============ */
function setupUserFooter() {
  let existingFooter = document.querySelector('footer');
  const footerHTML = `<footer><p>fOnefan • Plataforma de información sobre Fórmula 1</p></footer>`;
  if (existingFooter) {
    existingFooter.outerHTML = footerHTML;
  } else {
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }
}

/* ============ FUSIÓN CALENDARIO DENTRO DE CAMPEONATO ============ */
function mergeCalendarIntoStandings() {
  const navCal = document.querySelector('nav [data-view="calendar"]');
  if (navCal) navCal.remove();

  const vStandings = $('#v-standings');
  const vCalendar = $('#v-calendar');
  if (!vStandings || !vCalendar || $('#champTabs')) return;

  const head = vStandings.querySelector('.sec-head');
  if (head) {
    const h2 = head.querySelector('h2');
    const p = head.querySelector('p');
    if (h2) h2.innerHTML = 'Campeonato & Calendario';
    if (p) p.innerHTML = 'Posiciones actuales del mundial y cronograma de la temporada 2026.';
  }

  const posWrapper = document.createElement('div');
  posWrapper.id = 'champ-pos';
  Array.from(vStandings.children).forEach(node => {
    if (node !== head) posWrapper.appendChild(node);
  });

  const calWrapper = document.createElement('div');
  calWrapper.id = 'champ-cal';
  calWrapper.style.display = 'none';

  Array.from(vCalendar.children).forEach(node => {
    if (!node.classList.contains('sec-head')) calWrapper.appendChild(node);
  });

  const tabsHTML = `
    <div class="chips" id="champTabs" style="margin-bottom: 24px;">
      <button class="chip on" data-champ-tab="pos">Tabla de Posiciones</button>
      <button class="chip" data-champ-tab="cal">Calendario de Carreras</button>
    </div>
  `;
  if (head) head.insertAdjacentHTML('afterend', tabsHTML);
  else vStandings.insertAdjacentHTML('afterbegin', tabsHTML);

  vStandings.appendChild(posWrapper);
  vStandings.appendChild(calWrapper);
  vCalendar.remove();
}

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
async function getJSON(path, tries = 3) {
  for (let i = 0; i < tries; i++) {
    const res = await fetch(API + path);
    if (res.ok) return res.json();
    if (res.status !== 429 || i === tries - 1) throw new Error(`HTTP ${res.status} en ${path}`);
    await sleep(1500 * (i + 1));
  }
}

async function fetchAllRaces(path) {
  const byRound = {};
  let offset = 0, total = Infinity;
  while (offset < total) {
    const sep = path.includes('?') ? '&' : '?';
    const j = await getJSON(`${path}${sep}limit=100&offset=${offset}`);
    total = +j.MRData.total || 0;
    let n = 0;
    (j.MRData.RaceTable.Races || []).forEach(r => {
      const k = +r.round;
      byRound[k] ??= { Results: [] };
      const rows = r.Results || [];
      n += rows.length;
      byRound[k].Results.push(...rows);
    });
    if (!n) break;
    offset += 100;
  }
  return byRound;
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

    const firstSessionWhen = sessions.length > 0 ? sessions[0].when : (local?.start ? `${local.start}T00:00:00` : when);

    return {
      round: +r.round,
      id: 'r' + r.round,
      name: local?.name || raceEs(r.raceName),
      dateLabel: local?.date || fmtDate(r.date),
      start: r.date,
      when,
      firstSessionWhen,
      sprint: !!r.Sprint,
      flag: FLAGS[loc.country] || '🏁',
      circuit: r.Circuit.circuitName,
      circuitId: r.Circuit.circuitId,
      circuitUrl: r.Circuit.url,
      country: loc.country,
      locality: loc.locality,
      lat: +loc.lat,
      lon: +loc.long,
      place: `${loc.locality}, ${cty(loc.country)}`,
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
    nat: s.Driver.nationality || '',
    dob: s.Driver.dateOfBirth || '',
    code: s.Driver.code || '',
    num: s.Driver.permanentNumber || '',
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
    when: r.start + 'T23:59:59',
    firstSessionWhen: r.start + 'T00:00:00',
    sprint: r.sprint, flag: r.flag,
    circuit: '', circuitId: null, circuitUrl: null, country: '', locality: '',
    lat: null, lon: null, place: '', sessions: [], done: r.done
  }));
  S.drivers = DRIVERS.map(d => ({
    id: d.id, name: d.name, nat: '', dob: '', code: '', num: '', team: d.team,
    teamName: (TEAMS.find(t => t.id === d.team) || {}).name || '—',
    basePts: d.basePts, pos: 0
  }));
  S.teams = TEAMS.map(t => ({
    id: t.id, name: t.name, color: t.color,
    pts: DRIVERS.filter(d => d.team === t.id).reduce((s, d) => s + d.basePts, 0)
  }));
  S.source = 'local';
}

/* ============ CAMPEONES ============ */
async function loadChampYear(y) {
  const key = CHAMP_CACHE + y;
  if (y < SEASON) {
    const cached = readCache(key);
    if (cached) return cached;
  }
  const j = await getJSON(`/${y}/driverStandings.json`);
  const l = j.MRData.StandingsTable.StandingsLists[0];
  if (!l || !l.DriverStandings?.length) return null;
  const r = l.DriverStandings[0];
  const cons = r.Constructors || [];
  const out = {
    season: +l.season,
    driverId: r.Driver.driverId,
    name: drvName(r.Driver),
    nat: r.Driver.nationality || '',
    teamId: cons[cons.length - 1]?.constructorId || '',
    team: cons.map(c => c.name).join(' / ') || '—',
    points: +r.points
  };
  if (y < SEASON) writeCache(key, out);
  return out;
}

async function loadAllChamps(onProgress) {
  const years = [];
  for (let y = SEASON - 1; y >= FIRST_SEASON; y--) years.push(y);
  const found = [];
  const failed = [];

  for (let i = 0; i < years.length; i += 3) {
    const batch = years.slice(i, i + 3);
    const res = await Promise.allSettled(batch.map(loadChampYear));
    res.forEach((b, k) => {
      if (b.status === 'fulfilled' && b.value) found.push(b.value);
      else failed.push(batch[k]);
    });
    S.champs = [...found].sort((a, b) => b.season - a.season);
    onProgress?.();
    await sleep(250);
  }

  for (const y of failed.splice(0)) {
    try {
      const c = await loadChampYear(y);
      if (c) found.push(c);
    } catch (e) {
      console.warn(`No se pudo cargar ${y}`, e);
    }
    await sleep(250);
  }

  S.champs = [...found].sort((a, b) => b.season - a.season);
  S.champsDone = true;
  onProgress?.();
  return S.champs;
}

async function loadSeasonDetail(y) {
  if (C.season[y]) return C.season[y];

  const [cal, st, resByRound, sprByRound] = await Promise.all([
    getJSON(`/${y}.json?limit=100`),
    getJSON(`/${y}/driverStandings.json`),
    fetchAllRaces(`/${y}/results.json`),
    fetchAllRaces(`/${y}/sprint.json`).catch(() => ({}))
  ]);

  const list = st.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
  const champId = list[0].Driver.driverId;

  const rounds = cal.MRData.RaceTable.Races.map(r => {
    const k = +r.round;
    return {
      round: k,
      name: r.raceName,
      date: r.date,
      country: r.Circuit.Location.country,
      race: resByRound[k]?.Results || [],
      sprint: sprByRound[k]?.Results || []
    };
  }).sort((a, b) => a.round - b.round);

  const maxRace = y >= 2019 && y <= 2024 ? 26 : 25;
  const maxSpr = y >= 2023 ? 8 : (y >= 2021 ? 3 : 0);
  const maxAfter = i => rounds.slice(i + 1).reduce((s, rr) => s + maxRace + (rr.sprint.length ? maxSpr : 0), 0);
  const cum = {};
  let clinchIdx = -1;
  rounds.forEach((rr, i) => {
    rr.race.forEach(x => { cum[x.Driver.driverId] = (cum[x.Driver.driverId] || 0) + (+x.points); });
    rr.sprint.forEach(x => { cum[x.Driver.driverId] = (cum[x.Driver.driverId] || 0) + (+x.points); });
    if (clinchIdx < 0 && y >= 2010) {
      const me = cum[champId] || 0;
      const other = Math.max(0, ...Object.entries(cum).filter(([k]) => k !== champId).map(([, v]) => v));
      if (me - other > maxAfter(i)) clinchIdx = i;
    }
  });
  const clinchNA = y < 2010;
  if (!clinchNA && clinchIdx < 0) clinchIdx = rounds.length - 1;

  const rows = rounds.map(rr => {
    const rRes = rr.race.find(x => x.Driver.driverId === champId);
    const sp = rr.sprint.find(x => x.Driver.driverId === champId);
    return {
      round: rr.round, name: rr.name, date: rr.date, country: rr.country,
      pos: rRes ? rRes.position : null,
      status: rRes ? rRes.status : '',
      grid: rRes ? rRes.grid : null,
      sprintPos: sp ? sp.position : null,
      pts: (rRes ? +rRes.points : 0) + (sp ? +sp.points : 0)
    };
  });

  const out = {
    champ: list[0],
    runner: list[1] ? { name: drvName(list[1].Driver), pts: +list[1].points } : null,
    champPts: +list[0].points,
    rows,
    total: rows.length,
    wins: rows.filter(r => r.pos === '1').length,
    podiums: rows.filter(r => ['1', '2', '3'].includes(r.pos)).length,
    poles: rows.filter(r => r.grid === '1').length,
    dnf: rows.filter(r => r.pos && !isFinish(r.status)).length,
    sprintWins: rows.filter(r => r.sprintPos === '1').length,
    clinchIdx,
    clinchNA
  };
  C.season[y] = out;
  return out;
}

/* ============ PILOTOS ============ */
let lastCall = 0;
async function pace() {
  const wait = lastCall + 300 - Date.now();
  if (wait > 0) await sleep(wait);
  lastCall = Date.now();
}

async function getSlow(path, tries = 6) {
  for (let i = 0; i < tries; i++) {
    await pace();
    let res = null;
    try { res = await fetch(API + path); } catch (e) { res = null; }
    if (res && res.ok) return res.json();
    if (res && res.status !== 429 && res.status < 500) throw new Error(`HTTP ${res.status} en ${path}`);
    await sleep(1500 * (i + 1));
  }
  throw new Error(`Sin respuesta de la API en ${path}`);
}

async function fetchPagedSlow(path, key) {
  const byRound = {};
  let offset = 0, total = Infinity, guard = 0;
  while (offset < total && guard++ < 60) {
    const sep = path.includes('?') ? '&' : '?';
    const j = await getSlow(`${path}${sep}limit=100&offset=${offset}`);
    total = +j.MRData.total || 0;
    let n = 0;
    (j.MRData.RaceTable.Races || []).forEach(r => {
      const k = +r.round;
      byRound[k] ??= { date: r.date, rows: [] };
      const rows = r[key] || [];
      n += rows.length;
      byRound[k].rows.push(...rows);
    });
    if (!n) break;
    offset += 100;
  }
  return Object.values(byRound);
}

const emptyAgg = () => ({
  starts: 0, wins: 0, podiums: 0, poles: 0, fl: 0, pts: 0,
  first: null, last: null, team: '', teamDate: '', number: '', teams: []
});

async function summarizeSeason(y) {
  const races = await fetchPagedSlow(`/${y}/results.json`, 'Results');
  const quals = await fetchPagedSlow(`/${y}/qualifying.json`, 'QualifyingResults').catch(() => []);
  const hasQ = quals.length > 0;

  const stats = {}, info = {};
  const ps = id => stats[id] ??= emptyAgg();

  if (hasQ) quals.forEach(q => q.rows.forEach(x => {
    if (x.position === '1') ps(x.Driver.driverId).poles++;
  }));

  races.forEach(r => r.rows.forEach(x => {
    const s = ps(x.Driver.driverId);
    s.starts++;
    if (x.position === '1') s.wins++;
    if (['1', '2', '3'].includes(x.position)) s.podiums++;
    if (x.FastestLap?.rank === '1') s.fl++;
    if (!hasQ && x.grid === '1') s.poles++;
    s.pts += +x.points || 0;
    if (!s.first || r.date < s.first) s.first = r.date;
    if (!s.last || r.date > s.last) s.last = r.date;
    const cn = x.Constructor?.name;
    if (cn && !s.teams.includes(cn)) s.teams.push(cn);
    if (r.date >= s.teamDate) {
      s.teamDate = r.date;
      s.team = cn || s.team;
      s.number = x.number || s.number;
    }
    info[x.Driver.driverId] = x.Driver;
  }));

  return { y, done: y === SEASON ? doneCount() : null, stats, info, ts: Date.now() };
}

async function getSeasonSummary(y) {
  const key = SDRV_CACHE + y;
  const cached = readCache(key);
  if (cached && (y < SEASON || cached.done === doneCount())) return cached;
  const sum = await summarizeSeason(y);
  writeCache(key, sum);
  return sum;
}

function buildDrvState(list, season) {
  return { season, ts: Date.now(), list, byId: Object.fromEntries(list.map(d => [d.id, d])) };
}

function drvProgress(n, t) {
  C.drvProg = { n, t };
  if (C.drv) return;
  const st = $('#drvStatus');
  if (!st) return;
  if (drvTab === 'hist') st.textContent = `Cargando historial de pilotos… (${n} de ${t} temporadas)`;
  else refreshActStatus();
}

async function loadDriverAggregate() {
  const done = doneCount();
  const cached = readCache(DRV_CACHE);
  if (cached && cached.season === SEASON) {
    const fresh = cached.done !== undefined
      ? cached.done === done
      : (Date.now() - cached.ts < 86400000);
    if (fresh) return buildDrvState(cached.list, SEASON);
  }

  const years = [];
  for (let y = DRV_FROM; y <= SEASON; y++) years.push(y);
  const sums = {}, failed = [];

  for (let i = 0; i < years.length; i++) {
    try { sums[years[i]] = await getSeasonSummary(years[i]); }
    catch (e) { console.warn(`Pilotos ${years[i]}:`, e); failed.push(years[i]); }
    drvProgress(i + 1, years.length);
  }

  for (const y of failed.splice(0)) {
    try { sums[y] = await getSeasonSummary(y); }
    catch (e) { console.warn(`Pilotos ${y} (reintento):`, e); failed.push(y); }
  }

  const agg = {}, info = {};
  Object.keys(sums).map(Number).sort((a, b) => a - b).forEach(y => {
    const sum = sums[y];
    Object.entries(sum.stats).forEach(([id, s]) => {
      const a = agg[id] ??= emptyAgg();
      a.starts += s.starts;
      a.wins += s.wins;
      a.podiums += s.podiums;
      a.poles += s.poles;
      a.fl += s.fl;
      a.pts += s.pts;
      if (s.first && (!a.first || s.first < a.first)) a.first = s.first;
      if (s.last && (!a.last || s.last > a.last)) a.last = s.last;
      s.teams.forEach(t => { if (!a.teams.includes(t)) a.teams.push(t); });
      if (s.teamDate && s.teamDate >= a.teamDate) {
        a.teamDate = s.teamDate;
        a.team = s.team;
        a.number = s.number || a.number;
      }
    });
    Object.assign(info, sum.info);
  });

  const list = Object.keys(agg).map(id => {
    const a = agg[id], m = info[id] || {};
    return {
      id,
      name: m.givenName ? `${m.givenName} ${m.familyName}` : id,
      nat: m.nationality || '',
      dob: m.dateOfBirth || '',
      code: m.code || '',
      num: m.permanentNumber || a.number || '',
      team: a.team,
      teams: a.teams,
      starts: a.starts, wins: a.wins, podiums: a.podiums, poles: a.poles, fl: a.fl,
      pts: a.pts, first: a.first, last: a.last
    };
  });

  if (!list.length) throw new Error('No se obtuvieron datos de pilotos');
  if (!failed.length) writeCache(DRV_CACHE, { season: SEASON, done, ts: Date.now(), list });
  if (failed.length) console.warn('Temporadas incompletas:', failed);
  return buildDrvState(list, SEASON);
}

function ensureDrv() {
  if (C.drv) return Promise.resolve(C.drv);
  C.drvPromise ??= loadDriverAggregate()
    .then(st => { C.drv = st; C.drvProg = null; return st; })
    .catch(e => { C.drvPromise = null; throw e; });
  return C.drvPromise;
}

async function loadDriverTeams(id) {
  if (C.dteams[id]) return C.dteams[id];
  const cached = readCache(DCONS_CACHE + id);
  if (cached) return (C.dteams[id] = cached);
  const j = await getSlow(`/drivers/${id}/constructors.json?limit=100`);
  const list = (j.MRData.ConstructorTable?.Constructors || []).map(c => c.name);
  C.dteams[id] = list;
  writeCache(DCONS_CACHE + id, list);
  return list;
}

function teamsFor(id, d) {
  const list = [];
  const add = n => { if (n && !list.some(x => norm(x) === norm(n))) list.push(n); };
  (C.dteams[id] || []).forEach(add);
  (d?.teams || []).forEach(add);
  const cur = S.drivers.find(x => x.id === id);
  if (cur) add(cur.teamName);
  if (!list.length && d?.team) add(d.team);
  return list;
}

function currentTeamKey(id) {
  const cur = S.drivers.find(x => x.id === id);
  return cur ? norm(cur.teamName) : '';
}

function teamPills(id, names) {
  const key = currentTeamKey(id);
  return names.map(n => {
    const now = key && norm(n) === key;
    const col = teamColorFor(n);
    return `<span class="tpill${now ? ' now' : ''}" style="--c:${col}">${esc(teamFull(n))}${now ? '<em>Actual</em>' : ''}</span>`;
  }).join('');
}

const shade = (hex, amt) => {
  let n = hex.replace('#', '');
  if (n.length === 3) n = n.split('').map(c => c + c).join('');
  const f = v => Math.max(0, Math.min(255, Math.round(amt < 0 ? v * (1 + amt) : v + (255 - v) * amt)));
  return '#' + [0, 2, 4].map(i => f(parseInt(n.substr(i, 2), 16)).toString(16).padStart(2, '0')).join('');
};

function teamLook(name) {
  const hit = TEAM_LOOK.find(([re]) => re.test(name || ''));
  return hit ? hit[1] : { main: teamColorFor(name), sec: '#ffffff', acc: '#111111' };
}

function helmetSVG(id, teamName, cls = '') {
  const L = teamLook(teamName);
  const gid = 'h' + String(id).replace(/[^a-z0-9]/gi, '') + (cls || 'sm');
  const sh = shade(L.main, .35), dk = shade(L.main, -.45);
  return `<svg class="helmet ${cls}" viewBox="0 0 200 180" aria-hidden="true">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="${sh}"/>
        <stop offset=".55" stop-color="${L.main}"/>
        <stop offset="1" stop-color="${dk}"/>
      </linearGradient>
      <linearGradient id="${gid}v" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#34497a"/>
        <stop offset=".55" stop-color="#0a0f1f"/>
        <stop offset="1" stop-color="#1d1233"/>
      </linearGradient>
    </defs>
    <path d="M26 118C22 62 60 20 112 20C152 20 178 52 180 96L182 130C182 152 168 162 146 162L72 162C46 162 28 146 26 118Z" fill="url(#${gid})"/>
    <path d="M34 84C54 52 92 36 132 40C154 42 170 52 178 66L176 74C164 60 146 56 128 56C94 56 62 70 40 98Z" fill="${L.sec}"/>
    <path d="M28 132C60 150 132 156 182 134L182 142C134 164 58 160 30 142Z" fill="${L.acc}"/>
    <path d="M84 88C84 76 96 70 116 70L166 70C180 70 184 82 182 98L178 118C176 128 170 132 158 132L102 132C90 132 84 124 84 112Z" fill="url(#${gid}v)"/>
    <path d="M96 84L150 78L160 96L104 104Z" fill="rgba(150,190,255,.3)"/>
    <rect x="150" y="142" width="24" height="9" rx="4.5" fill="#0b0b10" opacity=".75"/>
    <path d="M50 58C66 40 96 30 120 32" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="7" stroke-linecap="round"/>
  </svg>`;
}

/* ============ PILOTOS: VISTA ============ */
const titlesOf = id => S.champs.filter(c => c.driverId === id).length;

function renderDriversCurrent(grid, status) {
  grid.innerHTML = S.drivers.map((d, i) => {
    const s = C.drv?.byId[d.id] || {};
    const col = teamColorByName(d.teamName);
    const num = d.num || s.num || '—';
    const code = d.code || s.code || '';
    const nat = natEs(d.nat || s.nat);
    const edad = ageOn(d.dob || s.dob, new Date());
    return `
    <article class="glass dcard" data-drv="${esc(d.id)}" style="--c:${col};animation-delay:${i * 40}ms">
      <div class="dc-hel">${helmetSVG(d.id, d.teamName)}</div>
      <div class="dhead"><span class="dnum">${esc(num)}</span><span class="dcode">${esc(code)}</span></div>
      <h3>${esc(d.name)}</h3>
      <p class="dteam"><span class="dot" style="background:${col}"></span>${esc(teamFull(d.teamName))}</p>
      <div class="dfoot"><span>${esc(nat || '—')}${edad != null ? ` · ${edad} años` : ''}</span><span>${d.pos ? `P${d.pos} · ${d.basePts} pts` : ''}</span></div>
    </article>`;
  }).join('');
  refreshActStatus();
}

function refreshActStatus() {
  const st = $('#drvStatus');
  if (!st || drvTab !== 'act') return;
  let txt = `${S.drivers.length} pilotos en la parrilla 2026`;
  if (!C.drv) {
    txt += C.drvProg
      ? ` · cargando historial (${C.drvProg.n} de ${C.drvProg.t} temporadas)`
      : ' · cargando estadísticas…';
  }
  st.textContent = txt;
}

async function renderDriversHistory(grid, status) {
  if (!C.drv) {
    grid.innerHTML = '';
    status.textContent = 'Cargando pilotos de la historia…';
    try {
      await ensureDrv();
    } catch (e) {
      console.warn(e);
      grid.innerHTML = '';
      status.innerHTML = `No se pudo cargar la lista de pilotos. <button class="btn-sm" data-retry>Reintentar</button>`;
      return;
    }
    if (drvTab !== 'hist') return;
  }

  const q = norm(drvQuery);
  const list = C.drv.list.filter(d => !q || norm(d.name).includes(q));

  list.sort((a, b) =>
    (titlesOf(b.id) - titlesOf(a.id)) ||
    (b.wins - a.wins) ||
    (b.starts - a.starts) ||
    a.name.localeCompare(b.name));

  status.textContent = `${list.length} ${list.length === 1 ? 'piloto' : 'pilotos'}${q ? ' encontrados' : ' en la historia de la F1'}`;

  const activeIds = new Set(S.drivers.map(d => d.id));
  grid.innerHTML = list.map((d, i) => {
    const t = titlesOf(d.id);
    const col = teamColorFor(d.team);
    const active = activeIds.has(d.id) || yearOf(d.last) === String(SEASON);
    const years = `${yearOf(d.first)} – ${active ? 'Actualidad' : yearOf(d.last)}`;
    const edad = active ? ageOn(d.dob, new Date()) : ageOn(d.dob, d.last);
    const edadTxt = edad != null ? (active ? `${edad} años` : `${edad} años al retiro`) : '';
    const names = teamsFor(d.id, d);
    const more = names.length > 3 ? `<span class="tpill more">+${names.length - 3}</span>` : '';
    return `
    <article class="glass hcard" data-drv="${esc(d.id)}" style="--c:${col};animation-delay:${Math.min(i, 30) * 18}ms">
      <div class="hc-head">
        <span class="hc-years">${esc(years)}</span>
        ${t ? `<span class="hc-title">🏆 ${t} ${t === 1 ? 'título' : 'títulos'}</span>` : ''}
      </div>
      <h3>${esc(d.name)}</h3>
      <p class="hc-sub">${esc(natEs(d.nat) || '—')}${edadTxt ? ' · ' + edadTxt : ''}</p>
      <div class="hc-teams">${names.length ? teamPills(d.id, names.slice(0, 3)) : ''}${more}</div>
      <div class="hc-stats">
        <div><b>${d.starts}</b><span>GP</span></div>
        <div><b>${d.wins}</b><span>Victorias</span></div>
        <div><b>${d.podiums}</b><span>Podios</span></div>
        <div><b>${d.poles}</b><span>Poles</span></div>
      </div>
    </article>`;
  }).join('');
}

async function renderDrivers() {
  const tools = $('#drvTools'), grid = $('#drvGrid'), status = $('#drvStatus');
  tools.style.display = drvTab === 'hist' ? 'flex' : 'none';
  document.querySelectorAll('#drvTabs .chip').forEach(c => c.classList.toggle('on', c.dataset.dt === drvTab));

  if (drvTab === 'hof') {
    status.textContent = 'Todos los pilotos que alguna vez ganaron un título mundial.';
    renderHOF();
    return;
  }

  if (S.source === 'local') {
    grid.innerHTML = '';
    status.textContent = 'Los pilotos requieren conexión a la API.';
    return;
  }

  if (drvTab === 'act') {
    renderDriversCurrent(grid, status);
    if (!C.drv) warmDrv();
    return;
  }

  await renderDriversHistory(grid, status);
}

function warmDrv() {
  if (C.drv) return;
  ensureDrv()
    .then(() => { if (drvTab === 'act') renderDrivers(); })
    .catch(e => {
      console.warn(e);
      const st = $('#drvStatus');
      if (st && drvTab === 'act') {
        st.innerHTML = `${S.drivers.length} pilotos en la parrilla 2026 · no se pudieron cargar las estadísticas. <button class="btn-sm" data-retry>Reintentar</button>`;
      }
    });
}

function driverModalHTML(id, failed = false) {
  const cur = S.drivers.find(x => x.id === id);
  const d = C.drv?.byId[id] || {};
  const name = cur ? cur.name : d.name;
  const team = cur ? cur.teamName : d.team;
  const nat = cur?.nat || d.nat;
  const num = cur?.num || d.num || '—';
  const dob = cur?.dob || d.dob;
  const loading = !C.drv && !failed;
  const v = k => (loading ? '…' : (d[k] ?? 0));
  const titles = S.champs.filter(c => c.driverId === id).sort((a, b) => a.season - b.season);
  const active = !!cur || yearOf(d.last) === String(SEASON);
  const col = teamColorFor(team);
  const edad = active ? ageOn(dob, new Date()) : ageOn(dob, d.last);
  const names = teamsFor(id, d);
  const teamsLoading = !C.dteams[id] && !failed;

  const note = loading
    ? '<p class="muted" style="font-size:13px;margin-top:10px">Cargando estadísticas de la carrera…</p>'
    : (failed ? '<p class="muted" style="font-size:13px;margin-top:10px">No se pudieron cargar las estadísticas. <button class="btn-sm" data-retry>Reintentar</button></p>' : '');

  return `
    <span class="eyebrow">${cur ? 'Piloto actual · ' + SEASON : 'Historia de la F1'}</span>
    <h3 class="display m-title">${esc(name)}</h3>
    <div class="m-grid">
      <div class="svg-box dhel">${helmetSVG(id, team, 'big')}</div>
      <div style="display:grid;gap:12px;align-content:start">
        <div class="stat"><span>Número</span><strong>${esc(num)}</strong></div>
        <div class="stat"><span>Nacionalidad</span><strong>${esc(natEs(nat) || '—')}</strong></div>
        <div class="stat"><span>Fecha de nacimiento</span><strong>${dob ? esc(fmtDateY(dob)) : '—'}</strong></div>
        <div class="stat"><span>${active ? 'Edad' : 'Edad al retiro'}</span><strong>${edad != null ? edad + ' años' : '—'}</strong></div>
      </div>
    </div>

    <div class="box" style="margin-top:18px">
      <h4>🛡️ Escuderías en las que corrió</h4>
      <div class="tpills">${names.length ? teamPills(id, names) : '<span class="muted">—</span>'}</div>
      ${teamsLoading ? '<p class="muted" style="font-size:13px;margin-top:12px">Cargando historial completo de escuderías…</p>' : ''}
    </div>

    <div class="m-grid" style="margin-top:18px">
      <div class="box">
        <h4>🏁 Carrera</h4>
        ${lineRow('Primera carrera', d.first ? fmtDateY(d.first) : '—')}
        ${lineRow(active ? 'Estado' : 'Retiro (última carrera)', active ? 'En actividad' : (d.last ? fmtDateY(d.last) : '—'))}
        ${lineRow('Grandes Premios', v('starts'))}
        ${lineRow('Puntos totales', v('pts'))}
      </div>
      <div class="box">
        <h4>🏆 Logros</h4>
        ${lineRow('Victorias', v('wins'))}
        ${lineRow('Podios', v('podiums'))}
        ${lineRow('Poles', v('poles'))}
        ${lineRow('Vueltas rápidas', v('fl'))}
        ${lineRow('Campeonatos', titles.length)}
      </div>
    </div>
    ${note}

    ${titles.length ? `
    <div class="box" style="margin-top:18px">
      <h4>👑 Títulos mundiales</h4>
      <div class="yrs">${titles.map(t => `<span class="yr" data-season="${t.season}">${t.season} · ${esc(teamFull(t.team))}</span>`).join('')}</div>
    </div>` : ''}`;
}

function openDriver(id) {
  drvModalId = id;
  let statsFailed = false;
  const paint = () => {
    if (drvModalId === id) $('#mBody').innerHTML = driverModalHTML(id, statsFailed);
  };
  openModal(driverModalHTML(id));
  loadDriverTeams(id).then(paint).catch(e => { console.warn(e); paint(); });
  if (C.drv) return;
  ensureDrv().then(paint).catch(e => {
    console.warn(e);
    statsFailed = true;
    paint();
  });
}

/* ============ NAVEGACIÓN ============ */
function show(v) {
  document.querySelectorAll('.view').forEach(s => s.classList.toggle('active', s.id === 'v-' + v));
  document.querySelectorAll('.tab').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (v === 'pilotos') renderDrivers();
}

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

/* ============ INICIO ============ */
let cdTimer = null;
function renderHome() {
  const next = nextRace();
  const leader = standings().drivers[0];

  if (next) {
    $('#nextName').textContent = next.name;
    $('#nextDate').textContent = `${next.dateLabel} · ${next.sprint ? 'Formato Sprint' : 'Fin de semana estándar'}`;
    startCountdown(next.firstSessionWhen || next.when);
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
  drvModalId = null;
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
          <p class="muted" style="font-size:14px;line-height:1.7">${notes}</p>
          <p class="muted" style="font-size:14px;line-height:1.7;margin-top:10px">Los horarios se muestran en hora de Argentina (UTC−3), sin cambio de horario.</p>
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

  renderContenders();
}

/* ============ CONTENDIENTES AL TÍTULO ============ */
// Una carrera simulada en el simulador cuenta como decidida
const simTouched = id => {
  const r = S.sim[id];
  return !!r && (r.race.some(Boolean) || r.sprint.some(Boolean));
};

// Carreras que todavía pueden cambiar el campeonato
const openRacesList = () => S.calendar
  .filter(r => !r.done && !simTouched(r.id))
  .map(r => ({ id: r.id, name: r.name, round: r.round, sprint: r.sprint }));

// Límite de nodos de la búsqueda: evita que la página se trabe en casos muy complejos
const SEARCH_LIMIT = 300000;

// Busca un reparto de puntos que cumpla los topes de cada rival.
// Cada sesión (carrera principal o Sprint) necesita sus puestos de puntos (P2..P10 o S2..S8),
// y cada puesto va a un piloto distinto dentro de esa sesión.
// Al asignar, se prueba primero el rival más cercano al candidato (menor tope restante),
// así los pilotos con chances reales aparecen sumando cuando el margen lo permite.
// Si no hay reparto posible, devuelve null.
function solveSlots(slots, others, cap) {
  const capL = { ...cap };
  const used = {};
  const assign = new Array(slots.length);
  let nodes = 0;

  const dfs = i => {
    if (i === slots.length) return true;
    if (++nodes > SEARCH_LIMIT) return false;
    const s = slots[i];
    const u = (used[s.sess] ??= new Set());
    const opts = others
      .filter(o => !u.has(o.id) && capL[o.id] >= s.v)
      .sort((a, b) => (capL[a.id] - capL[b.id]) || (b.pts - a.pts));
    for (const o of opts) {
      capL[o.id] -= s.v;
      u.add(o.id);
      assign[i] = o.id;
      if (dfs(i + 1)) return true;
      capL[o.id] += s.v;
      u.delete(o.id);
    }
    return false;
  };

  return dfs(0) ? assign : null;
}

// Escenario de referencia para que un piloto sea campeón.
// Gana todas las carreras que quedan (su mejor caso). Los puntos restantes se reparten
// entre los demás, y ninguno puede terminar con más puntos que el total final del candidato.
// Un empate se considera posible. Devuelve null si ese reparto no es posible.
function scenarioFor(id, drivers, open) {
  const me = drivers.find(d => d.id === id);
  if (!me) return null;
  const final = me.pts + open.reduce((s, r) => s + PTS[0] + (r.sprint ? SPR[0] : 0), 0);
  const others = drivers.filter(d => d.id !== id);

  const cap = {};
  for (const o of others) {
    cap[o.id] = final - o.pts;          // puntos máximos que puede sumar cada rival
    if (cap[o.id] < 0) return null;     // ya supera el total final de este piloto
  }
  const cap0 = { ...cap };

  // Lista de sesiones con sus puestos de puntos
  const slots = [];
  for (const r of open) {
    if (r.sprint) {
      SPR.slice(1).forEach((v, k) => slots.push({ sess: r.id + '-s', v, pos: k + 2 }));
    }
    PTS.slice(1).forEach((v, k) => slots.push({ sess: r.id + '-m', v, pos: k + 2 }));
  }

  const assign = solveSlots(slots, others, cap);
  if (!assign) return null;

  const rounds = open.map(r => ({ race: r, mainPos: {}, sprPos: {} }));
  const byId = Object.fromEntries(rounds.map(x => [x.race.id, x]));
  slots.forEach((s, i) => {
    const key = s.sess.slice(0, -2);
    const rr = byId[key];
    if (s.sess.endsWith('-s')) rr.sprPos[assign[i]] = s.pos;
    else rr.mainPos[assign[i]] = s.pos;
  });

  return { final, cap0, rounds };
}

function contenderData() {
  const { drivers } = standings(S.sim);
  const leader = drivers[0];
  const open = openRacesList();
  const pool = open.reduce((s, r) => s + PTS[0] + (r.sprint ? SPR[0] : 0), 0);

  const scen = {};
  drivers.forEach(d => {
    const sc = scenarioFor(d.id, drivers, open);
    if (sc) scen[d.id] = sc;
  });
  const cands = drivers
    .filter(d => scen[d.id])
    .map(d => ({ ...d, max: d.pts + pool }));

  return { drivers, leader, open, pool, cands, scen };
}

function ensureContendBox() {
  let box = $('#contenders');
  if (box) return box;
  box = document.createElement('div');
  box.id = 'contenders';
  box.className = 'glass contend';
  const teamPanel = $('#teamTable')?.parentElement;
  if (teamPanel && teamPanel.parentElement) {
    const side = document.createElement('div');
    side.className = 'side';
    teamPanel.parentElement.replaceChild(side, teamPanel);
    side.appendChild(teamPanel);
    side.appendChild(box);
  } else {
    ($('#champ-pos') || $('#v-standings')).appendChild(box);
  }
  return box;
}

function renderContenders() {
  if (S.source === 'local') {
    const b = $('#contenders');
    if (b) b.style.display = 'none';
    return;
  }
  const box = ensureContendBox();
  box.style.display = '';

  const { drivers, leader, open, pool, cands } = contenderData();
  const N = open.length;

  const head = `
    <div class="ct-head">
      <span class="eyebrow">Matemática del título</span>
      <h3 class="display">Pilotos con chances</h3>
      <p class="muted">${N
        ? `Quedan ${N} ${N === 1 ? 'carrera' : 'carreras'} · hasta ${pool} pts por sumar`
        : 'No quedan carreras por disputar'}</p>
    </div>`;

  if (!N) {
    box.innerHTML = `${head}
      <div class="ct-decided">
        <span class="ct-lead">Campeón</span>
        <b>${esc(leader.name)}</b>
        <span class="muted">${leader.pts} pts · ${esc(teamFull(leader.teamName))}</span>
      </div>`;
    return;
  }

  const top = Math.max(leader.pts, ...cands.map(c => c.max), 1);

  const cards = cands.map((d, i) => {
    const col = teamColorByName(d.teamName);
    const gap = leader.pts - d.pts;
    const now = d.pts / top * 100;
    const potW = (d.max - d.pts) / top * 100;
    const isLead = d.id === leader.id;
    const meta = isLead ? '<span>Lidera el campeonato</span>' : `<span>Vs líder −${gap}</span>`;
    return `
    <article class="glass ct-card" data-ct-drv="${esc(d.id)}" tabindex="0" role="button" style="--c:${col};animation-delay:${i * 50}ms">
      <div class="ct-row">
        <span class="ct-pos">P${i + 1}</span>
        <div class="ct-info">
          <h3>${esc(d.name)}</h3>
          <p class="dteam"><span class="dot" style="background:${col}"></span>${esc(teamFull(d.teamName))}</p>
        </div>
        <div class="ct-pts"><b>${d.pts}</b><span>pts</span></div>
      </div>
      <div class="ct-bar">
        <i class="now" style="width:${now.toFixed(2)}%"></i>
        <i class="pot" style="left:${now.toFixed(2)}%;width:${potW.toFixed(2)}%"></i>
      </div>
      <div class="ct-meta">${meta}<span>Máximo ${d.max}</span></div>
      <div class="ct-cta"><span>${isLead ? 'Ver cómo mantenerse campeón' : 'Ver cómo salir campeón'}</span><i>→</i></div>
    </article>`;
  }).join('');

  box.innerHTML = `${head}<div class="ct-list">${cards}</div>`;
}

// Modal con el escenario carrera por carrera para que un piloto sea campeón.
// Muestra solo al piloto elegido y a los contendientes que todavía tienen chances.
function openChampPath(id) {
  const { drivers, open, cands, scen } = contenderData();
  const d = drivers.find(x => x.id === id);
  const sc = scen[id];
  if (!d || !sc || !open.length) return;

  const N = open.length;
  const sprints = open.filter(r => r.sprint).length;
  const byId = Object.fromEntries(drivers.map(x => [x.id, x]));
  const leader = drivers[0];
  const col = teamColorByName(d.teamName);
  const maxPossible = PTS[1] * N + SPR[1] * sprints;   // P2 en todas las carreras y S2 en todos los Sprints

  // Contendientes que siguen con chances, sin el piloto elegido
  const rivalIds = cands.map(c => c.id).filter(x => x !== id);

  const margin = d.id === leader.id
    ? (drivers[1] ? `Lidera por ${d.pts - drivers[1].pts} pts` : 'Lidera')
    : `−${leader.pts - d.pts} pts vs ${lastName(leader.name)}`;

  const roundsHTML = sc.rounds.map(({ race, mainPos, sprPos }) => {
    const rivals = rivalIds.map(rid => {
      const o = byId[rid];
      const main = mainPos[rid] ? `P${mainPos[rid]}` : 'fuera de puntos';
      const spr = race.sprint
        ? (sprPos[rid] ? ` · S${sprPos[rid]}` : ' · Sprint fuera de puntos')
        : '';
      return `<span class="tpill" style="--c:${teamColorByName(o.teamName)}">${esc(lastName(o.name))} · ${main}${spr}</span>`;
    }).join('');
    return `
      <div class="pl-row">
        <span class="pl-k">R${String(race.round).padStart(2, '0')}</span>
        <div class="pl-t">
          <b>${esc(raceEs(race.name))}${race.sprint ? ' · Sprint' : ''}</b>
          <div class="tpills">
            <span class="tpill now" style="--c:${col}">${esc(lastName(d.name))} · P1${race.sprint ? ' · S1' : ''}</span>
            ${rivals || '<span class="muted">Ningún otro contendiente tiene chances en esta carrera</span>'}
          </div>
        </div>
      </div>`;
  }).join('');

  const topes = Object.entries(sc.cap0)
    .filter(([rid, c]) => rid !== id && c < maxPossible)
    .sort((a, b) => a[1] - b[1])
    .slice(0, 8)
    .map(([rid, c]) => {
      const o = byId[rid];
      return `
        <div class="pl-other">
          <span><span class="dot" style="background:${teamColorByName(o.teamName)}"></span>${esc(o.name)}</span>
          <strong>puede sumar como máximo ${c} pts más</strong>
        </div>`;
    }).join('');

  openModal(`
    <span class="eyebrow">Camino al título · ${SEASON}</span>
    <h3 class="display m-title">${esc(d.name)}</h3>
    <div class="m-grid">
      <div class="stat"><span>Puntos actuales</span><strong>${d.pts}</strong></div>
      <div class="stat"><span>Máximo posible</span><strong>${sc.final} pts</strong></div>
      <div class="stat"><span>Frente al líder</span><strong>${esc(margin)}</strong></div>
      <div class="stat"><span>Carreras que quedan</span><strong>${N}${sprints ? ` · ${sprints} con Sprint` : ''}</strong></div>
    </div>

    <div class="box" style="margin-top:18px">
      <h4>🏁 Escenario carrera por carrera</h4>
      <p class="muted note-s" style="margin:0 0 12px">${esc(lastName(d.name))} gana todas las carreras que quedan, que es su mejor caso. Abajo aparecen solo los contendientes que todavía tienen chances, con el puesto donde tienen que terminar. Este es un escenario posible entre varios; un empate se considera posible.</p>
      <div class="pl-list">${roundsHTML}</div>
    </div>

    <div class="box" style="margin-top:18px">
      <h4>🎯 Límite de puntos de los rivales</h4>
      <div class="pl-others">${topes || '<p class="muted">Ningún rival tiene un límite ajustado: con los puntos que quedan no pueden superarlo.</p>'}</div>
      <p class="muted note-s">Si un rival supera ese límite, ${esc(lastName(d.name))} deja de ser campeón. Se muestran los 8 rivales más ajustados.</p>
    </div>`);
}

/* ============ TRAZADOS ============ */
const trackPaths = {};

function nearestTrack(lat, lon) {
  if (lat == null || lon == null || isNaN(lat) || isNaN(lon)) return null;
  const k = Math.cos(lat * Math.PI / 180);
  let best = null, bd = Infinity;
  TRACK_LIB.forEach(t => {
    const d = Math.hypot((t.lon - lon) * 111 * k, (t.lat - lat) * 111);
    if (d < bd) { bd = d; best = t; }
  });
  return bd <= 30 ? best : null;
}

async function loadTrackPaths(ids) {
  const cache = readCache(TRACK_CACHE) || {};
  let dirty = false;
  await Promise.all(ids.map(async id => {
    if (trackPaths[id]) return;
    if (cache[id]) { trackPaths[id] = cache[id]; return; }
    try {
      const res = await fetch(TRACK_RAW + id + '.svg');
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const doc = new DOMParser().parseFromString(await res.text(), 'image/svg+xml');
      const ds = [...doc.querySelectorAll('path')].map(p => p.getAttribute('d')).filter(Boolean);
      trackPaths[id] = [...new Set(ds)];
      cache[id] = trackPaths[id];
      dirty = true;
    } catch (e) {
      console.warn(`Trazado ${id}:`, e);
    }
  }));
  if (dirty) writeCache(TRACK_CACHE, cache);
}

function trackSVG(t) {
  const [x0, y0, x1, y1] = t.bb;
  const w = x1 - x0, h = y1 - y0, p = Math.max(w, h) * 0.04;
  const vb = [x0 - p, y0 - p, w + 2 * p, h + 2 * p].map(v => v.toFixed(1)).join(' ');
  return `<svg viewBox="${vb}" aria-hidden="true">${trackPaths[t.id].map(d => `<path d="${d}"/>`).join('')}</svg>`;
}

async function getTrack(c) {
  const t = nearestTrack(c.lat, c.lon);
  if (!t) return null;
  await loadTrackPaths([t.id]);
  return trackPaths[t.id] ? t : null;
}

async function loadCardTracks(list) {
  const matches = list.map(c => ({ c, t: nearestTrack(c.lat, c.lon) }));
  await loadTrackPaths([...new Set(matches.filter(m => m.t).map(m => m.t.id))]);
  matches.forEach(({ c, t }) => {
    const box = document.querySelector(`.trk[data-trk="${CSS.escape(c.circuitId)}"]`);
    if (!box) return;
    box.innerHTML = t && trackPaths[t.id]
      ? trackSVG(t)
      : '<span class="trk-msg">Trazado no disponible</span>';
  });
}

/* ============ CIRCUITOS ============ */
function ensureCircTabs() {
  const view = $('#v-circuits');
  if (!view || view.querySelector('#circTabs')) return;
  view.querySelector('.sec-head p').textContent =
    'Vigentes: los circuitos del calendario 2026. Historial: todos los que alguna vez albergaron una carrera de F1.';
  view.querySelector('.sec-head').insertAdjacentHTML('afterend', `
    <div class="chips" id="circTabs">
      <button class="chip on" data-ct="vig">Circuitos vigentes</button>
      <button class="chip" data-ct="hist">Historial de circuitos</button>
    </div>`);
}

async function loadCircuitHistory() {
  if (C.hist) return C.hist;
  const json = await getJSON('/circuits.json?limit=1000');
  C.hist = json.MRData.CircuitTable.Circuits.map(c => ({
    id: c.circuitId,
    name: c.circuitName,
    locality: c.Location.locality,
    country: c.Location.country,
    lat: +c.Location.lat,
    lon: +c.Location.long,
    url: c.url
  })).sort((a, b) => a.name.localeCompare(b.name));
  return C.hist;
}

async function renderCircuits() {
  const grid = $('#circGrid');
  if (!grid) return;

  if (C.tab === 'vig') {
    if (S.source === 'local') {
      grid.innerHTML = '<p class="muted">Los circuitos vigentes requieren conexión a la API.</p>';
      return;
    }
    const seen = new Set();
    const list = S.calendar.filter(r => r.circuitId && !seen.has(r.circuitId) && seen.add(r.circuitId));
    grid.innerHTML = list.map((c, i) => `
      <div class="glass circ" data-circ="${esc(c.circuitId)}" data-src="vig" style="animation-delay:${i * 60}ms">
        <span class="eyebrow">${c.flag} ${esc(cty(c.country))}</span>
        <h3>${esc(c.circuit)}</h3>
        <div class="trk" data-trk="${esc(c.circuitId)}"><span class="trk-msg">Cargando trazado…</span></div>
        <div class="foot">
          <span class="meta">Ronda ${c.round} · ${esc(c.dateLabel)}</span>
          <span class="ficha">Ver ficha <i>→</i></span>
        </div>
      </div>`).join('');
    loadCardTracks(list.map(c => ({
      circuitId: c.circuitId, lat: c.lat, lon: c.lon
    })));
    return;
  }

  grid.innerHTML = '<p class="muted">Cargando historial…</p>';
  try {
    const list = await loadCircuitHistory();
    const current = new Set(S.calendar.map(r => r.circuitId));
    grid.innerHTML = list.map((c, i) => {
      const vig = current.has(c.id);
      return `
      <div class="glass circ" data-circ="${esc(c.id)}" data-src="hist" style="animation-delay:${Math.min(i, 20) * 30}ms">
        <span class="eyebrow">${FLAGS[c.country] || '🏁'} ${esc(cty(c.country))}</span>
        <h3>${esc(c.name)}</h3>
        <div class="trk" data-trk="${esc(c.id)}"><span class="trk-msg">Cargando trazado…</span></div>
        <div class="foot">
          <span class="badge ${vig ? 'b-next' : 'b-done'}">${vig ? 'Vigente 2026' : 'Ya no forma parte del calendario'}</span>
          <span class="ficha">Ver ficha <i>→</i></span>
        </div>
      </div>`;
    }).join('');
    loadCardTracks(list.map(c => ({
      circuitId: c.id, lat: c.lat, lon: c.lon
    })));
  } catch (e) {
    console.warn(e);
    grid.innerHTML = '<p class="muted">No se pudo cargar el historial. Intenta de nuevo más tarde.</p>';
  }
}

function winStats(json) {
  const races = json.MRData.RaceTable.Races;
  const byDrv = {}, byTeam = {};
  races.forEach(r => {
    const w = r.Results[0];
    if (!w) return;
    const dn = drvName(w.Driver);
    byDrv[dn] = (byDrv[dn] || 0) + 1;
    byTeam[w.Constructor.name] = (byTeam[w.Constructor.name] || 0) + 1;
  });
  const top = obj => Object.entries(obj).sort((a, b) => b[1] - a[1]).slice(0, 3);
  const last = races[races.length - 1];
  return {
    total: races.length,
    topDrivers: top(byDrv),
    topTeams: top(byTeam),
    lastSeason: last?.season,
    lastWinner: last ? drvName(last.Results[0].Driver) : null
  };
}

function lapRecord(json) {
  let best = null;
  json.MRData.RaceTable.Races.forEach(r => r.Results.forEach(x => {
    const t = x.FastestLap?.Time?.time;
    if (!t) return;
    const sec = toSec(t);
    if (!best || sec < best.sec) {
      best = { sec, t, drv: drvName(x.Driver), team: x.Constructor.name, season: r.season };
    }
  }));
  return best;
}

function buildCircuitHistory(wins, poles) {
  const history = {};

  if (wins && wins.MRData.RaceTable.Races) {
    wins.MRData.RaceTable.Races.forEach(r => {
      const year = +r.season;
      if (year >= 2000) {
        history[year] = {
          year,
          winner: drvName(r.Results[0].Driver),
          team: r.Results[0].Constructor.name
        };
      }
    });
  }

  if (poles && poles.MRData.RaceTable.Races) {
    poles.MRData.RaceTable.Races.forEach(r => {
      const year = +r.season;
      if (year >= 2000 && r.QualifyingResults && r.QualifyingResults.length > 0) {
        history[year] = history[year] || { year };
        history[year].pole = drvName(r.QualifyingResults[0].Driver);
      }
    });
  }

  return Object.values(history).sort((a, b) => b.year - a.year);
}

async function openCircuitDetail(id, src) {
  const isVig = src === 'vig';
  const info = isVig
    ? S.calendar.find(r => r.circuitId === id)
    : (C.hist || []).find(c => c.id === id);
  if (!info) return;

  const cid = isVig ? info.circuitId : info.id;
  const locality = info.locality;
  const country = info.country;
  const name = isVig ? info.circuit : info.name;
  const flag = FLAGS[country] || '🏁';
  const c = { circuitId: cid, locality, circuitName: name, country, lat: info.lat, lon: info.lon };

  openModal(`
    <span class="eyebrow">${flag} ${esc(cty(country))}</span>
    <h3 class="display m-title">${esc(name)}</h3>
    <p class="muted">Cargando datos del circuito…</p>`);

  const [wins, fast, first, track, poles] = await Promise.all([
    getJSON(`/circuits/${cid}/results/1.json?limit=1000`).catch(() => null),
    getJSON(`/circuits/${cid}/fastest/1/results.json?limit=1000`).catch(() => null),
    getJSON(`/circuits/${cid}/results.json?limit=1`).catch(() => null),
    getTrack(c).catch(() => null),
    getJSON(`/circuits/${cid}/qualifying/1.json?limit=1000`).catch(() => null)
  ]);

  const w = wins ? winStats(wins) : null;
  const rec = fast ? lapRecord(fast) : null;
  const firstSeason = first?.MRData.RaceTable.Races[0]?.season;
  const historyData = buildCircuitHistory(wins, poles);

  const trackBox = track
    ? trackSVG(track)
    : `<p class="muted" style="text-align:center;padding:40px 10px">Trazado no disponible para este circuito.</p>`;

  const recordsHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 14px;">
      <div style="background: rgba(255,255,255,.03); border: 1px solid var(--line); border-radius: 14px; padding: 18px;">
        <span class="eyebrow" style="font-size: 10px;">Vuelta Rápida en Carrera</span>
        <div style="font-family: var(--f-disp); font-size: 32px; font-weight: 900; color: var(--red); margin: 6px 0; font-style: italic;">
          ${rec ? esc(rec.t) : '—'}
        </div>
        <div style="font-weight: 600; font-size: 15px;">${rec ? esc(rec.drv) : 'Sin datos'}</div>
        <div class="muted" style="font-size: 13px; margin-top: 4px;">${rec ? rec.season + ' · ' + esc(rec.team) : ''}</div>
      </div>

      <div style="background: rgba(255,255,255,.03); border: 1px solid var(--line); border-radius: 14px; padding: 18px;">
        <span class="eyebrow" style="font-size: 10px;">Grandes Premios Disputados</span>
        <div style="font-family: var(--f-disp); font-size: 32px; font-weight: 900; margin: 6px 0; font-style: italic;">
          ${w ? w.total : '—'}
        </div>
        <div class="muted" style="font-size: 13px; margin-top: 4px;">Desde la inauguración</div>
      </div>
    </div>

    <div class="m-grid" style="margin-top: 18px;">
      <div style="background: rgba(0,0,0,.3); border: 1px solid var(--line); border-radius: 14px; padding: 16px;">
        <span class="eyebrow" style="font-size: 11px; display: block; margin-bottom: 10px;">👑 Pilotos más ganadores</span>
        ${w && w.topDrivers.length ? w.topDrivers.map(([name, count], i) => `
          <div class="line" style="padding: 8px 0; font-size: 15px;">
            <span><span class="muted mono">${i + 1}.</span>${esc(name)}</span>
            <strong>${count} <span class="muted" style="font-size:12px; font-weight: 500;">victorias</span></strong>
          </div>
        `).join('') : '<p class="muted">Sin datos</p>'}
      </div>

      <div style="background: rgba(0,0,0,.3); border: 1px solid var(--line); border-radius: 14px; padding: 16px;">
        <span class="eyebrow" style="font-size: 11px; display: block; margin-bottom: 10px;">🛡️ Escuderías más ganadoras</span>
        ${w && w.topTeams.length ? w.topTeams.map(([name, count], i) => `
          <div class="line" style="padding: 8px 0; font-size: 15px;">
            <span><span class="dot" style="background:${teamColorByName(name)}"></span> ${esc(name)}</span>
            <strong>${count} <span class="muted" style="font-size:12px; font-weight: 500;">victorias</span></strong>
          </div>
        `).join('') : '<p class="muted">Sin datos</p>'}
      </div>
    </div>
  `;

  $('#mBody').innerHTML = `
    <span class="eyebrow">${flag} ${esc(cty(country))}</span>
    <h3 class="display m-title">${esc(name)}</h3>

    <div class="m-grid">
      <div class="svg-box track">${trackBox}</div>
      <div class="box">
        <h4>📍 Ficha</h4>
        ${lineRow('Localidad', locality || '—')}
        ${lineRow('País', cty(country))}
        ${isVig
          ? lineRow('Ronda 2026', `${info.round} · ${info.dateLabel}`)
          : lineRow('Estado', 'Ya no forma parte del calendario de F1')}
        ${lineRow('Primera carrera', firstSeason || '—')}
        ${w ? lineRow('Última victoria', `${w.lastSeason} · ${w.lastWinner}`) : ''}
      </div>
    </div>

    <div class="box" style="margin-top:18px">
      <h4>🏁 Récords del Circuito</h4>
      ${recordsHTML}
    </div>

    ${historyData.length > 0 ? `
    <div class="box" style="margin-top:18px">
      <h4>📜 Historial de la pista (2000 - Presente)</h4>
      <div class="scroll" style="max-height: 280px; margin-top:10px; padding-right:10px;">
        ${historyData.map(h => `
          <div class="line" style="display:grid; grid-template-columns: 50px 1.2fr 1fr 1fr; gap:10px; align-items:center;">
            <strong style="color:var(--red); font-size:16px">${h.year}</strong>
            <span style="font-weight:600">🏆 ${esc(h.winner || '—')}</span>
            <span class="muted" style="font-size:13px">${esc(h.team || '—')}</span>
            <span style="font-size:13px">⏱️ Pole: ${esc(h.pole || '—')}</span>
          </div>
        `).join('')}
      </div>
    </div>` : ''}
  `;
}

/* ============ SALÓN DE LA FAMA ============ */
function renderHOF() {
  const grid = $('#drvGrid');
  if (!grid) return;

  const map = {};
  S.champs.forEach(c => {
    map[c.driverId] ??= { id: c.driverId, name: c.name, nat: c.nat, titles: [] };
    map[c.driverId].titles.push(c);
  });

  const list = Object.values(map).sort((a, b) =>
    b.titles.length - a.titles.length ||
    Math.min(...a.titles.map(t => t.season)) - Math.min(...b.titles.map(t => t.season)));

  let status = '';
  if (S.source === 'local') status = '<p class="muted" style="grid-column:1/-1">Requiere conexión a la API.</p>';
  else if (!S.champsDone) status = `<p class="muted" style="grid-column:1/-1">Cargando campeones… (${S.champs.length} de ${SEASON - FIRST_SEASON})</p>`;

  grid.innerHTML = list.map((d, i) => {
    const yrs = [...d.titles].sort((a, b) => a.season - b.season);
    return `
    <article class="glass dc" data-champ="${esc(d.id)}" style="animation-delay:${Math.min(i, 20) * 30}ms">
      <div class="dc-top"><span class="dc-num">${d.titles.length}</span><span class="dc-lbl">${d.titles.length === 1 ? 'título' : 'títulos'}</span></div>
      <h3>${esc(d.name)}</h3>
      <p class="dc-nat">${esc(natEs(d.nat))}</p>
      <div class="yrs">${yrs.map(t => `<span class="yr" data-season="${t.season}">${t.season}</span>`).join('')}</div>
    </article>`;
  }).join('') + status;
}

function openChampDriver(id) {
  const list = S.champs.filter(c => c.driverId === id).sort((a, b) => a.season - b.season);
  if (!list.length) return;
  const teams = [...new Set(list.map(c => c.team))];
  openModal(`
    <span class="eyebrow">${esc(natEs(list[0].nat) || 'Campeón del mundo')}</span>
    <h3 class="display m-title">${esc(list[0].name)}</h3>
    <div class="m-grid">
      <div class="svg-box" style="display:grid;place-items:center;text-align:center">
        <div>
          <div class="dc-num" style="font-size:120px">${list.length}</div>
          <div class="dc-lbl">${list.length === 1 ? 'Título mundial' : 'Títulos mundiales'}</div>
        </div>
      </div>
      <div style="display:grid;gap:12px;align-content:start">
        <div class="stat"><span>Primer título</span><strong>${list[0].season}</strong></div>
        <div class="stat"><span>Último título</span><strong>${list[list.length - 1].season}</strong></div>
        <div class="stat"><span>Escuderías</span><strong>${teams.map(t => esc(teamFull(t))).join(' · ')}</strong></div>
      </div>
    </div>
    <div class="box" style="margin-top:18px">
      <h4>🏆 Temporadas campeonas</h4>
      <div class="yrs">${list.map(t => `<span class="yr" data-season="${t.season}">${t.season} · ${esc(teamFull(t.team))}</span>`).join('')}</div>
    </div>`);
}

async function openSeason(y) {
  y = +y;
  const c = S.champs.find(x => x.season === y);

  if (y === SEASON) {
    const { drivers } = standings(S.sim);
    const [a, b] = drivers;
    return openModal(`
      <span class="eyebrow">Temporada ${SEASON} · En curso</span>
      <h3 class="display m-title">${esc(a.name)}</h3>
      <div class="m-grid">
        <div class="stat"><span>Puntos del líder</span><strong>${a.pts}</strong></div>
        <div class="stat"><span>Diferencia con el segundo</span><strong>${a.pts - b.pts} pts · ${esc(lastName(b.name))}</strong></div>
      </div>
      <div class="box" style="margin-top:18px">
        <p class="muted" style="font-size:14px;line-height:1.7">El campeón se define al final de la temporada. Esta ficha se completará cuando termine.</p>
      </div>`);
  }

  if (!c) return;
  openModal(`
    <span class="eyebrow">Temporada ${y} · Campeón del mundo</span>
    <h3 class="display m-title">${esc(c.name)}</h3>
    <p class="muted">Cargando temporada…</p>`);

  if (S.source === 'local') {
    return openModal(`
      <span class="eyebrow">Temporada ${y} · Campeón del mundo</span>
      <h3 class="display m-title">${esc(c.name)}</h3>
      <div class="box"><p class="muted">El detalle de la temporada requiere conexión a la API.</p></div>`);
  }

  try {
    const d = await loadSeasonDetail(y);
    $('#mBody').innerHTML = seasonHTML(c, d);
  } catch (e) {
    console.warn(e);
    $('#mBody').innerHTML = `
      <span class="eyebrow">Temporada ${y} · Campeón del mundo</span>
      <h3 class="display m-title">${esc(c.name)}</h3>
      <div class="box"><p class="muted">No se pudo cargar la temporada. Intenta más tarde.</p></div>`;
  }
}

function seasonHTML(c, d) {
  const color = teamColorFor(c.team);
  const maxPts = Math.max(1, ...d.rows.map(r => r.pts));

  const clinchMsg = d.clinchNA
    ? 'Dato no disponible para temporadas anteriores a 2010, cuando cambió el sistema de puntos.'
    : (() => {
        const r = d.rows[d.clinchIdx];
        const faltan = d.total - 1 - d.clinchIdx;
        return `<b>Ronda ${r.round} · ${esc(raceEs(r.name))}</b><br>
          <span class="muted">${esc(fmtDateY(r.date))} · ${faltan === 0
            ? 'Se consagró en la última carrera de la temporada'
            : `Faltaban ${faltan} ${faltan === 1 ? 'carrera' : 'carreras'} para el final`}</span>`;
      })();

  const rowsHTML = d.rows.map((r, i) => {
    const isClinch = !d.clinchNA && i === d.clinchIdx;
    const posLbl = !r.pos ? '—' : (isFinish(r.status) ? `P${r.pos}` : 'Ab.');
    const w = Math.round(r.pts / maxPts * 100);
    return `
      <div class="rr ${isClinch ? 'is-clinch' : ''}" style="--c:${color}">
        <span class="rr-r">R${String(r.round).padStart(2, '0')}</span>
        <span class="rr-n">${FLAGS[r.country] || '🏁'} ${esc(raceEs(r.name))}
          <small>${esc(fmtDateY(r.date))}${isClinch ? ' · 🏆 Título' : ''}</small></span>
        <span class="rr-p ${posLbl === 'P1' ? 'win' : ''}">${posLbl}${r.sprintPos ? `<small>S${esc(r.sprintPos)}</small>` : ''}</span>
        <span class="rr-bar"><i style="width:${w}%"></i></span>
        <span class="rr-pts">${r.pts}</span>
      </div>`;
  }).join('');

  const gap = d.runner ? d.champPts - d.runner.pts : null;

  return `
    <span class="eyebrow">Temporada ${c.season} · Campeón del mundo</span>
    <h3 class="display m-title">${esc(c.name)}</h3>
    <span class="sea-team"><span class="dot" style="background:${color}"></span>${esc(teamFull(c.team))}</span>

    <div class="hero-stats">
      <div class="hs"><b>${d.champPts}</b><span>Puntos</span></div>
      <div class="hs"><b>${d.wins}</b><span>Victorias</span></div>
      <div class="hs"><b>${d.podiums}</b><span>Podios</span></div>
      <div class="hs"><b>${d.dnf}</b><span>Abandonos</span></div>
    </div>

    <div class="m-grid" style="margin-top:18px">
      <div class="box">
        <h4>🏆 Consagración</h4>
        <p class="clinch">${clinchMsg}</p>
        ${d.runner ? lineRow('Subcampeón', d.runner.name) : ''}
        ${d.runner ? lineRow('Puntos del subcampeón', `${d.runner.pts} · diferencia ${gap}`) : ''}
      </div>
      <div class="box">
        <h4>📈 Resumen</h4>
        ${lineRow('Carreras disputadas', d.total)}
        ${lineRow('Partidas desde P1', d.poles)}
        ${lineRow('Victorias en Sprint', d.sprintWins)}
        ${lineRow('Podios', d.podiums)}
      </div>
    </div>

    <div class="box" style="margin-top:18px">
      <h4>🏁 Carrera a carrera</h4>
      <div class="rr-list">${rowsHTML}</div>
      <p class="muted" style="font-size:13px;line-height:1.6;margin-top:12px">Los puntos incluyen la Carrera Sprint cuando la hubo. Ab. = abandono.</p>
    </div>`;
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
  const simFav = $('#simFav');
  if (simFav) simFav.innerHTML = '<option value="">Elige un piloto…</option>' + DRIVER_OPTS;

  const simRaces = $('#simRaces');
  if (simRaces) {
    simRaces.innerHTML = rem.length
      ? rem.map((r, i) => `
        <details class="glass acc" ${i === 0 ? 'open' : ''}>
          <summary>
            <span class="mono muted" style="font-size:13px">R${r.round}</span>
            <strong>${r.flag} ${esc(r.name)}</strong>
            <span class="badge ${r.sprint ? 'b-sprint' : 'b-done'}">${r.sprint ? 'Sprint' : 'Estándar'}</span>
          </summary>
          <div class="sub-label">Carrera principal</div>
          <div class="slots">${slots('race', r.id, 10)}</div>
          ${r.sprint ? `<div class="sub-label">Sprint</div><div class="slots">${slots('sprint', r.id, 8)}</div>` : ''}
        </details>`).join('')
      : '<p class="glass muted" style="padding:24px;text-align:center">No quedan carreras por simular.</p>';
  }

  updateSummary();
}

function updateSummary() {
  const { drivers, teams } = standings(S.sim);
  const leader = drivers[0];
  const simFav = $('#simFav');
  const fav = simFav ? drivers.find(d => d.id === simFav.value) : null;
  const remaining = S.calendar.filter(r => !r.done).length;

  const simRank = $('#simRank');
  if (simRank) {
    simRank.innerHTML = drivers.slice(0, 6).map((d, i) => `
      <div class="line"><span><span class="muted mono">${i + 1}.</span> &nbsp;${esc(lastName(d.name))}</span>
      <strong style="color:${teamColorByName(d.teamName)}">${d.pts}</strong></div>`).join('');
  }

  const simTeams = $('#simTeams');
  if (simTeams) {
    simTeams.innerHTML = teams.slice(0, 5).map(t => `
      <div class="line"><span><span class="dot" style="background:${t.color}"></span>${esc(t.name)}</span><strong>${t.pts}</strong></div>`).join('');
  }

  const simFavPts = $('#simFavPts');
  const simFavName = $('#simFavName');
  const simNote = $('#simNote');

  if (!fav) {
    if (simFavPts) simFavPts.textContent = '—';
    if (simFavName) simFavName.textContent = 'Sin seleccionar';
    if (simNote) simNote.innerHTML = 'Elige un piloto para analizar su camino al título.';
    return;
  }

  if (simFavPts) simFavPts.innerHTML = `${fav.pts}<small>pts</small>`;
  if (simFavName) simFavName.textContent = fav.name;

  if (simNote) {
    if (fav.id === leader.id) {
      simNote.innerHTML = '<b>Líder proyectado.</b> Mantiene el destino del campeonato en sus manos.';
    } else {
      const gap = leader.pts - fav.pts;
      simNote.innerHTML = remaining
        ? `<b>Brecha de ${gap} pts</b> con ${esc(lastName(leader.name))}. Para alcanzarlo necesitaría superar al líder por un promedio de <b>${(gap / remaining).toFixed(1)} pts</b> en cada carrera restante.`
        : `<b>Diferencia final: ${gap} pts.</b> No quedan carreras por disputar.`;
    }
  }
}

/* ============ EVENTOS ============ */
document.addEventListener('click', e => {
  const viewBtn = e.target.closest('[data-view]');
  if (viewBtn) return show(viewBtn.dataset.view);

  const ctDrv = e.target.closest('[data-ct-drv]');
  if (ctDrv) return openChampPath(ctDrv.dataset.ctDrv);

  const champTabBtn = e.target.closest('[data-champ-tab]');
  if (champTabBtn) {
    document.querySelectorAll('#champTabs .chip').forEach(c => c.classList.toggle('on', c === champTabBtn));
    const t = champTabBtn.dataset.champTab;
    const pos = $('#champ-pos');
    const cal = $('#champ-cal');
    if (pos) pos.style.display = t === 'pos' ? 'block' : 'none';
    if (cal) cal.style.display = t === 'cal' ? 'block' : 'none';
    if (t === 'cal') renderCalendar();
    return;
  }

  const retry = e.target.closest('[data-retry]');
  if (retry) {
    C.drvPromise = null;
    if (drvModalId) return openDriver(drvModalId);
    return renderDrivers();
  }

  const dt = e.target.closest('[data-dt]');
  if (dt) {
    drvTab = dt.dataset.dt;
    return renderDrivers();
  }

  const drv = e.target.closest('[data-drv]');
  if (drv) return openDriver(drv.dataset.drv);

  const ct = e.target.closest('[data-ct]');
  if (ct) {
    C.tab = ct.dataset.ct;
    document.querySelectorAll('#circTabs .chip').forEach(c => c.classList.toggle('on', c === ct));
    return renderCircuits();
  }

  const season = e.target.closest('[data-season]');
  if (season) return openSeason(season.dataset.season);

  const champ = e.target.closest('[data-champ]');
  if (champ) return openChampDriver(champ.dataset.champ);

  const chip = e.target.closest('[data-f]');
  if (chip) {
    calFilter = chip.dataset.f;
    document.querySelectorAll('.chip[data-f]').forEach(c => c.classList.toggle('on', c === chip));
    return renderCalendar();
  }

  const race = e.target.closest('[data-race]');
  if (race) return openRace(race.dataset.race);

  const circ = e.target.closest('[data-circ]');
  if (circ) return openCircuitDetail(circ.dataset.circ, circ.dataset.src);

  if (e.target.id === 'modal' || e.target.closest('#mClose')) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') return closeModal();
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches?.('.logo')) {
    e.preventDefault();
    show('home');
    return;
  }
  if (e.key === 'Enter' && e.target.matches?.('.ct-card')) {
    e.preventDefault();
    openChampPath(e.target.dataset.ctDrv);
  }
});

const simRacesEl = $('#simRaces');
if (simRacesEl) {
  simRacesEl.addEventListener('change', e => {
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
}

const simFavEl = $('#simFav');
if (simFavEl) simFavEl.addEventListener('change', updateSummary);

const simResetEl = $('#simReset');
if (simResetEl) {
  simResetEl.addEventListener('click', () => {
    Object.keys(S.sim).forEach(k => delete S.sim[k]);
    document.querySelectorAll('#simRaces select').forEach(s => s.value = '');
    renderStandings();
    updateSummary();
  });
}

const drvSearchEl = $('#drvSearch');
if (drvSearchEl) {
  drvSearchEl.addEventListener('input', e => {
    drvQuery = e.target.value;
    if (drvTab === 'hist' && C.drv) renderDrivers();
  });
}

/* ============ INICIALIZACIÓN ============ */
function renderAll() {
  setupUserFooter();
  mergeCalendarIntoStandings();
  renderHome();
  renderCalendar();
  renderStandings();
  ensureCircTabs();
  renderCircuits();
  renderSim();
}

(async function init() {
  try {
    await loadSeason();
    S.source = 'api';
  } catch (err) {
    console.warn('API no disponible, usando datos locales:', err);
    loadLocal();
  }
  renderAll();
  if (S.source === 'api') {
    loadAllChamps(() => {
      if (drvTab === 'hof') renderHOF();
    }).catch(err => console.warn('Campeones:', err));
  } else {
    S.champsDone = true;
    if (drvTab === 'hof') renderHOF();
  }
})();