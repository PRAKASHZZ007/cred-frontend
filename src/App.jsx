import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import NeoPop from "./components/NeoPop";
import Testimonials from "./components/Testimonials";
import Security from "./components/Security";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <About />
      <Features />
      <NeoPop />
      <Testimonials />
      <Security />
      <Footer />
    </div>
  );
}