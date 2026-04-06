import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from "react-icons/fi";
import logo from "../../assets/images/logo2.png";
import DemoModal from "../common/DemoModal";

const NAVY = "#0a2240";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop menu states
  const [platformOpen, setPlatformOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  // Mobile menu states
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <>
      {/* Fixed Navbar with solid #0a2240 background - No Scroll Animation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a2240] py-4 shadow-lg border-b border-white/10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Logo matching the provided image exactly */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src={logo} className="h-10 md:h-12" alt="EquiForce Logo" />
              <div className="flex flex-col justify-center mt-1">
                <span className="text-lg md:text-[22px] font-black tracking-widest text-white uppercase leading-none">
                  EquiForce
                </span>
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#d97706] uppercase mt-1 leading-none">
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex gap-8 font-semibold items-center text-white">
              
              {/* PLATFORM MEGA MENU */}
              <div
                className="relative h-full py-4 flex items-center"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#d97706] transition-colors cursor-pointer pb-1">
                  Platform{" "}
                  <FiChevronDown
                    className={`transition-transform ${
                      platformOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {platformOpen && (
                  <div className="absolute top-full -left-32 pt-4 cursor-default z-50">
                    <div className="w-[850px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex overflow-hidden text-left">
                      
                      {/* Left Column - Platform Overview */}
                      <div className="w-[35%] bg-[#eef7f8] p-8 flex flex-col border-r border-[#d4ecee]">
                        <h3 className="text-xl font-bold text-[#0a2240] mb-3">
                          Platform Overview
                        </h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                          Explore the first front-to-back system of record for investment management
                        </p>

                        <Link 
                          to="/platform" 
                          onClick={() => setPlatformOpen(false)}
                          className="bg-[#0a2240] text-white rounded-full py-3 px-6 text-sm font-bold w-full mb-8 hover:bg-[#d97706] transition-colors text-center"
                        >
                          Discover Our Platform
                        </Link>
                      </div>

                      {/* Right Column - Grid */}
                      <div className="w-[65%] bg-white p-8 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                          
                          {/* Converted these divs to Links to connect to the new pages */}
                          <Link to="/performance-measurement" onClick={() => setPlatformOpen(false)} className="group block cursor-pointer">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-[#d97706] transition-colors">Performance Measurement</h4>
                            <p className="text-sm text-gray-500 mt-1">Serve your investors with clarity.</p>
                          </Link>
                          
                          <Link to="/gips-composite" onClick={() => setPlatformOpen(false)} className="group block cursor-pointer">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-[#d97706] transition-colors">GIPS Composite Management</h4>
                            <p className="text-sm text-gray-500 mt-1">Clear daily breaks with confidence.</p>
                          </Link>
                          
                          <Link to="/investment-operations" onClick={() => setPlatformOpen(false)} className="group block cursor-pointer">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-[#d97706] transition-colors">Investment Operations</h4>
                            <p className="text-sm text-gray-500 mt-1">Manage complexity at scale.</p>
                          </Link>
                          
                          <Link to="/ai-reporting" onClick={() => setPlatformOpen(false)} className="group block cursor-pointer">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-[#d97706] transition-colors">AI-Powered Reporting</h4>
                            <p className="text-sm text-gray-500 mt-1">Maintain accurate books across every account.</p>
                          </Link>
                          
                        </div>

                        {/* Bottom AI Banner */}
                        <div className="mt-8 bg-[#eef7f8] rounded-xl p-5 flex justify-between items-center group cursor-pointer hover:bg-[#e2f1f3] transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">✨</span>
                            <div>
                              <h4 className="font-bold text-[#0a2240]">EquiForce AI</h4>
                              <p className="text-sm text-gray-600 mt-1">See what’s possible with built-in intelligence.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* ABOUT MEGA MENU */}
              <div
                className="relative h-full py-4 flex items-center"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center gap-1 hover:text-[#d97706] transition-colors cursor-pointer pb-1">
                  About{" "}
                  <FiChevronDown
                    className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {aboutOpen && (
                  <div className="absolute top-full -left-[550px] pt-4 cursor-default z-50">
                    <div className="w-[850px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex overflow-hidden text-left">
                      
                      {/* Left Column - Image & Text */}
                      <div className="w-[35%] bg-[#eef7f8] p-6 flex flex-col border-r border-[#d4ecee]">
                        <div className="rounded-xl overflow-hidden mb-6 shadow-md border border-gray-200">
                          <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                            alt="EquiForce Team Collaboration"
                            className="w-full h-32 object-cover object-center hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <p className="text-[11px] text-gray-600 mb-6 leading-relaxed">
                          EquiForce Solutions empowers investment management firms...
                        </p>
                        <button className="bg-[#0a2240] text-white rounded-xl py-3 px-6 text-sm font-bold w-fit mt-auto hover:bg-[#d97706] transition-colors flex items-center gap-2 group">
                          Learn More <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Right Column - Links Grid */}
                      <div className="w-[65%] bg-white p-8 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                          <Link to="/about" onClick={() => setAboutOpen(false)} className="group block">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-[#d97706]">About Company</h4>
                            <p className="text-sm text-gray-500 mt-1">Discover our mission and values.</p>
                          </Link>
                          <Link to="/team" onClick={() => setAboutOpen(false)} className="group block">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-[#d97706]">Meet the Team</h4>
                            <p className="text-sm text-gray-500 mt-1">Get to know the experts.</p>
                          </Link>
                          <Link to="/careers" onClick={() => setAboutOpen(false)} className="group block">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-[#d97706]">Careers</h4>
                            <p className="text-sm text-gray-500 mt-1">Join our team.</p>
                          </Link>
                        </div>

                        {/* Bottom CTA */}
                        <div className="mt-8 bg-[#eef7f8] rounded-xl p-5 flex justify-between items-center group cursor-pointer hover:bg-[#e2f1f3]">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">🚀</span>
                            <div>
                              <h4 className="font-bold text-[#0a2240]">Join EquiForce</h4>
                              <p className="text-sm text-gray-600">Explore open roles.</p>
                            </div>
                          </div>
                          <span className="font-bold text-[#0a2240] flex items-center gap-1 group-hover:translate-x-1 text-sm">
                            View Openings <FiArrowRight />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/contact" className="hover:text-[#d97706] transition-all">
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-6">
              <Link
                to="/signin"
                className="hidden sm:block text-sm font-bold text-white hover:text-[#d97706] transition-all"
              >
                Sign In
              </Link>

              <Link
                className="px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs md:text-sm font-bold shadow-md hover:scale-105 transition-all bg-[#d97706] text-white hover:bg-[#b46002]"
                to="/contact"
              >
                Try for Free
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-2xl p-1 z-[60] text-white"
              >
                {menuOpen ? <FiX className="text-[#0a2240]" /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-[55] transform transition-transform duration-300 ease-in-out md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 overflow-y-auto pb-10">
            <div
              className="flex flex-col gap-6 font-bold text-lg"
              style={{ color: NAVY }}
            >
              {/* Mobile Accordion for Platform */}
              <div>
                <button
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex items-center justify-between w-full text-left hover:text-[#d97706] transition-colors"
                >
                  Platform{" "}
                  <FiChevronDown
                    className={`transition-transform ${
                      mobilePlatformOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobilePlatformOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Replaced placeholder links with actual Platform pages */}
                  <div className="flex flex-col gap-4 text-base font-medium text-gray-600 mt-4 ml-4 pb-2">
                    <Link to="/performance-measurement" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">Performance Measurement</Link>
                    <Link to="/gips-composite" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">GIPS Composite</Link>
                    <Link to="/investment-operations" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">Investment Operations</Link>
                    <Link to="/ai-reporting" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">AI-Powered Reporting</Link>
                  </div>
                </div>
              </div>

              {/* Mobile Accordion for About */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between w-full text-left hover:text-[#d97706] transition-colors"
                >
                  About{" "}
                  <FiChevronDown
                    className={`transition-transform ${
                      mobileAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    mobileAboutOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="flex flex-col gap-4 text-base font-medium text-gray-600 mt-4 ml-4 pb-2">
                    <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">About Company</Link>
                    <Link to="/team" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">Meet the Team</Link>
                  </div>
                </div>
              </div>

              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#d97706] transition-colors">
                Contact
              </Link>

              <hr className="border-gray-100 my-2" />

              <Link
                to="/signin"
                className="text-gray-500 hover:text-[#d97706] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <button
                className="w-full py-4 rounded-xl text-white shadow-lg active:scale-95 transition-transform bg-[#d97706] hover:bg-[#b46002]"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Try for Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      <DemoModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Navbar;