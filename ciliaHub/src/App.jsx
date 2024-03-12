import { useRef } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Footer from "./components/Footer";
function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar onSectionClick={(sectionRef) => scrollToSection(sectionRef)} />
      <Home ref={section1Ref} />
      <About ref={section2Ref} />
      <Services ref={section3Ref} />
      <Contact ref={section4Ref} />
      <Footer />
    </>
  );
}

export default App;
