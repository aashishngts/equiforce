import React from "react";
import f1 from "../../assets/images/features1.jpg";
import f2 from "../../assets/images/features2.jpg";
import f3 from "../../assets/images/features3.jpg";
import f4 from "../../assets/images/features4.jpg";
import f5 from "../../assets/images/features5.jpg";
import f6 from "../../assets/images/features6.jpg";

import {
  BarChart3,
  PieChart,
  Wallet,
  Cpu,
} from "lucide-react";

const features = [
  {
    title: "Performance Measurement",
    desc: "Precision return calculations and attribution analysis across all strategies and composites.",
    icon: BarChart3,
    img: f1
  },
  {
    title: "Composite Management",
    desc: "Structured composite construction and maintenance built for investment operations workflows.",
    icon: PieChart,  
    img: f2
  },
  {
    title: "Fund Accounting & Reconciliation",
    desc: "Accurate books and seamless data reconciliation across custodians and systems of record.",
    icon: Wallet,  
    img: f3
  },
  {
    title: "AI-Powered Reporting",
    desc: "Intelligent, automated investment reporting that surfaces insights and reduces manual effort.",
    icon: Cpu,  
    img: f4
  },
];

const Features = () => {
  return (
    // Applied a clean, light gradient background (white fading into a very soft blue/cyan)
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-[#f0f9fa]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Tag */}
        <div className="inline-block mb-3 sm:mb-4">
          <span className="bg-[#d97706] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
            Core Solutions
          </span>
        </div>

        {/* Heading - Changed to dark navy for the light theme */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a2240] mb-4 sm:mb-6 leading-tight">
          What we <span className="text-[#d97706]">Deliver</span>
        </h2>

        {/* Subtext - Changed to a medium gray for readability */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 sm:mb-16 text-sm md:text-base leading-relaxed px-2 sm:px-0">
          EquiForce delivers specialized solutions across performance
          measurement, fund accounting, reconciliation, and reporting — enhanced
          with AI-driven capabilities for superior operational control.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                // Light theme cards: solid white, soft border, and a nice elegant shadow
                className="bg-white rounded-3xl p-5 md:p-6 shadow-xl shadow-gray-200/40 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/60 active:scale-[0.98] md:active:scale-100 hover:-translate-y-1 transition-all duration-300 flex flex-col text-left"
              >
                {/* Image (Inset Design) - Updated border to match light theme */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[180px] sm:h-[200px] md:h-[180px] object-cover rounded-2xl mb-5 sm:mb-6 border border-gray-100 shadow-sm"
                />

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  {/* Icon - Kept the orange background as it contrasts nicely with white */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 mb-4 sm:mb-5 rounded-xl bg-[#d97706] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Icon size={20} className="sm:w-6 sm:h-6" strokeWidth={2} />
                  </div>

                  {/* Title - Dark navy text */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#0a2240] mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  {/* Desc - Medium gray text */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;