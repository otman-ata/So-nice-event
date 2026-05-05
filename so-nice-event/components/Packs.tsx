import React from 'react';

type Pack = {
  name: string;
  price: string;
  highlight: string;
  service?: string;
  items: string[];
};

const defaultPacks: Pack[] = [
  {
    name: 'Pack Économique',
    price: '4000 dh',
    highlight: 'Essentiel mariage',
    items: [
      'Tableau d’accueil au choix',
      'Arrière-plan floral',
      'Éclairage d’ambiance',
      'Carte assiettes',
      'Buffet fin de soirée: plateau bague, bougie, table cake',
    ],
  },
  {
    name: 'Pack Élégance',
    price: '7000 dh',
    highlight: 'Idéal pour mariages intimes, 50 invités',
    items: [
      'Tableau d’accueil personnalisé',
      'Backdrop floral moderne au choix',
      'Estrade 3/4 élégante',
      'Éclairage professionnel complet',
      'Carte assiettes',
      'Table cake',
    ],
  },
  {
    name: 'Pack Royal',
    price: '10,000 dh',
    highlight: 'Expérience complète et luxueuse',
    items: [
      'Tableau d’accueil personnalisé',
      'Décoration d’entrée luxueuse: tapis et bougies',
      'Arche florale géante avec backdrop au choix',
      'Estrade 4/6',
      'Éclairage artistique avec jeux de lumière',
      'Buffet fin de soirée complet',
      'Stand entrée',
      'Livre d’or',
      'Cérémonie du thé marocain',
      'Photobooth',
      'Table cake luxe',
    ],
  },
];

export default function Packs({ packs = [] }: { packs?: Pack[] }) {
  const visiblePacks = packs.length ? packs : defaultPacks;
  return (
    <section id="packs" className="min-h-screen bg-[#fffaf0] px-6 pb-24 pt-32 moroccan-pattern">
      <div className="section-inner mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#be185d]">So Nice Event</p>
          <h1 className="moroccan-heading text-4xl font-bold italic text-[#831843] md:text-6xl font-serif">
            Packs de décoration mariage
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-stone-600">
            Choisissez le pack qui correspond à votre célébration. Chaque formule peut être ajustée selon votre thème, votre espace et vos invités.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {visiblePacks.map((pack) => (
            <article key={pack.name} className="flex h-full flex-col rounded-lg border border-[#f0bdd5] bg-white p-6 shadow-xl shadow-pink-950/10">
              <div className="mb-5 border-b border-[#f0bdd5] pb-5">
                <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#d9a629]">{pack.highlight}</p>
                {pack.service && <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#be185d]">{pack.service}</p>}
                <h2 className="text-3xl font-serif font-bold italic text-[#831843]">{pack.name}</h2>
                <p className="mt-4 inline-flex rounded-full bg-[#f7d979] px-4 py-2 text-lg font-extrabold text-[#831843]">
                  {pack.price}
                </p>
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
                href="https://wa.me/212666757403?text=Bonjour%20So%20Nice%20Event%2C%20je%20souhaite%20plus%20d'informations%20sur%20vos%20packs%20mariage."
                className="mt-6 rounded-full bg-[#be185d] px-6 py-3 text-center font-bold text-white transition hover:bg-[#db2777]"
              >
                Demander ce pack
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
