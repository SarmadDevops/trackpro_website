import Underlined from "./Underlined";
import { IconSpeed, IconPin, IconArrow } from "./icons";

const fleet = [
  { name: "Motorbikes", tag: "Live GPS", devices: "Compact trackers", uptime: "99.2% uptime", tint: "bg-[#FBF6E9]" },
  { name: "SUVs & Sedans", tag: "Most tracked", devices: "OBD + hardwired", uptime: "99.6% uptime", tint: "bg-[#FCEEE9]" },
  { name: "Vans", tag: "Live GPS", devices: "Cargo sensors", uptime: "99.4% uptime", tint: "bg-[#EAF1FB]" },
  { name: "Heavy Trucks", tag: "Fleet grade", devices: "CAN-bus telemetry", uptime: "99.7% uptime", tint: "bg-[#F1F1F1]" },
];

export default function Fleet() {
  return (
    <section id="fleet" className="bg-white py-24">
      <div className="container-tp">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">One platform, every asset</span>
          <h2 className="section-heading mt-4">
            Track any vehicle in your{" "}
            <Underlined className="text-brand-ink">fleet</Underlined>
          </h2>
          <p className="mt-6 text-lg text-brand-ink/60">
            From a single bike to a nationwide truck fleet — TrackPro connects to the hardware
            you already run and brings every asset onto one live map.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((f) => (
            <article
              key={f.name}
              className={`flex flex-col rounded-2xl ${f.tint} p-6 transition-transform hover:-translate-y-1`}
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white">
                <IconPin className="h-3.5 w-3.5" /> {f.tag}
              </span>

              <div className="my-8 grid h-24 place-items-center text-brand-ink/25">
                <IconSpeed className="h-16 w-16" />
              </div>

              <h3 className="text-lg font-bold text-brand-ink">{f.name}</h3>
              <div className="mt-3 space-y-1.5 text-sm text-brand-ink/60">
                <div>{f.devices}</div>
                <div className="font-medium text-brand-ink/80">{f.uptime}</div>
              </div>

              <a
                href="#demo"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:gap-2.5"
              >
                See it live <IconArrow className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
