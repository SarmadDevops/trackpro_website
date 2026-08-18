import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LiveFleet from "./components/LiveFleet";
import Services from "./components/Services";
// import Fleet from "./components/Fleet";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Benefits from "./components/Benefits";
import Vehicles from "./components/Vehicles";
import Testimonials from "./components/Testimonials";
import AppCTA from "./components/AppCTA";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LiveFleet />
        <Services />
        {/* <Fleet /> */}
        <HowItWorks />
        <Stats />
        <Benefits />
        <Vehicles />
        <Testimonials />
        <AppCTA />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
