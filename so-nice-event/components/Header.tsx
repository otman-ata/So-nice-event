import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../lib/translations';
import { siteImages } from '../lib/images';

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
  isScrolled: boolean;
  isMobile?: boolean;
}> = ({ language, setLanguage, isScrolled, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const languages: { key: Language; label: string }[] = [
    { key: 'fr', label: 'FR' },
    { key: 'en', label: 'EN' },
    { key: 'ar', label: 'AR' },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);


  const baseTextColor = isMobile ? 'text-gray-700' : isScrolled ? 'text-gray-700' : 'text-white';
  const currentLangLabel = languages.find(l => l.key === language)?.label;

  return (
    <div className="relative" ref={wrapperRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center font-medium transition-colors duration-200 ${baseTextColor} hover:custom-text`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="language-menu"
        aria-label="Select language"
      >
        {currentLangLabel}
        <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      {isOpen && (
        <div id="language-menu" className={`absolute top-full right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-10 ${isMobile ? 'left-0' : ''}`}>
          <ul className="py-1" role="menu">
            {languages.map(lang => (
              <li key={lang.key}>
                <button
                  onClick={() => {
                    setLanguage(lang.key);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm ${language === lang.key ? 'font-bold custom-text' : 'text-gray-700 hover:bg-gray-100 hover:custom-text'}`}
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    onNavClick(e, href);
    setMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#home" onClick={(e) => onNavClick(e, '#home')} className="flex items-center" aria-label="So Nice Event Home">
          <img 
            src={scrolled ? siteImages.logoColor : siteImages.logoWhite} 
            alt="So Nice Event Logo" 
            className="h-20 w-auto object-contain" 
          />
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8" aria-label="Main navigation">
            {content.navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => onNavClick(e, link.href)} className={`font-medium text-lg transition-colors ${scrolled ? 'text-gray-700 hover:custom-text' : 'text-white hover:text-white/80'}`}>
                {link.text}
              </a>
            ))}
          </nav>
          <LanguageSwitcher language={language} setLanguage={setLanguage} isScrolled={scrolled} />
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className={`transition-colors ${scrolled ? 'text-gray-700' : 'text-white'} focus:outline-none`}
            aria-label="Toggle mobile menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      
      {menuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white shadow-lg" aria-label="Mobile navigation">
          <div className="flex flex-col items-center py-4 space-y-4">
            {content.navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={(e) => handleMobileLinkClick(e, link.href)} className="py-2 text-gray-700 hover:custom-text font-medium text-lg transition-colors">
                {link.text}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSwitcher language={language} setLanguage={setLanguage} isScrolled={true} isMobile={true} />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;