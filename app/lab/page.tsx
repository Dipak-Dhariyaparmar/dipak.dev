import { PageHero } from "@/components/page-hero";
import { labExperiments } from "@/lib/content";

export default function LabPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Lab"
        title="Experiments where product instinct gets sharpened."
        copy="A focused space for prototypes, internal tools, AI workflows, interface studies, and small utilities that sharpen how I think about products."
      />
      <section className="section-shell mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {labExperiments.map((item, index) => (
          <article key={item.title} className="min-h-80 border border-line bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-ember/60">
            <p className="text-sm text-ember">LAB 0{index + 1}</p>
            <h2 className="mt-16 text-3xl font-black">{item.title}</h2>
            <p className="mt-4 text-xs uppercase tracking-[0.18em] text-ember/70">{item.status}</p>
            <p className="mt-6 leading-7 text-fog/62">{item.copy}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
