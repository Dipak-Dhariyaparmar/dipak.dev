import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/animated-counter";
import { HeroCanvas } from "@/components/hero-canvas";
import { IdentityScroll } from "@/components/identity-scroll";
import { MotionSection } from "@/components/motion-section";
import { buildAreas, dashboardSignals, projects, writingNotes } from "@/lib/content";

const headline = "I BUILD SOFTWARE THAT PEOPLE ACTUALLY USE.";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-screen pt-20 sm:pt-24">
        <div className="absolute inset-0 grid-lines opacity-60" aria-hidden="true" />
        <HeroCanvas />
        <div className="section-shell relative flex min-h-[calc(100vh-6rem)] items-center">
          <div className="max-w-6xl">
            <p className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-fog/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_16px_rgba(110,231,183,0.75)]" />
              Full Stack Software Engineer
            </p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.92] text-balance sm:text-6xl md:text-7xl lg:text-[clamp(4.7rem,7vw,7.2rem)]">
              {headline.split(" ").map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className="mr-[0.16em] inline-block animate-[fadeIn_0.8s_ease_forwards]"
                  style={{ animationDelay: `${index * 70}ms`, opacity: 0 }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-fog/70 sm:text-lg">
              Specializing in scalable systems, AI-powered products, real-time experiences, and modern web applications.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/hire-me" className="focus-ring inline-flex items-center gap-2 bg-fog px-5 py-3 text-sm font-bold text-ink">
                Hire Me <ArrowUpRight size={16} />
              </Link>
              <Link href="/work" className="focus-ring inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-bold">
                Explore Work <ArrowUpRight size={16} />
              </Link>
              <Link href="/connect" className="focus-ring inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-bold">
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <IdentityScroll />

      <MotionSection className="py-28">
        <div className="section-shell">
          <p className="eyebrow">What I Build</p>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-6">
            {buildAreas.map((area) => (
              <article key={area.title} className="panel min-w-[280px] max-w-sm p-6 sm:min-w-[360px]">
                <span className="text-sm text-signal">0{buildAreas.indexOf(area) + 1}</span>
                <h2 className="mt-20 text-3xl font-black">{area.title}</h2>
                <p className="mt-4 leading-7 text-fog/62">{area.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="border-y border-line py-28">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">Featured Work</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight sm:text-6xl">Products, not portfolio thumbnails.</h2>
            </div>
            <Link href="/work" className="focus-ring inline-flex w-fit items-center gap-2 border border-line px-4 py-3 text-sm font-bold">
              View Case Studies <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="panel p-6 transition hover:border-signal/50">
                <p className="text-sm text-signal">{project.label}</p>
                <h3 className="mt-4 text-4xl font-black">{project.name}</h3>
                <p className="mt-4 leading-7 text-fog/68">{project.description}</p>
                <div className="mt-8 grid gap-4 text-sm text-fog/62 sm:grid-cols-2">
                  <p><span className="block font-bold text-fog">Challenge</span>{project.challenge}</p>
                  <p><span className="block font-bold text-fog">Impact</span>{project.impact}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-28">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Years Experience", 2, "+"],
            ["Production Products", 4, "+"],
            ["APIs Built", 100, "+"],
            ["Users Served", 1000, "s"]
          ].map(([label, value, suffix]) => (
            <div key={label} className="border-t border-line pt-6">
              <p className="text-5xl font-black sm:text-6xl">
                <AnimatedCounter value={Number(value)} suffix={String(suffix)} />
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-fog/50">{label}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="border-y border-line py-28">
        <div className="section-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="eyebrow">Latest Writing</p>
            <h2 className="mt-5 text-4xl font-black sm:text-6xl">Writing that documents the thinking behind the build.</h2>
          </div>
          <div className="grid gap-3">
            {writingNotes.slice(0, 3).map((article) => (
              <Link key={article.title} href="/writing" className="panel flex items-center justify-between gap-4 p-5">
                <span>
                  <span className="block font-semibold">{article.title}</span>
                  <span className="mt-1 block text-sm text-fog/45">{article.date} / {article.read}</span>
                </span>
                <ArrowUpRight size={17} />
              </Link>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-28">
        <div className="section-shell">
          <p className="eyebrow">Developer Signal</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {dashboardSignals.map((item) => (
              <div key={item.title} className="panel min-h-56 p-6">
                <p className="text-sm text-signal">{item.title}</p>
                <h3 className="mt-5 text-2xl font-black">{item.value}</h3>
                <p className="mt-6 leading-7 text-fog/62">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <section className="section-shell grid min-h-[70vh] place-items-center py-28 text-center">
        <h2 className="max-w-5xl text-5xl font-black leading-tight text-balance sm:text-7xl">
          Technology Changes Fast. Problem Solving Lasts Forever.
        </h2>
      </section>

      <section className="border-t border-line py-24">
        <div className="section-shell flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <h2 className="max-w-3xl text-5xl font-black leading-tight sm:text-7xl">Let&apos;s Build Something Meaningful.</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/connect" className="focus-ring inline-flex items-center gap-2 bg-fog px-5 py-3 font-bold text-ink">
              <Mail size={17} /> Contact
            </Link>
            <Link href="https://www.linkedin.com/in/dipak-dhariyaparmar-034a66299/" className="focus-ring inline-flex items-center gap-2 border border-line px-5 py-3 font-bold">
              <Linkedin size={17} /> LinkedIn
            </Link>
            <Link href="mailto:dipakdhariyaparmar@gmail.com" className="focus-ring inline-flex items-center gap-2 border border-line px-5 py-3 font-bold">
              <Mail size={17} /> Email
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
