import React from "react";
import heroVideo from "../../assets/video/HeroVideo.mp4";

function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden flex items-center">
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
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full">
        <div className="w-full lg:w-[65%] xl:w-[60%] text-white pt-28 sm:pt-32 md:pt-40">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-tight"
            data-aos="fade-up"
          >
            Your Strategic <span className="text-[#d97706]">Partner</span> <br className="hidden sm:block" />
            in Investment Ops.
          </h1>

          <p
            className="max-w-xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8 sm:mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            EquiForce Solutions empowers investment management firms with purpose-built solutions 
            for performance measurement, composite management, fund accounting, reconciliation, 
            and investment reporting.
          </p>

          {/* FIX: Removed data-aos to ensure buttons are visible immediately */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="w-full sm:w-auto text-center border border-white/40 text-white px-8 py-3.5 sm:py-4 rounded-full hover:bg-white/10 transition backdrop-blur-sm text-sm sm:text-base font-medium shadow-sm">
              Request for Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;