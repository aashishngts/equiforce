import f1 from "../../assets/images/features1.webp";
import f2 from "../../assets/images/features2.webp";
import f3 from "../../assets/images/features3.webp";
import f4 from "../../assets/images/features4.webp";
import f5 from "../../assets/images/features5.webp";
import f6 from "../../assets/images/features6.webp";

import {
  Sparkles,
  Plug,
  LayoutDashboard,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    img: f1,
    title: "AI-power generated apps",
    desc: "Our intelligent platform uses AI to automate task prioritization and predict deadlines.",
    icon: Sparkles,
  },
  {
    img: f2,
    title: "Build-in Integrations",
    desc: "Platform offers seamless built-in integrations with all the tools you rely on daily.",
    icon: Plug,
  },
  {
    img: f3,
    title: "User-interface design",
    desc: "Our UI is crafted with clarity, simplicity, and efficiency in mind.",
    icon: LayoutDashboard,
  },
  {
    img: f4,
    title: "Track Your Success",
    desc: "Stay in control with real-time insights that help you measure what matters.",
    icon: TrendingUp,
  },
  {
    img: f5,
    title: "Real-time Collaborations",
    desc: "Users can share updates and collaborate seamlessly in real time.",
    icon: Users,
  },
  {
    img: f6,
    title: "Track Your Productivity",
    desc: "Gain full visibility into how your time and tasks are being managed.",
    icon: BarChart3,
  },
];

const SolutionsFeatures = () => {
  return (
    <section className="pt-28 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-sm text-gray-800 mb-6 border border-gray-200 shadow-sm">
          <span className="bg-[#007CF0] text-white px-2 py-1 rounded-full text-xs">
            Features
          </span>
          Included
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Powerful Features to Boost <br className="hidden sm:block" />
          Your Productivity
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          Stay ahead with features built for performance and scalable SaaS growth.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >

                {/* Image */}
                <div className="bg-[#f8fafc] p-3 md:p-4">
                  <img
                    src={item.img}
                    alt="feature"
                    className="w-full h-[140px] md:h-[160px] object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="p-4 md:p-6 text-left">

                  {/* ✅ ICON FIX */}
                  <div className="w-10 h-10 mb-4 rounded-lg bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] flex items-center justify-center text-white">
                    <Icon size={18} />
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default SolutionsFeatures;