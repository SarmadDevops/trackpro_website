import Logo from "./Logo";

const brands = ["Nietzsche", "Boltshift", "Biosynthesis", "FeatherDev", "FocalPoint", "Spherule"];

const footerCols = [
  { title: "Product", links: ["Live Tracking", "Fleet Management", "Route Optimization", "Analytics"] },
  { title: "Company", links: ["About Us", "Our Team", "Pricing", "Careers"] },
  { title: "Support", links: ["Help Center", "Privacy Policy", "Terms", "Contact"] },
];

export default function Footer() {
  return (
    <>
      {/* brand strip */}
      <section className="bg-white py-16">
        <div className="container-tp">
          <p className="text-center font-display text-lg font-bold text-brand-ink/80">
            Trusted by teams that keep the world moving
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
            {brands.map((b) => (
              <span key={b} className="text-lg font-bold text-brand-ink/60">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-brand-ink pt-16 text-white">
        <div className="container-tp">
          <div className="grid gap-12 pb-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <Logo dark />
              <p className="mt-5 max-w-sm text-white/60">
                Real-time GPS tracking and fleet intelligence for teams that need to know
                where every vehicle is — right now.
              </p>

              <div className="mt-8 max-w-md">
                <div className="mb-3 text-sm font-semibold">Get product updates</div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="name@email.com"
                    className="flex-1 rounded-xl border border-white/15 bg-brand-coal px-5 py-3 text-white outline-none placeholder:text-white/40 focus:border-brand-orange"
                  />
                  <button className="btn-primary whitespace-nowrap">Subscribe</button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {footerCols.map((col) => (
                <div key={col.title}>
                  <div className="text-sm font-bold text-white">{col.title}</div>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a href="#" className="text-sm text-white/55 transition hover:text-white">{l}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row">
            <span>© {new Date().getFullYear()} TrackPro. All rights reserved.</span>
            <span>hello@trackpro.com · +92 300 0000000</span>
          </div>
        </div>
      </footer>
    </>
  );
}
