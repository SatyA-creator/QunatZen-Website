import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import AnimatedBackground from "@/components/ui/animated-background";
import {
  Code2,
  Gauge,
  Lock,
  Workflow,
  GitBranch,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Rising Exploits",
    description:
      "Web3 is hemorrhaging assets daily from hacks, contract bugs, supply-chain attacks, and social exploits.",
    color: "text-primary",
  },
  {
    icon: Gauge,
    title: "Data Harvesting",
    description:
      "Attackers already employ “store now, decrypt later” tactics, hoarding encrypted data now to crack once quantum power arrives.",
    color: "text-secondary",
  },
  {
    icon: Lock,
    title: "Quantum Acceleration",
    description:
      "Quantum computing is accelerating: NIST predicts deprecating legacy algorithms by 2030 and fully phasing them out by 2035.",
    color: "text-accent",
  },
  {
    icon: Workflow,
    title: "New Standards",
    description:
      "New post-quantum standards like CRYSTALS-Kyber, Dilithium, and HQC are being formalised now to replace RSA/ECC.",
    color: "text-quantum-secondary",
  },
  {
    icon: GitBranch,
    title: "Imminent Threat",
    description:
      "The quantum threat may be closer than many expect, and Web3 must embed quantum resilience now or risk utter collapse.",
    color: "text-primary",
  },
  {
    icon: Workflow,
    title: "Massive Costs",
    description:
      "Web3 has already lost over $30B+ to hacks in the past few years. Without quantum-secure infrastructure, those losses will multiply, eroding trust, adoption, and innovation.",
    color: "text-primary",
  },
];

const Features = () => {
  return (
    <AnimatedBackground variant="tech" className="relative py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <section className="overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              The <span className="text-gradient">Situation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Understanding the growing challenges in Web3 security and quantum readiness.
            </p>
          </motion.div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="relative bg-card/60 dark:bg-black/40 backdrop-blur-lg border border-border hover:border-primary/40 rounded-2xl p-8 transition-all duration-500 group overflow-hidden shadow-md hover:shadow-primary/20">
                    
                    {/* Subtle Glow on Hover */}
                    <motion.div
                      className="absolute -inset-[1px] rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 blur-lg transition-all duration-700"
                    />

                    {/* Icon */}
                    <motion.div
                      className="flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="p-4 rounded-xl bg-primary/10">
                        <Icon className={`w-8 h-8 ${feature.color}`} />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-semibold mb-3 text-center text-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.title}
                    </motion.h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-center leading-relaxed text-sm">
                      {feature.description}
                    </p>

                    {/* Inner Glow Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-all duration-500"
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Features;
