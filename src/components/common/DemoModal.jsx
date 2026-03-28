import { X } from "lucide-react";

const DemoModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[999] transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      ></div>

      {/* 🔥 RIGHT PANEL */}
      <div
        className={`absolute top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 md:p-8 h-full overflow-y-auto">

          {/* Close */}
          <button
            onClick={onClose}
            className="mb-6 text-gray-500 hover:text-black"
          >
            <X size={22} />
          </button>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Book your free demo
          </h2>

          <p className="text-gray-600 mb-6">
            Discover how our product can simplify your workflow. Schedule a free,
            no-obligation demo today.
          </p>

          {/* Form */}
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
            />

            <input
              type="email"
              placeholder="Your email"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your message"
              className="w-full p-3 rounded-xl border border-gray-200 bg-gray-50 outline-none"
            ></textarea>

            <button className="w-full bg-gradient-to-r from-[#0ea5a4] to-[#22d3ee] 
hover:shadow-lg hover:shadow-cyan-400/40 text-white py-3 rounded-xl font-medium hover:scale-[1.02] transition">
              Submit Request
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoModal;