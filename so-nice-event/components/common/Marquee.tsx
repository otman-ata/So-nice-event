import React from 'react';
import { galleryImages } from '../../lib/images';

const Marquee: React.FC = () => {
  const images = galleryImages.slice(0, 12); // take first selection
  const doubled = [...images, ...images];
  return (
    <section aria-label="Highlights" className="py-8 md:py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-gray-200/60 shadow-sm p-3 md:p-4 bg-white">
          <div className="marquee">
            <div className="marquee__track gap-3 md:gap-4">
              {doubled.map((img, i) => (
                <div key={i} className="shrink-0">
                  <img
                    src={img.src}
                    alt=""
                    className="h-24 md:h-28 lg:h-32 w-auto rounded-xl object-cover shadow-sm hover:shadow-md transition-shadow duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;



