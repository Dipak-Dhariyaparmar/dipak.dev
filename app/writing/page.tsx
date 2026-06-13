import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { writingNotes } from "@/lib/content";

export default function WritingPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Writing"
        title="Notes from building, debugging, and shipping."
        copy="Short engineering notes about product architecture, AI workflows, APIs, internal tools, and the decisions that make software easier to launch and maintain."
      />
      <section className="section-shell mt-20 grid gap-4">
        {writingNotes.map((article, index) => (
          <article key={article.title} className="panel grid gap-6 p-6 transition hover:border-signal/50 md:grid-cols-[80px_1fr_auto] md:items-center">
            <span className="text-fog/42">0{index + 1}</span>
            <span>
              <span className="block text-2xl font-black">{article.title}</span>
              <span className="mt-2 block text-sm text-fog/50">{article.date} / {article.read} read</span>
              <span className="mt-4 block max-w-3xl leading-7 text-fog/62">{article.summary}</span>
            </span>
            <Link href="/connect" className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-signal">
              Discuss Topic <ArrowUpRight size={16} />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
