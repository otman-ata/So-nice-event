import React, { useEffect, useRef, useState } from 'react';
import { galleryImages as defaultGalleryImages, GalleryImage as GalleryImageProps } from '../lib/images';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import FadeInOnScroll from './common/FadeInOnScroll';

interface GalleryProps {
  content: {
    title:string;
    subtitle: string;
  };
}

const GalleryImageCard: React.FC<{ image: GalleryImageProps }> = ({ image }) => {
    return (
        <FadeInOnScroll yOffset={3} className="group relative overflow-hidden rounded-lg border-4 border-white shadow-xl shadow-[#831843]/15 ring-1 ring-[#d9a629]/35">
            <img src={image.src} alt={image.category} className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-3 border border-[#f7d979]/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#831843]/85 to-transparent p-4 pt-16">
              <span className="inline-flex rounded-full bg-[#d9a629] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#831843]">
                {image.category}
              </span>
            </div>
        </FadeInOnScroll>
    );
}

function withRequiredGallerySections(items: GalleryImageProps[]) {
  return items.filter((item) => item.src && item.category !== 'About Us');
}

const Gallery: React.FC<GalleryProps> = ({ content }) => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [images, setImages] = useState<GalleryImageProps[]>(defaultGalleryImages);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Weddings' | 'Private Events' | 'Corporate Events' | 'Baby Shower' | 'Birthdays' | 'Birth Celebration' | 'Graduation Parties'>('All');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });
  const lang = typeof document !== 'undefined' ? document.documentElement.lang : 'fr';
  const copy = {
    eyebrow: lang === 'ar' ? 'ديكورات ولحظات مغربية' : lang === 'fr' ? 'Decors et moments marocains' : 'Moroccan setups and moments',
    loading: lang === 'ar' ? 'جار التحميل...' : lang === 'fr' ? 'Chargement...' : 'Loading...',
    loadMore: lang === 'ar' ? 'عرض المزيد' : lang === 'fr' ? 'Voir plus' : 'Load More',
  };

  useEffect(() => {
    let isMounted = true;
    const DRAFT_KEY = 'so_nice_gallery_draft';
    function readDraft(): GalleryImageProps[] | null {
      try {
        const raw = typeof window !== 'undefined' ? localStorage.getItem(DRAFT_KEY) : null;
        if (!raw) return null;
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed) && parsed.length > 0) return parsed as GalleryImageProps[];
      } catch {
        /* ignore */
      }
      return null;
    }
    async function loadFromJson() {
      try {
        setLoading(true);
        const draft = readDraft();
        const cmsData = typeof window !== 'undefined' ? (window as any).__CMS?.galleryData : null;
        const cmsUrl = (typeof window !== 'undefined' && (window as any).__CMS?.galleryUrl) || '';
        const url = cmsUrl && typeof cmsUrl === 'string' ? cmsUrl : '/assets/gallery.json';
        let remote: GalleryImageProps[] | null = null;
        try {
          if (Array.isArray(cmsData) && cmsData.length > 0) {
            remote = cmsData as GalleryImageProps[];
          } else {
            const res = await fetch(url, { cache: 'no-cache' });
            if (res.ok) remote = (await res.json()) as GalleryImageProps[];
          }
        } catch {
          /* keep remote null */
        }
        const merged =
          draft && draft.length > 0 ? draft : remote && remote.length > 0 ? remote : null;
        if (isMounted && merged && merged.length > 0) {
          setImages(withRequiredGallerySections(merged));
        }
      } catch (_) {
        /* keep defaults */
      } finally {
        setLoading(false);
      }
    }
    loadFromJson();
    return () => {
      isMounted = false;
    };
  }, []);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 9);
  };

  const filtered = activeCategory === 'All' ? images : images.filter(i => i.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#fffaf0] moroccan-pattern zellige-band" ref={sectionRef}>
      <div className="container mx-auto px-6 section-inner">
        <div className={`text-center mb-12 transition-opacity duration-1000 ${isSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#be185d]">{copy.eyebrow}</p>
          <h2 className="moroccan-heading text-4xl md:text-5xl font-bold custom-text-dark mb-4 font-serif italic">{content.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        {/* Removed top scroller: show images only in the grid below */}
        
        {/* Category filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {([
            { key: 'All', label: (content as any).filterLabels?.all || 'All' },
            { key: 'Weddings', label: (content as any).filterLabels?.weddings || 'Weddings' },
            { key: 'Private Events', label: (content as any).filterLabels?.private || 'Private Events' },
            { key: 'Corporate Events', label: (content as any).filterLabels?.corporate || 'Corporate Events' },
            { key: 'Baby Shower', label: (content as any).filterLabels?.babyShower || 'Baby Shower' },
            { key: 'Birthdays', label: (content as any).filterLabels?.birthdays || 'Birthdays' },
            { key: 'Birth Celebration', label: (content as any).filterLabels?.birthCelebration || 'Birth Celebration' },
            { key: 'Graduation Parties', label: (content as any).filterLabels?.graduation || 'Graduation Parties' }
          ] as const).map(cat => (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key as any); setVisibleCount(9); }}
              className={`px-4 py-2 rounded-full border font-semibold transition-colors ${activeCategory === (cat.key as any) ? 'bg-[#be185d] text-white border-transparent shadow-md shadow-[#831843]/15' : 'border-[#be185d]/25 bg-white/85 text-[#be185d] hover:border-[#d9a629] hover:text-[#831843]'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-gray-500">{copy.loading}</p>
        ) : filtered.length === 0 ? (
          <div className="tile-border lantern-glow mx-auto max-w-2xl rounded-lg bg-white/90 p-8 text-center text-stone-600">
            {lang === 'ar' ? 'ستظهر الصور هنا بعد رفعها من لوحة الإدارة.' : lang === 'fr' ? 'Les images apparaîtront ici après leur ajout depuis le panneau admin.' : 'Images will appear here after they are uploaded from the admin panel.'}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.slice(0, visibleCount).map((image) => (
              <div key={image.id} className="relative">
                <GalleryImageCard image={image} />
              </div>
            ))}
          </div>
        )}

        {visibleCount < filtered.length && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="custom-bg text-white py-3 px-10 rounded-full text-lg font-medium transition-transform duration-300 transform hover:scale-105"
            >
              {copy.loadMore}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
