import { useEffect, useRef } from 'react';

/**
 * Returns a ref to attach to a container. The container itself AND all
 * descendants with the class `reveal` will animate in (fade + slide-up)
 * when they enter the viewport.
 *
 * @param {object} options - IntersectionObserver options
 * @param {number} options.threshold - Fraction of element visible before trigger (default 0.12)
 * @param {string} options.rootMargin - Observer root margin (default '0px 0px -48px 0px')
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -48px 0px',
} = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Include the container itself if it carries `.reveal`, PLUS all descendants.
    const childTargets = Array.from(container.querySelectorAll('.reveal'));
    const targets = container.classList.contains('reveal')
      ? [container, ...childTargets]
      : childTargets;

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold, rootMargin }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return containerRef;
}
