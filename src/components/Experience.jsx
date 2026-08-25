import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28 bg-ink-100/40 dark:bg-ink-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            index="02"
            title="Experience"
            note="A timeline of roles, ordered most recent first."
          />
        </Reveal>

        <ol className="relative border-l border-ink-600/20 dark:border-ink-600/50 pl-8 space-y-14">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 120}>
              <li className="relative">
                <span
                  className={`absolute -left-[38px] top-1.5 w-3 h-3 rounded-full ring-4 ring-ink-50 dark:ring-ink-950 ${
                    job.current
                      ? "bg-accent-500"
                      : "bg-ink-600/60 dark:bg-ink-400/60"
                  }`}
                />
                <p className="eyebrow text-xs uppercase text-ink-950/50 dark:text-ink-100/50 mb-1.5">
                  {job.period}
                  {job.current && (
                    <span className="ml-2 text-accent-600 dark:text-accent-400">
                      current
                    </span>
                  )}
                </p>
                <h3 className="font-display font-semibold text-xl">
                  {job.role}
                </h3>
                <p className="text-ink-950/60 dark:text-ink-100/60 mb-4">
                  {job.company}
                </p>
                <ul className="space-y-2.5">
                  {job.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed text-ink-950/75 dark:text-ink-100/75"
                    >
                      <span className="text-accent-600 dark:text-accent-400 mt-1 shrink-0">
                        ▸
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
