// src/pages/api/scoreboard.ts
// GET /api/scoreboard → devuelve los partidos de hoy desde NBA.com CDN

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	try {
		const res = await fetch('https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json', {
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
				'Referer': 'https://www.nba.com/',
			}
		});
		if (!res.ok) throw new Error(`NBA CDN ${res.status}`);
		const data = await res.json();
		const games = data?.scoreboard?.games || [];

		const formatted = games.map((g: any) => ({
			id: g.gameId,
			status: g.gameStatusText?.trim() || '',
			statusCode: g.gameStatus,
			period: g.period,
			clock: g.gameClock?.replace('PT', '').replace('M', ':').replace('S', '') || '',
			homeTeam: {
				id: g.homeTeam?.teamId,
				name: g.homeTeam?.teamName,
				city: g.homeTeam?.teamCity,
				abbr: g.homeTeam?.teamTricode,
				score: g.homeTeam?.score,
			},
			awayTeam: {
				id: g.awayTeam?.teamId,
				name: g.awayTeam?.teamName,
				city: g.awayTeam?.teamCity,
				abbr: g.awayTeam?.teamTricode,
				score: g.awayTeam?.score,
			},
			arena: g.arenaName,
			startTime: g.gameTimeUTC,
		}));

		return new Response(JSON.stringify({ games: formatted }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err: any) {
		return new Response(JSON.stringify({ error: err.message, games: [] }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
