import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './components/BlogPost';
import { translations, Language } from './lib/translations';
import { CmsEditProvider } from './context/CmsEditContext';

const HEADER_OFFSET = 80;

function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [content, setContent] = useState(translations[language]);
  const [route, setRoute] = useState(window.location.hash);
  const [scrollToTarget, setScrollToTarget] = useState<string | null>(null);
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
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on page change
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);
  
  useEffect(() => {
    setContent(translations[language]);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

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

  useEffect(() => {
    // This effect runs after the component re-renders due to route change
    if (scrollToTarget && (route === '' || route === '#/' || route === '#')) {
        scrollToElement(scrollToTarget);
        setScrollToTarget(null); // Reset after scrolling
    }
  }, [route, scrollToTarget]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/admin') return;
    e.preventDefault();
    const targetId = href.substring(1);
    
    if (route.startsWith('#/blog/')) {
        setScrollToTarget(targetId); // Set the target
        window.location.hash = '/'; // Navigate home, which will trigger the useEffect
    } else {
        // Already on home page, just scroll directly
        scrollToElement(targetId);
    }
  };
  
  const renderPage = () => {
    const blogPostMatch = route.match(/^#\/blog\/(.+)$/);

    if (blogPostMatch) {
      const slug = blogPostMatch[1];
      const post = content.blog.postList.find(p => p.slug === slug);
      if (post) {
        return <BlogPost post={post} content={{ backToBlog: content.blog.backToBlog }} />;
      }
    }

    // Default to main page
    return (
      <>
        <Hero content={content.hero} onCtaClick={handleNavClick} />
        <Services content={content.services} />
        <Gallery content={content.gallery} />
        <Testimonials content={content.testimonials} />
        <Blog content={content.blog} />
        <About content={content.about} />
        <Contact content={content.contact} />
      </>
    );
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
        <main>{renderPage()}</main>
        <Footer content={content.footer} onNavClick={handleNavClick} />
      </div>
    </CmsEditProvider>
  );
}

export default App;