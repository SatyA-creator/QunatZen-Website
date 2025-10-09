import { motion } from "framer-motion"; 
import { useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, Lock } from "lucide-react";

const Button = ({ children, variant, size, className = "", ...props }) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center";
  const variants = {
    quantum:
      "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:shadow-purple-500/50",
    hero:
      "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const spheres = [
    { size: 200, x: 85, y: 15, delay: 0, color: "rgba(96, 165, 250, 0.4)" },
    { size: 300, x: 90, y: 45, delay: 0.5, color: "rgba(147, 197, 253, 0.3)" },
    { size: 120, x: 80, y: 8, delay: 1, color: "rgba(191, 219, 254, 0.5)" },
    { size: 80, x: 75, y: 60, delay: 1.5, color: "rgba(96, 165, 250, 0.6)" },
    { size: 150, x: 70, y: 25, delay: 0.8, color: "rgba(147, 197, 253, 0.4)" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/bg4.mp4" type="video/mp4" />
      </video>

      {/* Subtle Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-blue-950/40 to-slate-900/60 backdrop-blur-[1px]" />

      {/* Floating Spheres */}
      <div className="absolute inset-0 overflow-hidden">
        {spheres.map((sphere, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: sphere.size,
              height: sphere.size,
              left: `${sphere.x}%`,
              top: `${sphere.y}%`,
              background: `radial-gradient(circle at 30% 30%, ${sphere.color}, transparent)`,
              filter: "blur(40px)",
              transform: `translate(${mousePos.x * (i / 15)}px, ${mousePos.y * (i / 15)}px)`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: sphere.delay,
            }}
          />
        ))}
      </div>

      {/* Flowing Curves */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(96, 165, 250, 0.3)" />
            <stop offset="100%" stopColor="rgba(147, 197, 253, 0)" />
          </linearGradient>
          <linearGradient id="curveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(147, 197, 253, 0.2)" />
            <stop offset="100%" stopColor="rgba(191, 219, 254, 0)" />
          </linearGradient>
        </defs>
        {[...Array(3)].map((_, i) => (
          <motion.path
            key={i}
            d={`M -200 ${300 + i * 150} Q 400 ${200 + i * 100}, 800 ${350 + i * 120} T 1800 ${300 + i * 150}`}
            stroke={`url(#curveGradient${(i % 2) + 1})`}
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </svg>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              y: [0, -50, -100],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Text Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-white">Quantum-Proof Your </span>
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block">
              Web3
            </span>
            <span className="text-white">, Without Waiting For A Hard Fork.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl lg:text-2xl text-blue-100/80 mb-10 max-w-3xl leading-relaxed"
          >
            QuantZen adds a post-quantum signature to every transaction
            (alongside today's ECDSA), so wallets, dApps, bridges, and custodians
            are secure now and future-ready. Join the POC Program.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="quantum" className="group relative overflow-hidden">
                <span className="relative z-10">Book a 30-min Migration Consult</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center gap-6 text-sm text-blue-200/70"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span>NIST PQC Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-400" />
              <span>Enterprise Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-400" />
              <span>Zero Downtime</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-blue-400/50 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
