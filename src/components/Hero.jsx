import { useState } from "react";
import Underlined from "./Underlined";

const fleetSizes = ["1–10 vehicles", "11–50 vehicles", "51–200 vehicles", "200+ vehicles"];

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="top" className="relative overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-70"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/90 to-brand-ink/50" />
      </div>

      <div className="container-tp relative grid gap-12 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-40">
        <div>
          {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            Real-time fleet intelligence
          </span> */}

          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl">
            Know where every
            <br />
            vehicle is,{" "}
            <Underlined className="text-brand-orange">right now</Underlined>
          </h1>

          <p className="mt-9 max-w-md text-lg text-white/75">
            Live GPS tracking, driver behaviour, and fleet health in one platform.
            Sub-second location, historical routes, and instant alerts.
          </p>

          <ul className="mt-8 space-y-3 text-white/85">
            {[
              "Sub-second live location & speed",
              "Route history and geofence alerts",
              "Works with your existing GPS hardware",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" className="h-5 w-5 flex-none text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div id="demo" className="rounded-xl2 bg-white p-6 text-brand-ink shadow-card sm:p-8">
          {submitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-orange/15 text-brand-orange">
                <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </div>
              <h3 className="mt-5 text-xl font-bold">Request received</h3>
              <p className="mt-2 text-brand-ink/60">
                Our team will reach out within one business day to set up your demo.
              </p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold">Request a demo</h2>
              <p className="mt-1 text-sm text-brand-ink/55">
                See TrackPro live on your own fleet. No card required.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" name="name" placeholder="Sarmad Raza" required />
                  <Field label="Work email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <Field label="Company" name="company" placeholder="Your company" required />
                <div>
                  <label htmlFor="fleet" className="mb-1.5 block text-sm font-medium text-brand-ink/70">
                    Fleet size
                  </label>
                  <select
                    id="fleet"
                    name="fleet"
                    className="w-full rounded-xl border border-brand-mist bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                    defaultValue={fleetSizes[0]}
                  >
                    {fleetSizes.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Book my demo
                </button>
                <p className="text-center text-xs text-brand-ink/45">
                  By submitting you agree to our privacy policy.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-ink/70">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-brand-mist bg-white px-4 py-3 text-sm outline-none transition placeholder:text-brand-ink/35 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
      />
    </div>
  );
}
