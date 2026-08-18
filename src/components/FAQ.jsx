import { useState } from "react";
import Underlined from "./Underlined";

const faqs = [
  {
    q: "How does TrackPro get vehicle locations?",
    a: "TrackPro connects to GPS trackers or OBD dongles in your vehicles and streams their location to your dashboard in real time — usually every 3 to 10 seconds depending on the device.",
  },
  {
    q: "Do I need to buy new hardware?",
    a: "Not always. TrackPro works with most standard GPS and OBD-II trackers you may already have. If you need devices, we can recommend and supply compatible ones.",
  },
  {
    q: "How long does setup take?",
    a: "Plug-in OBD trackers take under five minutes per vehicle and start reporting immediately. Hardwired truck installs are done by a technician and are usually same-day.",
  },
  {
    q: "Can I see a vehicle's past trips?",
    a: "Yes. Every trip is stored and can be played back second-by-second, with stops, speed, and route history available for any date range.",
  },
  {
    q: "How do geofence and speeding alerts work?",
    a: "You draw zones on the map and set speed limits. When a vehicle enters or leaves a zone or exceeds a limit, TrackPro notifies you instantly by app, email, or SMS.",
  },
  {
    q: "Is my fleet data secure?",
    a: "All data is encrypted in transit and at rest. Access is role-based, so drivers, managers, and admins only see what they're permitted to.",
  },
  {
    q: "Can TrackPro track driver behaviour?",
    a: "Yes. It scores harsh braking, rapid acceleration, speeding, and idling per driver, giving you objective scorecards to coach your team.",
  },
  {
    q: "Does it work outside my city or country?",
    a: "TrackPro tracks vehicles anywhere with cellular coverage, so cross-city and cross-border fleets stay visible on the same map.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const mid = Math.ceil(faqs.length / 2);
  const cols = [faqs.slice(0, mid), faqs.slice(mid)];

  return (
    <section id="faq" className="bg-brand-cloud py-20 md:py-28">
      <div className="container-tp">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Frequently asked questions</span>
          <h2 className="section-heading mx-auto mt-4 max-w-2xl">
            Tracking with TrackPro: guide &amp;{" "}
            <Underlined className="text-brand-ink">FAQs</Underlined>
          </h2>
        </div>

        <div className="mt-14 grid items-start gap-4 lg:grid-cols-2">
          {cols.map((col, ci) => (
            <div key={ci} className="space-y-4">
              {col.map((item, ii) => {
                const idx = ci * mid + ii;
                const isOpen = open === idx;
                return (
                  <div key={item.q} className="overflow-hidden rounded-2xl bg-white">
                    <button
                      onClick={() => setOpen(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="font-semibold text-brand-ink">{item.q}</span>
                      <span className="grid h-6 w-6 flex-none place-items-center text-brand-orange">
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
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
          ))}
        </div>
      </div>
    </section>
  );
}
