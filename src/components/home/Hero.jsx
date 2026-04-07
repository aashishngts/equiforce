import React from "react";
import heroVideo from "../../assets/video/HeroVideo.mp4";

function Hero() {
  return (
<div class="relative min-h-[50vh] md:min-h-[100dvh] flex items-center justify-center overflow-hidden px-4">      {/* Background Video */}
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
        <div className="w-full lg:w-[65%] xl:w-[65%] text-white pt-15 sm:pt-32 md:pt-40">
          <h1
            className="text-2xl sm:text-3xl md:text-6xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight sm:leading-tight"
            data-aos="fade-up"
          >
            Your Strategic Partner in 
             <span className="text-[#d97706]"> Investment Ops,Performance,& GIPS </span> 

          </h1>

          <p
            className="max-w-xl text-base sm:text-md md:text-md text-gray-200 leading-relaxed mb-8 sm:mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
           EMPOWERING INVESTMENT MANAGEMENT WITH DATA REPORTING PRECISION & TECHNOLOGY EDGE.
          </p>

          {/* FIX: Removed data-aos to ensure buttons are visible immediately */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <button className="w-full sm:w-auto text-center border border-white/40 text-white px-8 py-3.5 sm:py-4 rounded-full hover:bg-white/10 transition backdrop-blur-sm text-sm sm:text-base font-medium shadow-sm">
              Request for Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;