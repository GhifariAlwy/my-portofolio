import { ArrowDown, Download } from "lucide-react";
import { personal } from "../data/personal";
import profileImage from "../assets/profile-dummy.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 grain text-ink-600/[0.06] dark:text-ink-100/[0.05] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 w-full relative flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-12">
        <div className="min-w-0 flex-1">
          <p className="eyebrow text-xs uppercase text-accent-600 dark:text-accent-400 mb-5">
            // available for freelance &amp; full-time roles
          </p>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
            {personal.name}
          </h1>

          <p className="mt-4 eyebrow text-sm sm:text-base text-ink-950/60 dark:text-ink-100/60">
            {personal.title}
          </p>

          <p className="mt-6 text-base sm:text-lg text-ink-950/75 dark:text-ink-100/75 max-w-xl leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink-950 text-ink-50 dark:bg-accent-500 dark:text-ink-950 px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
              <ArrowDown size={15} />
            </a>
            <a
              href={personal.cvFile}
              download
              className="inline-flex items-center gap-2 rounded-full border border-ink-600/25 dark:border-ink-600/60 px-6 py-3 text-sm font-medium hover:border-accent-500/70 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              Download CV
              <Download size={15} />
            </a>
          </div>
        </div>

        <div className="w-36 h-36 lg:w-80 lg:h-80 shrink-0">
          <img
            src={profileImage}
            alt={personal.name}
            className="w-full h-full rounded-3xl lg:rounded-[2rem] object-cover border-4 lg:border-8 border-ink-950 lg:border-ink-50 dark:border-ink-50 dark:lg:border-ink-950 shadow-xl lg:shadow-2xl rotate-3 hover:rotate-0 hover:scale-110 cursor-zoom-in transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
