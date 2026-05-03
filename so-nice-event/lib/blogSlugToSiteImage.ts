import type { SiteImageKey } from './images';

/** Maps journal / blog post slugs to editable site image keys. */
export function siteImageKeyFromBlogSlug(slug: string): SiteImageKey | null {
  const s = slug.toLowerCase();
  if (s.includes('palette') || s.includes('color')) return 'blogPalette';
  if (s.includes('negafa')) return 'blogNegafa';
  if (s.includes('lieux') || s.includes('venues') || s.includes('venue')) return 'blogVenues';
  if (s.includes('lantern')) return 'blogLanterns';
  return null;
}
