import { useState } from "react";
import Underlined from "./Underlined";
import { IconPin, IconArrow } from "./icons";

const locations = ["Islamabad HQ", "Lahore Station", "Karachi Station"];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-brand-ink py-24 text-white">
      <div className="container-tp grid gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Contact us</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
            Let&rsquo;s connect{" "}
            <Underlined className="text-brand-orange">with us</Underlined>
          </h2>
          <p className="mt-6 max-w-md text-white/65">
            Tell us about your fleet and we&rsquo;ll show you exactly how TrackPro fits.
            Pick a station or drop us a message.
          </p>

          <div className="mt-8 max-w-md">
            <label htmlFor="loc" className="sr-only">Select a location</label>
            <select
              id="loc"
              className="w-full rounded-xl border border-white/15 bg-brand-coal px-5 py-4 text-white outline-none focus:border-brand-orange"
              defaultValue=""
            >
              <option value="" disabled>Please select a location</option>
              {locations.map((l) => (
                <option key={l} className="text-brand-ink">{l}</option>
              ))}
            </select>
          </div>

          <div className="mt-8 space-y-5">
            <Station title="Our Station #1" addr="18C Nawab Town, Raiwind Road" />
            <Station title="Our Station #2" addr="Blue Area, Jinnah Avenue, Islamabad" />
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="rounded-xl2 border border-white/10 bg-brand-coal p-6 sm:p-8"
        >
          {sent ? (
            <div className="grid h-full place-items-center py-16 text-center">
              <div>
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </div>
                <h3 className="mt-5 text-xl font-bold">Message sent</h3>
                <p className="mt-2 text-white/60">We&rsquo;ll get back to you shortly.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="first" placeholder="First name" required />
                <Input name="last" placeholder="Last name" required />
              </div>
              <Input name="email" type="email" placeholder="Email" required />
              <Input name="phone" type="tel" placeholder="Phone number" />
              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                className="w-full rounded-xl border border-white/15 bg-brand-ink px-5 py-3.5 text-white outline-none placeholder:text-white/40 focus:border-brand-orange"
              />
              <button type="submit" className="btn-primary w-full">
                Contact us <IconArrow className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Station({ title, addr }) {
  return (
    <div className="flex items-start gap-4">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-white text-brand-orange">
        <IconPin className="h-5 w-5" />
      </span>
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-white/55">{addr}</div>
      </div>
    </div>
  );
}

function Input({ name, type = "text", placeholder, required }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-xl border border-white/15 bg-brand-ink px-5 py-3.5 text-white outline-none placeholder:text-white/40 focus:border-brand-orange"
    />
  );
}
