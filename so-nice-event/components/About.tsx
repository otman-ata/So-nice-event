import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

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
    <section id="about" className="py-24 bg-[#fff4dc] moroccan-pattern zellige-band">
      <div
        ref={sectionRef}
        className={`container mx-auto px-6 section-inner transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="tile-border lantern-glow mx-auto max-w-4xl rounded-lg bg-white/90 p-8 text-center md:p-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#7a121c]">{eyebrow}</p>
          <h2 className="moroccan-heading text-4xl md:text-5xl font-bold custom-text-dark mb-6 font-serif italic">{content.title}</h2>
          <div className="mx-auto max-w-3xl space-y-4 text-stone-600 leading-loose">
            <p>{content.paragraph1}</p>
            <p>{content.paragraph2}</p>
          </div>
          <div className="ornament-rule mx-auto mt-8 w-56 opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default About;
