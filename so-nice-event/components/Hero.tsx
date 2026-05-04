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

  const configuredSlides = siteImages.heroSlides;
  const slideImages: string[] =
    Array.isArray(configuredSlides) && configuredSlides.length > 0
      ? configuredSlides.filter((s: unknown): s is string => typeof s === 'string' && s.trim().length > 0)
      : [siteImages.heroBg, siteImages.serviceWedding, siteImages.servicePrivate].filter(
          (s): s is string => typeof s === 'string' && Boolean(s)
        );
  const lang = typeof document !== 'undefined' ? document.documentElement.lang : 'fr';
  const eyebrow = lang === 'ar' ? 'منظم مناسبات في أكادير' : lang === 'fr' ? 'Organisateur d\'evenements a Agadir' : 'Agadir Event Organizer';

  useEffect(() => {
    setActiveSlide(0);
    if (slideImages.length === 0) return;
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideImages.length);
    }, 2000);
    return () => window.clearInterval(id);
  }, [slideImages.length]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden zellige-band">
      {slideImages.map((bg, idx) => (
        <div
          key={`${bg}-${idx}`}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${idx === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${bg}')` }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/68 via-[#3b070c]/50 to-[#76121d]/86" />
      <div className="absolute inset-x-0 bottom-0 h-48 opacity-35 bg-[radial-gradient(circle_at_50%_50%,rgba(247,217,121,.85)_0_2px,transparent_2.5px),linear-gradient(45deg,transparent_46%,rgba(217,166,41,.75)_47%,rgba(217,166,41,.75)_53%,transparent_54%)] bg-[length:38px_38px]" />
      <div className="absolute left-0 right-0 top-28 mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-[#f7d979]/80 to-transparent" />
      <div className="absolute left-6 top-32 hidden h-56 w-20 rounded-t-full border border-[#f7d979]/35 bg-[#450a0a]/20 md:block" />
      <div className="absolute right-6 bottom-28 hidden h-56 w-20 rounded-t-full border border-[#f7d979]/35 bg-[#450a0a]/20 md:block" />
      {edit && (
        <label className="absolute bottom-8 right-6 z-20 cursor-pointer rounded-full bg-black/65 px-4 py-2 text-sm font-semibold text-white hover:bg-black/80">
          Upload hero slideshow
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={async (e) => {
              const files = Array.from(e.target.files || []);
              e.target.value = '';
              if (!files.length) return;
              const nextSlides: string[] = [];
              for (const f of files) {
                try {
                  const fd = new FormData();
                  fd.append('file', f);
                  const base = (localStorage.getItem('cms_local_server') || 'http://localhost:4000').replace(/\/$/, '');
                  const res = await fetch(base + '/upload-image', { method: 'POST', body: fd });
                  if (res.ok) {
                    const j = await res.json();
                    if (j?.ok && j.path) {
                      nextSlides.push(j.path);
                      continue;
                    }
                  }
                } catch {
                  /* data URL preview */
                }
                nextSlides.push(await readAsDataURL(f));
              }
              writeSiteImageOverride('heroSlides', nextSlides);
            }}
          />
        </label>
      )}
      <div className="relative text-center text-white px-6 pt-24 z-10 max-w-5xl">
        <div className="ornament-rule mx-auto mb-6 w-64 opacity-90" />
        <p className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#f7d979]/70 bg-black/30 px-5 py-2 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d979] backdrop-blur">
          {eyebrow}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight italic drop-shadow-[0_8px_28px_rgba(0,0,0,.35)]">
          {content.title}
        </h1>
        <p className="mt-5 text-xl md:text-3xl font-light text-[#fff7d6]">{content.subtitle1}</p>
        <p className="mt-2 text-md md:text-xl font-light text-white/85">{content.subtitle2}</p>
        <a
          href="#contact"
          onClick={(e) => onCtaClick(e, '#contact')}
          className="mt-9 inline-block border border-[#f7d979] bg-[#d9a629] text-[#450a0a] py-3 px-10 rounded-full text-lg font-semibold shadow-xl shadow-black/20 transition-transform duration-300 transform hover:scale-105 hover:bg-[#fff4c9]"
        >
          {content.ctaButton}
        </a>
      </div>
    </section>
  );
};

export default Hero;
