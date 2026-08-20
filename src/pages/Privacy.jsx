import { Link } from "react-router-dom";
import { IconArrow } from "../components/icons";

const sections = [
  {
    title: "1. Who we are",
    body: (
      <>
        <p>
          TrackPro Systems Private Limited (&ldquo;TrackPro&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a GPS vehicle-tracking and fleet
          intelligence company headquartered at 425-K Block, Model Town, Lahore, Pakistan.
          This Privacy Policy explains what information we collect when you use our
          tracking devices, web dashboard, and mobile applications (together, the
          &ldquo;Services&rdquo;), how we use it, and the choices you have.
        </p>
        <p>
          By installing a TrackPro device or using our Services, you agree to the
          collection and use of information as described in this policy.
        </p>
      </>
    ),
  },
  {
    title: "2. Information we collect",
    body: (
      <>
        <p>We collect the following categories of information:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Account information</strong> — name, company name, email address,
            phone number, billing address, and any details you provide when requesting a
            demo or creating an account.
          </li>
          <li>
            <strong>Vehicle &amp; GPS location data</strong> — real-time and historical
            location, speed, ignition status, routes, geofence events, and diagnostic
            codes reported by installed tracking hardware.
          </li>
          <li>
            <strong>Device data</strong> — tracker hardware ID, SIM/network identifiers,
            battery and tamper-sensor status, and firmware version.
          </li>
          <li>
            <strong>Usage data</strong> — how you interact with our dashboard and mobile
            app, including login times, pages viewed, and support requests.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. How we use your information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Provide real-time and historical vehicle tracking services;</li>
          <li>Send ignition, geofence, tamper, and maintenance alerts;</li>
          <li>Respond to support requests and provide recovery assistance;</li>
          <li>Maintain, secure, and improve the accuracy and reliability of our Services;</li>
          <li>Communicate service updates, billing notices, and product information.</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Location data specifically",
    body: (
      <>
        <p>
          Location data is core to how TrackPro works. Your device reports GPS
          coordinates to our platform at regular intervals so that live position, speed,
          and trip history can be shown on your dashboard. Historical location and trip
          data is stored so you can review past routes, generate reports, and investigate
          incidents such as theft or unauthorized use.
        </p>
        <p>
          We retain detailed location history for the period set out in your service
          plan (typically up to 12 months), after which older records are aggregated or
          deleted. You can request an earlier deletion of your historical location data
          by contacting us using the details below.
        </p>
      </>
    ),
  },
  {
    title: "5. Sharing &amp; disclosure",
    body: (
      <>
        <p>
          We do <strong>not</strong> sell your personal or vehicle location data. We may
          share information with:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Trusted service providers who help us operate the Services (e.g. SMS/GSM
            connectivity partners, cloud hosting, payment processing) under confidentiality
            obligations;
          </li>
          <li>
            Law enforcement or regulators when required to comply with a valid legal
            request, protect our rights, or assist in vehicle recovery in the case of
            theft;
          </li>
          <li>A successor entity in the event of a merger, acquisition, or asset sale.</li>
        </ul>
      </>
    ),
  },
  {
    title: "6. Data security",
    body: (
      <p>
        We apply industry-standard safeguards to protect your data, including encryption
        of data in transit and at rest, role-based access controls, and monitoring of our
        control room and cloud infrastructure. No method of transmission or storage is
        100% secure, but we work continuously to protect your information against
        unauthorized access, alteration, or loss.
      </p>
    ),
  },
  {
    title: "7. Data retention",
    body: (
      <p>
        We retain account information for as long as your account is active and as
        needed to provide the Services, comply with our legal obligations, resolve
        disputes, and enforce our agreements. Location and trip history is retained
        according to your service plan as described in Section 4.
      </p>
    ),
  },
  {
    title: "8. Your rights",
    body: (
      <p>
        You may request access to, correction of, or deletion of your personal
        information, and may ask us to export a copy of your data. To exercise any of
        these rights, contact us using the details below and we will respond within a
        reasonable timeframe.
      </p>
    ),
  },
  {
    title: "9. Cookies &amp; analytics",
    body: (
      <p>
        Our website and dashboard use essential cookies to keep you signed in, along
        with limited analytics to understand how our Services are used and to improve
        them. You can control cookies through your browser settings; disabling them may
        affect some site functionality.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <main className="bg-white py-24 text-brand-ink md:py-28">
      <div className="container-tp max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orangeDark"
        >
          <IconArrow className="h-4 w-4 rotate-180" />
          Back to home
        </Link>

        <span className="eyebrow mt-8 block">Legal</span>
        <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.1] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-brand-ink/55">Last updated: August 20, 2026</p>

        <div className="mt-12 space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-xl font-bold text-brand-ink">{s.title}</h2>
              <div className="mt-3 space-y-3 leading-relaxed text-brand-ink/70">{s.body}</div>
            </section>
          ))}

          <section className="rounded-xl2 bg-brand-cloud p-6 sm:p-8">
            <h2 className="text-xl font-bold text-brand-ink">10. Contact us</h2>
            <p className="mt-3 text-brand-ink/70">
              If you have questions about this Privacy Policy or how we handle your
              data, reach out to us:
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-brand-ink/70">
              <div className="font-semibold text-brand-ink">
                TrackPro Systems Private Limited
              </div>
              <div>425-K Block, Model Town, Lahore</div>
              <div>
                <a href="tel:+924235774335" className="hover:text-brand-orange">
                  042-35774335-7
                </a>
              </div>
              <div>
                <a href="mailto:info@trackpro.com.pk" className="hover:text-brand-orange">
                  info@trackpro.com.pk
                </a>
              </div>
            </div>
          </section>
        </div>

        <p className="mt-10 text-xs text-brand-ink/40">
          This policy is provided for general informational purposes and does not
          constitute legal advice.
        </p>
      </div>
    </main>
  );
}
