import Underlined from "./Underlined";
import pakMap from "../assets/pakistan-map.jpg";

const bullets = [
  "One live map for every vehicle, driver, and route.",
  "Instant alerts for speeding, geofence exits, and idling.",
  "Historical playback of any trip, down to the second.",
  "Reports that turn telemetry into real cost savings.",
];

const vehicleChips = [
  { label: "Truck-402", speed: "62 km/h", dot: "bg-emerald-400", top: "20%", left: "76%" },
  { label: "Van-118", speed: "0 km/h · Idle", dot: "bg-white/40", top: "48%", left: "12%" },
  { label: "Car-77", speed: "48 km/h", dot: "bg-emerald-400", top: "72%", left: "56%", mobile: false },
];

function VehicleChip({ label, speed, dot, top, left, mobile = true }) {
  return (
    <div
      style={{ top, left }}
      className={`absolute flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.06] px-3 py-1.5 backdrop-blur-md ${
        mobile ? "flex" : "hidden sm:flex"
      }`}
    >
      <span className={`h-1.5 w-1.5 flex-none animate-pulse rounded-full ${dot}`} />
      <span className="text-[11px] font-medium text-white/90 sm:text-xs">
        {label} <span className="text-white/40">·</span> {speed}
      </span>
    </div>
  );
}

function KpiPill({ value, suffix, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 backdrop-blur-md">
      <span className="font-display text-lg font-extrabold text-white">
        {value}
        <span className="text-brand-orange">{suffix}</span>
      </span>
      <span className="text-[11px] text-white/50">{label}</span>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="bg-brand-ink py-24 text-white">
      <div className="container-tp grid items-center gap-14 lg:grid-cols-2">
        <div>
          <div className="relative mx-auto mb-8 max-w-md sm:mb-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
            >
              <div className="aspect-square w-[85%] animate-pulse rounded-full bg-brand-orange/[0.15] blur-3xl [animation-duration:4s]" />
            </div>

            <img
              src={pakMap}
              alt="Pakistan coverage map"
              className="h-auto w-full object-contain"
            />


            {vehicleChips.map((v) => (
              <VehicleChip key={v.label} {...v} />
            ))}

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4 sm:absolute sm:-bottom-5 sm:left-4 sm:justify-start sm:pt-0">
              <KpiPill value="12k" suffix="+" label="Vehicles" />
              <KpiPill value="99.6" suffix="%" label="Uptime" />
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Built for operators</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
            Find your vehicle{" "}
            <Underlined className="text-brand-orange">from here</Underlined>
          </h2>
          <p className="mt-16 text-white/65">
            TrackPro replaces spreadsheets and guesswork with a single live view of your
            operation. Whether you run four vehicles or four hundred, you always know where
            they are, how they are driven, and what they cost.
          </p>

          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-white/85">
                <span className="grid h-6 w-6 flex-none place-items-center rounded-md bg-brand-orange/15 text-brand-orange">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
