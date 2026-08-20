import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import HashLink from "./HashLink";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "/about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#vehicles" },
  { label: "Packages", href: "/packages" },
  { label: "FAQ", href: "#faq" },
];

function NavItem({ href, className, onClick, children }) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }
  return (
    <HashLink href={href} className={className} onClick={onClick}>
      {children}
    </HashLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header
      className={`inset-x-0 top-0 z-40 ${
        isHome ? "absolute" : "relative bg-brand-ink"
      }`}
    >
      <nav className="container-tp flex items-center justify-between py-5">
        <Logo dark />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <NavItem
                href={l.href}
                className="text-sm font-medium text-white/85 transition-colors hover:text-white"
              >
                {l.label}
              </NavItem>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn-primary px-5 py-2 text-sm">
            Web Portal
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="container-tp pb-5">
            <div className="rounded-2xl bg-brand-coal/95 p-4 backdrop-blur">
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.label}>
                    <NavItem
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10"
                    >
                      {l.label}
                    </NavItem>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                Web Portal
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
