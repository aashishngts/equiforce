import f1 from "../../assets/images/features1.svg";
import f2 from "../../assets/images/features2.svg";
import f3 from "../../assets/images/features3.svg";
import f4 from "../../assets/images/features4.svg";
import f5 from "../../assets/images/features5.svg";
import f6 from "../../assets/images/features6.svg";

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
    title: "Performance Measurement",
    desc: "Deliver accurate and compliant performance analytics with precision-engineered tools designed for institutional investment reporting.",
    icon: BarChart3,
  },
  {
    img: f2,
    title: "Composite Management",
    desc: "Simplify composite construction and maintenance with automated workflows aligned with global performance standards.",
    icon: Layers,
  },
  {
    img: f3,
    title: "Fund Accounting",
    desc: "Streamline fund accounting operations with scalable solutions that ensure accuracy, transparency, and audit readiness.",
    icon: Calculator,
  },
  {
    img: f4,
    title: "Reconciliation",
    desc: "Automate complex reconciliation processes across systems to minimize discrepancies and improve operational efficiency.",
    icon: RefreshCcw,
  },
  {
    img: f5,
    title: "Investment Reporting",
    desc: "Generate insightful and customizable reports that empower stakeholders with clear, data-driven decision-making.",
    icon: FileText,
  },
  {
    img: f6,
    title: "AI-Driven Intelligence",
    desc: "Leverage advanced AI capabilities to enhance accuracy, identify anomalies, and optimize investment operations.",
    icon: BrainCircuit,
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Tag */}
        <p className="text-[#007CF0] text-sm mb-3">
          Core Solutions
        </p>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Purpose-Built Solutions for <br className="hidden sm:block" />
          Investment Management Excellence
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          EquiForce delivers specialized solutions across performance measurement, fund accounting, reconciliation, and reporting — enhanced with AI-driven capabilities for superior operational control.
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
                  <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] flex items-center justify-center text-white">
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