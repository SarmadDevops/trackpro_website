export default function Logo({ dark = false }) {
  const textColor = dark ? "text-white" : "text-brand-ink";
  return (
    <a href="#top" className="flex items-center gap-2" aria-label="TrackPro home">
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-brand-orange">
        {/* location pin mark */}
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      </span>
      <span className={`font-display text-xl font-extrabold leading-none ${textColor}`}>
        Track<span className="text-brand-orange">Pro</span>
      </span>
    </a>
  );
}
