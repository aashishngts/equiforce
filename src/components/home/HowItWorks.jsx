import dashboardImg from "../../assets/images/dashboard-banner1.png";
import wave from "../../assets/images/bg-wave.png";

const steps = [
  {
    title: "Data Integration & Ingestion",
    desc: "Seamlessly integrate data from multiple sources including custodians, fund administrators, and internal systems.",
  },
  {
    title: "Automated Processing & Validation",
    desc: "Process and validate large volumes of financial data with precision-engineered workflows to ensure accuracy.",
  },
  {
    title: "Reconciliation & Compliance",
    desc: "Identify discrepancies and ensure data consistency across systems while maintaining compliance with industry standards.",
  },
  {
    title: "Reporting & AI-Driven Insights",
    desc: "Generate detailed investment reports and leverage AI-driven insights to support smarter decision-making.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* ✅ Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Label */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#0ea5a4] text-white px-2 py-1 rounded-full text-xs">
            How It Works
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          From Data to Insights — <br className="hidden sm:block" />
          Simplified Investment Operations
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          EquiForce streamlines the entire investment lifecycle — from data
          aggregation to reporting — delivering accuracy, efficiency, and
          intelligent insights.
        </p>

        {/* Main Box */}
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-3xl p-4 sm:p-6 md:p-10 shadow-lg">
          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-10 md:mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 md:p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                {/* Step Number */}
                <div className="w-10 h-10 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-gray-800 font-semibold mb-2 text-sm md:text-base leading-snug">
                  {step.title}
                </h3>

                {/* Desc */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Dashboard */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <img
              src={dashboardImg}
              alt="Investment dashboard preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
