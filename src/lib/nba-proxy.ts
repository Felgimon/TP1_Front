// src/lib/nba-proxy.ts
// Helper para hacer requests a NBA.com desde el servidor.

const NBA_HEADERS = {
	'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	'Accept': 'application/json, text/plain, */*',
	'Accept-Language': 'en-US,en;q=0.9',
	'Referer': 'https://www.nba.com/',
	'Origin': 'https://www.nba.com',
};

export async function fetchNbaStats(endpoint: string, params: Record<string, string> = {}): Promise<any> {
	const url = new URL(`https://stats.nba.com/stats/${endpoint}`);
	Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));

	console.log(`[NBA-PROXY] Fetching stats: ${url.toString()}`);

	try {
		const res = await fetch(url.toString(), {
			headers: {
				...NBA_HEADERS,
				'Host': 'stats.nba.com',
			}
		});
		console.log(`[NBA-PROXY] Stats response: ${res.status}`);
		if (!res.ok) {
			const body = await res.text().catch(() => '');
			throw new Error(`NBA Stats API ${res.status}: ${body.slice(0, 200)}`);
		}
		return res.json();
	} catch (err: any) {
		console.error(`[NBA-PROXY] Stats error: ${err.message}`);
		throw err;
	}
}

export async function fetchNbaCdn(path: string): Promise<any> {
	const url = `https://cdn.nba.com/static/json/${path}`;
	console.log(`[NBA-PROXY] Fetching CDN: ${url}`);

	try {
		const res = await fetch(url, {
			headers: {
				'User-Agent': NBA_HEADERS['User-Agent'],
				'Referer': 'https://www.nba.com/',
			}
		});
		console.log(`[NBA-PROXY] CDN response: ${res.status}`);
		if (!res.ok) {
			const body = await res.text().catch(() => '');
			throw new Error(`NBA CDN ${res.status}: ${body.slice(0, 200)}`);
		}
		return res.json();
	} catch (err: any) {
		console.error(`[NBA-PROXY] CDN error: ${err.message}`);
		throw err;
	}
}

// Convierte el formato de stats.nba.com (headers + rowSet) a objetos
export function rowSetToObjects(resultSet: { headers: string[]; rowSet: any[][] }): Record<string, any>[] {
	const { headers, rowSet } = resultSet;
	return rowSet.map(row => {
		const obj: Record<string, any> = {};
		headers.forEach((h, i) => { obj[h] = row[i]; });
		return obj;
	});
}

// Season string (ej: "2024-25" para marzo 2025)
export function getCurrentSeason(): string {
	const now = new Date();
	const year = now.getMonth() >= 9 ? now.getFullYear() : now.getFullYear() - 1;
	const nextYear = (year + 1).toString().slice(2);
	return `${year}-${nextYear}`;
}