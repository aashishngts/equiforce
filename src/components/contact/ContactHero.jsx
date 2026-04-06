import React from "react";
import { MapPin, ChevronDown } from "lucide-react";
import contactimg from "../../assets/images/bg.png";
const ContactPage = () => {
  const inputStyle =
    "w-full h-12 px-4 border border-gray-300 rounded-md bg-white text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all";

  return (
    <div className="bg-gray-50 min-h-screen mb-2">
      {/* HERO SECTION */}
      <section className="relative bg-[#0B2341] text-white py-10 md:py-44 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 h-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span class="text-[#d97706]">Us</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Secure office addresses and other ways to get in touch with us.
          </p>
        </div>

        {/* Bottom Background Image */}
        <img
          src={contactimg}
          alt="background design"
          className="absolute bottom-0 left-0 w-full object-cover opacity-40"
        />
      </section>

      {/* FORM SECTION */}
      <section className="-mt-10 pb-20 mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* LEFT FORM */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Get in Touch with Us
              </h2>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name *"
                    className={inputStyle}
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className={inputStyle}
                  />
                </div>

                <input
                  type="email"
                  placeholder="Business Email *"
                  className={inputStyle}
                />

                <input
                  type="text"
                  placeholder="Company Name *"
                  className={inputStyle}
                />

                <div className="relative">
                  <select className={`${inputStyle} appearance-none pr-10`}>
                    <option>Select Service</option>
                    <option>AI Solutions</option>
                    <option>Cloud Services</option>
                    <option>Consulting</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 text-gray-500 w-5 h-5" />
                </div>

                <div className="relative">
                  <select className={`${inputStyle} appearance-none pr-10`}>
                    <option>Inquiry Type</option>
                    <option>General</option>
                    <option>Support</option>
                    <option>Demo Request</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 text-gray-500 w-5 h-5" />
                </div>

                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full p-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <button
                  type="submit"
                  className="bg-[#d97706] hover:bg-[#d97706] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Contact Us
                </button>
              </form>
            </div>

            {/* RIGHT OFFICE LOCATIONS */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Office Locations
              </h3>

              <div className="space-y-6">
                {[
                  "836 Southwood Boulevard, Indore, India",
                  "1250 Broadway - 14th Floor, New York, USA",
                  "New Delhi, India",
                  "San Ramon, CA, USA",
                ].map((location, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className="text-[#d97706] p-2 rounded-full">
                      <MapPin className="w-5 h-5 text-[#d97706]" />
                    </div>
                    <p className="text-gray-600">{location}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0B2341] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3">Win with AI</h3>
            <p className="text-gray-300 mb-6">
              Discover how AI-driven solutions can transform your business.
            </p>
            <button className="bg-[#d97706] px-6 py-3 rounded-lg font-medium">
              See How
            </button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3">Request a Demo</h3>
            <p className="text-gray-300 mb-6">
              Schedule a live demo with our experts.
            </p>
            <button className="bg-[#d97706] px-6 py-3 rounded-lg font-medium">
              See a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
