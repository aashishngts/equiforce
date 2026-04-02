import React from "react";
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
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-24">
          Executive Leadership
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
          {team.map((member, i) => (
            <div
              key={i}
              className="relative bg-white rounded-sm shadow-md pt-24 pb-10 px-6 flex flex-col items-center group transition-all duration-300 hover:shadow-xl"
            >
              
              {/* Overlapping Circular Image with Gradient Border */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-blue-700 via-blue-950 to-purple-600">
                  <div className="w-full h-full rounded-full border-[6px] border-white overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Original Content: Name */}
              <h4 className="text-[#0066a1] text-xl md:text-2xl font-normal mb-3">
                {member.name}
              </h4>

              {/* Original Content: Role */}
              <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-relaxed mb-8 h-12 flex items-center justify-center">
                {member.role}
              </p>

              {/* Navigation Link (Styled like the Image) */}
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="text-[#0066a1] text-xs font-bold uppercase flex items-center hover:opacity-70 transition"
                >
                  View Bio <span className="ml-2 text-lg">›</span>
                </a>
              </div>

              {/* Social Icons (Kept from your original code, but styled subtly) */}
              <div className="flex gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaFacebookF className="text-gray-400 hover:text-blue-600 cursor-pointer" />
                <FaXTwitter className="text-gray-400 hover:text-black cursor-pointer" />
                <FaLinkedinIn className="text-gray-400 hover:text-blue-700 cursor-pointer" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;