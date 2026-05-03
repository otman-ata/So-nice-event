import React, { useRef } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import FadeInOnScroll from './common/FadeInOnScroll';

interface Post {
    image: {
      src: string;
      alt: string;
    };
    category: string;
    title: string;
    excerpt: string;
    slug: string;
}

interface BlogProps {
    content: {
        title: string;
        subtitle: string;
        postList: Post[];
    };
}

const Blog: React.FC<BlogProps> = ({ content }) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, triggerOnce: true });

    return (
        <section id="blog" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className={`text-center mb-12 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} ref={sectionRef}>
                    <h2 className="text-4xl md:text-5xl font-bold custom-text-dark mb-4 font-serif italic">{content.title}</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {content.postList.map((post, index) => (
                        <FadeInOnScroll key={index} index={index}>
                            <div className="group bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                <div className="overflow-hidden">
                                    <a href={`/#/blog/${post.slug}`}>
                                        <img src={post.image.src} alt={post.image.alt} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </a>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <p className="text-sm custom-text font-semibold mb-2">{post.category}</p>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:custom-text transition-colors flex-grow">
                                        <a href={`/#/blog/${post.slug}`}>{post.title}</a>
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed h-20 overflow-hidden">{post.excerpt}</p>
                                    <a href={`/#/blog/${post.slug}`} className="inline-block mt-4 text-sm font-semibold custom-text hover:underline self-start">Read More &rarr;</a>
                                </div>
                            </div>
                        </FadeInOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;