import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

// Because this file is app/landing/page.tsx, it is shown at the URL "/landing".
// We build the page by stacking the smaller components on top of each other.
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
