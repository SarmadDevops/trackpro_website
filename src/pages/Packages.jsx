import { useState } from "react";
import Underlined from "../components/Underlined";
import HashLink from "../components/HashLink";
import { packages } from "../components/Packages";
import { IconSpeed, IconChart, IconBell, IconSearch } from "../components/icons";

const included = [
  { icon: IconSpeed, label: "Real-time monitoring" },
  { icon: IconChart, label: "Web & mobile access" },
  { icon: IconBell, label: "24/7 control room" },
  { icon: IconSearch, label: "Recovery assistance" },
];

const faqs = [
  {
    q: "Is there a setup fee?",
    a: "No hidden setup charges. What you see in your plan is what you get — installation and onboarding are included.",
  },
  {
    q: "Do you offer bike tracking?",
    a: "Yes. Ride Guard and Ride Guard+ are built specifically for bikes, with the same real-time tracking and alerts as our car plans.",
  },
  {
    q: "What's AMC?",
    a: "AMC (Annual Maintenance Contract) covers device upkeep, support, and servicing for owned hardware on ownership-model plans.",
  },
  {
    q: "Which cities do you cover?",
    a: "TrackPro covers 50+ cities across Pakistan, with control-room support and recovery assistance wherever our network reaches.",
  },
  {
    q: "Can I switch plans later?",
    a: "Yes. You can upgrade or change plans as your vehicle or fleet needs grow — just reach out to our team.",
  },
];

const IconCheck = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function Packages() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      {/* hero + grid */}
      <section className="relative overflow-hidden bg-brand-ink py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-orange/[0.15] blur-3xl"
        />

        <div className="container-tp">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-sm">Our packages</span>
            <h1 className="section-heading mt-4 text-white">
              Plans for every vehicle and{" "}
              <Underlined className="text-brand-orange">fleet</Underlined>
            </h1>
            <p className="mt-6 text-white/65">
              From a single bike to a full fleet — choose the TrackPro plan that fits. No
              hidden setup, real 24/7 support.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 items-stretch gap-6 p-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
            {packages.map((pkg) => {
              const popular = Boolean(pkg.badge);

              return (
                <div
                  key={pkg.name}
                  className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1 md:p-7 ${
                    popular
                      ? "border-brand-orange bg-brand-ink pt-8 shadow-[0_25px_65px_-20px] shadow-brand-orange/40 ring-2 ring-brand-orange hover:border-brand-orange hover:shadow-[0_30px_70px_-15px] hover:shadow-brand-orange/60 md:pt-9"
                      : "border-white/8 bg-brand-coal hover:border-brand-orange/40 hover:shadow-xl hover:shadow-black/20"
                  }`}
                >
                  {popular && (
                    <>
                      <span className="absolute -top-3 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-brand-orange to-brand-orangeDark px-4 py-1 text-xs font-semibold text-white shadow-md shadow-brand-orange/30">
                        {pkg.badge}
                      </span>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 rounded-t-2xl bg-gradient-to-b from-brand-orange/15 to-transparent" />
                    </>
                  )}

                  <div className="relative flex flex-1 flex-col">
                    <span className="inline-flex w-fit items-center rounded-full bg-brand-orange/[0.12] px-3 py-1 text-xs font-semibold text-brand-orange">
                      {pkg.model}
                    </span>

                    <h3 className="mt-3 text-lg font-bold text-white md:text-xl">
                      {pkg.name}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-neutral-400">
                      {pkg.tagline}
                    </p>

                    <div className="my-5 border-t border-white/8" />

                    <ul className="space-y-2.5">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                          <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-orange/15">
                            <IconCheck className="h-3 w-3 text-brand-orange" />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {popular ? (
                      <HashLink href="#demo" className="btn-primary mt-6 w-full">
                        Request a demo
                      </HashLink>
                    ) : (
                      <HashLink
                        href="#demo"
                        className="mt-6 w-full rounded-full border border-white/15 bg-white/5 py-3 text-center font-display font-semibold text-white transition-colors hover:bg-white/10"
                      >
                        Request a demo
                      </HashLink>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* what's included in every plan */}
      <section className="bg-white py-14 md:py-16">
        <div className="container-tp">
          <div className="mx-auto max-w-xl text-center">
            <span className="eyebrow">Every plan includes</span>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand-ink sm:text-3xl">
              What's included, no matter the plan
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {included.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-col items-center gap-3 text-center">
                  <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold text-brand-ink/75">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-cloud py-20 md:py-28">
        <div className="container-tp">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Questions</span>
            <h2 className="section-heading mx-auto mt-4 max-w-xl">
              Packages &amp; pricing{" "}
              <Underlined className="text-brand-ink">FAQs</Underlined>
            </h2>
          </div>

          <div className="mx-auto mt-14 max-w-2xl space-y-4">
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="overflow-hidden rounded-2xl bg-white">
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-brand-ink">{item.q}</span>
                    <span className="grid h-6 w-6 flex-none place-items-center text-brand-orange">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" className={isOpen ? "hidden" : ""} />
                        <path d="M5 12h14" className={isOpen ? "" : "hidden"} />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm leading-relaxed text-brand-ink/60">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-white pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="container-tp">
          <div className="rounded-xl2 bg-brand-ink px-6 py-14 text-center text-white sm:px-12 md:py-20">
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
              Not sure which plan fits?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/65">
              Tell us about your vehicles and we'll help you pick the right TrackPro plan.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <HashLink href="#demo" className="btn-primary">
                Request a demo
              </HashLink>
              <HashLink
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3 font-display font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact us
              </HashLink>
            </div>

            <p className="mt-8 text-sm text-white/45">
              <a href="mailto:info@trackpro.com.pk" className="hover:text-white">
                info@trackpro.com.pk
              </a>{" "}
              ·{" "}
              <a href="tel:+924235774335" className="hover:text-white">
                042-35774335-7
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
