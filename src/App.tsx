import Navbar from "components/layout/Navbar";
import Content from "~/components/layout/Content";
import HeroSection from "components/sections/HeroSection";
import AboutSection from "components/sections/AboutSection";
import ServicesSection from "components/sections/ServicesSection";
import ContactSection from "components/sections/ContactSection";
import Footer from "components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Content>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </Content>
    </>
  );
}

export default App;
