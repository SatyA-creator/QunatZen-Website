import { motion } from "framer-motion";
import React from "react";

interface AnimatedBackgroundProps {
  variant?: 'aurora' | 'particles' | 'waves' | 'grid' | 'gradient' | 'tech' | 'quantum';
  className?: string;
  children: React.ReactNode;
}

const AnimatedBackground = ({ 
  variant = 'aurora', 
  className = '', 
  children 
}: AnimatedBackgroundProps) => {
  const backgroundVariants = {
    aurora: (
      <>
        {/* Aurora Gradient Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(59,130,246,0.4), rgba(139,69,193,0.35), rgba(34,197,94,0.3), rgba(239,68,68,0.35))",
            backgroundSize: "400% 400%",
          }}
        />
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/70" />
      </>
    ),

    particles: (
      <>
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-quantum-primary/80 dark:bg-quantum-primary/40 rounded-full shadow-lg"
              animate={{
                x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                opacity: [0.4, 0.9, 0.4],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-white/50 to-purple-50/60 dark:from-blue-900/30 dark:via-gray-900/60 dark:to-purple-900/30" />
      </>
    ),

    waves: (
      <>
        {/* Animated Wave Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.svg
            className="absolute -top-10 -left-10 w-[120%] h-[120%] text-quantum-primary/40 dark:text-quantum-primary/20"
            viewBox="0 0 1000 1000"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <defs>
              <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path
                  d="M0,50 Q25,25 50,50 T100,50"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wave-pattern)" />
          </motion.svg>
        </div>
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white/40 to-blue-50/50 dark:from-cyan-900/20 dark:via-gray-900/60 dark:to-blue-900/20" />
      </>
    ),

    grid: (
      <>
        {/* Animated Tech Grid */}
        <motion.div
          className="absolute inset-0"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px),
              radial-gradient(circle at 50% 50%, rgba(139,69,193,0.25) 0%, transparent 70%)
            `,
            backgroundSize: "50px 50px, 50px 50px, 200px 200px",
          }}
        />
        {/* Glowing intersections */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-quantum-primary/80 dark:bg-quantum-primary/40 rounded-full shadow-lg"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/70" />
      </>
    ),

    gradient: (
      <>
        {/* Dynamic Gradient Background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59,130,246,0.35), rgba(139,69,193,0.3))",
              "linear-gradient(135deg, rgba(139,69,193,0.3), rgba(34,197,94,0.35))",
              "linear-gradient(225deg, rgba(34,197,94,0.35), rgba(239,68,68,0.3))",
              "linear-gradient(315deg, rgba(239,68,68,0.3), rgba(59,130,246,0.35))",
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-white/55 dark:bg-gray-900/60" />
      </>
    ),

    tech: (
      <>
        {/* Tech Circuit Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="w-full h-full opacity-70 dark:opacity-40"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px),
                linear-gradient(45deg, transparent 47%, rgba(59,130,246,0.4) 48%, rgba(59,130,246,0.4) 52%, transparent 53%)
              `,
              backgroundSize: "100px 100px, 80px 80px, 60px 60px",
            }}
          />
        </div>
        {/* Pulsing nodes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 border-2 border-quantum-primary/80 dark:border-quantum-primary/50 rounded-full bg-quantum-primary/30 dark:bg-quantum-primary/10"
              style={{
                left: `${15 + (i % 4) * 25}%`,
                top: `${20 + Math.floor(i / 4) * 60}%`,
              }}
              animate={{
                scale: [1, 1.4, 1],
                borderColor: ["rgba(59,130,246,0.8)", "rgba(139,69,193,1)", "rgba(59,130,246,0.8)"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-slate-50/70 dark:bg-gray-900/70" />
      </>
    ),

    quantum: (
      <>
        {/* Quantum Field Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute border border-quantum-primary/60 dark:border-quantum-primary/30 rounded-full"
              style={{
                width: `${100 + i * 50}px`,
                height: `${100 + i * 50}px`,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          ))}
        </div>
        {/* Quantum particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg opacity-80 dark:opacity-60"
              animate={{
                x: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                ],
                y: [
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                  Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                ],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 via-white/50 to-purple-50/60 dark:from-indigo-900/30 dark:via-gray-900/70 dark:to-purple-900/30" />
      </>
    ),
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {backgroundVariants[variant]}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default AnimatedBackground;