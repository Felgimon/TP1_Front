import { c as createComponent } from './astro-component_BuR44q7p.mjs';
import 'piccolore';
import { l as createRenderInstruction, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, r as renderTemplate, n as renderComponent, o as renderHead } from './entrypoint_DpsvDJd2.mjs';
import 'clsx';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const fullLogo = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 80\" fill=\"none\">\r\n  <defs>\r\n    <linearGradient id=\"ballGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\r\n      <stop offset=\"0%\" stop-color=\"#FF7A3D\"/>\r\n      <stop offset=\"100%\" stop-color=\"#E8450E\"/>\r\n    </linearGradient>\r\n    <linearGradient id=\"accentGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\r\n      <stop offset=\"0%\" stop-color=\"#FF7A3D\"/>\r\n      <stop offset=\"60%\" stop-color=\"#E8450E\"/>\r\n      <stop offset=\"100%\" stop-color=\"#C43509\"/>\r\n    </linearGradient>\r\n    <filter id=\"ballGlow\">\r\n      <feGaussianBlur stdDeviation=\"2\" result=\"blur\"/>\r\n      <feComposite in=\"SourceGraphic\" in2=\"blur\" operator=\"over\"/>\r\n    </filter>\r\n  </defs>\r\n\r\n  <!-- Basketball icon -->\r\n  <g filter=\"url(#ballGlow)\">\r\n    <circle cx=\"36\" cy=\"40\" r=\"26\" fill=\"url(#ballGrad)\"/>\r\n  </g>\r\n  <!-- Ball seam lines -->\r\n  <path d=\"M36 14 L36 66\" stroke=\"#1A1A2E\" stroke-width=\"2.2\" stroke-linecap=\"round\" opacity=\"0.45\"/>\r\n  <path d=\"M10 40 L62 40\" stroke=\"#1A1A2E\" stroke-width=\"2.2\" stroke-linecap=\"round\" opacity=\"0.45\"/>\r\n  <path d=\"M13 23 C27 29, 45 29, 59 23\" stroke=\"#1A1A2E\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.35\"/>\r\n  <path d=\"M13 57 C27 51, 45 51, 59 57\" stroke=\"#1A1A2E\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.35\"/>\r\n  <!-- Shine highlight -->\r\n  <ellipse cx=\"27\" cy=\"29\" rx=\"7\" ry=\"4.5\" fill=\"white\" opacity=\"0.16\" transform=\"rotate(-25 27 29)\"/>\r\n\r\n  <!-- COURT text -->\r\n  <text x=\"76\" y=\"36\" font-family=\"'Helvetica Neue', 'Arial Black', Arial, sans-serif\" font-weight=\"900\" font-size=\"29\" fill=\"#F0F0F0\" letter-spacing=\"-0.5\">COURT</text>\r\n  <!-- SIDE text in gradient -->\r\n  <text x=\"194\" y=\"36\" font-family=\"'Helvetica Neue', 'Arial Black', Arial, sans-serif\" font-weight=\"900\" font-size=\"29\" fill=\"url(#accentGrad)\" letter-spacing=\"-0.5\">SIDE</text>\r\n\r\n  <!-- NBA TRACKER subtitle -->\r\n  <text x=\"76\" y=\"56\" font-family=\"'Helvetica Neue', Arial, sans-serif\" font-weight=\"500\" font-size=\"11.5\" fill=\"#777\" letter-spacing=\"5.5\">NBA TRACKER</text>\r\n\r\n  <!-- Accent underline -->\r\n  <rect x=\"76\" y=\"63\" width=\"48\" height=\"2.5\" rx=\"1.25\" fill=\"url(#accentGrad)\"/>\r\n</svg>\r\n";

const fullLightLogo = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 340 80\" fill=\"none\">\r\n  <defs>\r\n    <linearGradient id=\"ballGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\r\n      <stop offset=\"0%\" stop-color=\"#FF7A3D\"/>\r\n      <stop offset=\"100%\" stop-color=\"#E8450E\"/>\r\n    </linearGradient>\r\n    <linearGradient id=\"accentGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\r\n      <stop offset=\"0%\" stop-color=\"#FF7A3D\"/>\r\n      <stop offset=\"60%\" stop-color=\"#E8450E\"/>\r\n      <stop offset=\"100%\" stop-color=\"#C43509\"/>\r\n    </linearGradient>\r\n  </defs>\r\n\r\n  <!-- Basketball icon -->\r\n  <circle cx=\"36\" cy=\"40\" r=\"26\" fill=\"url(#ballGrad)\"/>\r\n  <path d=\"M36 14 L36 66\" stroke=\"#1A1A2E\" stroke-width=\"2.2\" stroke-linecap=\"round\" opacity=\"0.45\"/>\r\n  <path d=\"M10 40 L62 40\" stroke=\"#1A1A2E\" stroke-width=\"2.2\" stroke-linecap=\"round\" opacity=\"0.45\"/>\r\n  <path d=\"M13 23 C27 29, 45 29, 59 23\" stroke=\"#1A1A2E\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.35\"/>\r\n  <path d=\"M13 57 C27 51, 45 51, 59 57\" stroke=\"#1A1A2E\" stroke-width=\"1.8\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.35\"/>\r\n  <ellipse cx=\"27\" cy=\"29\" rx=\"7\" ry=\"4.5\" fill=\"white\" opacity=\"0.2\" transform=\"rotate(-25 27 29)\"/>\r\n\r\n  <!-- COURT text — dark for light backgrounds -->\r\n  <text x=\"76\" y=\"36\" font-family=\"'Helvetica Neue', 'Arial Black', Arial, sans-serif\" font-weight=\"900\" font-size=\"29\" fill=\"#1A1A2E\" letter-spacing=\"-0.5\">COURT</text>\r\n  <text x=\"194\" y=\"36\" font-family=\"'Helvetica Neue', 'Arial Black', Arial, sans-serif\" font-weight=\"900\" font-size=\"29\" fill=\"url(#accentGrad)\" letter-spacing=\"-0.5\">SIDE</text>\r\n\r\n  <!-- Subtitle -->\r\n  <text x=\"76\" y=\"56\" font-family=\"'Helvetica Neue', Arial, sans-serif\" font-weight=\"500\" font-size=\"11.5\" fill=\"#999\" letter-spacing=\"5.5\">NBA TRACKER</text>\r\n\r\n  <!-- Accent bar -->\r\n  <rect x=\"76\" y=\"63\" width=\"48\" height=\"2.5\" rx=\"1.25\" fill=\"url(#accentGrad)\"/>\r\n</svg>\r\n";

const iconLogo = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\" fill=\"none\">\r\n  <defs>\r\n    <linearGradient id=\"ballGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\r\n      <stop offset=\"0%\" stop-color=\"#FF7A3D\"/>\r\n      <stop offset=\"100%\" stop-color=\"#E8450E\"/>\r\n    </linearGradient>\r\n  </defs>\r\n  <circle cx=\"32\" cy=\"32\" r=\"28\" fill=\"url(#ballGrad)\"/>\r\n  <path d=\"M32 4 L32 60\" stroke=\"#1A1A2E\" stroke-width=\"2.4\" stroke-linecap=\"round\" opacity=\"0.45\"/>\r\n  <path d=\"M4 32 L60 32\" stroke=\"#1A1A2E\" stroke-width=\"2.4\" stroke-linecap=\"round\" opacity=\"0.45\"/>\r\n  <path d=\"M7 14 C20 21, 44 21, 57 14\" stroke=\"#1A1A2E\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.35\"/>\r\n  <path d=\"M7 50 C20 43, 44 43, 57 50\" stroke=\"#1A1A2E\" stroke-width=\"2\" stroke-linecap=\"round\" fill=\"none\" opacity=\"0.35\"/>\r\n  <ellipse cx=\"22\" cy=\"21\" rx=\"8\" ry=\"5\" fill=\"white\" opacity=\"0.16\" transform=\"rotate(-25 22 21)\"/>\r\n</svg>\r\n";

const stackedLogo = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 100\" fill=\"none\">\r\n  <defs>\r\n    <linearGradient id=\"ballGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\r\n      <stop offset=\"0%\" stop-color=\"#FF7A3D\"/>\r\n      <stop offset=\"100%\" stop-color=\"#E8450E\"/>\r\n    </linearGradient>\r\n    <linearGradient id=\"accentGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\r\n      <stop offset=\"0%\" stop-color=\"#FF7A3D\"/>\r\n      <stop offset=\"60%\" stop-color=\"#E8450E\"/>\r\n      <stop offset=\"100%\" stop-color=\"#C43509\"/>\r\n    </linearGradient>\r\n  </defs>\r\n\r\n  <!-- Basketball -->\r\n  <circle cx=\"80\" cy=\"28\" r=\"22\" fill=\"url(#ballGrad)\"/>\r\n  <path d=\"M80 6 L80 50\" stroke=\"#1A1A2E\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.45\"/>\r\n  <path d=\"M58 28 L102 28\" stroke=\"#1A1A2E\" stroke-width=\"2\" stroke-linecap=\"round\" opacity=\"0.45\"/>\r\n  <path d=\"M61 14 C72 19, 88 19, 99 14\" stroke=\"#1A1A2E\" stroke-width=\"1.6\" fill=\"none\" opacity=\"0.35\"/>\r\n  <path d=\"M61 42 C72 37, 88 37, 99 42\" stroke=\"#1A1A2E\" stroke-width=\"1.6\" fill=\"none\" opacity=\"0.35\"/>\r\n  <ellipse cx=\"72\" cy=\"19\" rx=\"6\" ry=\"4\" fill=\"white\" opacity=\"0.16\" transform=\"rotate(-25 72 19)\"/>\r\n\r\n  <!-- COURTSIDE text -->\r\n  <text x=\"80\" y=\"72\" font-family=\"'Helvetica Neue', 'Arial Black', Arial, sans-serif\" font-weight=\"900\" font-size=\"22\" fill=\"#F0F0F0\" letter-spacing=\"-0.3\" text-anchor=\"middle\">COURT<tspan fill=\"url(#accentGrad)\">SIDE</tspan></text>\r\n\r\n  <!-- Subtitle -->\r\n  <text x=\"80\" y=\"88\" font-family=\"'Helvetica Neue', Arial, sans-serif\" font-weight=\"500\" font-size=\"9\" fill=\"#777\" letter-spacing=\"4.5\" text-anchor=\"middle\">NBA TRACKER</text>\r\n</svg>\r\n";

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Logo;
  const { variant = "full", class: className, width } = Astro2.props;
  const logos = {
    full: fullLogo,
    "full-light": fullLightLogo,
    icon: iconLogo,
    stacked: stackedLogo
  };
  const svg = logos[variant] || logos.full;
  const style = width ? `width: ${width}; height: auto;` : void 0;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["courtside-logo", className], "class:list")}${addAttribute(style, "style")} role="img" aria-label="COURTSIDE NBA Tracker" data-astro-cid-tvrurpns>${unescapeHTML(svg)}</div>`;
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/Logo.astro", void 0);

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme" title="Toggle theme" data-astro-cid-x3pjskd3> <!-- Luna (visible en dark mode) --> <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x3pjskd3> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" data-astro-cid-x3pjskd3></path> </svg> <!-- Sol (visible en light mode) --> <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-x3pjskd3> <circle cx="12" cy="12" r="5" data-astro-cid-x3pjskd3></circle> <line x1="12" y1="1" x2="12" y2="3" data-astro-cid-x3pjskd3></line> <line x1="12" y1="21" x2="12" y2="23" data-astro-cid-x3pjskd3></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-astro-cid-x3pjskd3></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-astro-cid-x3pjskd3></line> <line x1="1" y1="12" x2="3" y2="12" data-astro-cid-x3pjskd3></line> <line x1="21" y1="12" x2="23" y2="12" data-astro-cid-x3pjskd3></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-astro-cid-x3pjskd3></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-astro-cid-x3pjskd3></line> </svg> </button> ${renderScript($$result, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="Header" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Logo", $$Logo, { "variant": "icon", "width": "3.5vw", "data-astro-cid-3ef6ksr2": true })} <div class="Header-text" data-astro-cid-3ef6ksr2> <h1 data-astro-cid-3ef6ksr2> <span class="text-title" data-astro-cid-3ef6ksr2>COURT </span> <span class="text-gradient" data-astro-cid-3ef6ksr2>SIDE</span> </h1> <h3 data-astro-cid-3ef6ksr2><span class="nba-underline" data-astro-cid-3ef6ksr2>NBA</span> TRACKER</h3> </div> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} </nav>`;
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/Header.astro", void 0);

const $$AnimationLogo = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="ball-animation" aria-hidden="true"> <svg id="ball-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none"> <defs> <linearGradient id="animBallGrad" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stop-color="#FF7A3D"></stop> <stop offset="100%" stop-color="#E8450E"></stop> </linearGradient> </defs> <circle cx="32" cy="32" r="28" fill="url(#animBallGrad)"></circle> <path d="M32 4 L32 60" stroke="#1A1A2E" stroke-width="2.4" stroke-linecap="round" opacity="0.45"></path> <path d="M4 32 L60 32" stroke="#1A1A2E" stroke-width="2.4" stroke-linecap="round" opacity="0.45"></path> <path d="M7 14 C20 21, 44 21, 57 14" stroke="#1A1A2E" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.35"></path> <path d="M7 50 C20 43, 44 43, 57 50" stroke="#1A1A2E" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.35"></path> <ellipse cx="22" cy="21" rx="8" ry="5" fill="white" opacity="0.18" transform="rotate(-25 22 21)"></ellipse> </svg> </div> ${renderScript($$result, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/Animation_logo.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/Animation_logo.astro", void 0);

const $$TabBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="tabs" data-astro-cid-s6oy5d3q> <button class="tab active" data-tab="games" data-astro-cid-s6oy5d3q>Today's games</button> <button class="tab" data-tab="players" data-astro-cid-s6oy5d3q>Search players</button> </div>`;
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/TabBar.astro", void 0);

const $$GamesGrid = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="tab-content active" id="tab-games" data-astro-cid-4ftlsx5r> <div class="games-grid" id="games-grid" data-astro-cid-4ftlsx5r> <div class="loading" id="games-loading" data-astro-cid-4ftlsx5r> <div class="spinner" data-astro-cid-4ftlsx5r></div> <span data-astro-cid-4ftlsx5r>Loading today's games...</span> </div> </div> </div>`;
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/GamesGrid.astro", void 0);

const $$PlayerSearch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="tab-content" id="tab-players" data-astro-cid-izxwl43p> <div class="search-bar" data-astro-cid-izxwl43p> <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-izxwl43p> <circle cx="11" cy="11" r="8" data-astro-cid-izxwl43p></circle><path d="m21 21-4.3-4.3" data-astro-cid-izxwl43p></path> </svg> <input type="text" id="player-search" placeholder="Search a player... (e.g. LeBron James)" autocomplete="off" data-astro-cid-izxwl43p> </div> <div id="player-results" data-astro-cid-izxwl43p></div> </div>`;
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/PlayerSearch.astro", void 0);

const $$PlayerSpotlight = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="spotlight" id="spotlight" data-astro-cid-iaxbchie> <div class="section-label" data-astro-cid-iaxbchie>PLAYER SPOTLIGHT</div> <div id="spotlight-card" class="loading-placeholder" data-astro-cid-iaxbchie> <div class="spinner" data-astro-cid-iaxbchie></div> <span data-astro-cid-iaxbchie>Loading player...</span> </div> </div>`;
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/PlayerSpotlight.astro", void 0);

const $$ScoreBoard = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="scoreboard" data-astro-cid-sselvn4u> ${renderComponent($$result, "TabBar", $$TabBar, { "data-astro-cid-sselvn4u": true })} ${renderComponent($$result, "GamesGrid", $$GamesGrid, { "data-astro-cid-sselvn4u": true })} ${renderComponent($$result, "PlayerSearch", $$PlayerSearch, { "data-astro-cid-sselvn4u": true })} ${renderComponent($$result, "PlayerSpotlight", $$PlayerSpotlight, { "data-astro-cid-sselvn4u": true })} </section> ${renderScript($$result, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/ScoreBoard.astro?astro&type=script&index=0&lang.ts")} <!-- Layout del scoreboard -->  <!-- Estilos globales para HTML dinámico -->`;
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/components/ScoreBoard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-theme="dark"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="src/assets/courtside-icon.svg"><link rel="icon" href="src/assets/courtside-icon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Court Side</title>", "</head> <body> ", ' <div id="page-content"> ', " ", " </div> <script>\n(function() {\n	const theme = localStorage.getItem('courtside_theme') || 'dark';\n	document.documentElement.setAttribute('data-theme', theme);\n})();\n<\/script></body></html><!-- Script inline para evitar flash de tema incorrecto -->"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "AnimationLogo", $$AnimationLogo, {}), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "ScoreBoard", $$ScoreBoard, {}));
}, "C:/Users/User/Documents/GitHub/TP1_Front/src/pages/index.astro", void 0);

const $$file = "C:/Users/User/Documents/GitHub/TP1_Front/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
