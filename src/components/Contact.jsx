import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { personal } from "../data/personal";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { LinkedinIcon } from "./BrandIcons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const mailtoHref = () => {
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    return `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-28 bg-ink-100/40 dark:bg-ink-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading
            index="06"
            title="Contact"
            note="Have a role, a project, or a system that needs untangling? Reach out."
          />
        </Reveal>

        <div className="grid md:grid-cols-5 gap-12">
          <Reveal className="md:col-span-2 space-y-5" delay={80}>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-3 text-sm hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              <Mail size={16} className="text-accent-600 dark:text-accent-400" />
              {personal.email}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              <LinkedinIcon size={16} className="text-accent-600 dark:text-accent-400" />
              {personal.linkedinLabel}
            </a>
            <a
              href={`tel:${personal.phone.replace(/-/g, "")}`}
              className="flex items-center gap-3 text-sm hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
            >
              <Phone size={16} className="text-accent-600 dark:text-accent-400" />
              {personal.phone}
            </a>
          </Reveal>

          <Reveal className="md:col-span-3" delay={160}>
            <form
              action={mailtoHref()}
              method="get"
              className="space-y-4"
              onSubmit={(e) => {
                // mailto forms need no JS submission; this just prevents
                // an empty message from opening a blank mail client.
                if (!form.message.trim()) e.preventDefault();
              }}
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg border border-ink-600/25 dark:border-ink-600/50 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-accent-500"
                />
                <input
                  required
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border border-ink-600/25 dark:border-ink-600/50 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-accent-500"
                />
              </div>
              <textarea
                required
                rows={4}
                placeholder="What are you building?"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg border border-ink-600/25 dark:border-ink-600/50 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-accent-500 resize-none"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-ink-950 text-ink-50 dark:bg-accent-500 dark:text-ink-950 px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Send message
                <Send size={14} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
