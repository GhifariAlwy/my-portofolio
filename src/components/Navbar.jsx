import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { personal } from "../data/personal";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink-50/85 dark:bg-ink-950/85 backdrop-blur-md border-b border-ink-600/10 dark:border-ink-600/40"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-sm tracking-tight"
        >
          <span className="text-accent-600 dark:text-accent-400">GA</span>
          <span className="hidden sm:inline text-ink-950/70 dark:text-ink-100/70">
            {" "}
            / {personal.shortName}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 eyebrow text-xs uppercase text-ink-950/70 dark:text-ink-100/70">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="w-9 h-9 grid place-items-center rounded-full border border-ink-600/20 dark:border-ink-600/50 hover:border-accent-500/60 transition-colors"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 grid place-items-center rounded-full border border-ink-600/20 dark:border-ink-600/50"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 eyebrow text-xs uppercase bg-ink-50/95 dark:bg-ink-950/95 border-b border-ink-600/10 dark:border-ink-600/40">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 text-ink-950/80 dark:text-ink-100/80 hover:text-accent-600 dark:hover:text-accent-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
