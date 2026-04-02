import dashboardImg from "../../assets/images/dashboard-banner1.png";
import wave from "../../assets/images/bg-wave.png";

const features = [
  "Total AUM Tracking",
  "Real-time Performance Insights",
  "Composite & GIPS Reporting",
  "Portfolio Analytics & Attribution",
  "Fund Accounting & Reconciliation",
];

const DashboardPreview = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Wave Background */}
      <img
        src={wave}
        className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none"
      />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        {/* TOP TEXT */}
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
            <span className="bg-[#233c6a] text-white px-2 py-1 rounded-full text-xs">
              Platform Overview
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Gain Complete Visibility Into <br className="hidden sm:block" />
            Your Investment Operations
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            A unified dashboard designed to monitor AUM, track performance,
            analyze portfolios, and generate compliant reports — all in one
            place.
          </p>
        </div>

        {/* Dashboard Card */}
        <div className="relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-3 md:p-4 shadow-md hover:shadow-lg mb-10 md:mb-12">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src={dashboardImg}
              alt="investment dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* FEATURES LIST */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {features.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm bg-white border border-gray-200 rounded-full shadow-sm text-gray-700"
            >
              ✔ {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
