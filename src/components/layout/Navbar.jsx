import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import DemoModal from "../common/DemoModal";

const NAVY = "#0a2240";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false); // New state for mobile accordion
  const [aboutOpen, setAboutOpen] = useState(false);

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
          scrolled ? "bg-[#233c6a] shadow-xl py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-4 py-4  sm:px-6 lg:px-16">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              !scrolled
                ? "bg-white backdrop-blur-md shadow-lg rounded-2xl px-4 md:px-6 py-3"
                : "px-2 py-1"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} className="h-7 md:h-10" alt="logo" />
              <div className="flex flex-col leading-tight">
                <span
                  className="text-base md:text-xl font-bold transition-colors"
                  style={{ color: scrolled ? "#FFFFFF" : NAVY }}
                >
                  EquiForce
                </span>
                <span className={`text-[9px] md:text-xs -mt-1 ${scrolled ? "text-blue-100" : "text-gray-500"}`}>
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div
              className={`hidden md:flex gap-8 font-semibold items-center transition-colors ${scrolled ? "text-white" : ""}`}
              style={!scrolled ? { color: NAVY } : {}}
            >
              <Link to="/" className="hover:opacity-70 transition-all">Platform</Link>

              <div
                className="relative h-full py-2"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button className="flex items-center gap-1 hover:opacity-70 transition-all">
                  About <FiChevronDown className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                </button>

                {aboutOpen && (
                  <div className="absolute top-full -left-10 pt-4">
                    <div className="w-[450px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex">
                      <div className="w-1/2 bg-gray-50 p-6">
                        <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-2">Our Mission</p>
                        <h3 className="text-sm font-bold mb-2" style={{ color: NAVY }}>Driving Financial Innovation</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          We build tools that empower modern finance teams to scale with confidence.
                        </p>
                      </div>
                      <div className="w-1/2 p-4 flex flex-col gap-2 justify-center">
                        <Link to="/about" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 rounded-xl font-bold transition-colors">
                          About Company
                        </Link>
                        <Link to="/team" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 rounded-xl font-bold transition-colors">
                          Meet the Team
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/services" className="hover:opacity-70 transition-all">Solutions</Link>
              <Link to="/contact" className="hover:opacity-70 transition-all">Contact</Link>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 md:gap-6">
              <Link
                to="/signin"
                className={`hidden sm:block text-sm font-bold hover:opacity-70 transition-all ${scrolled ? "text-white" : ""}`}
                style={!scrolled ? { color: NAVY } : {}}
              >
                Sign In
              </Link>

              <Link
                className={`px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-xs md:text-sm font-bold shadow-md hover:scale-105 transition-all ${
                  scrolled ? "bg-white text-[#233c6a]" : "text-white"
                }`}
                style={!scrolled ? { backgroundColor: NAVY } : {}}
                to="/contact"
              >
                Try for Free
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-2xl p-1 z-[60]"
                style={{ color: scrolled || menuOpen ? (menuOpen ? NAVY : "#FFFFFF") : NAVY }}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Improved Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-[55] transform transition-transform duration-300 ease-in-out md:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full pt-24 px-8 overflow-y-auto">
            <div className="flex flex-col gap-6 font-bold text-lg" style={{ color: NAVY }}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Platform</Link>
              
              {/* Mobile Accordion for About */}
              <div>
                <button 
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                  className="flex items-center justify-between w-full"
                >
                  About <FiChevronDown className={`transition-transform ${mobileAboutOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${mobileAboutOpen ? "max-h-40 mt-4 ml-4" : "max-h-0"}`}>
                  <div className="flex flex-col gap-4 text-base font-medium text-gray-600">
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About Company</Link>
                    <Link to="/team" onClick={() => setMenuOpen(false)}>Meet the Team</Link>
                  </div>
                </div>
              </div>

              <Link to="/services" onClick={() => setMenuOpen(false)}>Solutions</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
              
              <hr className="border-gray-100 my-2" />
              
              <Link to="/signin" className="text-gray-500" onClick={() => setMenuOpen(false)}>Sign In</Link>
              <button
                className="w-full py-4 rounded-xl text-white shadow-lg active:scale-95 transition-transform"
                style={{ backgroundColor: NAVY }}
                onClick={() => {
                  setMenuOpen(false);
                  // handle modal or link
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