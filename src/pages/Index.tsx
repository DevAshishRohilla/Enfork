import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreIndustries from "@/components/CoreIndustries";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQs";
import Projects from "@/components/Projects";
import OurVentures from "@/components/OurVentures";
const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <div
        style={{ backgroundImage: "url('./ha bg.png')" }}
        className="relative pt-24 sm:pt-28 lg:pt-32 py-4 sm:py-14 lg:py-16  overflow-hidden bg-cover bg-center bg-no-repeat"
      >
        <Hero />
        <About />
      </div>
      <CoreIndustries />
      <OurVentures />
      <Testimonials />
      <div
        style={{ backgroundImage: "url('./faq bg.png')" }}
        className="relative -mt-24 sm:0 overflow-hidden bg-cover bg-bottom bg-no-repeat"
      >
        <FAQs />
      </div>
    </div>
  );
};

export default Index;
