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
    <footer className="py-12 md:py-16 lg:py-20  rounded-3xl mx-4 md:mx-6 lg:mx-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start pb-12 border-b border-gray-200">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Bring your website <br className="hidden sm:block" />
              idea to life by guided <br className="hidden sm:block" />
              SaaS assistance
            </h2>

            <button
              className="bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] 
hover:shadow-lg hover:shadow-cyan-400/40 text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
            >
              Get Started With Us
            </button>
          </div>

          {/* RIGHT LINKS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-600 text-sm text-center md:text-left">
            {/* Product */}
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>Documentation</li>
                <li>Changelog</li>
                <li>Pricing</li>
                <li>Parsers</li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  SDTF
                  <span className="text-xs bg-[#0ea5a4] text-white px-2 py-0.5 rounded-full">
                    NEW
                  </span>
                </li>
                <li>Use Cases</li>
                <li>Launch Week</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-gray-900 font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>Guide</li>
                <li>Blog</li>
                <li>Customers</li>
                <li>Help Center</li>
              </ul>
            </div>

            {/* Links */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-gray-900 font-semibold mb-4">Links</h4>
              <ul className="space-y-2">
                <li>Press kit</li>
                <li>Climate</li>
                <li>Jobs</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="relative pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          {/* LEFT */}
          <div className="flex gap-4 sm:gap-6 flex-wrap justify-center md:justify-start">
            <span>Privacy policy</span>
            <span>Terms of use</span>
            <span>Security</span>
          </div>

          {/* CENTER SCROLL BUTTON */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-12 h-12 flex items-center justify-center rounded-full 
  bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] 
  hover:shadow-lg hover:shadow-cyan-400/40 text-white shadow-lg 
  hover:scale-110 transition"
            >
              <FiArrowUp />
            </button>
          </div>

          {/* RIGHT */}
          <p className="text-center md:text-right">
            ©2025 <span className="font-semibold">EquiForce</span> · All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
