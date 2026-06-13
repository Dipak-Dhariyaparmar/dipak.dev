import { Clock, Github, Linkedin, Mail, Send, Sparkles } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { socials } from "@/lib/content";

export default function ConnectPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Connect"
        title="Bring a product, system, or serious idea."
        copy="For founder conversations, freelance projects, contract engineering work, technical consulting, and collaborations where product quality matters."
      />
      <section className="section-shell mt-20 grid gap-4 md:grid-cols-3">
        <div className="panel p-5">
          <Clock className="text-signal" size={20} />
          <h2 className="mt-6 text-2xl font-black">Response Time</h2>
          <p className="mt-3 leading-7 text-fog/62">Typically replies within 24 hours.</p>
        </div>
        <div className="panel p-5">
          <Sparkles className="text-signal" size={20} />
          <h2 className="mt-6 text-2xl font-black">Availability</h2>
          <p className="mt-3 leading-7 text-fog/62">Open to freelance and contract opportunities.</p>
        </div>
        <div className="panel p-5">
          <Mail className="text-signal" size={20} />
          <h2 className="mt-6 text-2xl font-black">Preferred Contact</h2>
          <p className="mt-3 leading-7 text-fog/62">LinkedIn and Email are best for serious project conversations.</p>
        </div>
      </section>
      <section className="section-shell mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
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
