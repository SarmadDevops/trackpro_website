import { useState } from "react";
import Underlined from "./Underlined";
import { IconSpeed } from "./icons";

const vehicles = [
  {
    tab: "Delivery Vans",
    name: "Delivery Vans",
    desc: "Route-heavy urban fleets that need tight ETAs and cargo visibility.",
    features: ["Live route deviation alerts", "Door & cargo sensors", "Stop-by-stop history"],
    specs: [
      ["Tracker", "OBD-II plug"],
      ["Update rate", "Every 5 sec"],
      ["Sensors", "Door, temp, fuel"],
      ["Geofences", "Unlimited"],
      ["Battery backup", "Yes"],
      ["Install time", "< 5 min"],
    ],
  },
  {
    tab: "Sedans",
    name: "Company Sedans",
    desc: "Field teams and pool cars where driver safety and usage matter most.",
    features: ["Driver behaviour scoring", "Trip playback", "Private/business mode"],
    specs: [
      ["Tracker", "OBD-II plug"],
      ["Update rate", "Every 10 sec"],
      ["Sensors", "Speed, harsh events"],
      ["Geofences", "Unlimited"],
      ["Battery backup", "Yes"],
      ["Install time", "< 5 min"],
    ],
  },
  {
    tab: "Heavy Trucks",
    name: "Heavy Trucks",
    desc: "Long-haul and construction fleets running on CAN-bus telemetry.",
    features: ["Engine diagnostics (DTC)", "Fuel & idle analytics", "Tachograph-ready"],
    specs: [
      ["Tracker", "CAN-bus hardwired"],
      ["Update rate", "Every 3 sec"],
      ["Sensors", "Engine, fuel, PTO"],
      ["Geofences", "Unlimited"],
      ["Battery backup", "Yes"],
      ["Install time", "Pro install"],
    ],
  },
  {
    tab: "Motorbikes",
    name: "Motorbikes",
    desc: "Two-wheeler delivery fleets needing compact, tamper-proof trackers.",
    features: ["Anti-theft alerts", "Compact hidden unit", "Rider trip logs"],
    specs: [
      ["Tracker", "Compact wired"],
      ["Update rate", "Every 8 sec"],
      ["Sensors", "Motion, tamper"],
      ["Geofences", "Unlimited"],
      ["Battery backup", "Yes"],
      ["Install time", "< 15 min"],
    ],
  },
];

export default function Vehicles() {
  const [active, setActive] = useState(0);
  const v = vehicles[active];

  return (
    <section className="bg-brand-cloud py-24">
      <div className="container-tp">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Premium tracking for every asset, worldwide</span>
          <h2 className="section-heading mt-4">
            Track cars, vans and trucks: a wide range of{" "}
            <Underlined className="text-brand-ink">vehicles</Underlined>
          </h2>
        </div>

        {/* tabs */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {vehicles.map((item, i) => (
            <button
              key={item.tab}
              onClick={() => setActive(i)}
              className={`flex items-center justify-between rounded-xl border-2 px-5 py-4 text-left transition ${
                i === active
                  ? "border-brand-orange bg-white"
                  : "border-transparent bg-white/60 hover:bg-white"
              }`}
            >
              <span className="font-semibold text-brand-ink">{item.tab}</span>
              <IconSpeed className="h-6 w-6 text-brand-ink/30" />
            </button>
          ))}
        </div>

        {/* detail */}
        <div className="mt-8 grid gap-8 rounded-xl2 bg-white p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="text-2xl font-bold text-brand-ink">{v.name}</h3>
            <p className="mt-3 text-brand-ink/60">{v.desc}</p>

            <ul className="mt-6 space-y-3">
              {v.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-brand-ink">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  {f}
                </li>
              ))}
            </ul>

            <a href="#demo" className="btn-primary mt-8">Request a demo</a>
          </div>

          <div className="rounded-2xl bg-brand-ink p-7 text-white">
            <dl className="divide-y divide-white/10">
              {v.specs.map(([k, val]) => (
                <div key={k} className="flex items-center justify-between py-3.5">
                  <dt className="text-sm text-white/55">{k}</dt>
                  <dd className="text-sm font-medium">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
