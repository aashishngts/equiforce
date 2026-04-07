import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  PieChart,
  Wallet,
  Cpu,
} from "lucide-react";

const features = [
  {
    title: "Performance Measurement",
    desc: "Holdings-based (IBOR) and Transaction-based (ABOR/PBOR) return and attribution at security-, portfolio-, and composite levels.",
    icon: BarChart3,
    link: "/performance-measurement#performance"
  },
  {
    title: "GIPS Composite Management",
    desc: "Structured composite construction and maintenance built for investment operations workflows.",
    icon: PieChart,  
    link: "/performance-measurement#gips"
  },
  {
    title: "Investment Operations",
    desc: "Investment data reconciliation across custodians and systems of record to ensure accurate books.",
    icon: Wallet,  
    link: "/performance-measurement#operations"
  },
  {
    title: "AI-Powered Reporting",
    desc: "Intelligent, automated investment reporting that surfaces insights and streamlines manual effort.",
    icon: Cpu,  
    link: "/performance-measurement#ai-reporting"
  },
];

const Features = () => {
  return (
    <section className="bg-[#0a2240] py-8 md:py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Tag */}
        <div className="inline-block mb-4">
          <span className="bg-[#d97706] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-sm">
            Core Solutions
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          What we <span className="text-[#d97706]">Deliver</span>
        </h2>

        {/* Subtext */}
        <p className="text-blue-100/80 max-w-3xl mx-auto mb-6 text-base md:text-lg leading-relaxed">
          EquiForce delivers specialized solutions across performance
          measurement, composite management, investment operations, and reporting — 
          enhanced with AI-driven capabilities for superior operational control.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                to={item.link}
                key={index}
                className="group bg-white rounded-3xl p-8 border border-white/10 hover:border-[#d97706]/50 hover:shadow-2xl hover:shadow-[#d97706]/10 transition-all duration-300 flex flex-col text-left relative overflow-hidden"
              >
                {/* Subtle Hover Effect Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#eef7f8] rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 opacity-50" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 mb-6 rounded-2xl bg-[#0a2240] group-hover:bg-[#d97706] flex items-center justify-center text-white transition-colors shadow-lg">
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#0a2240] mb-4 group-hover:text-[#d97706] transition-colors">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                    {item.desc}
                  </p>

                  {/* "Learn More" link mimic */}
                  <div className="flex items-center gap-2 text-[#d97706] font-bold text-xs uppercase tracking-widest">
                    Explore Solution 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;