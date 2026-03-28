import { useState } from "react";
import { ArrowUp, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "How is this different from other task management tools?",
    a: "Our platform combines simplicity with powerful features like real-time collaboration, smart task organization, and seamless integrations — all in a clean, intuitive interface.",
  },
  {
    q: "Do I need technical skills to use this platform?",
    a: "No technical skills required. Our platform is designed for everyone with an easy-to-use interface.",
  },
  {
    q: "Can I invite team members to my workspace?",
    a: "Yes, you can invite and manage your team easily with role-based access.",
  },
  {
    q: "What happens if I reach the limit of my plan?",
    a: "You can upgrade anytime to continue using additional features.",
  },
  {
    q: "Do you offer a trial for premium features?",
    a: "Yes, we offer a free trial so you can explore all premium features.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-12 md:py-16 lg:py-20 text-center">

      {/* ✅ Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top */}
        <p className="text-[#7c3aed] text-sm mb-3">
          Asked Questions
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Still Curious? Find Your <br className="hidden sm:block" />
          Answers Below
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          We’ve gathered the most common inquiries to help you get started quickly.
        </p>

        {/* Accordion Wrapper */}
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 space-y-4 shadow-md">

          {faqs.map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-4 md:p-5 text-left transition"
            >

              {/* Header */}
              <div
                onClick={() => setOpen(open === i ? null : i)}
                className="flex justify-between items-center gap-4 cursor-pointer"
              >

                {/* Question */}
                <h4 className="text-gray-800 font-medium text-sm md:text-base leading-snug">
                  {i + 1}. {item.q}
                </h4>

                {/* Icon */}
                <div
                  className={`shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg transition

                  ${
                    open === i
                      ? "bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {open === i ? <ArrowUp size={16} /> : <ArrowRight size={16} />}
                </div>

              </div>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  open === i ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;