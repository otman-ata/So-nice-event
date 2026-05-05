import React from 'react';
import FadeInOnScroll from './common/FadeInOnScroll';
import { CmsImageSlot } from './common/CmsImageSlot';
import type { SiteImageKey } from '../lib/images';

interface Service {
  image: string;
  title: string;
  description: string;
}

interface ServicesProps {
  content: {
    title: string;
    subtitle: string;
    serviceList: Service[];
  };
}

const SERVICE_KEYS: SiteImageKey[] = [
  'serviceWedding',
  'servicePrivate',
  'serviceCorporate',
  'serviceBabyShower',
  'serviceBirthday',
  'serviceBirthCelebration',
  'serviceGraduation',
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const siteKey = SERVICE_KEYS[index];
  return (
    <FadeInOnScroll index={index}>
      <div className="group overflow-hidden rounded-lg border border-[#f0bdd5] bg-white h-full shadow-lg shadow-pink-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="overflow-hidden relative bg-pink-950">
          {siteKey ? (
            <CmsImageSlot
              siteKey={siteKey}
              alt={service.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              wrapperClassName="overflow-hidden"
            />
          ) : (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#831843]/75 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-bold uppercase text-[#be185d]">
            0{index + 1}
          </div>
        </div>
        <div className="p-6">
          <div className="mb-4 h-1 w-16 rounded-full bg-[#d9a629]" />
          <h3 className="text-2xl font-semibold mb-3 text-[#be185d]">{service.title}</h3>
          <p className="text-stone-600 leading-relaxed">{service.description}</p>
        </div>
      </div>
    </FadeInOnScroll>
  );
};

const Services: React.FC<ServicesProps> = ({ content }) => {
  const lang = typeof document !== 'undefined' ? document.documentElement.lang : 'fr';
  const eyebrow = lang === 'ar' ? 'احتفالات بتصميم راق' : lang === 'fr' ? 'Des celebrations sur mesure' : 'Celebrations by design';
  return (
    <section id="services" className="py-24 bg-[#fff4dc] moroccan-pattern zellige-band">
      <div className="container mx-auto px-6 section-inner">
        <div className="text-center mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#be185d]">{eyebrow}</p>
          <h2 className="moroccan-heading text-4xl md:text-5xl font-bold custom-text-dark mb-4 font-serif italic">{content.title}</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.serviceList.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
