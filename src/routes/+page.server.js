import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
	try {
		const url = 'https://zenquotes.io/api/random';
		const response = await fetch(url);
		const [json] = await response.json();

		return {
			quote: json.q,
			author: json.a
		}

	} catch (e) {
		throw error(500, 'Error with request')
	}
}