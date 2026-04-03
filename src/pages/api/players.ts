// src/pages/api/players.ts
// GET /api/players?search=LeBron → busca jugadores por nombre via balldontlie.io

import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
	const search = url.searchParams.get('search')?.trim();

	if (!search || search.length < 2) {
		return new Response(JSON.stringify({ players: [] }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	try {
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
		}));

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
