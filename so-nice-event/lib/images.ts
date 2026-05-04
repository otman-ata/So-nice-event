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
  heroBg: '/assets/images/hero-bg.jpeg',
  heroSlides: ['/assets/images/hero-bg.jpeg', '/assets/images/service-wedding.jpeg', '/assets/images/gallery-8.jpeg'],
  aboutUs: '/assets/images/about-us.jpeg',
  serviceWedding: '/assets/images/service-wedding.jpeg',
  servicePrivate: '/assets/images/service-private.jpeg',
  serviceCorporate: '/assets/images/service-corporate.jpeg',
  serviceBabyShower: '/assets/images/gallery-4.jpeg',
  serviceBirthday: '/assets/images/gallery-6.jpeg',
  blogPalette: '/assets/images/gallery-7.jpeg',
  blogNegafa: '/assets/images/gallery-3.jpeg',
  blogVenues: '/assets/images/gallery-2.jpeg',
  blogLanterns: '/assets/images/blog-lanterns.jpeg',
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

export const galleryImages: GalleryImage[] = [
  { id: 1, src: '/assets/images/gallery-1.jpeg', category: 'Weddings' },
  { id: 2, src: '/assets/images/gallery-2.jpeg', category: 'Weddings' },
  { id: 3, src: '/assets/images/gallery-3.jpeg', category: 'Weddings' },
  { id: 4, src: '/assets/images/gallery-4.jpeg', category: 'Baby Shower' },
  { id: 5, src: '/assets/images/gallery-5.jpeg', category: 'Weddings' },
  { id: 6, src: '/assets/images/gallery-6.jpeg', category: 'Corporate Events' },
  { id: 7, src: '/assets/images/gallery-7.jpeg', category: 'Weddings' },
  { id: 8, src: '/assets/images/about-us.jpeg', category: 'About Us' },
];
