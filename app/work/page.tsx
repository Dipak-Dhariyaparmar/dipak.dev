import { PageHero } from "@/components/page-hero";
import { projects } from "@/lib/content";

export default function WorkPage() {
  return (
    <main className="pb-24">
      <PageHero
        eyebrow="Work"
        title="Outcome-driven case studies with engineering depth."
        copy="Each build is framed like a real product engagement: challenge, solution, architecture, trade-offs, business impact, and what the work taught me about shipping better software."
      />
      <section className="section-shell mt-20 grid gap-12">
        {projects.map((project) => (
          <article key={project.name} className="overflow-hidden border border-line">
            <div className="grid min-h-[340px] bg-white/[0.035] lg:grid-cols-[0.9fr_1.1fr]">
              <div className="flex flex-col justify-between border-b border-line p-7 lg:border-b-0 lg:border-r">
                <div>
                  <p className="eyebrow">{project.label}</p>
                  <h2 className="mt-5 text-5xl font-black sm:text-7xl">{project.name}</h2>
                </div>
                <p className="mt-8 max-w-lg text-lg leading-8 text-fog/68">{project.description}</p>
              </div>
              <div className="grid content-end bg-[linear-gradient(135deg,rgba(110,231,183,0.12),rgba(249,115,22,0.08),transparent)] p-7">
                <div className="grid gap-3 sm:grid-cols-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="border border-line bg-ink/55 px-4 py-3 text-sm text-fog/76">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid gap-6 border-t border-line p-7 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <h3 className="font-black">Challenge</h3>
                <p className="mt-3 leading-7 text-fog/62">{project.challenge}</p>
              </div>
              <div>
                <h3 className="font-black">Solution</h3>
                <p className="mt-3 leading-7 text-fog/62">{project.solution}</p>
              </div>
              <div>
                <h3 className="font-black">Architecture</h3>
                <p className="mt-3 leading-7 text-fog/62">{project.architecture}</p>
              </div>
              <div>
                <h3 className="font-black">Trade-Offs</h3>
                <p className="mt-3 leading-7 text-fog/62">{project.tradeoffs}</p>
              </div>
              <div>
                <h3 className="font-black">Business Impact</h3>
                <p className="mt-3 leading-7 text-fog/62">{project.impact}</p>
              </div>
              <div>
                <h3 className="font-black">Technical Learnings</h3>
                <p className="mt-3 leading-7 text-fog/62">{project.learnings}</p>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
