import React from "react";
import heroVideo from "../../assets/video/HeroVideo.mp4";

function Hero() {
  return (
<div className="relative w-full bg-gradient-to-r from-[#0a2240] to-[#0f2f5c] py-16 md:py-24 px-4">
  <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-10 py-10">

    {/* LEFT CONTENT */}
    <div className="w-full lg:w-1/2 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
        Your Strategic <span className="text-[#d97706]"> Partner </span> in 
        Investment Ops, Performance & GIPS
      </h1>

      <p className="max-w-lg text-gray-300 mb-8">
        <span className="text-[#d97706]">
Empowering investment management with practitioner expertise & technology edge.

        </span>
      </p>

      <button className="border border-white/30 px-7 py-3 rounded-full hover:bg-white/10 transition backdrop-blur-md">
        Request for Demo
      </button>
    </div>

    {/* RIGHT VIDEO (SMALLER + MODERN CARD STYLE) */}
    <div className="w-full lg:w-1/2 flex justify-center">

      <div className="relative w-full max-w-md"> {/* 👈 controls size */}

        {/* Glow */}
        <div className="absolute -inset-1 bg-blue-500/20 blur-xl rounded-2xl"></div>

        {/* Card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl p-2">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[220px] sm:h-[260px] object-cover rounded-xl"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

        </div>

      </div>

    </div>

  </div>
</div>
  );
}

export default Hero;