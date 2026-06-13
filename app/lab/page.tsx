import { PageHero } from "@/components/page-hero";

const experiments = ["AI Prompt Tools", "Open Source Utilities", "Creative Interfaces", "Mini Dashboards", "Realtime Prototypes", "Developer Automation"];

export default function LabPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Lab"
        title="Experiments where product instinct gets sharpened."
        copy="A more playful area for side projects, AI experiments, tiny tools, and interface studies that may become bigger products later."
      />
      <section className="section-shell mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((item, index) => (
          <article key={item} className="min-h-64 border border-line bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-ember/60">
            <p className="text-sm text-ember">LAB 0{index + 1}</p>
            <h2 className="mt-24 text-3xl font-black">{item}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
