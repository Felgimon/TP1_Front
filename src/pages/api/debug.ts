// src/pages/api/debug.ts
// GET /api/debug → testea conectividad con NBA.com y muestra errores detallados
// BORRAR ESTE ARCHIVO después de que todo funcione.

import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
	const results: Record<string, any> = {};

	// Test 1: CDN scoreboard
	try {
		const res = await fetch('https://cdn.nba.com/static/json/liveData/scoreboard/todaysScoreboard_00.json', {
			headers: {
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
				'Referer': 'https://www.nba.com/',
			}
		});
		const text = await res.text();
		results.cdn_scoreboard = {
			status: res.status,
			ok: res.ok,
			bodyPreview: text.slice(0, 300),
		};
	} catch (err: any) {
		results.cdn_scoreboard = {
			error: err.message,
			code: err.code,
			cause: err.cause?.message || null,
		};
	}

	// Test 2: stats.nba.com
	try {
		const res = await fetch('https://stats.nba.com/stats/commonallplayers?LeagueID=00&Season=2024-25&IsOnlyCurrentSeason=1', {
			headers: {
				'Host': 'stats.nba.com',
				'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
				'Referer': 'https://www.nba.com/',
				'Origin': 'https://www.nba.com',
				'Accept': 'application/json',
			}
		});
		const text = await res.text();
		results.stats_players = {
			status: res.status,
			ok: res.ok,
			bodyPreview: text.slice(0, 300),
		};
	} catch (err: any) {
		results.stats_players = {
			error: err.message,
			code: err.code,
			cause: err.cause?.message || null,
		};
	}

	// Test 3: DNS resolution check
	try {
		const res = await fetch('https://httpbin.org/get', {
			headers: { 'User-Agent': 'test' }
		});
		results.internet = { ok: res.ok, status: res.status };
	} catch (err: any) {
		results.internet = { error: err.message };
	}

	return new Response(JSON.stringify(results, null, 2), {
		status: 200,
		headers: { 'Content-Type': 'application/json' }
	});
};
