import Navbar from "components/layout/Navbar";
import HeroSection from "components/sections/HeroSection";
import AboutSection from "components/sections/AboutSection";
import ServicesSection from "components/sections/ServicesSection";
import ContactSection from "components/sections/ContactSection";
import Footer from "components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollBehavior: "smooth",
          scrollSnapType: "y mandatory",
        }}
      >
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
