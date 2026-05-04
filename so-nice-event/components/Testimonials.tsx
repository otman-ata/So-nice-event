import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface Testimonial {
    quote: string;
    author: string;
}

interface TestimonialsProps {
    content: {
        title: string;
        subtitle: string;
        testimonialList: Testimonial[];
    };
}

const Testimonials: React.FC<TestimonialsProps> = ({ content }) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

    return (
        <section id="testimonials" className="py-20 bg-[#fff3f3] moroccan-pattern" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold custom-text-dark mb-4 font-serif italic">{content.title}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
                </div>
                <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg border border-white/40 bg-white/70 backdrop-blur-sm">
                  <iframe
                    title="Google Reviews - So Nice Event"
                    src="https://www.google.com/maps?q=So+Nice+Event+Agadir&output=embed"
                    width="100%"
                    height="420"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="text-center mt-5">
                  <a
                    href="https://maps.app.goo.gl/Jk8vCG9F4qkn9iUR8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-text font-semibold hover:underline"
                  >
                    View all latest Google reviews
                  </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;