import { personal } from "../data/personal";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading index="01" title="About" />
        </Reveal>

        <div className="grid md:grid-cols-5 gap-10 md:gap-16 items-start">
          <Reveal className="md:col-span-3" delay={100}>
            <div className="border-l-2 border-accent-500 pl-5 sm:pl-7">
              <p className="text-lg leading-relaxed text-ink-950/80 dark:text-ink-100/80">
              {personal.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
              {personal.badges.map((badge) => (
                <span
                  key={badge}
                  className="eyebrow text-xs px-3 py-1.5 rounded-md bg-accent-500/10 text-ink-950/70 dark:text-ink-100/75"
                >
                  {badge}
                </span>
              ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="md:col-span-2" delay={200}>
            <dl className="border-t border-ink-600/15 dark:border-ink-600/40">
              {personal.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex justify-between gap-4 py-4 border-b border-ink-600/15 dark:border-ink-600/40"
                >
                  <dt className="eyebrow text-xs uppercase text-ink-950/50 dark:text-ink-100/50">
                    {fact.label}
                  </dt>
                    <dd className="text-sm text-right font-medium max-w-[65%]">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
