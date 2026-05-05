import React from 'react';
import type { Language } from '../lib/translations';

type PackText = {
  name?: string;
  highlight?: string;
  items?: string[];
};

export type Pack = {
  name: string;
  price: string;
  highlight: string;
  service?: string;
  items: string[];
  translations?: Partial<Record<Language, PackText>>;
};

const defaultWeddingTranslations: Record<string, Partial<Record<Language, PackText>>> = {
  'Pack Economique': {
    ar: {
      name: 'الباقة الاقتصادية',
      highlight: 'أساسيات حفل الزفاف',
      items: ['لوحة استقبال حسب الاختيار', 'خلفية ورود', 'إضاءة أجواء', 'كارت الصحون', 'بوفيه نهاية الحفل: صينية الخواتم، شموع، طاولة الكيك'],
    },
    en: {
      name: 'Economy Pack',
      highlight: 'Wedding essentials',
      items: ['Welcome board of your choice', 'Floral backdrop', 'Ambient lighting', 'Plate cards', 'End-of-night buffet: ring tray, candles, cake table'],
    },
  },
  'Pack Elegance': {
    ar: {
      name: 'باقة الأناقة',
      highlight: 'مثالية للأعراس العائلية، 50 ضيفا',
      items: ['لوحة استقبال مخصصة', 'خلفية ورود عصرية حسب الاختيار', 'منصة أنيقة 3/4', 'إضاءة احترافية كاملة', 'كارت الصحون', 'طاولة الكيك'],
    },
    en: {
      name: 'Elegance Pack',
      highlight: 'Ideal for intimate weddings, 50 guests',
      items: ['Personalized welcome board', 'Modern floral backdrop of your choice', 'Elegant 3/4 stage', 'Complete professional lighting', 'Plate cards', 'Cake table'],
    },
  },
  'Pack Royal': {
    ar: {
      name: 'الباقة الملكية',
      highlight: 'تجربة فاخرة ومتكاملة',
      items: ['لوحة استقبال مخصصة', 'ديكور مدخل فاخر: زربية وشموع', 'قوس ورود كبير مع خلفية حسب الاختيار', 'منصة 4/6', 'إضاءة فنية', 'بوفيه نهاية الحفل كامل', 'ستاند المدخل', 'دفتر الضيوف', 'حفل الشاي المغربي', 'فوتوبوث', 'طاولة كيك فاخرة'],
    },
    en: {
      name: 'Royal Pack',
      highlight: 'Complete luxury experience',
      items: ['Personalized welcome board', 'Luxury entrance decor: rug and candles', 'Giant floral arch with backdrop of your choice', '4/6 stage', 'Artistic lighting', 'Complete end-of-night buffet', 'Entrance stand', 'Guest book', 'Moroccan tea ceremony', 'Photobooth', 'Luxury cake table'],
    },
  },
};

const defaultPacks: Pack[] = [
  {
    name: 'Pack Economique',
    price: '4000 dh',
    highlight: 'Essentiel mariage',
    service: 'Weddings',
    items: ["Tableau d'accueil au choix", 'Arriere-plan floral', "Eclairage d'ambiance", 'Carte assiettes', 'Buffet fin de soiree: plateau bague, bougie, table cake'],
    translations: defaultWeddingTranslations['Pack Economique'],
  },
  {
    name: 'Pack Elegance',
    price: '7000 dh',
    highlight: 'Ideal pour mariages intimes, 50 invites',
    service: 'Weddings',
    items: ["Tableau d'accueil personnalise", 'Backdrop floral moderne au choix', 'Estrade 3/4 elegante', 'Eclairage professionnel complet', 'Carte assiettes', 'Table cake'],
    translations: defaultWeddingTranslations['Pack Elegance'],
  },
  {
    name: 'Pack Royal',
    price: '10,000 dh',
    highlight: 'Experience complete et luxueuse',
    service: 'Weddings',
    items: ["Tableau d'accueil personnalise", "Decoration d'entree luxueuse: tapis et bougies", 'Arche florale geante avec backdrop au choix', 'Estrade 4/6', 'Eclairage artistique avec jeux de lumiere', 'Buffet fin de soiree complet', 'Stand entree', "Livre d'or", 'Ceremonie du the marocain', 'Photobooth', 'Table cake luxe'],
    translations: defaultWeddingTranslations['Pack Royal'],
  },
];

const serviceLabels: Record<string, Record<Language, string>> = {
  Weddings: { ar: 'باقات الزواج', fr: 'Packs mariage', en: 'Wedding Packs' },
  'Private Events': { ar: 'باقات المناسبات الخاصة', fr: 'Packs evenements prives', en: 'Private Event Packs' },
  'Corporate Events': { ar: 'باقات الشركات', fr: 'Packs entreprises', en: 'Corporate Event Packs' },
  'Baby Shower': { ar: 'باقات استقبال المولود', fr: 'Packs baby shower', en: 'Baby Shower Packs' },
  Birthdays: { ar: 'باقات أعياد الميلاد', fr: 'Packs anniversaires', en: 'Birthday Packs' },
  'Birth Celebration': { ar: 'باقات حفل الازدياد', fr: 'Packs celebration de naissance', en: 'Birth Celebration Packs' },
  'Graduation Parties': { ar: 'باقات حفلات التخرج', fr: 'Packs remise de diplome', en: 'Graduation Party Packs' },
};

const pageCopy: Record<Language, { title: string; subtitle: string; cta: string; countLabel: string }> = {
  ar: {
    title: 'باقات So Nice Event',
    subtitle: 'اختاروا الباقة المناسبة لمناسبتكم. يمكن تعديل كل باقة حسب الثيم، المكان، وعدد الضيوف.',
    cta: 'اطلب هذه الباقة',
    countLabel: 'باقة',
  },
  fr: {
    title: 'Packs So Nice Event',
    subtitle: 'Choisissez le pack qui correspond a votre celebration. Chaque formule peut etre ajustee selon votre theme, votre espace et vos invites.',
    cta: 'Demander ce pack',
    countLabel: 'pack',
  },
  en: {
    title: 'So Nice Event Packs',
    subtitle: 'Choose the pack that fits your celebration. Every formula can be adjusted to your theme, venue, and guest count.',
    cta: 'Request this pack',
    countLabel: 'pack',
  },
};

function fallbackTranslation(pack: Pack, language: Language) {
  return defaultWeddingTranslations[pack.name]?.[language];
}

function localizePack(pack: Pack, language: Language): Pack {
  const localized = pack.translations?.[language] || fallbackTranslation(pack, language);
  return {
    ...pack,
    name: localized?.name || pack.name,
    highlight: localized?.highlight || pack.highlight,
    items: localized?.items?.length ? localized.items : pack.items,
  };
}

function serviceTitle(service: string, language: Language) {
  if (serviceLabels[service]?.[language]) return serviceLabels[service][language];
  if (language === 'ar') return `باقات ${service}`;
  if (language === 'fr') return `Packs ${service}`;
  return `${service} Packs`;
}

export default function Packs({ packs = [], language = 'fr' }: { packs?: Pack[]; language?: Language }) {
  const visiblePacks = packs.length ? packs : defaultPacks;
  const copy = pageCopy[language] || pageCopy.fr;
  const groupedPacks = visiblePacks.reduce<Record<string, Pack[]>>((groups, pack) => {
    const service = pack.service || 'Weddings';
    groups[service] = groups[service] || [];
    groups[service].push(localizePack(pack, language));
    return groups;
  }, {});

  return (
    <section id="packs" className="min-h-screen bg-[#fffaf0] px-6 pb-24 pt-32 moroccan-pattern">
      <div className="section-inner mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#be185d]">So Nice Event</p>
          <h1 className="moroccan-heading text-4xl font-bold italic text-[#831843] md:text-6xl font-serif">{copy.title}</h1>
          <p className="mx-auto mt-5 max-w-2xl text-stone-600">{copy.subtitle}</p>
        </div>

        <div className="space-y-14">
          {Object.entries(groupedPacks).map(([service, servicePacks]) => (
            <section key={service} aria-labelledby={`pack-service-${service.replace(/\s+/g, '-')}`}>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-[#f0bdd5] pb-4">
                <h2 id={`pack-service-${service.replace(/\s+/g, '-')}`} className="text-3xl font-serif font-bold italic text-[#831843]">
                  {serviceTitle(service, language)}
                </h2>
                <span className="rounded-full bg-[#f7d979] px-4 py-2 text-sm font-extrabold text-[#831843]">
                  {servicePacks.length} {copy.countLabel}
                </span>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {servicePacks.map((pack) => (
                  <article key={`${service}-${pack.name}-${pack.price}`} className="flex h-full flex-col rounded-lg border border-[#f0bdd5] bg-white p-6 shadow-xl shadow-pink-950/10">
                    <div className="mb-5 border-b border-[#f0bdd5] pb-5">
                      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#d9a629]">{pack.highlight}</p>
                      <h3 className="text-3xl font-serif font-bold italic text-[#831843]">{pack.name}</h3>
                      <p className="mt-4 inline-flex rounded-full bg-[#f7d979] px-4 py-2 text-lg font-extrabold text-[#831843]">{pack.price}</p>
                    </div>
                    <ul className="flex-grow space-y-3 text-stone-700">
                      {pack.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#be185d]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/212666757403?text=${encodeURIComponent(`Bonjour So Nice Event, je souhaite plus d'informations sur ${pack.name}.`)}`}
                      className="mt-6 rounded-full bg-[#be185d] px-6 py-3 text-center font-bold text-white transition hover:bg-[#db2777]"
                    >
                      {copy.cta}
                    </a>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
