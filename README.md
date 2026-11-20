# 🏎️ fOnefan — Tu Centro de Control de Fórmula 1

**fOnefan** es una plataforma web creada por y para apasionados del automovilismo. Su objetivo es simple: darte toda la información de la **temporada actual de Fórmula 1**, datos históricos, mapas de circuitos, notificaciones y herramientas interactivas para que no te pierdas ni un solo detalle del campeonato.

Funciona como **PWA**: se puede instalar en el celular o en la computadora y seguir usando la mayor parte de la app sin conexión.

---

## 🌟 ¿Qué vas a encontrar en la plataforma?

### 🏁 1. Inicio
- **Cuenta regresiva:** Un contador en tiempo real que muestra cuánto falta para el próximo Gran Premio.
- **Modo en vivo:** Cuando hay una sesión en curso, el panel cambia y muestra la vuelta actual, la sesión (Práctica, Clasificación, Sprint o Carrera) y el estado de pista: **Safety Car**, **VSC** o **bandera roja**.
- **Resaltado de fin de semana activo:** La carrera en curso se destaca en el calendario, en las próximas carreras y en el inicio.
- **Estadísticas rápidas:** Total de Grandes Premios, rondas disputadas, rondas restantes y líder del campeonato.
- **Horarios en tu zona:** Los horarios de prácticas, clasificaciones y carreras se muestran en hora de Argentina.

### 🏆 2. Campeonato y Calendario
- **Tabla de pilotos y constructores:** Puntos actualizados según la última ronda disputada.
- **Pilotos con chances de salir campeones:** Calcula cuántos puntos quedan por repartir y muestra qué pilotos todavía pueden ser campeones, con su máximo posible. Si el campeón ya está definido, lo indica.
- **Calendario de Carreras:** Cronograma completo de la temporada, con filtros por *Próximas*, *Finalizadas* y *Todas*. Cada fin de semana indica si tiene carrera Sprint.
- **Resultados por fecha:** Al tocar una carrera finalizada se muestra el podio, el Top 10 y la vuelta rápida del Gran Premio. En las carreras pendientes se ven las sesiones ya disputadas con sus tres primeros.
- **Trazados en miniatura:** Cada fecha muestra el mapa del circuito.

### 🗺️ 3. Circuitos
- **Trazados esquemáticos:** Mapa de cada circuito del calendario. Al tocar uno se abre su ficha.
- **Historial de circuitos:** Pestaña con circuitos históricos, con su trazado cuando está disponible.
- **Fichas completas:** Datos del circuito, país y lugar.

### 🏎️ 4. Pilotos
- **Pilotos actuales:** Fichas de la parrilla 2026 con su casco, número, escudería y puntos. Se pueden buscar por nombre.
- **Número de cada piloto:** Número de competencia en la ficha, con el número oficial de la temporada.
- **Ficha de carrera:** Al tocar un piloto se muestran sus estadísticas de carrera: presencias, victorias, podios, poles, vueltas rápidas, puntos totales, escuderías en las que corrió y primer y último Gran Premio.
- **Títulos mundiales:** Cada piloto muestra cuántos campeonatos tiene.
- **Salón de la Fama:** Los campeones del mundo desde 1950, agrupados por piloto y con las temporadas en las que ganaron.

### 🛡️ 5. Escuderías
- **Escuderías actuales:** Tarjetas con el logo, puntos y posición en el campeonato. Se pueden buscar por nombre.
- **Ficha de escudería:** Puntos 2026, posición, país, año de fundación, sede, motor de la temporada, títulos de constructores, pilotos del año con sus puntos y los nombres que tuvo el equipo a lo largo de la historia.
- **Salón de la Fama de constructores:** Escuderías campeonas desde 1958, con la cantidad de títulos y los años en que ganaron.

### ⚙️ 6. Monoplaza y Volante 3D
- **Modelo 3D del monoplaza 2026:** Visor interactivo con control de cámara y rotación automática, que se detiene cuando el usuario lo mueve.
- **Partes del auto:** Explicación de la unidad de potencia 50/50, la batería, el alerón activo, el efecto suelo y el difusor, la aerodinámica, los frenos de carbono, el halo y los neumáticos Pirelli.
- **Volante 3D:** Modelo interactivo del volante de F1 con el desglose de la pantalla, el Manual Override, el Boost, los modos de motor y recarga, el balance de frenos (BBAL), el diferencial y los botones de pit, neutral y radio.

### 🎖️ 7. Récords Históricos
- **Tablas de récords:** Campeonatos mundiales, victorias, poles, podios y victorias con una misma escudería.
- **Paradas en boxes más rápidas.**
- **Otros récords:** Piloto más joven campeón, más puntos y más victorias en una temporada, victorias consecutivas, vueltas rápidas y más.

### 📚 8. Info, Guías y Glosario
- **¿Qué es la Fórmula 1?:** Introducción al campeonato, su origen, la tecnología, el rol del equipo y el papel de la FIA.
- **Temporada 2026:** Tabla comparativa de las diferencias con el reglamento 2022–2025 (motor, combustible, aerodinámica, DRS, peso y equipos).
- **Motoristas 2026:** Qué fabricante de motor usa cada escudería.
- **Cómo leer las gráficas:** Guía visual con sectores, mini-sectores, torre de posiciones (Leader, intervalo y gap), neumáticos, parada en boxes y velocidad máxima (*speed trap*).
- **Números de pilotos:** Cómo se elige y asigna el número, el mapa de números del 1 al 99 (en uso, reservados, libres y retirados), y preguntas frecuentes.
- **Glosario técnico:** Términos como *Aire limpio*, *Aire sucio*, *Livery* y otros, explicados en lenguaje simple.
- **Buscador de Info:** Filtra temas dentro de la sección.
- **Cuestionario:** Preguntas para poner a prueba lo aprendido.

### 🔔 9. Avisos Push
- **Notificaciones 30 minutos antes de cada sesión:** Prácticas, clasificaciones, sprints y carreras. Se activan o desactivan con un botón desde la página.
- **Programación automática:** Un flujo de GitHub Actions revisa el calendario cada 6 horas y programa los avisos con OneSignal.

### 📱 10. Instalación y uso sin conexión
- **Instalable como app:** Se puede agregar a la pantalla de inicio desde el celular (descargar como appWeb) o la computadora.
- **Caché inteligente:** Los datos históricos se guardan en el navegador para cargar más rápido, y la app sigue disponible sin red en la mayoría de las pantallas.
- **Diseño responsivo:** Menú hamburguesa en celular y tablas que se adaptan a tarjetas en pantallas chicas.

---

## 🛠️ Tecnologías

- **HTML, CSS y JavaScript** puros, sin frameworks.
- **model-viewer** para los modelos 3D.
- **OpenF1** para sesiones, resultados y estado de carrera en vivo.
- **Jolpica (Ergast)** para clasificaciones e historia.
- **OneSignal** para notificaciones push.
- **GitHub Actions** para programar los avisos.
- **Service Worker** y **manifest.json** para la experiencia PWA.

---

## 📁 Estructura del proyecto

```
fOnefan/
├── .github/
│   └── workflows/
│       └── f1-alerts.yml       # Workflow que programa los avisos cada 6 horas
├── components/                 # Componentes reutilizables de la interfaz
├── Fotos/                      # Logos, cascos, íconos e imágenes
├── Modelos3D/                  # Modelos .glb del monoplaza y el volante
├── scripts/
│   ├── notify-f1.mjs           # Programa las notificaciones en OneSignal
│   └── notified-sessions.json  # Registro de sesiones ya programadas
├── app.js                      # Lógica principal (render, modales, tablas)
├── CNAME                       # Dominio personalizado de GitHub Pages
├── data.js                     # Calendario, pilotos y escuderías 2026
├── index.html                  # Estructura principal y secciones
├── info.js                     # Contenido de la sección Info
├── manifest.json               # Configuración de la PWA
├── OneSignalSDKWorker.js       # Worker de notificaciones
├── parche.js                   # Salón de la Fama, circuitos, avisos y ajustes
├── README.md                   # Documentación del proyecto
├── styles.css                  # Estilos generales
└── sw.js                       # Service worker (caché y modo sin conexión)
```

---

## 👤 Creador

Diseñado y desarrollado por **Perone Tiziano**.

---
*fOnefan es un proyecto independiente con fines recreativos e informativos. No está afiliado ni respaldado por la Fórmula 1.*
