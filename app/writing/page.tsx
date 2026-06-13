import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const articles = [
  { title: "System design notes for product engineers", date: "Coming soon", read: "5 min" },
  { title: "How AI features become real workflows", date: "Coming soon", read: "6 min" },
  { title: "What production APIs teach you", date: "Coming soon", read: "4 min" }
];

export default function WritingPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Writing"
        title="Notes from building, debugging, and shipping."
        copy="Medium integration is prepared as a content surface. Until the feed URL is connected, the page presents editorial placeholders for the topics Dipak should publish around."
      />
      <section className="section-shell mt-20 grid gap-4">
        {articles.map((article, index) => (
          <Link key={article.title} href="https://medium.com/" target="_blank" className="panel grid gap-6 p-6 transition hover:border-signal/50 md:grid-cols-[80px_1fr_auto] md:items-center">
            <span className="text-fog/42">0{index + 1}</span>
            <span>
              <span className="block text-2xl font-black">{article.title}</span>
              <span className="mt-2 block text-sm text-fog/50">{article.date} / {article.read} read</span>
            </span>
            <ArrowUpRight size={20} />
          </Link>
        ))}
      </section>
    </main>
  );
}
