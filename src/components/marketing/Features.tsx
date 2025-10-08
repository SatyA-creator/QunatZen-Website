import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Gauge,
  Lock,
  Workflow,
  BarChart3,
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
      "Web3 has already lost over $30B+ to hacks in the past few years. Without quantum-secure infrastructure, those losses will multiply, eroding trust, adoption, and innovation.",
    color: "text-primary",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The <span className="text-gradient">Situation</span>
          </h2>
          {/* <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade features that keep your blockchain secure against
            quantum threats
          </p> */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 80
                }}
                whileHover={{ y: -8 }}
              >
                <Card className="gaming-card p-8 h-full group">
                  <motion.div
                    className={`w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className={`w-7 h-7 ${feature.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-quantum-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
