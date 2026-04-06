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
    img:f1
  },
  {
    title: "Composite Management",
    desc: "Structured composite construction and maintenance built for investment operations workflows.",
    icon: PieChart,  img:f2
  },
  {
    title: "Fund Accounting & Reconciliation",
    desc: "Accurate books and seamless data reconciliation across custodians and systems of record.",
    icon: Wallet,  img:f3
  },
  {
    title: "AI-Powered Reporting",
    desc: "Intelligent, automated investment reporting that surfaces insights and reduces manual effort.",
    icon: Cpu,  img:f4
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f0f9fa]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tag */}
        <div className="inline-block mb-4">
          <span className="bg-[#d97706] text-white px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
            Core Solutions
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a365d] mb-6 leading-tight">
          What we Deliver
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-16 text-sm md:text-base leading-relaxed">
          EquiForce delivers specialized solutions across performance
          measurement, fund accounting, reconciliation, and reporting — enhanced
          with AI-driven capabilities for superior operational control.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col text-left"
              >
                {/* Image (Inset Design) */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[180px] object-cover rounded-2xl mb-6 border border-gray-50"
                />

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  {/* Icon */}
                  <div className="w-10 h-10 mb-5 rounded-xl bg-[#d97706] flex items-center justify-center text-white shrink-0">
                    <Icon size={20} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1a365d] mb-3">
                    {item.title}
                  </h3>

                  {/* Desc */}
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
