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

const SERVICE_KEYS: SiteImageKey[] = ['serviceWedding', 'servicePrivate', 'serviceCorporate', 'serviceBabyShower', 'serviceBirthday'];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const siteKey = SERVICE_KEYS[index];
  return (
    <FadeInOnScroll index={index}>
      <div className="group tile-border lantern-glow overflow-hidden rounded-lg bg-white h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
        <div className="overflow-hidden relative moroccan-arch bg-[#450a0a]">
          {siteKey ? (
            <CmsImageSlot
              siteKey={siteKey}
              alt={service.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              wrapperClassName="overflow-hidden"
            />
          ) : (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#450a0a]/80 to-transparent" />
          <div className="absolute left-4 top-4 rounded-full border border-[#f7d979]/70 bg-[#450a0a]/55 px-3 py-1 text-xs font-bold uppercase text-[#f7d979]">
            0{index + 1}
          </div>
        </div>
        <div className="p-6 border-t-4 border-[#d9a629]">
          <div className="mb-4 h-2 w-24 bg-[radial-gradient(circle,rgba(217,166,41,.95)_0_3px,transparent_3.5px)] bg-[length:18px_8px]" />
          <h3 className="text-2xl font-semibold mb-3 text-[#76121d]">{service.title}</h3>
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
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#7a121c]">{eyebrow}</p>
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
