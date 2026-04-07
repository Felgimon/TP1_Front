// src/pages/api/players.ts
// GET /api/players?search=LeBron → busca jugadores por nombre via balldontlie.io

import type { APIRoute } from 'astro';

// Cache en memoria: query → { data, timestamp }
const searchCache = new Map<string, { data: any; ts: number }>();
const CACHE_TTL = 1000 * 60 * 60; // 1 hora

export const GET: APIRoute = async ({ url }) => {
	const search = url.searchParams.get('search')?.trim().toLowerCase();

	if (!search || search.length < 2) {
		return new Response(JSON.stringify({ players: [] }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
		const now = Date.now();
		const cached = searchCache.get(search);
		if (cached && (now - cached.ts) < CACHE_TTL) {
			return new Response(JSON.stringify({ players: cached.data }), {
				status: 200,
				headers: { 'Content-Type': 'application/json' }
			});
		}

		const apiKey = import.meta.env.BALLDONTLIE_API_KEY;
		const res = await fetch(
			`https://api.balldontlie.io/v1/players?search=${encodeURIComponent(search)}&per_page=10`,
			{ headers: { 'Authorization': apiKey } }
		);
		if (!res.ok) throw new Error(`BallDontLie ${res.status}`);
		const data = await res.json();

		const players = (data.data || []).map((p: any) => ({
			id: p.id,
			name: `${p.first_name} ${p.last_name}`,
			team: p.team?.full_name || 'Free Agent',
			teamAbbr: p.team?.abbreviation || '',
			teamCity: p.team?.city || '',
			jerseyNumber: p.jersey_number || '',
			position: p.position || '',
		}));

		searchCache.set(search, { data: players, ts: now });

		return new Response(JSON.stringify({ players }), {
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
