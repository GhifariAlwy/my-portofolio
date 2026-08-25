export default function SectionHeading({ index, title, note }) {
  return (
    <div className="mb-12">
      <p className="eyebrow text-xs uppercase text-accent-600 dark:text-accent-400 mb-3">
        {`// ${index} — ${title.toLowerCase()}`}
      </p>
      <h2 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight">
        {title}
      </h2>
      {note && (
        <p className="mt-3 text-ink-950/60 dark:text-ink-100/60 max-w-2xl">
          {note}
        </p>
      )}
    </div>
  );
}
