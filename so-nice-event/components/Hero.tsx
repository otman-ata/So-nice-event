import React, { useEffect, useState } from 'react';
import { siteImages } from '../lib/images';
import { SITE_IMAGES_EVENT, writeSiteImageOverride, readAsDataURL } from '../lib/cmsSiteImage';
import { useCmsEditMode } from '../context/CmsEditContext';

interface HeroProps {
  content: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    ctaButton: string;
  };
  onCtaClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Hero: React.FC<HeroProps> = ({ content, onCtaClick }) => {
  const edit = useCmsEditMode();
  const [, bump] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const h = () => bump((n) => n + 1);
    window.addEventListener(SITE_IMAGES_EVENT, h);
    return () => window.removeEventListener(SITE_IMAGES_EVENT, h);
  }, []);

  const overrideSlides = (typeof window !== 'undefined' && (window as any).__SITE_IMAGES?.heroSlides) || [];
  const slideImages: string[] = Array.isArray(overrideSlides) && overrideSlides.length > 0
    ? overrideSlides.filter((s: unknown) => typeof s === 'string' && s.trim().length > 0)
    : [siteImages.heroBg, siteImages.serviceWedding, siteImages.servicePrivate].filter(Boolean);

  useEffect(() => {
    setActiveSlide(0);
    if (slideImages.length === 0) return;
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideImages.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [slideImages.length]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center -mt-20 md:-mt-24">
      {slideImages.map((bg, idx) => (
        <div
          key={`${bg}-${idx}`}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${idx === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${bg}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-black/50" />
      {edit && (
        <label className="absolute bottom-8 right-6 z-20 cursor-pointer rounded-full bg-black/65 px-4 py-2 text-sm font-semibold text-white hover:bg-black/80">
          Replace hero image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const f = e.target.files?.[0];
              e.target.value = '';
              if (!f) return;
              try {
                const fd = new FormData();
                fd.append('file', f);
                const base = (localStorage.getItem('cms_local_server') || 'http://localhost:4000').replace(/\/$/, '');
                const res = await fetch(base + '/upload-image', { method: 'POST', body: fd });
                if (res.ok) {
                  const j = await res.json();
                  if (j?.ok && j.path) {
                    writeSiteImageOverride('heroBg', j.path);
                    return;
                  }
                }
              } catch {
                /* data URL */
              }
              const url = await readAsDataURL(f);
              writeSiteImageOverride('heroBg', url);
            }}
          />
        </label>
      )}
      <div className="relative text-center text-white p-6 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wider leading-tight italic">
          {content.title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light">{content.subtitle1}</p>
        <p className="mt-2 text-md md:text-xl font-light">{content.subtitle2}</p>
        <a
          href="#contact"
          onClick={(e) => onCtaClick(e, '#contact')}
          className="mt-8 inline-block custom-bg text-white py-3 px-10 rounded-full text-lg font-medium transition-transform duration-300 transform hover:scale-105"
        >
          {content.ctaButton}
        </a>
      </div>
    </section>
  );
};

export default Hero;
