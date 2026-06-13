export function PageHero({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <section className="section-shell pt-32 sm:pt-40">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] text-balance sm:text-7xl lg:text-8xl">{title}</h1>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-fog/68 sm:text-xl">{copy}</p>
    </section>
  );
}
