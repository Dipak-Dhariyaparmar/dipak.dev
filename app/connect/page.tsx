import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { socials } from "@/lib/content";

export default function ConnectPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Connect"
        title="Bring a product, system, or serious idea."
        copy="For founder conversations, engineering roles, product builds, and collaborations where quality matters."
      />
      <section className="section-shell mt-20 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="grid content-start gap-3">
          {socials.map((social) => (
            <Link key={social.label} href={social.href} className="panel flex items-center justify-between p-5">
              <span>{social.label}</span>
              {social.label === "Email" ? <Mail size={18} /> : social.label === "GitHub" ? <Github size={18} /> : social.label === "LinkedIn" ? <Linkedin size={18} /> : <Send size={18} />}
            </Link>
          ))}
        </div>
        <form action="/api/contact" method="post" className="panel grid gap-4 p-6">
          <label className="grid gap-2 text-sm font-semibold">
            Name
            <input name="name" required className="focus-ring border border-line bg-ink px-4 py-3 text-base font-normal" />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Email
            <input name="email" type="email" required className="focus-ring border border-line bg-ink px-4 py-3 text-base font-normal" />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Message
            <textarea name="message" required rows={7} className="focus-ring resize-none border border-line bg-ink px-4 py-3 text-base font-normal" />
          </label>
          <button className="focus-ring inline-flex w-fit items-center gap-2 bg-fog px-5 py-3 font-bold text-ink" type="submit">
            Send Message <Send size={17} />
          </button>
        </form>
      </section>
    </main>
  );
}
