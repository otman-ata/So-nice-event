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
        <FadeInOnScroll yOffset={3} className="group relative overflow-hidden rounded-lg shadow-md">
            <img src={image.src} alt="" className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
        </FadeInOnScroll>
    );
}

const Gallery: React.FC<GalleryProps> = ({ content }) => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [images, setImages] = useState<GalleryImageProps[]>(defaultGalleryImages);
  const [loading, setLoading] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<'All' | 'Weddings' | 'Private Events' | 'Corporate Events' | 'Baby Shower' | 'Birthdays'>('All');
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isSectionVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

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
        const cmsUrl = (typeof window !== 'undefined' && (window as any).__CMS?.galleryUrl) || '';
        const url = cmsUrl && typeof cmsUrl === 'string' ? cmsUrl : '/assets/gallery.json';
        let remote: GalleryImageProps[] | null = null;
        try {
          const res = await fetch(url, { cache: 'no-cache' });
          if (res.ok) remote = (await res.json()) as GalleryImageProps[];
        } catch {
          /* keep remote null */
        }
        const merged =
          draft && draft.length > 0 ? draft : remote && remote.length > 0 ? remote : null;
        if (isMounted && merged && merged.length > 0) {
          setImages(merged);
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
    <section id="gallery" className="py-20 bg-[#fffdf7] moroccan-pattern" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-opacity duration-1000 ${isSectionVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold custom-text-dark mb-4 font-serif italic">{content.title}</h2>
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
            { key: 'Birthdays', label: (content as any).filterLabels?.birthdays || 'Birthdays' }
          ] as const).map(cat => (
            <button
              key={cat.key}
              onClick={() => { setActiveCategory(cat.key as any); setVisibleCount(9); }}
              className={`px-4 py-2 rounded-full border transition-colors ${activeCategory === (cat.key as any) ? 'custom-bg text-white border-transparent' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {loading ? (
          <p className="text-center text-gray-500">Loading…</p>
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
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;