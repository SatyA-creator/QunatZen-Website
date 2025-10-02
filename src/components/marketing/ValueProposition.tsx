import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Shield,
  Layers,
  UserCheck,
  Award,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface LetterCard {
  letter: string;
  title: string;
  description: string;
  icon: any;
}

const letters: LetterCard[] = [
  {
    letter: "Q",
    title: "Quantum-proofing made simple",
    description: "Add post-quantum signatures to every transaction without waiting for a chain-wide hard fork.",
    icon: Shield,
  },
  {
    letter: "R",
    title: "Ready today",
    description: "Works instantly with wallets, dApps, bridges, and custodians — no years of L1/L2 re-engineering",
    icon: Layers,
  },
  {
    letter: "S",
    title: "Saves millions",
    description: "Avoid the massive cost of consensus surgery, protocol audits, and disruptive governance upgrades.",
    icon: UserCheck,
  },
  {
    letter: "T",
    title: "Time advantage",
    description: "Stay protected against “Harvest-Now, Decrypt-Later” and supercomputers already scaling today.",
    icon: Award,
  },
  {
    letter: "U",
    title: "Universal compatibility",
    description: "Chain-agnostic SDK supports Ethereum, BNB, Solana, Polygon, Cosmos, and more.",
    icon: CheckCircle2,
  },
  {
    letter: "V",
    title: "Verified by standards",
    description: "Built on NIST-approved post-quantum cryptography (Dilithium, Falcon, SPHINCS+, Kyber).",
    icon: Sparkles,
  },
  {
    letter: "W",
    title: "Without UX friction",
    description: "Users keep the same signing flow; QuantZen just adds a second, invisible signature lock.",
    icon: Sparkles,
  },
  {
    letter: "X",
    title: "eXtra layer of defense",
    description: "Stops front-running, phantom transactions, replay attacks, and insider risks.",
    icon: Sparkles,
  },
  {
    letter: "Y",
    title: "Your safety net",
    description: "Even if ECDSA is broken in the 2030s, your history stays secure with PQ signatures bound to every txn.",
    icon: Sparkles,
  },
  {
    letter: "Z",
    title: "Zero disruption",
    description: "No forks. No governance deadlocks. No migrations. Just drop in, sign, and you're quantum-safe.",
    icon: Sparkles,
  },
];

const ValueProposition = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            From <span className="text-gradient">Q</span> to{" "}
            <span className="text-gradient">Z</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for quantum-safe blockchain infrastructure
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {letters.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.letter}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className={`gaming-card p-6 h-full cursor-pointer ${
                    isActive ? "border-quantum-primary shadow-quantum" : ""
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="w-12 h-12 rounded-lg gradient-quantum flex items-center justify-center"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="text-2xl font-bold text-white">
                          {item.letter}
                        </span>
                      </motion.div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
