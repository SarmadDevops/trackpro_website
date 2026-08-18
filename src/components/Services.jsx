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

export default function Services() {
  return (
    <section id="services" className="bg-brand-ink py-20 text-white md:py-28">
      <div className="container-tp">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Next-gen fleet intelligence
          </span>
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

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-brand-coal p-7 transition-colors hover:border-brand-orange/40"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-orange/15 text-brand-orange">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" /> Active
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/60">{s.desc}</p>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wide text-white/40">
                        {s.metaLabel}
                      </div>
                      <div className="mt-0.5 text-sm font-medium text-white/85">{s.metaValue}</div>
                    </div>
                    <span className="text-sm font-semibold text-brand-orange">{s.stat}</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
