import { FiArrowUp } from "react-icons/fi";
import { useEffect, useState } from "react";

const Footer = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="py-12 md:py-16 lg:py-20 rounded-3xl mx-4 md:mx-6 lg:mx-10">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start pb-12 border-b border-gray-200">

          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Investment <br className="hidden sm:block" />
              Operations with <br className="hidden sm:block" />
              EquiForce Solutions
            </h2>

            <button
              className="bg-gradient-to-r from-[#d97706] to-[#d97706] 
              hover:shadow-lg hover:shadow-cyan-400/40 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
            >
              Try for Free
            </button>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-600 text-sm text-center md:text-left">

            {/* Solutions */}
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2">
                <li>Performance Measurement</li>
                <li>Composite Management</li>
                <li>Fund Accounting</li>
                <li>Reconciliation</li>
                <li>Investment Reporting</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>About Us</li>
                <li>Our Expertise</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>Case Studies</li>
                <li>Insights & Blog</li>
                <li>Help Center</li>
                <li>Documentation</li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="relative pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">

          {/* LEFT */}
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center md:justify-start">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Security & Compliance</span>
          </div>

          {/* SCROLL BUTTON */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-[#d97706] to-[#d97706] 
              hover:shadow-lg hover:shadow-cyan-400/40 text-white shadow-lg 
              hover:scale-110 transition"
            >
              <FiArrowUp />
            </button>
          </div>

          {/* RIGHT */}
          <p className="text-center md:text-right">
            ©2026 <span className="font-semibold">EquiForce Solutions</span> · All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;