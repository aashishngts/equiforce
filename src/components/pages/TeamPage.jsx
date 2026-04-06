import React from "react";
import Team from "../about/Team";


const TeamPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Spacer for Fixed Navbar */}
      <div className="h-24 bg-[#0a2240]"></div>

      {/* Header Section */}
      <section className="bg-[#0a2240] py-15 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-2xl md:text-5xl font-bold text-white mb-6" data-aos="fade-down">
            Meet the Experts Behind <span className="text-[#d97706]">EquiForce</span>
          </h1>
          <p className="text-gray-300 text-md md:text-md leading-relaxed" data-aos="fade-up">
            Our team combines decades of experience in fintech, investment management, 
            and AI to build the future of financial operations.
          </p>
        </div>
      </section>

      {/* The Team Component */}
      <div className="py-10" data-aos="fade-up" data-aos-delay="200">
        <Team />
      </div>

    </div>
  );
};

export default TeamPage;