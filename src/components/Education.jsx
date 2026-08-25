import { education, certifications, organizations } from "../data/education";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading index="05" title="Education & Certifications" />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12">
          <Reveal delay={80}>
            <div className="rounded-2xl border border-ink-600/15 dark:border-ink-600/40 p-6">
              <h3 className="font-display font-semibold text-lg">
                {education.degree}
              </h3>
              <p className="text-ink-950/60 dark:text-ink-100/60 mt-1">
                {education.school}
              </p>
              <div className="mt-5 flex gap-6 eyebrow text-xs uppercase text-ink-950/50 dark:text-ink-100/50">
                <span>{education.period}</span>
                <span>GPA {education.gpa}</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="eyebrow text-xs uppercase text-ink-950/50 dark:text-ink-100/50 mb-4">
                Organizations
              </h3>
              <ul className="space-y-3">
                {organizations.map((org) => (
                  <li
                    key={org.role}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <span>
                      <span className="font-medium">{org.role}</span>
                      <span className="text-ink-950/55 dark:text-ink-100/55">
                        {" "}
                        — {org.org}
                      </span>
                    </span>
                    <span className="eyebrow text-[11px] text-ink-950/45 dark:text-ink-100/45 whitespace-nowrap">
                      {org.period}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <h3 className="eyebrow text-xs uppercase text-ink-950/50 dark:text-ink-100/50 mb-4">
              Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((cert) => (
                <li
                  key={cert.name}
                  className="flex items-start justify-between gap-4 rounded-xl border border-ink-600/15 dark:border-ink-600/40 p-4"
                >
                  <div>
                    <p className="font-medium text-sm">{cert.name}</p>
                    <p className="text-xs text-ink-950/55 dark:text-ink-100/55 mt-0.5">
                      {cert.detail}
                    </p>
                  </div>
                  <span className="eyebrow text-[11px] text-accent-600 dark:text-accent-400 whitespace-nowrap">
                    {cert.year}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
