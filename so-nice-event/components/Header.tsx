import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../lib/translations';
import { siteImages } from '../lib/images';
import { SITE_IMAGES_EVENT } from '../lib/cmsSiteImage';
import { useCmsEditMode } from '../context/CmsEditContext';
import { CmsImageSlot } from './common/CmsImageSlot';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: {
    navLinks: { href: string; text: string }[];
  };
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const LanguageSwitcher: React.FC<{
  language: Language;
  setLanguage: (lang: Language) => void;
  isMobile?: boolean;
}> = ({ language, setLanguage, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const languages: { key: Language; label: string }[] = [
    { key: 'ar', label: 'AR' },
    { key: 'fr', label: 'FR' },
    { key: 'en', label: 'EN' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLangLabel = languages.find((l) => l.key === language)?.label;

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center font-medium text-white/90 transition-colors duration-200 hover:text-amber-200"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        aria-label="Select language"
      >
        {currentLangLabel}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {isOpen && (
        <div
          id="language-menu"
          className={`absolute top-full right-0 mt-2 w-28 rounded-lg shadow-lg z-10 border border-white/10 bg-[#831843] ${isMobile ? 'left-0' : ''}`}
        >
          <ul className="py-1" role="menu">
            {languages.map((lang) => (
              <li key={lang.key}>
                <button
                  onClick={() => {
                    setLanguage(lang.key);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm text-white/90 ${language === lang.key ? 'font-bold text-amber-200' : 'hover:bg-white/10'}`}
                  role="menuitem"
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Header: React.FC<HeaderProps> = ({ language, setLanguage, content, onNavClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [, bumpLogo] = useState(0);
  const cmsEdit = useCmsEditMode();

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('home')?.offsetHeight || window.innerHeight;
      setScrolled(window.scrollY > heroHeight - 100);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const h = () => bumpLogo((n) => n + 1);
    window.addEventListener(SITE_IMAGES_EVENT, h);
    return () => window.removeEventListener(SITE_IMAGES_EVENT, h);
  }, []);

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onNavClick(e, href);
    setMenuOpen(false);
  };

  const white = siteImages.logoWhite;
  const yellow = siteImages.logoYellow;
  const useGoldFilter = scrolled && yellow === white;
  const navLinks = content.navLinks.some((link) => link.href === '/packs')
    ? content.navLinks
    : [
        ...content.navLinks.slice(0, 2),
        { href: '/packs', text: language === 'ar' ? 'الباقات' : 'Packs' },
        ...content.navLinks.slice(2),
      ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 text-white border-b transition-all duration-500 ${scrolled ? 'bg-[#be185d]/95 shadow-xl shadow-black/15 border-[#d9a629]/25 backdrop-blur' : 'bg-transparent border-transparent'}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="flex items-center" aria-label="So Nice Event Home">
          {cmsEdit ? (
            <CmsImageSlot
              siteKey="logoWhite"
              alt="So Nice Event Logo"
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-300 ${useGoldFilter ? 'header-logo--gold' : ''}`}
            />
          ) : (
            <img
              key={white + String(scrolled)}
              src={useGoldFilter ? white : scrolled ? yellow : white}
              alt="So Nice Event Logo"
              className={`h-16 md:h-20 w-auto object-contain transition-all duration-300 ${useGoldFilter ? 'header-logo--gold' : ''}`}
            />
          )}
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-2" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => onNavClick(e, link.href)}
                className="rounded-full px-4 py-2 font-medium text-base text-white/90 hover:bg-white/10 hover:text-[#d9a629] transition-colors"
              >
                {link.text}
              </a>
            ))}
          </nav>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="md:hidden border-t border-white/10 bg-[#be185d]" aria-label="Mobile navigation">
          <div className="flex flex-col items-center py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleMobileLinkClick(e, link.href)}
                className="py-2 text-white hover:text-amber-200 font-medium text-lg transition-colors"
              >
                {link.text}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSwitcher language={language} setLanguage={setLanguage} isMobile={true} />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
