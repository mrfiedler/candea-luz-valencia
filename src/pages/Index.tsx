import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Ritual from "@/components/Ritual";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Ritual />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
