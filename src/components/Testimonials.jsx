import { useState } from "react";
import Underlined from "./Underlined";
import { IconArrow, IconStar } from "./icons";

const reviews = [
  {
    quote:
      "TrackPro paid for itself in the first month. We spotted idle time we didn't know existed and cut our fuel bill by nearly a fifth across the whole fleet.",
    name: "Anderson Rabmi",
    role: "Operations Director, MetroLogistics",
  },
  {
    quote:
      "Setup took an afternoon. The trackers paired with our existing hardware and now dispatch can see every van live without calling drivers to ask where they are.",
    name: "Sana Iqbal",
    role: "Fleet Manager, QuickCargo",
  },
  {
    quote:
      "The driver scorecards changed how our team drives. Harsh braking is down, our insurance renewal was easier, and everyone can see their own trips.",
    name: "David Okoro",
    role: "Safety Lead, Northline Haulage",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const r = reviews[i];
  const prev = () => setI((v) => (v - 1 + reviews.length) % reviews.length);
  const next = () => setI((v) => (v + 1) % reviews.length);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-tp">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-heading mt-4">
              What people say{" "}
              <Underlined className="text-brand-ink">about us</Underlined>
            </h2>

            <div className="mt-20 inline-flex items-center gap-3 rounded-2xl bg-brand-cloud px-5 py-3">
              <span className="font-display font-bold text-brand-ink">Google Reviews</span>
              <span className="flex text-brand-orange">
                {[...Array(5)].map((_, k) => (
                  <IconStar key={k} className="h-4 w-4" />
                ))}
              </span>
              <span className="text-sm font-semibold text-brand-ink/70">(5.0)</span>
            </div>
          </div>

          <div>
            <div className="h-px w-full bg-brand-mist" />
            <blockquote className="mt-8 text-2xl font-medium leading-relaxed text-brand-ink">
              &ldquo;{r.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-orange/15 font-bold text-brand-orange">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <div className="font-bold text-brand-ink">{r.name}</div>
                  <div className="text-sm text-brand-ink/55">{r.role}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-brand-ink/50">
                  {i + 1} / {reviews.length}
                </span>
                <button onClick={prev} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-brand-mist text-brand-ink transition hover:bg-brand-cloud">
                  <IconArrow className="h-5 w-5 rotate-180" />
                </button>
                <button onClick={next} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-brand-mist text-brand-ink transition hover:bg-brand-cloud">
                  <IconArrow className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
