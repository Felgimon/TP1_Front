# Court Side -- NBA Tracker

**Trabajo Practico N1 -- Front End**

---

## Autoria

| Campo            | Detalle                      |
| :--------------- | :--------------------------- |
| Alumno           | Felipe Daniel Doval Ferrari  |
| Curso            | 5to E                        |

---

## Tematica

Aplicacion web de seguimiento de la NBA en tiempo real. Permite visualizar los partidos del dia, consultar estadisticas de jugadores y destacar un jugador aleatorio del dia, todo presentado en un dashboard interactivo con soporte para tema claro y oscuro.

---

## Items resueltos de la consigna

### Estructura y maquetado

- Single Page Application construida con el framework **Astro**.
- Layout completamente responsivo basado en unidades relativas (`vw`).
- Estructura semantica con elementos HTML5 (`nav`, `section`, `button`, etc.).

### Componentes

- **Header** -- Barra de navegacion con logo, titulo y toggle de tema.
- **TabBar** -- Sistema de pestanas para alternar entre "Today's Games" y "Search Players".
- **GamesGrid** -- Grilla de tarjetas que muestra los partidos del dia (upcoming, live, final).
- **PlayerSearch** -- Campo de busqueda con resultados en tiempo real y tarjetas con estadisticas.
- **PlayerSpotlight** -- Seccion destacada que muestra un jugador aleatorio con su camiseta SVG y stats.
- **ThemeToggle** -- Boton para alternar entre modo oscuro y modo claro, con persistencia en `localStorage`.
- **Animation_logo** -- Animacion de entrada con una pelota de basketball que sigue una trayectoria Bezier cubica.
- **Logo** -- Logo SVG de la aplicacion, reutilizable en distintos tamanos.

### Funcionalidades

- **Scoreboard en vivo**: datos obtenidos via SSR desde la CDN oficial de la NBA al cargar la pagina.
- **Busqueda de jugadores**: busqueda instantanea sobre una base de datos estatica de ~200 jugadores NBA con estadisticas completas de temporada. Sin llamadas a APIs externas.
- **Player Spotlight**: seleccion aleatoria de un jugador destacado (20+ PPG) con visualizacion de camiseta SVG y promedios de temporada.
- **Tema claro/oscuro**: sistema de temas con variables CSS custom y transiciones suaves, persistido en `localStorage`.
- **Animacion de entrada**: animacion GSAP con trayectoria Bezier cubica, rotacion, escalado y fade-in del contenido.

### Tecnologias utilizadas

| Tecnologia          | Uso                                                    |
| :------------------ | :----------------------------------------------------- |
| Astro 6             | Framework principal (SSR + componentes `.astro`)       |
| TypeScript          | Tipado estatico en datos y logica del cliente          |
| GSAP                | Animacion de entrada (trayectoria Bezier, timeline)    |
| CSS Custom Properties | Sistema de temas (dark/light)                        |
| Vercel              | Plataforma de deploy (SSR con adapter `@astrojs/vercel`) |
| NBA CDN             | Fuente de datos para el scoreboard en vivo             |

### Estilos y diseno

- Variables CSS custom para temas (`--cs-bg`, `--cs-accent`, etc.).
- Transiciones suaves en cambios de tema y hover states.
- Tarjetas con bordes semi-transparentes y fondos con opacidad.
- Gradientes en el logo, avatares de jugadores y camiseta SVG.
- Scrollbar personalizado.
- SVG inline para iconos, logo y camiseta del jugador destacado.

---

## Estructura del proyecto

```
src/
  components/
    Animation_logo.astro    -- Animacion de entrada (GSAP + Bezier)
    GamesGrid.astro         -- Contenedor de la grilla de partidos
    Header.astro            -- Navegacion principal
    Logo.astro              -- Logo SVG reutilizable
    PlayerSearch.astro      -- Input de busqueda de jugadores
    PlayerSpotlight.astro   -- Seccion del jugador destacado
    ScoreBoard.astro        -- Orquestador del dashboard (SSR + client)
    TabBar.astro            -- Pestanas de navegacion
    ThemeToggle.astro       -- Toggle dark/light mode
  data/
    players.ts              -- Base de datos estatica de jugadores NBA
  pages/
    index.astro             -- Pagina principal (entry point)
```

---

## Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo (localhost:4321)
npm run build        # Build de produccion
npm run preview      # Preview local del build
```
