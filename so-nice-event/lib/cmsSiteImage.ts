import type { SiteImageKey, SiteImageValue } from './images';

export const SITE_IMAGES_EVENT = 'so-nice-site-images';

export function writeSiteImageOverride(key: SiteImageKey, value: SiteImageValue) {
  if (typeof window === 'undefined') return;
  const next: Partial<Record<SiteImageKey, SiteImageValue>> = { ...(window.__SITE_IMAGES || {}) };
  next[key] = value;
  window.__SITE_IMAGES = next;
  try {
    localStorage.setItem('site_images_override', JSON.stringify(window.__SITE_IMAGES));
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new Event(SITE_IMAGES_EVENT));
}

export function readAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}
