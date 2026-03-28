import dashboardImg from "../../assets/images/dashboard-banner.webp";
import wave from "../../assets/images/bg-wave.png";

const logos = ["Jotform", "Quora", "Dropbox", "Medium", "HubSpot", "Zillow"];

const DashboardPreview = () => {
  return (
    <section className="relative py-12 md:py-16 lg:py-20 overflow-hidden">
      
      {/* Wave Background */}
      <img
        src={wave}
        className="absolute bottom-0 left-0 w-full opacity-30 pointer-events-none"
      />

      {/* ✅ Container (standardized) */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dashboard Card */}
        <div className="relative bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-3 md:p-4 shadow-md hover:shadow-lg mb-12 md:mb-16">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <img
              src={dashboardImg}
              alt="dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="text-center">
          <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10">
            Trusted by over 1.7 million companies worldwide
          </p>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-10 md:gap-16 animate-scroll whitespace-nowrap">
              {[...logos, ...logos].map((logo, index) => (
                <span
                  key={index}
                  className="text-gray-400 text-lg md:text-xl font-semibold opacity-80 hover:text-gray-800 transition"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DashboardPreview;