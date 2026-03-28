import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const ContactHero = () => {
  return (
    <section className="py-24">
      {/* 🔥 MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto px-6 rounded-3xl p-10 ">
        {/* 🔥 TOP HEADING */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
            <span className="bg-[#7c3aed] text-white px-2 py-1 rounded-full text-xs">
              Contact
            </span>
            Get in Touch
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Let’s Get in Touch
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto">
            We’re here to help you stay productive
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {/* 🔵 LEFT SIDE */}
          <div className="bg-white rounded-2xl p-8 shadow-md space-y-10">
            {/* Address */}
            <div className="flex gap-4">
              <div className="text-[#7c3aed] text-3xl">
                <FiMapPin />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Main address
                </h4>
                <p className="text-gray-500 text-sm">
                  20 Cooper Square, New York, NY 10003, USA
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="text-[#7c3aed] text-3xl">
                <FiMail />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Email address
                </h4>
                <p className="text-gray-500 text-sm">supportEquiForce@gmail.com</p>
                <p className="text-gray-500 text-sm">www.EquiForce.net</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="text-[#7c3aed] text-3xl">
                <FiPhone />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">
                  Need helps urgent
                </h4>
                <p className="text-gray-500 text-sm">+1 (234) 5678 9900</p>
                <p className="text-gray-500 text-sm">+1 (200) 3000 6780</p>
              </div>
            </div>
          </div>

          {/* 🟣 RIGHT SIDE FORM */}
          <div className="bg-white rounded-2xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Let’s connect & help <br /> you succeed
            </h2>

            {/* Inputs */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                className="p-3 rounded-lg bg-gray-100 outline-none  text-black"
                placeholder="Benjamin Carter"
              />
              <input
                className="p-3 rounded-lg bg-gray-100 outline-none  text-black"
                placeholder="info@example.com"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                className="p-3 rounded-lg bg-gray-100 outline-none  text-black"
                placeholder="+1 (234) 56 88 99"
              />
              <input
                className="p-3 rounded-lg bg-gray-100 outline-none  text-black"
                placeholder="I would like to discussed"
              />
            </div>

            <textarea
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-100 outline-none mb-5  text-black"
              placeholder="Write message"
            ></textarea>

            {/* Button */}
            <button className="w-full py-3 rounded-xl font-medium text-white bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] hover:scale-105 transition">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
