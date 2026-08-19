export default function Inspector({ label, dims, children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-l-2 border-sky" />
      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-sky" />
      <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-sky" />
      <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-r-2 border-sky" />
      {label && (
        <span className="absolute -top-2 sm:-top-3 left-3 sm:left-4 -translate-y-1/2 bg-ink text-sky font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded">
          {label}
        </span>
      )}
      {dims && (
        <span className="absolute -bottom-2 sm:-bottom-3 right-3 sm:right-4 translate-y-1/2 bg-ink text-muted font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded">
          {dims}
        </span>
      )}
      {children}
    </div>
  );
}
