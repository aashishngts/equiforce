import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="relative min-h-screen bg-[#eefbff] overflow-hidden">
      {/* 🌈 Soft Gradient Blobs (BEHIND CONTENT) */}
      <div className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] bg-[#00C2CB] opacity-20 blur-[120px] rounded-full"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#a78bfa] opacity-20 blur-[120px] rounded-full"></div>

      {/* ✅ CONTENT */}
      <div className="relative z-10">
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
