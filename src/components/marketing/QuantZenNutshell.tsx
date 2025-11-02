import { motion } from "framer-motion"; 
import { Card } from "@/components/ui/card";
import AnimatedBackground from "@/components/ui/animated-background";
import { Shield, Lock, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Post-Quantum Protection",
    description: "Military-grade quantum-resistant cryptography"
  },
  {
    icon: Lock,
    title: "Dual-Signature Security",
    description: "Classical + quantum-safe signature verification"
  },
  {
    icon: Clock,
    title: "Future-Proof Technology",
    description: "Ready for quantum computer emergence"
  },
  {
    icon: Users,
    title: "Seamless Integration",
    description: "No blockchain migration required"
  }
];

const howItWorksSteps = [
  
  "Sign as usual-Your app or wallet continues to use its existing digital signature flow  no change in the user experience.",
  "QuantZen™  adds next-gen protection-In parallel, QuantZen™ applies an additional cryptographic layer bound to the transaction’s key parameters securing its integrity and provenance across time and computing eras.",
  "Verified and auditable-Networks and services can validate both layers instantly, while optional off-chain proofs maintain compliance and forensic traceability  without touching the base chain."
];

const QuantZenNutshell = () => {
  return (
    <AnimatedBackground variant="waves" className="py-24">
      <section className="overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white drop-shadow-sm">
              QuantZen™ <span className="text-gradient">In A Nutshell</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-gray-700 dark:text-gray-200 px-4 sm:px-0">
            {/* <p>
              QuantZen™ leverages a{" "}
              <span className="text-quantum-primary font-semibold">
                dual-signature approach
              </span>{" "}
              to protect Web3 from quantum threats. Our infrastructure layer sits between blockchain transactions and quantum computers, ensuring your assets remain secure both today and tomorrow.
            </p> */}
            <p className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-white/30 dark:border-gray-700/30">
              Think of QuantZen™  as adding a second, future‑proof lock to every transaction. You keep using your wallet and smart contracts exactly as you do now, and we just attach a post‑quantum signature that can't be forged by tomorrow's quantum computers (and that also stops a bunch of today's attacks). 

            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="gaming-card bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/40 dark:border-gray-700/40 shadow-lg p-6 h-full group hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="p-3 rounded-full bg-gradient-to-br from-quantum-primary/20 to-secondary/20 group-hover:from-quantum-primary/30 group-hover:to-secondary/30 transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-quantum-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold group-hover:text-quantum-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/40 dark:border-gray-700/40 shadow-lg">
           <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">How QuantZen™ Works -  Seamless, Secure, Quantum-Ready</h3>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">No consensus changes. No forks. No months of governance debates.</h3>
            <div className="space-y-6 text-left">
              {howItWorksSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-quantum-primary/20 text-quantum-primary flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      </section>
    </AnimatedBackground>
  );
};

export default QuantZenNutshell;
