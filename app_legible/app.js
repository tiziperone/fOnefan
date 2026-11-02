const a0_0x532085 = "https://api.jolpi.ca/ergast/f1";
const a0_0x30d883 = 2026;
const a0_0x3bd3fc = 1950;
const a0_0x1474b2 = "dw_champ_v1_";
const a0_0x4c8a63 = "dw_drv_agg_v4";
const a0_0x2420f3 = "dw_sdrv_v1_";
const a0_0x45283f = "dw_dcons_v1_";
const a0_0x3587a9 = 1950;
const a0_0x935fb5 = "America/Argentina/Buenos_Aires";
const a0_0x1d40ce = new Set(["tsunoda"]);
const a0_0x219017 = "Fotos/";
const a0_0x519b69 = {
  albon: "CascoAlbon.webp",
  alonso: "CascoAlonso.webp",
  antonelli: "CascoAntonelli.webp",
  bearman: "CascoBearman.webp",
  bortoleto: "CascoBortoleto.webp",
  bottas: "CascoBottas.webp",
  colapinto: "CascoColapinto.webp",
  gasly: "CascoGasly.webp",
  hadjar: "CascoHadjar.webp",
  hamilton: "CascoHamilton.webp",
  hulkenberg: "CascoHulkenberg.webp",
  lawson: "CascoLawson.webp",
  leclerc: "CascoLeclerc.webp",
  lindblad: "CascoLindblad.webp",
  norris: "CascoNorris.webp",
  ocon: "CascoOcon.webp",
  perez: "CascoPerez.webp",
  piastri: "CascoPiastri.webp",
  russell: "CascoRussell.webp",
  sainz: "CascoSainz.webp",
  stroll: "CascoStroll.webp",
  verstappen: "CascoVerstappen.webp",
};
const a0_0x4065cf = "Modelos3D/";
const a0_0x4e9bf7 = {};
const a0_0x4e953e = "Fotos/";
const a0_0x5f0f78 = [
  [/ferrari/, "LogoFerrari.webp"],
  [/mercedes/, "LogoMercedes.webp"],
  [/mclaren/, "LogoMcLaren.webp"],
  [/racingbulls|^rb|alphatauri|tororosso/, "LogoRacingBulls.webp"],
  [/redbull/, "LogoRedBull.webp"],
  [/alpine|renault/, "LogoAlpine.webp"],
  [/haas/, "LogoHaas.webp"],
  [/audi/, "LogoAudi.webp"],
  [/williams/, "LogoWilliams.webp"],
  [/astonmartin|aston/, "LogoAstonMartin.webp"],
  [/cadillac/, ["LogoCadillac.webp", "LogoCadilac.webp"]],
];
const a0_0x5cfe92 =
  "https://raw.githubusercontent.com/julesr0y/pitlaneinsider/main/public/img/circuits/";
const a0_0x3db4ea = "dw_trk_svg_v2";
const a0_0xcaf996 = [
  {
    id: "adelaide-1",
    name: "Adelaide Street Circuit",
    lat: -34.9272,
    lon: 138.6172,
    bb: [35, 35, 465, 465],
  },
  {
    id: "aida-1",
    name: "Okayama International Circuit",
    lat: 34.915,
    lon: 134.2211,
    bb: [35, 36.3, 465, 463.7],
  },
  {
    id: "ain-diab-1",
    name: "Ain-Diab Circuit",
    lat: 33.5786,
    lon: -7.6875,
    bb: [1109.4, 1018.5, 1539.1, 1282.8],
  },
  {
    id: "aintree-1",
    name: "Aintree Motor Racing Circuit",
    lat: 53.4769,
    lon: -2.9406,
    bb: [35, 17.5, 464.9, 482.5],
  },
  {
    id: "anderstorp-1",
    name: "Anderstorp Raceway",
    lat: 57.2642,
    lon: 13.6014,
    bb: [35.1, 29.4, 465, 470.7],
  },
  {
    id: "austin-1",
    name: "Circuit of the Americas",
    lat: 30.1328,
    lon: -97.6411,
    bb: [35, 38.9, 465, 461.3],
  },
  {
    id: "avus-1",
    name: "AVUS",
    lat: 52.4806,
    lon: 13.2514,
    bb: [35, 40.3, 465, 459.8],
  },
  {
    id: "bahrain-1",
    name: "Bahrain International Circuit",
    lat: 26.0325,
    lon: 50.5106,
    bb: [35, 98.9, 465, 401.1],
  },
  {
    id: "baku-1",
    name: "Baku City Circuit",
    lat: 40.3725,
    lon: 49.8533,
    bb: [35, 12.5, 465.1, 487.7],
  },
  {
    id: "brands-hatch-2",
    name: "Brands Hatch",
    lat: 51.3567,
    lon: 0.2625,
    bb: [35, 92.9, 465, 406.9],
  },
  {
    id: "bremgarten-1",
    name: "Circuit Bremgarten",
    lat: 46.95,
    lon: 7.4108,
    bb: [35, 116.8, 465, 383.1],
  },
  {
    id: "buddh-1",
    name: "Buddh International Circuit",
    lat: 28.3506,
    lon: 77.535,
    bb: [35, 27.3, 465.1, 472.7],
  },
  {
    id: "buenos-aires-4",
    name: "Autódromo Juan y Oscar Gálvez",
    lat: -34.6943,
    lon: -58.4594,
    bb: [35, 40.6, 465, 459.4],
  },
  {
    id: "bugatti-1",
    name: "Bugatti Circuit",
    lat: 47.9377,
    lon: 0.2256,
    bb: [35, 13.8, 465, 486.3],
  },
  {
    id: "caesars-palace-1",
    name: "Caesars Palace",
    lat: 36.1169,
    lon: -115.175,
    bb: [25.5, 31.7, 474.5, 468.3],
  },
  {
    id: "catalunya-6",
    name: "Circuit de Barcelona-Catalunya",
    lat: 41.57,
    lon: 2.2611,
    bb: [57.3, 14.8, 443, 485.2],
  },
  {
    id: "clermont-ferrand-1",
    name: "Charade Circuit",
    lat: 45.7472,
    lon: 3.0389,
    bb: [35.1, 33.3, 465, 466.7],
  },
  {
    id: "dallas-1",
    name: "Fair Park",
    lat: 32.7819,
    lon: -96.7656,
    bb: [25.5, 38.9, 474.5, 461.1],
  },
  {
    id: "detroit-2",
    name: "Detroit Street Circuit",
    lat: 42.3297,
    lon: -83.0401,
    bb: [15.1, 96.8, 484.7, 403.3],
  },
  {
    id: "dijon-2",
    name: "Dijon-Prenois",
    lat: 47.3625,
    lon: 4.8992,
    bb: [34.9, 15.4, 465, 484.6],
  },
  {
    id: "donington-1",
    name: "Donington Park",
    lat: 52.8298,
    lon: -1.3796,
    bb: [25, 28.6, 475, 471.4],
  },
  {
    id: "east-london-1",
    name: "Prince George Circuit",
    lat: -33.0486,
    lon: 27.8736,
    bb: [35, 96.5, 464.9, 403.6],
  },
  {
    id: "estoril-2",
    name: "Autódromo do Estoril",
    lat: 38.7508,
    lon: -9.3942,
    bb: [103.3, 15.2, 396.7, 484.7],
  },
  {
    id: "fuji-2",
    name: "Fuji Speedway",
    lat: 35.3717,
    lon: 138.9267,
    bb: [35, 52.1, 465, 448],
  },
  {
    id: "hockenheimring-4",
    name: "Hockenheimring",
    lat: 49.3278,
    lon: 8.5658,
    bb: [15.1, 93.4, 485.1, 406.5],
  },
  {
    id: "hungaroring-3",
    name: "Hungaroring",
    lat: 47.5822,
    lon: 19.2511,
    bb: [41.2, 15.1, 459.2, 485],
  },
  {
    id: "imola-3",
    name: "Autodromo Internazionale Enzo e Dino Ferrari",
    lat: 44.3411,
    lon: 11.7133,
    bb: [15.1, 125.1, 485.1, 375],
  },
  {
    id: "indianapolis-2",
    name: "Indianapolis Motor Speedway",
    lat: 39.7983,
    lon: -86.2328,
    bb: [135.8, 11.3, 364.2, 488.6],
  },
  {
    id: "interlagos-2",
    name: "Autódromo José Carlos Pace",
    lat: -23.7011,
    lon: -46.6972,
    bb: [97.9, 14.8, 402.1, 485],
  },
  {
    id: "istanbul-1",
    name: "Istanbul Park",
    lat: 40.9517,
    lon: 29.405,
    bb: [34.9, 32, 465, 468],
  },
  {
    id: "jacarepagua-1",
    name: "Autódromo Internacional Nelson Piquet",
    lat: -22.9756,
    lon: -43.395,
    bb: [35, 33.3, 465, 466.7],
  },
  {
    id: "jarama-2",
    name: "Circuito del Jarama",
    lat: 40.6171,
    lon: -3.5856,
    bb: [76.6, 15, 423.4, 485.2],
  },
  {
    id: "jeddah-1",
    name: "Jeddah Corniche Circuit",
    lat: 21.5433,
    lon: 39.1728,
    bb: [35, 125.8, 465, 374.2],
  },
  {
    id: "jerez-2",
    name: "Circuito de Jerez",
    lat: 36.7083,
    lon: -6.0342,
    bb: [17.4, 15, 482.4, 485],
  },
  {
    id: "kyalami-2",
    name: "Kyalami Racing Circuit",
    lat: -25.9986,
    lon: 28.0689,
    bb: [14.9, 100, 484.9, 400.1],
  },
  {
    id: "las-vegas-1",
    name: "Las Vegas Street Circuit",
    lat: 36.175,
    lon: -115.1364,
    bb: [35, 117.2, 465, 382.9],
  },
  {
    id: "long-beach-3",
    name: "Long Beach",
    lat: 33.7664,
    lon: -118.1928,
    bb: [14.6, 154.2, 485.3, 345.8],
  },
  {
    id: "lusail-1",
    name: "Lusail International Circuit",
    lat: 25.49,
    lon: 51.4542,
    bb: [35, 96.8, 465.1, 403.5],
  },
  {
    id: "madring-1",
    name: "Circuito de Madring",
    lat: 40.4653,
    lon: -3.6153,
    bb: [15, 107.7, 485, 392.3],
  },
  {
    id: "magny-cours-3",
    name: "Circuit de Nevers Magny-Cours",
    lat: 46.8632,
    lon: 3.1642,
    bb: [89, 15, 411, 484.7],
  },
  {
    id: "marina-bay-4",
    name: "Marina Bay Street Circuit",
    lat: 1.2915,
    lon: 103.8638,
    bb: [15, 98, 485, 402],
  },
  {
    id: "melbourne-2",
    name: "Melbourne Grand Prix Circuit",
    lat: -37.8497,
    lon: 144.9683,
    bb: [57.3, 15, 442.4, 485],
  },
  {
    id: "mexico-city-3",
    name: "Autódromo Hermanos Rodríguez",
    lat: 19.4042,
    lon: -99.0888,
    bb: [15, 74, 485, 425.9],
  },
  {
    id: "miami-1",
    name: "Miami International Autodrome",
    lat: 25.9581,
    lon: -80.2389,
    bb: [35, 172, 465, 328],
  },
  {
    id: "monaco-6",
    name: "Circuit de Monaco",
    lat: 43.7347,
    lon: 7.4206,
    bb: [71.1, 14.6, 429.1, 485.4],
  },
  {
    id: "monsanto-1",
    name: "Circuito de Monsanto",
    lat: 38.7197,
    lon: -9.2031,
    bb: [35, 85.4, 465, 414.8],
  },
  {
    id: "mont-tremblant-1",
    name: "Circuit Mont-Tremblant",
    lat: 46.1877,
    lon: -74.6099,
    bb: [35, 106.4, 465, 393.6],
  },
  {
    id: "montjuic-1",
    name: "Circuito de Montjuïc",
    lat: 41.3664,
    lon: 2.1517,
    bb: [34.9, 33.6, 465, 466.6],
  },
  {
    id: "montreal-6",
    name: "Circuit Gilles Villeneuve",
    lat: 45.5006,
    lon: -73.5225,
    bb: [173.8, 15.1, 326.2, 484.9],
  },
  {
    id: "monza-7",
    name: "Autodromo Nazionale Monza",
    lat: 45.6206,
    lon: 9.2894,
    bb: [114.3, 15.6, 385.6, 484.6],
  },
  {
    id: "mosport-1",
    name: "Canadian Tire Motorsport Park",
    lat: 44.05,
    lon: -78.6778,
    bb: [34.9, 36.6, 465.1, 463.4],
  },
  {
    id: "mugello-1",
    name: "Autodromo Internazionale del Mugello",
    lat: 43.9975,
    lon: 11.3719,
    bb: [30.2, 118.3, 470.1, 381.8],
  },
  {
    id: "nivelles-1",
    name: "Nivelles-Baulers",
    lat: 50.6211,
    lon: 4.3269,
    bb: [34.7, 121.9, 465.1, 378.1],
  },
  {
    id: "nurburgring-4",
    name: "Nürburgring",
    lat: 50.3356,
    lon: 6.9475,
    bb: [76.1, 15, 423.8, 485],
  },
  {
    id: "paul-ricard-3",
    name: "Circuit Paul Ricard",
    lat: 43.2506,
    lon: 5.7917,
    bb: [15.2, 101.4, 485, 398.6],
  },
  {
    id: "pedralbes-1",
    name: "Pedralbes Circuit",
    lat: 41.3903,
    lon: 2.1167,
    bb: [35, 130.9, 465, 369.1],
  },
  {
    id: "pescara-1",
    name: "Pescara Circuit",
    lat: 42.475,
    lon: 14.1508,
    bb: [35, 73.8, 465.1, 426.2],
  },
  {
    id: "phoenix-2",
    name: "Phoenix Street Circuit",
    lat: 33.4479,
    lon: -112.0746,
    bb: [15, 168.5, 484.9, 331.5],
  },
  {
    id: "portimao-1",
    name: "Algarve International Circuit",
    lat: 37.2219,
    lon: -8.6294,
    bb: [35, 121.7, 465, 378.4],
  },
  {
    id: "porto-1",
    name: "Circuito da Boavista",
    lat: 41.1705,
    lon: -8.6732,
    bb: [30.1, 102.2, 470.1, 398],
  },
  {
    id: "reims-2",
    name: "Reims-Gueux",
    lat: 49.2541,
    lon: 3.9306,
    bb: [14.9, 96.2, 485, 403.8],
  },
  {
    id: "riverside-1",
    name: "Riverside International Raceway",
    lat: 33.937,
    lon: -117.2726,
    bb: [35, 29.3, 465, 470.8],
  },
  {
    id: "rouen-2",
    name: "Rouen-Les-Essarts",
    lat: 49.3306,
    lon: 1.0046,
    bb: [116.6, 14.9, 383.2, 485.1],
  },
  {
    id: "sebring-1",
    name: "Sebring International Raceway",
    lat: 27.4547,
    lon: -81.3483,
    bb: [35, 33.9, 465, 466.1],
  },
  {
    id: "sepang-1",
    name: "Sepang International Circuit",
    lat: 2.7606,
    lon: 101.7375,
    bb: [35, 58.5, 465, 441.5],
  },
  {
    id: "shanghai-1",
    name: "Shanghai International Circuit",
    lat: 31.3389,
    lon: 121.2197,
    bb: [34.9, 49.8, 465, 450.2],
  },
  {
    id: "silverstone-8",
    name: "Silverstone Circuit",
    lat: 52.0786,
    lon: -1.0169,
    bb: [107.2, 15, 392.8, 485.1],
  },
  {
    id: "sochi-1",
    name: "Sochi Autodrom",
    lat: 43.4103,
    lon: 39.9683,
    bb: [35, 32.9, 465, 467.1],
  },
  {
    id: "spa-francorchamps-4",
    name: "Circuit de Spa-Francorchamps",
    lat: 50.4372,
    lon: 5.9714,
    bb: [104.1, 15, 395.8, 484.8],
  },
  {
    id: "spielberg-3",
    name: "Red Bull Ring",
    lat: 47.2197,
    lon: 14.7647,
    bb: [35, 30.8, 465, 469.2],
  },
  {
    id: "suzuka-2",
    name: "Suzuka Circuit",
    lat: 34.8431,
    lon: 136.5406,
    bb: [14.9, 121, 484.9, 379],
  },
  {
    id: "valencia-1",
    name: "Valencia Street Circuit",
    lat: 39.4588,
    lon: -0.3256,
    bb: [35, 20.6, 465, 479.4],
  },
  {
    id: "watkins-glen-3",
    name: "Watkins Glen International",
    lat: 42.3369,
    lon: -76.9272,
    bb: [151.8, 15, 348.2, 485],
  },
  {
    id: "yas-marina-2",
    name: "Yas Marina Circuit",
    lat: 24.4672,
    lon: 54.6031,
    bb: [137.7, 15, 362.3, 484.9],
  },
  {
    id: "yeongam-1",
    name: "Korea International Circuit",
    lat: 34.7333,
    lon: 126.4167,
    bb: [35, 45, 465, 455],
  },
  {
    id: "zandvoort-5",
    name: "Circuit Park Zandvoort",
    lat: 52.3888,
    lon: 4.5409,
    bb: [14.8, 47.1, 485.1, 452.9],
  },
  {
    id: "zeltweg-1",
    name: "Zeltweg",
    lat: 47.2022,
    lon: 14.7422,
    bb: [35, 104.9, 465, 395.1],
  },
  {
    id: "zolder-2",
    name: "Circuit Zolder",
    lat: 50.9889,
    lon: 5.2556,
    bb: [47.6, 15.1, 452.3, 485],
  },
];
const a0_0x20d390 = {
  mercedes: "#27F4D2",
  ferrari: "#E8002D",
  mclaren: "#FF8000",
  red_bull: "#3671C6",
  redbull: "#3671C6",
  rb: "#6692FF",
  alpine: "#0093CC",
  haas: "#B6BABD",
  audi: "#52E252",
  sauber: "#52E252",
  williams: "#64C4FF",
  aston_martin: "#229971",
  cadillac: "#C9C9D1",
};
const a0_0x18b7c4 = [
  [/red bull/i, "#3671C6"],
  [/racing bulls|^rb\b|alphatauri|toro rosso/i, "#6692FF"],
  [/ferrari/i, "#E8002D"],
  [/mercedes/i, "#27F4D2"],
  [/mclaren/i, "#FF8000"],
  [/alpine|renault/i, "#0093CC"],
  [/williams/i, "#64C4FF"],
  [/aston/i, "#229971"],
  [/haas/i, "#B6BABD"],
  [/audi|sauber/i, "#52E252"],
  [/cadillac/i, "#C9C9D1"],
  [/force india|racing point|jordan/i, "#F596C8"],
  [/brawn|honda|bar /i, "#CCCCCC"],
  [/lotus/i, "#FFB800"],
  [/benetton/i, "#2E8B57"],
  [/toyota/i, "#CC0000"],
  [/bmw/i, "#1E5BC6"],
  [/jaguar/i, "#2E7D32"],
  [/stewart/i, "#C0C0C0"],
];
const a0_0x3bdf6e = [
  [
    /red bull/i,
    {
      main: "#1c3f94",
      sec: "#e10600",
      acc: "#ffd60a",
    },
  ],
  [
    /racing bulls|^rb\b|alphatauri|toro rosso/i,
    {
      main: "#6692ff",
      sec: "#ffffff",
      acc: "#0a1a4a",
    },
  ],
  [
    /mercedes/i,
    {
      main: "#21d4b8",
      sec: "#ffffff",
      acc: "#0b0b10",
    },
  ],
  [
    /ferrari/i,
    {
      main: "#e10600",
      sec: "#ffd60a",
      acc: "#111111",
    },
  ],
  [
    /mclaren/i,
    {
      main: "#ff8000",
      sec: "#1e41ff",
      acc: "#ffffff",
    },
  ],
  [
    /alpine|renault/i,
    {
      main: "#0093cc",
      sec: "#ff87bc",
      acc: "#ffffff",
    },
  ],
  [
    /williams/i,
    {
      main: "#64c4ff",
      sec: "#0b1f4a",
      acc: "#ffffff",
    },
  ],
  [
    /aston/i,
    {
      main: "#229971",
      sec: "#cfe6dc",
      acc: "#0c3b2e",
    },
  ],
  [
    /haas/i,
    {
      main: "#c9ccd0",
      sec: "#e10600",
      acc: "#111111",
    },
  ],
  [
    /audi|sauber/i,
    {
      main: "#16161c",
      sec: "#52e252",
      acc: "#ffffff",
    },
  ],
  [
    /cadillac/i,
    {
      main: "#1a1a1a",
      sec: "#c9c9d1",
      acc: "#e10600",
    },
  ],
];
const a0_0x474f9b = {
  ferrari: "Scuderia Ferrari",
  mclaren: "McLaren F1 Team",
  mercedes: "Mercedes-AMG Petronas F1 Team",
  "red bull": "Red Bull Racing",
  alphatauri: "Scuderia AlphaTauri",
  "toro rosso": "Scuderia Toro Rosso",
  "rb f1 team": "Racing Bulls",
  "visa cash app rb f1 team": "Racing Bulls",
  "racing bulls": "Racing Bulls",
  "alpine f1 team": "Alpine F1 Team",
  alpine: "Alpine F1 Team",
  renault: "Renault F1 Team",
  williams: "Williams Racing",
  "aston martin": "Aston Martin Aramco F1 Team",
  "racing point": "BWT Racing Point F1 Team",
  "force india": "Sahara Force India F1 Team",
  "haas f1 team": "Haas F1 Team",
  sauber: "Stake F1 Team Kick Sauber",
  "kick sauber": "Stake F1 Team Kick Sauber",
  "alfa romeo": "Alfa Romeo F1 Team Stake",
  audi: "Audi F1 Team",
  cadillac: "Cadillac F1 Team",
  "bmw sauber": "BMW Sauber F1 Team",
  toyota: "Panasonic Toyota Racing",
  honda: "Honda F1 Team",
  brawn: "Brawn GP",
  bar: "British American Racing",
  jordan: "Jordan Grand Prix",
  minardi: "Minardi Team",
  benetton: "Benetton Formula",
  tyrrell: "Tyrrell Racing Organisation",
  stewart: "Stewart Grand Prix",
  jaguar: "Jaguar Racing",
  "super aguri": "Super Aguri F1 Team",
  spyker: "Spyker F1 Team",
  midland: "Midland F1 Racing",
  "lotus f1": "Lotus F1 Team",
  "team lotus": "Team Lotus",
  lotus: "Lotus",
  caterham: "Caterham F1 Team",
  marussia: "Marussia F1 Team",
  "manor marussia": "Manor Marussia F1 Team",
  hrt: "HRT F1 Team",
  virgin: "Virgin Racing",
  ligier: "Ligier",
  prost: "Prost Grand Prix",
  arrows: "Arrows Grand Prix",
  footwork: "Footwork Arrows",
  brm: "BRM",
  cooper: "Cooper Car Company",
  maserati: "Officine Alberto Maserati",
  vanwall: "Vanwall",
};
const a0_0x2ac334 = {
  Australia: "🇦🇺",
  China: "🇨🇳",
  Japan: "🇯🇵",
  Bahrain: "🇧🇭",
  "Saudi Arabia": "🇸🇦",
  USA: "🇺🇸",
  Italy: "🇮🇹",
  Monaco: "🇲🇨",
  Spain: "🇪🇸",
  Canada: "🇨🇦",
  Austria: "🇦🇹",
  UK: "🇬🇧",
  Hungary: "🇭🇺",
  Belgium: "🇧🇪",
  Netherlands: "🇳🇱",
  Azerbaijan: "🇦🇿",
  Singapore: "🇸🇬",
  Mexico: "🇲🇽",
  Brazil: "🇧🇷",
  UAE: "🇦🇪",
  Qatar: "🇶🇦",
  Argentina: "🇦🇷",
  France: "🇫🇷",
  Germany: "🇩🇪",
  Portugal: "🇵🇹",
  Sweden: "🇸🇪",
  Turkey: "🇹🇷",
  India: "🇮🇳",
  Korea: "🇰🇷",
  "South Africa": "🇿🇦",
  Malaysia: "🇲🇾",
  Russia: "🇷🇺",
  Morocco: "🇲🇦",
  Vietnam: "🇻🇳",
  Indonesia: "🇮🇩",
  Switzerland: "🇨🇭",
};
const a0_0x3f8a65 = {
  Australia: "Australia",
  Austria: "Austria",
  Azerbaijan: "Azerbaiyán",
  Bahrain: "Baréin",
  Belgium: "Bélgica",
  Brazil: "Brasil",
  Canada: "Canadá",
  China: "China",
  Spain: "España",
  UK: "Reino Unido",
  USA: "Estados Unidos",
  UAE: "Emiratos Árabes Unidos",
  Italy: "Italia",
  Japan: "Japón",
  Mexico: "México",
  Monaco: "Mónaco",
  Netherlands: "Países Bajos",
  Hungary: "Hungría",
  Qatar: "Catar",
  "Saudi Arabia": "Arabia Saudí",
  Singapore: "Singapur",
  Russia: "Rusia",
  Portugal: "Portugal",
  Turkey: "Turquía",
  Argentina: "Argentina",
  Germany: "Alemania",
  France: "Francia",
  Sweden: "Suecia",
  Switzerland: "Suiza",
  Korea: "Corea del Sur",
  "South Africa": "Sudáfrica",
  Malaysia: "Malasia",
  India: "India",
  Indonesia: "Indonesia",
  Morocco: "Marruecos",
  Vietnam: "Vietnam",
  Ireland: "Irlanda",
  "New Zealand": "Nueva Zelanda",
  "Czech Republic": "República Checa",
  "Hong Kong": "Hong Kong",
  Thailand: "Tailandia",
  Chile: "Chile",
  Peru: "Perú",
  Uruguay: "Uruguay",
  Colombia: "Colombia",
  Denmark: "Dinamarca",
  Poland: "Polonia",
  Rhodesia: "Rodesia",
  Ukraine: "Ucrania",
  Pakistan: "Pakistán",
  Greece: "Grecia",
  Finland: "Finlandia",
  Yugoslavia: "Yugoslavia",
};
const a0_0x5db53a = {
  British: "británico",
  German: "alemán",
  French: "francés",
  Argentine: "argentino",
  Argentinian: "argentino",
  Austrian: "austríaco",
  Brazilian: "brasileño",
  Dutch: "neerlandés",
  Italian: "italiano",
  Finnish: "finlandés",
  Spanish: "español",
  Australian: "australiano",
  Mexican: "mexicano",
  Canadian: "canadiense",
  Monegasque: "monegasco",
  Polish: "polaco",
  Danish: "danés",
  Swedish: "sueco",
  Swiss: "suizo",
  Belgian: "belga",
  Japanese: "japonés",
  Chinese: "chino",
  Thai: "tailandés",
  Irish: "irlandés",
  "New Zealander": "neozelandés",
  Venezuelan: "venezolano",
  Hungarian: "húngaro",
  Russian: "ruso",
  American: "estadounidense",
  "South African": "sudafricano",
  Indian: "indio",
  Colombian: "colombiano",
  Uruguayan: "uruguayo",
  Rhodesian: "rodesiano",
  Czech: "checo",
  Portuguese: "portugués",
  Indonesian: "indonesio",
  Malaysian: "malasio",
  Estonian: "estonio",
  Chilean: "chileno",
  Peruvian: "peruano",
  Israeli: "israelí",
  Ukrainian: "ucraniano",
  Liechtensteiner: "liechtensteiniano",
  Hong_Kong: "hongkonés",
};
const a0_0x5db6d2 = (_0x556f5b) => a0_0x3f8a65[_0x556f5b] || _0x556f5b || "—";
const a0_0x5aec18 = (_0x33a77f) => {
  const _0x4da0d2 = a0_0x5db53a[_0x33a77f] || _0x33a77f || "";
  if (_0x4da0d2) {
    return _0x4da0d2.charAt(0).toUpperCase() + _0x4da0d2.slice(1);
  } else {
    return "";
  }
};
const a0_0x46cabb = (_0x441b5a) => {
  const _0x27360f = String(_0x441b5a || "")
    .trim()
    .toLowerCase();
  return a0_0x474f9b[_0x27360f] || _0x441b5a || "—";
};
const a0_0x3d89a0 = (_0x56fdb1) =>
  String(_0x56fdb1 || "").replace(/Grand Prix/g, "Gran Premio");
const a0_0x24f835 = {
  FirstPractice: "Práctica 1",
  SecondPractice: "Práctica 2",
  ThirdPractice: "Práctica 3",
  SprintQualifying: "Clasificación Sprint",
  Sprint: "Carrera Sprint",
  Qualifying: "Clasificación",
};
const a0_0x1f4a49 = {
  montmelo: "barcelona",
  barcelonacatalunya: "barcelona",
  catalunya: "barcelona",
  circuitdebarcelonacatalunya: "barcelona",
  spielberg: "austria",
  redbullring: "austria",
  spafrancorchamps: "spa",
  circuitdespafrancorchamps: "spa",
  budapest: "hungaroring",
  sopaulo: "saopaulo",
  interlagos: "saopaulo",
  autodromojosecarlospace: "saopaulo",
  yasisland: "abudhabi",
  yasmarina: "abudhabi",
  yasmarinacircuit: "abudhabi",
  marinabay: "singapore",
  marinabaystreetcircuit: "singapore",
  montecarlo: "monaco",
  montecarlocircuit: "monaco",
  mexicocity: "mexico",
  hermanosrodriguez: "mexico",
  autodromohermanosrodriguez: "mexico",
  miamigardens: "miami",
  miamiinternationalautodrome: "miami",
  sakhir: "bahrain",
  bahraininternationalcircuit: "bahrain",
  madring: "madrid",
  ifema: "madrid",
  lusail: "qatar",
  losailinternationalcircuit: "qatar",
  gillesvilleneuve: "montreal",
  circuitgillesvilleneuve: "montreal",
  sepanginternationalcircuit: "sepang",
};
const a0_0x484245 = {
  source: "api",
  calendar: [],
  drivers: [],
  teams: [],
  champs: [],
  champsDone: false,
  sim: {},
  details: {},
};
const a0_0x4722c6 = {
  tab: "vig",
  hist: null,
  season: {},
  drv: null,
  drvPromise: null,
  drvProg: null,
  dteams: {},
};
let a0_0x2fe5e0 = "act";
let a0_0x47fc09 = "";
let a0_0x522712 = null;
let a0_0x2fde53 = "act";
let a0_0x25118d = "";
const a0_0x3f0359 = (_0x37c03c) => document.querySelector(_0x37c03c);
const a0_0x4046d8 = (_0x1b535d) =>
  String(_0x1b535d ?? "").replace(
    /[&<>"']/g,
    (_0x4881f3) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[_0x4881f3],
  );
const a0_0x308c9d = (_0x1d28cc) => String(_0x1d28cc).split(" ").pop();
const a0_0x572664 = (_0x30d4e8) =>
  new Date(_0x30d4e8 + "T00:00:00").toLocaleDateString("es", {
    day: "numeric",
    month: "short",
  });
const a0_0x34ea12 = (_0x3f53fd) =>
  new Date(_0x3f53fd + "T00:00:00").toLocaleDateString("es", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
const a0_0x505882 = (_0x10bd43) =>
  _0x10bd43.givenName + " " + _0x10bd43.familyName;
const a0_0x460271 = () =>
  a0_0x484245.calendar.find((_0x1bae50) => !_0x1bae50.done) || null;
const a0_0x140a0c = (_0x27aa00) => {
  const _0x460632 = a0_0x484245.teams.find(
    (_0x10b923) => _0x10b923.name === _0x27aa00,
  );
  if (_0x460632) {
    return _0x460632.color;
  } else {
    return "#888";
  }
};
const a0_0x126f94 = (_0x1c791b) => {
  const _0x34282a = a0_0x484245.teams.find(
    (_0x25efbd) => _0x25efbd.name === _0x1c791b,
  );
  if (_0x34282a) {
    return _0x34282a.color;
  }
  const _0x17776f = a0_0x18b7c4.find(([_0x1c618e]) =>
    _0x1c618e.test(_0x1c791b || ""),
  );
  if (_0x17776f) {
    return _0x17776f[1];
  } else {
    return "#e10600";
  }
};
const a0_0x2c57c6 = (_0xd9795e) =>
  String(_0xd9795e ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
const a0_0x3fa87d = (_0x458227) => {
  const _0x5263fa = String(_0x458227).split(":");
  if (_0x5263fa.length === 2) {
    return +_0x5263fa[0] * 60 + +_0x5263fa[1];
  } else {
    return +_0x5263fa[0];
  }
};
const a0_0x223330 = (_0x49e7ab, _0x120d67) =>
  '<div class="line"><span>' +
  a0_0x4046d8(_0x49e7ab) +
  "</span><strong>" +
  a0_0x4046d8(_0x120d67) +
  "</strong></div>";
const a0_0x5164ae = (_0x993dcc) =>
  new Promise((_0x5b49bb) => setTimeout(_0x5b49bb, _0x993dcc));
const a0_0x15728b = (_0x5a26ce) => {
  try {
    return JSON.parse(localStorage.getItem(_0x5a26ce));
  } catch {
    return null;
  }
};
const a0_0x2937c8 = (_0x271673, _0xba2c09) => {
  try {
    localStorage.setItem(_0x271673, JSON.stringify(_0xba2c09));
  } catch {}
};
const a0_0x4d831d = (_0x30335b) =>
  /^(Finished|\+\d+ Laps?)$/.test(_0x30335b || "");
const a0_0x30f355 = (_0x4f1fee) =>
  _0x4f1fee ? String(_0x4f1fee).slice(0, 4) : "—";
const a0_0x43ae7f = () =>
  a0_0x484245.calendar.filter((_0x3ef49c) => _0x3ef49c.done).length;
function a0_0x4309fe(_0x1effb2, _0x22f9ab) {
  if (!_0x1effb2 || !_0x22f9ab) {
    return null;
  }
  const _0x26b65c = new Date(String(_0x1effb2).slice(0, 10) + "T00:00:00");
  const _0x48b216 =
    _0x22f9ab instanceof Date
      ? _0x22f9ab
      : new Date(String(_0x22f9ab).slice(0, 10) + "T00:00:00");
  if (isNaN(_0x26b65c) || isNaN(_0x48b216)) {
    return null;
  }
  let _0x505f48 = _0x48b216.getFullYear() - _0x26b65c.getFullYear();
  const _0xd166e9 = _0x48b216.getMonth() - _0x26b65c.getMonth();
  if (
    _0xd166e9 < 0 ||
    (_0xd166e9 === 0 && _0x48b216.getDate() < _0x26b65c.getDate())
  ) {
    _0x505f48--;
  }
  return _0x505f48;
}
function a0_0x52322c() {
  const _0x3cf28d = document.querySelector("footer");
  const _0x2d2123 =
    "<footer><p>fOnefan • Plataforma de información sobre Fórmula 1</p></footer>";
  if (_0x3cf28d) {
    _0x3cf28d.outerHTML = _0x2d2123;
  } else {
    document.body.insertAdjacentHTML("beforeend", _0x2d2123);
  }
}
function a0_0x4f2a1c() {
  const _0x18133d = a0_0x3f0359("#v-standings");
  const _0x28f3fa = a0_0x3f0359("#v-calendar");
  if (!_0x18133d || !_0x28f3fa || a0_0x3f0359("#champTabs")) {
    return;
  }
  const _0x26f2bf = _0x18133d.querySelector(".sec-head");
  if (_0x26f2bf) {
    const _0x5e615e = _0x26f2bf.querySelector("h2");
    const _0xb264e1 = _0x26f2bf.querySelector("p");
    if (_0x5e615e) {
      _0x5e615e.innerHTML = "Campeonato & Calendario";
    }
    if (_0xb264e1) {
      _0xb264e1.innerHTML =
        "Posiciones actuales del mundial y cronograma de la temporada 2026.";
    }
  }
  const _0x4032fa = document.createElement("div");
  _0x4032fa.id = "champ-pos";
  Array.from(_0x18133d.children).forEach((_0x10bc3c) => {
    if (_0x10bc3c !== _0x26f2bf) {
      _0x4032fa.appendChild(_0x10bc3c);
    }
  });
  const _0x4ef530 = document.createElement("div");
  _0x4ef530.id = "champ-cal";
  _0x4ef530.style.display = "none";
  Array.from(_0x28f3fa.children).forEach((_0x3a413f) => {
    if (!_0x3a413f.classList.contains("sec-head")) {
      _0x4ef530.appendChild(_0x3a413f);
    }
  });
  const _0x56feb2 =
    '\n    <div class="chips" id="champTabs" style="margin-bottom: 24px;">\n      <button class="chip on" data-champ-tab="pos">Tabla de Posiciones</button>\n      <button class="chip" data-champ-tab="cal">Calendario de Carreras</button>\n    </div>\n  ';
  if (_0x26f2bf) {
    _0x26f2bf.insertAdjacentHTML("afterend", _0x56feb2);
  } else {
    _0x18133d.insertAdjacentHTML("afterbegin", _0x56feb2);
  }
  _0x18133d.appendChild(_0x4032fa);
  _0x18133d.appendChild(_0x4ef530);
  _0x28f3fa.remove();
}
const a0_0x5f0171 = (_0x5a15c5) => {
  const _0x4b49a2 = new Date(_0x5a15c5).toLocaleString("es", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: a0_0x935fb5,
  });
  return _0x4b49a2.charAt(0).toUpperCase() + _0x4b49a2.slice(1);
};
const a0_0x2f84a1 = (_0x2cb17b) =>
  new Date(_0x2cb17b).toLocaleTimeString("es", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: a0_0x935fb5,
  });
const a0_0x48e59f = (_0x4d405a) => a0_0x2c57c6(a0_0x308c9d(_0x4d405a || ""));
function a0_0x740b5a(_0x136d29, _0x2fb0c2, _0x6e2958, _0x229f78 = "") {
  const _0xb9b4d0 = a0_0x48e59f(_0x136d29);
  const _0xf888dc = a0_0x4e9bf7[_0xb9b4d0];
  if (_0xf888dc) {
    const _0x401fe6 = _0x229f78 === "big" ? "camera-controls" : "";
    return (
      '<model-viewer class="helmet-3d ' +
      _0x229f78 +
      '" src="' +
      a0_0x4065cf +
      _0xf888dc +
      '" alt="Casco 3D ' +
      a0_0x4046d8(_0x136d29) +
      '"\n      auto-rotate ' +
      _0x401fe6 +
      ' interaction-prompt="none" shadow-intensity="0" exposure="1.05"></model-viewer>'
    );
  }
  const _0x132eb0 = a0_0x519b69[_0xb9b4d0];
  if (_0x132eb0) {
    return (
      '<img class="helmet-img ' +
      _0x229f78 +
      '" src="' +
      a0_0x219017 +
      _0x132eb0 +
      '" alt="Casco ' +
      a0_0x4046d8(_0x136d29) +
      '"\n      loading="lazy" decoding="async" data-id="' +
      a0_0x4046d8(_0x6e2958) +
      '" data-team="' +
      a0_0x4046d8(_0x2fb0c2) +
      '" data-cls="' +
      _0x229f78 +
      '"\n      onerror="__helmetErr(this)">'
    );
  }
  return a0_0x3da32d(_0x6e2958, _0x2fb0c2, _0x229f78);
}
window.__helmetErr = (_0x1060bf) => {
  _0x1060bf.outerHTML = a0_0x3da32d(
    _0x1060bf.dataset.id,
    _0x1060bf.dataset.team,
    _0x1060bf.dataset.cls,
  );
};
function a0_0x3da32d(_0x201787, _0x193aa2, _0x3368a6 = "") {
  const _0x28e587 = a0_0x5785a1(_0x193aa2);
  const _0x510a6e =
    "h" + String(_0x201787).replace(/[^a-z0-9]/gi, "") + (_0x3368a6 || "sm");
  const _0x4fea03 = a0_0x2cd835(_0x28e587.main, 0.35);
  const _0x2a4834 = a0_0x2cd835(_0x28e587.main, -0.45);
  return (
    '<svg class="helmet ' +
    _0x3368a6 +
    '" viewBox="0 0 200 180" aria-hidden="true">\n    <defs>\n      <linearGradient id="' +
    _0x510a6e +
    '" x1="0" y1="0" x2="0" y2="1">\n        <stop offset="0" stop-color="' +
    _0x4fea03 +
    '"/>\n        <stop offset=".55" stop-color="' +
    _0x28e587.main +
    '"/>\n        <stop offset="1" stop-color="' +
    _0x2a4834 +
    '"/>\n      </linearGradient>\n      <linearGradient id="' +
    _0x510a6e +
    'v" x1="0" y1="0" x2="1" y2="1">\n        <stop offset="0" stop-color="#34497a"/>\n        <stop offset=".55" stop-color="#0a0f1f"/>\n        <stop offset="1" stop-color="#1d1233"/>\n      </linearGradient>\n    </defs>\n    <path d="M26 118C22 62 60 20 112 20C152 20 178 52 180 96L182 130C182 152 168 162 146 162L72 162C46 162 28 146 26 118Z" fill="url(#' +
    _0x510a6e +
    ')"/>\n    <path d="M34 84C54 52 92 36 132 40C154 42 170 52 178 66L176 74C164 60 146 56 128 56C94 56 62 70 40 98Z" fill="' +
    _0x28e587.sec +
    '"/>\n    <path d="M28 132C60 150 132 156 182 134L182 142C134 164 58 160 30 142Z" fill="' +
    _0x28e587.acc +
    '"/>\n    <path d="M84 88C84 76 96 70 116 70L166 70C180 70 184 82 182 98L178 118C176 128 170 132 158 132L102 132C90 132 84 124 84 112Z" fill="url(#' +
    _0x510a6e +
    'v)"/>\n    <path d="M96 84L150 78L160 96L104 104Z" fill="rgba(150,190,255,.3)"/>\n    <rect x="150" y="142" width="24" height="9" rx="4.5" fill="#0b0b10" opacity=".75"/>\n    <path d="M50 58C66 40 96 30 120 32" fill="none" stroke="rgba(255,255,255,.45)" stroke-width="7" stroke-linecap="round"/>\n  </svg>'
  );
}
function a0_0x5785a1(_0x109d88) {
  const _0x2eb211 = a0_0x3bdf6e.find(([_0x1c89ca]) =>
    _0x1c89ca.test(_0x109d88 || ""),
  );
  if (_0x2eb211) {
    return _0x2eb211[1];
  } else {
    return {
      main: a0_0x126f94(_0x109d88),
      sec: "#ffffff",
      acc: "#111111",
    };
  }
}
const a0_0x2cd835 = (_0x3245c0, _0x2c3d94) => {
  let _0x1a7c56 = _0x3245c0.replace("#", "");
  if (_0x1a7c56.length === 3) {
    _0x1a7c56 = _0x1a7c56
      .split("")
      .map((_0x298a7a) => _0x298a7a + _0x298a7a)
      .join("");
  }
  const _0x43c12d = (_0x7f0904) =>
    Math.max(
      0,
      Math.min(
        255,
        Math.round(
          _0x2c3d94 < 0
            ? _0x7f0904 * (1 + _0x2c3d94)
            : _0x7f0904 + (255 - _0x7f0904) * _0x2c3d94,
        ),
      ),
    );
  return (
    "#" +
    [0, 2, 4]
      .map((_0x10b661) =>
        _0x43c12d(parseInt(_0x1a7c56.substr(_0x10b661, 2), 16))
          .toString(16)
          .padStart(2, "0"),
      )
      .join("")
  );
};
async function a0_0x182c22(_0x2788f4, _0x3a50a6 = 3) {
  for (let _0x384ae2 = 0; _0x384ae2 < _0x3a50a6; _0x384ae2++) {
    const _0x4d59fb = await fetch(a0_0x532085 + _0x2788f4);
    if (_0x4d59fb.ok) {
      return _0x4d59fb.json();
    }
    if (_0x4d59fb.status !== 429 || _0x384ae2 === _0x3a50a6 - 1) {
      throw new Error("HTTP " + _0x4d59fb.status + " en " + _0x2788f4);
    }
    await a0_0x5164ae((_0x384ae2 + 1) * 1500);
  }
}
async function a0_0xff8269(_0x2b7c55) {
  const _0x5521b9 = {};
  let _0x574ed7 = 0;
  let _0x4cac50 = Infinity;
  while (_0x574ed7 < _0x4cac50) {
    const _0x4f8fae = _0x2b7c55.includes("?") ? "&" : "?";
    const _0x1610b7 = await a0_0x182c22(
      "" + _0x2b7c55 + _0x4f8fae + "limit=100&offset=" + _0x574ed7,
    );
    _0x4cac50 = +_0x1610b7.MRData.total || 0;
    let _0x7ca34e = 0;
    (_0x1610b7.MRData.RaceTable.Races || []).forEach((_0x46e4fc) => {
      const _0x4b8619 = +_0x46e4fc.round;
      _0x5521b9[_0x4b8619] ??= {
        Results: [],
      };
      const _0xea71ff = _0x46e4fc.Results || [];
      _0x7ca34e += _0xea71ff.length;
      _0x5521b9[_0x4b8619].Results.push(..._0xea71ff);
    });
    if (!_0x7ca34e) {
      break;
    }
    _0x574ed7 += 100;
  }
  return _0x5521b9;
}
function a0_0xa6b7b5(_0x272ea2) {
  return _0x272ea2.MRData.RaceTable.Races.map((_0x5d0cbf) => {
    const _0x7d0b08 = CALENDAR.find(
      (_0x1dd437) => _0x1dd437.r === +_0x5d0cbf.round,
    );
    const _0x50e049 = _0x5d0cbf.time
      ? _0x5d0cbf.date + "T" + _0x5d0cbf.time
      : _0x5d0cbf.date + "T23:59:59";
    const _0x7258b2 = _0x5d0cbf.Circuit.Location;
    const _0x24b393 = [];
    for (const _0xfc3414 of Object.keys(a0_0x24f835)) {
      const _0xe003ef = _0x5d0cbf[_0xfc3414];
      if (!_0xe003ef?.date) {
        continue;
      }
      _0x24b393.push({
        name: a0_0x24f835[_0xfc3414],
        when: _0xe003ef.time
          ? _0xe003ef.date + "T" + _0xe003ef.time
          : _0xe003ef.date + "T12:00:00Z",
        tbc: !_0xe003ef.time,
      });
    }
    _0x24b393.push({
      name: "Carrera",
      when: _0x50e049,
      tbc: !_0x5d0cbf.time,
    });
    _0x24b393.sort(
      (_0x202b36, _0x25b9ab) =>
        new Date(_0x202b36.when) - new Date(_0x25b9ab.when),
    );
    const _0x10cab8 =
      _0x24b393.length > 0
        ? _0x24b393[0].when
        : _0x7d0b08?.start
          ? _0x7d0b08.start + "T00:00:00"
          : _0x50e049;
    return {
      round: +_0x5d0cbf.round,
      id: "r" + _0x5d0cbf.round,
      name: _0x7d0b08?.name || a0_0x3d89a0(_0x5d0cbf.raceName),
      dateLabel: _0x7d0b08?.date || a0_0x572664(_0x5d0cbf.date),
      start: _0x5d0cbf.date,
      when: _0x50e049,
      firstSessionWhen: _0x10cab8,
      sprint: !!_0x5d0cbf.Sprint,
      flag: a0_0x2ac334[_0x7258b2.country] || "🏁",
      circuit: _0x5d0cbf.Circuit.circuitName,
      circuitId: _0x5d0cbf.Circuit.circuitId,
      circuitUrl: _0x5d0cbf.Circuit.url,
      country: _0x7258b2.country,
      locality: _0x7258b2.locality,
      lat: +_0x7258b2.lat,
      lon: +_0x7258b2.long,
      place: _0x7258b2.locality + ", " + a0_0x5db6d2(_0x7258b2.country),
      sessions: _0x24b393,
      done: new Date(_0x50e049) < new Date(),
    };
  });
}
function a0_0x5b1eea(_0x2069c4) {
  const _0x48fa1c =
    _0x2069c4.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
  return _0x48fa1c
    .map((_0x18bec2) => ({
      id: _0x18bec2.Driver.driverId,
      name: a0_0x505882(_0x18bec2.Driver),
      nat: _0x18bec2.Driver.nationality || "",
      dob: _0x18bec2.Driver.dateOfBirth || "",
      code: _0x18bec2.Driver.code || "",
      num: _0x18bec2.Driver.permanentNumber || "",
      team: _0x18bec2.Constructors[0]?.constructorId || "",
      teamName: _0x18bec2.Constructors[0]?.name || "—",
      basePts: +_0x18bec2.points,
      pos: +_0x18bec2.position,
    }))
    .filter(
      (_0x3ae03e) =>
        !a0_0x1d40ce.has(_0x3ae03e.id) &&
        !a0_0x1d40ce.has(a0_0x2c57c6(a0_0x308c9d(_0x3ae03e.name))),
    );
}
function a0_0x32e553(_0x187bc4) {
  const _0x1e9d63 =
    _0x187bc4.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings ||
    [];
  return _0x1e9d63.map((_0x1dc573) => ({
    id: _0x1dc573.Constructor.constructorId,
    name: _0x1dc573.Constructor.name,
    color: a0_0x20d390[_0x1dc573.Constructor.constructorId] || "#888",
    pts: +_0x1dc573.points,
  }));
}
async function a0_0x510c39() {
  const [_0x11c51d, _0x3a7b24, _0x4701b3] = await Promise.all([
    a0_0x182c22("/" + a0_0x30d883 + ".json?limit=100"),
    a0_0x182c22("/" + a0_0x30d883 + "/driverStandings.json"),
    a0_0x182c22("/" + a0_0x30d883 + "/constructorStandings.json"),
  ]);
  a0_0x484245.calendar = a0_0xa6b7b5(_0x11c51d);
  a0_0x484245.drivers = a0_0x5b1eea(_0x3a7b24);
  a0_0x484245.teams = a0_0x32e553(_0x4701b3);
  if (!a0_0x484245.calendar.length || !a0_0x484245.drivers.length) {
    throw new Error("Respuesta vacía de la API");
  }
}
function a0_0x281961() {
  a0_0x484245.calendar = CALENDAR.map((_0x4c3d61) => ({
    round: _0x4c3d61.r,
    id: _0x4c3d61.id,
    name: _0x4c3d61.name,
    dateLabel: _0x4c3d61.date,
    start: _0x4c3d61.start,
    when: _0x4c3d61.start + "T23:59:59",
    firstSessionWhen: _0x4c3d61.start + "T00:00:00",
    sprint: _0x4c3d61.sprint,
    flag: _0x4c3d61.flag,
    circuit: "",
    circuitId: null,
    circuitUrl: null,
    country: "",
    locality: "",
    lat: null,
    lon: null,
    place: "",
    sessions: [],
    done: _0x4c3d61.done,
  }));
  a0_0x484245.drivers = DRIVERS.filter(
    (_0x56138e) => !a0_0x1d40ce.has(_0x56138e.id),
  ).map((_0xf20429) => ({
    id: _0xf20429.id,
    name: _0xf20429.name,
    nat: "",
    dob: "",
    code: "",
    num: "",
    team: _0xf20429.team,
    teamName:
      (TEAMS.find((_0x3d7967) => _0x3d7967.id === _0xf20429.team) || {}).name ||
      "—",
    basePts: _0xf20429.basePts,
    pos: 0,
  }));
  a0_0x484245.teams = TEAMS.map((_0x261620) => ({
    id: _0x261620.id,
    name: _0x261620.name,
    color: _0x261620.color,
    pts: DRIVERS.filter((_0x1c2573) => _0x1c2573.team === _0x261620.id).reduce(
      (_0x3ce049, _0x32ef1b) => _0x3ce049 + _0x32ef1b.basePts,
      0,
    ),
  }));
  a0_0x484245.source = "local";
}
async function a0_0x17a335(_0x425140) {
  const _0x822b0f = a0_0x1474b2 + _0x425140;
  if (_0x425140 < a0_0x30d883) {
    const _0x59614c = a0_0x15728b(_0x822b0f);
    if (_0x59614c) {
      return _0x59614c;
    }
  }
  const _0x383392 = await a0_0x182c22(
    "/" + _0x425140 + "/driverStandings.json",
  );
  const _0x365067 = _0x383392.MRData.StandingsTable.StandingsLists[0];
  if (!_0x365067 || !_0x365067.DriverStandings?.length) {
    return null;
  }
  const _0x3b4a69 = _0x365067.DriverStandings[0];
  const _0x53e8e2 = _0x3b4a69.Constructors || [];
  const _0x55d650 = {
    season: +_0x365067.season,
    driverId: _0x3b4a69.Driver.driverId,
    name: a0_0x505882(_0x3b4a69.Driver),
    nat: _0x3b4a69.Driver.nationality || "",
    teamId: _0x53e8e2[_0x53e8e2.length - 1]?.constructorId || "",
    team: _0x53e8e2.map((_0x943407) => _0x943407.name).join(" / ") || "—",
    points: +_0x3b4a69.points,
  };
  if (_0x425140 < a0_0x30d883) {
    a0_0x2937c8(_0x822b0f, _0x55d650);
  }
  return _0x55d650;
}
async function a0_0x521c52(_0x470bdf) {
  const _0x257c49 = [];
  for (let _0x31923f = a0_0x30d883 - 1; _0x31923f >= a0_0x3bd3fc; _0x31923f--) {
    _0x257c49.push(_0x31923f);
  }
  const _0x500f4f = [];
  const _0xf9ea58 = [];
  for (let _0x6d48cc = 0; _0x6d48cc < _0x257c49.length; _0x6d48cc += 3) {
    const _0x2056d2 = _0x257c49.slice(_0x6d48cc, _0x6d48cc + 3);
    const _0x3979d3 = await Promise.allSettled(_0x2056d2.map(a0_0x17a335));
    _0x3979d3.forEach((_0x26def4, _0x53707e) => {
      if (_0x26def4.status === "fulfilled" && _0x26def4.value) {
        _0x500f4f.push(_0x26def4.value);
      } else {
        _0xf9ea58.push(_0x2056d2[_0x53707e]);
      }
    });
    a0_0x484245.champs = [..._0x500f4f].sort(
      (_0x44cd53, _0x432204) => _0x432204.season - _0x44cd53.season,
    );
    _0x470bdf?.();
    await a0_0x5164ae(250);
  }
  for (const _0xe962dc of _0xf9ea58.splice(0)) {
    try {
      const _0x5c3579 = await a0_0x17a335(_0xe962dc);
      if (_0x5c3579) {
        _0x500f4f.push(_0x5c3579);
      }
    } catch (_0x1fc582) {
      console.warn("No se pudo cargar " + _0xe962dc, _0x1fc582);
    }
    await a0_0x5164ae(250);
  }
  a0_0x484245.champs = [..._0x500f4f].sort(
    (_0x3e50bd, _0x348bd2) => _0x348bd2.season - _0x3e50bd.season,
  );
  a0_0x484245.champsDone = true;
  _0x470bdf?.();
  return a0_0x484245.champs;
}
async function a0_0xd78dbe(_0x18ac42) {
  if (a0_0x4722c6.season[_0x18ac42]) {
    return a0_0x4722c6.season[_0x18ac42];
  }
  const [_0x46fa95, _0x3b14e4, _0x26920e, _0x1b84d5] = await Promise.all([
    a0_0x182c22("/" + _0x18ac42 + ".json?limit=100"),
    a0_0x182c22("/" + _0x18ac42 + "/driverStandings.json"),
    a0_0xff8269("/" + _0x18ac42 + "/results.json"),
    a0_0xff8269("/" + _0x18ac42 + "/sprint.json").catch(() => ({})),
  ]);
  const _0x32199d =
    _0x3b14e4.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
  const _0x339b93 = _0x32199d[0].Driver.driverId;
  const _0x83dda3 = _0x46fa95.MRData.RaceTable.Races.map((_0x58fde0) => {
    const _0x1ffa91 = +_0x58fde0.round;
    return {
      round: _0x1ffa91,
      name: _0x58fde0.raceName,
      date: _0x58fde0.date,
      country: _0x58fde0.Circuit.Location.country,
      race: _0x26920e[_0x1ffa91]?.Results || [],
      sprint: _0x1b84d5[_0x1ffa91]?.Results || [],
    };
  }).sort((_0x372b2e, _0x4ce817) => _0x372b2e.round - _0x4ce817.round);
  const _0xbee39a = _0x18ac42 >= 2019 && _0x18ac42 <= 2024 ? 26 : 25;
  const _0x3e90dc = _0x18ac42 >= 2023 ? 8 : _0x18ac42 >= 2021 ? 3 : 0;
  const _0x44cf78 = (_0x34c201) =>
    _0x83dda3
      .slice(_0x34c201 + 1)
      .reduce(
        (_0x38bd4a, _0x7822cb) =>
          _0x38bd4a + _0xbee39a + (_0x7822cb.sprint.length ? _0x3e90dc : 0),
        0,
      );
  const _0x1615b5 = {};
  let _0x5ad6cf = -1;
  _0x83dda3.forEach((_0xa3cdec, _0x499bc8) => {
    _0xa3cdec.race.forEach((_0x43d4e2) => {
      _0x1615b5[_0x43d4e2.Driver.driverId] =
        (_0x1615b5[_0x43d4e2.Driver.driverId] || 0) + +_0x43d4e2.points;
    });
    _0xa3cdec.sprint.forEach((_0x216727) => {
      _0x1615b5[_0x216727.Driver.driverId] =
        (_0x1615b5[_0x216727.Driver.driverId] || 0) + +_0x216727.points;
    });
    if (_0x5ad6cf < 0 && _0x18ac42 >= 2010) {
      const _0x2c6579 = _0x1615b5[_0x339b93] || 0;
      const _0x29dbcb = Math.max(
        0,
        ...Object.entries(_0x1615b5)
          .filter(([_0x1bf8db]) => _0x1bf8db !== _0x339b93)
          .map(([, _0xa41491]) => _0xa41491),
      );
      if (_0x2c6579 - _0x29dbcb > _0x44cf78(_0x499bc8)) {
        _0x5ad6cf = _0x499bc8;
      }
    }
  });
  const _0x19d651 = _0x18ac42 < 2010;
  if (!_0x19d651 && _0x5ad6cf < 0) {
    _0x5ad6cf = _0x83dda3.length - 1;
  }
  const _0x2ce7ee = _0x83dda3.map((_0x276a24) => {
    const _0x38b916 = _0x276a24.race.find(
      (_0x23e21d) => _0x23e21d.Driver.driverId === _0x339b93,
    );
    const _0x36c15a = _0x276a24.sprint.find(
      (_0xb23590) => _0xb23590.Driver.driverId === _0x339b93,
    );
    return {
      round: _0x276a24.round,
      name: _0x276a24.name,
      date: _0x276a24.date,
      country: _0x276a24.country,
      pos: _0x38b916 ? _0x38b916.position : null,
      status: _0x38b916 ? _0x38b916.status : "",
      grid: _0x38b916 ? _0x38b916.grid : null,
      sprintPos: _0x36c15a ? _0x36c15a.position : null,
      pts:
        (_0x38b916 ? +_0x38b916.points : 0) +
        (_0x36c15a ? +_0x36c15a.points : 0),
    };
  });
  const _0x524833 = {
    champ: _0x32199d[0],
    runner: _0x32199d[1]
      ? {
          name: a0_0x505882(_0x32199d[1].Driver),
          pts: +_0x32199d[1].points,
        }
      : null,
    champPts: +_0x32199d[0].points,
    rows: _0x2ce7ee,
    total: _0x2ce7ee.length,
    wins: _0x2ce7ee.filter((_0xab61ac) => _0xab61ac.pos === "1").length,
    podiums: _0x2ce7ee.filter((_0x2f4852) =>
      ["1", "2", "3"].includes(_0x2f4852.pos),
    ).length,
    poles: _0x2ce7ee.filter((_0x43d7f8) => _0x43d7f8.grid === "1").length,
    dnf: _0x2ce7ee.filter(
      (_0x52b0f) => _0x52b0f.pos && !a0_0x4d831d(_0x52b0f.status),
    ).length,
    sprintWins: _0x2ce7ee.filter((_0x314799) => _0x314799.sprintPos === "1")
      .length,
    clinchIdx: _0x5ad6cf,
    clinchNA: _0x19d651,
  };
  a0_0x4722c6.season[_0x18ac42] = _0x524833;
  return _0x524833;
}
let a0_0x15f9d7 = 0;
async function a0_0x2e063a() {
  const _0x882127 = a0_0x15f9d7 + 300 - Date.now();
  if (_0x882127 > 0) {
    await a0_0x5164ae(_0x882127);
  }
  a0_0x15f9d7 = Date.now();
}
async function a0_0x2f16cf(_0x93f6ad, _0x1a9c43 = 6) {
  for (let _0x5aba48 = 0; _0x5aba48 < _0x1a9c43; _0x5aba48++) {
    await a0_0x2e063a();
    let _0x4499d5 = null;
    try {
      _0x4499d5 = await fetch(a0_0x532085 + _0x93f6ad);
    } catch (_0x422a40) {
      _0x4499d5 = null;
    }
    if (_0x4499d5 && _0x4499d5.ok) {
      return _0x4499d5.json();
    }
    if (_0x4499d5 && _0x4499d5.status !== 429 && _0x4499d5.status < 500) {
      throw new Error("HTTP " + _0x4499d5.status + " en " + _0x93f6ad);
    }
    await a0_0x5164ae((_0x5aba48 + 1) * 1500);
  }
  throw new Error("Sin respuesta de la API en " + _0x93f6ad);
}
async function a0_0x490f09(_0x527f15, _0x4cfe76) {
  const _0x1463c7 = {};
  let _0x585f27 = 0;
  let _0x5ed53b = Infinity;
  let _0x489277 = 0;
  while (_0x585f27 < _0x5ed53b && _0x489277++ < 60) {
    const _0x265d27 = _0x527f15.includes("?") ? "&" : "?";
    const _0x50571c = await a0_0x2f16cf(
      "" + _0x527f15 + _0x265d27 + "limit=100&offset=" + _0x585f27,
    );
    _0x5ed53b = +_0x50571c.MRData.total || 0;
    let _0x1c299a = 0;
    (_0x50571c.MRData.RaceTable.Races || []).forEach((_0x5e2ff8) => {
      const _0x4e2db7 = +_0x5e2ff8.round;
      _0x1463c7[_0x4e2db7] ??= {
        date: _0x5e2ff8.date,
        rows: [],
      };
      const _0x1f3199 = _0x5e2ff8[_0x4cfe76] || [];
      _0x1c299a += _0x1f3199.length;
      _0x1463c7[_0x4e2db7].rows.push(..._0x1f3199);
    });
    if (!_0x1c299a) {
      break;
    }
    _0x585f27 += 100;
  }
  return Object.values(_0x1463c7);
}
const a0_0x4236c4 = () => ({
  starts: 0,
  wins: 0,
  podiums: 0,
  poles: 0,
  fl: 0,
  pts: 0,
  first: null,
  last: null,
  team: "",
  teamDate: "",
  number: "",
  teams: [],
});
async function a0_0x57e2af(_0x414529) {
  const _0x4ef792 = await a0_0x490f09(
    "/" + _0x414529 + "/results.json",
    "Results",
  );
  const _0x5a3788 = await a0_0x490f09(
    "/" + _0x414529 + "/qualifying.json",
    "QualifyingResults",
  ).catch(() => []);
  const _0x13e1c5 = _0x5a3788.length > 0;
  const _0x1ce048 = {};
  const _0x5369e6 = {};
  const _0x1f1699 = (_0x36ea49) => (_0x1ce048[_0x36ea49] ??= a0_0x4236c4());
  if (_0x13e1c5) {
    _0x5a3788.forEach((_0x3a5c68) =>
      _0x3a5c68.rows.forEach((_0x536e7c) => {
        if (_0x536e7c.position === "1") {
          _0x1f1699(_0x536e7c.Driver.driverId).poles++;
        }
      }),
    );
  }
  _0x4ef792.forEach((_0xae4333) =>
    _0xae4333.rows.forEach((_0x51038b) => {
      const _0x1d7754 = _0x1f1699(_0x51038b.Driver.driverId);
      _0x1d7754.starts++;
      if (_0x51038b.position === "1") {
        _0x1d7754.wins++;
      }
      if (["1", "2", "3"].includes(_0x51038b.position)) {
        _0x1d7754.podiums++;
      }
      if (_0x51038b.FastestLap?.rank === "1") {
        _0x1d7754.fl++;
      }
      if (!_0x13e1c5 && _0x51038b.grid === "1") {
        _0x1d7754.poles++;
      }
      _0x1d7754.pts += +_0x51038b.points || 0;
      if (!_0x1d7754.first || _0xae4333.date < _0x1d7754.first) {
        _0x1d7754.first = _0xae4333.date;
      }
      if (!_0x1d7754.last || _0xae4333.date > _0x1d7754.last) {
        _0x1d7754.last = _0xae4333.date;
      }
      const _0x16bde1 = _0x51038b.Constructor?.name;
      if (_0x16bde1 && !_0x1d7754.teams.includes(_0x16bde1)) {
        _0x1d7754.teams.push(_0x16bde1);
      }
      if (_0xae4333.date >= _0x1d7754.teamDate) {
        _0x1d7754.teamDate = _0xae4333.date;
        _0x1d7754.team = _0x16bde1 || _0x1d7754.team;
        _0x1d7754.number = _0x51038b.number || _0x1d7754.number;
      }
      _0x5369e6[_0x51038b.Driver.driverId] = _0x51038b.Driver;
    }),
  );
  return {
    y: _0x414529,
    done: _0x414529 === a0_0x30d883 ? a0_0x43ae7f() : null,
    stats: _0x1ce048,
    info: _0x5369e6,
    ts: Date.now(),
  };
}
async function a0_0x978062(_0xcd08ad) {
  const _0x310068 = a0_0x2420f3 + _0xcd08ad;
  const _0x30438c = a0_0x15728b(_0x310068);
  if (
    _0x30438c &&
    (_0xcd08ad < a0_0x30d883 || _0x30438c.done === a0_0x43ae7f())
  ) {
    return _0x30438c;
  }
  const _0x2ed16f = await a0_0x57e2af(_0xcd08ad);
  a0_0x2937c8(_0x310068, _0x2ed16f);
  return _0x2ed16f;
}
function a0_0x47cc44(_0x4b9185, _0x1141a1) {
  return {
    season: _0x1141a1,
    ts: Date.now(),
    list: _0x4b9185,
    byId: Object.fromEntries(
      _0x4b9185.map((_0x57130a) => [_0x57130a.id, _0x57130a]),
    ),
  };
}
function a0_0x516e8c(_0x43332a, _0x297128) {
  a0_0x4722c6.drvProg = {
    n: _0x43332a,
    t: _0x297128,
  };
  if (a0_0x4722c6.drv) {
    return;
  }
  const _0x4d4c03 = a0_0x3f0359("#drvStatus");
  if (!_0x4d4c03) {
    return;
  }
  if (a0_0x2fe5e0 === "hist") {
    _0x4d4c03.textContent =
      "Cargando historial de pilotos… (" +
      _0x43332a +
      " de " +
      _0x297128 +
      " temporadas)";
  } else {
    a0_0x4abb3d();
  }
}
async function a0_0x4425e1() {
  const _0x1de911 = a0_0x43ae7f();
  const _0x3128a9 = a0_0x15728b(a0_0x4c8a63);
  if (_0x3128a9 && _0x3128a9.season === a0_0x30d883) {
    const _0x2bc4a0 =
      _0x3128a9.done !== undefined
        ? _0x3128a9.done === _0x1de911
        : Date.now() - _0x3128a9.ts < 86400000;
    if (_0x2bc4a0) {
      return a0_0x47cc44(_0x3128a9.list, a0_0x30d883);
    }
  }
  const _0xd09b8d = [];
  for (let _0x18d842 = a0_0x3587a9; _0x18d842 <= a0_0x30d883; _0x18d842++) {
    _0xd09b8d.push(_0x18d842);
  }
  const _0x298df6 = {};
  const _0x41a91c = [];
  for (let _0x7a86e0 = 0; _0x7a86e0 < _0xd09b8d.length; _0x7a86e0++) {
    try {
      _0x298df6[_0xd09b8d[_0x7a86e0]] = await a0_0x978062(_0xd09b8d[_0x7a86e0]);
    } catch (_0xd5d192) {
      console.warn("Pilotos " + _0xd09b8d[_0x7a86e0] + ":", _0xd5d192);
      _0x41a91c.push(_0xd09b8d[_0x7a86e0]);
    }
    a0_0x516e8c(_0x7a86e0 + 1, _0xd09b8d.length);
  }
  for (const _0x16fd6a of _0x41a91c.splice(0)) {
    try {
      _0x298df6[_0x16fd6a] = await a0_0x978062(_0x16fd6a);
    } catch (_0x28e7dd) {
      console.warn("Pilotos " + _0x16fd6a + " (reintento):", _0x28e7dd);
      _0x41a91c.push(_0x16fd6a);
    }
  }
  const _0x600bf0 = {};
  const _0x44a969 = {};
  Object.keys(_0x298df6)
    .map(Number)
    .sort((_0x1877cf, _0xb82593) => _0x1877cf - _0xb82593)
    .forEach((_0x2ddf07) => {
      const _0x2a99fe = _0x298df6[_0x2ddf07];
      Object.entries(_0x2a99fe.stats).forEach(([_0x43346f, _0x4ef8d8]) => {
        const _0x9fb3fb = (_0x600bf0[_0x43346f] ??= a0_0x4236c4());
        _0x9fb3fb.starts += _0x4ef8d8.starts;
        _0x9fb3fb.wins += _0x4ef8d8.wins;
        _0x9fb3fb.podiums += _0x4ef8d8.podiums;
        _0x9fb3fb.poles += _0x4ef8d8.poles;
        _0x9fb3fb.fl += _0x4ef8d8.fl;
        _0x9fb3fb.pts += _0x4ef8d8.pts;
        if (
          _0x4ef8d8.first &&
          (!_0x9fb3fb.first || _0x4ef8d8.first < _0x9fb3fb.first)
        ) {
          _0x9fb3fb.first = _0x4ef8d8.first;
        }
        if (
          _0x4ef8d8.last &&
          (!_0x9fb3fb.last || _0x4ef8d8.last > _0x9fb3fb.last)
        ) {
          _0x9fb3fb.last = _0x4ef8d8.last;
        }
        _0x4ef8d8.teams.forEach((_0x451a74) => {
          if (!_0x9fb3fb.teams.includes(_0x451a74)) {
            _0x9fb3fb.teams.push(_0x451a74);
          }
        });
        if (_0x4ef8d8.teamDate && _0x4ef8d8.teamDate >= _0x9fb3fb.teamDate) {
          _0x9fb3fb.teamDate = _0x4ef8d8.teamDate;
          _0x9fb3fb.team = _0x4ef8d8.team;
          _0x9fb3fb.number = _0x4ef8d8.number || _0x9fb3fb.number;
        }
      });
      Object.assign(_0x44a969, _0x2a99fe.info);
    });
  const _0x4c0c0b = Object.keys(_0x600bf0).map((_0x319a1b) => {
    const _0x9f15d0 = _0x600bf0[_0x319a1b];
    const _0x496b1d = _0x44a969[_0x319a1b] || {};
    return {
      id: _0x319a1b,
      name: _0x496b1d.givenName
        ? _0x496b1d.givenName + " " + _0x496b1d.familyName
        : _0x319a1b,
      nat: _0x496b1d.nationality || "",
      dob: _0x496b1d.dateOfBirth || "",
      code: _0x496b1d.code || "",
      num: _0x496b1d.permanentNumber || _0x9f15d0.number || "",
      team: _0x9f15d0.team,
      teams: _0x9f15d0.teams,
      starts: _0x9f15d0.starts,
      wins: _0x9f15d0.wins,
      podiums: _0x9f15d0.podiums,
      poles: _0x9f15d0.poles,
      fl: _0x9f15d0.fl,
      pts: _0x9f15d0.pts,
      first: _0x9f15d0.first,
      last: _0x9f15d0.last,
    };
  });
  if (!_0x4c0c0b.length) {
    throw new Error("No se obtuvieron datos de pilotos");
  }
  if (!_0x41a91c.length) {
    a0_0x2937c8(a0_0x4c8a63, {
      season: a0_0x30d883,
      done: _0x1de911,
      ts: Date.now(),
      list: _0x4c0c0b,
    });
  }
  if (_0x41a91c.length) {
    console.warn("Temporadas incompletas:", _0x41a91c);
  }
  return a0_0x47cc44(_0x4c0c0b, a0_0x30d883);
}
function a0_0x2be657() {
  if (a0_0x4722c6.drv) {
    return Promise.resolve(a0_0x4722c6.drv);
  }
  a0_0x4722c6.drvPromise ??= a0_0x4425e1()
    .then((_0xffcaa1) => {
      a0_0x4722c6.drv = _0xffcaa1;
      a0_0x4722c6.drvProg = null;
      return _0xffcaa1;
    })
    .catch((_0x2cf658) => {
      a0_0x4722c6.drvPromise = null;
      throw _0x2cf658;
    });
  return a0_0x4722c6.drvPromise;
}
async function a0_0x31cdae(_0x5b770e) {
  if (a0_0x4722c6.dteams[_0x5b770e]) {
    return a0_0x4722c6.dteams[_0x5b770e];
  }
  const _0x529d28 = a0_0x15728b(a0_0x45283f + _0x5b770e);
  if (_0x529d28) {
    return (a0_0x4722c6.dteams[_0x5b770e] = _0x529d28);
  }
  const _0x11aaf5 = await a0_0x2f16cf(
    "/drivers/" + _0x5b770e + "/constructors.json?limit=100",
  );
  const _0xefdbe3 = (_0x11aaf5.MRData.ConstructorTable?.Constructors || []).map(
    (_0x32dd98) => _0x32dd98.name,
  );
  a0_0x4722c6.dteams[_0x5b770e] = _0xefdbe3;
  a0_0x2937c8(a0_0x45283f + _0x5b770e, _0xefdbe3);
  return _0xefdbe3;
}
function a0_0x37c2d9(_0x3cec31, _0x366d3d) {
  const _0xe07ed7 = [];
  const _0x763fa5 = (_0x1a9f0d) => {
    if (
      _0x1a9f0d &&
      !_0xe07ed7.some(
        (_0x3921b6) => a0_0x2c57c6(_0x3921b6) === a0_0x2c57c6(_0x1a9f0d),
      )
    ) {
      _0xe07ed7.push(_0x1a9f0d);
    }
  };
  (a0_0x4722c6.dteams[_0x3cec31] || []).forEach(_0x763fa5);
  (_0x366d3d?.teams || []).forEach(_0x763fa5);
  const _0x5905f1 = a0_0x484245.drivers.find(
    (_0x582437) => _0x582437.id === _0x3cec31,
  );
  if (_0x5905f1) {
    _0x763fa5(_0x5905f1.teamName);
  }
  if (!_0xe07ed7.length && _0x366d3d?.team) {
    _0x763fa5(_0x366d3d.team);
  }
  return _0xe07ed7;
}
function a0_0xc23af3(_0x1b3ef5) {
  const _0x2ca325 = a0_0x484245.drivers.find(
    (_0x5e8887) => _0x5e8887.id === _0x1b3ef5,
  );
  if (_0x2ca325) {
    return a0_0x2c57c6(_0x2ca325.teamName);
  } else {
    return "";
  }
}
function a0_0x39590d(_0x33834c, _0x2025ec) {
  const _0x98a875 = a0_0xc23af3(_0x33834c);
  return _0x2025ec
    .map((_0x442f98) => {
      const _0x3d3e4e = _0x98a875 && a0_0x2c57c6(_0x442f98) === _0x98a875;
      const _0x3416f4 = a0_0x126f94(_0x442f98);
      return (
        '<span class="tpill' +
        (_0x3d3e4e ? " now" : "") +
        '" style="--c:' +
        _0x3416f4 +
        '">' +
        a0_0x4046d8(a0_0x46cabb(_0x442f98)) +
        (_0x3d3e4e ? "<em>Actual</em>" : "") +
        "</span>"
      );
    })
    .join("");
}
const a0_0x457d88 = (_0xb89f02) =>
  a0_0x484245.champs.filter((_0x5fcc3a) => _0x5fcc3a.driverId === _0xb89f02)
    .length;
function a0_0x48518e(_0x5614a9, _0x66a6a3) {
  _0x5614a9.innerHTML = a0_0x484245.drivers
    .map((_0x4a3a6b, _0x5ed3e1) => {
      const _0x4584be = a0_0x4722c6.drv?.byId[_0x4a3a6b.id] || {};
      const _0x23de3c = a0_0x140a0c(_0x4a3a6b.teamName);
      const _0x5002a9 = _0x4a3a6b.num || _0x4584be.num || "—";
      const _0x1fb2d6 = _0x4a3a6b.code || _0x4584be.code || "";
      const _0x28f60c = a0_0x5aec18(_0x4a3a6b.nat || _0x4584be.nat);
      const _0x16ac40 = a0_0x4309fe(_0x4a3a6b.dob || _0x4584be.dob, new Date());
      return (
        '\n    <article class="glass dcard" data-drv="' +
        a0_0x4046d8(_0x4a3a6b.id) +
        '" style="--c:' +
        _0x23de3c +
        '">\n      <div class="dc-hel">' +
        a0_0x740b5a(_0x4a3a6b.name, _0x4a3a6b.teamName, _0x4a3a6b.id) +
        '</div>\n      <div class="dhead"><span class="dnum">' +
        a0_0x4046d8(_0x5002a9) +
        '</span><span class="dcode">' +
        a0_0x4046d8(_0x1fb2d6) +
        "</span></div>\n      <h3>" +
        a0_0x4046d8(_0x4a3a6b.name) +
        '</h3>\n      <p class="dteam"><span class="dot" style="background:' +
        _0x23de3c +
        '"></span>' +
        a0_0x4046d8(a0_0x46cabb(_0x4a3a6b.teamName)) +
        '</p>\n      <div class="dfoot"><span>' +
        a0_0x4046d8(_0x28f60c || "—") +
        (_0x16ac40 != null ? " · " + _0x16ac40 + " años" : "") +
        "</span><span>" +
        (_0x4a3a6b.pos
          ? "P" + _0x4a3a6b.pos + " · " + _0x4a3a6b.basePts + " pts"
          : "") +
        "</span></div>\n    </article>"
      );
    })
    .join("");
  a0_0x4abb3d();
}
function a0_0x4abb3d() {
  const _0xf3fa3 = a0_0x3f0359("#drvStatus");
  if (!_0xf3fa3 || a0_0x2fe5e0 !== "act") {
    return;
  }
  let _0x5d452f = a0_0x484245.drivers.length + " pilotos en la parrilla 2026";
  if (!a0_0x4722c6.drv) {
    _0x5d452f += a0_0x4722c6.drvProg
      ? " · cargando historial (" +
        a0_0x4722c6.drvProg.n +
        " de " +
        a0_0x4722c6.drvProg.t +
        " temporadas)"
      : " · cargando estadísticas…";
  }
  _0xf3fa3.textContent = _0x5d452f;
}
async function a0_0x986bde(_0x52daac, _0x242e33) {
  if (!a0_0x4722c6.drv) {
    _0x52daac.innerHTML = "";
    _0x242e33.textContent = "Cargando pilotos de la historia…";
    try {
      await a0_0x2be657();
    } catch (_0x47f85c) {
      console.warn(_0x47f85c);
      _0x52daac.innerHTML = "";
      _0x242e33.innerHTML =
        'No se pudo cargar la lista de pilotos. <button class="btn-sm" data-retry>Reintentar</button>';
      return;
    }
    if (a0_0x2fe5e0 !== "hist") {
      return;
    }
  }
  const _0x450bb3 = a0_0x2c57c6(a0_0x47fc09);
  const _0x384a20 = a0_0x4722c6.drv.list.filter(
    (_0x1b3d2c) =>
      !_0x450bb3 || a0_0x2c57c6(_0x1b3d2c.name).includes(_0x450bb3),
  );
  _0x384a20.sort(
    (_0x5cfd3d, _0xee78e7) =>
      a0_0x457d88(_0xee78e7.id) - a0_0x457d88(_0x5cfd3d.id) ||
      _0xee78e7.wins - _0x5cfd3d.wins ||
      _0xee78e7.starts - _0x5cfd3d.starts ||
      _0x5cfd3d.name.localeCompare(_0xee78e7.name),
  );
  _0x242e33.textContent =
    _0x384a20.length +
    " " +
    (_0x384a20.length === 1 ? "piloto" : "pilotos") +
    (_0x450bb3 ? " encontrados" : " en la historia de la F1");
  const _0x553325 = new Set(
    a0_0x484245.drivers.map((_0x250b5f) => _0x250b5f.id),
  );
  _0x52daac.innerHTML = _0x384a20
    .map((_0x2100cd) => {
      const _0x53cda3 = a0_0x457d88(_0x2100cd.id);
      const _0xf4d5d5 = a0_0x126f94(_0x2100cd.team);
      const _0x1dd6ee =
        _0x553325.has(_0x2100cd.id) ||
        a0_0x30f355(_0x2100cd.last) === String(a0_0x30d883);
      const _0x4c2f81 =
        a0_0x30f355(_0x2100cd.first) +
        " – " +
        (_0x1dd6ee ? "Actualidad" : a0_0x30f355(_0x2100cd.last));
      const _0x351fa3 = _0x1dd6ee
        ? a0_0x4309fe(_0x2100cd.dob, new Date())
        : a0_0x4309fe(_0x2100cd.dob, _0x2100cd.last);
      const _0x212dd6 =
        _0x351fa3 != null
          ? _0x1dd6ee
            ? _0x351fa3 + " años"
            : _0x351fa3 + " años al retiro"
          : "";
      const _0x3d2ec6 = a0_0x37c2d9(_0x2100cd.id, _0x2100cd);
      const _0x194975 =
        _0x3d2ec6.length > 3
          ? '<span class="tpill more">+' + (_0x3d2ec6.length - 3) + "</span>"
          : "";
      return (
        '\n    <article class="glass hcard" data-drv="' +
        a0_0x4046d8(_0x2100cd.id) +
        '" style="--c:' +
        _0xf4d5d5 +
        '">\n      <div class="hc-head">\n        <span class="hc-years">' +
        a0_0x4046d8(_0x4c2f81) +
        "</span>\n        " +
        (_0x53cda3
          ? '<span class="hc-title">🏆 ' +
            _0x53cda3 +
            " " +
            (_0x53cda3 === 1 ? "título" : "títulos") +
            "</span>"
          : "") +
        "\n      </div>\n      <h3>" +
        a0_0x4046d8(_0x2100cd.name) +
        '</h3>\n      <p class="hc-sub">' +
        a0_0x4046d8(a0_0x5aec18(_0x2100cd.nat) || "—") +
        (_0x212dd6 ? " · " + _0x212dd6 : "") +
        '</p>\n      <div class="hc-teams">' +
        (_0x3d2ec6.length
          ? a0_0x39590d(_0x2100cd.id, _0x3d2ec6.slice(0, 3))
          : "") +
        _0x194975 +
        '</div>\n      <div class="hc-stats">\n        <div><b>' +
        _0x2100cd.starts +
        "</b><span>GP</span></div>\n        <div><b>" +
        _0x2100cd.wins +
        "</b><span>Victorias</span></div>\n        <div><b>" +
        _0x2100cd.podiums +
        "</b><span>Podios</span></div>\n        <div><b>" +
        _0x2100cd.poles +
        "</b><span>Poles</span></div>\n      </div>\n    </article>"
      );
    })
    .join("");
}
async function a0_0x5bdb86() {
  const _0xb3e282 = a0_0x3f0359("#drvTools");
  const _0x54105b = a0_0x3f0359("#drvGrid");
  const _0x53f438 = a0_0x3f0359("#drvStatus");
  _0xb3e282.style.display = a0_0x2fe5e0 === "hist" ? "flex" : "none";
  document
    .querySelectorAll("#drvTabs .chip")
    .forEach((_0x1a2e62) =>
      _0x1a2e62.classList.toggle("on", _0x1a2e62.dataset.dt === a0_0x2fe5e0),
    );
  if (a0_0x2fe5e0 === "hof") {
    _0x53f438.textContent =
      "Todos los pilotos que alguna vez ganaron un título mundial.";
    a0_0xdd43dd();
    return;
  }
  if (a0_0x484245.source === "local") {
    _0x54105b.innerHTML = "";
    _0x53f438.textContent = "Los pilotos requieren conexión a la API.";
    return;
  }
  if (a0_0x2fe5e0 === "act") {
    a0_0x48518e(_0x54105b, _0x53f438);
    if (!a0_0x4722c6.drv) {
      a0_0x536bd9();
    }
    return;
  }
  await a0_0x986bde(_0x54105b, _0x53f438);
}
function a0_0x536bd9() {
  if (a0_0x4722c6.drv) {
    return;
  }
  a0_0x2be657()
    .then(() => {
      if (a0_0x2fe5e0 === "act") {
        a0_0x5bdb86();
      }
    })
    .catch((_0xa75945) => {
      console.warn(_0xa75945);
      const _0x21d24e = a0_0x3f0359("#drvStatus");
      if (_0x21d24e && a0_0x2fe5e0 === "act") {
        _0x21d24e.innerHTML =
          a0_0x484245.drivers.length +
          ' pilotos en la parrilla 2026 · no se pudieron cargar las estadísticas. <button class="btn-sm" data-retry>Reintentar</button>';
      }
    });
}
function a0_0x21906d(_0x2ed8a7, _0x4adf98 = false) {
  const _0x276f1a = a0_0x484245.drivers.find(
    (_0x3f2037) => _0x3f2037.id === _0x2ed8a7,
  );
  const _0x51082c = a0_0x4722c6.drv?.byId[_0x2ed8a7] || {};
  const _0x5ea622 = _0x276f1a ? _0x276f1a.name : _0x51082c.name;
  const _0x47c382 = _0x276f1a ? _0x276f1a.teamName : _0x51082c.team;
  const _0x47f6ca = _0x276f1a?.nat || _0x51082c.nat;
  const _0x16e19c = _0x276f1a?.num || _0x51082c.num || "—";
  const _0x5384f0 = _0x276f1a?.dob || _0x51082c.dob;
  const _0x49bc5e = !a0_0x4722c6.drv && !_0x4adf98;
  const _0x28df69 = (_0x21c6dc) =>
    _0x49bc5e ? "…" : (_0x51082c[_0x21c6dc] ?? 0);
  const _0x1c4a2a = a0_0x484245.champs
    .filter((_0x3fc869) => _0x3fc869.driverId === _0x2ed8a7)
    .sort((_0x3b1938, _0x4825e5) => _0x3b1938.season - _0x4825e5.season);
  const _0x49a6a2 =
    !!_0x276f1a || a0_0x30f355(_0x51082c.last) === String(a0_0x30d883);
  const _0x470b3f = _0x49a6a2
    ? a0_0x4309fe(_0x5384f0, new Date())
    : a0_0x4309fe(_0x5384f0, _0x51082c.last);
  const _0x286939 = a0_0x37c2d9(_0x2ed8a7, _0x51082c);
  const _0x221fd3 = !a0_0x4722c6.dteams[_0x2ed8a7] && !_0x4adf98;
  const _0x49f0cb = _0x49bc5e
    ? '<p class="muted" style="font-size:13px;margin-top:10px">Cargando estadísticas de la carrera…</p>'
    : _0x4adf98
      ? '<p class="muted" style="font-size:13px;margin-top:10px">No se pudieron cargar las estadísticas. <button class="btn-sm" data-retry>Reintentar</button></p>'
      : "";
  return (
    '\n    <span class="eyebrow">' +
    (_0x276f1a ? "Piloto actual · " + a0_0x30d883 : "Historia de la F1") +
    '</span>\n    <h3 class="display m-title">' +
    a0_0x4046d8(_0x5ea622) +
    '</h3>\n    <div class="m-grid">\n      <div class="svg-box dhel">' +
    a0_0x740b5a(_0x5ea622 || _0x2ed8a7, _0x47c382, _0x2ed8a7, "big") +
    '</div>\n      <div style="display:grid;gap:12px;align-content:start">\n        <div class="stat"><span>Número</span><strong>' +
    a0_0x4046d8(_0x16e19c) +
    '</strong></div>\n        <div class="stat"><span>Nacionalidad</span><strong>' +
    a0_0x4046d8(a0_0x5aec18(_0x47f6ca) || "—") +
    '</strong></div>\n        <div class="stat"><span>Fecha de nacimiento</span><strong>' +
    (_0x5384f0 ? a0_0x4046d8(a0_0x34ea12(_0x5384f0)) : "—") +
    '</strong></div>\n        <div class="stat"><span>' +
    (_0x49a6a2 ? "Edad" : "Edad al retiro") +
    "</span><strong>" +
    (_0x470b3f != null ? _0x470b3f + " años" : "—") +
    '</strong></div>\n      </div>\n    </div>\n\n    <div class="box" style="margin-top:18px">\n      <h4>🛡️ Escuderías en las que corrió</h4>\n      <div class="tpills">' +
    (_0x286939.length
      ? a0_0x39590d(_0x2ed8a7, _0x286939)
      : '<span class="muted">—</span>') +
    "</div>\n      " +
    (_0x221fd3
      ? '<p class="muted" style="font-size:13px;margin-top:12px">Cargando historial completo de escuderías…</p>'
      : "") +
    '\n    </div>\n\n    <div class="m-grid" style="margin-top:18px">\n      <div class="box">\n        <h4>🏁 Carrera</h4>\n        ' +
    a0_0x223330(
      "Primera carrera",
      _0x51082c.first ? a0_0x34ea12(_0x51082c.first) : "—",
    ) +
    "\n        " +
    a0_0x223330(
      _0x49a6a2 ? "Estado" : "Retiro (última carrera)",
      _0x49a6a2
        ? "En actividad"
        : _0x51082c.last
          ? a0_0x34ea12(_0x51082c.last)
          : "—",
    ) +
    "\n        " +
    a0_0x223330("Grandes Premios", _0x28df69("starts")) +
    "\n        " +
    a0_0x223330("Puntos totales", _0x28df69("pts")) +
    '\n      </div>\n      <div class="box">\n        <h4>🏆 Logros</h4>\n        ' +
    a0_0x223330("Victorias", _0x28df69("wins")) +
    "\n        " +
    a0_0x223330("Podios", _0x28df69("podiums")) +
    "\n        " +
    a0_0x223330("Poles", _0x28df69("poles")) +
    "\n        " +
    a0_0x223330("Vueltas rápidas", _0x28df69("fl")) +
    "\n        " +
    a0_0x223330("Campeonatos", _0x1c4a2a.length) +
    "\n      </div>\n    </div>\n    " +
    _0x49f0cb +
    "\n\n    " +
    (_0x1c4a2a.length
      ? '\n    <div class="box" style="margin-top:18px">\n      <h4>👑 Títulos mundiales</h4>\n      <div class="yrs">' +
        _0x1c4a2a
          .map(
            (_0x14b18d) =>
              '<span class="yr" data-season="' +
              _0x14b18d.season +
              '">' +
              _0x14b18d.season +
              " · " +
              a0_0x4046d8(a0_0x46cabb(_0x14b18d.team)) +
              "</span>",
          )
          .join("") +
        "</div>\n    </div>"
      : "")
  );
}
function a0_0x12a8c8(_0x3a5f18) {
  a0_0x522712 = _0x3a5f18;
  let _0x1f78d8 = false;
  const _0x29cab0 = () => {
    if (a0_0x522712 === _0x3a5f18) {
      a0_0x3f0359("#mBody").innerHTML = a0_0x21906d(_0x3a5f18, _0x1f78d8);
    }
  };
  a0_0x4491d0(a0_0x21906d(_0x3a5f18));
  a0_0x31cdae(_0x3a5f18)
    .then(_0x29cab0)
    .catch((_0x4d2c7e) => {
      console.warn(_0x4d2c7e);
      _0x29cab0();
    });
  if (a0_0x4722c6.drv) {
    return;
  }
  a0_0x2be657()
    .then(_0x29cab0)
    .catch((_0x4e765a) => {
      console.warn(_0x4e765a);
      _0x1f78d8 = true;
      _0x29cab0();
    });
}
const a0_0x53c167 = {
  benetton: "Renault",
  renault: "Renault",
  "alpine f1 team": "Alpine F1 Team",
  alpine: "Alpine F1 Team",
  toyota: "Toyota",
  jordan: "Jordan",
  midland: "Midland",
  spyker: "Spyker",
  "force india": "Racing Point",
  "racing point": "Racing Point",
  "aston martin": "Aston Martin",
  sauber: "Sauber",
  "alfa romeo": "Sauber",
  "kick sauber": "Sauber",
  "toro rosso": "RB",
  alphatauri: "RB",
  "rb f1 team": "RB",
  "racing bulls": "RB",
  "haas f1 team": "Haas F1 Team",
  williams: "Williams",
  mclaren: "McLaren",
  ferrari: "Ferrari",
  mercedes: "Mercedes",
  "red bull": "Red Bull",
  audi: "Audi",
  cadillac: "Cadillac",
};
const a0_0x46d03e = {
  Mercedes: {
    pais: "Reino Unido",
    fundada: 1954,
    motor: "Mercedes",
    sede: "Brackley",
  },
  Ferrari: {
    pais: "Italia",
    fundada: 1929,
    motor: "Ferrari",
    sede: "Maranello",
  },
  McLaren: {
    pais: "Reino Unido",
    fundada: 1963,
    motor: "Mercedes",
    sede: "Woking",
  },
  "Red Bull": {
    pais: "Austria",
    fundada: 2005,
    motor: "Red Bull Powertrains",
    sede: "Milton Keynes",
  },
  RB: {
    pais: "Italia",
    fundada: 2006,
    motor: "Red Bull Powertrains",
    sede: "Faenza",
  },
  "Alpine F1 Team": {
    pais: "Francia",
    fundada: 1955,
    motor: "Mercedes",
    sede: "Enstone",
  },
  "Haas F1 Team": {
    pais: "Estados Unidos",
    fundada: 2016,
    motor: "Ferrari",
    sede: "Kannapolis",
  },
  Audi: {
    pais: "Alemania",
    fundada: 2024,
    motor: "Audi",
    sede: "Hinwil",
  },
  Williams: {
    pais: "Reino Unido",
    fundada: 1977,
    motor: "Mercedes",
    sede: "Grove",
  },
  "Aston Martin": {
    pais: "Reino Unido",
    fundada: 2021,
    motor: "Honda",
    sede: "Silverstone",
  },
  Cadillac: {
    pais: "Estados Unidos",
    fundada: 2025,
    motor: "Ferrari",
    sede: "Silverstone",
  },
};
const a0_0x36050d = (_0x2603c2) => {
  const _0x49999c = String(_0x2603c2 || "")
    .toLowerCase()
    .trim();
  return a0_0x53c167[_0x49999c] || _0x2603c2;
};
function a0_0x415557(_0x19f01e) {
  const _0x5ff8e9 = a0_0x2c57c6(_0x19f01e);
  const _0x4ede8d = a0_0x5f0f78.find(([_0x3a13f7]) =>
    _0x3a13f7.test(_0x5ff8e9),
  );
  if (_0x4ede8d) {
    return [].concat(_0x4ede8d[1]);
  } else {
    return [];
  }
}
function a0_0x3977a5(_0x583626, _0x596d6b, _0x1e91d5 = false) {
  const _0x3bc1e4 = a0_0x415557(_0x583626);
  if (!_0x3bc1e4.length) {
    return a0_0x240011(_0x583626, _0x596d6b);
  }
  const _0x46e694 = _0x3bc1e4
    .slice(1)
    .map((_0x3a7b94) => a0_0x4e953e + _0x3a7b94)
    .join("|");
  return (
    '<img class="team-logo' +
    (_0x1e91d5 ? " big" : "") +
    '" src="' +
    a0_0x4e953e +
    _0x3bc1e4[0] +
    '" alt="Logo ' +
    a0_0x4046d8(_0x583626) +
    '"\n    loading="lazy" decoding="async"\n    data-alt="' +
    a0_0x4046d8(_0x46e694) +
    '" data-id="' +
    a0_0x4046d8(_0x596d6b) +
    '" data-name="' +
    a0_0x4046d8(_0x583626) +
    '"\n    onerror="__teamLogoErr(this)">'
  );
}
window.__teamLogoErr = (_0x3767e5) => {
  const _0x184e51 = (_0x3767e5.dataset.alt || "").split("|").filter(Boolean);
  if (_0x184e51.length) {
    _0x3767e5.dataset.alt = _0x184e51.slice(1).join("|");
    _0x3767e5.src = _0x184e51[0];
    return;
  }
  _0x3767e5.outerHTML = a0_0x240011(
    _0x3767e5.dataset.name,
    _0x3767e5.dataset.id,
  );
};
function a0_0x240011(_0x5f5c05, _0x2d2aa0) {
  const _0x472ad8 = a0_0x5785a1(_0x5f5c05);
  const _0xbd4e15 = "cg" + String(_0x2d2aa0).replace(/[^a-z0-9]/gi, "");
  const _0x453611 = (_0x5b6c84) =>
    '\n    <g transform="translate(' +
    _0x5b6c84 +
    ',0)">\n      <rect x="-14" y="150" width="28" height="22" rx="4" fill="#0b0b10"/>\n      <rect x="-40" y="20" width="80" height="18" rx="4" fill="' +
    _0x472ad8.acc +
    '"/>\n      <path d="M-22 40 L22 40 L26 110 L-26 110 Z" fill="url(#' +
    _0xbd4e15 +
    ')"/>\n      <path d="M-12 50 L12 50 L14 90 L-14 90 Z" fill="#0b0b10" opacity=".7"/>\n      <ellipse cx="0" cy="92" rx="10" ry="8" fill="#0b0b10"/>\n      <rect x="-34" y="110" width="68" height="18" rx="6" fill="' +
    _0x472ad8.sec +
    '"/>\n      <rect x="-64" y="100" width="22" height="34" rx="4" fill="#0b0b10"/>\n      <rect x="42" y="100" width="22" height="34" rx="4" fill="#0b0b10"/>\n    </g>';
  return (
    '<svg class="car-front" viewBox="0 0 240 180" aria-hidden="true">\n    <defs>\n      <linearGradient id="' +
    _0xbd4e15 +
    '" x1="0" y1="0" x2="0" y2="1">\n        <stop offset="0" stop-color="' +
    a0_0x2cd835(_0x472ad8.main, 0.3) +
    '"/>\n        <stop offset="1" stop-color="' +
    a0_0x2cd835(_0x472ad8.main, -0.4) +
    '"/>\n      </linearGradient>\n    </defs>\n    ' +
    _0x453611(70) +
    _0x453611(170) +
    "\n  </svg>"
  );
}
function a0_0x17a694(_0x5dfc70) {
  return a0_0x46d03e[a0_0x36050d(_0x5dfc70)] || {};
}
function a0_0x5663ac() {
  const _0xab563f = {};
  (a0_0x4722c6.drv?.list || []).forEach((_0x3c206c) =>
    (_0x3c206c.teams || []).forEach((_0x1ed472) => {
      const _0x3c8c2a = a0_0x36050d(_0x1ed472);
      _0xab563f[_0x3c8c2a] ??= {
        key: _0x3c8c2a,
        names: new Set(),
        drivers: new Set(),
      };
      _0xab563f[_0x3c8c2a].names.add(_0x1ed472);
      _0xab563f[_0x3c8c2a].drivers.add(_0x3c206c.name);
    }),
  );
  return Object.values(_0xab563f);
}
function a0_0x243121(_0x5ec708) {
  const _0x1d574e = a0_0x484245.teams.find(
    (_0x33fb4d) => _0x33fb4d.name === _0x5ec708,
  );
  if (!_0x1d574e) {
    return;
  }
  const _0x59016a = a0_0x2c57c6(a0_0x36050d(_0x1d574e.name));
  const _0x4d10a6 = a0_0x17a694(_0x1d574e.name);
  const _0x52fbb4 = _0x1d574e.color;
  const _0x18183f = a0_0x484245.teams.indexOf(_0x1d574e) + 1;
  const _0xfa1ec6 = a0_0x484245.drivers.filter(
    (_0x5300c8) => _0x5300c8.team === _0x1d574e.id,
  );
  const _0x471aa9 = a0_0x5663ac().find(
    (_0x48e330) => a0_0x2c57c6(_0x48e330.key) === _0x59016a,
  );
  const _0x4f382e = a0_0x484245.champs.filter(
    (_0x340d01) => a0_0x2c57c6(a0_0x36050d(_0x340d01.team)) === _0x59016a,
  ).length;
  const _0x3426a1 = _0x471aa9 ? [..._0x471aa9.drivers] : [];
  const _0x1cab10 = _0x471aa9
    ? [..._0x471aa9.names].map(a0_0x46cabb).join(" → ")
    : "—";
  const _0x33af6e = _0x3426a1.length
    ? _0x3426a1
        .slice(0, 60)
        .map(
          (_0x2d2e60) =>
            '<span class="tpill" style="--c:' +
            _0x52fbb4 +
            '">' +
            a0_0x4046d8(_0x2d2e60) +
            "</span>",
        )
        .join("")
    : '<span class="muted">Cargando historial…</span>';
  a0_0x4491d0(
    '\n    <span class="eyebrow">Escudería · Temporada ' +
      a0_0x30d883 +
      '</span>\n    <h3 class="display m-title">' +
      a0_0x4046d8(a0_0x46cabb(_0x1d574e.name)) +
      '</h3>\n    <div class="m-grid">\n      <div class="svg-box team-modal-visual">' +
      a0_0x3977a5(_0x1d574e.name, _0x1d574e.id, true) +
      '</div>\n      <div style="display:grid;gap:12px;align-content:start">\n        <div class="stat"><span>País de origen</span><strong>' +
      a0_0x4046d8(_0x4d10a6.pais || "—") +
      '</strong></div>\n        <div class="stat"><span>Fundada</span><strong>' +
      (_0x4d10a6.fundada || "—") +
      '</strong></div>\n        <div class="stat"><span>Sede</span><strong>' +
      a0_0x4046d8(_0x4d10a6.sede || "—") +
      '</strong></div>\n        <div class="stat"><span>Motor</span><strong>' +
      a0_0x4046d8(_0x4d10a6.motor || "—") +
      '</strong></div>\n        <div class="stat"><span>Posición ' +
      a0_0x30d883 +
      "</span><strong>" +
      _0x18183f +
      ".º · " +
      _0x1d574e.pts +
      ' pts</strong></div>\n      </div>\n    </div>\n\n    <div class="m-grid" style="margin-top:18px">\n      <div class="box">\n        <h4>🏆 Palmarés</h4>\n        ' +
      a0_0x223330("Títulos de pilotos", _0x4f382e) +
      "\n        " +
      a0_0x223330("Pilotos en la historia", _0x3426a1.length || "—") +
      "\n        " +
      a0_0x223330("Nombres a lo largo del tiempo", _0x1cab10) +
      '\n      </div>\n      <div class="box">\n        <h4>🧑‍✈️ Pilotos ' +
      a0_0x30d883 +
      "</h4>\n        " +
      (_0xfa1ec6.length
        ? _0xfa1ec6
            .map((_0x593a0a) =>
              a0_0x223330(_0x593a0a.name, _0x593a0a.pts + " pts"),
            )
            .join("")
        : '<p class="muted">Sin pilotos esta temporada.</p>') +
      '\n      </div>\n    </div>\n\n    <div class="box" style="margin-top:18px">\n      <h4>👥 Pilotos que pasaron por la escudería</h4>\n      <div class="tpills">' +
      _0x33af6e +
      "</div>\n    </div>",
  );
}
function a0_0x530c63(_0x31e865, _0x5c6e7e) {
  _0x5c6e7e.textContent =
    a0_0x484245.teams.length + " escuderías en la parrilla " + a0_0x30d883;
  _0x31e865.innerHTML = a0_0x484245.teams
    .map((_0x4f205c, _0x1fedfe) => {
      const _0x15cdd4 = a0_0x484245.drivers.filter(
        (_0x346132) => _0x346132.team === _0x4f205c.id,
      );
      const _0x48b1ef = _0x4f205c.color;
      return (
        '\n    <article class="glass dcard team-card" data-team="' +
        a0_0x4046d8(_0x4f205c.name) +
        '" tabindex="0" role="button" style="--c:' +
        _0x48b1ef +
        '">\n      <div class="dc-hel team-hel">' +
        a0_0x3977a5(_0x4f205c.name, _0x4f205c.id) +
        '</div>\n      <div class="dhead"><span class="dnum" style="font-size:22px">' +
        _0x4f205c.pts +
        '</span><span class="dcode">' +
        a0_0x4046d8(_0x4f205c.name.split(" ")[0].slice(0, 3).toUpperCase()) +
        "</span></div>\n      <h3>" +
        a0_0x4046d8(a0_0x46cabb(_0x4f205c.name)) +
        '</h3>\n      <p class="dteam"><span class="dot" style="background:' +
        _0x48b1ef +
        '"></span>' +
        (_0x15cdd4
          .map((_0x4d6a68) => a0_0x4046d8(a0_0x308c9d(_0x4d6a68.name)))
          .join(" · ") || "—") +
        '</p>\n      <div class="dfoot"><span>' +
        _0x15cdd4.length +
        " pilotos</span><span>" +
        (_0x1fedfe + 1) +
        ".º en el mundial</span></div>\n    </article>"
      );
    })
    .join("");
}
async function a0_0x458ab6(_0x3cbc21, _0x1aae51) {
  if (!a0_0x4722c6.drv) {
    _0x3cbc21.innerHTML = "";
    _0x1aae51.textContent = "Cargando historial de escuderías…";
    try {
      await a0_0x2be657();
    } catch (_0x4b687e) {
      console.warn(_0x4b687e);
      _0x3cbc21.innerHTML = "";
      _0x1aae51.innerHTML =
        'No se pudo cargar el historial. <button class="btn-sm" data-retry>Reintentar</button>';
      return;
    }
    if (a0_0x2fde53 !== "hist") {
      return;
    }
  }
  const _0x380524 = a0_0x2c57c6(a0_0x25118d);
  const _0x3f9851 = a0_0x5663ac()
    .filter(
      (_0x343543) =>
        !_0x380524 || a0_0x2c57c6(_0x343543.key).includes(_0x380524),
    )
    .sort(
      (_0x4e45ea, _0x389d5d) => _0x389d5d.drivers.size - _0x4e45ea.drivers.size,
    );
  _0x1aae51.textContent =
    _0x3f9851.length +
    " " +
    (_0x3f9851.length === 1 ? "escudería" : "escuderías") +
    " en la historia de la F1";
  _0x3cbc21.innerHTML = _0x3f9851
    .map((_0x11c5c1) => {
      const _0x5e7725 = [..._0x11c5c1.names];
      const _0x1682e8 = a0_0x126f94(_0x5e7725[0]);
      const _0x3d8c2f = [..._0x11c5c1.drivers].slice(0, 6);
      return (
        '\n    <article class="glass hcard" style="--c:' +
        _0x1682e8 +
        '">\n      <div class="hc-head">\n        <span class="hc-years">' +
        a0_0x4046d8(_0x5e7725.map(a0_0x46cabb).join(" → ")) +
        "</span>\n      </div>\n      <h3>" +
        a0_0x4046d8(a0_0x46cabb(_0x11c5c1.key)) +
        '</h3>\n      <p class="hc-sub">' +
        _0x11c5c1.drivers.size +
        ' pilotos pasaron por el equipo</p>\n      <div class="hc-teams">' +
        _0x3d8c2f
          .map(
            (_0x3afff8) =>
              '<span class="tpill" style="--c:' +
              _0x1682e8 +
              '">' +
              a0_0x4046d8(_0x3afff8) +
              "</span>",
          )
          .join("") +
        (_0x11c5c1.drivers.size > 6
          ? '<span class="tpill more">+' +
            (_0x11c5c1.drivers.size - 6) +
            "</span>"
          : "") +
        "</div>\n    </article>"
      );
    })
    .join("");
}
function a0_0x6c39cf(_0x220b08, _0x556593) {
  const _0x59b62d = {};
  a0_0x484245.champs.forEach((_0x4a4cfd) => {
    const _0x3c3fdd = a0_0x36050d(_0x4a4cfd.team);
    _0x59b62d[_0x3c3fdd] ??= {
      key: _0x3c3fdd,
      titles: [],
    };
    _0x59b62d[_0x3c3fdd].titles.push(_0x4a4cfd);
  });
  const _0x32f3d2 = Object.values(_0x59b62d).sort(
    (_0xf36e42, _0xddfeca) => _0xddfeca.titles.length - _0xf36e42.titles.length,
  );
  _0x556593.textContent =
    "Escuderías que alguna vez ganaron un campeonato mundial de pilotos.";
  _0x220b08.innerHTML = _0x32f3d2
    .map(
      (_0x426b75) =>
        '\n    <article class="glass dc">\n      <div class="dc-top"><span class="dc-num">' +
        _0x426b75.titles.length +
        '</span><span class="dc-lbl">' +
        (_0x426b75.titles.length === 1 ? "título" : "títulos") +
        "</span></div>\n      <h3>" +
        a0_0x4046d8(a0_0x46cabb(_0x426b75.key)) +
        '</h3>\n      <div class="yrs">' +
        _0x426b75.titles
          .sort((_0x5bf12f, _0x31bfb5) => _0x5bf12f.season - _0x31bfb5.season)
          .map(
            (_0xa43b57) => '<span class="yr">' + _0xa43b57.season + "</span>",
          )
          .join("") +
        "</div>\n    </article>",
    )
    .join("");
}
function a0_0x34ca68() {
  const _0x532ad9 = a0_0x3f0359("#teamGrid");
  const _0xda8c5c = a0_0x3f0359("#teamStatus");
  const _0x4dc5f8 = a0_0x3f0359("#teamTools");
  if (!_0x532ad9) {
    return;
  }
  _0x4dc5f8.style.display = a0_0x2fde53 === "hist" ? "flex" : "none";
  document
    .querySelectorAll("#teamTabs .chip")
    .forEach((_0x52ae49) =>
      _0x52ae49.classList.toggle("on", _0x52ae49.dataset.tt === a0_0x2fde53),
    );
  if (a0_0x484245.source === "local") {
    _0x532ad9.innerHTML = "";
    _0xda8c5c.textContent = "Las escuderías requieren conexión a la API.";
    return;
  }
  if (a0_0x2fde53 === "act") {
    return a0_0x530c63(_0x532ad9, _0xda8c5c);
  }
  if (a0_0x2fde53 === "hof") {
    return a0_0x6c39cf(_0x532ad9, _0xda8c5c);
  }
  a0_0x458ab6(_0x532ad9, _0xda8c5c);
}
function a0_0x49a638(_0x5b31a5) {
  document
    .querySelectorAll(".view")
    .forEach((_0x45a0c1) =>
      _0x45a0c1.classList.toggle("active", _0x45a0c1.id === "v-" + _0x5b31a5),
    );
  document
    .querySelectorAll(".tab")
    .forEach((_0x1c8a6b) =>
      _0x1c8a6b.classList.toggle(
        "active",
        _0x1c8a6b.dataset.view === _0x5b31a5,
      ),
    );
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  if (_0x5b31a5 === "pilotos") {
    a0_0x5bdb86();
  }
  if (_0x5b31a5 === "escuderias") {
    a0_0x34ca68();
  }
  if (_0x5b31a5 === "info") {
    a0_0x4a1ad6();
  }
}
function a0_0x2701db(_0x1a5219 = {}) {
  const _0x1dbfe5 = {};
  Object.values(_0x1a5219).forEach((_0x3a4416) => {
    _0x3a4416.race.forEach((_0x13ad41, _0x3aa145) => {
      if (_0x13ad41) {
        _0x1dbfe5[_0x13ad41] = (_0x1dbfe5[_0x13ad41] || 0) + PTS[_0x3aa145];
      }
    });
    _0x3a4416.sprint.forEach((_0x5447e5, _0x581922) => {
      if (_0x5447e5) {
        _0x1dbfe5[_0x5447e5] = (_0x1dbfe5[_0x5447e5] || 0) + SPR[_0x581922];
      }
    });
  });
  const _0x3dc17c = a0_0x484245.drivers
    .map((_0x485bb3) => ({
      ..._0x485bb3,
      pts: _0x485bb3.basePts + (_0x1dbfe5[_0x485bb3.id] || 0),
    }))
    .sort((_0x1520fe, _0x198868) => _0x198868.pts - _0x1520fe.pts);
  const _0x2ec010 = a0_0x484245.teams
    .map((_0x376e44) => ({
      ..._0x376e44,
      pts:
        _0x376e44.pts +
        a0_0x484245.drivers
          .filter((_0x5ba47f) => _0x5ba47f.team === _0x376e44.id)
          .reduce(
            (_0x30a3cd, _0x1c42c0) =>
              _0x30a3cd + (_0x1dbfe5[_0x1c42c0.id] || 0),
            0,
          ),
    }))
    .sort((_0x39df50, _0x3f59df) => _0x3f59df.pts - _0x39df50.pts);
  return {
    drivers: _0x3dc17c,
    teams: _0x2ec010,
  };
}
const a0_0x540bfa = (_0xe986d4) => new Date(_0xe986d4.when) < new Date();
const a0_0x5d35ca = (_0x27d8e9) =>
  !_0x27d8e9.done && _0x27d8e9.sessions.some(a0_0x540bfa);
let a0_0xeca4b2 = null;
function a0_0x281a63() {
  const _0x81d2af = a0_0x460271();
  const _0x24e2ee = a0_0x2701db().drivers[0];
  if (_0x81d2af) {
    a0_0x3f0359("#nextName").textContent = _0x81d2af.name;
    a0_0x3f0359("#nextDate").textContent =
      _0x81d2af.dateLabel +
      " · " +
      (a0_0x5d35ca(_0x81d2af)
        ? "Fin de semana en curso · cuenta regresiva a la carrera"
        : _0x81d2af.sprint
          ? "Formato Sprint"
          : "Fin de semana estándar");
    a0_0xeb3c54(_0x81d2af.when);
  } else {
    a0_0x3f0359("#nextName").textContent = "Temporada finalizada";
    a0_0x3f0359("#nextDate").textContent = "";
  }
  a0_0x3f0359("#stTotal").textContent = a0_0x484245.calendar.length;
  a0_0x3f0359("#stDone").textContent = a0_0x484245.calendar.filter(
    (_0x524d58) => _0x524d58.done,
  ).length;
  a0_0x3f0359("#stLeft").textContent = a0_0x484245.calendar.filter(
    (_0x264b62) => !_0x264b62.done,
  ).length;
  a0_0x3f0359("#stLeader").textContent = a0_0x308c9d(_0x24e2ee.name);
  a0_0x3f0359("#stLeaderPts").textContent =
    _0x24e2ee.pts + " pts · " + _0x24e2ee.teamName;
  a0_0x3f0359("#upList").innerHTML = a0_0x484245.calendar
    .filter((_0x4d7892) => !_0x4d7892.done)
    .map(
      (_0x3ea36e) =>
        '<div class="up" data-race="' +
        _0x3ea36e.id +
        '"><span>' +
        _0x3ea36e.flag +
        " &nbsp;" +
        a0_0x4046d8(_0x3ea36e.name) +
        (a0_0x5d35ca(_0x3ea36e) ? " · En curso" : "") +
        "</span><small>" +
        a0_0x4046d8(_0x3ea36e.dateLabel) +
        "</small></div>",
    )
    .join("");
}
function a0_0xeb3c54(_0x18336a) {
  clearInterval(a0_0xeca4b2);
  const _0x13c748 = new Date(_0x18336a);
  const _0xc8a166 = (_0x409749) => String(_0x409749).padStart(2, "0");
  const _0x2fc297 = () => {
    const _0x1237d1 = Math.max(0, _0x13c748 - new Date());
    a0_0x3f0359("#cdD").textContent = _0xc8a166(
      Math.floor(_0x1237d1 / 86400000),
    );
    a0_0x3f0359("#cdH").textContent = _0xc8a166(
      Math.floor(_0x1237d1 / 3600000) % 24,
    );
    a0_0x3f0359("#cdM").textContent = _0xc8a166(
      Math.floor(_0x1237d1 / 60000) % 60,
    );
    a0_0x3f0359("#cdS").textContent = _0xc8a166(
      Math.floor(_0x1237d1 / 1000) % 60,
    );
  };
  _0x2fc297();
  a0_0xeca4b2 = setInterval(_0x2fc297, 1000);
}
let a0_0x17ad36 = "upcoming";
function a0_0x721060() {
  const _0x33a811 = a0_0x460271();
  const _0x4a8b56 = a0_0x484245.calendar.filter(
    (_0x42c2e7) =>
      a0_0x17ad36 === "all" ||
      (a0_0x17ad36 === "done" ? _0x42c2e7.done : !_0x42c2e7.done),
  );
  a0_0x3f0359("#calGrid").innerHTML =
    _0x4a8b56
      .map((_0xdfdef1) => {
        const _0x147325 = _0x33a811 && _0xdfdef1.id === _0x33a811.id;
        const _0x304a54 = a0_0x5d35ca(_0xdfdef1);
        const _0x383b86 = _0xdfdef1.done
          ? "Finalizada"
          : _0x304a54
            ? "En curso"
            : _0x147325
              ? "Próxima"
              : "Programada";
        const _0x18ed01 = _0xdfdef1.done
          ? "b-done"
          : _0x304a54
            ? "b-sprint"
            : _0x147325
              ? "b-next"
              : "b-soon";
        const _0x111a39 = _0x304a54
          ? "Sesiones previas disputadas · carrera pendiente"
          : _0xdfdef1.sprint
            ? "⚡ Formato Sprint"
            : "Fin de semana estándar";
        return (
          '\n    <article class="glass race ' +
          (_0xdfdef1.done ? "done" : "") +
          " " +
          (_0x147325 ? "next" : "") +
          '" data-race="' +
          _0xdfdef1.id +
          '">\n      <div class="rnd">RONDA ' +
          String(_0xdfdef1.round).padStart(2, "0") +
          " · " +
          a0_0x4046d8(_0xdfdef1.dateLabel) +
          '</div>\n      <div class="flag">' +
          _0xdfdef1.flag +
          "</div>\n      <h3>" +
          a0_0x4046d8(_0xdfdef1.name) +
          '</h3>\n      <div class="sub">' +
          _0x111a39 +
          '</div>\n      <div class="foot">\n        <span class="badge ' +
          _0x18ed01 +
          '">' +
          _0x383b86 +
          "</span>\n        <span>" +
          (_0xdfdef1.done ? "Ver resultados →" : "Ver ficha →") +
          "</span>\n      </div>\n    </article>"
        );
      })
      .join("") || '<p class="muted">No hay rondas en este filtro.</p>';
}
function a0_0x4491d0(_0x30aa8a) {
  a0_0x3f0359("#mBody").innerHTML = _0x30aa8a;
  a0_0x3f0359("#modal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function a0_0x5c7976() {
  a0_0x3f0359("#modal").classList.remove("open");
  document.body.style.overflow = "";
  a0_0x522712 = null;
}
const a0_0x6161b8 = (_0x334168) =>
  '\n  <span class="eyebrow">Ronda ' +
  _0x334168.round +
  " · " +
  a0_0x4046d8(_0x334168.dateLabel) +
  '</span>\n  <h3 class="display m-title">' +
  a0_0x4046d8(_0x334168.name) +
  "</h3>";
function a0_0x41dae1(_0x200392) {
  if (!_0x200392.sessions.length) {
    return '<p class="muted">Horarios no disponibles. Se cargan desde la API cuando hay conexión.</p>';
  }
  const _0xb33f13 = new Date();
  const _0x5a4aa1 = _0x200392.sessions.findIndex(
    (_0x107b94) => new Date(_0x107b94.when) > _0xb33f13,
  );
  return (
    '<div class="sess-grid">' +
    _0x200392.sessions
      .map((_0x931690, _0x1e70c4) => {
        const _0x229d3a = new Date(_0x931690.when) < _0xb33f13;
        const _0x29f533 = _0x1e70c4 === _0x5a4aa1;
        return (
          '\n      <div class="sess ' +
          (_0x229d3a ? "past" : "") +
          " " +
          (_0x29f533 ? "is-next" : "") +
          '">\n        <span class="sess-name">' +
          a0_0x4046d8(_0x931690.name) +
          '</span>\n        <strong class="sess-time">' +
          (_0x931690.tbc
            ? "Por confirmar"
            : a0_0x2f84a1(_0x931690.when) + " hs") +
          "</strong>\n        <small>" +
          (_0x931690.tbc ? "" : a0_0x5f0171(_0x931690.when)) +
          "</small>\n      </div>"
        );
      })
      .join("") +
    "</div>"
  );
}
function a0_0x3fdc15(_0x33e1e1, _0x247d47) {
  const _0x4a7a6a = _0x247d47.quali
    .map(
      (_0x279e1d) =>
        '<div class="line"><span>P' +
        _0x279e1d.pos +
        " · " +
        a0_0x4046d8(_0x279e1d.name) +
        "</span><strong>" +
        a0_0x4046d8(_0x279e1d.time) +
        "</strong></div>",
    )
    .join("");
  const _0x17775e = _0x247d47.sprint
    .map(
      (_0x3483a1) =>
        '<div class="line"><span>P' +
        _0x3483a1.pos +
        " · " +
        a0_0x4046d8(_0x3483a1.name) +
        "</span><strong>+" +
        _0x3483a1.pts +
        "</strong></div>",
    )
    .join("");
  return (
    '\n    <div class="m-grid">\n      <div class="box"><h4>🏁 Clasificación · Top 3</h4>' +
    (_0x4a7a6a || '<p class="muted">Todavía no hay resultados.</p>') +
    "</div>\n      " +
    (_0x33e1e1.sprint
      ? '<div class="box"><h4>⚡ Sprint · Top 3</h4>' +
        (_0x17775e || '<p class="muted">Todavía no hay resultados.</p>') +
        "</div>"
      : "") +
    '\n    </div>\n    <p class="muted" style="font-size:13px;line-height:1.6;margin-top:12px">Los resultados de la carrera se mostrarán aquí cuando termine.</p>'
  );
}
async function a0_0x50f42b(_0x5d6804) {
  const _0x4562e2 = a0_0x484245.calendar.find(
    (_0x6bf936) => _0x6bf936.id === _0x5d6804,
  );
  if (!_0x4562e2) {
    return;
  }
  if (!_0x4562e2.done) {
    const _0x4e14d7 = a0_0x5d35ca(_0x4562e2);
    const _0x2c69cf = a0_0x460271();
    const _0x5ce2e4 = _0x4e14d7
      ? "Fin de semana en curso"
      : _0x2c69cf && _0x2c69cf.id === _0x4562e2.id
        ? "Próximo Gran Premio"
        : "Programado";
    const _0x3bbd0c = _0x4562e2.sprint
      ? "Fin de semana con Sprint. La clasificación Sprint fija la parrilla de la Carrera Sprint, que reparte puntos del 1.º al 8.º (8-7-6-5-4-3-2-1). La clasificación principal fija la parrilla de la carrera."
      : "Fin de semana estándar. La clasificación principal fija la parrilla de la carrera, que reparte puntos del 1.º al 10.º (25-18-15-12-10-8-6-4-2-1).";
    a0_0x4491d0(
      a0_0x6161b8(_0x4562e2) +
        '\n      <div class="box" style="margin-bottom:18px">\n        <h4>📅 Horarios · Hora de Argentina (ART)</h4>\n        ' +
        a0_0x41dae1(_0x4562e2) +
        "\n      </div>\n      " +
        (_0x4e14d7
          ? '<div id="liveRes" style="margin-bottom:18px"><p class="muted" style="font-size:14px">Cargando resultados de las sesiones ya disputadas…</p></div>'
          : "") +
        '\n      <div class="m-grid">\n        <div class="box">\n          <h4>ℹ️ Detalles</h4>\n          <div class="line"><span>Circuito</span><strong>' +
        a0_0x4046d8(_0x4562e2.circuit || "—") +
        '</strong></div>\n          <div class="line"><span>Ubicación</span><strong>' +
        a0_0x4046d8(_0x4562e2.place || "—") +
        '</strong></div>\n          <div class="line"><span>Formato</span><strong>' +
        (_0x4562e2.sprint ? "Con Sprint" : "Estándar") +
        '</strong></div>\n          <div class="line"><span>Estado</span><strong>' +
        _0x5ce2e4 +
        '</strong></div>\n        </div>\n        <div class="box">\n          <h4>💡 Lo que hay que saber</h4>\n          <p class="muted" style="font-size:14px;line-height:1.7">' +
        _0x3bbd0c +
        '</p>\n          <p class="muted" style="font-size:14px;line-height:1.7;margin-top:10px">Los horarios se muestran en hora de Argentina (UTC−3), sin cambio de horario.</p>\n        </div>\n      </div>',
    );
    if (_0x4e14d7) {
      const _0x1f43a4 = () => document.getElementById("liveRes");
      if (a0_0x484245.source === "local") {
        if (_0x1f43a4()) {
          _0x1f43a4().innerHTML =
            '<div class="box"><p class="muted">Los resultados requieren conexión a la API.</p></div>';
        }
        return;
      }
      try {
        const _0x33eb8f = await a0_0x5632f4(_0x4562e2.round);
        if (_0x1f43a4()) {
          _0x1f43a4().innerHTML = a0_0x3fdc15(_0x4562e2, _0x33eb8f);
        }
      } catch (_0x4ae06f) {
        console.warn(_0x4ae06f);
        if (_0x1f43a4()) {
          _0x1f43a4().innerHTML =
            '<div class="box"><p class="muted">No se pudieron cargar los resultados de las sesiones. Intenta más tarde.</p></div>';
        }
      }
    }
    return;
  }
  if (a0_0x484245.source === "local") {
    return a0_0x4491d0(
      a0_0x6161b8(_0x4562e2) +
        '\n      <div class="box"><p class="muted">Los resultados por carrera requieren conexión a la API.</p></div>',
    );
  }
  a0_0x4491d0(
    a0_0x6161b8(_0x4562e2) + '<p class="muted">Cargando resultados…</p>',
  );
  try {
    const _0x2ff9b7 = await a0_0x5632f4(_0x4562e2.round);
    a0_0x3f0359("#mBody").innerHTML = a0_0x5ec2f5(_0x4562e2, _0x2ff9b7);
  } catch (_0x1845f7) {
    console.warn(_0x1845f7);
    a0_0x3f0359("#mBody").innerHTML =
      a0_0x6161b8(_0x4562e2) +
      '\n      <div class="box"><p class="muted">No se pudieron cargar los resultados. Intenta de nuevo más tarde.</p></div>';
  }
}
async function a0_0x5632f4(_0x4a2fc3) {
  if (a0_0x484245.calendar_cache_dummy) {
    return;
  } // no-op, evita colisión de nombres
  if (a0_0x484245._res && a0_0x484245._res[_0x4a2fc3]) {
    return a0_0x484245._res[_0x4a2fc3];
  }
  const [race, quali, sprint, drivers, teams, fastest] = await Promise.all([
    a0_0x182c22("/" + a0_0x30d883 + "/" + _0x4a2fc3 + "/results.json"),
    a0_0x182c22("/" + a0_0x30d883 + "/" + _0x4a2fc3 + "/qualifying.json"),
    a0_0x182c22("/" + a0_0x30d883 + "/" + _0x4a2fc3 + "/sprint.json"),
    a0_0x182c22("/" + a0_0x30d883 + "/" + _0x4a2fc3 + "/driverStandings.json"),
    a0_0x182c22(
      "/" + a0_0x30d883 + "/" + _0x4a2fc3 + "/constructorStandings.json",
    ),
    a0_0x182c22(
      "/" + a0_0x30d883 + "/" + _0x4a2fc3 + "/fastest/1/results.json",
    ).catch(() => null),
  ]);
  const _0x473da8 = (_0x5d3989, _0x3d72fb) =>
    _0x5d3989.status === 200 ? _0x3d72fb(_0x5d3989.value) : [];
  const out = {
    race: (race.MRData.RaceTable.Races[0]?.Results || []).map((r) => ({
      pos: r.position,
      name: a0_0x505882(r.Driver),
      team: r.Constructor.name,
      pts: r.points,
      time: r.Time?.time || r.status,
    })),
    quali: (quali.MRData.RaceTable.Races[0]?.QualifyingResults || [])
      .slice(0, 3)
      .map((q) => ({
        pos: q.position,
        name: a0_0x505882(q.Driver),
        time: q.Q3 || q.Q2 || q.Q1 || "—",
      })),
    sprint: (sprint.MRData.RaceTable.Races[0]?.SprintResults || [])
      .slice(0, 3)
      .map((s) => ({
        pos: s.position,
        name: a0_0x505882(s.Driver),
        pts: s.points,
      })),
    fastest: (() => {
      const r = fastest?.MRData?.RaceTable?.Races?.[0]?.Results?.[0];
      if (!r || !r.FastestLap) {
        return null;
      }
      return {
        name: a0_0x505882(r.Driver),
        team: r.Constructor.name,
        time: r.FastestLap.Time?.time || "—",
      };
    })(),
    drivers: (
      drivers.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || []
    ).map((d) => ({
      pos: d.position,
      name: a0_0x505882(d.Driver),
      pts: d.points,
    })),
    teams: (
      teams.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || []
    ).map((t) => ({
      pos: t.position,
      name: t.Constructor.name,
      pts: t.points,
    })),
  };
  if (out.race.length) {
    a0_0x484245._res = {
      ...(a0_0x484245._res || {}),
      [_0x4a2fc3]: out,
    };
  }
  return out;
}
function a0_0x5ec2f5(_0x9acbe9, _0xbd2bc9) {
  if (!_0xbd2bc9.race.length) {
    return (
      a0_0x6161b8(_0x9acbe9) +
      '<div class="box"><p class="muted">Aún no hay resultados publicados para esta ronda.</p></div>'
    );
  }
  const _0x3cbb81 = _0xbd2bc9.quali
    .map(
      (_0x4c88aa) =>
        '<div class="line"><span>P' +
        _0x4c88aa.pos +
        " · " +
        a0_0x4046d8(_0x4c88aa.name) +
        "</span><strong>" +
        a0_0x4046d8(_0x4c88aa.time) +
        "</strong></div>",
    )
    .join("");
  const _0x214fe7 = _0xbd2bc9.sprint
    .map(
      (_0x1971e8) =>
        '<div class="line"><span>P' +
        _0x1971e8.pos +
        " · " +
        a0_0x4046d8(_0x1971e8.name) +
        "</span><strong>+" +
        _0x1971e8.pts +
        "</strong></div>",
    )
    .join("");
  return (
    a0_0x6161b8(_0x9acbe9) +
    '\n    <div class="m-grid">\n      <div class="box"><h4>🏁 Clasificación · Top 3</h4>' +
    (_0x3cbb81 || '<p class="muted">Sin datos</p>') +
    "</div>\n      " +
    (_0x9acbe9.sprint
      ? '<div class="box"><h4>⚡ Sprint · Top 3</h4>' +
        (_0x214fe7 || '<p class="muted">Sin datos</p>') +
        "</div>"
      : "") +
    '\n    </div>\n\n    <div class="box" style="margin-top:18px">\n      <h4>🏆 Top 10 · Carrera principal</h4>\n      <div class="top10">\n        ' +
    _0xbd2bc9.race
      .slice(0, 10)
      .map(
        (_0x3e670c) =>
          '\n          <div class="p10" style="border-top:2px solid ' +
          a0_0x140a0c(_0x3e670c.team) +
          '">\n            <div class="k">P' +
          _0x3e670c.pos +
          '</div>\n            <div class="nm">' +
          a0_0x4046d8(_0x3e670c.name) +
          '</div>\n            <div class="tm">' +
          a0_0x4046d8(_0x3e670c.team) +
          '</div>\n            <div class="pt">+' +
          _0x3e670c.pts +
          " pts</div>\n          </div>",
      )
      .join("") +
    '\n      </div>\n    </div>\n\n    <div class="m-grid" style="margin-top:18px">\n      <div class="box"><h4>📊 Mundial de pilotos tras la carrera</h4>\n        <div class="scroll">' +
    _0xbd2bc9.drivers
      .map(
        (_0x2db62a) =>
          '<div class="line"><span><span class="muted mono">#' +
          _0x2db62a.pos +
          "</span> &nbsp;" +
          a0_0x4046d8(_0x2db62a.name) +
          "</span><strong>" +
          _0x2db62a.pts +
          "</strong></div>",
      )
      .join("") +
    '</div>\n      </div>\n      <div class="box"><h4>🛡️ Mundial de constructores tras la carrera</h4>\n        <div class="scroll">' +
    _0xbd2bc9.teams
      .map(
        (_0x5b8c3e) =>
          '<div class="line"><span><span class="muted mono">#' +
          _0x5b8c3e.pos +
          "</span> &nbsp;" +
          a0_0x4046d8(_0x5b8c3e.name) +
          "</span><strong>" +
          _0x5b8c3e.pts +
          "</strong></div>",
      )
      .join("") +
    "</div>\n      </div>\n    </div>"
  );
}
function a0_0x3bef71() {
  const { drivers: _0x39e4ad, teams: _0x2459c3 } = a0_0x2701db(a0_0x484245.sim);
  const _0x183993 = _0x39e4ad[0].pts || 1;
  const _0x34cbfa = _0x2459c3[0].pts || 1;
  a0_0x3f0359("#drvTable").innerHTML = _0x39e4ad
    .map(
      (_0x5750dc, _0x4b39c0) =>
        '\n    <div class="srow">\n      <span class="pos">' +
        String(_0x4b39c0 + 1).padStart(2, "0") +
        '</span>\n      <div class="who"><b>' +
        a0_0x4046d8(_0x5750dc.name) +
        '</b>\n        <div class="bar"><i style="width:' +
        (_0x5750dc.pts / _0x183993) * 100 +
        "%;background:" +
        a0_0x140a0c(_0x5750dc.teamName) +
        '"></i></div>\n        <small>' +
        a0_0x4046d8(_0x5750dc.teamName) +
        '</small></div>\n      <span class="pts">' +
        _0x5750dc.pts +
        "</span>\n    </div>",
    )
    .join("");
  a0_0x3f0359("#teamTable").innerHTML = _0x2459c3
    .map(
      (_0x513ecf, _0x253f8c) =>
        '\n    <div class="srow">\n      <span class="pos">' +
        String(_0x253f8c + 1).padStart(2, "0") +
        '</span>\n      <div class="who"><b><span class="dot" style="background:' +
        _0x513ecf.color +
        '"></span>' +
        a0_0x4046d8(_0x513ecf.name) +
        '</b>\n        <div class="bar"><i style="width:' +
        (_0x513ecf.pts / _0x34cbfa) * 100 +
        "%;background:" +
        _0x513ecf.color +
        '"></i></div></div>\n      <span class="pts">' +
        _0x513ecf.pts +
        "</span>\n    </div>",
    )
    .join("");
  a0_0x2d0f62();
}
const a0_0x11512c = () =>
  a0_0x484245.calendar
    .filter((_0x1aa6e5) => !_0x1aa6e5.done)
    .map((_0x494a3d) => ({
      id: _0x494a3d.id,
      name: _0x494a3d.name,
      round: _0x494a3d.round,
      sprint: _0x494a3d.sprint,
    }));
const a0_0x488604 = (_0x59ffe8) =>
  _0x59ffe8.flatMap((_0x5d2874) => {
    const _0x135ba0 = [
      {
        key: _0x5d2874.id + "-m",
        race: _0x5d2874,
        sprint: false,
      },
    ];
    if (_0x5d2874.sprint) {
      _0x135ba0.push({
        key: _0x5d2874.id + "-s",
        race: _0x5d2874,
        sprint: true,
      });
    }
    return _0x135ba0;
  });
const a0_0x14403c = 40000;
function a0_0x51aafc(_0x1e1fd4, _0x5cd9f5, _0x28a02a) {
  const _0x391a19 = {};
  const _0x537a00 = {};
  _0x5cd9f5.forEach((_0x4cf9b6) => {
    _0x391a19[_0x4cf9b6] = _0x28a02a[_0x4cf9b6];
    _0x537a00[_0x4cf9b6] = new Set();
  });
  const _0x4c1aa0 = new Array(_0x1e1fd4.length + 1).fill(0);
  for (let _0x583079 = _0x1e1fd4.length - 1; _0x583079 >= 0; _0x583079--) {
    _0x4c1aa0[_0x583079] = _0x4c1aa0[_0x583079 + 1] + _0x1e1fd4[_0x583079].v;
  }
  let _0x3f2e42 = 0;
  const _0x1d7204 = (_0x4942f4) => {
    if (_0x4942f4 === _0x1e1fd4.length) {
      return true;
    }
    if (++_0x3f2e42 > a0_0x14403c) {
      return false;
    }
    let _0x250f34 = 0;
    for (const _0xb0964a of _0x5cd9f5) {
      _0x250f34 += _0x391a19[_0xb0964a];
    }
    if (_0x250f34 < _0x4c1aa0[_0x4942f4]) {
      return false;
    }
    const _0x2d1191 = _0x1e1fd4[_0x4942f4];
    const _0x27e1d8 = _0x5cd9f5
      .filter(
        (_0x5a7d1c) =>
          !_0x537a00[_0x5a7d1c].has(_0x2d1191.sess) &&
          _0x391a19[_0x5a7d1c] >= _0x2d1191.v,
      )
      .sort(
        (_0x23dc55, _0x243e36) =>
          _0x391a19[_0x23dc55] - _0x391a19[_0x243e36] ||
          (_0x23dc55 < _0x243e36 ? -1 : 1),
      );
    const _0x23f57e = new Set();
    for (const _0x5cdad1 of _0x27e1d8) {
      const _0x1496db =
        _0x391a19[_0x5cdad1] + "|" + [..._0x537a00[_0x5cdad1]].sort().join(",");
      if (_0x23f57e.has(_0x1496db)) {
        continue;
      }
      _0x23f57e.add(_0x1496db);
      _0x391a19[_0x5cdad1] -= _0x2d1191.v;
      _0x537a00[_0x5cdad1].add(_0x2d1191.sess);
      if (_0x1d7204(_0x4942f4 + 1)) {
        return true;
      }
      _0x537a00[_0x5cdad1].delete(_0x2d1191.sess);
      _0x391a19[_0x5cdad1] += _0x2d1191.v;
    }
    return false;
  };
  return _0x1d7204(0);
}
function a0_0x3f011b(_0x3b22c0, _0x54f69b, _0x23f565) {
  const _0x2cbeda = _0x54f69b.find((_0x3b8e80) => _0x3b8e80.id === _0x3b22c0);
  let _0x25e82d = 0;
  _0x23f565.forEach((_0x6ced41) => {
    _0x25e82d += _0x6ced41.sprint ? SPR[0] : PTS[0];
  });
  const _0x134909 = _0x2cbeda.pts + _0x25e82d;
  const _0x150784 = _0x54f69b.filter((_0xde28e5) => _0xde28e5.id !== _0x3b22c0);
  const _0x286bff = {};
  for (const _0x225ff0 of _0x150784) {
    _0x286bff[_0x225ff0.id] = _0x134909 - _0x225ff0.pts;
    if (_0x286bff[_0x225ff0.id] < 0) {
      return false;
    }
  }
  const _0x51b646 = [];
  _0x23f565.forEach((_0x576b47) => {
    const _0x38f77e = _0x576b47.sprint ? SPR : PTS;
    _0x38f77e.forEach((_0x2c91ee, _0x2fa064) => {
      if (_0x2fa064 > 0) {
        _0x51b646.push({
          sess: _0x576b47.key,
          pos: _0x2fa064 + 1,
          v: _0x2c91ee,
        });
      }
    });
  });
  _0x51b646.sort((_0x196e86, _0x5caf6b) => _0x5caf6b.v - _0x196e86.v);
  return a0_0x51aafc(
    _0x51b646,
    _0x150784.map((_0x36d69f) => _0x36d69f.id),
    _0x286bff,
  );
}
let a0_0x3343d3 = {
  key: "",
  val: null,
};
function a0_0x408c8e() {
  const { drivers: _0x484d95 } = a0_0x2701db(a0_0x484245.sim);
  const _0x17aeaa = a0_0x11512c();
  const _0x49b681 = JSON.stringify([
    _0x484d95.map((_0x276a0f) => [_0x276a0f.id, _0x276a0f.pts]),
    _0x17aeaa.map((_0x3d0a29) => [_0x3d0a29.id, _0x3d0a29.sprint]),
  ]);
  if (a0_0x3343d3.key === _0x49b681) {
    return a0_0x3343d3.val;
  }
  const _0x466f78 = _0x484d95[0];
  const _0x2a69b5 = a0_0x488604(_0x17aeaa);
  const _0x5e5adb = _0x17aeaa.reduce(
    (_0x5f34d7, _0x5579ec) =>
      _0x5f34d7 + PTS[0] + (_0x5579ec.sprint ? SPR[0] : 0),
    0,
  );
  const _0x21e7b9 = _0x484d95
    .filter((_0x300ab3) => a0_0x3f011b(_0x300ab3.id, _0x484d95, _0x2a69b5))
    .map((_0x117574) => ({
      ..._0x117574,
      max: _0x117574.pts + _0x5e5adb,
    }));
  const _0x181ac1 = {
    drivers: _0x484d95,
    leader: _0x466f78,
    open: _0x17aeaa,
    pool: _0x5e5adb,
    cands: _0x21e7b9,
  };
  a0_0x3343d3 = {
    key: _0x49b681,
    val: _0x181ac1,
  };
  return _0x181ac1;
}
function a0_0x24af5e() {
  let _0x4d23ad = a0_0x3f0359("#contenders");
  if (_0x4d23ad) {
    return _0x4d23ad;
  }
  _0x4d23ad = document.createElement("div");
  _0x4d23ad.id = "contenders";
  _0x4d23ad.className = "glass contend";
  const _0x107a0c = a0_0x3f0359("#teamTable")?.parentElement;
  if (_0x107a0c && _0x107a0c.parentElement) {
    const _0x1b7246 = document.createElement("div");
    _0x1b7246.className = "side";
    _0x107a0c.parentElement.replaceChild(_0x1b7246, _0x107a0c);
    _0x1b7246.appendChild(_0x107a0c);
    _0x1b7246.appendChild(_0x4d23ad);
  } else {
    (a0_0x3f0359("#champ-pos") || a0_0x3f0359("#v-standings")).appendChild(
      _0x4d23ad,
    );
  }
  return _0x4d23ad;
}
function a0_0x2d0f62() {
  if (a0_0x484245.source === "local") {
    const _0x5865f0 = a0_0x3f0359("#contenders");
    if (_0x5865f0) {
      _0x5865f0.style.display = "none";
    }
    return;
  }
  const _0x5916bc = a0_0x24af5e();
  _0x5916bc.style.display = "";
  const {
    drivers: _0x237392,
    leader: _0x38b5f6,
    open: _0x36d328,
    pool: _0x4bcc51,
    cands: _0x53fd92,
  } = a0_0x408c8e();
  const _0x3593dd = _0x36d328.length;
  const _0x1c3691 =
    '\n    <div class="ct-head">\n      <span class="eyebrow">Matemática del título</span>\n      <h3 class="display">Pilotos con chances</h3>\n      <p class="muted">' +
    (_0x3593dd
      ? "Quedan " +
        _0x3593dd +
        " " +
        (_0x3593dd === 1 ? "carrera" : "carreras") +
        " · hasta " +
        _0x4bcc51 +
        " pts por sumar"
      : "No quedan carreras por disputar") +
    "</p>\n    </div>";
  if (!_0x3593dd) {
    _0x5916bc.innerHTML =
      _0x1c3691 +
      '\n      <div class="ct-decided">\n        <span class="ct-lead">Campeón</span>\n        <b>' +
      a0_0x4046d8(_0x38b5f6.name) +
      '</b>\n        <span class="muted">' +
      _0x38b5f6.pts +
      " pts · " +
      a0_0x4046d8(a0_0x46cabb(_0x38b5f6.teamName)) +
      "</span>\n      </div>";
    return;
  }
  const _0x186145 = Math.max(
    _0x38b5f6.pts,
    ..._0x53fd92.map((_0x243828) => _0x243828.max),
    1,
  );
  const _0x53d76b = _0x36d328.filter((_0x2d22c2) => _0x2d22c2.sprint).length;
  const _0x366a51 = _0x53fd92
    .map((_0x55ee7b, _0x1779f4) => {
      const _0x616808 = a0_0x140a0c(_0x55ee7b.teamName);
      const _0x270031 = _0x55ee7b.id === _0x38b5f6.id;
      const _0x397e2e = _0x237392[1];
      const _0x525bb4 = _0x270031
        ? _0x55ee7b.pts - (_0x397e2e ? _0x397e2e.pts : 0)
        : 0;
      const _0x331a1c = _0x38b5f6.pts - _0x55ee7b.pts;
      const _0x1f19f8 = (_0x55ee7b.pts / _0x186145) * 100;
      const _0x1b4330 = ((_0x55ee7b.max - _0x55ee7b.pts) / _0x186145) * 100;
      const _0x5c414d = _0x270031
        ? '<span class="ct-need">Ventaja de ' + _0x525bb4 + " pts</span>"
        : '<span class="ct-need">Recortar ' +
          _0x331a1c +
          " pts a " +
          a0_0x4046d8(a0_0x308c9d(_0x38b5f6.name)) +
          "</span>";
      return (
        '\n    <article class="glass ct-card" style="--c:' +
        _0x616808 +
        '">\n      <div class="ct-row">\n        <span class="ct-pos">P' +
        (_0x1779f4 + 1) +
        '</span>\n        <div class="ct-info">\n          <h3>' +
        a0_0x4046d8(_0x55ee7b.name) +
        '</h3>\n          <p class="dteam"><span class="dot" style="background:' +
        _0x616808 +
        '"></span>' +
        a0_0x4046d8(a0_0x46cabb(_0x55ee7b.teamName)) +
        '</p>\n        </div>\n        <div class="ct-pts"><b>' +
        _0x55ee7b.pts +
        '</b><span>pts</span></div>\n      </div>\n      <div class="ct-bar">\n        <i class="now" style="width:' +
        _0x1f19f8.toFixed(2) +
        '%"></i>\n        <i class="pot" style="left:' +
        _0x1f19f8.toFixed(2) +
        "%;width:" +
        _0x1b4330.toFixed(2) +
        '%"></i>\n      </div>\n      <div class="ct-meta">' +
        (_0x270031
          ? "<span>Lidera el campeonato</span>"
          : "<span>Vs líder −" + _0x331a1c + "</span>") +
        "<span>Máximo " +
        _0x55ee7b.max +
        '</span></div>\n      <div class="ct-meta">' +
        _0x5c414d +
        "<span>" +
        _0x3593dd +
        " " +
        (_0x3593dd === 1 ? "carrera" : "carreras") +
        (_0x53d76b ? " · " + _0x53d76b + " Sprint" : "") +
        "</span></div>\n    </article>"
      );
    })
    .join("");
  _0x5916bc.innerHTML =
    _0x1c3691 + '<div class="ct-list">' + _0x366a51 + "</div>";
}
const a0_0x4ca195 = {};
function a0_0x7fb4d2(_0x325477, _0x1385f1) {
  if (
    _0x325477 == null ||
    _0x1385f1 == null ||
    isNaN(_0x325477) ||
    isNaN(_0x1385f1)
  ) {
    return null;
  }
  const _0x1074d8 = Math.cos((_0x325477 * Math.PI) / 180);
  let _0x55274e = null;
  let _0xd7aa = Infinity;
  a0_0xcaf996.forEach((_0x2640da) => {
    const _0x30c614 = Math.hypot(
      (_0x2640da.lon - _0x1385f1) * 111 * _0x1074d8,
      (_0x2640da.lat - _0x325477) * 111,
    );
    if (_0x30c614 < _0xd7aa) {
      _0xd7aa = _0x30c614;
      _0x55274e = _0x2640da;
    }
  });
  if (_0xd7aa <= 30) {
    return _0x55274e;
  } else {
    return null;
  }
}
async function a0_0x1f6c35(_0x2f2260) {
  const _0x529be3 = a0_0x15728b(a0_0x3db4ea) || {};
  let _0x147b30 = false;
  await Promise.all(
    _0x2f2260.map(async (_0x1da54c) => {
      if (a0_0x4ca195[_0x1da54c]) {
        return;
      }
      if (_0x529be3[_0x1da54c]) {
        a0_0x4ca195[_0x1da54c] = _0x529be3[_0x1da54c];
        return;
      }
      try {
        const _0x234372 = await fetch(a0_0x5cfe92 + _0x1da54c + ".svg");
        if (!_0x234372.ok) {
          throw new Error("HTTP " + _0x234372.status);
        }
        const _0x5e30fd = new DOMParser().parseFromString(
          await _0x234372.text(),
          "image/svg+xml",
        );
        const _0x406593 = [..._0x5e30fd.querySelectorAll("path")]
          .map((_0x1fe0bf) => _0x1fe0bf.getAttribute("d"))
          .filter(Boolean);
        a0_0x4ca195[_0x1da54c] = [...new Set(_0x406593)];
        _0x529be3[_0x1da54c] = a0_0x4ca195[_0x1da54c];
        _0x147b30 = true;
      } catch (_0x270e8b) {
        console.warn("Trazado " + _0x1da54c + ":", _0x270e8b);
      }
    }),
  );
  if (_0x147b30) {
    a0_0x2937c8(a0_0x3db4ea, _0x529be3);
  }
}
function a0_0x2b37b3(_0x41d51e) {
  const [_0x59b6a3, _0x4b5ce6, _0x2bf248, _0x4f7a6c] = _0x41d51e.bb;
  const _0x56ed65 = _0x2bf248 - _0x59b6a3;
  const _0x1aa16e = _0x4f7a6c - _0x4b5ce6;
  const _0x38b4e3 = Math.max(_0x56ed65, _0x1aa16e) * 0.04;
  const _0x5a0fa1 = [
    _0x59b6a3 - _0x38b4e3,
    _0x4b5ce6 - _0x38b4e3,
    _0x56ed65 + _0x38b4e3 * 2,
    _0x1aa16e + _0x38b4e3 * 2,
  ]
    .map((_0x545098) => _0x545098.toFixed(1))
    .join(" ");
  return (
    '<svg viewBox="' +
    _0x5a0fa1 +
    '" aria-hidden="true">' +
    a0_0x4ca195[_0x41d51e.id]
      .map((_0x2d19fd) => '<path d="' + _0x2d19fd + '"/>')
      .join("") +
    "</svg>"
  );
}
async function a0_0xcf7b97(_0x336e2a) {
  const _0x4c5799 = a0_0x7fb4d2(_0x336e2a.lat, _0x336e2a.lon);
  if (!_0x4c5799) {
    return null;
  }
  await a0_0x1f6c35([_0x4c5799.id]);
  if (a0_0x4ca195[_0x4c5799.id]) {
    return _0x4c5799;
  } else {
    return null;
  }
}
async function a0_0x4d4387(_0x1c3679) {
  const _0x26b753 = _0x1c3679.map((_0x4727ce) => ({
    c: _0x4727ce,
    t: a0_0x7fb4d2(_0x4727ce.lat, _0x4727ce.lon),
  }));
  await a0_0x1f6c35([
    ...new Set(
      _0x26b753
        .filter((_0x479d50) => _0x479d50.t)
        .map((_0x416e16) => _0x416e16.t.id),
    ),
  ]);
  _0x26b753.forEach(({ c: _0x48cbb3, t: _0x41f487 }) => {
    const _0x3b2d80 = document.querySelector(
      '.trk[data-trk="' + CSS.escape(_0x48cbb3.circuitId) + '"]',
    );
    if (!_0x3b2d80) {
      return;
    }
    _0x3b2d80.innerHTML =
      _0x41f487 && a0_0x4ca195[_0x41f487.id]
        ? a0_0x2b37b3(_0x41f487)
        : '<span class="trk-msg">Trazado no disponible</span>';
  });
}
function a0_0x3becfe() {
  const _0x3451f9 = a0_0x3f0359("#v-circuits");
  if (!_0x3451f9 || _0x3451f9.querySelector("#circTabs")) {
    return;
  }
  _0x3451f9.querySelector(".sec-head p").textContent =
    "Vigentes: los circuitos del calendario 2026. Historial: todos los que alguna vez albergaron una carrera de F1.";
  _0x3451f9
    .querySelector(".sec-head")
    .insertAdjacentHTML(
      "afterend",
      '\n    <div class="chips" id="circTabs">\n      <button class="chip on" data-ct="vig">Circuitos vigentes</button>\n      <button class="chip" data-ct="hist">Historial de circuitos</button>\n    </div>',
    );
}
async function a0_0x2f11fb() {
  if (a0_0x4722c6.hist) {
    return a0_0x4722c6.hist;
  }
  const _0x5a86f = await a0_0x182c22("/circuits.json?limit=1000");
  a0_0x4722c6.hist = _0x5a86f.MRData.CircuitTable.Circuits.map((_0x4c2a6b) => ({
    id: _0x4c2a6b.circuitId,
    name: _0x4c2a6b.circuitName,
    locality: _0x4c2a6b.Location.locality,
    country: _0x4c2a6b.Location.country,
    lat: +_0x4c2a6b.Location.lat,
    lon: +_0x4c2a6b.Location.long,
    url: _0x4c2a6b.url,
  })).sort((_0x5def92, _0x5d7865) =>
    _0x5def92.name.localeCompare(_0x5d7865.name),
  );
  return a0_0x4722c6.hist;
}
async function a0_0x50272c() {
  const _0x4bc67b = a0_0x3f0359("#circGrid");
  if (!_0x4bc67b) {
    return;
  }
  if (a0_0x4722c6.tab === "vig") {
    if (a0_0x484245.source === "local") {
      _0x4bc67b.innerHTML =
        '<p class="muted">Los circuitos vigentes requieren conexión a la API.</p>';
      return;
    }
    const _0x17e7c7 = new Set();
    const _0x4651e0 = a0_0x484245.calendar.filter(
      (_0x47a732) =>
        _0x47a732.circuitId &&
        !_0x17e7c7.has(_0x47a732.circuitId) &&
        _0x17e7c7.add(_0x47a732.circuitId),
    );
    _0x4bc67b.innerHTML = _0x4651e0
      .map(
        (_0xb4e8f9) =>
          '\n      <div class="glass circ" data-circ="' +
          a0_0x4046d8(_0xb4e8f9.circuitId) +
          '" data-src="vig">\n        <span class="eyebrow">' +
          _0xb4e8f9.flag +
          " " +
          a0_0x4046d8(a0_0x5db6d2(_0xb4e8f9.country)) +
          "</span>\n        <h3>" +
          a0_0x4046d8(_0xb4e8f9.circuit) +
          '</h3>\n        <div class="trk" data-trk="' +
          a0_0x4046d8(_0xb4e8f9.circuitId) +
          '"><span class="trk-msg">Cargando trazado…</span></div>\n        <div class="foot">\n          <span class="meta">Ronda ' +
          _0xb4e8f9.round +
          " · " +
          a0_0x4046d8(_0xb4e8f9.dateLabel) +
          '</span>\n          <span class="ficha">Ver ficha <i>→</i></span>\n        </div>\n      </div>',
      )
      .join("");
    a0_0x4d4387(
      _0x4651e0.map((_0x25d4c0) => ({
        circuitId: _0x25d4c0.circuitId,
        lat: _0x25d4c0.lat,
        lon: _0x25d4c0.lon,
      })),
    );
    return;
  }
  _0x4bc67b.innerHTML = '<p class="muted">Cargando historial…</p>';
  try {
    const _0x55b648 = await a0_0x2f11fb();
    const _0x57a946 = new Set(
      a0_0x484245.calendar.map((_0x289625) => _0x289625.circuitId),
    );
    _0x4bc67b.innerHTML = _0x55b648
      .map((_0x72ddbf) => {
        const _0x260e11 = _0x57a946.has(_0x72ddbf.id);
        return (
          '\n      <div class="glass circ" data-circ="' +
          a0_0x4046d8(_0x72ddbf.id) +
          '" data-src="hist">\n        <span class="eyebrow">' +
          (a0_0x2ac334[_0x72ddbf.country] || "🏁") +
          " " +
          a0_0x4046d8(a0_0x5db6d2(_0x72ddbf.country)) +
          "</span>\n        <h3>" +
          a0_0x4046d8(_0x72ddbf.name) +
          '</h3>\n        <div class="trk" data-trk="' +
          a0_0x4046d8(_0x72ddbf.id) +
          '"><span class="trk-msg">Cargando trazado…</span></div>\n        <div class="foot">\n          <span class="badge ' +
          (_0x260e11 ? "b-next" : "b-done") +
          '">' +
          (_0x260e11 ? "Vigente 2026" : "Ya no forma parte del calendario") +
          '</span>\n          <span class="ficha">Ver ficha <i>→</i></span>\n        </div>\n      </div>'
        );
      })
      .join("");
    a0_0x4d4387(
      _0x55b648.map((_0xb8a637) => ({
        circuitId: _0xb8a637.id,
        lat: _0xb8a637.lat,
        lon: _0xb8a637.lon,
      })),
    );
  } catch (_0x4af803) {
    console.warn(_0x4af803);
    _0x4bc67b.innerHTML =
      '<p class="muted">No se pudo cargar el historial. Intenta de nuevo más tarde.</p>';
  }
}
function a0_0x22317e(_0x3d3f8c) {
  const _0x417153 = _0x3d3f8c.MRData.RaceTable.Races;
  const _0x108bb5 = {};
  const _0x219619 = {};
  _0x417153.forEach((_0x29c230) => {
    const _0x386a37 = _0x29c230.Results[0];
    if (!_0x386a37) {
      return;
    }
    const _0x6c802a = a0_0x505882(_0x386a37.Driver);
    _0x108bb5[_0x6c802a] = (_0x108bb5[_0x6c802a] || 0) + 1;
    _0x219619[_0x386a37.Constructor.name] =
      (_0x219619[_0x386a37.Constructor.name] || 0) + 1;
  });
  const _0x1f78a8 = (_0xd4267f) =>
    Object.entries(_0xd4267f)
      .sort((_0x2e66ae, _0x5db47d) => _0x5db47d[1] - _0x2e66ae[1])
      .slice(0, 3);
  const _0x47305e = _0x417153[_0x417153.length - 1];
  return {
    total: _0x417153.length,
    topDrivers: _0x1f78a8(_0x108bb5),
    topTeams: _0x1f78a8(_0x219619),
    lastSeason: _0x47305e?.season,
    lastWinner: _0x47305e ? a0_0x505882(_0x47305e.Results[0].Driver) : null,
  };
}
function a0_0x545eb1(_0x380e3b) {
  let _0x320928 = null;
  _0x380e3b.MRData.RaceTable.Races.forEach((_0x21ff9f) =>
    _0x21ff9f.Results.forEach((_0x46b122) => {
      const _0x8c4106 = _0x46b122.FastestLap?.Time?.time;
      if (!_0x8c4106) {
        return;
      }
      const _0x3ef206 = a0_0x3fa87d(_0x8c4106);
      if (!_0x320928 || _0x3ef206 < _0x320928.sec) {
        _0x320928 = {
          sec: _0x3ef206,
          t: _0x8c4106,
          drv: a0_0x505882(_0x46b122.Driver),
          team: _0x46b122.Constructor.name,
          season: _0x21ff9f.season,
        };
      }
    }),
  );
  return _0x320928;
}
function a0_0xcdc763(_0xdbe9c3, _0x30509a) {
  const _0x4fa67c = {};
  if (_0xdbe9c3 && _0xdbe9c3.MRData.RaceTable.Races) {
    _0xdbe9c3.MRData.RaceTable.Races.forEach((_0x972c44) => {
      const _0x5bafeb = +_0x972c44.season;
      if (_0x5bafeb >= 2000) {
        _0x4fa67c[_0x5bafeb] = {
          year: _0x5bafeb,
          winner: a0_0x505882(_0x972c44.Results[0].Driver),
          team: _0x972c44.Results[0].Constructor.name,
        };
      }
    });
  }
  if (_0x30509a && _0x30509a.MRData.RaceTable.Races) {
    _0x30509a.MRData.RaceTable.Races.forEach((_0xf32ab4) => {
      const _0x503e53 = +_0xf32ab4.season;
      if (
        _0x503e53 >= 2000 &&
        _0xf32ab4.QualifyingResults &&
        _0xf32ab4.QualifyingResults.length > 0
      ) {
        _0x4fa67c[_0x503e53] = _0x4fa67c[_0x503e53] || {
          year: _0x503e53,
        };
        _0x4fa67c[_0x503e53].pole = a0_0x505882(
          _0xf32ab4.QualifyingResults[0].Driver,
        );
      }
    });
  }
  return Object.values(_0x4fa67c).sort(
    (_0x2efd9b, _0xf53f89) => _0xf53f89.year - _0x2efd9b.year,
  );
}
async function a0_0x66f74b(_0x4285f6, _0x23d278) {
  const _0x5983df = _0x23d278 === "vig";
  const _0x24af6e = _0x5983df
    ? a0_0x484245.calendar.find(
        (_0x16e1fc) => _0x16e1fc.circuitId === _0x4285f6,
      )
    : (a0_0x4722c6.hist || []).find((_0x573861) => _0x573861.id === _0x4285f6);
  if (!_0x24af6e) {
    return;
  }
  const _0x116f64 = _0x5983df ? _0x24af6e.circuitId : _0x24af6e.id;
  const _0x29add6 = _0x24af6e.locality;
  const _0x56583f = _0x24af6e.country;
  const _0x433a2a = _0x5983df ? _0x24af6e.circuit : _0x24af6e.name;
  const _0x4c0d2a = a0_0x2ac334[_0x56583f] || "🏁";
  const _0x1a7e3b = {
    circuitId: _0x116f64,
    locality: _0x29add6,
    circuitName: _0x433a2a,
    country: _0x56583f,
    lat: _0x24af6e.lat,
    lon: _0x24af6e.lon,
  };
  a0_0x4491d0(
    '\n    <span class="eyebrow">' +
      _0x4c0d2a +
      " " +
      a0_0x4046d8(a0_0x5db6d2(_0x56583f)) +
      '</span>\n    <h3 class="display m-title">' +
      a0_0x4046d8(_0x433a2a) +
      '</h3>\n    <p class="muted">Cargando datos del circuito…</p>',
  );
  const [_0x4669dd, _0x50c30a, _0x431079, _0x478fa4, _0x135233] =
    await Promise.all([
      a0_0x182c22(
        "/circuits/" + _0x116f64 + "/results/1.json?limit=1000",
      ).catch(() => null),
      a0_0x182c22(
        "/circuits/" + _0x116f64 + "/fastest/1/results.json?limit=1000",
      ).catch(() => null),
      a0_0x182c22("/circuits/" + _0x116f64 + "/results.json?limit=1").catch(
        () => null,
      ),
      a0_0xcf7b97(_0x1a7e3b).catch(() => null),
      a0_0x182c22(
        "/circuits/" + _0x116f64 + "/qualifying/1.json?limit=1000",
      ).catch(() => null),
    ]);
  const _0x428c6b = _0x4669dd ? a0_0x22317e(_0x4669dd) : null;
  const _0x5079e7 = _0x50c30a ? a0_0x545eb1(_0x50c30a) : null;
  const _0x1bd028 = _0x431079?.MRData.RaceTable.Races[0]?.season;
  const _0x39407c = a0_0xcdc763(_0x4669dd, _0x135233);
  const _0x2fcee3 = _0x478fa4
    ? a0_0x2b37b3(_0x478fa4)
    : '<p class="muted" style="text-align:center;padding:40px 10px">Trazado no disponible para este circuito.</p>';
  const _0x55e0f8 =
    '\n    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 14px;">\n      <div style="background: rgba(255,255,255,.03); border: 1px solid var(--line); border-radius: 14px; padding: 18px;">\n        <span class="eyebrow" style="font-size: 10px;">Vuelta Rápida en Carrera</span>\n        <div style="font-family: var(--f-disp); font-size: 32px; font-weight: 900; color: var(--red); margin: 6px 0; font-style: italic;">\n          ' +
    (_0x5079e7 ? a0_0x4046d8(_0x5079e7.t) : "—") +
    '\n        </div>\n        <div style="font-weight: 600; font-size: 15px;">' +
    (_0x5079e7 ? a0_0x4046d8(_0x5079e7.drv) : "Sin datos") +
    '</div>\n        <div class="muted" style="font-size: 13px; margin-top: 4px;">' +
    (_0x5079e7 ? _0x5079e7.season + " · " + a0_0x4046d8(_0x5079e7.team) : "") +
    '</div>\n      </div>\n\n      <div style="background: rgba(255,255,255,.03); border: 1px solid var(--line); border-radius: 14px; padding: 18px;">\n        <span class="eyebrow" style="font-size: 10px;">Grandes Premios Disputados</span>\n        <div style="font-family: var(--f-disp); font-size: 32px; font-weight: 900; margin: 6px 0; font-style: italic;">\n          ' +
    (_0x428c6b ? _0x428c6b.total : "—") +
    '\n        </div>\n        <div class="muted" style="font-size: 13px; margin-top: 4px;">Desde la inauguración</div>\n      </div>\n    </div>\n\n    <div class="m-grid" style="margin-top: 18px;">\n      <div style="background: rgba(0,0,0,.3); border: 1px solid var(--line); border-radius: 14px; padding: 16px;">\n        <span class="eyebrow" style="font-size: 11px; display: block; margin-bottom: 10px;">👑 Pilotos más ganadores</span>\n        ' +
    (_0x428c6b && _0x428c6b.topDrivers.length
      ? _0x428c6b.topDrivers
          .map(
            ([_0x2f2e15, _0x149946], _0x490d31) =>
              '\n          <div class="line" style="padding: 8px 0; font-size: 15px;">\n            <span><span class="muted mono">' +
              (_0x490d31 + 1) +
              ".</span>" +
              a0_0x4046d8(_0x2f2e15) +
              "</span>\n            <strong>" +
              _0x149946 +
              ' <span class="muted" style="font-size:12px; font-weight: 500;">victorias</span></strong>\n          </div>\n        ',
          )
          .join("")
      : '<p class="muted">Sin datos</p>') +
    '\n      </div>\n\n      <div style="background: rgba(0,0,0,.3); border: 1px solid var(--line); border-radius: 14px; padding: 16px;">\n        <span class="eyebrow" style="font-size: 11px; display: block; margin-bottom: 10px;">🛡️ Escuderías más ganadoras</span>\n        ' +
    (_0x428c6b && _0x428c6b.topTeams.length
      ? _0x428c6b.topTeams
          .map(
            ([_0x5401c1, _0x28988d], _0x256c36) =>
              '\n          <div class="line" style="padding: 8px 0; font-size: 15px;">\n            <span><span class="dot" style="background:' +
              a0_0x140a0c(_0x5401c1) +
              '"></span> ' +
              a0_0x4046d8(_0x5401c1) +
              "</span>\n            <strong>" +
              _0x28988d +
              ' <span class="muted" style="font-size:12px; font-weight: 500;">victorias</span></strong>\n          </div>\n        ',
          )
          .join("")
      : '<p class="muted">Sin datos</p>') +
    "\n      </div>\n    </div>\n  ";
  a0_0x3f0359("#mBody").innerHTML =
    '\n    <span class="eyebrow">' +
    _0x4c0d2a +
    " " +
    a0_0x4046d8(a0_0x5db6d2(_0x56583f)) +
    '</span>\n    <h3 class="display m-title">' +
    a0_0x4046d8(_0x433a2a) +
    '</h3>\n\n    <div class="m-grid">\n      <div class="svg-box track">' +
    _0x2fcee3 +
    '</div>\n      <div class="box">\n        <h4>📍 Ficha</h4>\n        ' +
    a0_0x223330("Localidad", _0x29add6 || "—") +
    "\n        " +
    a0_0x223330("País", a0_0x5db6d2(_0x56583f)) +
    "\n        " +
    (_0x5983df
      ? a0_0x223330("Ronda 2026", _0x24af6e.round + " · " + _0x24af6e.dateLabel)
      : a0_0x223330("Estado", "Ya no forma parte del calendario de F1")) +
    "\n        " +
    a0_0x223330("Primera carrera", _0x1bd028 || "—") +
    "\n        " +
    (_0x428c6b
      ? a0_0x223330(
          "Última victoria",
          _0x428c6b.lastSeason + " · " + _0x428c6b.lastWinner,
        )
      : "") +
    '\n      </div>\n    </div>\n\n    <div class="box" style="margin-top:18px">\n      <h4>🏁 Récords del Circuito</h4>\n      ' +
    _0x55e0f8 +
    "\n    </div>\n\n    " +
    (_0x39407c.length > 0
      ? '\n    <div class="box" style="margin-top:18px">\n      <h4>📜 Historial de la pista (2000 - Presente)</h4>\n      <div class="scroll" style="max-height: 280px; margin-top:10px; padding-right:10px;">\n        ' +
        _0x39407c
          .map(
            (_0x3b5442) =>
              '\n          <div class="line" style="display:grid; grid-template-columns: 50px 1.2fr 1fr 1fr; gap:10px; align-items:center;">\n            <strong style="color:var(--red); font-size:16px">' +
              _0x3b5442.year +
              '</strong>\n            <span style="font-weight:600">🏆 ' +
              a0_0x4046d8(_0x3b5442.winner || "—") +
              '</span>\n            <span class="muted" style="font-size:13px">' +
              a0_0x4046d8(_0x3b5442.team || "—") +
              '</span>\n            <span style="font-size:13px">⏱️ Pole: ' +
              a0_0x4046d8(_0x3b5442.pole || "—") +
              "</span>\n          </div>\n        ",
          )
          .join("") +
        "\n      </div>\n    </div>"
      : "") +
    "\n  ";
}
function a0_0xdd43dd() {
  const _0x379fee = a0_0x3f0359("#drvGrid");
  if (!_0x379fee) {
    return;
  }
  const _0x346e6e = {};
  a0_0x484245.champs.forEach((_0x1309e0) => {
    _0x346e6e[_0x1309e0.driverId] ??= {
      id: _0x1309e0.driverId,
      name: _0x1309e0.name,
      nat: _0x1309e0.nat,
      titles: [],
    };
    _0x346e6e[_0x1309e0.driverId].titles.push(_0x1309e0);
  });
  const _0x4287f7 = Object.values(_0x346e6e).sort(
    (_0x3c19da, _0x4b0adc) =>
      _0x4b0adc.titles.length - _0x3c19da.titles.length ||
      Math.min(..._0x3c19da.titles.map((_0x51156b) => _0x51156b.season)) -
        Math.min(..._0x4b0adc.titles.map((_0x409989) => _0x409989.season)),
  );
  let _0x5cfde7 = "";
  if (a0_0x484245.source === "local") {
    _0x5cfde7 =
      '<p class="muted" style="grid-column:1/-1">Requiere conexión a la API.</p>';
  } else if (!a0_0x484245.champsDone) {
    _0x5cfde7 =
      '<p class="muted" style="grid-column:1/-1">Cargando campeones… (' +
      a0_0x484245.champs.length +
      " de " +
      (a0_0x30d883 - a0_0x3bd3fc) +
      ")</p>";
  }
  _0x379fee.innerHTML =
    _0x4287f7
      .map((_0x2f398a) => {
        const _0x32db8e = [..._0x2f398a.titles].sort(
          (_0x111553, _0x2288c8) => _0x111553.season - _0x2288c8.season,
        );
        return (
          '\n    <article class="glass dc" data-champ="' +
          a0_0x4046d8(_0x2f398a.id) +
          '">\n      <div class="dc-top"><span class="dc-num">' +
          _0x2f398a.titles.length +
          '</span><span class="dc-lbl">' +
          (_0x2f398a.titles.length === 1 ? "título" : "títulos") +
          "</span></div>\n      <h3>" +
          a0_0x4046d8(_0x2f398a.name) +
          '</h3>\n      <p class="dc-nat">' +
          a0_0x4046d8(a0_0x5aec18(_0x2f398a.nat)) +
          '</p>\n      <div class="yrs">' +
          _0x32db8e
            .map(
              (_0x4db585) =>
                '<span class="yr" data-season="' +
                _0x4db585.season +
                '">' +
                _0x4db585.season +
                "</span>",
            )
            .join("") +
          "</div>\n    </article>"
        );
      })
      .join("") + _0x5cfde7;
}
function a0_0x59a85d(_0x585723) {
  const _0x413c26 = a0_0x484245.champs
    .filter((_0x52ab79) => _0x52ab79.driverId === _0x585723)
    .sort((_0x3837dc, _0x5f15c4) => _0x3837dc.season - _0x5f15c4.season);
  if (!_0x413c26.length) {
    return;
  }
  const _0x1ad114 = [...new Set(_0x413c26.map((_0x516f6d) => _0x516f6d.team))];
  a0_0x4491d0(
    '\n    <span class="eyebrow">' +
      a0_0x4046d8(a0_0x5aec18(_0x413c26[0].nat) || "Campeón del mundo") +
      '</span>\n    <h3 class="display m-title">' +
      a0_0x4046d8(_0x413c26[0].name) +
      '</h3>\n    <div class="m-grid">\n      <div class="svg-box" style="display:grid;place-items:center;text-align:center">\n        <div>\n          <div class="dc-num" style="font-size:120px">' +
      _0x413c26.length +
      '</div>\n          <div class="dc-lbl">' +
      (_0x413c26.length === 1 ? "Título mundial" : "Títulos mundiales") +
      '</div>\n        </div>\n      </div>\n      <div style="display:grid;gap:12px;align-content:start">\n        <div class="stat"><span>Primer título</span><strong>' +
      _0x413c26[0].season +
      '</strong></div>\n        <div class="stat"><span>Último título</span><strong>' +
      _0x413c26[_0x413c26.length - 1].season +
      '</strong></div>\n        <div class="stat"><span>Escuderías</span><strong>' +
      _0x1ad114
        .map((_0x456485) => a0_0x4046d8(a0_0x46cabb(_0x456485)))
        .join(" · ") +
      '</strong></div>\n      </div>\n    </div>\n    <div class="box" style="margin-top:18px">\n      <h4>🏆 Temporadas campeonas</h4>\n      <div class="yrs">' +
      _0x413c26
        .map(
          (_0x225104) =>
            '<span class="yr" data-season="' +
            _0x225104.season +
            '">' +
            _0x225104.season +
            " · " +
            a0_0x4046d8(a0_0x46cabb(_0x225104.team)) +
            "</span>",
        )
        .join("") +
      "</div>\n    </div>",
  );
}
async function a0_0x593303(_0x5082f6) {
  _0x5082f6 = +_0x5082f6;
  const _0x2fde37 = a0_0x484245.champs.find(
    (_0x2947a2) => _0x2947a2.season === _0x5082f6,
  );
  if (_0x5082f6 === a0_0x30d883) {
    const { drivers: _0x24704d } = a0_0x2701db(a0_0x484245.sim);
    const [_0xb52591, _0x1680c2] = _0x24704d;
    return a0_0x4491d0(
      '\n      <span class="eyebrow">Temporada ' +
        a0_0x30d883 +
        ' · En curso</span>\n      <h3 class="display m-title">' +
        a0_0x4046d8(_0xb52591.name) +
        '</h3>\n      <div class="m-grid">\n        <div class="stat"><span>Puntos del líder</span><strong>' +
        _0xb52591.pts +
        '</strong></div>\n        <div class="stat"><span>Diferencia con el segundo</span><strong>' +
        (_0xb52591.pts - _0x1680c2.pts) +
        " pts · " +
        a0_0x4046d8(a0_0x308c9d(_0x1680c2.name)) +
        '</strong></div>\n      </div>\n      <div class="box" style="margin-top:18px">\n        <p class="muted" style="font-size:14px;line-height:1.7">El campeón se define al final de la temporada. Esta ficha se completará cuando termine.</p>\n      </div>',
    );
  }
  if (!_0x2fde37) {
    return;
  }
  a0_0x4491d0(
    '\n    <span class="eyebrow">Temporada ' +
      _0x5082f6 +
      ' · Campeón del mundo</span>\n    <h3 class="display m-title">' +
      a0_0x4046d8(_0x2fde37.name) +
      '</h3>\n    <p class="muted">Cargando temporada…</p>',
  );
  if (a0_0x484245.source === "local") {
    return a0_0x4491d0(
      '\n      <span class="eyebrow">Temporada ' +
        _0x5082f6 +
        ' · Campeón del mundo</span>\n      <h3 class="display m-title">' +
        a0_0x4046d8(_0x2fde37.name) +
        '</h3>\n      <div class="box"><p class="muted">El detalle de la temporada requiere conexión a la API.</p></div>',
    );
  }
  try {
    const _0x591d66 = await a0_0xd78dbe(_0x5082f6);
    a0_0x3f0359("#mBody").innerHTML = a0_0x2cb998(_0x2fde37, _0x591d66);
  } catch (_0x3da71f) {
    console.warn(_0x3da71f);
    a0_0x3f0359("#mBody").innerHTML =
      '\n      <span class="eyebrow">Temporada ' +
      _0x5082f6 +
      ' · Campeón del mundo</span>\n      <h3 class="display m-title">' +
      a0_0x4046d8(_0x2fde37.name) +
      '</h3>\n      <div class="box"><p class="muted">No se pudo cargar la temporada. Intenta más tarde.</p></div>';
  }
}
function a0_0x2cb998(_0x214bdb, _0x36f9d5) {
  const _0x48edae = a0_0x126f94(_0x214bdb.team);
  const _0x4a7537 = Math.max(
    1,
    ..._0x36f9d5.rows.map((_0x5be2f4) => _0x5be2f4.pts),
  );
  const _0x2e7e9a = _0x36f9d5.clinchNA
    ? "Dato no disponible para temporadas anteriores a 2010, cuando cambió el sistema de puntos."
    : (() => {
        const _0x36ee7d = _0x36f9d5.rows[_0x36f9d5.clinchIdx];
        const _0x4e85b7 = _0x36f9d5.total - 1 - _0x36f9d5.clinchIdx;
        return (
          "<b>Ronda " +
          _0x36ee7d.round +
          " · " +
          a0_0x4046d8(a0_0x3d89a0(_0x36ee7d.name)) +
          '</b><br>\n          <span class="muted">' +
          a0_0x4046d8(a0_0x34ea12(_0x36ee7d.date)) +
          " · " +
          (_0x4e85b7 === 0
            ? "Se consagró en la última carrera de la temporada"
            : "Faltaban " +
              _0x4e85b7 +
              " " +
              (_0x4e85b7 === 1 ? "carrera" : "carreras") +
              " para el final") +
          "</span>"
        );
      })();
  const _0x17f6ed = _0x36f9d5.rows
    .map((_0x23ae42, _0x1d5d33) => {
      const _0x208da0 =
        !_0x36f9d5.clinchNA && _0x1d5d33 === _0x36f9d5.clinchIdx;
      const _0x52236f = !_0x23ae42.pos
        ? "—"
        : a0_0x4d831d(_0x23ae42.status)
          ? "P" + _0x23ae42.pos
          : "Ab.";
      const _0x32921a = Math.round((_0x23ae42.pts / _0x4a7537) * 100);
      return (
        '\n      <div class="rr ' +
        (_0x208da0 ? "is-clinch" : "") +
        '" style="--c:' +
        _0x48edae +
        '">\n        <span class="rr-r">R' +
        String(_0x23ae42.round).padStart(2, "0") +
        '</span>\n        <span class="rr-n">' +
        (a0_0x2ac334[_0x23ae42.country] || "🏁") +
        " " +
        a0_0x4046d8(a0_0x3d89a0(_0x23ae42.name)) +
        "\n          <small>" +
        a0_0x4046d8(a0_0x34ea12(_0x23ae42.date)) +
        (_0x208da0 ? " · 🏆 Título" : "") +
        '</small></span>\n        <span class="rr-p ' +
        (_0x52236f === "P1" ? "win" : "") +
        '">' +
        _0x52236f +
        (_0x23ae42.sprintPos
          ? "<small>S" + a0_0x4046d8(_0x23ae42.sprintPos) + "</small>"
          : "") +
        '</span>\n        <span class="rr-bar"><i style="width:' +
        _0x32921a +
        '%"></i></span>\n        <span class="rr-pts">' +
        _0x23ae42.pts +
        "</span>\n      </div>"
      );
    })
    .join("");
  const _0xebfad3 = _0x36f9d5.runner
    ? _0x36f9d5.champPts - _0x36f9d5.runner.pts
    : null;
  return (
    '\n    <span class="eyebrow">Temporada ' +
    _0x214bdb.season +
    ' · Campeón del mundo</span>\n    <h3 class="display m-title">' +
    a0_0x4046d8(_0x214bdb.name) +
    '</h3>\n    <span class="sea-team"><span class="dot" style="background:' +
    _0x48edae +
    '"></span>' +
    a0_0x4046d8(a0_0x46cabb(_0x214bdb.team)) +
    '</span>\n\n    <div class="hero-stats">\n      <div class="hs"><b>' +
    _0x36f9d5.champPts +
    '</b><span>Puntos</span></div>\n      <div class="hs"><b>' +
    _0x36f9d5.wins +
    '</b><span>Victorias</span></div>\n      <div class="hs"><b>' +
    _0x36f9d5.podiums +
    '</b><span>Podios</span></div>\n      <div class="hs"><b>' +
    _0x36f9d5.dnf +
    '</b><span>Abandonos</span></div>\n    </div>\n\n    <div class="m-grid" style="margin-top:18px">\n      <div class="box">\n        <h4>🏆 Consagración</h4>\n        <p class="clinch">' +
    _0x2e7e9a +
    "</p>\n        " +
    (_0x36f9d5.runner ? a0_0x223330("Subcampeón", _0x36f9d5.runner.name) : "") +
    "\n        " +
    (_0x36f9d5.runner
      ? a0_0x223330(
          "Puntos del subcampeón",
          _0x36f9d5.runner.pts + " · diferencia " + _0xebfad3,
        )
      : "") +
    '\n      </div>\n      <div class="box">\n        <h4>📈 Resumen</h4>\n        ' +
    a0_0x223330("Carreras disputadas", _0x36f9d5.total) +
    "\n        " +
    a0_0x223330("Partidas desde P1", _0x36f9d5.poles) +
    "\n        " +
    a0_0x223330("Victorias en Sprint", _0x36f9d5.sprintWins) +
    "\n        " +
    a0_0x223330("Podios", _0x36f9d5.podiums) +
    '\n      </div>\n    </div>\n\n    <div class="box" style="margin-top:18px">\n      <h4>🏁 Carrera a carrera</h4>\n      <div class="rr-list">' +
    _0x17f6ed +
    '</div>\n      <p class="muted" style="font-size:13px;line-height:1.6;margin-top:12px">Los puntos incluyen la Carrera Sprint cuando la hubo. Ab. = abandono.</p>\n    </div>'
  );
}
const INFO = {
  sec: "fundamentos",
  query: "",
  quiz: {
    i: 0,
    score: 0,
    answered: null,
    done: false,
  },
};
const a0_0x37523e = (_0x44db77) =>
  String(_0x44db77 ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
const escI = (_0x5c2584) =>
  String(_0x5c2584 ?? "").replace(
    /[&<>"']/g,
    (_0x1f8f94) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[_0x1f8f94],
  );
const a0_0xa0fc1f = (_0x20d8ac, _0x24dd8d = "") =>
  '<svg class="flag-svg" viewBox="0 0 160 100" aria-hidden="true"><rect width="160" height="100" fill="' +
  _0x20d8ac +
  '"/>' +
  _0x24dd8d +
  "</svg>";
let a0_0x1a64ac = "";
for (let a0_0xac4e49 = 0; a0_0xac4e49 < 5; a0_0xac4e49++) {
  for (let a0_0x4145c4 = 0; a0_0x4145c4 < 8; a0_0x4145c4++) {
    if ((a0_0xac4e49 + a0_0x4145c4) % 2 === 0) {
      a0_0x1a64ac +=
        '<rect x="' +
        a0_0x4145c4 * 20 +
        '" y="' +
        a0_0xac4e49 * 20 +
        '" width="20" height="20" fill="#0b0b10"/>';
    }
  }
}
const a0_0x4277a5 = {
  green: a0_0xa0fc1f("#16a34a"),
  yellow: a0_0xa0fc1f("#facc15"),
  yellowred: a0_0xa0fc1f(
    "#facc15",
    [30, 75, 120]
      .map(
        (_0x212de5) =>
          '<rect x="' +
          _0x212de5 +
          '" y="0" width="10" height="100" fill="#dc2626"/>',
      )
      .join(""),
  ),
  red: a0_0xa0fc1f("#dc2626"),
  blue: a0_0xa0fc1f("#2563eb"),
  white: a0_0xa0fc1f("#f8fafc"),
  black: a0_0xa0fc1f("#0b0b10"),
  blackorange: a0_0xa0fc1f(
    "#0b0b10",
    '<circle cx="80" cy="50" r="24" fill="#f97316"/>',
  ),
  blackwhite: a0_0xa0fc1f(
    "#f8fafc",
    '<polygon points="0,0 160,0 0,100" fill="#0b0b10"/>',
  ),
  checkered: a0_0xa0fc1f("#f8fafc", a0_0x1a64ac),
  sc: a0_0xa0fc1f(
    "#facc15",
    '<text x="80" y="66" text-anchor="middle" font-family="Titillium Web,sans-serif" font-weight="900" font-size="46" fill="#0b0b10">SC</text>',
  ),
  vsc: a0_0xa0fc1f(
    "#facc15",
    '<text x="80" y="62" text-anchor="middle" font-family="Titillium Web,sans-serif" font-weight="900" font-size="36" fill="#0b0b10">VSC</text>',
  ),
};
const a0_0x130a97 = (_0x179c8f, _0x2829ce) => {
  const _0x37d9d7 =
    _0x2829ce === "I" || _0x2829ce === "W" ? ' stroke-dasharray="7 5"' : "";
  return (
    '<svg class="tyre-svg" viewBox="0 0 120 120" aria-hidden="true">\n    <circle cx="60" cy="60" r="57" fill="#0d0d12"/>\n    <circle cx="60" cy="60" r="49" fill="none" stroke="' +
    _0x179c8f +
    '" stroke-width="11"' +
    _0x37d9d7 +
    '/>\n    <circle cx="60" cy="60" r="34" fill="#1b1b22"/>\n    <text x="60" y="71" text-anchor="middle" font-family="Titillium Web,sans-serif" font-weight="900" font-size="30" fill="' +
    _0x179c8f +
    '">' +
    _0x2829ce +
    "</text>\n  </svg>"
  );
};
const INFO_SECTIONS = [
  {
    id: "fundamentos",
    icon: "🏁",
    title: "Fundamentos",
    intro:
      "Cómo se arma un fin de semana de Gran Premio y cómo se reparten los puntos.",
    items: [
      {
        type: "card",
        icon: "📅",
        title: "El fin de semana",
        t: "Un fin de semana estándar tiene tres prácticas libres, la clasificación y la carrera. Los fines de semana con Sprint cambian la estructura: hay una sola práctica, una clasificación Sprint y una carrera corta el sábado.",
      },
      {
        type: "card",
        icon: "🏁",
        title: "La parrilla",
        t: "Es el orden de salida. El piloto más rápido de la clasificación sale primero (pole position). Antes de largar hay una vuelta de formación para calentar neumáticos y frenos.",
      },
      {
        type: "card",
        icon: "🥇",
        title: "Puntos",
        t: "Puntúan los 10 primeros de la carrera: 25, 18, 15, 12, 10, 8, 6, 4, 2 y 1. En el Sprint puntúan los 8 primeros, del 8 al 1.",
      },
      {
        type: "card",
        icon: "🏎️",
        title: "Pilotos y escuderías",
        t: "Cada escudería tiene dos pilotos y hay dos campeonatos: el de pilotos y el de constructores, que suma los puntos de ambos. Se definen por separado.",
      },
      {
        type: "card",
        icon: "🔒",
        title: "Parque cerrado",
        t: "Desde la clasificación hasta la carrera el coche queda bajo control del equipo técnico, lo que limita los cambios de puesta a punto. Cambiar piezas de motor o caja implica penalización de parrilla.",
      },
    ],
  },
  {
    id: "practicas",
    icon: "🔧",
    title: "Prácticas",
    intro:
      "Son las sesiones donde los equipos preparan el coche. No cuentan para la parrilla, pero definen todo lo que viene.",
    items: [
      {
        type: "card",
        icon: "🎯",
        title: "¿Para qué sirven?",
        t: "Los equipos prueban la puesta a punto (alerones, suspensión, frenos), los neumáticos y el comportamiento del coche. También sirven para que los pilotos se adapten a la pista, que cambia mucho entre el viernes y el domingo por la temperatura y el asfalto.",
      },
      {
        type: "card",
        icon: "⏱️",
        title: "¿Cuánto duran y cuántas son?",
        t: "Cada práctica dura 60 minutos. En un fin de semana estándar hay tres (FP1, FP2 y FP3). En un fin de semana Sprint hay una sola (FP1), y el sábado se usa para la clasificación Sprint.",
      },
      {
        type: "card",
        icon: "1️⃣",
        title: "FP1 · viernes",
        t: "Es la primera toma de contacto. Se prueban configuraciones base y los equipos suelen probar piezas nuevas. A veces se usa para que un piloto de reserva o novato pruebe el coche.",
      },
      {
        type: "card",
        icon: "2️⃣",
        title: "FP2 · viernes",
        t: "Es la sesión clave para el ritmo de carrera. Los equipos simulan tandas largas con combustible de carrera para ver cómo se degradan los neumáticos y cuál es el ritmo real de cada auto.",
      },
      {
        type: "card",
        icon: "3️⃣",
        title: "FP3 · sábado",
        t: "Es la última práctica antes de la clasificación. Se ajusta el coche para buscar la vuelta rápida y se prueban los neumáticos de clasificación.",
      },
      {
        type: "card",
        icon: "💡",
        title: "Cómo leer las prácticas",
        t: "Los tiempos de práctica no cuentan para la parrilla, pero los equipos los usan para estimar quién tiene mejor ritmo de carrera. Un buen ritmo en FP2 suele anticipar quién pelea el podio.",
      },
    ],
  },
  {
    id: "clasificacion",
    icon: "⏳",
    title: "Clasificación",
    intro:
      "Define la parrilla de salida. Se divide en tres fases eliminatorias: Q1, Q2 y Q3.",
    items: [
      {
        type: "card",
        icon: "🧭",
        title: "Cómo funciona",
        t: "Es una sesión de tiempo: cada piloto intenta marcar la vuelta más rápida posible. Se corre en tres tandas (Q1, Q2 y Q3) y, al final de cada una, los más lentos quedan eliminados. Solo cuenta la vuelta, no la carrera.",
      },
      {
        type: "card",
        icon: "🔴",
        title: "Q1 · 18 minutos",
        t: "Salen todos los pilotos. Los peores tiempos, habitualmente los cinco más lentos, quedan eliminados y se ubican en los últimos puestos de la parrilla. Los demás pasan a Q2.",
      },
      {
        type: "card",
        icon: "🟡",
        title: "Q2 · 15 minutos",
        t: "Solo siguen los que quedaron en Q1. Otro grupo queda eliminado, habitualmente cinco pilotos, que se ubican entre los puestos 11 y 15 de la parrilla. Los diez más rápidos pasan a Q3.",
      },
      {
        type: "card",
        icon: "🟢",
        title: "Q3 · 12 minutos",
        t: "Los diez mejores pelean por la pole position. Sus posiciones, del 1 al 10, dependen del tiempo marcado en esta última tanda.",
      },
      {
        type: "card",
        icon: "🔁",
        title: "La diferencia clave entre Q1, Q2 y Q3",
        t: "Q1 y Q2 eliminan pilotos y definen los puestos de atrás. Q3 solo define los diez primeros lugares, así que la última vuelta es la decisiva. Si llegas a Q3 tienes más tiempo para atacar, pero también menos margen de error.",
      },
      {
        type: "card",
        icon: "🛞",
        title: "Neumáticos en clasificación",
        t: "Los pilotos que llegan a Q3 deben largar la carrera con el mismo juego de neumáticos con el que marcaron su mejor tiempo en Q2. Por eso Q2 también es una decisión de estrategia, no solo de velocidad.",
      },
      {
        type: "card",
        icon: "🏃",
        title: "Clasificación Sprint",
        t: "En los fines de semana Sprint existe una versión más corta: Q1 de 12 minutos, Q2 de 10 minutos y Q3 de 8 minutos. Define la parrilla de la carrera Sprint.",
      },
    ],
  },
  {
    id: "neumaticos",
    icon: "🛞",
    title: "Neumáticos",
    intro:
      "Son el único contacto del coche con la pista. Elegir bien la mezcla y administrar el cupo es media carrera.",
    items: [
      {
        type: "card",
        icon: "📦",
        title: "Cupo fijo para todo el fin de semana",
        t: "Cada piloto tiene un número limitado de juegos de neumáticos secos para el fin de semana (en los últimos años fueron 13). No se pueden pedir juegos nuevos a demanda: lo que se usa en las prácticas se descuenta del cupo, así que cada decisión cuenta.",
      },
      {
        type: "card",
        icon: "🎯",
        title: "Pirelli elige los compuestos",
        t: "Para cada Gran Premio, Pirelli nomina tres compuestos consecutivos de su gama, que va de C1 (el más duro) a C5 (el más blando). Esos son los neumáticos disponibles ese fin de semana, identificados como blando, medio y duro.",
      },
      {
        type: "card",
        icon: "🧩",
        title: "Cada escudería decide cuál usar",
        t: "Con esos tres compuestos, cada equipo elige cuántos juegos llevar de cada uno según el circuito, su coche y su estrategia. Un juego que se usa en clasificación no siempre sirve para la carrera, por eso cada decisión se planifica desde el viernes.",
      },
      {
        type: "tyre",
        color: "#ef4444",
        letter: "S",
        name: "Blando (Soft)",
        sub: "Aro rojo",
        t: "Es el que más agarra, pero se desgasta rápido: ideal para clasificar o tramos cortos. Si se degrada demasiado aparecen ampollas en la superficie (blistering).",
      },
      {
        type: "tyre",
        color: "#facc15",
        letter: "M",
        name: "Medio (Medium)",
        sub: "Aro amarillo",
        t: "Equilibrio entre agarre y durabilidad, la base de muchas estrategias de carrera. Muchos equipos lo usan como primer juego por su buena consistencia.",
      },
      {
        type: "tyre",
        color: "#f1f5f9",
        letter: "H",
        name: "Duro (Hard)",
        sub: "Aro blanco",
        t: "Dura más pero agarra menos, sirve para estirar un tramo largo. Tarda en entrar en temperatura y puede perder tiempo al inicio.",
      },
      {
        type: "tyre",
        color: "#22c55e",
        letter: "I",
        name: "Intermedio",
        sub: "Aro verde",
        t: "Para pista mojada o lluvia leve, con ranuras que evacuan el agua. Con humedad sin lluvia fuerte puede ser más rápido que el de lluvia.",
      },
      {
        type: "tyre",
        color: "#3b82f6",
        letter: "W",
        name: "Lluvia (Wet)",
        sub: "Aro azul",
        t: "Para lluvia intensa, con mucho dibujo para expulsar agua. Cuando la pista se seca se vuelve muy lento y hay que cambiarlo.",
      },
      {
        type: "card",
        icon: "🔁",
        title: "Regla de los dos compuestos",
        t: "En una carrera seca hay que usar al menos dos compuestos distintos. Es la base de casi todas las estrategias de paradas.",
      },
      {
        type: "card",
        icon: "⏱️",
        title: "La parada en boxes",
        t: "Cambiar los cuatro neumáticos lleva unos 2 a 3 segundos con el coche detenido. Los equipos entrenan para reducirlo al mínimo, y a eso se suma el tiempo de entrar y salir de la calle de boxes.",
      },
      {
        type: "card",
        icon: "🌡️",
        title: "Temperatura",
        t: "Los neumáticos necesitan calentarse para agarrar, por eso se calientan en la vuelta de formación. Cada compuesto tiene una ventana ideal: si se sale de ella, pierde agarre rápido.",
      },
      {
        type: "card",
        icon: "🧠",
        title: "Undercut y overcut",
        t: "Parar antes que el rival para salir con neumáticos nuevos y pasarlo en pista (undercut). El overcut es lo contrario: quedarse más en pista mientras el rival pierde tiempo en boxes.",
      },
    ],
  },
  {
    id: "banderas",
    icon: "🚩",
    title: "Banderas",
    intro:
      "Los colores de los comisarios son el lenguaje de la pista. Aprenderlos te hace entender cada carrera.",
    quiz: true,
    items: [
      {
        type: "flag",
        kind: "green",
        name: "Verde",
        t: "Pista libre: se puede adelantar con normalidad. Aparece al inicio y al terminar una neutralización, y confirma que la zona ya es segura.",
      },
      {
        type: "flag",
        kind: "yellow",
        name: "Amarilla",
        t: "Peligro en la pista o cerca. Reduce la velocidad y no adelantes en esa zona. Si es doble (agitada en dos puestos), el peligro es inmediato.",
      },
      {
        type: "flag",
        kind: "yellowred",
        name: "Amarilla con franjas rojas",
        t: "La pista está resbaladiza por aceite, agua o restos. Se muestra en el puesto de comisarios de la zona afectada.",
      },
      {
        type: "flag",
        kind: "red",
        name: "Roja",
        t: "Sesión detenida: todos vuelven al box lo antes posible. Se usa solo en situaciones graves y la carrera puede reanudarse con una nueva salida.",
      },
      {
        type: "flag",
        kind: "blue",
        name: "Azul",
        t: "Un auto más rápido está por alcanzarte: déjalo pasar. Si no cedes el paso, el reglamento permite penalizarte.",
      },
      {
        type: "flag",
        kind: "white",
        name: "Blanca",
        t: "Hay un vehículo lento en pista, como un auto de servicio o uno con problemas. Es un aviso para extremar la precaución.",
      },
      {
        type: "flag",
        kind: "black",
        name: "Negra",
        t: "El piloto queda descalificado de esa sesión y debe volver al box. Se aplica por una infracción grave y se muestra con el número del coche.",
      },
      {
        type: "flag",
        kind: "blackorange",
        name: "Negra con círculo naranja",
        t: "El coche tiene un problema mecánico o un daño que puede ser peligroso. El equipo recibe el aviso por radio y el piloto regresa a boxes.",
      },
      {
        type: "flag",
        kind: "blackwhite",
        name: "Negra y blanca dividida",
        t: "Advertencia formal por conducta antideportiva, mostrada con el número del piloto. Si se repite, llega una sanción.",
      },
      {
        type: "flag",
        kind: "checkered",
        name: "Cuadros",
        t: "Fin de la sesión. En la carrera es la bandera del ganador, cuando el coche ya completó la última vuelta.",
      },
    ],
  },
  {
    id: "seguridad",
    icon: "🛡️",
    title: "Seguridad",
    intro:
      "La F1 es uno de los deportes más seguros gracias a décadas de investigación. Así cuidan a los pilotos.",
    items: [
      {
        type: "flag",
        kind: "sc",
        name: "Safety Car",
        t: "Tras un incidente, un auto de seguridad entra a la pista y los pilotos se forman detrás sin adelantar. Se usa para retirar restos o asistir a un accidente.",
      },
      {
        type: "flag",
        kind: "vsc",
        name: "Virtual Safety Car",
        t: "La carrera sigue, pero todos deben respetar un tiempo de referencia en cada sector, sin auto físico en pista. Parar en boxes durante un VSC cuesta menos tiempo.",
      },
      {
        type: "card",
        icon: "🛡️",
        title: "Halo",
        t: "Estructura de titanio sobre la cabeza del piloto, obligatoria desde 2018. Está diseñada para soportar cargas de varias toneladas y ha protegido a pilotos en accidentes graves.",
      },
      {
        type: "card",
        icon: "🧱",
        title: "Monocasco",
        t: "La cápsula del piloto es de fibra de carbono: muy rígida y liviana. Se somete a pruebas de impacto exigentes antes de homologarse.",
      },
      {
        type: "card",
        icon: "⛑️",
        title: "Cascos y HANS",
        t: "Los cascos son de fibra de carbono y el dispositivo HANS sujeta el cuello durante un choque. Es obligatorio desde 2003 y reduce el riesgo de lesiones cervicales.",
      },
      {
        type: "card",
        icon: "🚧",
        title: "Barreras y zonas de escape",
        t: "Las barreras absorben energía deformándose, y las zonas de escape frenan a los autos que se salen. Muchas barreras pueden reemplazarse después de cada impacto.",
      },
      {
        type: "card",
        icon: "🚑",
        title: "Equipo médico",
        t: "Hay médicos y rescatistas a lo largo de la pista, listos para intervenir en segundos. El coche médico acompaña al Safety Car cuando hace falta.",
      },
    ],
  },
  {
    id: "tecnologia",
    icon: "⚙️",
    title: "Tecnología",
    intro:
      "Un monoplaza combina aerodinámica, motor híbrido y electrónica. Estas son sus piezas clave.",
    items: [
      {
        type: "card",
        icon: "🌬️",
        title: "Aerodinámica activa",
        t: "Desde 2026 los alerones cambian de posición según la zona del circuito: en recta reducen la resistencia para ganar velocidad, y en curva generan carga para pegar el coche al asfalto.",
      },
      {
        type: "card",
        icon: "⚡",
        title: "Modo adelantamiento",
        t: "Es un extra de potencia eléctrica que se habilita solo en determinadas vueltas de la carrera. Para usarlo, el piloto debe estar a menos de 1 segundo del auto de adelante al pasar por el punto de detección. Reemplaza al antiguo DRS.",
      },
      {
        type: "card",
        icon: "🔋",
        title: "Unidad de potencia",
        t: "Combina un motor de combustión con energía eléctrica que se recupera al frenar. Desde 2026 la parte eléctrica pesa cerca de la mitad de la potencia total, se elimina la MGU-H y el combustible es 100 % sostenible.",
      },
      {
        type: "card",
        icon: "🌪️",
        title: "Efecto suelo",
        t: "Los túneles bajo el monoplaza generan carga y pegan el coche al asfalto. Si el flujo se altera a alta velocidad aparece el porpoising, un rebote visible.",
      },
      {
        type: "card",
        icon: "🔥",
        title: "Frenos",
        t: "Discos de carbono que frenan con fuerzas de varias veces el peso del piloto. En algunas frenadas se superan los 5 G de desaceleración.",
      },
      {
        type: "card",
        icon: "🎛️",
        title: "El volante",
        t: "Es casi un ordenador: el piloto cambia marchas, frenos, diferencial y modos del motor desde ahí. Los mapas de motor se ajustan vuelta a vuelta según la estrategia.",
      },
      {
        type: "card",
        icon: "🛞",
        title: 'Ruedas de 18"',
        t: "Desde 2022 las llantas son de 18 pulgadas, con neumáticos de perfil bajo que mejoran la respuesta del coche.",
      },
    ],
  },
  {
    id: "reglas",
    icon: "📜",
    title: "Reglas y penalizaciones",
    intro:
      "Las infracciones se castigan de distintas formas, desde una advertencia hasta la descalificación.",
    items: [
      {
        type: "card",
        icon: "📝",
        title: "Advertencia",
        t: "Un aviso oficial por una infracción leve que no cambia el resultado. Varias advertencias pueden terminar en una sanción.",
      },
      {
        type: "card",
        icon: "⏱️",
        title: "Tiempo añadido (+5 s / +10 s)",
        t: "Se suman 5 o 10 segundos al tiempo final de la carrera. Con diferencias chicas, un +5 s puede cambiar el podio o los puntos.",
      },
      {
        type: "card",
        icon: "🚦",
        title: "Drive-through",
        t: "El piloto pasa por el pit lane a velocidad limitada, sin detenerse, por lo que se pierde poco tiempo.",
      },
      {
        type: "card",
        icon: "🛑",
        title: "Stop & Go",
        t: "Parada obligatoria de 10 segundos en el box antes de seguir. Los 10 segundos se cuentan con el coche detenido en la plaza.",
      },
      {
        type: "card",
        icon: "⬇️",
        title: "Penalización de parrilla",
        t: "El piloto retrocede posiciones en la salida. Es habitual al cambiar componentes de motor o caja fuera del límite permitido.",
      },
      {
        type: "card",
        icon: "🟨",
        title: "Límites de pista",
        t: "Salirse para ganar tiempo está prohibido: los comisarios vigilan las líneas blancas y las salidas repetidas pueden terminar en sanción.",
      },
      {
        type: "card",
        icon: "❌",
        title: "Descalificación",
        t: "El piloto queda fuera del resultado de la carrera, por ejemplo por no cumplir el peso mínimo o por irregularidades técnicas.",
      },
    ],
  },
  {
    id: "glosario",
    icon: "📖",
    title: "Glosario",
    intro: "Las palabras que usan los comentaristas, explicadas en una línea.",
    items: [
      {
        type: "term",
        term: "Q1, Q2 y Q3",
        t: "Las tres fases de la clasificación. Q1 elimina a los más lentos, Q2 deja a los diez mejores y Q3 define la pole.",
      },
      {
        type: "term",
        term: "FP (práctica libre)",
        t: "Free Practice: FP1, FP2 y FP3 son las prácticas de un fin de semana estándar.",
      },
      {
        type: "term",
        term: "Modo adelantamiento",
        t: "Extra de potencia eléctrica que se habilita en vueltas determinadas, si el piloto está a menos de 1 segundo del auto de adelante.",
      },
      {
        type: "term",
        term: "Juego de neumáticos",
        t: "Conjunto de cuatro neumáticos del mismo compuesto. Cada piloto tiene un cupo limitado por fin de semana.",
      },
      {
        type: "term",
        term: "Apex",
        t: "Punto de la curva donde el coche pasa más cerca del interior.",
      },
      {
        type: "term",
        term: "Chicane",
        t: "Serie de curvas cerradas alternadas que frenan a los autos.",
      },
      {
        type: "term",
        term: "Stint",
        t: "Tramo de vueltas entre dos paradas en boxes con el mismo juego de neumáticos.",
      },
      {
        type: "term",
        term: "Rebufo (slipstream)",
        t: 'Aire que deja un coche detrás de él. Permite al de atrás ir más rápido. Tambien conocido como "Remolque": Estrategia de equipo donde un coche líder le regala su rebufo a su compañero para ayudarlo a ir mas rápido en recta (clave en clasificación)',
      },
      {
        type: "term",
        term: "Doblado (lapped)",
        t: "Piloto que quedó una vuelta atrás de los líderes.",
      },
      {
        type: "term",
        term: "Delta",
        t: "Diferencia de tiempo con una referencia, como el líder o el tiempo ideal de un VSC.",
      },
      {
        type: "term",
        term: "Pole position",
        t: "Primer lugar de la parrilla, para el piloto más rápido de la clasificación.",
      },
      {
        type: "term",
        term: "Pit lane",
        t: "Calle de boxes, paralela a la pista, por la que se entra a parar.",
      },
      {
        type: "term",
        term: "Pit wall",
        t: "Muro de boxes: desde ahí el equipo se comunica con el piloto.",
      },
      {
        type: "term",
        term: "Graining",
        t: "Pequeñas bolitas de goma que se forman en el neumático por falta de temperatura.",
      },
      {
        type: "term",
        term: "Blistering",
        t: "Ampollas en la superficie del neumático por sobrecalentamiento.",
      },
      {
        type: "term",
        term: "Porpoising",
        t: "Rebote del coche a alta velocidad causado por el efecto suelo.",
      },
      {
        type: "term",
        term: "Undercut",
        t: "Parar antes que el rival para salir con neumáticos nuevos y adelantarlo.",
      },
      {
        type: "term",
        term: "Overcut",
        t: "Quedarse más tiempo en pista para ganar posición cuando el rival para.",
      },
      {
        type: "term",
        term: "Parque cerrado",
        t: "Período en el que el coche no puede ser modificado de forma libre.",
      },
      {
        type: "term",
        term: "Vuelta de formación",
        t: "Vuelta previa a la salida, para calentar neumáticos y frenos.",
      },
      {
        type: "term",
        term: "Subviraje (understeer)",
        t: "El coche no gira lo suficiente y tiende a salirse por delante en la curva.",
      },
      {
        type: "term",
        term: "Sobreviraje (oversteer)",
        t: "El coche gira de más y tiende a irse de atrás.",
      },
      {
        type: "term",
        term: "Ritmo (pace)",
        t: "Velocidad media del piloto en vueltas consecutivas, clave para la carrera.",
      },
    ],
  },
];
const a0_0x2acd3e = [
  {
    q: "¿Qué significa una bandera azul agitada?",
    opts: [
      "Peligro en la pista",
      "Un auto más rápido se acerca: hay que cederle el paso",
      "La carrera se detiene",
      "Último giro",
    ],
    a: 1,
    why: "La azul avisa que un auto más rápido está por alcanzarte.",
  },
  {
    q: "¿Qué indica la bandera roja?",
    opts: [
      "Pista resbaladiza",
      "Sesión detenida: todos vuelven al box",
      "Penalización de 5 segundos",
      "Vuelta de formación",
    ],
    a: 1,
    why: "Con la roja se interrumpe la sesión y los autos regresan a boxes.",
  },
  {
    q: "Un neumático con aro rojo es…",
    opts: ["Intermedio", "Blando", "Duro", "De lluvia"],
    a: 1,
    why: "El blando es rojo: agarra mucho, pero dura poco.",
  },
  {
    q: "¿Cuántos compuestos secos distintos hay que usar como mínimo en una carrera seca?",
    opts: ["Uno", "Dos", "Tres", "Ninguno"],
    a: 1,
    why: "Es una regla del reglamento que obliga a planificar estrategias.",
  },
  {
    q: "Una bandera negra con círculo naranja significa…",
    opts: [
      "Descalificación",
      "Problema mecánico que puede ser peligroso",
      "Adelantamiento permitido",
      "Fin de la carrera",
    ],
    a: 1,
    why: "El auto debe volver al box porque su estado puede ser peligroso.",
  },
];
const INFO_RENDER = {
  card: (_0x158e99) =>
    '\n    <article class="info-card glass">\n      <div class="ic-top"><span class="ic-ico">' +
    _0x158e99.icon +
    "</span><h4>" +
    escI(_0x158e99.title) +
    '</h4></div>\n      <p class="info-text">' +
    escI(_0x158e99.t) +
    "</p>\n    </article>",
  tyre: (_0x34e4b2) =>
    '\n    <article class="tyre-card glass" style="--c:' +
    _0x34e4b2.color +
    '">\n      ' +
    a0_0x130a97(_0x34e4b2.color, _0x34e4b2.letter) +
    '\n      <div class="tyre-name">' +
    escI(_0x34e4b2.name) +
    '</div>\n      <div class="tyre-sub">' +
    escI(_0x34e4b2.sub) +
    '</div>\n      <p class="info-text">' +
    escI(_0x34e4b2.t) +
    "</p>\n    </article>",
  flag: (_0x26151d) =>
    '\n    <article class="flag-card glass">\n      ' +
    a0_0x4277a5[_0x26151d.kind] +
    '\n      <div class="flag-name">' +
    escI(_0x26151d.name) +
    '</div>\n      <p class="info-text">' +
    escI(_0x26151d.t) +
    "</p>\n    </article>",
  term: (_0x59e641) =>
    '\n    <article class="term-card glass">\n      <h4>' +
    escI(_0x59e641.term) +
    "</h4>\n      <p>" +
    escI(_0x59e641.t) +
    "</p>\n    </article>",
};
function a0_0x2d729c(_0x467f4f) {
  const _0x547cc1 = [];
  let _0x267186 = null;
  let _0x4f53c3 = [];
  const _0x4bf8bd = () => {
    if (_0x4f53c3.length) {
      _0x547cc1.push(
        '<div class="info-grid info-grid--' +
          _0x267186 +
          '">' +
          _0x4f53c3.map(INFO_RENDER[_0x267186]).join("") +
          "</div>",
      );
    }
    _0x4f53c3 = [];
  };
  _0x467f4f.forEach((_0x309490) => {
    if (_0x309490.type !== _0x267186) {
      _0x4bf8bd();
      _0x267186 = _0x309490.type;
    }
    _0x4f53c3.push(_0x309490);
  });
  _0x4bf8bd();
  return _0x547cc1.join("");
}
function a0_0x53f0ad() {
  const _0x487451 = a0_0x2acd3e.length;
  const _0x1e28c7 = INFO.quiz;
  if (_0x1e28c7.done) {
    const _0x17e75b =
      _0x1e28c7.score >= 4
        ? "Eres fan de verdad 🏆"
        : _0x1e28c7.score >= 2
          ? "Vas muy bien 👏"
          : "Sigue explorando, se aprende rápido 🚀";
    return (
      '<div class="quiz glass quiz-end">\n      <span class="eyebrow">Resultado del quiz</span>\n      <div class="quiz-score">' +
      _0x1e28c7.score +
      "/" +
      _0x487451 +
      '</div>\n      <p class="quiz-why">' +
      _0x17e75b +
      '</p>\n      <button class="btn-sm" data-info-quiz="restart">Repetir quiz</button>\n    </div>'
    );
  }
  const _0x245a03 = a0_0x2acd3e[_0x1e28c7.i];
  const _0x1d22ad = _0x245a03.opts
    .map((_0x3ee1e2, _0x246676) => {
      let _0x376c82 = "";
      if (_0x1e28c7.answered !== null) {
        if (_0x246676 === _0x245a03.a) {
          _0x376c82 = "ok";
        } else if (_0x246676 === _0x1e28c7.answered) {
          _0x376c82 = "bad";
        }
      }
      return (
        '<button class="quiz-opt ' +
        _0x376c82 +
        '" data-info-quiz="opt" data-k="' +
        _0x246676 +
        '" ' +
        (_0x1e28c7.answered !== null ? "disabled" : "") +
        ">" +
        escI(_0x3ee1e2) +
        "</button>"
      );
    })
    .join("");
  const _0x867a54 =
    _0x1e28c7.answered !== null
      ? '<p class="quiz-why">' +
        escI(_0x245a03.why) +
        '</p>\n       <button class="btn-sm" data-info-quiz="next">' +
        (_0x1e28c7.i === _0x487451 - 1 ? "Ver resultado" : "Siguiente") +
        "</button>"
      : "";
  return (
    '<div class="quiz glass">\n    <div class="quiz-head">\n      <span class="eyebrow">Pon a prueba tu conocimiento</span>\n      <span class="quiz-count">' +
    (_0x1e28c7.i + 1) +
    " / " +
    _0x487451 +
    '</span>\n    </div>\n    <h3 class="quiz-q">' +
    escI(_0x245a03.q) +
    '</h3>\n    <div class="quiz-opts">' +
    _0x1d22ad +
    "</div>\n    " +
    _0x867a54 +
    "\n  </div>"
  );
}
function a0_0x37a67a(_0x38b070, _0x3eb6c3) {
  return a0_0x37523e(
    [_0x38b070.title, _0x38b070.name, _0x38b070.term, _0x38b070.t]
      .filter(Boolean)
      .join(" "),
  ).includes(_0x3eb6c3);
}
function a0_0x29c827(_0x537802) {
  const _0x2ac3a4 = INFO_SECTIONS.map((_0x1aa449) => ({
    s: _0x1aa449,
    items: _0x1aa449.items.filter((_0x15c636) =>
      a0_0x37a67a(_0x15c636, _0x537802),
    ),
  })).filter((_0x3ad6ae) => _0x3ad6ae.items.length);
  if (!_0x2ac3a4.length) {
    return (
      '<p class="empty-msg">No encontramos nada para "' +
      escI(_0x537802) +
      '". Prueba con otra palabra.</p>'
    );
  }
  return _0x2ac3a4
    .map(
      ({ s: _0x1e2634, items: _0x75cadc }) =>
        '<h3 class="info-result-h">' +
        _0x1e2634.icon +
        " " +
        escI(_0x1e2634.title) +
        "</h3>" +
        a0_0x2d729c(_0x75cadc),
    )
    .join("");
}
function a0_0x241401() {
  const _0x337f6f = document.getElementById("infoBody");
  if (!_0x337f6f) {
    return;
  }
  if (INFO.query.length >= 2) {
    _0x337f6f.innerHTML = a0_0x29c827(INFO.query);
  } else {
    const _0x5df638 = Math.max(
      0,
      INFO_SECTIONS.findIndex((_0xdd771b) => _0xdd771b.id === INFO.sec),
    );
    const _0x3e0f64 = INFO_SECTIONS[_0x5df638];
    _0x337f6f.innerHTML =
      '\n      <div class="info-sec-head">\n        <span class="eyebrow">' +
      _0x3e0f64.icon +
      " Sección " +
      (_0x5df638 + 1) +
      " de " +
      INFO_SECTIONS.length +
      '</span>\n        <h3 class="display">' +
      escI(_0x3e0f64.title) +
      '</h3>\n        <p class="info-intro">' +
      escI(_0x3e0f64.intro) +
      "</p>\n      </div>\n      " +
      a0_0x2d729c(_0x3e0f64.items) +
      "\n      " +
      (_0x3e0f64.quiz ? '<div id="infoQuiz">' + a0_0x53f0ad() + "</div>" : "");
  }
  document
    .querySelectorAll("[data-info-sec]")
    .forEach((_0x2be643) =>
      _0x2be643.classList.toggle(
        "on",
        _0x2be643.dataset.infoSec === INFO.sec && INFO.query.length < 2,
      ),
    );
}
function a0_0x4a1ad6() {
  const _0x2833b1 = document.getElementById("v-info");
  if (!_0x2833b1) {
    console.error('Falta <section id="v-info"> en index.html');
    return;
  }
  if (_0x2833b1.dataset.built === "1") {
    return;
  }
  _0x2833b1.dataset.built = "1";
  _0x2833b1.innerHTML =
    '\n    <div class="info-hero glass">\n      <div>\n        <span class="eyebrow">Aprende F1</span>\n        <h2 class="display info-title">Todo sobre la Fórmula 1</h2>\n      </div>\n      <input id="infoSearch" type="search" placeholder="Buscar: Q1, neumáticos, Safety Car…" autocomplete="off">\n    </div>\n    <div class="info-layout">\n      <nav class="info-nav glass" aria-label="Secciones de Info">\n        ' +
    INFO_SECTIONS.map(
      (_0x3e5c93) =>
        '\n          <button class="info-nav-btn" data-info-sec="' +
        _0x3e5c93.id +
        '">\n            <span class="ico">' +
        _0x3e5c93.icon +
        "</span>\n            <span>" +
        escI(_0x3e5c93.title) +
        "</span>\n          </button>",
    ).join("") +
    '\n      </nav>\n      <div class="info-body" id="infoBody"></div>\n    </div>';
  a0_0x241401();
  document
    .getElementById("infoSearch")
    .addEventListener("input", (_0x5a672f) => {
      INFO.query = a0_0x37523e(_0x5a672f.target.value.trim());
      a0_0x241401();
    });
}
document.addEventListener("click", (_0x416b29) => {
  const _0x26d860 = _0x416b29.target.closest("[data-view]");
  if (_0x26d860) {
    a0_0x49a638(_0x26d860.dataset.view);
    if (_0x26d860.dataset.jump) {
      setTimeout(
        () =>
          document
            .querySelector('[data-champ-tab="' + _0x26d860.dataset.jump + '"]')
            ?.click(),
        0,
      );
    }
    return;
  }
  const _0x582b48 = _0x416b29.target.closest(".team-card");
  if (_0x582b48) {
    return a0_0x243121(_0x582b48.dataset.team);
  }
  const _0x2cf9ee = _0x416b29.target.closest("[data-champ-tab]");
  if (_0x2cf9ee) {
    document
      .querySelectorAll("#champTabs .chip")
      .forEach((_0xe834bd) =>
        _0xe834bd.classList.toggle("on", _0xe834bd === _0x2cf9ee),
      );
    const _0x1be335 = _0x2cf9ee.dataset.champTab;
    const _0x23f089 = a0_0x3f0359("#champ-pos");
    const _0x6e2408 = a0_0x3f0359("#champ-cal");
    if (_0x23f089) {
      _0x23f089.style.display = _0x1be335 === "pos" ? "block" : "none";
    }
    if (_0x6e2408) {
      _0x6e2408.style.display = _0x1be335 === "cal" ? "block" : "none";
    }
    if (_0x1be335 === "cal") {
      a0_0x721060();
    }
    return;
  }
  const _0x25a8f3 = _0x416b29.target.closest("[data-retry]");
  if (_0x25a8f3) {
    a0_0x4722c6.drvPromise = null;
    if (document.querySelector("#v-escuderias.active")) {
      return a0_0x34ca68();
    }
    if (a0_0x522712) {
      return a0_0x12a8c8(a0_0x522712);
    }
    return a0_0x5bdb86();
  }
  const _0x3b8389 = _0x416b29.target.closest("[data-tt]");
  if (_0x3b8389) {
    a0_0x2fde53 = _0x3b8389.dataset.tt;
    return a0_0x34ca68();
  }
  const _0x1421d9 = _0x416b29.target.closest("[data-dt]");
  if (_0x1421d9) {
    a0_0x2fe5e0 = _0x1421d9.dataset.dt;
    return a0_0x5bdb86();
  }
  const _0x13ede7 = _0x416b29.target.closest("[data-drv]");
  if (_0x13ede7) {
    return a0_0x12a8c8(_0x13ede7.dataset.drv);
  }
  const _0x2441b1 = _0x416b29.target.closest("[data-ct]");
  if (_0x2441b1) {
    a0_0x4722c6.tab = _0x2441b1.dataset.ct;
    document
      .querySelectorAll("#circTabs .chip")
      .forEach((_0x4a4718) =>
        _0x4a4718.classList.toggle("on", _0x4a4718 === _0x2441b1),
      );
    return a0_0x50272c();
  }
  const _0x23bcf8 = _0x416b29.target.closest("[data-season]");
  if (_0x23bcf8) {
    return a0_0x593303(_0x23bcf8.dataset.season);
  }
  const _0x545297 = _0x416b29.target.closest("[data-champ]");
  if (_0x545297) {
    return a0_0x59a85d(_0x545297.dataset.champ);
  }
  const _0x1f66b5 = _0x416b29.target.closest("[data-f]");
  if (_0x1f66b5) {
    a0_0x17ad36 = _0x1f66b5.dataset.f;
    document
      .querySelectorAll(".chip[data-f]")
      .forEach((_0x4cc5df) =>
        _0x4cc5df.classList.toggle("on", _0x4cc5df === _0x1f66b5),
      );
    return a0_0x721060();
  }
  const _0x14e6fa = _0x416b29.target.closest("[data-race]");
  if (_0x14e6fa) {
    return a0_0x50f42b(_0x14e6fa.dataset.race);
  }
  const _0x48f58f = _0x416b29.target.closest("[data-circ]");
  if (_0x48f58f) {
    return a0_0x66f74b(_0x48f58f.dataset.circ, _0x48f58f.dataset.src);
  }
  const _0x155785 = _0x416b29.target.closest("[data-info-sec]");
  if (_0x155785) {
    INFO.sec = _0x155785.dataset.infoSec;
    INFO.query = "";
    const _0x4de7b0 = document.getElementById("infoSearch");
    if (_0x4de7b0) {
      _0x4de7b0.value = "";
    }
    a0_0x241401();
    return;
  }
  const _0x44eb12 = _0x416b29.target.closest("[data-info-quiz]");
  if (_0x44eb12) {
    const _0x15cf7c = _0x44eb12.dataset.infoQuiz;
    const _0x545203 = INFO.quiz;
    if (_0x15cf7c === "opt" && _0x545203.answered === null) {
      _0x545203.answered = +_0x44eb12.dataset.k;
      if (_0x545203.answered === a0_0x2acd3e[_0x545203.i].a) {
        _0x545203.score++;
      }
    } else if (_0x15cf7c === "next") {
      if (_0x545203.i === a0_0x2acd3e.length - 1) {
        _0x545203.done = true;
      } else {
        _0x545203.i++;
        _0x545203.answered = null;
      }
    } else if (_0x15cf7c === "restart") {
      Object.assign(_0x545203, {
        i: 0,
        score: 0,
        answered: null,
        done: false,
      });
    }
    const _0x2ecf08 = document.getElementById("infoQuiz");
    if (_0x2ecf08) {
      _0x2ecf08.innerHTML = a0_0x53f0ad();
    }
    return;
  }
  if (_0x416b29.target.id === "modal" || _0x416b29.target.closest("#mClose")) {
    a0_0x5c7976();
  }
});
document.addEventListener("keydown", (_0x421696) => {
  if (_0x421696.key === "Escape") {
    return a0_0x5c7976();
  }
  if (
    (_0x421696.key === "Enter" || _0x421696.key === " ") &&
    _0x421696.target.matches?.(".logo")
  ) {
    _0x421696.preventDefault();
    a0_0x49a638("home");
    return;
  }
  if (_0x421696.key === "Enter" && _0x421696.target.matches?.(".team-card")) {
    _0x421696.preventDefault();
    a0_0x243121(_0x421696.target.dataset.team);
  }
});
const a0_0x245e07 = a0_0x3f0359("#drvSearch");
if (a0_0x245e07) {
  a0_0x245e07.addEventListener("input", (_0x25d736) => {
    a0_0x47fc09 = _0x25d736.target.value;
    if (a0_0x2fe5e0 === "hist" && a0_0x4722c6.drv) {
      a0_0x5bdb86();
    }
  });
}
const a0_0x1a0f5a = a0_0x3f0359("#teamSearch");
if (a0_0x1a0f5a) {
  a0_0x1a0f5a.addEventListener("input", (_0x3ce619) => {
    a0_0x25118d = _0x3ce619.target.value;
    if (a0_0x2fde53 === "hist") {
      a0_0x34ca68();
    }
  });
}
function a0_0x3f7e81() {
  a0_0x52322c();
  a0_0x4f2a1c();
  a0_0x281a63();
  a0_0x721060();
  a0_0x3bef71();
  a0_0x3becfe();
  a0_0x50272c();
}
(async function a0_0x2e2d89() {
  try {
    await a0_0x510c39();
    a0_0x484245.source = "api";
  } catch (_0x2ff51a) {
    console.warn("API no disponible, usando datos locales:", _0x2ff51a);
    a0_0x281961();
  }
  a0_0x3f7e81();
  if (a0_0x484245.source === "api") {
    a0_0x521c52(() => {
      if (a0_0x2fe5e0 === "hof") {
        a0_0xdd43dd();
      }
    }).catch((_0x2c8f1e) => console.warn("Campeones:", _0x2c8f1e));
  } else {
    a0_0x484245.champsDone = true;
    if (a0_0x2fe5e0 === "hof") {
      a0_0xdd43dd();
    }
  }
})();
