const stack = ["React", "Vite", "Tailwind CSS", "JavaScript", "Figma"];

export default function Stack() {
  return (
    <section className="py-10 px-4 sm:py-12 sm:px-6 bg-paper border-y border-paper2">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-x-10 gap-y-4 justify-center">
        {stack.map((s) => (
          <span key={s} className="font-mono text-sm text-muted">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
