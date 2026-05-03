import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import FadeInOnScroll from './common/FadeInOnScroll';

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
        <section id="testimonials" className="py-20 bg-gray-50" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-bold custom-text-dark mb-4 font-serif italic">{content.title}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {content.testimonialList.map((testimonial, index) => (
                        <FadeInOnScroll key={index} index={index}>
                            <figure className="bg-white p-8 rounded-lg shadow-lg text-center h-full flex flex-col justify-center">
                                <blockquote className="text-gray-600 italic mb-6">
                                    <p>"{testimonial.quote}"</p>
                                </blockquote>
                                <figcaption className="font-semibold custom-text text-lg">
                                    - {testimonial.author}
                                </figcaption>
                            </figure>
                        </FadeInOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;