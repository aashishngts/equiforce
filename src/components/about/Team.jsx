import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

import img2 from "../../assets/images/PushpendraThakur.jpeg";
import img1 from "../../assets/images/1.png";
import img3 from "../../assets/images/3.jpeg";
import img4 from "../../assets/images/default-avatar.jpeg";
import img5 from "../../assets/images/5.jpeg";
import img6 from "../../assets/images/6.jpeg";

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const team = [

    {
    name: "Jane Atmodjojo, CFA®, CIPM",
    role: "CEO/Senior Consultant",
    img: img1,
    bio: [
      "Jane co founded EquiForce Solutions (EFS) in 2026 to modernize and streamline investment operations, performance measurement, and enterprise reporting for small and mid sized asset managers.  EFS combines purpose built, cost efficient modern technology with deep industry expertise to help firms elevate data quality, strengthen controls, and deliver more insightful reporting.",
      "Before launching EFS, Jane spent nearly 3 decades in leadership roles across investment operations, performance measurement and attribution, GIPS compliance, enterprise reporting, and data architecture. She has a proven track record of transforming back  and middle office functions, modernizing reporting infrastructures, and implementing scalable, high impact data and reporting solutions. Her career includes key roles at Oaktree Capital Management, Capital Group, Kayne Anderson Rudnick Investment Management, ACR Alpine Capital Research, and fintech innovator Wilshire Analytics.",
      "She holds a B.S. from the University of Southern California (cum laude) and has earned both the Chartered Financial Analyst® (CFA®) and the Certificate in Investment Performance Measurement (CIPM) designations."
    ]
  },


  {
    name: "Pushpendra Thakur",
    role: "Chief Technology Officer",
    img: img2,
    bio: [
      "Pushpendra Thakur is the Co-Founder and Chief Technology Officer of EquiForce Solutions (EFS), where he defines the firm’s technology vision and leads the architecture of scalable, high-performance platforms for investment operations, performance measurement, and enterprise reporting. Since co-founding EFS in 2026, he has focused on building purpose-engineered solutions that combine modern cloud architecture, data engineering, and AI to help asset managers improve data integrity, strengthen controls, and generate decision-grade insights. He is also the Founder of GoldenR Technology (2024), a fintech firm specializing in advanced data platforms and intelligent automation; through its strategic partnership with EFS, GoldenR enables the delivery of robust, next-generation data and analytics capabilities.",
      "With deep expertise in financial technology and enterprise data architecture, Pushpendra has a strong track record of delivering large-scale, high-impact solutions for global investment firms. His experience includes building industry-first platforms such as an integrated Form PF reporting solution and a fully automated FX trading system, as well as architecting high-performance data ecosystems capable of processing complex, multi-source portfolio data at scale. He has led cloud transformation initiatives, including migration to AWS-based data lakes, and designed end-to-end frameworks spanning data ingestion, validation, performance computation, and reporting—enabling firms to operate with greater efficiency, accuracy, and resilience."
    ]
  },

  {
    name: "Vincent Tran, CIPM",
    role: "Chief Product Officer/Senior Consultant",
    img: img3,
    bio: [
      "Vincent co founded EquiForce Solutions (EFS) in 2026 with a mission to modernize and streamline investment operations, performance measurement, and enterprise reporting for small and mid sized asset managers. As Chief Product Officer, he leads the vision, strategy, and development of EFS’s product suite, ensuring the platform delivers scalable, intuitive, and data accurate solutions for complex investment workflows.",
      "Before launching EFS, Vincent spent more than 25 years in senior roles across portfolio accounting, investment operations, reconciliation, performance measurement, analytics, GIPS compliance, and reporting automation. He has a long track record of designing and implementing technology that automates processes, enhances data integrity, and enables firms to scale efficiently. His career includes senior positions at PIMCO, Macquarie Allegiance Capital, Oaktree Capital, Kayne Anderson Rudnick Investment Management, and ACR Alpine Capital Research.",
      "Vincent holds an MBA (with Distinction) from the New York Institute of Technology, a B.S. from Baylor University, and the Certificate in Investment Performance Measurement (CIPM) designation."
    ]
  },
  {
    name: "Steve (TBD)",
    role: "Head of Business Development",
    img: img4,
    bio: [
      ""
    ]
  },


   {
    name: "Edmund J. Woo",
    role: "Head of Client Relations",
    img: img5,
    bio: [
      "As Head of Client Relations at EquiForce Solutions (EFS), Edmund leads all aspects of client engagement, relationship management, and implementation success. He ensures that every client partnership is supported with clear communication, seamless onboarding, and long term strategic alignment.","Before joining EFS, Edmund spent nearly three decades in senior client relations roles at Wilshire Analytics and Charles River Development, where he built deep expertise in managing complex client needs across investment technology and analytics platforms.","Edmund holds an MBA and B.S. from the University of Arizona."
    ]
  },


    {
    name: "Dylan Tran",
    role: "Analyst",
    img: img6,
    bio: [
      "As an Analyst at EquiForce Solutions (EFS), Dylan supports the firm’s data operations and implementation efforts. He is responsible for implementation of data validation, and quality control across client datasets, ensuring accuracy and consistency throughout the onboarding and reporting processes.","Dylan holds a B.A. from the University of California, Los Angeles (UCLA)."
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
    <section className= "bg-gray-50 text-center relative">
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
              <div  onClick={() => setSelectedMember(member)}  className="absolute -top-16 left-1/2 transform -translate-x-1/2">
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

              <h4 className="text-[#0066a1] text-xl md:text-xl font-normal mb-3 mt-2">
                {member.name}
              </h4>

              {/* Reduced the length of the tag slightly so it fits nicely on mobile/tablet screens */}
              <p className="text-[10px] md:text-[11px] text-gray-500 uppercase tracking-widest leading-relaxed mb-8 h-12 flex items-center justify-center">
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