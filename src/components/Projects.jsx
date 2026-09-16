import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { GithubIcon } from "./BrandIcons";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            index="03"
            title="Projects"
            note="Selected work spanning dashboards, ERP customization, system design, and full-stack apps."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="group h-full rounded-2xl border border-ink-600/15 dark:border-ink-600/40 p-6 hover:border-accent-500/50 transition-colors bg-ink-50 dark:bg-ink-900/60">
                {project.proofs.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {project.proofs.map((proof) => (
                    proof.src ? (
                      <a
                        key={proof.href || proof.src}
                        href={proof.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${proof.name}`}
                        className="relative block aspect-[16/9] overflow-hidden rounded-xl border border-ink-600/15 dark:border-ink-600/40"
                      >
                        <img
                          src={proof.src}
                          alt={proof.alt}
                          className="h-full w-full object-cover grayscale-[20%] transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute bottom-2 left-2 rounded bg-ink-950/75 px-2 py-1 eyebrow text-[9px] uppercase text-ink-50">
                          {proof.name}
                        </span>
                      </a>
                    ) : (
                      <div
                        key={proof.name}
                        className="flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-ink-600/25 dark:border-ink-600/50"
                      >
                        <span className="eyebrow text-[9px] uppercase text-ink-950/40 dark:text-ink-100/40">
                          {proof.name}
                        </span>
                      </div>
                    )
                    ))}
                  </div>
                )}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-semibold text-lg">
                    {project.title}
                  </h3>
                  <span className="eyebrow text-[11px] text-ink-950/45 dark:text-ink-100/45 whitespace-nowrap">
                    {project.period}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-950/70 dark:text-ink-100/70">
                  {project.description}
                </p>
                {project.links?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-lg border border-ink-600/20 dark:border-ink-600/50 px-2.5 py-1 eyebrow text-[10px] uppercase text-ink-950/60 dark:text-ink-100/60 hover:border-accent-500/60 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                      >
                        <GithubIcon size={11} />
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
