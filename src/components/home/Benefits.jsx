import { useState } from "react";
import wave from "../../assets/images/bg-wave.png";
import benefitImg from "../../assets/images/image-tab1.jpg";

import { Shield, CheckCircle, Zap, Brain, BarChart3 } from "lucide-react";

const tabs = [
  { name: "Operational Accuracy", icon: CheckCircle },
  { name: "Efficiency & Automation", icon: Zap },
  { name: "Data Security & Compliance", icon: Shield },
  { name: "AI-Powered Intelligence", icon: Brain },
  { name: "Better Decision Making", icon: BarChart3 },
];

const Benefits = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Wave */}
      <img
        src={wave}
        className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none"
      />

      {/* ✅ Container */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 text-center relative z-10">
        {/* Label */}

        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#d97706] text-white px-2 py-1 rounded-full text-xs">
            Key Benefits
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Delivering Accuracy, Efficiency <br className="hidden sm:block" />&
          Intelligent Investment Operations
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          EquiForce enables investment firms to operate with confidence by
          combining automation, compliance, and AI-driven insights.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 md:mb-16">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;

            return (
              <div
                key={index}
                onClick={() => setActive(index)}
                className={`group cursor-pointer transition-all duration-300
        px-4 md:px-6 py-4 md:py-6 rounded-2xl min-w-[140px] sm:min-w-[160px] text-center border

        ${
          active === index
            ? "bg-white border-[#d97706] shadow-[0_10px_30px_rgba(14,165,164,0.25)] scale-105"
            : "bg-white/70 backdrop-blur-md border-gray-200 hover:bg-white hover:shadow-md"
        }`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 flex items-center justify-center rounded-full transition

          ${
            active === index
              ? "bg-gradient-to-r from-[#d97706] to-[#2e4a7f] text-white shadow-md"
              : "bg-gray-100 text-[#d97706]"
          }`}
                >
                  <Icon size={18} />
                </div>

                {/* Text */}
                <p
                  className={`text-xs md:text-sm font-medium 
          ${active === index ? "text-gray-800" : "text-gray-600"}`}
                >
                  {tab.name}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-10 shadow-md">
          {/* Left */}
          <div className="text-left">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Achieve Precision & Confidence in Investment Operations
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed">
              With EquiForce, investment firms gain full control over their
              operations — ensuring data accuracy, regulatory compliance, and
              streamlined workflows powered by intelligent automation.
            </p>

            <ul className="text-gray-600 text-sm space-y-2 mb-6">
              <li>✔ Ensure data accuracy across all systems</li>
              <li>✔ Reduce operational risk and manual effort</li>
              <li>✔ Maintain compliance with industry standards</li>
              <li>✔ Leverage AI for smarter investment decisions</li>
            </ul>

            <button className="w-full sm:w-auto bg-gradient-to-r from-[#d97706] to-[#d97706] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition">
              Request a Demo
            </button>
          </div>

          {/* Right */}
          <div className="relative flex justify-center items-center">
  {/* Glow Background */}
  <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-[#a78bfa] opacity-20 blur-[100px] rounded-full"></div>

  {/* Image */}
  <img
    src={benefitImg}
    alt="investment benefits"
    className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] rounded-2xl shadow-xl"
  />

  {/* Play Button Pulse Overlay */}
  <div className="absolute flex items-center justify-center">
    {/* Outer pulse ring */}
    <span className="absolute inline-flex h-20 w-20 rounded-full bg-white/40 animate-ping"></span>

    {/* Second ring */}
    <span className="absolute inline-flex h-16 w-16 rounded-full bg-white/30 animate-pulse"></span>

    {/* Main button */}
    <button className="relative z-10 w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
      <div className="ml-1 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-[#7c3aed]"></div>
    </button>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
