import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import DemoModal from "../common/DemoModal";

const NAVY = "#0a2240";
const SCROLLED_BLUE = "#233c6a";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper for dynamic text color
  const textColor = scrolled ? "text-white" : `text-[${NAVY}]`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[#233c6a] shadow-xl py-2" : "bg-transparent py-4"
        }`}
      >
       <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              !scrolled
                ? "bg-white backdrop-blur-md  shadow-lg rounded-2xl px-6 py-3"
                : "px-2 py-1"
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} className="h-8 md:h-10" alt="logo" />
              <div className="flex flex-col leading-tight">
                <span 
                  className="text-lg md:text-xl font-bold transition-colors" 
                  style={{ color: scrolled ? "#FFFFFF" : NAVY }}
                >
                  EquiForce
                </span>
                <span className={`text-[10px] md:text-xs -mt-1 ${scrolled ? "text-blue-100" : "text-gray-500"}`}>
                  Solutions
                </span>
              </div>
            </Link>

            {/* Navigation Links */}
            <div 
              className={`hidden md:flex gap-8 font-semibold items-center transition-colors ${scrolled ? "text-white" : ""}`}
              style={!scrolled ? { color: NAVY } : {}}
            >
              <Link to="/" className="hover:opacity-70 transition-all">Platform</Link>

              {/* About Dropdown with Info Section */}
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
                      {/* Info Side */}
                      <div className="w-1/2 bg-gray-50 p-6">
                        <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-2">Our Mission</p>
                        <h3 className="text-sm font-bold mb-2" style={{ color: NAVY }}>Driving Financial Innovation</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          We build tools that empower modern finance teams to scale with confidence and absolute clarity.
                        </p>
                      </div>
                      {/* Buttons Side */}
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
            <div className="flex items-center gap-3 lg:gap-6">
              <Link 
                to="/signin" 
                className={`hidden sm:block text-sm font-bold hover:opacity-70 transition-all ${scrolled ? "text-white" : ""}`}
                style={!scrolled ? { color: NAVY } : {}}
              >
                Sign In
              </Link>
              
              <Link
                className={`px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:scale-105 transition-all ${
                  scrolled ? "bg-white text-[#233c6a]" : "text-white"
                }`}
                style={!scrolled ? { backgroundColor: NAVY } : {}}
                to="/contact"
              >
                Try for Free 
                
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden text-3xl p-1"
                style={{ color: scrolled ? "#FFFFFF" : NAVY }}
              >
                {menuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-2xl">
            <div className="px-6 py-8 flex flex-col gap-5 font-bold" style={{ color: NAVY }}>
              <Link to="/platform" onClick={() => setMenuOpen(false)}>Platform</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About Company</Link>
              <Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
              <Link to="/services" onClick={() => setMenuOpen(false)}>Solutions</Link>
              <hr className="border-gray-100" />
              <Link to="/signin" onClick={() => setMenuOpen(false)}>Sign In</Link>
              <button
                className="w-full py-4 rounded-xl text-white shadow-lg"
                style={{ backgroundColor: NAVY }}
              >
                Try for Free
              </button>
            </div>
          </div>
        )}
      </nav>

      <DemoModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
};

export default Navbar;