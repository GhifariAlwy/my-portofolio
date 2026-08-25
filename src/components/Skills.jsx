import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-28 bg-ink-100/40 dark:bg-ink-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading index="04" title="Skills" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 100}>
              <div>
                <h3 className="eyebrow text-xs uppercase text-ink-950/50 dark:text-ink-100/50 mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-lg border border-ink-600/20 dark:border-ink-600/50 hover:border-accent-500/60 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
