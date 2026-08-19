import appMockup from "../assets/mobile-app.png";

const features = [
  {
    label: "Live map tracking",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Instant push alerts",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
];

export default function AppCTA() {
  return (
    <section className="bg-white pt-8 pb-20 md:pt-12 md:pb-28">
      <div className="container-tp">
        <div className="relative overflow-hidden rounded-xl2 bg-brand-ink">
          <img
            src="/app-bg.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />

          {/* faint dot-grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          {/* subtle corner accent glows */}
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-orange opacity-20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-brand-orange opacity-20 blur-2xl" />

          <div className="relative grid gap-8 p-10 md:p-16 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h2 className="font-display text-4xl font-extrabold leading-[1.1]">
                Track your fleet from{" "}
                <span className="text-brand-orange">anywhere</span>
              </h2>
              <p className="mt-5 max-w-md text-white/70">
                The TrackPro app puts your live map, alerts, and reports in your pocket.
                Available on iOS and Android — free for every account.
              </p>

              <div className="mt-8 mb-8 flex flex-wrap items-center gap-x-6 gap-y-4 divide-white/10 sm:divide-x">
                {features.map((f, i) => (
                  <div key={f.label} className={`flex items-center gap-3 ${i > 0 ? "sm:pl-6" : ""}`}>
                    <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-brand-orange/15 text-brand-orange">
                      {f.icon}
                    </span>
                    <span className="text-sm font-medium leading-tight text-neutral-300">{f.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <StoreButton store="Google Play" top="Get it on" />
                <StoreButton store="App Store" top="Download on the" />
              </div>
            </div>

            <div className="relative flex items-center justify-center" aria-hidden="true">
              <div className="pointer-events-none absolute h-96 w-96 rounded-full bg-brand-orange opacity-40 blur-3xl" />
              <img
                src={appMockup}
                alt=""
                className="relative z-10 mx-auto h-72 w-auto rotate-3 object-contain drop-shadow-2xl md:h-[420px]"
                style={{ animation: "floatY 4s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoreButton({ store, top }) {
  return (
    <a
      href="#demo"
      className="inline-flex items-center gap-3 rounded-xl bg-white px-5 py-3 text-brand-ink transition hover:bg-brand-cloud"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
        <path d="M3 3l14 9-14 9V3z" opacity=".85" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-brand-ink/50">{top}</span>
        <span className="block text-sm font-bold">{store}</span>
      </span>
    </a>
  );
}
