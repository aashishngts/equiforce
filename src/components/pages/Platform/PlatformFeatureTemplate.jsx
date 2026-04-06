// src/components/pages/Platform/PlatformFeatureTemplate.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ─── Animation variants factory ──────────────────────────────────────────────
const makeVariants = (fromX, delay = 0) => ({
  hidden: { opacity: 0, x: fromX, y: 10 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
  exit: {
    opacity: 0,
    x: fromX * 0.4,
    y: -10,
    transition: { duration: 0.4, ease: [0.55, 0, 1, 0.45] },
  },
});

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.35, ease: [0.55, 0, 1, 0.45] },
  },
});

// once: false → animation fires every time element enters/exits viewport
const VP = { once: false, margin: "-90px" };

// ─── Reusable animated section ────────────────────────────────────────────────
const FeatureSection = ({ feature, index }) => {
  const isEven = index % 2 === 0;
  const highlights = feature.highlights || [];

  // Text slides from left on even, right on odd. Card is opposite.
  const textFromX = isEven ? -70 : 70;
  const cardFromX = isEven ? 70 : -70;

  return (
    <div className="relative py-16 md:py-24">
      {/* Connector line between sections */}
      {index > 0 && (
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={VP}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#d97706]/30 to-transparent"
        />
      )}

      <div
        className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center ${
          isEven ? "" : "md:[direction:rtl]"
        }`}
      >
        {/* ── Text Side ── */}
        <motion.div
          variants={makeVariants(textFromX)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={VP}
          className="[direction:ltr] flex flex-col gap-6"
        >
          {/* Step badge */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={VP}
            className="inline-flex items-center gap-2 w-fit"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#d97706]/10 text-[#d97706] text-sm font-black border border-[#d97706]/20">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[#d97706] text-sm font-semibold tracking-widest uppercase">
              {feature.tag || "Feature"}
            </span>
          </motion.div>

          <motion.h2
            variants={makeVariants(textFromX, 0.05)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={VP}
            className="text-3xl md:text-4xl font-black text-[#0a2240] leading-tight"
          >
            {feature.title}
          </motion.h2>

          <motion.p
            variants={fadeUp(0.12)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={VP}
            className="text-gray-500 text-lg leading-relaxed"
          >
            {feature.description}
          </motion.p>

          {/* Highlight bullets — each staggers in */}
          {highlights.length > 0 && (
            <ul className="flex flex-col gap-3 mt-2">
              {highlights.map((h, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp(0.2 + i * 0.08)}
                  initial="hidden"
                  whileInView="show"
                  exit="exit"
                  viewport={VP}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#d97706]/10 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5.5L4 7.5L8 3"
                        stroke="#d97706"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-600 text-sm">{h}</span>
                </motion.li>
              ))}
            </ul>
          )}

          <motion.div
            variants={fadeUp(0.35)}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={VP}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-[#d97706] font-bold text-sm mt-2 group w-fit"
            >
              Learn more
              <svg
                className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Visual / Card Side ── */}
        <motion.div
          variants={makeVariants(cardFromX, 0.1)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={VP}
          className="[direction:ltr]"
        >
          <FeatureVisualCard feature={feature} isEven={isEven} />
        </motion.div>
      </div>
    </div>
  );
};

// ─── Visual card component ─────────────────────────────────────────────────────
const FeatureVisualCard = ({ feature, isEven }) => {
  const accent = isEven
    ? "from-[#eef7f8] to-[#f0f9ff]"
    : "from-[#fff8f0] to-[#fffbf5]";
  const border = isEven ? "border-[#d4ecee]" : "border-[#f5e0c3]";

  return (
    <div
      className={`relative rounded-3xl bg-gradient-to-br ${accent} border ${border} p-8 overflow-hidden min-h-[340px] flex flex-col justify-between`}
    >
      {/* Decorative blob */}
      <div
        className={`absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-20 ${
          isEven ? "bg-[#1d9e75]" : "bg-[#d97706]"
        }`}
      />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={VP}
          className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-white/80 flex items-center justify-center text-3xl mb-6"
        >
          {feature.emoji}
        </motion.div>

        {/* Stat pills — stagger */}
        <div className="flex flex-wrap gap-2 mb-4">
          {(feature.stats || []).map((s, i) => (
            <motion.span
              key={i}
              variants={fadeUp(0.28 + i * 0.09)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={VP}
              className="inline-flex items-center gap-1 bg-white/70 backdrop-blur-sm border border-white/60 text-[#0a2240] text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              <span className="text-[#d97706]">{s.icon}</span>
              {s.label}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Mini data card */}
      <motion.div
        variants={fadeUp(0.38)}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={VP}
        className="relative z-10 bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/60"
      >
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-3">
          {feature.cardLabel || "Quick Insight"}
        </p>
        <div className="flex items-end gap-4">
          {(feature.metrics || []).map((m, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.44 + i * 0.07)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={VP}
            >
              <p className="text-2xl font-black text-[#0a2240]">{m.value}</p>
              <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// ─── Main template ─────────────────────────────────────────────────────────────
const PlatformFeatureTemplate = ({ data }) => {
  return (
    <div className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-16">

        {/* ── Hero (fires on page load, not scroll) ── */}
        <motion.div
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-center max-w-3xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-sm font-bold tracking-widest text-[#d97706] uppercase mb-4 bg-[#d97706]/10 px-4 py-1.5 rounded-full"
          >
            {data.badge || "Platform"}
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-black text-[#0a2240] mb-6 leading-tight">
            {data.titleStart}{" "}
            <span className="relative inline-block">
              <span className="text-[#d97706]">{data.titleHighlight}</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 w-full h-1 bg-[#d97706]/30 rounded-full origin-left"
              />
            </span>
          </h1>

          <p className="text-lg text-gray-500 leading-relaxed">
            {data.heroDescription}
          </p>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-24 h-1 bg-gradient-to-r from-[#d97706] to-[#d97706]/30 rounded-full mx-auto mb-4"
        />

        {/* ── Alternating Feature Sections ── */}
        <div className="divide-y divide-gray-100">
          {data.features.map((feature, index) => (
            <FeatureSection key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="show"
          exit="exit"
          viewport={VP}
          className="mt-16 rounded-3xl bg-[#0a2240] p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#d97706_0%,_transparent_60%)] opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#1d9e75_0%,_transparent_60%)] opacity-10" />
          <div className="relative z-10">
            <motion.p
              variants={fadeUp(0.1)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={VP}
              className="text-sm font-bold tracking-widest text-[#d97706] uppercase mb-4"
            >
              Ready to get started?
            </motion.p>
            <motion.h2
              variants={fadeUp(0.18)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={VP}
              className="text-3xl md:text-4xl font-black text-white mb-6"
            >
              See {data.titleHighlight} in action
            </motion.h2>
            <motion.p
              variants={fadeUp(0.25)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={VP}
              className="text-gray-400 mb-8 max-w-xl mx-auto"
            >
              Schedule a personalized demo and discover how EquiForce transforms
              your investment operations.
            </motion.p>
            <motion.div
              variants={fadeUp(0.32)}
              initial="hidden"
              whileInView="show"
              exit="exit"
              viewport={VP}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#d97706] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#b46002] transition-colors"
              >
                Request a Demo
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default PlatformFeatureTemplate;