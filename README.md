# 🏎️ fOnefan — Plataforma de Información & Estrategia de Fórmula 1

**fOnefan** es una aplicación web interactiva diseñada para fanáticos y entusiastas de la Fórmula 1. Reúne en un solo lugar la información en tiempo real de la **temporada 2026**, estadísticas históricas, análisis de circuitos, simulador de campeonato y componentes vectoriales adaptativos.

---

## 🌟 Características Principales

### 🏁 1. Inicio & Próximo Gran Premio
* **Cuenta Regresiva Dinámica:** Contador en tiempo real configurado hacia la **primera sesión del fin de semana (Práctica 1 / Clasificación Sprint)**.
* **Horarios Locales (ART):** Conversión automática de todas las sesiones de cada GP a la hora oficial de Argentina (`America/Argentina/Buenos_Aires`).
* **Estado de la Temporada:** Resumen de carreras disputadas, pendientes y líder actual del mundial de pilotos.

### 🏆 2. Campeonato & Calendario
* **Pestañas Integradas:** Alterna fácilmente entre la tabla de posiciones (Pilotos y Constructores) y el cronograma del año.
* **Formatos de Fin de Semana:** Identificación clara entre el formato tradicional y las carreras con **Sprint**.
* **Resultados Detallados:** Modal dinámico con Top 10 de carrera, clasificación, sprint y estado del mundial post-carrera.

### 🏎️ 3. Pilotos
* **Parrilla Actual (2026):** Fichas técnicas de los 20 pilotos en activo con cascos vectoriales generados según los colores de cada escudería.
* **Historial de la F1:** Buscador e historial desde 1950 hasta la actualidad con estadísticas de victorias, podios, poles y Grandes Premios.
* **Salón de la Fama:** Listado de todos los campeones del mundo de la historia ordenados por número de títulos.

### 🛡️ 4. Escuderías *(Próximamente / En Desarrollo)*
* **Escuderías Actuales:** Monoplazas F1 vectorizados mediante SVG dinámico renderizados con la paleta de colores de cada equipo.
* **Historial de Constructores:** Registro completo de marcas y constructores que han competido en la máxima categoría.
* **Salón de la Fama de Constructores:** Ranking histórico de marcas ordenadas por Campeonatos Mundiales de Constructores.

### 🎯 5. Simulador de Estrategia
* **Calculadora de Campeonato:** Asigna posiciones estimadas a las carreras y sprints restantes.
* **Proyección en Tiempo Real:** Actualización inmediata de la tabla de posiciones de pilotos y equipos según las combinaciones simuladas.
* **Análisis de Opciones al Título:** Selección de un piloto favorito para evaluar la brecha de puntos y el rendimiento necesario por carrera.

### 🗺️ 6. Circuitos & Récords
* **Renderizado SVG:** Integración de trazados vectoriales interactivos para cada circuito.
* **Ficha Técnica & Récords:** Vuelta rápida histórica, pilotos/escuderías más ganadores y registros de cada Gran Premio desde el año 2000 a la fecha.

### 📚 7. Glosario & Términos de F1 *(Próximamente)*
* Sección informativa interactiva sobre terminología técnica (*Undercut, Porpoising, DRS, ERS, Parc Fermé, Slipstream*, tipos de neumáticos, reglamentos técnicos y sanciones).

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica adaptada a estándares accesibles.
* **CSS3:** Diseño moderno con *Glassmorphism*, temas oscuros, animaciones clave y *Responsive Design*.
* **JavaScript Vanilla (ES6+):** Lógica orientada a eventos, procesamiento asíncrono (`async/await`), manipulaciones del DOM y caching con `localStorage`.
* **API REST:** Consumo de datos en vivo desde [Jolpica F1 API (Ergast Replacement)](https://api.jolpi.ca/ergast/f1).
* **SVG Vectorial:** Ilustraciones dinámicas para cascos de pilotos, trazados de circuitos y monoplazas F1.

---

## 🚀 Instalación y Uso Local

No requiere de compiladores ni frameworks pesados para ejecutarse.

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/tu-usuario/fOnefan.git](https://github.com/tu-usuario/fOnefan.git)
