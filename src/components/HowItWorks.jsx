import Underlined from "./Underlined";
import mobileImg from "../assets/mobile.png";
import locationImg from "../assets/location.png";
import callImg from "../assets/call.png";

const steps = [
  {
    n: "Step 1",
    img: mobileImg,
    title: "Connect your devices",
    desc: "Pair your existing GPS trackers or OBD dongles in minutes. TrackPro auto-detects hardware and starts streaming location instantly.",
  },
  {
    n: "Step 2",
    img: locationImg,
    title: "See everything live",
    desc: "Watch every vehicle move on one real-time map with speed, status, and geofence alerts — from any browser or the mobile app.",
  },
  {
    n: "Step 3",
    img: callImg,
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
            return (
              <div
                key={s.n}
                className="flex h-full flex-col rounded-2xl bg-white/60 p-8 text-center transition-all duration-300 hover:-translate-y-3 hover:bg-white hover:shadow-card"
              >
                <img src={s.img} alt={s.title} className="mx-auto h-24 w-24 object-contain md:h-28 md:w-28" />
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
