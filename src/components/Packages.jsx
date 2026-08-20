import { useEffect, useState } from "react";
import Underlined from "./Underlined";

const packages = [
  {
    name: "TrackPro Flex",
    tagline: "Smart Tracking. Flexible Protection.",
    model: "Rental",
    features: [
      "GPS/GSM tracking",
      "Multi-layer maps",
      "Real-time monitoring",
      "Geofence alert (one city)",
      "Battery tamper alert",
      "Engine kill/release (conditional)",
      "Web & mobile access",
      "Ignition on/off alerts",
      "Trip report",
      "History report",
      "Recovery assistance",
      "24/7 control room",
    ],
  },
  {
    name: "TrackPro Plug & Go",
    tagline: "Plug In. Track On.",
    model: "OBD Rental",
    features: [
      "GPS/GSM tracking",
      "Multi-layer maps",
      "Real-time monitoring",
      "Geofence alert (one city)",
      "Battery tamper alert",
      "Web & mobile access",
      "Ignition on/off alerts",
      "Trip report",
      "History report",
      "Recovery assistance",
      "24/7 control room",
    ],
  },
  {
    name: "TrackPro Ride Guard",
    tagline: "Protection Built for Every Ride.",
    model: "Rental — Bikes",
    features: [
      "GPS/GSM tracking",
      "Multi-layer maps",
      "Real-time monitoring",
      "Geofence alert (one city)",
      "Battery tamper alert",
      "Engine kill/release (conditional)",
      "Web & mobile access",
      "Ignition on/off alerts",
      "Trip report",
      "History report",
      "Recovery assistance",
      "24/7 control room",
    ],
  },
  {
    name: "TrackPro Ride Guard+",
    tagline: "Smarter Protection for Your Bike.",
    model: "Ownership — Bikes",
    features: [
      "GPS/GSM tracking",
      "Multi-layer maps",
      "Real-time monitoring",
      "Geofence alert (one city)",
      "Battery tamper alert",
      "Engine kill/release (conditional)",
      "Web & mobile access",
      "Ignition on/off alerts",
      "Trip report",
      "History report",
      "Recovery assistance",
      "24/7 control room",
    ],
  },
  {
    name: "TrackPro Secure Drive",
    tagline: "Your Vehicle. Your Control.",
    model: "Ownership",
    features: [
      "GPS/GSM tracking",
      "Multi-layer maps",
      "Real-time monitoring",
      "Geofence alert (one city)",
      "Battery tamper alert",
      "Engine kill/release (conditional)",
      "Web & mobile access",
      "Ignition on/off alerts",
      "Trip report",
      "History report",
      "Recovery assistance",
      "24/7 control room",
    ],
  },
  {
    name: "TrackPro DrivePro",
    tagline: "Advanced Tracking. Complete Visibility.",
    model: "Ownership",
    features: [
      "GPS/GSM tracking",
      "Multi-layer maps",
      "Real-time monitoring",
      "Geofence alert (one city)",
      "Battery tamper alert",
      "Engine kill/release (conditional)",
      "Web & mobile access",
      "Ignition on/off alerts",
      "Over-speed alerts",
      "Event report",
      "Trip report",
      "History report",
      "Recovery assistance",
      "24/7 control room",
    ],
  },
  {
    name: "TrackPro Fleet Vision",
    tagline: "Track. Monitor. Optimize.",
    model: "Ownership — Fleet",
    badge: "MOST POPULAR",
    features: [
      "GPS/GSM tracking",
      "Multi-layer maps",
      "Real-time monitoring",
      "Geofence alert (city + province)",
      "Battery tamper alert",
      "Engine kill/release (conditional)",
      "Web & mobile access",
      "Ignition on/off alerts",
      "Over-speed alerts",
      "Event report",
      "Trip report",
      "History report",
      "Idle report",
      "Stop report",
      "Vehicle maintenance alerts",
      "Recovery assistance",
      "24/7 control room",
    ],
  },
  {
    name: "TrackPro Connect OBD",
    tagline: "Wireless Tracking with Smart Connectivity.",
    model: "OBD Ownership + Voice",
    features: [
      "GPS/GSM tracking",
      "Multi-layer maps",
      "Real-time monitoring",
      "Geofence alert (one city)",
      "Battery tamper alert",
      "One-way communication",
      "Web & mobile access",
      "Ignition on/off alerts",
      "Trip report",
      "History report",
      "Recovery assistance",
      "24/7 control room",
    ],
  },
  {
    name: "TrackPro Voice Secure",
    tagline: "Track. Communicate. Respond.",
    model: "Ownership + Voice",
    features: [
      "GPS/GSM tracking",
      "Multi-layer maps",
      "Real-time monitoring",
      "Geofence alert (one city)",
      "Battery tamper alert",
      "Engine kill/release (conditional)",
      "One-way communication",
      "Web & mobile access",
      "Ignition on/off alerts",
      "Trip report",
      "History report",
      "Recovery assistance",
      "24/7 control room",
    ],
  },
];

const MAX_VISIBLE_FEATURES = 7;

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

const IconChevron = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M9 6l6 6-6 6" />
  </svg>
);

function getCardsPerView() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth < 640) return 1;
  if (window.innerWidth < 1024) return 2;
  return 3;
}

export default function Packages() {
  const [perView, setPerView] = useState(getCardsPerView);
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(() => new Set());

  useEffect(() => {
    const onResize = () => setPerView(getCardsPerView());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = Math.max(packages.length - perView, 0);

  useEffect(() => {
    setIndex((v) => Math.min(v, maxIndex));
  }, [maxIndex]);

  const prev = () => setIndex((v) => Math.max(v - 1, 0));
  const next = () => setIndex((v) => Math.min(v + 1, maxIndex));
  const slideWidth = 100 / perView;

  const toggleExpanded = (name) =>
    setExpanded((prevSet) => {
      const next = new Set(prevSet);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  return (
    <section id="packages" className="relative overflow-hidden bg-brand-ink py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/[0.15] blur-3xl"
      />

      <div className="container-tp">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="eyebrow text-sm">Our packages</span>
          <h2 className="section-heading mt-4 text-white">
            Choose the plan that fits your{" "}
            <Underlined className="text-brand-orange">fleet</Underlined>
          </h2>
          <p className="mt-4 text-neutral-400">
            Flexible tracking plans for bikes, cars, and full fleets.
          </p>
        </div>

        <div className="relative px-14 md:px-20">
          <div className="overflow-hidden py-8">
          <div
            className="flex items-start transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * slideWidth}%)` }}
          >
            {packages.map((pkg) => {
              const visible = pkg.features.slice(0, MAX_VISIBLE_FEATURES);
              const hidden = pkg.features.slice(MAX_VISIBLE_FEATURES);
              const popular = Boolean(pkg.badge);
              const isOpen = expanded.has(pkg.name);

              const renderFeature = (f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-neutral-300">
                  <span
                    className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ${
                      popular ? "bg-brand-orange" : "bg-brand-orange/15"
                    }`}
                  >
                    <IconCheck className={`h-3 w-3 ${popular ? "text-white" : "text-brand-orange"}`} />
                  </span>
                  {f}
                </li>
              );

              return (
                <div key={pkg.name} className="shrink-0 px-3" style={{ width: `${slideWidth}%` }}>
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ease-out hover:-translate-y-1 md:p-7 ${
                      popular
                        ? "border-brand-orange bg-brand-ink pt-8 shadow-[0_25px_65px_-20px] shadow-brand-orange/40 ring-2 ring-brand-orange hover:shadow-[0_30px_70px_-15px] hover:shadow-brand-orange/60 md:pt-9"
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
                      <span
                        className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${
                          popular ? "bg-brand-orange/20 text-brand-orange" : "bg-brand-orange/[0.12] text-brand-orange"
                        }`}
                      >
                        {pkg.model}
                      </span>

                      <h3 className="mt-3 text-lg font-bold text-white md:text-xl">{pkg.name}</h3>
                      <p className="mt-1 min-h-[2.75rem] text-sm leading-snug text-neutral-400">
                        {pkg.tagline}
                      </p>

                      <div className="my-5 border-t border-white/8" />

                      <ul className="space-y-2.5">{visible.map(renderFeature)}</ul>

                      {hidden.length > 0 && (
                        <>
                          <div
                            className={`overflow-hidden transition-all duration-300 ease-out ${
                              isOpen ? "mt-2.5 max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <ul className="space-y-2.5">{hidden.map(renderFeature)}</ul>
                          </div>

                          <button
                            type="button"
                            onClick={() => toggleExpanded(pkg.name)}
                            className="mt-3 w-fit text-left text-xs font-semibold text-brand-orange transition-colors hover:text-white"
                          >
                            {isOpen ? "Show less" : `+${hidden.length} more features`}
                          </button>
                        </>
                      )}

                      {popular ? (
                        <a href="#demo" className="btn-primary mt-6 w-full">
                          Request a demo
                        </a>
                      ) : (
                        <a
                          href="#demo"
                          className="mt-6 w-full rounded-full border border-white/15 bg-white/5 py-3 text-center font-display font-semibold text-white transition-colors hover:bg-white/10"
                        >
                          Request a demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous"
            disabled={index === 0}
            className="absolute left-0 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 flex-none place-items-center rounded-full border border-white/15 bg-white/5 text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-brand-orange hover:bg-brand-orange hover:shadow-[0_0_25px_-6px] hover:shadow-brand-orange/60 disabled:pointer-events-none disabled:opacity-40 md:h-12 md:w-12"
          >
            <IconChevron className="h-5 w-5 rotate-180" />
          </button>

          <button
            onClick={next}
            aria-label="Next"
            disabled={index === maxIndex}
            className="absolute right-0 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 flex-none place-items-center rounded-full border border-white/15 bg-white/5 text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:border-brand-orange hover:bg-brand-orange hover:shadow-[0_0_25px_-6px] hover:shadow-brand-orange/60 disabled:pointer-events-none disabled:opacity-40 md:h-12 md:w-12"
          >
            <IconChevron className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-200 ${
                i === index ? "w-6 bg-brand-orange" : "w-2 bg-white/20 hover:bg-white/35"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
