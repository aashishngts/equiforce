import { useState } from "react";

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Starter – Basic Package",
      price: yearly ? "$10" : "$13",
      desc: "Perfect plan for Single or small teams",
      features: [
        "Up to 3 Task Projects",
        "5 Team Members includes",
        "Basic Task Management",
        "Real-Time Collaboration",
        "Calendar View & email support",
      ],
      highlight: false,
    },
    {
      name: "Pro – Standard Package",
      price: yearly ? "$38" : "$48",
      desc: "Ideal for growing teams, 8 persons",
      features: [
        "Unlimited Projects & Tasks",
        "Unlimited (8) Team Members",
        "Advanced Task Organization",
        "Time Tracking File Attachments",
        "Integration with Slack, Google Drive",
      ],
      highlight: true,
    },
    {
      name: "Elite – Custom Package",
      price: yearly ? "$80" : "$96",
      desc: "Tailored for large organizations",
      features: [
        "All Professional Features",
        "Custom Workflows & Permissions",
        "Dedicated Account Manager",
        "Advanced Security & Compliance",
        "Single Sign-On (SSO)",
      ],
      highlight: false,
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 text-center">

      {/* ✅ Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <p className="text-[#007CF0] text-sm mb-3">
          Pricing Package
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Transparent Pricing Plan
        </h2>

        <p className="text-gray-600 mb-8 md:mb-10">
          Flexible pricing for teams of all sizes
        </p>

        {/* Toggle */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-12 md:mb-16">
          <span className="text-gray-600 text-sm">Monthly</span>

          <div
            onClick={() => setYearly(!yearly)}
            className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition
            ${yearly ? "bg-purple-600" : "bg-gray-300"}`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition
              ${yearly ? "translate-x-7" : "translate-x-0"}`}
            />
          </div>

          <span className="text-gray-600 text-sm">Yearly</span>

          <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
            Save 23%
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col justify-between rounded-2xl p-6 md:p-8 border transition-all duration-300

              ${
                plan.highlight
                  ? "bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white lg:scale-105 shadow-xl"
                  : "bg-white/80 backdrop-blur-md text-gray-800 border-gray-200 shadow-md"
              }`}
            >

              {/* Badge */}
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  Popular Package
                </div>
              )}

              {/* Top */}
              <div className="text-left mb-6">
                <p className="text-3xl md:text-4xl font-bold">
                  {plan.price}
                  <span className="text-xs md:text-sm font-normal">
                    {" "} /per month
                  </span>
                </p>

                <h3 className="mt-2 font-semibold text-base md:text-lg">
                  {plan.name}
                </h3>

                <p
                  className={`text-sm mt-2 ${
                    plan.highlight ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  {plan.desc}
                </p>
              </div>

              {/* Features */}
              <div className="text-left mb-6 flex-grow">
                <p className="font-semibold mb-3">Included Features:</p>

                <ul className="space-y-2 text-sm">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      ✔ <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-xl font-medium transition

                ${
                  plan.highlight
                    ? "bg-white text-gray-800"
                    : "bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white"
                }`}
              >
                Choose Package
              </button>

              {/* Footer */}
              <p
                className={`text-xs mt-4 ${
                  plan.highlight ? "text-white/70" : "text-gray-500"
                }`}
              >
                ✕ No hidden charge included
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Pricing;