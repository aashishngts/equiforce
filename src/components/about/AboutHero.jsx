import aboutImg from "../../assets/images/about-image1.webp";

const AboutHero = () => {
  return (
    <section className="pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20 text-center">
      
      {/* Top */}
      <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
        <span className="bg-[#233c6a] text-white px-2 py-1 rounded-full text-xs">
          About
        </span>
        Our Expertise & Industry Leadership
      </div>

      <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
        Empowering Investment Firms <br /> With Precision & Intelligence
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-16">
        EquiForce Solutions delivers purpose-built technology for investment management firms — combining deep industry expertise with AI-driven innovation to enhance performance, accuracy, and operational efficiency.
      </p>

      {/* 🔥 MAIN GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 items-center">
        
        {/* 🔵 LEFT SIDE */}
        <div className="flex flex-col gap-6">
          
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#233c6a] to-[#233c6a] 
          text-white p-8 rounded-2xl text-left shadow-lg shadow-cyan-400/30">
            <h2 className="text-4xl font-bold mb-4">30+</h2>
            <p className="text-sm text-white/90">
              Years of Investment Operations Expertise
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl text-left shadow-md border border-gray-100 relative overflow-hidden">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">99%</h2>
            <p className="text-sm text-gray-500">
              Accuracy & Client Satisfaction Rate
            </p>

            <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-100 rounded-full blur-2xl opacity-40"></div>
          </div>
        </div>

        {/* 🟣 CENTER IMAGE */}
        <div className="flex justify-center">
          <img
            src={aboutImg}
            alt="about equiforce"
            className="rounded-2xl shadow-xl w-full max-w-[420px] object-cover"
          />
        </div>

        {/* 🔵 RIGHT SIDE */}
        <div className="flex flex-col gap-6">
          
          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl text-left shadow-md border border-gray-100">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">500+</h2>
            <p className="text-sm text-gray-500">
              Investment Portfolios Managed & Supported
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-2xl text-left shadow-md border border-gray-100">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Global</h2>
            <p className="text-sm text-gray-500">
              Serving Investment Firms Across Multiple Regions
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;