import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Shield, Layers, UserCheck, Award, CheckCircle2, Sparkles, LucideIcon } from "lucide-react";

interface LetterCard {
  letter: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const letters: LetterCard[] = [
  { letter: "Q", title: "Quantum-Proofing Made Simple", description: "Add post-quantum signatures to every transaction without waiting for a chain-wide hard fork.", icon: Shield },
  { letter: "R", title: "Ready Today", description: "Works instantly with wallets, dApps, bridges, and custodians — no years of L1/L2 re-engineering", icon: Layers },
  { letter: "S", title: "Saves Millions", description: "Avoid the massive cost of consensus surgery, protocol audits, and disruptive governance upgrades.", icon: UserCheck },
  { letter: "T", title: "Time Advantage", description: "Stay protected against “Harvest-Now, Decrypt-Later” and supercomputers already scaling today.", icon: Award },
  { letter: "U", title: "Universal Compatibility", description: "Chain-agnostic SDK supports Ethereum, BNB, Solana, Polygon, Cosmos, and more.", icon: CheckCircle2 },
  { letter: "V", title: "Verified By Standards", description: "Built on NIST-approved post-quantum cryptography (Dilithium, Falcon, SPHINCS+, Kyber).", icon: Sparkles },
  { letter: "W", title: "Without UX Friction", description: "Users keep the same signing flow; QuantZen just adds a second, invisible signature lock.", icon: Sparkles },
  { letter: "X", title: "eXtra Layer Of Defense", description: "Stops front-running, phantom transactions, replay attacks, and insider risks.", icon: Sparkles },
  { letter: "Y", title: "Your Safety Net", description: "Even if ECDSA is broken in the 2030s, your history stays secure with PQ signatures bound to every txn.", icon: Sparkles },
  { letter: "Z", title: "Zero Disruption", description: "No forks. No governance deadlocks. No migrations. Just drop in, sign, and you're quantum-safe.", icon: Sparkles },
];

const ValueProposition = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          From <span className="text-gradient">Q</span> to <span className="text-gradient">Z</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Everything you need for quantum-safe blockchain infrastructure
        </p>

        {/* Alphabet Circle Bar with Gradient Background */}
        <div className="flex gap-4 justify-center flex-wrap mb-6">
          {letters.map((item, index) => (
            <button
              key={item.letter}
              className={`w-14 h-14 rounded-lg flex items-center justify-center font-bold text-white text-lg transition-all duration-300
                ${hoveredIndex === index ? "scale-110 shadow-lg" : "shadow-md"}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: "linear-gradient(135deg, hsl(220 80% 55%) 0%, hsl(200 70% 60%) 50%, hsl(185 65% 58%) 100%)",
              }}
            >
              {item.letter}
            </button>
          ))}
        </div>

        {/* Hover Card */}
        {hoveredIndex !== null && (() => {
          const SelectedIcon = letters[hoveredIndex].icon;
          const selectedLetter = letters[hoveredIndex];
          return (
            <motion.div
              className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-background"
              style={{ perspective: 1000 }}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <SelectedIcon className="w-6 h-6 text-primary flex-shrink-0" />
                <h3 className="font-semibold text-lg">{selectedLetter.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{selectedLetter.description}</p>
            </motion.div>
          );
        })()}
      </div>
    </section>
  );
};

export default ValueProposition;
