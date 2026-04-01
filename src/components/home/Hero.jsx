import React from "react";
import heroVideo from "../../assets/video/HeroVideo.mp4";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Navy Overlay */}
      <div className="absolute inset-0 bg-[#0a2240]/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="w-full lg:w-[60%] text-white pt-24 md:pt-48">
          <h1
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6"
            data-aos="fade-up"
          >
            Manage Investments. <br />
            Deliver Precision. <br />
          </h1>

          <p
            className="max-w-xl text-lg md:text-xl text-gray-200 leading-7 mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            EquiForce Solutions empowers investment management firms with purpose-built solutions 
            for performance measurement, composite management, fund accounting, reconciliation, 
            and investment reporting.
          </p>

          {/* FIX: Removed data-aos to ensure buttons are visible immediately */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-cyan-400 text-[#0a2240] font-semibold px-8 py-4 rounded-full hover:scale-105 transition shadow-lg shadow-cyan-400/20">
              See a Demo
            </button>

            <button className="border border-white/40 text-white px-8 py-4 rounded-full hover:bg-white/10 transition backdrop-blur-sm">
              See Customer Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;