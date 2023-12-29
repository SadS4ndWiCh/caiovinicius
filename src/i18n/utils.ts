import type { Lang } from './index';

export function getLanguageFromURL(pathname: string) {
	const langCodeMatch = pathname.match(/\/([a-z]{2}-?[a-z]{0,2})\//);
	return langCodeMatch ? langCodeMatch[1] as Lang : 'en';
}

export function removeLangFromSlug(slug: string) {
	return slug.split('/').at(1) ?? '';
}