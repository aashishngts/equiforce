import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiArrowRight } from "react-icons/fi";
import logo from "../../assets/images/logo2.png";
import DemoModal from "../common/DemoModal";

const NAVY = "#0a2240";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Desktop menu states
  const [aboutOpen, setAboutOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);

  // Mobile menu states
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "shadow-xl py-2" : "bg-transparent py-4"
        }`}
        style={
          scrolled
            ? {
                background:
                  "linear-gradient(106deg, rgba(35, 60, 106, 1) 76%, rgba(25, 112, 125, 1) 100%)",
              }
            : {}
        }
      >
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              !scrolled
                ? "bg-white backdrop-blur-md shadow-lg rounded-2xl px-4 md:px-6 py-3"
                : "px-2 py-1"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} className="h-10 md:h-15" alt="logo" />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-base md:text-xl font-bold transition-colors"
                  style={{ color: scrolled ? "#FFFFFF" : NAVY }}
                >
                  EquiForce
                </span>
                <span
                  className={`text-[9px] md:text-xs -mt-1 ${
                    scrolled ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div
              className={`hidden md:flex gap-8 font-semibold items-center transition-colors ${
                scrolled ? "text-white" : ""
              }`}
              style={!scrolled ? { color: NAVY } : {}}
            >
              {/* Platform Mega Menu */}
              <div
                className="relative h-full py-2"
                onMouseEnter={() => setPlatformOpen(true)}
                onMouseLeave={() => setPlatformOpen(false)}
              >
                <button className="flex items-center gap-1 hover:opacity-70 transition-all">
                  Platform{" "}
                  <FiChevronDown
                    className={`transition-transform ${
                      platformOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {platformOpen && (
                  <div className="absolute top-full -left-32 pt-4 cursor-default">
                    <div className="w-[850px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex overflow-hidden text-left">
                      {/* Left Column Colored - Platform Image */}
                      <div className="w-[35%] bg-[#eef7f8] p-6 flex flex-col border-r border-[#d4ecee]">
                        <div className="rounded-xl overflow-hidden mb-6 shadow-md border border-gray-200">
                          <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                            alt="Platform Dashboard Preview"
                            className="w-full h-32 object-cover object-top hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <h3 className="text-xl font-bold text-[#0a2240] mb-2">
                          Platform Overview
                        </h3>
                        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                          Explore the first front-to-back system of record for
                          investment management.
                        </p>

                        <button className="bg-[#0a2240] text-white rounded-xl py-3 px-6 text-sm font-bold w-fit mt-auto hover:bg-blue-900 transition-colors flex items-center gap-2 group">
                          Learn More{" "}
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Right Column Links Grid */}
                      <div className="w-[65%] bg-white p-8 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                          <div>
                            <h4 className="font-bold text-[#0a2240] text-base hover:text-blue-600 cursor-pointer transition-colors">
                              Client Engagement
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Serve your investors with clarity.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0a2240] text-base hover:text-blue-600 cursor-pointer transition-colors">
                              Reconciliation
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Clear daily breaks with confidence.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0a2240] text-base hover:text-blue-600 cursor-pointer transition-colors">
                              Portfolio Management
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Manage complexity at scale.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0a2240] text-base hover:text-blue-600 cursor-pointer transition-colors">
                              Accounting
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Maintain accurate books across every account.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0a2240] text-base hover:text-blue-600 cursor-pointer transition-colors">
                              Trading
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Execute trades with speed and control.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-[#0a2240] text-base hover:text-blue-600 cursor-pointer transition-colors">
                              Reporting
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Deliver insights your team can trust.
                            </p>
                          </div>
                        </div>

                        {/* Bottom AI Banner */}
                        <div className="mt-8 bg-[#eef7f8] rounded-xl p-5 flex justify-between items-center group cursor-pointer hover:bg-[#e2f1f3] transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">✨</span>
                            <div>
                              <h4 className="font-bold text-[#0a2240]">
                                EquiForce AI
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                See what’s possible with built-in intelligence.
                              </p>
                            </div>
                          </div>
                          <span className="font-bold text-[#0a2240] flex items-center gap-1 group-hover:translate-x-1 transition-transform text-sm">
                            Learn More <FiArrowRight />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About Mega Menu (NOW FORMATTED LIKE PLATFORM) */}
              <div
                className="relative h-full py-2"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center gap-1 hover:opacity-70 transition-all">
                  About{" "}
                  <FiChevronDown
                    className={`transition-transform ${
                      aboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {aboutOpen && (
                  <div className="absolute top-full -left-20 pt-4 cursor-default">
                    {/* Matched width and overall layout structure from Platform */}
                    <div className="w-[850px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex overflow-hidden text-left">
                      {/* Left Column - Matched width (35%), padding, and styling */}
                      <div className="w-[35%] bg-[#eef7f8] p-6 flex flex-col border-r border-[#d4ecee]">
                        <div className="rounded-xl overflow-hidden mb-6 shadow-md border border-gray-200">
                          <img
                            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                            alt="EquiForce Team Collaboration"
                            className="w-full h-32 object-cover object-center hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <h3 className="text-md font-bold text-[#0a2240] mb-2">
                          Mission
                        </h3>
                        <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                          EquiForce Solutions empowers investment management
                          firms with purpose-built technology — delivering
                          precision-engineered solutions for performance
                          measurement, composite management, fund accounting,
                          reconciliation, and investment reporting.
                        </p>

                        {/* Matched Button Style */}
                        <button className="bg-[#0a2240] text-white rounded-xl py-3 px-6 text-sm font-bold w-fit mt-auto hover:bg-blue-900 transition-colors flex items-center gap-2 group">
                          Learn More{" "}
                          <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      {/* Right Column Links Grid - Matched width (65%) and grid layout */}
                      <div className="w-[65%] bg-white p-8 flex flex-col justify-between">
                        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
                          <Link to="/about" className="group block">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-blue-600 transition-colors">
                              About Company
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Discover our mission, vision, and core values.
                            </p>
                          </Link>
                          <Link to="/team" className="group block">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-blue-600 transition-colors">
                              Meet the Team
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Get to know the experts behind EquiForce.
                            </p>
                          </Link>
                          <Link to="/" className="group block">
                            <h4 className="font-bold text-[#0a2240] text-base group-hover:text-blue-600 transition-colors">
                              Careers
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">
                              Join our growing team of innovators.
                            </p>
                          </Link>
                        </div>

                        {/* Bottom Banner - Matched style */}
                        <div className="mt-8 bg-[#eef7f8] rounded-xl p-5 flex justify-between items-center group cursor-pointer hover:bg-[#e2f1f3] transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="text-xl">🚀</span>
                            <div>
                              <h4 className="font-bold text-[#0a2240]">
                                Join EquiForce
                              </h4>
                              <p className="text-sm text-gray-600 mt-1">
                                Explore open roles and build the future of
                                finance.
                              </p>
                            </div>
                          </div>
                          <span className="font-bold text-[#0a2240] flex items-center gap-1 group-hover:translate-x-1 transition-transform text-sm">
                            View Openings <FiArrowRight />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/services" className="hover:opacity-70 transition-all">
                Solutions
              </Link>
              <Link to="/contact" className="hover:opacity-70 transition-all">
                Contact
              </Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-6">
              <Link
                to="/signin"
                className={`hidden sm:block text-sm font-bold hover:opacity-70 transition-all ${
                  scrolled ? "text-white" : ""
                }`}
                style={!scrolled ? { color: '#000' } : {}}
              >
                Sign In
              </Link>

              <Link
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs md:text-sm font-bold shadow-md hover:scale-105 transition-all ${
                  scrolled ? "bg-white text-[#d97706]" : "text-white"
                }`}
                style={!scrolled ? { backgroundColor: "#d97706" } : {}}
                to="/contact"
              >
                Try for Free
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-2xl p-1 z-[60]"
                style={{
                  color:
                    scrolled || menuOpen ? (menuOpen ? NAVY : "#FFFFFF") : NAVY,
                }}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
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
                  className="flex items-center justify-between w-full text-left"
                >
                  Platform{" "}
                  <FiChevronDown
                    className={`transition-transform ${
                      mobilePlatformOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobilePlatformOpen ? "max-h-64 mt-4 ml-4" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-4 text-base font-medium text-gray-600">
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      Platform Overview
                    </Link>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      Unified Data
                    </Link>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                      AI Agents
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile Accordion for About */}
              <div>
                <button
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between w-full text-left"
                >
                  About{" "}
                  <FiChevronDown
                    className={`transition-transform ${
                      mobileAboutOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileAboutOpen ? "max-h-40 mt-4 ml-4" : "max-h-0"
                  }`}
                >
                  <div className="flex flex-col gap-4 text-base font-medium text-gray-600">
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                      About Company
                    </Link>
                    <Link to="/team" onClick={() => setMenuOpen(false)}>
                      Meet the Team
                    </Link>
                  </div>
                </div>
              </div>

              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Solutions
              </Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>

              <hr className="border-gray-100 my-2" />

              <Link
                to="/signin"
                className="text-gray-500"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <button
                className="w-full py-4 rounded-xl text-white shadow-lg active:scale-95 transition-transform"
                style={{ backgroundColor: NAVY }}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                Get Started
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
