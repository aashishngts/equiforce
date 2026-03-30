import React from "react";

import icon1 from "../../assets/images/ani-image1.webp";
import icon2 from "../../assets/images/ani-image2.webp";
import icon3 from "../../assets/images/ani-image3.webp";
import icon4 from "../../assets/images/ani-image4.webp";

function Hero() {
  return (
    <>
      <section className="relative overflow-hidden flex items-center min-h-[90vh] pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20">
        {/* Floating Icons */}
        <img
          src={icon1}
          className="absolute top-20 left-10 w-10 md:w-12 animate-float"
          data-aos="fade-down"
          data-aos-delay="100"
        />
        <img
          src={icon2}
          className="absolute bottom-20 left-20 md:left-28 w-12 md:w-14 animate-float delay-200"
          data-aos="fade-up"
          data-aos-delay="300"
        />
        <img
          src={icon3}
          className="absolute top-32 right-10 md:right-20 w-10 md:w-12 animate-float delay-500"
          data-aos="fade-down"
          data-aos-delay="500"
        />
        <img
          src={icon4}
          className="absolute bottom-16 right-10 md:right-24 w-12 md:w-14 animate-float delay-700"
          data-aos="fade-up"
          data-aos-delay="700"
        />

        {/* Background Wave */}
        <img
          src="/src/assets/images/bg-wave.png"
          className="absolute bottom-0 left-0 w-full opacity-40 pointer-events-none"
        />

        {/* Glow Effects */}
        <div className="absolute top-20 left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#00C2CB] opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-[#007CF0] opacity-20 blur-[120px] rounded-full"></div>

        {/* ✅ Container */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            {/* Tag */}
            <div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="bg-[#00C2CB] text-white px-2 py-1 rounded-full text-xs">
                Platform
              </span>
              Manage Investments. Deliver Precision.
            </div>

            {/* Heading */}
            <h1
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-4 md:mb-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Modern Platform for Investment Management
            </h1>

            {/* Description */}
            <p
              className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              EquiForce Solutions empowers investment management firms with
              purpose-built solutions for performance measurement, composite
              management, fund accounting, reconciliation, and investment
              reporting — enhanced by AI-driven intelligence.
            </p>

            {/* Input + CTA */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <button className="w-full sm:w-auto bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
