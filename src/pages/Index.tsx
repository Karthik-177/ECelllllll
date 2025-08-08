import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import UpcomingEvents from "@/components/UpcomingEvents";
import GuidingForce from "@/components/GuidingForce";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
      <UpcomingEvents />
      <GuidingForce />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
