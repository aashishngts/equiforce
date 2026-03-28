import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/images/logo.png";
import DemoModal from "../common/DemoModal";

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* OUTER */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl border-b border-gray-200 shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* INNER */}
        <div
          className={`flex justify-center transition-all duration-300 ${
            scrolled ? "mt-0" : "mt-4"
          }`}
        >
          <div
            className={`w-[92%] max-w-6xl flex items-center justify-between transition-all duration-300 ${
              scrolled
                ? "px-4 sm:px-6 py-3 md:py-4"
                : "px-4 sm:px-6 py-3 md:py-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-gray-200 shadow-lg"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img src={logo} className="h-8 md:h-10" />
              <span className="text-lg md:text-xl font-semibold text-gray-800">
                EquiForce
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex gap-6 lg:gap-8 text-gray-700 font-medium">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Solutions</Link>
              <Link to="/contact">Contact</Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white px-5 py-2 rounded-xl font-medium shadow-md hover:scale-105 transition"
              >
                Get a Demo
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl text-gray-800"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* 🔥 MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md animate-scaleIn">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4 text-gray-700 font-medium">
              
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/services" onClick={() => setMenuOpen(false)}>Solutions</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

              <button
                onClick={() => {
                  setOpenModal(true);
                  setMenuOpen(false);
                }}
                className="mt-2 bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] text-white px-5 py-3 rounded-xl font-medium"
              >
                Get a Demo
              </button>

            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      <DemoModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
};

export default Navbar;