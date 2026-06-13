import { ArrowUpRight, BadgeCheck, Brain, CheckCircle2, Cpu, Database, Lock, Network, Rocket, ServerCog, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { architectureFlow, engineeringPlaybooks, engineeringPrinciples, engineeringSystems } from "@/lib/content";

const iconMap = [Lock, Network, Database, ServerCog, Rocket, Zap, ShieldCheck];

export default function EngineeringPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Engineering"
        title="How I think before I build."
        copy="I build software with clear architecture, reliable data flow, secure foundations, and product decisions that support real users from the first launch to future scale."
      />

      <section className="section-shell mt-20 grid gap-5 md:grid-cols-3">
        <div className="panel p-6">
          <Brain className="text-signal" size={24} />
          <h2 className="mt-8 text-3xl font-black">Product First</h2>
          <p className="mt-4 leading-7 text-fog/62">I connect technical choices to user behavior, business risk, and the next milestone.</p>
        </div>
        <div className="panel p-6">
          <Cpu className="text-signal" size={24} />
          <h2 className="mt-8 text-3xl font-black">Full Stack Ownership</h2>
          <p className="mt-4 leading-7 text-fog/62">Frontend, APIs, data models, auth, deployment, and production quality are treated as one system.</p>
        </div>
        <div className="panel p-6">
          <CheckCircle2 className="text-signal" size={24} />
          <h2 className="mt-8 text-3xl font-black">Launch Mindset</h2>
          <p className="mt-4 leading-7 text-fog/62">I build with real users in mind: edge cases, loading states, errors, performance, and maintainability.</p>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="eyebrow">Engineering Principles</p>
            <h2 className="mt-5 text-5xl font-black leading-tight text-balance sm:text-7xl">
              The decisions behind the code matter.
            </h2>
            <p className="mt-6 leading-8 text-fog/64">
              A strong product is not created by stacking technologies. It comes from making calm, practical decisions about what should be simple now, what must be strong from day one, and what can evolve later.
            </p>
          </div>
          <div className="grid gap-4">
            {engineeringPrinciples.map((principle, index) => (
              <article key={principle.title} className="panel p-6">
                <p className="text-sm text-signal">0{index + 1}</p>
                <h3 className="mt-4 text-3xl font-black">{principle.title}</h3>
                <p className="mt-4 leading-7 text-fog/64">{principle.copy}</p>
                <p className="mt-4 border-l border-signal/50 pl-4 leading-7 text-fog/78">{principle.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line py-24">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="eyebrow">System Thinking</p>
              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-tight text-balance sm:text-7xl">
                What I look at inside a production product.
              </h2>
            </div>
            <Link href="/hire-me" className="focus-ring inline-flex w-fit items-center gap-2 border border-line px-5 py-3 text-sm font-bold">
              Work With Me <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5">
            {engineeringSystems.map((system, index) => {
              const Icon = iconMap[index] ?? ServerCog;
              return (
                <article key={system.title} className="grid overflow-hidden border border-line bg-white/[0.035] lg:grid-cols-[0.7fr_1.3fr]">
                  <div className="border-b border-line p-7 lg:border-b-0 lg:border-r">
                    <Icon className="text-signal" size={26} />
                    <p className="mt-10 text-sm text-signal">0{index + 1}</p>
                    <h3 className="mt-3 text-4xl font-black">{system.title}</h3>
                    <p className="mt-5 leading-7 text-fog/64">{system.founderProblem}</p>
                  </div>
                  <div className="p-7">
                    <div className="grid gap-6 lg:grid-cols-2">
                      <div>
                        <h4 className="font-black">My Approach</h4>
                        <p className="mt-3 leading-7 text-fog/62">{system.approach}</p>
                      </div>
                      <div>
                        <h4 className="font-black">Business Value</h4>
                        <p className="mt-3 leading-7 text-fog/62">{system.businessValue}</p>
                      </div>
                    </div>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {system.decisions.map((decision) => (
                        <div key={decision} className="flex gap-3 border border-line bg-ink/40 p-4 text-sm text-fog/72">
                          <BadgeCheck className="mt-0.5 shrink-0 text-signal" size={16} />
                          <span>{decision}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <p className="eyebrow">Architecture Flow</p>
        <div className="mt-8 grid gap-3 md:grid-cols-6">
          {architectureFlow.map((item, index) => (
            <div key={item} className="panel min-h-36 p-4">
              <p className="text-sm text-signal">0{index + 1}</p>
              <h2 className="mt-8 text-xl font-black">{item}</h2>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-4xl leading-8 text-fog/64">
          I use this flow to keep products understandable. A feature starts with the user experience, moves through state and API contracts, lands in domain logic and database design, then becomes observable enough for the team to support after launch.
        </p>
      </section>

      <section className="border-y border-line py-24">
        <div className="section-shell">
          <p className="eyebrow">Engineering Playbooks</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {engineeringPlaybooks.map((playbook) => (
              <article key={playbook.title} className="panel p-6">
                <h2 className="text-3xl font-black">{playbook.title}</h2>
                <p className="mt-5 leading-7 text-fog/62">{playbook.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Technical Collaboration</p>
            <h2 className="mt-5 max-w-4xl text-5xl font-black leading-tight text-balance sm:text-7xl">
              I help teams turn uncertainty into a buildable system.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-fog/64">
              If you have a product idea, an MVP that needs structure, or a system that is getting harder to maintain, I can help clarify the architecture and ship the next version.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-xs">
            <Link href="/hire-me#book-call" className="focus-ring inline-flex items-center gap-2 bg-fog px-5 py-3 font-bold text-ink">
              Schedule a Call <ArrowUpRight size={17} />
            </Link>
            <Link href="/work" className="focus-ring inline-flex items-center gap-2 border border-line px-5 py-3 font-bold">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
