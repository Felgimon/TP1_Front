// src/pages/api/players.ts
// GET /api/players?search=LeBron → busca jugadores por nombre

import type { APIRoute } from 'astro';
import { fetchNbaStats, rowSetToObjects, getCurrentSeason } from '../../lib/nba-proxy';

// Cache de jugadores en memoria (se llena al primer request)
let playersCache: any[] | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 1000 * 60 * 60; // 1 hora

async function getPlayersList(): Promise<any[]> {
	const now = Date.now();
	if (playersCache && (now - cacheTimestamp) < CACHE_TTL) {
		return playersCache;
	}

	const season = getCurrentSeason();
	const data = await fetchNbaStats('commonallplayers', {
		LeagueID: '00',
		Season: season,
		IsOnlyCurrentSeason: '1',
	});

	const resultSet = data?.resultSets?.[0];
	if (!resultSet) return [];

	playersCache = rowSetToObjects(resultSet);
	cacheTimestamp = now;
	return playersCache;
}

export const GET: APIRoute = async ({ url }) => {
	const search = url.searchParams.get('search')?.toLowerCase().trim();

	if (!search || search.length < 2) {
		return new Response(JSON.stringify({ players: [] }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const allPlayers = await getPlayersList();

		// Filtrar y rankear por relevancia
		const matches = allPlayers
			.filter((p: any) => {
				const name = (p.DISPLAY_FIRST_LAST || '').toLowerCase();
				return name.includes(search);
			})
			.map((p: any) => {
				const name = (p.DISPLAY_FIRST_LAST || '').toLowerCase();
				// Score de relevancia: menor = mejor match
				let score = 3; // contains
				if (name === search) score = 0; // match exacto
				else if (name.startsWith(search)) score = 1; // empieza con
				else if (name.split(' ').some((w: string) => w.startsWith(search))) score = 1.5; // alguna palabra empieza con
				else if (name.includes(` ${search}`)) score = 2; // match después de espacio

				return { player: p, score, name };
			})
			.sort((a, b) => a.score - b.score || a.name.length - b.name.length)
			.slice(0, 10)
			.map(({ player: p }) => ({
				id: p.PERSON_ID,
				name: p.DISPLAY_FIRST_LAST,
				team: p.TEAM_NAME || 'Free Agent',
				teamAbbr: p.TEAM_ABBREVIATION || '',
				teamCity: p.TEAM_CITY || '',
				jerseyNumber: p.JERSEY_NUMBER || '',
			}));

		return new Response(JSON.stringify({ players: matches }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (err: any) {
		return new Response(JSON.stringify({ error: err.message, players: [] }), {
			status: 500,
			headers: { 'Content-Type': 'application/json' }
		});
	}
};