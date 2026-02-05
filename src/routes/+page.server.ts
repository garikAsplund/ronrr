import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ request }) => {
	const ua = request.headers.get('user-agent') || '';
	// a quick mobile check
    const isMobile = /\b(Mobi|Android|iP(hone|ad|od))\b/.test(ua);
    console.log({ isMobile });
	return { isMobile };
};
