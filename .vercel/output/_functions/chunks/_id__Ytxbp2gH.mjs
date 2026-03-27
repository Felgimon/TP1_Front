import { f as fetchNbaStats, r as rowSetToObjects, g as getCurrentSeason } from './nba-proxy_MMvlAmni.mjs';

async function fetchWithRetry(fn, maxRetries = 3, baseDelay = 1500) {
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === maxRetries - 1) throw err;
      const delay = baseDelay * (attempt + 1);
      console.log(`[RETRY] Attempt ${attempt + 1} failed, waiting ${delay}ms...`);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
}
const GET = async ({ params }) => {
  const playerId = params.id;
  if (!playerId) {
    return new Response(JSON.stringify({ error: "Missing player ID" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  try {
    const infoData = await fetchWithRetry(
      () => fetchNbaStats("commonplayerinfo", { PlayerID: playerId })
    );
    await new Promise((r) => setTimeout(r, 500));
    const careerData = await fetchWithRetry(
      () => fetchNbaStats("playercareerstats", { PlayerID: playerId, PerMode: "PerGame" })
    );
    const playerInfo = infoData?.resultSets?.[0];
    const info = playerInfo ? rowSetToObjects(playerInfo)[0] : null;
    const seasonStats = careerData?.resultSets?.[0];
    const allSeasons = seasonStats ? rowSetToObjects(seasonStats) : [];
    const currentSeason = getCurrentSeason();
    let stats = allSeasons.find((s) => s.SEASON_ID === currentSeason);
    if (!stats && allSeasons.length > 0) {
      stats = allSeasons[allSeasons.length - 1];
    }
    const player = {
      id: playerId,
      firstName: info?.FIRST_NAME || "",
      lastName: info?.LAST_NAME || "",
      name: info?.DISPLAY_FIRST_LAST || `Player ${playerId}`,
      team: info?.TEAM_NAME || "",
      teamAbbr: info?.TEAM_ABBREVIATION || "",
      teamCity: info?.TEAM_CITY || "",
      jerseyNumber: info?.JERSEY || "",
      position: info?.POSITION || "",
      height: info?.HEIGHT || "",
      weight: info?.WEIGHT || "",
      country: info?.COUNTRY || "",
      seasonStats: stats ? {
        season: stats.SEASON_ID,
        gp: stats.GP,
        pts: stats.PTS,
        reb: stats.REB,
        ast: stats.AST,
        stl: stats.STL,
        blk: stats.BLK,
        fgPct: stats.FG_PCT,
        fg3Pct: stats.FG3_PCT,
        ftPct: stats.FT_PCT,
        min: stats.MIN
      } : null
    };
    return new Response(JSON.stringify({ player }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error(`[PLAYER-STATS] Failed for ${playerId}: ${err.message}`);
    return new Response(JSON.stringify({ error: err.message }), {
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
