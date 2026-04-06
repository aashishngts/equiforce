import React from "react";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Target, 
  RefreshCcw, 
  Cpu, 
  Users, 
  Layers, 
  BrainCircuit,
  ArrowRight
} from "lucide-react";

// Colors from reference images
const NAVY = "#0a2240";
const ORANGE = "#d97706";
const MINT_BG = "#eff9fb";
const MINT_LABEL_BG = "#ccf1f5";
const GRAY_TEXT = "#555555";

// Content extracted from "OUR FIRM SOLUTIONS"
const firmSolutions = [
  {
    title: "Performance Measurement",
    desc: "Holdings-based (IBOR) and Transaction-based (ABOR/PBOR) return and attribution at security-, portfolio-, and composite-levels.",
    icon: BarChart3,
  },
  {
    title: "GIPS Composite Management",
    desc: "Structured composite construction and maintenance built for investment operations workflows.",
    icon: Target,
  },
  {
    title: "Investment Operations & Reconciliation",
    desc: "Investment data reconciliation across custodians and systems of record.",
    icon: RefreshCcw,
  },
  {
    title: "AI-Powered Reporting",
    desc: "Intelligent, automated investment reporting that surfaces insights and streamlines manual effort.",
    icon: Cpu,
  },
];

// Content extracted from "OUR DIFFERENTIATORS"
const differentiators = [
  {
    num: "1",
    title: "Consultants, Not Just Vendors",
    desc: "We are investment operations practitioners with nearly 30 years of hands-on experience — advising, implementing, and optimizing alongside our clients.",
    icon: Users,
  },
  {
    num: "2",
    title: "Purpose-Built Technology",
    desc: "Every feature is engineered for investment management workflows — not adapted from generic software or retrofitted from another industry.", // updated desc to match a cleaner differentiable pattern
    icon: Layers,
  },
  {
    num: "3",
    title: "AI at the Core",
    desc: "Embedded AI technologies that automate repetitive tasks, surface actionable insights, and give clients a measurable competitive edge.",
    icon: BrainCircuit,
  },
];

const Platform = () => {
  return (
    <div 
      className="min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden"
      style={{ backgroundColor: MINT_BG }}
    >
      {/* 1. HERO / MISSION STATEMENT SECTION */}
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 text-center relative z-10 mb-20 md:mb-32">
        {/* Glowing orb effect behind the text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#2dd4bf]/20 blur-[120px] rounded-full pointer-events-none"></div>

        {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6" style={{ color: ORANGE }}>
          Mission Statement
        </div> */}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight relative z-10" style={{ color: NAVY }}>
          Your Strategic Partner <br className="hidden md:block" />
          <span style={{ color: ORANGE }}>Performance & GIPS</span>
        </h1>

        <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed mb-10 relative z-10 font-medium" style={{ color: GRAY_TEXT }}>
          <strong style={{ color: '#000' }}>EquiForce Solutions</strong> empowers investment management firms with <strong style={{ color: '#000' }}>purpose-built technology</strong> — delivering precision-engineered solutions for performance measurement, composite management, fund accounting, reconciliation, and investment reporting. 
          <br /><br />
          More than a software provider, we are a <strong style={{ color: '#000' }}>strategic partner and consultants</strong> with nearly three decades of investment operations expertise — integrating <strong style={{ color: '#000' }}>AI technologies</strong> that enable our clients to operate with accuracy, confidence, and a competitive edge.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="px-8 py-4 rounded-xl font-bold text-base hover:opacity-90 active:scale-95 transition-all duration-300 shadow-md flex items-center justify-center gap-2 text-white" style={{ backgroundColor: NAVY }}>
            Explore Solutions <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* 2. OUR FIRM SOLUTIONS GRID */}
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10 mb-20 md:mb-32">
        <div className="mb-12 text-center md:text-left border-b border-white/20 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider" style={{ color: NAVY }}>Our Firm Solutions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {firmSolutions.map((solution, idx) => {
            const Icon = solution.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/70 hover:-translate-y-1 transition-all duration-300 flex flex-col border-b-4"
                style={{ borderBottomColor: ORANGE }}
              >
                {/* Pale Mint box label */}
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-5" style={{ backgroundColor: MINT_LABEL_BG, color: NAVY }}>
                  Core Solutions
                </div>

                <div className="w-12 h-12 mb-5 rounded-2xl flex items-center justify-center shadow-inner border" style={{ backgroundColor: '#fff', borderColor: '#eee' }}>
                  {/* Icon representations */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#effdff' }}>
                    <Icon size={24} strokeWidth={2} style={{ color: ORANGE }} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>{solution.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: GRAY_TEXT }}>{solution.desc}</p>
                <Link to="/" className="inline-flex items-center gap-2 mt-auto pt-6 text-sm font-bold uppercase tracking-wide hover:opacity-80" style={{ color: ORANGE }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. OUR DIFFERENTIATORS */}
      <section className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="mb-12 text-center md:text-left border-b border-white/20 pb-4">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider" style={{ color: NAVY }}>Our Differentiators</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 group hover:border-[#eee] hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Newer Number Style: orange numbered circle in pale cyan/mint circle */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: MINT_LABEL_BG }}>
                    <span className="text-lg font-black" style={{ color: ORANGE }}>{item.num}</span>
                  </div>
                  {/* simplified colored icons */}
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: MINT_LABEL_BG }}>
                    <Icon size={20} style={{ color: ORANGE }} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4" style={{ color: NAVY }}>{item.title}</h3>
                <p className="leading-relaxed font-medium" style={{ color: GRAY_TEXT }}>
                  {item.desc}
                </p>
                <Link to="/" className="inline-flex items-center gap-2 mt-auto pt-8 text-sm font-bold uppercase tracking-wide hover:opacity-80" style={{ color: ORANGE }}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Platform;