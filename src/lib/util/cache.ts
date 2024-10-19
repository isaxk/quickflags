import { browser } from '$app/environment';

const cached = [];

export function cache(code: string) {
	return new Promise<void>((resolve) => {
		if (browser) {
			const img = new Image();
			img.src = flagUrlByCode(code);
			img.addEventListener('load', () => {
				resolve();
			});
			cached.push(img);
		}
	});
}

export function flagUrlByCode(code: string) {
	return `/flags/${code.toLowerCase()}.png`;
}
