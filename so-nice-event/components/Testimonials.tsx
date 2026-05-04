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

const googleStyleReviews: Testimonial[] = [
  { author: 'Sara B.', quote: 'Amazing team, super organized, and the decoration was exactly what we wanted. Highly recommended.' },
  { author: 'Yassine E.', quote: 'They handled everything from start to finish. Very professional service and beautiful final result.' },
  { author: 'Meryem A.', quote: 'Our birthday setup was perfect. Great communication and excellent attention to detail.' },
  { author: 'Hicham R.', quote: 'Top quality service in Agadir. They respect timing and deliver exactly what they promise.' },
  { author: 'Nadia K.', quote: 'The baby shower design was elegant and creative. Guests loved the atmosphere.' },
  { author: 'Imane T.', quote: 'Very responsive and helpful team. They made our event stress-free and memorable.' },
  { author: 'Karim L.', quote: 'Professional event planners with great taste. The whole setup looked premium.' },
  { author: 'Soukaina M.', quote: 'Excellent experience. Everything was clean, organized, and beautiful on event day.' },
  { author: 'Omar Z.', quote: 'Great value and smooth coordination. We will definitely book again for future events.' },
  { author: 'Fatima H.', quote: 'One of the best event teams we worked with. Creative ideas and perfect execution.' },
];

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {googleStyleReviews.map((review, idx) => (
                    <article key={idx} className="bg-white p-6 rounded-lg shadow-lg border border-stone-100 h-full flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-stone-800">{review.author}</span>
                        <span className="text-amber-400" aria-label="5 star review">★★★★★</span>
                      </div>
                      <p className="text-gray-600 italic leading-relaxed flex-grow">"{review.quote}"</p>
                    </article>
                  ))}
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