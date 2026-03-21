// src/pages/api/scoreboard.ts
// GET /api/scoreboard → devuelve los partidos de hoy desde NBA.com CDN

import type { APIRoute } from 'astro';
import { fetchNbaCdn } from '../../lib/nba-proxy';

export const GET: APIRoute = async () => {
	try {
		const data = await fetchNbaCdn('liveData/scoreboard/todaysScoreboard_00.json');
		const games = data?.scoreboard?.games || [];

		const formatted = games.map((g: any) => ({
			id: g.gameId,
			status: g.gameStatusText?.trim() || '',
			statusCode: g.gameStatus, // 1=upcoming, 2=live, 3=final
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
