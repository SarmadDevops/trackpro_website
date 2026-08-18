import Underlined from "./Underlined";
import { IconSearch, IconPin, IconChart } from "./icons";

const steps = [
  {
    n: "Step 1",
    icon: IconSearch,
    title: "Connect your devices",
    desc: "Pair your existing GPS trackers or OBD dongles in minutes. TrackPro auto-detects hardware and starts streaming location instantly.",
  },
  {
    n: "Step 2",
    icon: IconPin,
    title: "See everything live",
    desc: "Watch every vehicle move on one real-time map with speed, status, and geofence alerts — from any browser or the mobile app.",
    featured: true,
  },
  {
    n: "Step 3",
    icon: IconChart,
    title: "Act on the data",
    desc: "Get maintenance reminders, driver scorecards, and utilization reports so you can cut costs and keep the fleet running.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-brand-cloud py-20 md:py-28">
      <div className="container-tp">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">How TrackPro works</span>
          <h2 className="section-heading mx-auto mt-4 max-w-2xl">
            Get your fleet <Underlined className="text-brand-ink">online</Underlined> in{" "}
            three simple steps
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className={`flex h-full flex-col rounded-2xl p-8 text-center ${
                  s.featured ? "bg-white shadow-card md:-translate-y-4" : "bg-white/60"
                }`}
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                  {s.n}
                </div>
                <h3 className="mt-2 text-xl font-bold text-brand-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/60">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
