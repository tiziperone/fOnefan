import fs from 'node:fs';

const APP_ID = '3a9e0d3c-243e-4fc3-acb0-55ac800cb444';
const API_KEY = process.env.ONESIGNAL_API_KEY;
const STATE_FILE = 'scripts/notified-sessions.json';

const SESSION_NAMES = {
  'Practice 1': 'Práctica 1',
  'Practice 2': 'Práctica 2',
  'Practice 3': 'Práctica 3',
  'Sprint Qualifying': 'Clasificación Sprint',
  'Sprint Shootout': 'Clasificación Sprint',
  'Sprint': 'Carrera Sprint',
  'Qualifying': 'Clasificación',
  'Race': 'Carrera'
};

function fmtArg(iso) {
  return new Date(iso).toLocaleString('es-AR', {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }) + ' hs (ARG)';
}

async function run() {
  if (!API_KEY) throw new Error('Falta ONESIGNAL_API_KEY');

  const now = Date.now();
  console.log('Hora actual ejecución:', fmtArg(now));

  const year = new Date().getUTCFullYear();
  const res = await fetch(`https://api.openf1.org/v1/sessions?year=${year}`);
  if (!res.ok) throw new Error(`Error OpenF1: ${res.status}`);
  const sessions = await res.json();

  let notified = [];
  if (fs.existsSync(STATE_FILE)) {
    notified = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  }

  let updated = false;

  const futuras = sessions
    .map(s => ({ ...s, diffMin: (Date.parse(s.date_start) - now) / 60000 }))
    .filter(s => !isNaN(s.diffMin) && s.diffMin > 0)
    .sort((a, b) => a.diffMin - b.diffMin);

  if (futuras.length) {
    const prox = futuras[0];
    console.log(
      `Próxima sesión: ${prox.country_name} - ${prox.session_name} | Inicio: ${fmtArg(prox.date_start)} | Faltan ${Math.round(prox.diffMin)} min`
    );
  } else {
    console.log('No hay sesiones futuras registradas en OpenF1.');
  }

  for (const s of sessions) {
    const start = Date.parse(s.date_start);
    if (isNaN(start)) continue;

    const diffMin = (start - now) / 60000;
    const key = String(s.session_key);

    // Ventana de 5 a 60 minutos antes del inicio (absorbe retrasos de cron de GitHub)
    if (diffMin >= 5 && diffMin <= 60 && !notified.includes(key)) {
      const sesion = SESSION_NAMES[s.session_name] || s.session_name;
      const gp = s.country_name || s.location || 'Fórmula 1';
      const mins = Math.round(diffMin);

      const pushRes = await fetch('https://api.onesignal.com/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Key ${API_KEY}`
        },
        body: JSON.stringify({
          app_id: APP_ID,
          included_segments: ['Total Subscriptions'],
          headings: {
            es: `🏎️ ${sesion} comienza en ${mins} minutos`,
            en: `🏎️ ${s.session_name} starts in ${mins} minutes`
          },
          contents: {
            es: `GP de ${gp} · Aprovechá a preparar el mate que enseguida comienza el show.`,
            en: `${gp} GP is starting soon!`
          },
          url: 'https://fonefan.com.ar'
        })
      });

      const pushData = await pushRes.json();
      console.log(`Enviado [${gp} - ${sesion}] (HTTP ${pushRes.status}):`, JSON.stringify(pushData));

      if (!pushRes.ok || pushData.errors) {
        throw new Error(`OneSignal rechazó el envío: ${JSON.stringify(pushData)}`);
      }

      notified.push(key);
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(STATE_FILE, JSON.stringify(notified.slice(-100), null, 2));
  } else {
    console.log('Sin sesiones próximas en ventana de aviso (5 a 60 min).');
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});