import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations, Language } from './lib/translations';
import { CmsEditProvider } from './context/CmsEditContext';

const HEADER_OFFSET = 80;

function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [content, setContent] = useState(translations[language]);
  const [cmsTextOverrides, setCmsTextOverrides] = useState<any>({});
  const [cmsEditMode, setCmsEditMode] = useState(
    () => typeof window !== 'undefined' && sessionStorage.getItem('so_nice_cms_edit') === '1'
  );

  useEffect(() => {
    try {
      const qs = new URLSearchParams(window.location.search);
      if (qs.get('edit') === '1') {
        sessionStorage.setItem('so_nice_cms_edit', '1');
        setCmsEditMode(true);
        qs.delete('edit');
        const next =
          window.location.pathname + (qs.toString() ? `?${qs.toString()}` : '') + window.location.hash;
        window.history.replaceState({}, document.title, next);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    const base = translations[language];
    const override = cmsTextOverrides?.[language] || {};
    setContent({
      ...base,
      hero: { ...base.hero, ...(override.hero || {}) },
      services: {
        ...base.services,
        ...(override.services || {}),
        serviceList: override?.services?.serviceList || base.services.serviceList,
      },
      gallery: {
        ...base.gallery,
        ...(override.gallery || {}),
        filterLabels: { ...base.gallery.filterLabels, ...(override?.gallery?.filterLabels || {}) },
      },
      about: { ...base.about, ...(override.about || {}) },
    });
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language, cmsTextOverrides]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/assets/cms-content.json', { cache: 'no-cache' });
        if (!res.ok) return;
        const data = await res.json();
        if (mounted && data && typeof data === 'object') setCmsTextOverrides(data);
      } catch {
        /* keep translation defaults */
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const scrollToElement = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - HEADER_OFFSET;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    scrollToElement(targetId);
  };
  
  return (
    <CmsEditProvider value={cmsEditMode}>
      <div>
        <Header
          language={language}
          setLanguage={setLanguage}
          content={content.header}
          onNavClick={handleNavClick}
        />
        <main>
          <Hero content={content.hero} onCtaClick={handleNavClick} />
          <Services content={content.services} />
          <Gallery content={content.gallery} />
          <Testimonials content={content.testimonials} />
          <About content={content.about} />
          <Contact content={content.contact} />
        </main>
        <Footer content={content.footer} onNavClick={handleNavClick} />
      </div>
    </CmsEditProvider>
  );
}

export default App;