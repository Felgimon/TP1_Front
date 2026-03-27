import { g as getCurrentSeason, f as fetchNbaStats, r as rowSetToObjects } from './nba-proxy_MMvlAmni.mjs';

let playersCache = null;
let cacheTimestamp = 0;
const CACHE_TTL = 1e3 * 60 * 60;
async function getPlayersList() {
  const now = Date.now();
  if (playersCache && now - cacheTimestamp < CACHE_TTL) {
    return playersCache;
  }
  const season = getCurrentSeason();
  const data = await fetchNbaStats("commonallplayers", {
    LeagueID: "00",
    Season: season,
    IsOnlyCurrentSeason: "1"
  });
  const resultSet = data?.resultSets?.[0];
  if (!resultSet) return [];
  playersCache = rowSetToObjects(resultSet);
  cacheTimestamp = now;
  return playersCache;
}
const GET = async ({ url }) => {
  const search = url.searchParams.get("search")?.toLowerCase().trim();
  if (!search || search.length < 2) {
    return new Response(JSON.stringify({ players: [] }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const allPlayers = await getPlayersList();
    const matches = allPlayers.filter((p) => {
      const name = (p.DISPLAY_FIRST_LAST || "").toLowerCase();
      return name.includes(search);
    }).map((p) => {
      const name = (p.DISPLAY_FIRST_LAST || "").toLowerCase();
      let score = 3;
      if (name === search) score = 0;
      else if (name.startsWith(search)) score = 1;
      else if (name.split(" ").some((w) => w.startsWith(search))) score = 1.5;
      else if (name.includes(` ${search}`)) score = 2;
      return { player: p, score, name };
    }).sort((a, b) => a.score - b.score || a.name.length - b.name.length).slice(0, 10).map(({ player: p }) => ({
      id: p.PERSON_ID,
      name: p.DISPLAY_FIRST_LAST,
      team: p.TEAM_NAME || "Free Agent",
      teamAbbr: p.TEAM_ABBREVIATION || "",
      teamCity: p.TEAM_CITY || "",
      jerseyNumber: p.JERSEY_NUMBER || ""
    }));
    return new Response(JSON.stringify({ players: matches }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message, players: [] }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
