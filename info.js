/* ================= fOnefan · SECCIÓN INFO =================
   Se monta sola dentro de #v-info. Usa el menú de pestañas existente (data-view="info"). */
(function () {
  'use strict';

  /* ---------- Estado ---------- */
  let mode = 'all';          // 'beg' | 'fan' | 'all'
  let activeSec = 'fundamentos';
  let query = '';
  const quiz = { i: 0, score: 0, answered: null, done: false };

  /* ---------- Utilidades ---------- */
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const norm = s => String(s ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  /* ---------- Ilustraciones SVG ---------- */
  const fl = (fill, inner = '') =>
    `<svg class="flag-svg" viewBox="0 0 160 100" aria-hidden="true"><rect width="160" height="100" fill="${fill}"/>${inner}</svg>`;

  let checkers = '';
  for (let r = 0; r < 5; r++) for (let c = 0; c < 8; c++)
    if ((r + c) % 2 === 0) checkers += `<rect x="${c * 20}" y="${r * 20}" width="20" height="20" fill="#0b0b10"/>`;

  const FLAG = {
    green:       fl('#16a34a'),
    yellow:      fl('#facc15'),
    yellowred:   fl('#facc15', [30, 75, 120].map(x => `<rect x="${x}" y="0" width="10" height="100" fill="#dc2626"/>`).join('')),
    red:         fl('#dc2626'),
    blue:        fl('#2563eb'),
    white:       fl('#f8fafc'),
    black:       fl('#0b0b10'),
    blackorange: fl('#0b0b10', '<circle cx="80" cy="50" r="24" fill="#f97316"/>'),
    blackwhite:  fl('#f8fafc', '<polygon points="0,0 160,0 0,100" fill="#0b0b10"/>'),
    checkered:   fl('#f8fafc', checkers),
    sc:          fl('#facc15', '<text x="80" y="66" text-anchor="middle" font-family="Titillium Web,sans-serif" font-weight="900" font-size="46" fill="#0b0b10">SC</text>'),
    vsc:         fl('#facc15', '<text x="80" y="62" text-anchor="middle" font-family="Titillium Web,sans-serif" font-weight="900" font-size="36" fill="#0b0b10">VSC</text>')
  };

  // Neumático: aro de color. Los de lluvia tienen dibujo (línea punteada) para mostrar el tacos.
  const tyreSVG = (color, letter) => {
    const grooves = letter === 'I' || letter === 'W' ? ' stroke-dasharray="7 5"' : '';
    return `<svg class="tyre-svg" viewBox="0 0 120 120" aria-hidden="true">
      <circle cx="60" cy="60" r="57" fill="#0d0d12"/>
      <circle cx="60" cy="60" r="49" fill="none" stroke="${color}" stroke-width="11"${grooves}/>
      <circle cx="60" cy="60" r="34" fill="#1b1b22"/>
      <text x="60" y="71" text-anchor="middle" font-family="Titillium Web,sans-serif" font-weight="900" font-size="30" fill="${color}">${letter}</text>
    </svg>`;
  };

  /* ---------- Contenido ---------- */
  const SEC_DATA = [

    /* 1 · FUNDAMENTOS */
    {
      id: 'fundamentos', icon: '🏁', title: 'Fundamentos',
      intro: 'Cómo se arma un fin de semana de Gran Premio y cómo se reparten los puntos.',
      items: [
        { type: 'card', icon: '📅', title: 'El fin de semana',
          beg: 'Viernes: prácticas libres. Sábado: clasificación. Domingo: carrera. Algunos fines de semana tienen formato Sprint.',
          fan: 'Con Sprint hay una práctica menos y una Clasificación Sprint que define la parrilla de una carrera corta de unos 100 km.' },
        { type: 'card', icon: '🏁', title: 'La parrilla',
          beg: 'Es el orden de salida. El piloto más rápido en clasificación sale primero: es la pole position.',
          fan: 'Antes de la salida hay una vuelta de formación para calentar neumáticos y frenos.' },
        { type: 'card', icon: '🥇', title: 'Puntos',
          beg: 'Puntúan los 10 primeros: 25, 18, 15, 12, 10, 8, 6, 4, 2 y 1.',
          fan: 'En el Sprint puntúan los 8 primeros: 8, 7, 6, 5, 4, 3, 2 y 1 puntos.' },
        { type: 'card', icon: '🏎️', title: 'Pilotos y escuderías',
          beg: 'Cada escudería tiene dos pilotos. Hay dos campeonatos: el de pilotos y el de constructores.',
          fan: 'El de constructores suma los puntos de sus dos pilotos. Ambos títulos se definen por separado.' },
        { type: 'card', icon: '🔒', title: 'Parque cerrado',
          beg: 'Desde la clasificación hasta la carrera, el coche queda bajo control del equipo técnico.',
          fan: 'Limita los cambios de puesta a punto. Cambiar piezas de motor o caja implica penalización de parrilla.' }
      ]
    },

    /* 2 · NEUMÁTICOS */
    {
      id: 'neumaticos', icon: '🛞', title: 'Neumáticos',
      intro: 'Son el único contacto del coche con la pista. Elegir bien la mezcla es media carrera.',
      items: [
        { type: 'tyre', color: '#ef4444', letter: 'S', name: 'Blando (Soft)', sub: 'Aro rojo',
          beg: 'Es el que más agarra, pero también el que más se desgasta. Ideal para clasificar y para tramos rápidos cortos.',
          fan: 'Si se degrada demasiado aparecen ampollas en la superficie, conocidas como "blistering".' },
        { type: 'tyre', color: '#facc15', letter: 'M', name: 'Medio (Medium)', sub: 'Aro amarillo',
          beg: 'Equilibrio entre agarre y durabilidad. Es la base de muchas estrategias de carrera.',
          fan: 'Muchos equipos lo usan como primer juego de carrera por su buena consistencia.' },
        { type: 'tyre', color: '#f1f5f9', letter: 'H', name: 'Duro (Hard)', sub: 'Aro blanco',
          beg: 'Dura más, pero agarra menos. Sirve para estirar un tramo largo.',
          fan: 'Tarda más en entrar en temperatura, así que puede perder tiempo al inicio de un tramo.' },
        { type: 'tyre', color: '#22c55e', letter: 'I', name: 'Intermedio', sub: 'Aro verde',
          beg: 'Para pista mojada o lluvia leve. Tiene ranuras para evacuar el agua.',
          fan: 'Con pista húmeda pero sin lluvia fuerte, a veces son más rápidos que los de lluvia.' },
        { type: 'tyre', color: '#3b82f6', letter: 'W', name: 'Lluvia (Wet)', sub: 'Aro azul',
          beg: 'Para lluvia intensa. Tiene mucho dibujo para expulsar agua.',
          fan: 'Con la pista secándose se vuelven muy lentos y hay que cambiarlos.' },
        { type: 'card', icon: '🔁', title: 'Regla de los dos compuestos',
          beg: 'En una carrera seca hay que usar al menos dos tipos de neumático distintos.',
          fan: 'Esta obligación reglamentaria es la base de casi todas las estrategias de paradas.' },
        { type: 'card', icon: '⏱️', title: 'La parada en boxes',
          beg: 'Cambiar los cuatro neumáticos lleva unos 2 a 3 segundos con el coche detenido.',
          fan: 'Los equipos entrenan para reducir al mínimo ese tiempo. A eso se suma el de entrar y salir de la calle de boxes.' },
        { type: 'card', icon: '🌡️', title: 'Temperatura',
          beg: 'Los neumáticos necesitan calentarse para agarrar. Por eso se calientan en la vuelta de formación.',
          fan: 'Cada compuesto tiene una ventana de temperatura ideal. Si se sale de ella, pierde agarre rápido.' },
        { type: 'card', icon: '🧠', title: 'Undercut y overcut',
          beg: 'Parar antes que el rival para salir con neumáticos nuevos y pasarlo en pista.',
          fan: 'El overcut es lo contrario: quedarse más tiempo en pista, aprovechando que el rival pierde tiempo en boxes.' }
      ]
    },

    /* 3 · BANDERAS */
    {
      id: 'banderas', icon: '🚩', title: 'Banderas',
      intro: 'Los colores de los comisarios son el lenguaje de la pista. Aprenderlos te hace entender cada carrera.',
      extra: 'quiz',
      items: [
        { type: 'flag', kind: 'green', name: 'Verde',
          beg: 'Pista libre: se corre con normalidad y se puede adelantar. Aparece al inicio y al terminar una neutralización.',
          fan: 'Tras una bandera amarilla o roja, la verde confirma que la zona ya es segura.' },
        { type: 'flag', kind: 'yellow', name: 'Amarilla',
          beg: 'Peligro en la pista o cerca. Reduce la velocidad y no adelantes en esa zona.',
          fan: 'Si es doble (agitada en dos puestos), el peligro es inmediato y puede exigir una reducción fuerte de velocidad.' },
        { type: 'flag', kind: 'yellowred', name: 'Amarilla con franjas rojas',
          beg: 'La pista está resbaladiza por aceite, agua o restos.',
          fan: 'Se muestra en el puesto de comisarios de la zona afectada.' },
        { type: 'flag', kind: 'red', name: 'Roja',
          beg: 'Sesión detenida. Todos los autos vuelven al box lo antes posible.',
          fan: 'Se usa solo en situaciones graves. La carrera puede reanudarse con una nueva salida.' },
        { type: 'flag', kind: 'blue', name: 'Azul',
          beg: 'Un auto más rápido está por alcanzarte. Déjalo pasar.',
          fan: 'Si no cedes el paso, el reglamento permite penalizarte.' },
        { type: 'flag', kind: 'white', name: 'Blanca',
          beg: 'Hay un vehículo lento en pista, como un auto de servicio o un coche con problemas.',
          fan: 'Es un aviso para extremar la precaución en esa zona.' },
        { type: 'flag', kind: 'black', name: 'Negra',
          beg: 'El piloto queda descalificado de esa sesión y debe volver al box.',
          fan: 'Puede aplicarse por una infracción grave. Se muestra junto al número del coche.' },
        { type: 'flag', kind: 'blackorange', name: 'Negra con círculo naranja',
          beg: 'El coche tiene un problema mecánico o un daño que puede ser peligroso. Debe volver al box.',
          fan: 'Es un aviso técnico: el equipo recibe la información por radio y el piloto regresa a boxes.' },
        { type: 'flag', kind: 'blackwhite', name: 'Negra y blanca dividida',
          beg: 'Advertencia formal por conducta antideportiva. Si se repite, llega una sanción.',
          fan: 'Es un aviso previo a una penalización, mostrado con el número del piloto.' },
        { type: 'flag', kind: 'checkered', name: 'Cuadros',
          beg: 'Fin de la sesión. En la carrera, es la bandera del ganador.',
          fan: 'Cuando se muestra en carrera, el coche ya completó la última vuelta.' }
      ]
    },

    /* 4 · SEGURIDAD */
    {
      id: 'seguridad', icon: '🛡️', title: 'Seguridad',
      intro: 'La F1 es el deporte más seguro que existe gracias a décadas de investigación. Así te cuidan a ti y a los pilotos.',
      items: [
        { type: 'flag', kind: 'sc', name: 'Safety Car',
          beg: 'Un auto de seguridad entra a la pista tras un incidente. Los pilotos se forman detrás y no adelantan.',
          fan: 'Se usa para retirar restos o asistir a un accidente. El pit lane puede abrirse o cerrarse según el caso.' },
        { type: 'flag', kind: 'vsc', name: 'Virtual Safety Car',
          beg: 'La carrera sigue, pero todos deben respetar un tiempo de referencia en cada sector, sin auto físico en pista.',
          fan: 'Parar en boxes durante un VSC cuesta menos tiempo, porque el campo completo va más lento.' },
        { type: 'card', icon: '🛡️', title: 'Halo',
          beg: 'Estructura de titanio sobre la cabeza del piloto, obligatoria desde 2018. Protege ante impactos de objetos o de otros coches.',
          fan: 'Se diseñó para soportar cargas de varias toneladas, y ha protegido a pilotos en accidentes graves.' },
        { type: 'card', icon: '🧱', title: 'Monocasco',
          beg: 'La cápsula del piloto es de fibra de carbono: muy rígida y ligera.',
          fan: 'Se somete a pruebas de impacto exigentes antes de homologarse.' },
        { type: 'card', icon: '⛑️', title: 'Cascos y HANS',
          beg: 'Los cascos son de fibra de carbono y el dispositivo HANS sujeta el cuello durante un choque.',
          fan: 'El HANS es obligatorio desde 2003 y reduce el riesgo de lesiones cervicales.' },
        { type: 'card', icon: '🚧', title: 'Barreras y zonas de escape',
          beg: 'Las barreras absorben energía deformándose y las zonas de escape frenan a los autos que se salen.',
          fan: 'Las barreras tipo TecPro pueden reemplazarse después de cada impacto.' },
        { type: 'card', icon: '🚑', title: 'Equipo médico',
          beg: 'Hay médicos y rescatistas a lo largo de la pista, listos para intervenir en segundos.',
          fan: 'El coche médico y el de intervención acompañan al Safety Car cuando hace falta.' }
      ]
    },

    /* 5 · TECNOLOGÍA */
    {
      id: 'tecnologia', icon: '⚙️', title: 'Tecnología',
      intro: 'Un monoplaza es una mezcla de aerodinámica, motor híbrido y electrónica. Estas son sus piezas clave.',
      items: [
        { type: 'card', icon: '🪽', title: 'DRS',
          beg: 'Alerón trasero móvil que se abre en zonas marcadas para ganar velocidad en recta y facilitar adelantamientos.',
          fan: 'Se habilita si el piloto está a menos de 1 segundo del auto de adelante al pasar por el punto de detección.' },
        { type: 'card', icon: '🌪️', title: 'Efecto suelo',
          beg: 'Los coches generan carga y se pegan al asfalto gracias a los túneles bajo el monoplaza.',
          fan: 'Desde 2022 el suelo es el principal generador de carga. Cuando el flujo se altera aparece el "porpoising", un rebote a alta velocidad.' },
        { type: 'card', icon: '⚡', title: 'Unidad de potencia',
          beg: 'Combina un motor de combustión con energía eléctrica que se recupera al frenar.',
          fan: 'Desde 2026, el reglamento da más peso a la energía eléctrica, elimina la MGU-H y exige combustible 100 % sostenible.' },
        { type: 'card', icon: '🔥', title: 'Frenos',
          beg: 'Discos de carbono que frenan con fuerzas de varias veces el peso del piloto.',
          fan: 'En algunas frenadas se superan los 5 G de desaceleración.' },
        { type: 'card', icon: '🎛️', title: 'El volante',
          beg: 'Es casi un ordenador: el piloto cambia marchas, frenos, diferencial y modos del motor desde ahí.',
          fan: 'Los mapas de motor y el freno motor se ajustan vuelta a vuelta según la estrategia.' },
        { type: 'card', icon: '🌬️', title: 'Aerodinámica',
          beg: 'Alerones y pontones dirigen el aire para pegar el coche a la pista.',
          fan: 'Cada circuito usa una configuración distinta: más carga para las curvas o menos resistencia para las rectas.' },
        { type: 'card', icon: '🛞', title: 'Ruedas de 18"',
          beg: 'Desde 2022 las llantas son de 18 pulgadas, con neumáticos de perfil bajo.',
          fan: 'El perfil bajo mejora la respuesta del coche y se combina con el efecto suelo.' }
      ]
    },

    /* 6 · REGLAS Y PENALIZACIONES */
    {
      id: 'reglas', icon: '📜', title: 'Reglas y penalizaciones',
      intro: 'Las infracciones se castigan de distintas formas. Desde una advertencia hasta la descalificación.',
      items: [
        { type: 'card', icon: '📝', title: 'Advertencia',
          beg: 'Un aviso oficial por una infracción leve. No cambia el resultado.',
          fan: 'Varias advertencias pueden terminar convirtiéndose en una sanción.' },
        { type: 'card', icon: '⏱️', title: 'Tiempo añadido (+5 s / +10 s)',
          beg: 'Se suman 5 o 10 segundos al tiempo final de la carrera.',
          fan: 'Con diferencias chicas al final, un +5 s puede cambiar el podio o los puntos.' },
        { type: 'card', icon: '🚦', title: 'Drive-through',
          beg: 'El piloto pasa por el pit lane a velocidad limitada, sin parar.',
          fan: 'Se cumple sin detener el coche, así que se pierde poco tiempo.' },
        { type: 'card', icon: '🛑', title: 'Stop & Go',
          beg: 'Parada obligatoria de 10 segundos en el box antes de seguir.',
          fan: 'Los 10 segundos se cuentan con el coche detenido en la plaza.' },
        { type: 'card', icon: '⬇️', title: 'Penalización de parrilla',
          beg: 'El piloto retrocede posiciones en la salida.',
          fan: 'Es habitual cuando se cambian componentes de motor o caja fuera del límite permitido.' },
        { type: 'card', icon: '🟨', title: 'Límites de pista',
          beg: 'Salirse de la pista para ganar tiempo está prohibido. Los comisarios vigilan las líneas blancas.',
          fan: 'Las salidas repetidas pueden terminar en sanción.' },
        { type: 'card', icon: '❌', title: 'Descalificación',
          beg: 'El piloto queda fuera del resultado de la carrera.',
          fan: 'Puede deberse a no cumplir el peso mínimo o a irregularidades técnicas.' }
      ]
    },

    /* 7 · GLOSARIO */
    {
      id: 'glosario', icon: '📖', title: 'Glosario',
      intro: 'Las palabras que usan los comentaristas, explicadas en una línea.',
      items: [
        { type: 'term', term: 'Apex', def: 'Punto de la curva donde el coche pasa más cerca del interior.' },
        { type: 'term', term: 'Chicane', def: 'Serie de curvas cerradas alternadas que frenan a los autos.' },
        { type: 'term', term: 'Stint', def: 'Tramo de vueltas entre dos paradas en boxes con el mismo juego de neumáticos.' },
        { type: 'term', term: 'Rebufo (slipstream)', def: 'Aire que deja un coche detrás de él. Permite al de atrás ir más rápido.' },
        { type: 'term', term: 'Doblado (lapped)', def: 'Piloto que quedó una vuelta atrás de los líderes.' },
        { type: 'term', term: 'Delta', def: 'Diferencia de tiempo con una referencia, como el líder o el tiempo ideal de un VSC.' },
        { type: 'term', term: 'Pole position', def: 'Primer lugar de la parrilla, para el piloto más rápido de la clasificación.' },
        { type: 'term', term: 'Pit lane', def: 'Calle de boxes, paralela a la pista, por la que se entra a parar.' },
        { type: 'term', term: 'Pit wall', def: 'Muro de boxes: desde ahí el equipo se comunica con el piloto.' },
        { type: 'term', term: 'Graining', def: 'Pequeñas bolitas de goma que se forman en el neumático por falta de temperatura.' },
        { type: 'term', term: 'Blistering', def: 'Ampollas en la superficie del neumático por sobrecalentamiento.' },
        { type: 'term', term: 'Porpoising', def: 'Rebote del coche a alta velocidad causado por el efecto suelo.' },
        { type: 'term', term: 'Undercut', def: 'Parar antes que el rival para salir con neumáticos nuevos y adelantarlo.' },
        { type: 'term', term: 'Overcut', def: 'Quedarse más tiempo en pista para ganar posición cuando el rival para.' },
        { type: 'term', term: 'Parque cerrado', def: 'Período en el que el coche no puede ser modificado de forma libre.' },
        { type: 'term', term: 'Vuelta de formación', def: 'Vuelta previa a la salida, para calentar neumáticos y frenos.' },
        { type: 'term', term: 'Subviraje (understeer)', def: 'El coche no gira lo suficiente y tiende a salirse por delante en la curva.' },
        { type: 'term', term: 'Sobreviraje (oversteer)', def: 'El coche gira de más y tiende a irse de atrás.' },
        { type: 'term', term: 'Ritmo (pace)', def: 'Velocidad media del piloto en vueltas consecutivas, clave para la carrera.' }
      ]
    }
  ];

  /* ---------- Quiz ---------- */
  const QUIZ = [
    { q: '¿Qué significa una bandera azul agitada?',
      opts: ['Peligro en la pista', 'Un auto más rápido se acerca: hay que cederle el paso', 'La carrera se detiene', 'Último giro'],
      a: 1, why: 'La azul avisa que un auto más rápido está por alcanzarte.' },
    { q: '¿Qué indica la bandera roja?',
      opts: ['Pista resbaladiza', 'Sesión detenida: todos vuelven al box', 'Penalización de 5 segundos', 'Vuelta de formación'],
      a: 1, why: 'Con la roja se interrumpe la sesión y los autos regresan a boxes.' },
    { q: 'Un neumático con aro rojo es…',
      opts: ['Intermedio', 'Blando', 'Duro', 'De lluvia'],
      a: 1, why: 'El blando es rojo: agarra mucho, pero dura poco.' },
    { q: '¿Cuántos compuestos secos distintos hay que usar como mínimo en una carrera seca?',
      opts: ['Uno', 'Dos', 'Tres', 'Ninguno'],
      a: 1, why: 'Es una regla del reglamento que obliga a planificar estrategias.' },
    { q: 'Una bandera negra con círculo naranja significa…',
      opts: ['Descalificación', 'Problema mecánico que puede ser peligroso', 'Adelantamiento permitido', 'Fin de la carrera'],
      a: 1, why: 'El auto debe volver al box porque su estado puede ser peligroso.' }
  ];

  /* ---------- Render ---------- */
  const RENDER = {
    card: it => `
      <article class="info-card glass" style="--c:${it.c || '#e10600'}">
        <div class="ic-top"><span class="ic-ico">${it.icon}</span><h4>${esc(it.title)}</h4></div>
        ${levels(it)}
      </article>`,
    tyre: it => `
      <article class="tyre-card glass" style="--c:${it.color}">
        ${tyreSVG(it.color, it.letter)}
        <div class="tyre-name">${esc(it.name)}</div>
        <div class="tyre-sub">${esc(it.sub)}</div>
        ${levels(it)}
      </article>`,
    flag: it => `
      <article class="flag-card glass">
        ${FLAG[it.kind]}
        <div class="flag-name">${esc(it.name)}</div>
        ${levels(it)}
      </article>`,
    term: it => `
      <article class="term-card glass">
        <h4>${esc(it.term)}</h4>
        <p>${esc(it.def)}</p>
      </article>`
  };

  function levels(it) {
    return `${it.beg ? `<div class="lvl beg"><span class="lvl-tag">Para principiantes</span><p>${esc(it.beg)}</p></div>` : ''}` +
           `${it.fan ? `<div class="lvl fan"><span class="lvl-tag">Dato de fan</span><p>${esc(it.fan)}</p></div>` : ''}`;
  }

  // Agrupa items consecutivos del mismo tipo en una misma cuadrícula
  function groupRender(items) {
    const out = [];
    let type = null, buf = [];
    const flush = () => {
      if (buf.length) out.push(`<div class="info-grid info-grid--${type}">${buf.map(RENDER[type]).join('')}</div>`);
      buf = [];
    };
    items.forEach(it => {
      if (it.type !== type) { flush(); type = it.type; }
      buf.push(it);
    });
    flush();
    return out.join('');
  }

  function sectionHTML(sec) {
    return `
      <header class="info-sec-head">
        <div>
          <span class="eyebrow">${sec.icon} Sección ${sec.n} de ${SEC_DATA.length}</span>
          <h3 class="display">${esc(sec.title)}</h3>
        </div>
        <p>${esc(sec.intro)}</p>
      </header>
      ${groupRender(sec.items)}
      ${sec.extra === 'quiz' ? '<div id="infoQuiz"></div>' : ''}`;
  }

  function matches(it, q) {
    return norm([it.title, it.name, it.term, it.beg, it.fan, it.def].filter(Boolean).join(' ')).includes(q);
  }

  function searchHTML(q) {
    const hits = SEC_DATA
      .map(sec => ({ sec, items: sec.items.filter(it => matches(it, q)) }))
      .filter(x => x.items.length);
    if (!hits.length) return `<p class="empty-msg">No encontramos nada para "${esc(q)}". Prueba con otra palabra.</p>`;
    return hits.map(({ sec, items }) =>
      `<h3 class="info-result-h">${sec.icon} ${esc(sec.title)} <small>${items.length}</small></h3>${groupRender(items)}`
    ).join('');
  }

  /* ---------- Quiz ---------- */
  function quizHTML() {
    const total = QUIZ.length;
    if (quiz.done) {
      const s = quiz.score;
      const msg = s >= 4 ? 'Eres fan de verdad 🏆' : s >= 2 ? 'Vas muy bien 👏' : 'Sigue explorando, se aprende rápido 🚀';
      return `
        <div class="quiz glass quiz-end">
          <span class="eyebrow">Resultado del quiz</span>
          <div class="quiz-score">${s}/${total}</div>
          <p class="quiz-why">${msg}</p>
          <button class="btn-sm" data-quiz-restart>Repetir quiz</button>
        </div>`;
    }
    const cur = QUIZ[quiz.i];
    const opts = cur.opts.map((o, k) => {
      let cls = '';
      if (quiz.answered !== null) {
        if (k === cur.a) cls = 'ok';
        else if (k === quiz.answered) cls = 'bad';
      }
      return `<button class="quiz-opt ${cls}" data-quiz-opt="${k}" ${quiz.answered !== null ? 'disabled' : ''}>${esc(o)}</button>`;
    }).join('');
    const feedback = quiz.answered !== null
      ? `<p class="quiz-why">${esc(cur.why)}</p>
         <button class="btn-sm" data-quiz-next>${quiz.i === total - 1 ? 'Ver resultado' : 'Siguiente'}</button>`
      : '';
    return `
      <div class="quiz glass">
        <div class="quiz-head">
          <span class="eyebrow">Pon a prueba tu conocimiento</span>
          <span class="quiz-count">${quiz.i + 1} / ${total}</span>
        </div>
        <h3 class="quiz-q">${esc(cur.q)}</h3>
        <div class="quiz-opts">${opts}</div>
        ${feedback}
      </div>`;
  }

  function renderQuiz() {
    const el = document.getElementById('infoQuiz');
    if (el) el.innerHTML = quizHTML();
  }

  /* ---------- Vista ---------- */
  function updateNav() {
    document.querySelectorAll('[data-info-sec]').forEach(b =>
      b.classList.toggle('on', b.dataset.infoSec === activeSec && !query));
  }

  function updateMode() {
    document.querySelectorAll('[data-info-mode]').forEach(b =>
      b.classList.toggle('on', b.dataset.infoMode === mode));
  }

  function renderBody() {
    const body = document.getElementById('infoBody');
    if (!body) return;
    if (query.length >= 2) {
      body.innerHTML = searchHTML(query);
    } else {
      const sec = SEC_DATA.find(s => s.id === activeSec) || SEC_DATA[0];
      body.innerHTML = sectionHTML(sec);
      renderQuiz();
    }
    updateNav();
  }

  function buildShell(root) {
    root.innerHTML = `
      <div class="info-hero glass">
        <div class="info-hero-txt">
          <span class="eyebrow">Aprende F1</span>
          <h2 class="display info-title">Todo sobre la Fórmula 1</h2>
          <p class="lead">Explicado de forma simple para empezar, con los datos que disfruta un fan.</p>
        </div>
        <div class="info-tools">
          <div class="mode-switch" role="group" aria-label="Nivel de detalle">
            <button class="mode-btn" data-info-mode="beg">Principiante</button>
            <button class="mode-btn" data-info-mode="fan">Fan</button>
            <button class="mode-btn" data-info-mode="all">Completo</button>
          </div>
          <input id="infoSearch" type="search" placeholder="Buscar: banderas, neumáticos, DRS…" autocomplete="off">
        </div>
      </div>

      <div class="info-layout">
        <nav class="info-nav glass" id="infoNav" aria-label="Secciones de Info">
          ${SEC_DATA.map(s => `
            <button class="info-nav-btn" data-info-sec="${s.id}">
              <span>${s.icon}</span>
              <span>${esc(s.title)}</span>
              <small>${s.items.length}</small>
            </button>`).join('')}
        </nav>
        <div class="info-body" id="infoBody"></div>
      </div>`;
  }

  function init() {
    const root = document.getElementById('v-info');
    if (!root) return;
    SEC_DATA.forEach((s, i) => { s.n = i + 1; });
    root.dataset.mode = mode;
    buildShell(root);
    updateMode();
    renderBody();

    document.getElementById('infoSearch').addEventListener('input', e => {
      query = norm(e.target.value.trim());
      renderBody();
    });
  }

  /* ---------- Eventos ---------- */
  document.addEventListener('click', e => {
    const secBtn = e.target.closest('[data-info-sec]');
    if (secBtn) {
      activeSec = secBtn.dataset.infoSec;
      query = '';
      const input = document.getElementById('infoSearch');
      if (input) input.value = '';
      return renderBody();
    }

    const modeBtn = e.target.closest('[data-info-mode]');
    if (modeBtn) {
      mode = modeBtn.dataset.infoMode;
      const root = document.getElementById('v-info');
      if (root) root.dataset.mode = mode;
      return updateMode();
    }

    const opt = e.target.closest('[data-quiz-opt]');
    if (opt && quiz.answered === null) {
      const k = +opt.dataset.quizOpt;
      quiz.answered = k;
      if (k === QUIZ[quiz.i].a) quiz.score++;
      return renderQuiz();
    }

    if (e.target.closest('[data-quiz-next]')) {
      if (quiz.i === QUIZ.length - 1) quiz.done = true;
      else { quiz.i++; quiz.answered = null; }
      return renderQuiz();
    }

    if (e.target.closest('[data-quiz-restart]')) {
      Object.assign(quiz, { i: 0, score: 0, answered: null, done: false });
      return renderQuiz();
    }
  });

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();