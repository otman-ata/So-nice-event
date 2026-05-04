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

  return (
    <section id="about" className="py-20 bg-[#fff8e8] moroccan-pattern">
      <div
        ref={sectionRef}
        className={`container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="order-2 md:order-1">
          <h2 className="text-4xl md:text-5xl font-bold custom-text-dark mb-6 font-serif italic">{content.title}</h2>
          <div className="space-y-4 text-stone-600 leading-loose">
            <p>{content.paragraph1}</p>
            <p>{content.paragraph2}</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-lg shadow-xl overflow-hidden aspect-w-1 aspect-h-1">
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
