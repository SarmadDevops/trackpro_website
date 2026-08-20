import { Link } from "react-router-dom";
import Logo from "./Logo";
import HashLink from "./HashLink";

const footerCols = [
  {
    title: "Product",
    links: [
      { label: "Live Tracking", href: "#services" },
      { label: "Fleet Management", href: "#services" },
      { label: "Route Optimization", href: "#services" },
      { label: "Analytics", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Pricing", href: "/packages" },
      { label: "Careers", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#faq" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
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
                  {col.links.map((l) =>
                    l.href.startsWith("/") ? (
                      <li key={l.label}>
                        <Link to={l.href} className="text-sm text-white/55 transition hover:text-white">
                          {l.label}
                        </Link>
                      </li>
                    ) : (
                      <li key={l.label}>
                        <HashLink
                          href={l.href}
                          className="text-sm text-white/55 transition hover:text-white"
                        >
                          {l.label}
                        </HashLink>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 text-sm text-white/50 sm:flex-row sm:items-start">
          <span>© {new Date().getFullYear()} TrackPro Systems Private Limited. All rights reserved.</span>
          <div className="flex flex-col items-center gap-1 text-center sm:items-end sm:text-right">
            <span>425-K Block, Model Town, Lahore</span>
            <span>
              <a href="tel:+924235774335" className="transition hover:text-white">
                042-35774335-7
              </a>
              {" · "}
              <a href="mailto:info@trackpro.com.pk" className="transition hover:text-white">
                info@trackpro.com.pk
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
