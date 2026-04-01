import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown } from "lucide-react";

const ContactHero = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  // Matching the subtle gray border and soft background from the screenshot
  const inputStyle =
    "w-full h-[52px] px-4 border border-[#cfd4da] rounded-[4px] bg-[#fcfcfc] text-[#495057] placeholder:text-[#313131] outline-none focus:border-[#0070c0] focus:bg-white transition-all duration-200 shadow-sm";

  return (
    <section className="relative min-h-screen pt-32 md:pt-44 pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      
      {/* Background Gradient (Same as your Solutions page) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-cyan-100/40 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[50%] rounded-full bg-blue-100/30 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto" data-aos="fade-up">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-4">
            Connect With Us For a Free Trial
          </h1>
        </div>

        {/* Form Area */}
        <form className="max-w-4xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <input type="text" placeholder="First Name*" className={inputStyle} />
            <input type="text" placeholder="Last Name*" className={inputStyle} />
            <input type="email" placeholder="Business Email*" className={inputStyle} />
            <input type="tel" placeholder="Phone Number (exclude country code)*" className={inputStyle} />
            <input type="text" placeholder="Company Name*" className={inputStyle} />
            <input type="text" placeholder="Business Card Title*" className={inputStyle} />

            {/* Custom Styled Selects */}
            <div className="relative">
              <select className={`${inputStyle} appearance-none pr-10 cursor-pointer`}>
                <option value="" disabled selected>Firm Description*</option>
                <option>Hedge Fund</option>
                <option>Asset Manager</option>
                <option>Investment Bank</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0070c0] w-5 h-5 pointer-events-none" />
            </div>

            <div className="relative">
              <select className={`${inputStyle} appearance-none pr-10 cursor-pointer`}>
                <option value="" disabled selected>Country*</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0070c0] w-5 h-5 pointer-events-none" />
            </div>
          </div>

          {/* FactSet Style Textarea with legend border */}
          <fieldset className="border border-[#cfd4da] rounded-[4px] px-4 pb-2 pt-1 transition-all focus-within:border-[#0070c0] bg-[#fcfcfc]">
            <legend className="text-[13px] text-[#6c757d] px-2 font-medium">
              What Business Challenge can we help you solve?*
            </legend>
            <textarea
              rows="3"
              placeholder="Help us connect you to the right expert."
              className="w-full bg-transparent border-none outline-none text-[#495057] placeholder:text-[#adb5bd] resize-none py-2 text-sm"
            />
          </fieldset>

          {/* Checkbox Section */}
          <div className="flex items-start gap-3 py-2">
            <input 
              type="checkbox" 
              className="mt-1 w-[18px] h-[18px] border-[#cfd4da] rounded accent-[#0070c0] cursor-pointer" 
              id="consent" 
            />
            <label htmlFor="consent" className="text-sm text-[#6c757d] leading-relaxed cursor-pointer">
              I agree to receive communications from <strong>EquiForce</strong> and I can update my email preferences at any time.
            </label>
          </div>

          {/* Submit Button - Left Aligned like image */}
          <div className="pt-2">
            <button
              type="submit"
              className="bg-[#0070c0] hover:bg-[#005fa3] text-white font-bold px-10 py-3 rounded-full transition-all duration-300 shadow-sm uppercase text-sm tracking-wide active:scale-95"
            >
              SUBMIT
            </button>
          </div>

          {/* Disclaimer */}
          <p className="text-[11px] text-[#adb5bd] pt-4">
            By submitting my information, I acknowledge that I have read and understood EquiForce's{" "}
            <span className="text-[#0070c0] cursor-pointer hover:underline">
              Privacy Policy.
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default ContactHero;