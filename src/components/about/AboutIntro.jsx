import aboutImg from "../../assets/images/about-2.webp";

const AboutIntro = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* Left */}
        <div className="text-center md:text-left order-2 md:order-1">
          
          <p className="text-[#007CF0] text-sm mb-3">
            Who We Are
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold mb-4 md:mb-6">
            A Strategic Partner for Modern Investment Management
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
            EquiForce Solutions is more than a technology provider — we are a strategic partner to investment management firms. With nearly three decades of industry expertise, we deliver precision-engineered solutions that streamline operations, enhance accuracy, and drive better investment outcomes.
          </p>

          <button className="w-full sm:w-auto bg-gradient-to-r from-[#233c6a] to-[#233c6a] text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
            Request a Demo
          </button>

        </div>

        {/* Right */}
        <div className="order-1 md:order-2">
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-3 md:p-4 shadow-md">
            <img 
              src={aboutImg} 
              alt="about equiforce"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;