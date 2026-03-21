// src/pages/api/player-stats/[id].ts
// GET /api/player-stats/2544 → stats de un jugador por su ID

import type { APIRoute } from 'astro';
import { fetchNbaStats, rowSetToObjects, getCurrentSeason } from '../../../lib/nba-proxy';

export const GET: APIRoute = async ({ params }) => {
	const playerId = params.id;
	if (!playerId) {
		return new Response(JSON.stringify({ error: 'Missing player ID' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		// Traer info del jugador + career stats en paralelo
		const [infoData, careerData] = await Promise.all([
			fetchNbaStats('commonplayerinfo', { PlayerID: playerId }),
			fetchNbaStats('playercareerstats', { PlayerID: playerId, PerMode: 'PerGame' }),
		]);

		// Info del jugador
		const playerInfo = infoData?.resultSets?.[0];
		const info = playerInfo ? rowSetToObjects(playerInfo)[0] : null;

		// Season averages (última temporada)
		const seasonStats = careerData?.resultSets?.[0];
		const allSeasons = seasonStats ? rowSetToObjects(seasonStats) : [];
		const currentSeason = getCurrentSeason();

		// Buscar la temporada actual, si no existe tomar la última
		let stats = allSeasons.find((s: any) => s.SEASON_ID === currentSeason);
		if (!stats && allSeasons.length > 0) {
			stats = allSeasons[allSeasons.length - 1];
		}

		const player = {
			id: playerId,
			firstName: info?.FIRST_NAME || '',
			lastName: info?.LAST_NAME || '',
			name: info?.DISPLAY_FIRST_LAST || `Player ${playerId}`,
			team: info?.TEAM_NAME || '',
			teamAbbr: info?.TEAM_ABBREVIATION || '',
			teamCity: info?.TEAM_CITY || '',
			jerseyNumber: info?.JERSEY || '',
			position: info?.POSITION || '',
			height: info?.HEIGHT || '',
			weight: info?.WEIGHT || '',
			country: info?.COUNTRY || '',
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
				min: stats.MIN,
			} : null,
		};

		return new Response(JSON.stringify({ player }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err: any) {
		return new Response(JSON.stringify({ error: err.message }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};
