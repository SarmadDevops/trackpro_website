export default function AppCTA() {
  return (
    <section className="bg-white pb-24">
      <div className="container-tp">
        <div className="relative overflow-hidden rounded-xl2 bg-brand-ink">
          <img
            src="/app-bg.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <div className="relative grid gap-8 p-10 sm:p-14 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <h2 className="font-display text-4xl font-extrabold leading-[1.1]">
                Track your fleet from{" "}
                <span className="text-brand-orange">anywhere</span>
              </h2>
              <p className="mt-5 max-w-md text-white/70">
                The TrackPro app puts your live map, alerts, and reports in your pocket.
                Available on iOS and Android — free for every account.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <StoreButton store="Google Play" top="Get it on" />
                <StoreButton store="App Store" top="Download on the" />
              </div>
            </div>

            <div className="hidden lg:block" aria-hidden="true">
              <div className="ml-auto grid h-56 w-56 place-items-center rounded-full bg-brand-orange/90 text-white">
                <svg viewBox="0 0 24 24" className="h-24 w-24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="2.5" />
                  <path d="M11 18h2" />
                  <path d="M12 6v4l2.5 2.5" />
                  <circle cx="12" cy="10" r="4.5" />
                </svg>
              </div>
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
