import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface Testimonial {
  quote: string;
  author: string;
}

interface TestimonialsProps {
  content: {
    title: string;
    subtitle: string;
    testimonialList: Testimonial[];
  };
}

const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });
  const lang = typeof document !== 'undefined' ? document.documentElement.lang : 'fr';
  const copy = {
    eyebrow: lang === 'ar' ? 'ثقة العائلات والشركات' : lang === 'fr' ? 'La confiance des familles et entreprises' : 'Trusted by families and brands',
    link: lang === 'ar' ? 'عرض تقييمات جوجل' : lang === 'fr' ? 'Voir les avis Google' : 'View Google reviews',
  };

  return (
    <section id="testimonials" className="py-24 custom-bg text-white moroccan-pattern zellige-band" ref={sectionRef}>
      <div className="container mx-auto px-6 section-inner">
        <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#f7d979]">{copy.eyebrow}</p>
          <h2 className="moroccan-heading text-4xl md:text-5xl font-bold text-white mb-4 font-serif italic">{content.title}</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {content.testimonialList.map((review, idx) => (
            <article key={idx} className="tile-border bg-white p-6 rounded-lg shadow-xl shadow-black/15 h-full flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-stone-800">{review.author}</span>
                <span className="rounded-full bg-[#fff4c9] px-3 py-1 text-xs font-bold text-[#be185d]" aria-label="5 star review">5.0</span>
              </div>
              <p className="text-gray-600 italic leading-relaxed flex-grow">"{review.quote}"</p>
            </article>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://maps.app.goo.gl/Jk8vCG9F4qkn9iUR8"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#f7d979] hover:underline"
          >
            {copy.link}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
