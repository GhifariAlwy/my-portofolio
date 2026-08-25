import { Mail } from "lucide-react";
import { personal } from "../data/personal";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-ink-600/15 dark:border-ink-600/40 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="eyebrow text-xs text-ink-950/50 dark:text-ink-100/50">
          © {new Date().getFullYear()} {personal.name}.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="text-ink-950/50 dark:text-ink-100/50 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            <Mail size={17} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-950/50 dark:text-ink-100/50 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-950/50 dark:text-ink-100/50 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
          >
            <GithubIcon size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
