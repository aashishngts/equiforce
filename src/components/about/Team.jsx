import img1 from "../../assets/images/member2.webp";
import img2 from "../../assets/images/member3.webp";
import img3 from "../../assets/images/member4.webp";
import img4 from "../../assets/images/member5.webp";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const team = [
  {
    name: "Managing Director",
    role: "Investment Operations & Strategy",
    img: img1,
  },
  {
    name: "Head of Product",
    role: "Investment Technology Solutions",
    img: img2,
  },
  {
    name: "Head of Analytics",
    role: "Performance Measurement & Reporting",
    img: img3,
  },
  {
    name: "Technology Lead",
    role: "AI & Data Engineering",
    img: img4,
  },
];

const Team = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 text-center">

      {/* Container */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <p className="text-[#7c3aed] text-sm mb-3">
          Leadership Team
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-10 md:mb-14">
          Experienced Professionals Driving <br className="hidden sm:block" />
          Investment Innovation
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {team.map((member, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >

              {/* Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-5 md:mb-6 relative">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Social Icons */}
              <div className="flex justify-center gap-3 mb-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white cursor-pointer text-sm transition">
                  <FaFacebookF />
                </div>

                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-black hover:text-white cursor-pointer text-sm transition">
                  <FaXTwitter />
                </div>

                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white cursor-pointer text-sm transition">
                  <FaLinkedinIn />
                </div>

              </div>

              {/* Name */}
              <h4 className="text-gray-800 font-semibold text-base md:text-lg">
                {member.name}
              </h4>

              {/* Role */}
              <p className="text-sm text-gray-500 mt-1">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Team;