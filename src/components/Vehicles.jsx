import { useState } from "react";
import Underlined from "./Underlined";
import carImg from "../assets/car.png";
import bikeImg from "../assets/bike.png";
import truckImg from "../assets/truck.png";
import busImg from "../assets/bus.png";

const vehicles = [
  {
    tab: "Car",
    name: "Car",
    image: carImg,
    desc: "Personal and fleet cars tracked with pinpoint accuracy and instant theft alerts.",
    features: ["Real-time location & speed", "Theft & tow-away alerts", "Trip history & playback"],
    specs: [
      ["Tracker", "OBD-II / hardwired"],
      ["Update rate", "Every 10 sec"],
      ["Sensors", "Speed, ignition"],
      ["Geofences", "Unlimited"],
      ["Battery backup", "Yes"],
      ["Install time", "< 15 min"],
    ],
  },
  {
    tab: "Bike",
    name: "Bike",
    image: bikeImg,
    desc: "Lightweight trackers for motorbikes with tamper detection and long battery life.",
    features: ["Compact hidden tracker", "Tamper & motion alerts", "Low-battery notifications"],
    specs: [
      ["Tracker", "Wired micro-GPS"],
      ["Update rate", "Every 10 sec"],
      ["Sensors", "Motion, tilt"],
      ["Geofences", "Unlimited"],
      ["Battery backup", "Yes"],
      ["Install time", "< 20 min"],
    ],
  },
  {
    tab: "Heavy Trucks",
    name: "Heavy Trucks",
    image: truckImg,
    desc: "Rugged tracking for long-haul trucks with fuel and cargo monitoring.",
    features: ["Fuel & idling monitoring", "Route & ETA tracking", "Driver behaviour reports"],
    specs: [
      ["Tracker", "Hardwired industrial"],
      ["Update rate", "Every 5 sec"],
      ["Sensors", "Fuel, temp, door"],
      ["Geofences", "Unlimited"],
      ["Battery backup", "Yes"],
      ["Install time", "< 30 min"],
    ],
  },
  {
    tab: "Bus / Van",
    name: "Bus / Van",
    image: busImg,
    desc: "Fleet visibility for buses and vans with passenger and cargo safety in mind.",
    features: ["Live fleet map view", "Stop-by-stop history", "Door & cargo sensors"],
    specs: [
      ["Tracker", "OBD-II plug"],
      ["Update rate", "Every 5 sec"],
      ["Sensors", "Door, temp, fuel"],
      ["Geofences", "Unlimited"],
      ["Battery backup", "Yes"],
      ["Install time", "< 20 min"],
    ],
  },
];

export default function Vehicles() {
  const [active, setActive] = useState(0);
  const v = vehicles[active];

  return (
    <section id="vehicles" className="bg-brand-cloud py-20 md:py-28">
      <div className="container-tp">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Premium tracking for every asset, worldwide</span>
          <h2 className="section-heading mx-auto mt-4 max-w-2xl">
            Track cars, vans and trucks: a wide range of{" "}
            <Underlined className="text-brand-ink">vehicles</Underlined>
          </h2>
        </div>

        {/* tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 sm:flex-nowrap">
          {vehicles.map((item, i) => (
            <button
              key={item.tab}
              onClick={() => setActive(i)}
              className={`flex min-h-16 flex-1 items-center justify-center gap-4 rounded-xl border-2 px-5 py-3 font-semibold transition ${
                i === active
                  ? "border-brand-orange bg-brand-orange/5 text-brand-ink"
                  : "border-brand-ink/10 bg-white text-brand-ink/70 hover:bg-white"
              }`}
            >
              <span>{item.tab}</span>
              <img src={item.image} alt="" className="h-12 w-auto object-contain md:h-14" />
            </button>
          ))}
        </div>

        {/* detail */}
        <div className="mt-8 grid items-center gap-8 rounded-xl2 bg-white p-6 sm:p-10 lg:grid-cols-[0.85fr_1fr_0.85fr]">
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

          <div className="flex justify-center overflow-hidden py-6">
            <img
              key={active}
              src={v.image}
              alt={v.name}
              className="max-h-72 w-auto object-contain"
              style={{ animation: "slideFadeIn 0.4s ease-out" }}
            />
          </div>

          <div className="rounded-2xl bg-brand-ink p-7 text-white">
            <dl className="divide-y divide-dashed divide-white/15">
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
