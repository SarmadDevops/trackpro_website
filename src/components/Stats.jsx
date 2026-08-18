import Underlined from "./Underlined";

const bullets = [
  "One live map for every vehicle, driver, and route.",
  "Instant alerts for speeding, geofence exits, and idling.",
  "Historical playback of any trip, down to the second.",
  "Reports that turn telemetry into real cost savings.",
];

export default function Stats() {
  return (
    <section className="bg-brand-ink py-24 text-white">
      <div className="container-tp grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-xl2 bg-brand-coal">
            <img
              src="/stats.jpg"
              alt="Fleet operators using TrackPro"
              className="h-[420px] w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.parentElement.classList.add("grid", "place-items-center");
                e.currentTarget.parentElement.insertAdjacentHTML(
                  "beforeend",
                  '<span class="text-white/25 text-sm p-10 text-center">Add /stats.jpg to public/</span>'
                );
              }}
            />
          </div>

          <div className="absolute bottom-6 left-6 flex gap-8 rounded-2xl bg-brand-ink/80 px-7 py-5 backdrop-blur">
            <div>
              <div className="font-display text-4xl font-extrabold">
                12k<span className="text-brand-orange">+</span>
              </div>
              <div className="mt-1 text-xs text-white/60">Vehicles tracked</div>
            </div>
            <div className="w-px bg-white/15" />
            <div>
              <div className="font-display text-4xl font-extrabold">
                99.6<span className="text-brand-orange">%</span>
              </div>
              <div className="mt-1 text-xs text-white/60">Signal uptime</div>
            </div>
          </div>
        </div>

        <div>
          <span className="eyebrow">Built for operators</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
            Find your vehicle{" "}
            <Underlined className="text-brand-orange">from here</Underlined>
          </h2>
          <p className="mt-6 text-white/65">
            TrackPro replaces spreadsheets and guesswork with a single live view of your
            operation. Whether you run four vehicles or four hundred, you always know where
            they are, how they are driven, and what they cost.
          </p>

          <ul className="mt-8 space-y-4">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/85">
                <span className="mt-1.5 h-2 w-2 flex-none rounded-sm bg-brand-orange" />
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
