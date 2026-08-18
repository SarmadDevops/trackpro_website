import Underlined from "./Underlined";
import { IconSpeed, IconPin, IconArrow } from "./icons";

const vehicles = [
  { name: "R1 Yamaha", img: "/vehicles/yamaha.png", tint: "bg-[#FBF6E9]", speed: "62 km/h", status: "Online" },
  { name: "Mercedes GLK", img: "/vehicles/mercedes.png", tint: "bg-[#FCEEE9]", speed: "48 km/h", status: "Online" },
  { name: "Audi A1 S-Line", img: "/vehicles/audi.png", tint: "bg-[#EAF1FB]", speed: "0 km/h", status: "Idle" },
  { name: "BMW 320i", img: "/vehicles/bmw.png", tint: "bg-[#F1F1F1]", speed: "75 km/h", status: "Online" },
];

const IconFlame = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2c1 3-2 4.5-2 7a2 2 0 0 0 4 0c1.5 1.2 2 3 2 4.5A5.5 5.5 0 0 1 6.5 19c0-3.5 2-5 2.5-8-1.5.5-2.5 2-2.5 2C6 9 8.5 4 12 2Z" />
  </svg>
);

export default function LiveFleet() {
  return (
    <section id="live-fleet" className="bg-white py-24">
      <div className="container-tp">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Your fleet, live</span>
          <h2 className="section-heading mt-4">
            Track every vehicle in real <Underlined className="text-brand-ink">time</Underlined>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((v) => (
            <article
              key={v.name}
              className={`flex flex-col rounded-2xl ${v.tint} p-6 transition-transform hover:-translate-y-1`}
            >
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-orange px-3 py-1 text-xs font-semibold text-white">
                <IconFlame className="h-3.5 w-3.5" /> Live now
              </span>

              <div className="my-8 grid h-36 place-items-center">
                <img
                  src={v.img}
                  alt={v.name}
                  className="h-36 w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              <h3 className="text-lg font-bold text-brand-ink">{v.name}</h3>
              <div className="mt-3 flex gap-6 text-sm text-brand-ink/60">
                <div className="inline-flex items-center gap-1.5">
                  <IconSpeed className="h-4 w-4" /> {v.speed}
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <IconPin
                    className={`h-4 w-4 ${
                      v.status === "Online" ? "text-emerald-500" : "text-brand-ink/40"
                    }`}
                  />
                  <span className={v.status === "Online" ? "text-emerald-600 font-medium" : ""}>
                    {v.status}
                  </span>
                </div>
              </div>

              <a
                href="#demo"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:gap-2.5"
              >
                Track now <IconArrow className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
