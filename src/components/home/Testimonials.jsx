const testimonials = [
  {
    name: "Sarah Linda",
    role: "Designer, Creative Studio",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    text: "We’ve tried multiple tools, but this one hits the sweet spot between simplicity and powerful features.",
  },
  {
    name: "James Bond",
    role: "Freelance Consultant",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    text: "I love how easy it is to organize tasks, assign roles, and track progress. It helps me stay on top of everything.",
  },
  {
    name: "Priya Donald",
    role: "UX Designer, TaskHive",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    text: "The integration options and the clean interface make this the best task management tool we’ve used so far.",
  },
  {
    name: "Elena Rossi",
    role: "Marketing Director, BrightPath",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    text: "After testing countless apps, this one finally balances ease of use with the depth our team needs.",
  },
  {
    name: "Anna Carter",
    role: "Team Lead, CloudShift",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    text: "It’s rare to find a tool that’s both intuitive and packed with everything a growing team requires.",
  },
  {
    name: "Maria Lopez",
    role: "Product Manager, FlowSync",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    text: "From setup to daily use, it delivers exactly what we need — clean, smart, and incredibly efficient.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 text-center">

      {/* ✅ Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top */}
        <p className="text-[#7c3aed] text-sm mb-3">
          Positive Feedback
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
          Clients Testimonials
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 md:mb-14">
          Our users are at the heart of everything we do and their feedback says it all.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="h-full flex flex-col justify-between bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl p-5 md:p-6 text-left shadow-md hover:shadow-lg transition"
            >

              {/* Top Profile */}
              <div className="flex items-center gap-4 mb-5 md:mb-6">

                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-gray-800 font-semibold text-sm md:text-base">
                    {t.name}
                  </h4>
                  <p className="text-xs md:text-sm text-gray-500">
                    {t.role}
                  </p>
                </div>

              </div>

              {/* Quote */}
              <div className="bg-[#f3f0ff] rounded-xl p-4 text-sm text-gray-700 leading-relaxed flex-grow">
                “{t.text}”
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;