import { a as fetchNbaCdn } from './nba-proxy_MMvlAmni.mjs';

const GET = async () => {
  try {
    const data = await fetchNbaCdn("liveData/scoreboard/todaysScoreboard_00.json");
    const games = data?.scoreboard?.games || [];
    const formatted = games.map((g) => ({
      id: g.gameId,
      status: g.gameStatusText?.trim() || "",
      statusCode: g.gameStatus,
      // 1=upcoming, 2=live, 3=final
      period: g.period,
      clock: g.gameClock?.replace("PT", "").replace("M", ":").replace("S", "") || "",
      homeTeam: {
        id: g.homeTeam?.teamId,
        name: g.homeTeam?.teamName,
        city: g.homeTeam?.teamCity,
        abbr: g.homeTeam?.teamTricode,
        score: g.homeTeam?.score
      },
      awayTeam: {
        id: g.awayTeam?.teamId,
        name: g.awayTeam?.teamName,
        city: g.awayTeam?.teamCity,
        abbr: g.awayTeam?.teamTricode,
        score: g.awayTeam?.score
      },
      arena: g.arenaName,
      startTime: g.gameTimeUTC
    }));
    return new Response(JSON.stringify({ games: formatted }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message, games: [] }), {
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
