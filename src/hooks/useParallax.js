import { useEffect, useRef } from 'react';

/**
 * Attach a parallax translateY effect to a DOM element.
 * @param {number} speed - Fraction of scroll offset to apply (e.g. 0.35 = moves at 35% of scroll speed).
 * @returns {React.RefObject} - Attach this ref to the element you want to move.
 */
export function useParallax(speed = 0.35) {
  const ref = useRef(null);
  const rafId = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translateY(${window.scrollY * speed}px)`;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [speed]);

  return ref;
}
