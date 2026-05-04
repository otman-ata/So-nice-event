export interface GalleryImage {
  id: number;
  src: string;
  category: 'Weddings' | 'Private Events' | 'Corporate Events' | 'Baby Shower' | 'Birthdays' | 'About Us';
}

export const defaultSiteImages = {
  logoColor: '/assets/logos/main-logo.png',
  logoWhite: '/assets/logos/logo-white.png',
  /** Optional separate asset for scrolled header; if unset, a gold CSS filter is applied to the white logo. */
  logoYellow: '',
  heroBg: '',
  heroSlides: [],
  aboutUs: '',
  serviceWedding: '',
  servicePrivate: '',
  serviceCorporate: '',
  serviceBabyShower: '',
  serviceBirthday: '',
  blogPalette: '',
  blogNegafa: '',
  blogVenues: '',
  blogLanterns: '',
} as const;

export type SiteImageKey = keyof typeof defaultSiteImages;
export type SiteImageValue = string | string[];

declare global {
  interface Window { __SITE_IMAGES?: Partial<Record<SiteImageKey, SiteImageValue>>; }
}

export const siteImages = new Proxy(defaultSiteImages, {
  get(target, prop) {
    const key = prop as keyof typeof defaultSiteImages;
    const override = (typeof window !== 'undefined' && window.__SITE_IMAGES)?.[key];
    if (override) return override;
    const base = target[key];
    if (key === 'logoYellow' && (!base || base === '')) {
      return target.logoWhite;
    }
    return base;
  }
});

export const galleryImages: GalleryImage[] = [];
