import dashboard from "../../assets/images/dashboard-3-1024x729.webp";
import stat1 from "../../assets/images/benefit-image-left.webp";
import stat2 from "../../assets/images/benefit-image-right2.webp";

const Newsletter = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">

      {/* ✅ Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Background Box */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#ede9fe] via-[#e0f2fe] to-[#f5f3ff] px-4 sm:px-6 md:px-12 py-12 md:py-16 lg:py-20 text-center">

          {/* Floating Shapes */}
          <div className="hidden sm:block absolute top-10 left-10 animate-[float_6s_ease-in-out_infinite]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-400 rounded-lg rotate-12 shadow-md"></div>
          </div>

          <div className="hidden sm:block absolute top-10 right-10 animate-[float_5s_ease-in-out_infinite]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-md"></div>
          </div>

          <div className="hidden sm:block absolute bottom-20 left-10 animate-[float_7s_ease-in-out_infinite]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-400 rounded-full shadow-md"></div>
          </div>

          <div className="hidden sm:block absolute bottom-20 right-10 animate-[float_6s_ease-in-out_infinite]">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-red-400 rounded-lg rotate-12 shadow-md"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">

            <p className="text-[#7c3aed] text-sm mb-3">
              Newsletter Subscribe
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
              Take the First Step to Better Task Management
            </h2>

            <p className="text-gray-600 mb-8 md:mb-10">
              Sign up today and unlock a powerful suite of tools designed to help you organize tasks
            </p>

            {/* Subscribe Box */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">

              <p className="text-sm text-gray-600 mb-4">
                Join exclusive live sessions and learn from industry experts
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter email"
                  className="px-5 py-3 rounded-xl w-full sm:w-80 outline-none border border-gray-200"
                />

                <button className="w-full sm:w-auto bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition">
                  Subscribe Now
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5 text-xs sm:text-sm text-gray-500">
                <span>✔ Special Discounts & Offers</span>
                <span>✔ Webinars & Workshops</span>
                <span>✔ User Spotlights</span>
              </div>

            </div>
          </div>

          {/* Dashboard + Floating Cards */}
          <div className="relative mt-12 md:mt-16 flex justify-center">

            <img
              src={dashboard}
              className="w-full max-w-[500px] md:max-w-[700px] rounded-2xl shadow-xl"
            />

            {/* Hide on small screens to prevent overflow */}
            <img
              src={stat1}
              className="hidden md:block absolute -left-10 bottom-10 w-40 lg:w-52 rounded-xl shadow-lg animate-[float_6s_ease-in-out_infinite]"
            />

            <img
              src={stat2}
              className="hidden md:block absolute -right-10 bottom-6 w-40 lg:w-52 rounded-xl shadow-lg animate-[float_6s_ease-in-out_infinite]"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default Newsletter;