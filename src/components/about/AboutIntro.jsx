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
            Transforming the way you manage tasks
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
            Our platform helps teams organize work efficiently and collaborate better.
          </p>

          <button className="w-full sm:w-auto bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
            Get 14-day Free Trial
          </button>

        </div>

        {/* Right */}
        <div className="order-1 md:order-2">
          <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-3 md:p-4 shadow-md">
            <img 
              src={aboutImg} 
              alt="about"
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;