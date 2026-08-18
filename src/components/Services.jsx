import { useLayoutEffect, useEffect, useMemo, useRef, useState } from "react";
import { IconPin, IconTruck, IconRoute, IconShield, IconWrench, IconChart } from "./icons";

const services = [
  {
    icon: IconPin,
    title: "Real-Time GPS Tracking",
    desc: "Track exact vehicle locations, live speeds, and engine states with sub-second precision and continuous historical pings.",
    metaLabel: "Active asset",
    metaValue: "Truck-402 (Transit)",
    stat: "98.4% signal",
  },
  {
    icon: IconTruck,
    title: "Fleet Management",
    desc: "Consolidate vehicle profiles, assignments, fuel cards, and registration compliance into a single operational command center.",
    metaLabel: "Fleet health",
    metaValue: "124 assets online",
    stat: "0 critical alerts",
  },
  {
    icon: IconRoute,
    title: "Route Optimization",
    desc: "Cut fuel costs and idle time with smart dispatching that adapts instantly to traffic, weather, and custom zone limits.",
    metaLabel: "ETA variance",
    metaValue: "-18 mins / route",
    stat: "Optimized",
  },
  {
    icon: IconShield,
    title: "Driver Behaviour",
    desc: "Monitor harsh braking, speeding, and idling per driver, then coach with objective scorecards and trip playback.",
    metaLabel: "Safety score",
    metaValue: "A- fleet average",
    stat: "Improving",
  },
  {
    icon: IconWrench,
    title: "Maintenance Alerts",
    desc: "Get ahead of breakdowns with service reminders driven by mileage, engine hours, and live diagnostic trouble codes.",
    metaLabel: "Due this week",
    metaValue: "6 vehicles",
    stat: "Scheduled",
  },
  {
    icon: IconChart,
    title: "Analytics & Reporting",
    desc: "Turn raw telemetry into utilization, cost-per-km, and compliance reports you can export or schedule automatically.",
    metaLabel: "Reports ready",
    metaValue: "Weekly digest",
    stat: "Automated",
  },
];

const AUTO_ADVANCE_MS = 2000;
const TRANSITION_MS = 500;
const GAP = 24; // px, matches gap-6
const N = services.length;

function getCardsPerView() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
}

export default function Services() {
  const wrapRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [transitionOn, setTransitionOn] = useState(true);

  // enough trailing clones to always fill the view when index reaches N
  const trackCards = useMemo(
    () => [...services, ...services.slice(0, cardsPerView)],
    [cardsPerView]
  );

  useLayoutEffect(() => {
    function measure() {
      setCardsPerView(getCardsPerView());
      if (wrapRef.current) setContainerWidth(wrapRef.current.clientWidth);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [cardsPerView]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => i + 1), AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [index, paused]);

  // deterministic silent reset — not tied to the transitionend DOM event,
  // which is unreliable here since child cards fire their own bubbling
  // transitionend events on hover.
  useEffect(() => {
    if (index !== N) return;
    const t = setTimeout(() => {
      setTransitionOn(false);
      setIndex(0);
    }, TRANSITION_MS + 20);
    return () => clearTimeout(t);
  }, [index]);

  // after the instant jump paints with no transition, restore it next frame
  useEffect(() => {
    if (transitionOn) return;
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionOn(true));
    });
    return () => cancelAnimationFrame(raf);
  }, [transitionOn]);

  function goTo(i) {
    setTransitionOn(true);
    setIndex(i);
  }

  const cardWidth = containerWidth
    ? (containerWidth - GAP * (cardsPerView - 1)) / cardsPerView
    : 0;
  const step = cardWidth + GAP;

  return (
    <section id="services" className="relative overflow-hidden bg-brand-ink py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-orange/10 blur-[120px]"
      />
      <div className="container-tp">
        <div className="mx-auto max-w-3xl text-center">
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Next-gen fleet intelligence
          </span> */}
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
            Enterprise services for
            <br />
            <span className="text-brand-orange">modern tracking operations</span>
          </h2>
          <p className="mt-5 text-lg text-white/65">
            Streamline tracking, safety, and diagnostics. Maximize asset uptime and driver
            performance with an accurate, real-time telemetry platform.
          </p>
        </div>

        <div
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div ref={wrapRef} className="overflow-hidden py-8">
            <div
              className={`flex gap-6 ${transitionOn ? "transition-transform duration-500 ease-out" : ""}`}
              style={{ transform: `translateX(-${index * step}px)` }}
            >
              {trackCards.map((s, i) => {
                const Icon = s.icon;
                return (
                  <article
                    key={i}
                    style={{ width: cardWidth ? `${cardWidth}px` : undefined }}
                    className="group flex h-full shrink-0 flex-col rounded-2xl border border-white/[0.08] bg-brand-coal p-8 ring-1 ring-white/[0.03] transition-colors duration-300 hover:-translate-y-1 hover:border-[#1CA0E8] hover:bg-[#1CA0E8] hover:shadow-[0_0_30px_-8px] hover:shadow-brand-orange/30 md:p-9"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 text-brand-orange ring-1 ring-brand-orange/20 transition-all duration-300 group-hover:from-transparent group-hover:to-transparent group-hover:bg-white/20 group-hover:text-white group-hover:ring-white/40">
                      <Icon className="h-5 w-5" />
                    </span>

                    <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-white">{s.title}</h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-white/60 transition-colors duration-300 group-hover:text-white">{s.desc}</p>

                    <div className="mt-8 border-t border-white/10 pt-6 transition-colors duration-300 group-hover:border-white/30">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-white/40 transition-colors duration-300 group-hover:text-white/80">
                            {s.metaLabel}
                          </div>
                          <div className="mt-0.5 text-sm font-medium text-white/85 transition-colors duration-300 group-hover:text-white">{s.metaValue}</div>
                        </div>
                        <span className="text-sm font-semibold text-brand-orange transition-colors duration-300 group-hover:text-white">{s.stat}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {services.map((s, i) => (
              <button
                key={s.title}
                onClick={() => goTo(i)}
                aria-label={`Go to card ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index % N === i ? "w-6 bg-brand-orange" : "w-2 bg-white/20 hover:bg-white/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
