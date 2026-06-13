import { PageHero } from "@/components/page-hero";
import { timeline } from "@/lib/content";

export default function JourneyPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Journey"
        title="A timeline of learning, shipping, and scaling judgment."
        copy="The story is organized as momentum: foundations, teams, product domains, and the next level of engineering responsibility."
      />
      <section className="section-shell mt-20">
        <div className="border-l border-line">
          {timeline.map((item) => (
            <article key={`${item.year}-${item.title}`} className="relative grid gap-4 border-b border-line py-10 pl-8 md:grid-cols-[180px_1fr]">
              <span className="absolute -left-[5px] top-12 h-2.5 w-2.5 bg-signal" />
              <p className="text-3xl font-black text-signal">{item.year}</p>
              <div>
                <h2 className="text-3xl font-black">{item.title}</h2>
                <p className="mt-3 max-w-2xl leading-7 text-fog/62">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
