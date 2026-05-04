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
      <div className="group overflow-hidden rounded-lg border border-[#f3c74d]/35 shadow-xl shadow-[#450a0a]/10 hover:shadow-2xl transition-all duration-300 bg-white h-full">
        <div className="overflow-hidden relative">
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
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#450a0a]/70 to-transparent" />
        </div>
        <div className="p-6 border-t-4 border-[#f3c74d]">
          <h3 className="text-2xl font-semibold mb-3 text-[#7a121c]">{service.title}</h3>
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
    <section id="services" className="py-24 bg-[#fff8e8] moroccan-pattern">
      <div className="container mx-auto px-6 section-inner">
        <div className="text-center mb-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#7a121c]">{eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold custom-text-dark mb-4 font-serif italic">{content.title}</h2>
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
