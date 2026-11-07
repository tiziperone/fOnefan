import fs from 'node:fs';

const APP_ID = '3a9e0d3c-243e-4fc3-acb0-55ac800cb444';
const API_KEY = process.env.ONESIGNAL_API_KEY;
const STATE_FILE = 'scripts/notified-sessions.json';

const SESSION_NAMES = {
  'Practice 1': 'Práctica 1',
  'Practice 2': 'Práctica 2',
  'Practice 3': 'Práctica 3',
  'Sprint Qualifying': 'Clasificación Sprint',
  'Sprint': 'Carrera Sprint',
  'Qualifying': 'Clasificación',
  'Race': 'Carrera'
};

async function run() {
  if (!API_KEY) throw new Error('Falta ONESIGNAL_API_KEY');

  const year = new Date().getUTCFullYear();
  const res = await fetch(`https://api.openf1.org/v1/sessions?year=${year}`);
  if (!res.ok) throw new Error(`Error OpenF1: ${res.status}`);
  const sessions = await res.json();

  let notified = [];
  if (fs.existsSync(STATE_FILE)) {
    notified = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  }

  const now = Date.now();
  let updated = false;

  for (const s of sessions) {
    const start = Date.parse(s.date_start);
    if (isNaN(start)) continue;

    const diffMin = (start - now) / (1000 * 60);
    const key = String(s.session_key);

    if (diffMin >= 15 && diffMin <= 38 && !notified.includes(key)) {
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
      console.log(`Enviado [${gp} - ${sesion}]:`, pushData);

      if (pushRes.ok) {
        notified.push(key);
        updated = true;
      }
    }
  }

  if (updated) {
    fs.writeFileSync(STATE_FILE, JSON.stringify(notified.slice(-100), null, 2));
  } else {
    console.log('Sin sesiones próximas en ventana de 30 minutos.');
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});