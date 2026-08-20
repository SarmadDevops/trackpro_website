import Underlined from "../components/Underlined";
import HashLink from "../components/HashLink";
import {
  IconSpeed,
  IconStar,
  IconBell,
  IconShield,
  IconSearch,
  IconChart,
  IconPin,
} from "../components/icons";

const stats = [
  { value: "12k+", label: "Vehicles Tracked" },
  { value: "99.6%", label: "Platform Uptime" },
  { value: "24/7", label: "Control Room Support" },
  { value: "50+", label: "Cities Covered" },
];

const values = [
  {
    icon: IconSpeed,
    title: "Real-Time Accuracy",
    desc: "Sub-second GPS updates so you always see where a vehicle actually is.",
  },
  {
    icon: IconBell,
    title: "24/7 Monitoring",
    desc: "Our control room and alerting never sleep — neither does your fleet.",
  },
  {
    icon: IconShield,
    title: "Data Security & Privacy",
    desc: "Encrypted in transit and at rest, with role-based access to your data.",
  },
  {
    icon: IconSearch,
    title: "Recovery Assistance",
    desc: "If a vehicle goes missing, our team helps coordinate rapid recovery.",
  },
  {
    icon: IconChart,
    title: "Easy Web & Mobile Access",
    desc: "One clean dashboard and app — no training required to get started.",
  },
  {
    icon: IconPin,
    title: "Local Support (Lahore-based)",
    desc: "A Pakistan-based team that understands local roads and fleets.",
  },
];

const departments = ["Engineering", "Control Room", "Field Support", "Customer Success"];

export default function About() {
  return (
    <main>
      {/* hero */}
      <section className="relative overflow-hidden bg-brand-ink py-20 text-white md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[560px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-orange/10 blur-[120px]"
        />
        <div className="container-tp">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">About TrackPro</span>
            <h1 className="section-heading mx-auto mt-4 max-w-2xl">
              Tracking that keeps Pakistan{" "}
              <Underlined className="text-brand-orange">moving</Underlined>
            </h1>
            <p className="mt-6 text-white/65">
              TrackPro Systems Private Limited is a GPS vehicle-tracking and
              fleet-intelligence company based in Lahore, helping vehicle owners and fleet
              operators see, secure, and manage every vehicle in real time.
            </p>
          </div>
        </div>
      </section>

      {/* our story */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-tp grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <h2 className="section-heading">Our story</h2>
          <div className="space-y-5 text-brand-ink/65">
            <p>
              TrackPro was founded on a simple idea: every vehicle owner and fleet
              operator deserves to know exactly where their vehicles are, at all times,
              without guesswork. What started as straightforward GPS tracking grew out of
              real conversations with drivers, dispatchers, and fleet managers who needed
              more than a blinking dot on a map.
            </p>
            <p>
              Today TrackPro is a full platform — live multi-layer maps, instant alerts,
              trip and history reporting, recovery assistance, and a 24/7 control room —
              built to give our customers real security and real visibility, not just
              data. We&rsquo;re still based where we started, in Lahore, and still building
              for the roads we know best.
            </p>
          </div>
        </div>
      </section>

      {/* mission & vision */}
      <section className="bg-brand-cloud py-20 md:py-28">
        <div className="container-tp">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">What drives us</span>
            <h2 className="section-heading mx-auto mt-4 max-w-2xl">
              Our mission &amp; <Underlined className="text-brand-ink">vision</Underlined>
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-brand-mist bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <IconSpeed className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-brand-ink">Our Mission</h3>
              <p className="mt-3 text-brand-ink/60">
                To make every vehicle traceable, secure, and efficient — giving owners and
                fleets reliable real-time tracking they can build their operations around.
              </p>
            </div>

            <div className="rounded-2xl border border-brand-mist bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <IconStar className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-bold text-brand-ink">Our Vision</h3>
              <p className="mt-3 text-brand-ink/60">
                To be Pakistan&rsquo;s most trusted vehicle-tracking and fleet-intelligence
                platform — the first name that comes to mind when a vehicle needs to be
                found, secured, or understood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* stats strip */}
      <section className="bg-brand-ink py-16 text-white">
        <div className="container-tp">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-4xl font-extrabold text-brand-orange sm:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/55">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* why choose us */}
      <section className="bg-white py-20 md:py-28">
        <div className="container-tp">
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">Why choose us</span>
            <h2 className="section-heading mx-auto mt-4 max-w-2xl">
              Built for people who need to{" "}
              <Underlined className="text-brand-ink">know</Underlined>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <article
                  key={v.title}
                  className="rounded-2xl border border-brand-mist bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-xl"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-brand-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-ink/55">{v.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* team teaser */}
      <section className="bg-brand-cloud py-16 md:py-20">
        <div className="container-tp text-center">
          <h2 className="font-display text-2xl font-bold text-brand-ink sm:text-3xl">
            Backed by a dedicated team
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-brand-ink/60">
            Engineers, control-room operators, and field-support staff working together
            every day to keep your vehicles visible and your alerts real.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {departments.map((d) => (
              <span
                key={d}
                className="rounded-full border border-brand-mist bg-white px-5 py-2 text-sm font-semibold text-brand-ink/70"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-white pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="container-tp">
          <div className="rounded-xl2 bg-brand-ink px-6 py-14 text-center text-white sm:px-12 md:py-20">
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl">
              Ready to track your fleet with confidence?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/65">
              See TrackPro live on your own vehicles — no card required to get started.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <HashLink href="#demo" className="btn-primary">
                Request a demo
              </HashLink>
              <HashLink
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3 font-display font-semibold text-white transition-colors hover:bg-white/10"
              >
                Contact us
              </HashLink>
            </div>

            <p className="mt-8 text-sm text-white/45">
              425-K Block, Model Town, Lahore ·{" "}
              <a href="tel:+924235774335" className="hover:text-white">
                042-35774335-7
              </a>{" "}
              ·{" "}
              <a href="mailto:info@trackpro.com.pk" className="hover:text-white">
                info@trackpro.com.pk
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
