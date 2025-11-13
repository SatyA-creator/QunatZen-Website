import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Star,
  Sparkles,
  Zap,
  Trophy,
  ExternalLink,
} from "lucide-react";

const EarlyAdopterInitiative = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Priority integration of QuantZen’s post-quantum SDK with direct engineering support.",
    },
    {
      icon: Shield,
      title: "Lifetime access to hybrid-signing and Dilithium upgrades at no additional cost.",
    },
    {
      icon: Users,
      title: "Early access to new modules, audits, and security features before public release.",
    },
    {
      icon: Star,
      title: "Co-branding as an official “Quantum-Safe Pioneer” across QuantZen channels.",
    },
    
    {
      icon: Zap,
      title: "Dedicated migration planning to future-proof wallets, validators, and infrastructure.",
    },
    {
      icon: Shield,
      title: "Guaranteed seat in roadmap advisory calls influencing core PQ security standards.",
    },
    
    
    {
      icon: Trophy,
      title: (
        <>
          Co-marketing and inclusion in the{" "}
    
          "First 25 Quantum-Safe Builders" announcement
        </>
      ),
    },
  ];

  const handleApplyClick = () => {
    window.open("https://forms.gle/ve1DFKqcjZ4bUHLk6", "_blank");
  };

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-8 bg-gradient-to-b from-background via-background to-background text-foreground overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 -z-10 opacity-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: `${10 + i * 8}%`,
              top: `${15 + i * 6}%`,
              backgroundColor: "var(--theme-accent)",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto px-2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            QuantZen™  
          </span>{" "}
          Early Adopter Initiative
        </motion.h2>
      </div>

      {/* Intro Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-card shadow-sm border border-border text-center"
      >
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
          QuantZen™ is inviting 25 pioneering projects  wallets, custodians,
          bridges, dApps, and protocols  to join our Early Adopter Program.
          These participants will gain exclusive early access to the QuantZen™  
          SDK, integration support, co-branding as Quantum-Safe Verified, and
          visibility in our upcoming showcase of quantum-resilient Web3
          infrastructure.
        </p>
      </motion.div>

      {/* Key Value Props */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12 mb-8 px-4"
      >
        {["No forks.", "No consensus rewrites.", "No friction."].map(
          (text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              className="relative"
            >
              <div className="flex items-center gap-3 text-center">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg"></div>
                <span className="text-base sm:text-lg md:text-xl font-bold text-gray-800 tracking-tight">
                  {text}
                </span>
              </div>
            </motion.div>
          )
        )}
      </motion.div>

      <p className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-10 px-4">
        Just drop-in post-quantum security that protects{" "}
        <span className="text-gradient">your users</span> and{" "}
        <span className="text-gradient">your future</span>.
      </p>

      {/* Program Benefits */}
      <div className="max-w-5xl mx-auto text-center px-4">
        <h3 className="text-xl sm:text-2xl font-bold mb-10 flex items-center justify-center gap-2">
          <Sparkles className="w-6 h-6 text-primary" />
          Program Benefits
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-4xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 bg-card shadow-sm rounded-xl px-4 py-4 w-full max-w-sm min-h-[90px] border border-border"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-gradient-to-br from-primary to-accent text-white shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-sm leading-relaxed text-left text-foreground">
                  {benefit.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 px-4">
        <motion.button
          onClick={handleApplyClick}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent text-white px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-md transition-transform duration-200 hover:scale-[1.03]"
          whileTap={{ scale: 0.97 }}
        >
          <span>Apply Now Join the First 25</span>
          <ExternalLink className="w-5 h-5" />
        </motion.button>

        <p className="text-sm text-muted-foreground mt-3">
          Limited to 25 projects • Early Access Program
        </p>
      </div>
    </section>
  );
};

export default EarlyAdopterInitiative;
