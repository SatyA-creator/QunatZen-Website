import { motion } from "framer-motion";
import { useState } from "react";
import {
  Shield,
  Layers,
  UserCheck,
  Award,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  LucideIcon,
} from "lucide-react";

interface LetterCard {
  letter: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const letters: LetterCard[] = [
  {
    letter: "Q",
    title: "Quantum-Proofing Made Simple",
    description:
      "Add post-quantum signatures to every transaction without waiting for a chain to go for a hard fork.",
    icon: Shield,
  },
  {
    letter: "R",
    title: "Ready Today",
    description:
      "Works instantly with wallets, dApps, bridges, and custodians saving years of re-engineering and saving millions of dollars for L1/L2 by going hard fork.",
    icon: Layers,
  },
  {
    letter: "S",
    title: "Saves Millions",
    description:
      "Avoid the massive cost of consensus surgery, protocol audits, and disruptive governance upgrades.",
    icon: UserCheck,
  },
  {
    letter: "T",
    title: "Time Advantage",
    description:
      "Stay protected against “Harvest-Now, Decrypt-Later” and supercomputers already scaling today.",
    icon: Award,
  },
  {
    letter: "U",
    title: "Universal Compatibility",
    description:
      "Chain-agnostic SDK supports Ethereum, BNB, Solana, Polygon, Cosmos, and more.",
    icon: CheckCircle2,
  },
  {
    letter: "V",
    title: "Verified By Standards",
    description:
      "Built on NIST-approved post-quantum cryptography (Dilithium 5, Kyber).",
    icon: Sparkles,
  },
  {
    letter: "W",
    title: "Without UX Friction",
    description:
      "Users keep the same signing flow; QuantZen™ just adds a second, invisible signature lock.",
    icon: Sparkles,
  },
  {
    letter: "X",
    title: "eXtra Layer Of Defense",
    description:
      "Stops front-running, phantom transactions, replay attacks, and insider risks.",
    icon: Sparkles,
  },
  {
    letter: "Y",
    title: "Your Safety Net",
    description:
      "Even if ECDSA is broken in the 2030s, your history stays secure with PQ signatures bound to every transaction.",
    icon: Sparkles,
  },
  {
    letter: "Z",
    title: "Zero Disruption",
    description:
      "No forks. No governance deadlocks. No migrations. Just drop in, sign, and you're quantum-safe.",
    icon: Sparkles,
  },
];

const ValueProposition = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ActiveIcon = letters[activeIndex].icon;

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % letters.length);
  };

  const title = letters[activeIndex].title;
  const firstLetter = title.charAt(0);
  const restOfTitle = title.slice(1);

  return (
    <section className="relative py-24 overflow-x-hidden w-full">
      {/* Custom Color Background Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "rgba(57, 96, 134, 0.08)",
        }}
      />

      {/* 🌈 Animated Aurora Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(0,255,255,0.15), rgba(0,128,255,0.1), rgba(255,255,255,0.05))",
          backgroundSize: "200% 200%",
          filter: "blur(80px)",
        }}
      />

      {/* ✨ Subtle Particle Grid Overlay */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* 🌗 Light/Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/60 backdrop-blur-[2px] z-0" />

      {/* 🌟 Actual Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-full">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          From{" "}
          <span className="text-gradient font-logo tracking-wide">Q</span> to{" "}
          <span className="text-gradient font-logo tracking-wide">Z</span>
        </h2>

        <p className="text-lg sm:text-xl text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto mb-12 px-4 sm:px-0">
          Everything you need for quantum-safe blockchain infrastructure
        </p>

        {/* Alphabet Buttons */}
        <div className="flex gap-3 sm:gap-4 justify-center flex-wrap mb-10">
          {letters.map((item, index) => (
            <button
              key={item.letter}
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center font-bold text-white text-base sm:text-lg transition-all duration-300 ${
                activeIndex === index
                  ? "scale-110 shadow-xl ring-2 ring-primary"
                  : "shadow-md hover:scale-105"
              }`}
              style={{
                background:
                  "linear-gradient(135deg, hsl(220 80% 55%) 0%, hsl(200 70% 60%) 50%, hsl(185 65% 58%) 100%)",
              }}
            >
              {item.letter}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-[90%] sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto p-6 sm:p-8 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-between relative overflow-hidden backdrop-blur-md"
        >
          {/* Floating Lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-[200%] h-px bg-gradient-to-r from-transparent via-blue-300 dark:via-blue-400 to-transparent animate-[floatline_5s_linear_infinite]" />
            <div className="absolute bottom-0 right-0 w-[200%] h-px bg-gradient-to-r from-transparent via-cyan-300 dark:via-cyan-400 to-transparent animate-[floatline_8s_linear_infinite_reverse]" />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center z-10">
            <div className="flex items-center justify-center gap-3 mb-3">
              <ActiveIcon className="w-6 h-6 text-primary flex-shrink-0" />
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-white">
                <span className="text-gradient font-extrabold">{firstLetter}</span>
                {restOfTitle}
              </h3>
            </div>
            <p className="text-muted-foreground dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              {letters[activeIndex].description}
            </p>
          </div>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            className="mt-6 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300 z-10"
          >
            Next <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Floating Line Animation Keyframes */}
      <style>{`
        @keyframes floatline {
          0% { transform: translateX(-50%); opacity: 0.4; }
          50% { transform: translateX(0); opacity: 0.8; }
          100% { transform: translateX(50%); opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default ValueProposition;
