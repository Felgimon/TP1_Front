// src/pages/api/player-stats/[id].ts
// GET /api/player-stats/237 → stats de un jugador por su ID via balldontlie.io

import type { APIRoute } from 'astro';

function getCurrentSeasonYear(): number {
	const now = new Date();
	// La temporada NBA empieza en octubre (mes 9)
	return now.getMonth() >= 9 ? now.getFullYear() : now.getFullYear() - 1;
}

export const GET: APIRoute = async ({ params }) => {
	const playerId = params.id;
	if (!playerId) {
		return new Response(JSON.stringify({ error: 'Missing player ID' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const apiKey = import.meta.env.BALLDONTLIE_API_KEY;
		const season = getCurrentSeasonYear();

		const [playerRes, statsRes] = await Promise.all([
			fetch(`https://api.balldontlie.io/v1/players/${playerId}`, {
				headers: { 'Authorization': apiKey }
			}),
			fetch(`https://api.balldontlie.io/v1/season_averages?season=${season}&player_ids[]=${playerId}`, {
				headers: { 'Authorization': apiKey }
			})
		]);

		if (!playerRes.ok) throw new Error(`BallDontLie player ${playerRes.status}`);

		const p = await playerRes.json();
		const statsData = statsRes.ok ? await statsRes.json() : { data: [] };

		// Si no hay stats para la temporada actual, intenta la anterior
		let stats = statsData.data?.[0];
		if (!stats) {
			const prevRes = await fetch(
				`https://api.balldontlie.io/v1/season_averages?season=${season - 1}&player_ids[]=${playerId}`,
				{ headers: { 'Authorization': apiKey } }
			);
			if (prevRes.ok) {
				const prevData = await prevRes.json();
				stats = prevData.data?.[0];
			}
		}

		const player = {
			id: playerId,
			firstName: p.first_name,
			lastName: p.last_name,
			name: `${p.first_name} ${p.last_name}`,
			team: p.team?.full_name || '',
			teamAbbr: p.team?.abbreviation || '',
			teamCity: p.team?.city || '',
			jerseyNumber: p.jersey_number || '',
			position: p.position || '',
			height: p.height || '',
			weight: p.weight_pounds ? `${p.weight_pounds}` : '',
			country: p.country || '',
			seasonStats: stats ? {
				season: `${stats.season}-${String(stats.season + 1).slice(2)}`,
				gp: stats.games_played,
				pts: stats.pts,
				reb: stats.reb,
				ast: stats.ast,
				stl: stats.stl,
				blk: stats.blk,
				fgPct: stats.fg_pct,
				fg3Pct: stats.fg3_pct,
				ftPct: stats.ft_pct,
				min: parseFloat(stats.min) || 0,
			} : null,
		};

		return new Response(JSON.stringify({ player }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err: any) {
		console.error(`[PLAYER-STATS] Failed for ${playerId}: ${err.message}`);
		return new Response(JSON.stringify({ error: err.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
