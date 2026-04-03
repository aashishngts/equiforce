import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // IMPORTED PORTAL
import img1 from "../../assets/images/member2.webp";
import img2 from "../../assets/images/member3.webp";
import img3 from "../../assets/images/member4.webp";
import img4 from "../../assets/images/member5.webp";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const team = [
  {
    name: "Managing Director",
    role: "Investment Operations & Strategy",
    img: img1,
    bio: [
      "With over two decades of experience in global financial markets and technology integration, [Name] has been a driving force in the evolution of digital asset management. Before joining the leadership team, they served as a Senior Architect at a leading global investment firm, where they specialized in the deployment of high-frequency trading algorithms and risk management frameworks. Their expertise lies at the intersection of traditional market mechanics and the emerging frontier of decentralized finance.",
      "Throughout their career, [Name] has successfully led multi-disciplinary teams across three continents, overseeing the launch of flagship products that currently manage over $5 billion in institutional assets. They are a frequent keynote speaker at international FinTech summits and have been recognized by 'Industry Insights' as a Top 40 Under 40 leader in financial innovation. Their vision is centered on democratizing access to complex investment tools through the power of artificial intelligence and transparent data structures.",
      "[Name] holds a Master of Business Administration from the Wharton School of the University of Pennsylvania and a Bachelor of Science in Computer Science from Stanford University. When not shaping the future of finance, they serve as a mentor for underprivileged youth entering the STEM fields and sit on the advisory board of several emerging green-tech startups."
    ]
  },
  {
    name: "Head of Product",
    role: "Investment Technology Solutions",
    img: img2,
    bio: [
      "With over two decades of experience in global financial markets and technology integration, [Name] has been a driving force in the evolution of digital asset management. Before joining the leadership team, they served as a Senior Architect at a leading global investment firm, where they specialized in the deployment of high-frequency trading algorithms and risk management frameworks. Their expertise lies at the intersection of traditional market mechanics and the emerging frontier of decentralized finance.",
      "Throughout their career, [Name] has successfully led multi-disciplinary teams across three continents, overseeing the launch of flagship products that currently manage over $5 billion in institutional assets. They are a frequent keynote speaker at international FinTech summits and have been recognized by 'Industry Insights' as a Top 40 Under 40 leader in financial innovation. Their vision is centered on democratizing access to complex investment tools through the power of artificial intelligence and transparent data structures.",
      "[Name] holds a Master of Business Administration from the Wharton School of the University of Pennsylvania and a Bachelor of Science in Computer Science from Stanford University. When not shaping the future of finance, they serve as a mentor for underprivileged youth entering the STEM fields and sit on the advisory board of several emerging green-tech startups."
    ]
  },
  {
    name: "Head of Analytics",
    role: "Performance Measurement & Reporting",
    img: img3,
    bio: [
      "With over two decades of experience in global financial markets and technology integration, [Name] has been a driving force in the evolution of digital asset management. Before joining the leadership team, they served as a Senior Architect at a leading global investment firm, where they specialized in the deployment of high-frequency trading algorithms and risk management frameworks. Their expertise lies at the intersection of traditional market mechanics and the emerging frontier of decentralized finance.",
      "Throughout their career, [Name] has successfully led multi-disciplinary teams across three continents, overseeing the launch of flagship products that currently manage over $5 billion in institutional assets. They are a frequent keynote speaker at international FinTech summits and have been recognized by 'Industry Insights' as a Top 40 Under 40 leader in financial innovation. Their vision is centered on democratizing access to complex investment tools through the power of artificial intelligence and transparent data structures.",
      "[Name] holds a Master of Business Administration from the Wharton School of the University of Pennsylvania and a Bachelor of Science in Computer Science from Stanford University. When not shaping the future of finance, they serve as a mentor for underprivileged youth entering the STEM fields and sit on the advisory board of several emerging green-tech startups."
    ]
  },
  {
    name: "Technology Lead",
    role: "AI & Data Engineering",
    img: img4,
    bio: [
      "With over two decades of experience in global financial markets and technology integration, [Name] has been a driving force in the evolution of digital asset management. Before joining the leadership team, they served as a Senior Architect at a leading global investment firm, where they specialized in the deployment of high-frequency trading algorithms and risk management frameworks. Their expertise lies at the intersection of traditional market mechanics and the emerging frontier of decentralized finance.",
      "Throughout their career, [Name] has successfully led multi-disciplinary teams across three continents, overseeing the launch of flagship products that currently manage over $5 billion in institutional assets. They are a frequent keynote speaker at international FinTech summits and have been recognized by 'Industry Insights' as a Top 40 Under 40 leader in financial innovation. Their vision is centered on democratizing access to complex investment tools through the power of artificial intelligence and transparent data structures.",
      "[Name] holds a Master of Business Administration from the Wharton School of the University of Pennsylvania and a Bachelor of Science in Computer Science from Stanford University. When not shaping the future of finance, they serve as a mentor for underprivileged youth entering the STEM fields and sit on the advisory board of several emerging green-tech startups."
    ]
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // Prevent background body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  return (
    <section className="py-20 bg-gray-50 text-center relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-24">
          Executive Leadership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
          {team.map((member, i) => (
            <div
              key={i}
              className="relative bg-white rounded-sm shadow-md pt-24 pb-10 px-6 flex flex-col items-center group transition-all duration-300 hover:shadow-xl"
            >
              {/* Overlapping Image Circle */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className="w-36 h-36 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600">
                  <div className="w-full h-full rounded-full border-[6px] border-white overflow-hidden">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <h4 className="text-[#0066a1] text-xl md:text-2xl font-normal mb-3">
                {member.name}
              </h4>

              <p className="text-[11px] text-gray-500 uppercase tracking-widest leading-relaxed mb-8 h-12 flex items-center justify-center">
                {member.role}
              </p>

              <div className="mt-auto">
                <button
                  onClick={() => setSelectedMember(member)}
                  className="text-[#0066a1] text-xs font-bold uppercase flex items-center hover:opacity-70 transition cursor-pointer"
                >
                  View Bio <span className="ml-2 text-lg">›</span>
                </button>
              </div>

              <div className="flex gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaFacebookF className="text-gray-400 hover:text-blue-600 cursor-pointer" />
                <FaXTwitter className="text-gray-400 hover:text-black cursor-pointer" />
                <FaLinkedinIn className="text-gray-400 hover:text-blue-700 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FIXED POPUP MODAL WRAPPED IN PORTAL */}
      {selectedMember && createPortal(
        <div
          className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedMember(null)}
        >
          {/* Wrapper to handle vertical alignment and padding */}
          <div className="flex items-start justify-center min-h-screen p-4 md:p-20">
            <div
              className="bg-white w-full max-w-4xl rounded-lg relative shadow-2xl animate-in fade-in zoom-in duration-300 mb-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Using absolute positioning */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-black transition-colors z-[100] bg-white/90 rounded-full p-2 shadow-sm"
              >
                <IoClose />
              </button>

              <div className="p-8 md:p-16 flex flex-col items-center">
                {/* Profile Image - Large Circular */}
                <div className="w-48 h-48 md:w-64 md:h-64 mb-10 rounded-full overflow-hidden border-8 border-gray-50 shadow-inner">
                  <img
                    src={selectedMember.img}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Identity */}
                <div className="text-center mb-10">
                  <h3 className="text-3xl md:text-5xl text-gray-800 font-light mb-4">
                    {selectedMember.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#0066a1] font-semibold uppercase tracking-[0.3em]">
                    {selectedMember.role}
                  </p>
                </div>

                {/* Bio Content - Professional Typography */}
                <div className="text-left text-gray-600 space-y-8 text-base md:text-lg leading-relaxed max-w-3xl border-t border-gray-100 pt-12 font-light">
                  {selectedMember.bio.map((para, idx) => (
                    <p key={idx} className="first-letter:text-2xl first-letter:font-serif">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body // Teleports the modal to the root of the document
      )}
    </section>
  );
};

export default Team;