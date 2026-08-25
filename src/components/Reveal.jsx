import { useReveal } from "../hooks/useReveal";

/**
 * Wraps children in a scroll-triggered fade/slide-up reveal.
 * `delay` accepts a Tailwind-friendly ms value (e.g. 100, 200).
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const { ref, visible } = useReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
