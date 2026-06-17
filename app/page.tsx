import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Courses from "./components/Courses";
import Parallax from "./components/Parallax";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Parallax />
      <Courses />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
