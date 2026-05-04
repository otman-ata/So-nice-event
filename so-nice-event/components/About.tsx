import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { CmsImageSlot } from './common/CmsImageSlot';

interface AboutProps {
  content: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
}

const About: React.FC<AboutProps> = ({ content }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.3, triggerOnce: true });
  const lang = typeof document !== 'undefined' ? document.documentElement.lang : 'fr';
  const eyebrow = lang === 'ar' ? 'تنظيم وتزيين واستقبال' : lang === 'fr' ? 'Organisation, decoration et accueil' : 'Planner, decorator, host partner';

  return (
    <section id="about" className="py-24 bg-[#fff8e8] moroccan-pattern">
      <div
        ref={sectionRef}
        className={`container mx-auto px-6 section-inner grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="order-2 md:order-1 rounded-lg border border-[#f3c74d]/30 bg-white/80 p-8 shadow-xl shadow-[#450a0a]/10">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#7a121c]">{eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold custom-text-dark mb-6 font-serif italic">{content.title}</h2>
          <div className="space-y-4 text-stone-600 leading-loose">
            <p>{content.paragraph1}</p>
            <p>{content.paragraph2}</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-lg border-8 border-white shadow-2xl shadow-[#450a0a]/20 overflow-hidden aspect-w-1 aspect-h-1 rotate-1">
            <CmsImageSlot
              siteKey="aboutUs"
              alt="A beautifully arranged, elegant event space planned by So Nice Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
