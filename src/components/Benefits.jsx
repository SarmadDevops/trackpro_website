import Underlined from "./Underlined";
import { IconPin, IconBell, IconDollar, IconShield, IconPlay } from "./icons";

const benefits = [
  { icon: IconPin, title: "Live Tracking", desc: "See every vehicle move in real time with sub-second location and speed on one clean map." },
  { icon: IconBell, title: "Instant Alerts", desc: "Geofence exits, speeding, and idling trigger notifications the moment they happen." },
  { icon: IconDollar, title: "Lower Costs", desc: "Cut fuel waste and downtime with utilization reports and predictive maintenance." },
  { icon: IconShield, title: "Data Privacy", desc: "Your fleet data stays yours — encrypted in transit and at rest, with role-based access." },
];

export default function Benefits() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tp">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Why teams choose TrackPro</span>
          <h2 className="section-heading mx-auto mt-4 max-w-2xl">
            Benefits from day one and get on the road{" "}
            <Underlined className="text-brand-ink">faster</Underlined>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <article key={b.title} className="flex h-full flex-col rounded-2xl bg-brand-cloud p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-brand-ink">{b.title}</h3>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-brand-orange">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-brand-ink/60">{b.desc}</p>
                </article>
              );
            })}
          </div>

          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-brand-coal">
            <img
              src="/benefits.jpg"
              alt="TrackPro in action"
              className="h-full w-full object-cover"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
            <button
              className="absolute inset-0 grid place-items-center"
              aria-label="Play overview video"
            >
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-orange text-white shadow-card transition-transform hover:scale-105">
                <IconPlay className="h-7 w-7 translate-x-0.5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
