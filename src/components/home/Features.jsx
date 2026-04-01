import f1 from "../../assets/images/features1.jpg";
import f2 from "../../assets/images/features2.jpg";
import f3 from "../../assets/images/features3.jpg";
import f4 from "../../assets/images/features4.jpg";
import f5 from "../../assets/images/features5.jpg";
import f6 from "../../assets/images/features6.jpg";

import {
  BarChart3,
  Layers,
  Calculator,
  RefreshCcw,
  FileText,
  BrainCircuit,
} from "lucide-react";

const features = [
  {
    img: f1,
    title: "Real-Time Analytics Dashboard",
    desc: "Monitor portfolio performance and key metrics through an intuitive, real-time analytics dashboard.",
    icon: BarChart3,
  },
  {
    img: f2,
    title: "Seamless Data Integration",
    desc: "Connect multiple data sources into a unified system for accurate and consistent investment data flow.",
    icon: Layers,
  },
  {
    img: f3,
    title: "Automated Financial Workflows",
    desc: "Simplify accounting and operational workflows with automation designed for efficiency and accuracy.",
    icon: Calculator,
  },
  {
    img: f4,
    title: "Smart Reconciliation Engine",
    desc: "Automatically detect and resolve discrepancies across systems with intelligent reconciliation tools.",
    icon: RefreshCcw,
  },
  {
    img: f5,
    title: "Advanced Reporting Tools",
    desc: "Generate dynamic, customizable reports that provide actionable insights for stakeholders.",
    icon: FileText,
  },
  {
    img: f6,
    title: "AI-Powered Insights",
    desc: "Leverage AI to uncover trends, detect anomalies, and optimize investment decision-making.",
    icon: BrainCircuit,
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#233c6a] text-white px-2 py-1 rounded-full text-xs">
            Core Solutions
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Purpose-Built Solutions for <br className="hidden sm:block" />
          Investment Management Excellence
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          EquiForce delivers specialized solutions across performance
          measurement, fund accounting, reconciliation, and reporting — enhanced
          with AI-driven capabilities for superior operational control.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                {/* Image */}
                <div className="bg-[#f8fafc] p-3 md:p-4">
                  <img
                    src={item.img}
                    alt="feature"
                    className="w-full h-[140px] md:h-[160px] object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 text-left">
                  {/* Icon */}
                  <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-r from-[#233c6a] to-[#233c6a] flex items-center justify-center text-white">
                    <Icon size={18} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-600 text-sm leading-relaxed">
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
