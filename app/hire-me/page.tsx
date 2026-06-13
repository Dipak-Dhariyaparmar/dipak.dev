import { ArrowUpRight, BadgeCheck, CalendarDays, Clock, Globe2, Mail, Sparkles } from "lucide-react";
import Link from "next/link";
import { companyBuilds, engagementModels, projects, proofPoints, trustReasons, workingProcess } from "@/lib/content";

export default function HireMePage() {
  return (
    <main className="overflow-hidden pb-24">
      <section className="relative min-h-[92vh] pt-32">
        <div className="absolute inset-0 grid-lines opacity-45" aria-hidden="true" />
        <div className="section-shell relative grid min-h-[calc(92vh-8rem)] content-center">
          <p className="eyebrow">Hire Me</p>
          <h1 className="mt-6 max-w-5xl text-6xl font-black leading-[0.9] text-balance sm:text-8xl lg:text-9xl">
            Build Faster. Scale Smarter.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-fog/70 sm:text-xl">
            I help startups and businesses design, build, and scale modern web applications, SaaS products, AI-powered platforms, APIs, and internal tools.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="#book-call" className="focus-ring inline-flex items-center gap-2 bg-fog px-5 py-3 text-sm font-bold text-ink">
              Schedule a Call <CalendarDays size={17} />
            </Link>
            <Link href="/work" className="focus-ring inline-flex items-center gap-2 border border-line px-5 py-3 text-sm font-bold">
              View Case Studies <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <p className="eyebrow">What I Help Companies Build</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {companyBuilds.map((item) => (
            <article key={item.title} className="panel min-h-80 p-5 transition hover:-translate-y-1 hover:border-signal/50">
              <Sparkles className="text-signal" size={20} />
              <h2 className="mt-10 text-2xl font-black">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-fog/58"><span className="font-bold text-fog">Problem:</span> {item.problem}</p>
              <p className="mt-3 text-sm leading-6 text-fog/58"><span className="font-bold text-fog">Solution:</span> {item.solution}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.18em] text-signal/70">{item.uses}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line py-24">
        <div className="section-shell">
          <p className="eyebrow">Engagement Models</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {engagementModels.map((model) => (
              <article key={model.title} className="border border-line bg-white/[0.035] p-5">
                <h2 className="text-2xl font-black">{model.title}</h2>
                <p className="mt-5 text-sm leading-6 text-fog/62">{model.description}</p>
                <p className="mt-5 text-sm leading-6 text-fog/62"><span className="font-bold text-fog">Ideal client:</span> {model.client}</p>
                <p className="mt-4 text-sm leading-6 text-fog/62"><span className="font-bold text-fog">Scope:</span> {model.scope}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Why Teams Work With Me</p>
            <h2 className="mt-5 text-5xl font-black leading-tight text-balance sm:text-7xl">
              Engineering ownership with product judgment.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {trustReasons.map((reason) => (
              <div key={reason} className="panel flex items-center gap-3 p-4">
                <BadgeCheck className="text-signal" size={18} />
                <span className="text-sm font-semibold">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line py-24">
        <div className="section-shell">
          <p className="eyebrow">Selected Results</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.name} className="panel p-6">
                <p className="text-sm text-signal">{project.label}</p>
                <h2 className="mt-3 text-4xl font-black">{project.name}</h2>
                <div className="mt-7 grid gap-4 text-sm leading-6 text-fog/62">
                  <p><span className="font-bold text-fog">Challenge:</span> {project.challenge}</p>
                  <p><span className="font-bold text-fog">Approach:</span> {project.solution}</p>
                  <p><span className="font-bold text-fog">Architecture decisions:</span> {project.architecture}</p>
                  <p><span className="font-bold text-fog">Business impact:</span> {project.impact}</p>
                  <p><span className="font-bold text-fog">Lessons learned:</span> {project.learnings}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="panel p-6">
            <Clock className="text-signal" />
            <h2 className="mt-8 text-3xl font-black">Currently Available For</h2>
            <ul className="mt-5 space-y-3 text-fog/64">
              <li>Freelance Projects</li>
              <li>Startup Collaborations</li>
              <li>Contract Engineering Work</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
          <div className="panel p-6">
            <CalendarDays className="text-signal" />
            <h2 className="mt-8 text-3xl font-black">10-20 Hours / Week</h2>
            <p className="mt-5 leading-7 text-fog/64">Flexible collaboration for focused product work, feature delivery, and technical planning.</p>
          </div>
          <div className="panel p-6">
            <Globe2 className="text-signal" />
            <h2 className="mt-8 text-3xl font-black">Remote Worldwide</h2>
            <p className="mt-5 leading-7 text-fog/64">Comfortable working async with founders, CTOs, product teams, and distributed engineering groups.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-line py-24">
        <div className="section-shell">
          <p className="eyebrow">Social Proof</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {proofPoints.map((point) => (
              <figure key={point.label} className="panel p-6">
                <blockquote className="text-lg leading-8 text-fog/72">
                  {point.quote}
                </blockquote>
                <figcaption className="mt-8 text-sm uppercase tracking-[0.2em] text-fog/42">{point.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <p className="eyebrow">Working Process</p>
        <div className="mt-10 border-l border-line">
          {workingProcess.map((item) => (
            <article key={item.step} className="relative grid gap-4 border-b border-line py-8 pl-8 md:grid-cols-[120px_1fr]">
              <span className="absolute -left-[5px] top-10 h-2.5 w-2.5 bg-signal" />
              <p className="text-3xl font-black text-signal">{item.step}</p>
              <div>
                <h2 className="text-3xl font-black">{item.title}</h2>
                <p className="mt-3 leading-7 text-fog/62">{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="book-call" className="border-y border-line py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Book A Call</p>
            <h2 className="mt-5 text-5xl font-black leading-tight">Talk through the product before writing code.</h2>
            <p className="mt-6 leading-8 text-fog/64">
              Pick a time that works for you. The calendar stays embedded here so founders can schedule without leaving the page.
            </p>
          </div>
          <div className="panel min-h-[680px] overflow-hidden p-2">
            <iframe
              src="https://calendly.com/dipakdhariyaparmar/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=050505&text_color=f6f3ed&primary_color=6ee7b7"
              title="Schedule a call with Dipak Dhariyaparmar"
              className="h-[680px] w-full border-0"
            />
            <Link
              href="https://calendly.com/dipakdhariyaparmar/30min"
              target="_blank"
              className="focus-ring mt-3 inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-signal"
            >
              Open Calendly in a new tab <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Final Step</p>
            <h2 className="mt-5 max-w-4xl text-5xl font-black leading-tight text-balance sm:text-7xl">
              Need a Full Stack Engineer Who Thinks Beyond Code?
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fog/64">
              I partner with startups and growing companies to build scalable products, solve technical challenges, and deliver meaningful business outcomes.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-xs">
            <Link href="#book-call" className="focus-ring inline-flex items-center gap-2 bg-fog px-5 py-3 font-bold text-ink">
              Schedule a Call <CalendarDays size={17} />
            </Link>
            <Link href="mailto:dipakdhariyaparmar@gmail.com" className="focus-ring inline-flex items-center gap-2 border border-line px-5 py-3 font-bold">
              Send an Email <Mail size={17} />
            </Link>
            <Link href="https://www.linkedin.com/in/dipak-dhariyaparmar-034a66299/" className="focus-ring inline-flex items-center gap-2 border border-line px-5 py-3 font-bold">
              Connect on LinkedIn <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
