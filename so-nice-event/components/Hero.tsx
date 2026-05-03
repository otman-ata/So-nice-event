import React from 'react';
import { siteImages } from '../lib/images';

interface HeroProps {
  content: {
    title: string;
    subtitle1: string;
    subtitle2: string;
    ctaButton: string;
  };
  onCtaClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Hero: React.FC<HeroProps> = ({ content, onCtaClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center -mt-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${siteImages.heroBg}')` }}
      ></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative text-center text-white p-6 z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold tracking-wider leading-tight italic">
          {content.title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-light">
          {content.subtitle1}
        </p>
        <p className="mt-2 text-md md:text-xl font-light">
          {content.subtitle2}
        </p>
        <a href="#contact" onClick={(e) => onCtaClick(e, '#contact')} className="mt-8 inline-block custom-bg text-white py-3 px-10 rounded-full text-lg font-medium transition-transform duration-300 transform hover:scale-105">
          {content.ctaButton}
        </a>
      </div>
    </section>
  );
};

export default Hero;