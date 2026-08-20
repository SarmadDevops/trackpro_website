import Hero from "../components/Hero";
import LiveFleet from "../components/LiveFleet";
import Services from "../components/Services";
// import Fleet from "../components/Fleet";
import HowItWorks from "../components/HowItWorks";
import Stats from "../components/Stats";
import Benefits from "../components/Benefits";
import Vehicles from "../components/Vehicles";
import Testimonials from "../components/Testimonials";
import AppCTA from "../components/AppCTA";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <LiveFleet /> */}
      <Vehicles />
      <Services />
      {/* <Fleet /> */}
      <HowItWorks />
      <Stats />
      <Benefits />
      <Testimonials />
      <AppCTA />
      <Contact />
      <FAQ />
    </main>
  );
}
