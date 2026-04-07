import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

// Note: Ensure these paths remain correct for your local environment
import img2 from "../../assets/images/PushpendraThakur.jpeg";
import img1 from "../../assets/images/1.png";
import img3 from "../../assets/images/3.jpeg";
import img4 from "../../assets/images/default-avatar.jpeg";
import img5 from "../../assets/images/5.jpeg";
import img6 from "../../assets/images/6.jpeg";

import { FaFacebookF, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const team = [
  {
    name: "Jane Atmodjojo, CFA®, CIPM",
    role: "CEO",
    subRole: "Senior Consultant",
    email: "jane@equiforcesolutions.com",
    img: img1,
    bio: [
      "Jane co-founded EquiForce Solutions (EFS) in 2026 to modernize and streamline investment operations, performance measurement, and enterprise reporting for small and mid-sized asset managers. EFS combines purpose-built, cost-efficient modern technology with deep industry expertise to help firms elevate data quality, strengthen controls, and deliver more insightful reporting.",
      "Before launching EFS, Jane spent nearly 3 decades in leadership roles across investment operations, performance measurement and attribution, GIPS compliance, enterprise reporting, and data architecture. She has a proven track record of transforming back and middle office functions, modernizing reporting infrastructures, and implementing scalable, high-impact data and reporting solutions.",
      "She holds a B.S. from the University of Southern California (cum laude) and has earned both the Chartered Financial Analyst® (CFA®) and the Certificate in Investment Performance Measurement (CIPM) designations."
    ]
  },
  {
    name: "Vincent Tran, CIPM",
    role: "Chief Product Officer",
    subRole: "Senior Consultant",
    email: "vincent@equiforcesolutions.com",
    img: img3,
    bio: [
      "Vincent co-founded EquiForce Solutions (EFS) in 2026 with a mission to modernize and streamline investment operations, performance measurement, and enterprise reporting. As Chief Product Officer, he leads the vision, strategy, and development of EFS’s product suite.",
      "Before launching EFS, Vincent spent more than 25 years in senior roles across portfolio accounting, investment operations, and GIPS compliance. His career includes senior positions at PIMCO, Macquarie Allegiance Capital, Oaktree Capital, and ACR Alpine Capital Research.",
      "Vincent holds an MBA from the New York Institute of Technology, a B.S. from Baylor University, and the CIPM designation."
    ]
  },
  {
    name: "Pushpendra Thakur",
    role: "Chief Technology Officer",
    subRole: null, // Spacer will be added in UI
    email: "pushpendra@equiforcesolutions.com",
    img: img2,
    bio: ["Pushpendra Thakur is the Co-Founder and CTO of EFS, defining the firm’s technology vision and leading the architecture of scalable platforms."]
  },
  {
    name: "Steve",
    role: "Head of Business Development",
    subRole: null, 
    email: "steve@equiforcesolutions.com",
    img: img4,
    bio: ["Steve leads our market expansion and strategic partnerships at EquiForce."]
  },
  {
    name: "Edmund J. Woo",
    role: "Head of Client Relations",
    subRole: null,
    email: "edmund@equiforcesolutions.com",
    img: img5,
    bio: ["Edmund leads all aspects of client engagement and relationship management."]
  },
  {
    name: "Dylan Tran",
    role: "Analyst",
    subRole: null,
    email: "dylan@equiforcesolutions.com",
    img: img6,
    bio: ["Dylan supports the firm’s data operations and implementation efforts."]
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    if (selectedMember) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [selectedMember]);

  return (
    <section className="bg-gray-50 py-10 text-center relative">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Executive Leadership */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-30">
          Executive Leadership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-28 mb-20">
          {team.slice(0, 4).map((member, i) => (
            <MemberCard key={i} member={member} onSelect={setSelectedMember} />
          ))}
        </div>

        {/* Section 2: Client Relations */}
        <h2 className="text-3xl md:text-4xl font-light text-gray-700 mb-24 border-t border-gray-200 pt-16">
          Client Relations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-28 justify-center">
            {/* Empty divs to center the bottom two if needed, or just map them */}
            <div className="hidden lg:block"></div> 
            {team.slice(4).map((member, i) => (
              <MemberCard key={i} member={member} onSelect={setSelectedMember} />
            ))}
        </div>
      </div>

      {/* MODAL PORTAL */}
      {selectedMember && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md overflow-y-auto" onClick={() => setSelectedMember(null)}>
          <div className="flex items-start justify-center min-h-screen p-4 md:p-20">
            <div className="bg-white w-full max-w-4xl rounded-lg relative shadow-2xl p-8 md:p-16 flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-black">
                <IoClose />
              </button>
              
              <div className="w-48 h-48 md:w-64 md:h-64 mb-10 rounded-full overflow-hidden border-8 border-gray-50">
                <img src={selectedMember.img} alt={selectedMember.name} className="w-full h-full object-cover" />
              </div>

              <div className="text-center mb-2">
                <h3 className="text-2xl md:text-4xl text-gray-800 font-normal mb-2">{selectedMember.name}</h3>
                <p className="text-xs text-[#0066a1] font-bold uppercase tracking-widest">{selectedMember.role}</p>
                {selectedMember.subRole && <p className="text-xs text-[#0066a1] font-bold uppercase tracking-widest">{selectedMember.subRole}</p>}
              </div>

              <div className="text-left text-gray-600 space-y-6 text-base md:text-lg leading-relaxed border-t border-gray-100 pt-8 font-light max-w-3xl">
                {selectedMember.bio.map((para, idx) => <p key={idx}>{para}</p>)}
                
                {/* Highlighted Footer Text */}
                <p className="mt-12 text-sm italic pt-6 border-t border-gray-50">
                  Building the future of <span className="text-[#d97706] font-semibold">scalable, cost-efficient technology and advisory services</span>.
                </p>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

const MemberCard = ({ member, onSelect }) => (
  <div className="relative bg-white rounded-sm shadow-md pt-18 pb-5 px-6 flex flex-col items-center group transition-all hover:shadow-xl">
    <div onClick={() => onSelect(member)} className="absolute -top-16 left-1/2 transform -translate-x-1/2 cursor-pointer">
      <div className="w-34 h-34 rounded-full p-[3px] bg-gradient-to-tr from-[#0066a1] to-cyan-500">
        <div className="w-full h-full rounded-full border-[6px] border-white overflow-hidden">
          <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    {/* Name Resized to fit credentials on one line */}
    <h4 className="text-[#0066a1] text-lg font-medium mb-2 mt-2 leading-tight h-14 flex items-center text-center">
      {member.name}
    </h4>

    {/* Title Logic with Spacer */}
    <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight mb-4 min-h-[40px] flex flex-col justify-center">
      <p>{member.role}</p>
      {member.subRole ? <p className="mt-1">{member.subRole}</p> : <p className="mt-1 opacity-0">-</p>}
    </div>

    {/* Email Address */}
    <a href={`mailto:${member.email}`} className="text-[11px] text-[#d97706] font-bold mb-6 hover:underline flex items-center gap-1">
      <FaRegEnvelope /> {member.email}
    </a>

    <button onClick={() => onSelect(member)} className="text-[#0066a1] text-[10px] font-bold uppercase flex items-center hover:opacity-70 transition">
      View Bio <span className="ml-1 text-lg">›</span>
    </button>
  </div>
);

export default Team;