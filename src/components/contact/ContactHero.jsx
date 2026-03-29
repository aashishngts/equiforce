import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const ContactHero = () => {
  return (
    <section className="py-24">
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 rounded-3xl p-10 ">

        {/* TOP HEADING */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
            <span className="bg-[#0ea5a4] text-white px-2 py-1 rounded-full text-xs">
              Contact
            </span>
            Speak With Our Experts
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Let’s Transform Your Investment Operations
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            Connect with our team to explore how EquiForce can streamline your performance measurement, fund accounting, and reporting processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="bg-white rounded-2xl p-8 shadow-md space-y-10">

            {/* Address */}
            <div className="flex gap-4">
              <div className="text-[#0ea5a4] text-3xl">
                <FiMapPin />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Office Location
                </h4>
                <p className="text-gray-500 text-sm">
                  20 Cooper Square, New York, NY 10003, USA
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="text-[#0ea5a4] text-3xl">
                <FiMail />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Business Inquiries
                </h4>
                <p className="text-gray-500 text-sm">contact@equiforce.com</p>
                <p className="text-gray-500 text-sm">www.equiforce.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="text-[#0ea5a4] text-3xl">
                <FiPhone />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Speak to Our Team
                </h4>
                <p className="text-gray-500 text-sm">+1 (234) 5678 9900</p>
                <p className="text-gray-500 text-sm">Mon – Fri, 9AM – 6PM</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-md">

            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Request a Demo
            </h2>

            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                className="p-3 rounded-lg bg-gray-100 outline-none text-black"
                placeholder="Full Name"
              />
              <input
                className="p-3 rounded-lg bg-gray-100 outline-none text-black"
                placeholder="Work Email"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                className="p-3 rounded-lg bg-gray-100 outline-none text-black"
                placeholder="Phone Number"
              />
              <input
                className="p-3 rounded-lg bg-gray-100 outline-none text-black"
                placeholder="Company Name"
              />
            </div>

            <textarea
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-100 outline-none mb-5 text-black"
              placeholder="Tell us about your requirements"
            ></textarea>

            {/* Button */}
            <button className="w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] hover:scale-105 transition">
              Request Demo
            </button>

            {/* Trust Line */}
            <p className="text-xs text-gray-500 mt-4 text-center">
              ✔ No obligation • ✔ Secure & confidential • ✔ Expert consultation
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactHero;