import { PageHero } from "@/components/page-hero";
import { engineeringTopics } from "@/lib/content";

export default function EngineeringPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Engineering"
        title="A handbook for how Dipak thinks about systems."
        copy="The engineering page turns skills into decisions: how systems are shaped, secured, scaled, measured, and maintained after launch."
      />
      <section className="section-shell mt-20 grid gap-5 lg:grid-cols-2">
        {engineeringTopics.map((topic, index) => (
          <article key={topic} className="panel p-7">
            <p className="text-sm text-signal">0{index + 1}</p>
            <h2 className="mt-8 text-3xl font-black">{topic}</h2>
            <p className="mt-4 leading-7 text-fog/62">
              Practical patterns for {topic.toLowerCase()}: tradeoffs, failure modes, interface contracts, observability, and the habits that keep production software understandable.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-2" aria-hidden="true">
              <div className="h-16 border border-line bg-white/[0.04]" />
              <div className="h-16 border border-line bg-signal/10" />
              <div className="h-16 border border-line bg-white/[0.04]" />
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
