import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Ritual from "@/components/Ritual";
import VideoGallery from "@/components/VideoGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Gallery />
        <Ritual />
        <VideoGallery />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default Index;
