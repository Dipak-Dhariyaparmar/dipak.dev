"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const words = ["Engineer.", "Builder.", "Problem Solver.", "Product Thinker."];

export function IdentityScroll() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;
    const items = gsap.utils.toArray<HTMLElement>(".identity-word", root);
    const ctx = gsap.context(() => {
      gsap.set(items, { opacity: 0, yPercent: 70 });
      gsap.set(items[0], { opacity: 1, yPercent: 0 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=1600",
          scrub: true,
          pin: true
        }
      });
      items.forEach((item, index) => {
        if (index === 0) return;
        tl.to(items[index - 1], { opacity: 0, yPercent: -70, duration: 0.55 }, index)
          .to(item, { opacity: 1, yPercent: 0, duration: 0.55 }, index);
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative grid min-h-screen place-items-center overflow-hidden border-y border-line">
      <div className="absolute inset-0 grid-lines opacity-45" aria-hidden="true" />
      <div className="section-shell relative">
        <p className="eyebrow mb-8">Identity</p>
        <div className="relative h-36 sm:h-48">
          {words.map((word) => (
            <h2 key={word} className="identity-word absolute text-6xl font-black leading-none sm:text-8xl lg:text-9xl">
              {word}
            </h2>
          ))}
        </div>
      </div>
    </section>
  );
}
