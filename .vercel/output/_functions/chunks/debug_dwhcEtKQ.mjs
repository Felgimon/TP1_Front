const GET = async () => {
  const results = {};
  try {
    const res = await fetch("https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Referer": "https://www.nba.com/"
      }
    });
    const text = await res.text();
    results.cdn_scoreboard = {
      status: res.status,
      ok: res.ok,
      bodyPreview: text.slice(0, 300)
    };
  } catch (err) {
    results.cdn_scoreboard = {
      error: err.message,
      code: err.code,
      cause: err.cause?.message || null
    };
  }
  try {
    const res = await fetch("https://stats.nba.com/stats/commonallplayers?LeagueID=00&Season=2024-25&IsOnlyCurrentSeason=1", {
      headers: {
        "Host": "stats.nba.com",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        "Referer": "https://www.nba.com/",
        "Origin": "https://www.nba.com",
        "Accept": "application/json"
      }
    });
    const text = await res.text();
    results.stats_players = {
      status: res.status,
      ok: res.ok,
      bodyPreview: text.slice(0, 300)
    };
  } catch (err) {
    results.stats_players = {
      error: err.message,
      code: err.code,
      cause: err.cause?.message || null
    };
  }
  try {
    const res = await fetch("https://httpbin.org/get", {
      headers: { "User-Agent": "test" }
    });
    results.internet = { ok: res.ok, status: res.status };
  } catch (err) {
    results.internet = { error: err.message };
  }
  return new Response(JSON.stringify(results, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
