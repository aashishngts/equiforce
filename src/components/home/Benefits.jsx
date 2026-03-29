import { useState } from "react";
import wave from "../../assets/images/bg-wave.png";
import benefitImg from "../../assets/images/image-tab1.png";

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
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Label */}
        <p className="text-[#007CF0] text-sm mb-3">
          Key Benefits
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Delivering Accuracy, Efficiency <br className="hidden sm:block" />
          & Intelligent Investment Operations
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          EquiForce enables investment firms to operate with confidence by combining automation, compliance, and AI-driven insights.
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
                    ? "bg-white border-[#7c3aed] shadow-[0_10px_30px_rgba(124,58,237,0.2)] scale-105"
                    : "bg-white/70 backdrop-blur-md border-gray-200 hover:bg-white hover:shadow-md"
                }`}
              >

                {/* Icon */}
                <div
                  className={`w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 flex items-center justify-center rounded-full transition

                  ${
                    active === index
                      ? "bg-gradient-to-r from-[#7c3aed] to-[#a78bfa] text-white shadow-md"
                      : "bg-gray-100 text-[#7c3aed]"
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
              With EquiForce, investment firms gain full control over their operations — ensuring data accuracy, regulatory compliance, and streamlined workflows powered by intelligent automation.
            </p>

            <ul className="text-gray-600 text-sm space-y-2 mb-6">
              <li>✔ Ensure data accuracy across all systems</li>
              <li>✔ Reduce operational risk and manual effort</li>
              <li>✔ Maintain compliance with industry standards</li>
              <li>✔ Leverage AI for smarter investment decisions</li>
            </ul>

            <button className="w-full sm:w-auto bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition">
              Request a Demo
            </button>
          </div>

          {/* Right */}
          <div className="relative flex justify-center items-center">

            {/* Glow */}
            <div className="absolute w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-[#a78bfa] opacity-20 blur-[100px] rounded-full"></div>

            {/* Image */}
            <img
              src={benefitImg}
              alt="investment benefits"
              className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] rounded-2xl shadow-xl 
              animate-[float_6s_ease-in-out_infinite] 
              hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Benefits;