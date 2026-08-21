"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

export function useInView<T extends HTMLElement>(
  options?: IntersectionObserverInit,
): { ref: RefObject<T | null>; inView: boolean } {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || inView) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px", ...options },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [inView, options]);

  return { ref, inView };
}
