export interface GalleryImage {
  id: number;
  src: string;
  category: 'Weddings' | 'Private Events' | 'Corporate Events';
}

export const defaultSiteImages = {
  logoColor: '/assets/logos/main-logo.png',
  logoWhite: '/assets/logos/logo-white.png',
  /** Optional separate asset for scrolled header; if unset, a gold CSS filter is applied to the white logo. */
  logoYellow: '',
  heroBg: '/assets/images/hero-bg.jpeg',
  aboutUs: '/assets/images/about-us.jpeg',
  serviceWedding: '/assets/images/service-wedding.jpeg',
  servicePrivate: '/assets/images/service-private.jpeg',
  serviceCorporate: '/assets/images/service-corporate.jpeg',
  blogPalette: '/assets/images/gallery-7.jpeg',
  blogNegafa: '/assets/images/gallery-3.jpeg',
  blogVenues: '/assets/images/gallery-2.jpeg',
  blogLanterns: '/assets/images/blog-lanterns.jpeg',
} as const;

export type SiteImageKey = keyof typeof defaultSiteImages;

declare global {
  interface Window { __SITE_IMAGES?: Partial<Record<SiteImageKey, string>>; }
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
  { id: 4, src: '/assets/images/gallery-4.jpeg', category: 'Private Events' },
  { id: 5, src: '/assets/images/gallery-5.jpeg', category: 'Weddings' },
  { id: 6, src: '/assets/images/gallery-6.jpeg', category: 'Corporate Events' },
  { id: 7, src: '/assets/images/gallery-7.jpeg', category: 'Weddings' },
  { id: 8, src: '/assets/images/gallery-8.jpeg', category: 'Private Events' },
  { id: 9, src: '/assets/images/gallery-9.jpeg', category: 'Corporate Events' },
  { id: 10, src: '/assets/images/gallery-10.jpeg', category: 'Weddings' },
  { id: 11, src: '/assets/images/gallery-11.jpeg', category: 'Private Events' },
  { id: 12, src: '/assets/images/gallery-12.jpeg', category: 'Weddings' },
  { id: 13, src: '/assets/images/gallery-13.jpeg', category: 'Private Events' },
  { id: 14, src: '/assets/images/gallery-14.jpeg', category: 'Weddings' },
  { id: 15, src: '/assets/images/gallery-15.jpeg', category: 'Corporate Events' },
  { id: 16, src: '/assets/images/gallery-16.jpeg', category: 'Weddings' },
  { id: 17, src: '/assets/images/gallery-17.jpeg', category: 'Private Events' },
  { id: 18, src: '/assets/images/gallery-18.jpeg', category: 'Weddings' },
];