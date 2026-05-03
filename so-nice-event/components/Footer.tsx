import React from 'react';
import { siteImages } from '../lib/images';

const isAdminLink = (href: string) => href === '/admin';

interface FooterProps {
  content: {
    navTitle: string;
    followTitle: string;
    copyright: string;
    mapTitle: string;
    navLinks: { href: string; text: string }[];
  };
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const Footer: React.FC<FooterProps> = ({ content, onNavClick }) => {
  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/so_nice_event_?igsh=dG5pdmhncDdyd2R4', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
    { name: 'WhatsApp', href: 'https://wa.me/212666757403', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg> },
    { name: 'Facebook', href: 'https://www.facebook.com/share/19w7PnzchY/?mibextid=wwXIfr', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
    { name: 'TikTok', href: 'https://www.tiktok.com/@so_nice_event_?_t=ZS-90x8dSV4apQ&_r=1', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.86-.95-6.69-2.81-1.77-1.77-2.9-4.14-2.81-6.69.04-1.31.25-2.61.7-3.86.6-1.57 1.6-2.95 2.81-4.15 1.19-1.18 2.76-2.03 4.39-2.31.15-.01.3-.01.46-.01v4.03c-1.18.1-2.35.58-3.32 1.37-.8.63-1.41 1.46-1.81 2.45-.24.59-.4 1.23-.49 1.88-.08 1.07.12 2.16.52 3.18.48 1.22 1.38 2.25 2.5 2.95 1.14.71 2.48 1.03 3.82.91v-4.04c-.45.01-.9.01-1.34.01-.18-2.62-.01-5.24.03-7.86z"></path></svg> },
    { name: 'Maps', href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Magasin, 932 Avenue arrida, Agadir 80000, Morocco')}`,
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> },
  ];

  return (
    <footer className="custom-bg text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left rtl:md:text-right">
          
          <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <img src={siteImages.logoWhite} alt="So Nice Event Logo" className="h-28 w-auto object-contain mb-4" />
            <p className="opacity-80 max-w-xs leading-relaxed">Wedding & Event Planning in Agadir, Morocco. Creating timeless, elegant, and romantic moments.</p>
          </div>

          <div className="mb-8 md:mb-0">
             <p className="font-semibold mb-4 text-lg">{content.followTitle}</p>
             <div className="flex flex-col space-y-3 opacity-80">
                <a href="tel:+212666757403" className="hover:underline" dir="ltr">+212 666-757403</a>
                <a href="mailto:Soniceevent04@gmail.com" className="hover:underline">Soniceevent04@gmail.com</a>
               <p>Magasin, 932 Avenue arrida, Agadir 80000, Morocco</p>
             </div>
             <div className="flex justify-center md:justify-start rtl:md:justify-end space-x-4 rtl:space-x-reverse mt-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name} className="hover:opacity-75 transition-opacity">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="mb-8 md:mb-0">
            <p className="font-semibold mb-4 text-lg">{content.navTitle}</p>
            <nav className="flex flex-col space-y-2 opacity-80">
              {content.navLinks.map((link) =>
                isAdminLink(link.href) ? (
                  <a key={link.href} href={link.href} className="hover:underline cursor-pointer">
                    {link.text}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => onNavClick(e, link.href)}
                    className="hover:underline cursor-pointer"
                  >
                    {link.text}
                  </a>
                )
              )}
            </nav>
          </div>

          <div>
             <p className="font-semibold mb-4 text-lg">{content.mapTitle}</p>
             <div className="h-48 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.852139045354!2d-9.56661462447954!3d30.41162097474441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6f0d1a4913d%3A0x68e421591c2b55f1!2sAv.%20Arreda%2C%20Agadir%2080000%2C%20Morocco!5e0!3m2!1sen!2sus!4v1721325654321!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="So Nice Event Location"
                ></iframe>
             </div>
          </div>

        </div>
        <div className="text-center border-t border-white/20 mt-10 pt-6">
          <p className="opacity-80">{content.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;