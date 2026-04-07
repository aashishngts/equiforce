import React from "react";
import { MapPin, ChevronDown, Mail } from "lucide-react";
import contactimg from "../../assets/images/bg.png";

const ContactPage = () => {
  const inputStyle =
    "w-full h-12 px-4 border border-gray-300 rounded-md bg-white text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-[#0B2341] text-white py-10 md:py-30 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10 h-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-[#d97706]">Us</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get in touch with our leadership team and explore our global office locations.
          </p>
        </div>

        <img
          src={contactimg}
          alt="background design"
          className="absolute bottom-0 left-0 w-full object-cover opacity-40"
        />
      </section>

      {/* FORM & INFO SECTION */}
      <section className="-mt-10 pb-20 md:mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* LEFT: CONTACT FORM */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                Send us a Message
              </h2>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name *" className={inputStyle} />
                  <input type="text" placeholder="Last Name *" className={inputStyle} />
                </div>
                <input type="email" placeholder="Business Email *" className={inputStyle} />
                <input type="text" placeholder="Company Name *" className={inputStyle} />

                <div className="relative">
                  <select className={`${inputStyle} appearance-none pr-10`}>
                    <option>Select Service</option>
                    <option>Performance Measurement</option>
                    <option>GIPS Composite Management</option>
                    <option>Investment Operations</option>
                    <option>AI-Powered Reporting</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-4 text-gray-500 w-5 h-5" />
                </div>

                <textarea
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full p-4 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-cyan-500"
                />

                <button
                  type="submit"
                  className="w-full md:w-auto bg-[#d97706] hover:bg-[#b46002] text-white px-10 py-4 rounded-lg font-bold transition-all duration-300 shadow-md"
                >
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* RIGHT: LOCATIONS & DIRECT EMAILS */}
            <div className="space-y-12">
              
              {/* DIRECT EMAILS */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Direct Contact</h3>
                <div className="space-y-4">
                  {[
                    { name: "Jane Atmodjojo", email: "jane@equiforcesolutions.com" },
                    { name: "Vincent Tran", email: "vince@equiforcesolutions.com" },
                    { name: "Pushpendra Thakur", email: "pushpendra@equiforcesolutions.com" },
                  ].map((contact, idx) => (
                    <a 
                      key={idx}
                      href={`mailto:${contact.email}`}
                      className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[#d97706]/30 hover:bg-orange-50/30 transition-all group"
                    >
                      <div className="bg-orange-100 p-2 rounded-lg text-[#d97706] group-hover:bg-[#d97706] group-hover:text-white transition-colors">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-800">{contact.name}</p>
                        <p className="text-sm text-gray-500">{contact.email}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* OFFICE LOCATIONS */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Offices</h3>
                <div className="space-y-4">
                  {[
                    { city: "Indore, India", address: "" },
                    { city: "California, USA", address: "" },
                  ].map((loc, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-xl border border-gray-100"
                    >
                      <div className="text-[#d97706] mt-1">
                        <MapPin size={22} />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{loc.city}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{loc.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-[#0B2341] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 text-center md:text-left">
          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-bold mb-3">Win with AI</h3>
            <p className="text-gray-300 mb-6">
              Discover how AI-driven solutions can transform your investment operations.
            </p>
            <button className="bg-[#d97706] hover:bg-[#b46002] px-8 py-3 rounded-lg font-bold transition-all">
              See How
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-bold mb-3">Try for Free</h3>
            <p className="text-gray-300 mb-6">
              Ready to see the platform in action? Schedule a live demo with our experts.
            </p>
            <button className="bg-[#d97706] hover:bg-[#b46002] px-8 py-3 rounded-lg font-bold transition-all">
              Request Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;