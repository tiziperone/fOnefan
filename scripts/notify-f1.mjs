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

function fmtArg(ms) {
  return new Date(ms).toLocaleString('es-AR', {
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
  console.log('Ejecución:', fmtArg(now));

  const year = new Date().getUTCFullYear();
  const res = await fetch(`https://api.openf1.org/v1/sessions?year=${year}`);
  if (!res.ok) throw new Error(`Error OpenF1: ${res.status}`);
  const sessions = await res.json();

  let scheduled = [];
  if (fs.existsSync(STATE_FILE)) {
    scheduled = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  }

  let updated = false;

  for (const s of sessions) {
    const startMs = Date.parse(s.date_start);
    if (isNaN(startMs)) continue;

    // Hora exacta del envío: 30 minutos antes del inicio de la sesión
    const sendAtMs = startMs - 30 * 60 * 1000;
    const hoursUntilSend = (sendAtMs - now) / (1000 * 60 * 60);
    const key = String(s.session_key);

    // Programar todas las sesiones cuya alerta caiga entre 1 minuto y 72 horas a futuro
    if (hoursUntilSend > 0.02 && hoursUntilSend <= 72 && !scheduled.includes(key)) {
      const sesion = SESSION_NAMES[s.session_name] || s.session_name;
      const gp = s.country_name || s.location || 'Fórmula 1';
      const sendAfterISO = new Date(sendAtMs).toISOString();

      const pushRes = await fetch('https://api.onesignal.com/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Key ${API_KEY}`
        },
        body: JSON.stringify({
          app_id: APP_ID,
          included_segments: ['Total Subscriptions'],
          send_after: sendAfterISO,
          headings: {
            es: `🏎️ ${sesion} comienza en 30 minutos`,
            en: `🏎️ ${s.session_name} starts in 30 minutes`
          },
          contents: {
            es: `GP de ${gp} · Aprovechá a preparar el mate que enseguida comienza el show.`,
            en: `${gp} GP is starting soon!`
          },
          url: 'https://fonefan.com.ar'
        })
      });

      const pushData = await pushRes.json();
      console.log(
        `Programado [${gp} - ${sesion}] para ${fmtArg(sendAtMs)} (HTTP ${pushRes.status}):`,
        JSON.stringify(pushData)
      );

      if (!pushRes.ok || pushData.errors) {
        throw new Error(`OneSignal rechazó la programación: ${JSON.stringify(pushData)}`);
      }

      scheduled.push(key);
      updated = true;
    }
  }

  if (updated) {
    fs.writeFileSync(STATE_FILE, JSON.stringify(scheduled.slice(-100), null, 2));
  } else {
    console.log('No hay nuevas sesiones para programar en las próximas 72 horas.');
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});