import React, { useRef, ReactNode } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

interface FadeInOnScrollProps {
  children: ReactNode;
  index?: number;
  className?: string;
  yOffset?: number;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children, index = 0, className = '', yOffset = 10 }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, triggerOnce: true });
  const animationDelay = `${index * 150}ms`;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : `opacity-0 translate-y-${yOffset}`} ${className}`}
      style={{ transitionDelay: animationDelay }}
    >
      {children}
    </div>
  );
};

export default FadeInOnScroll;
