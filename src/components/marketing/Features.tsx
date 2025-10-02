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
    title: "Developer-First SDK",
    description:
      "Intuitive APIs and comprehensive documentation make integration seamless across all major blockchain platforms",
    color: "text-primary",
  },
  {
    icon: Gauge,
    title: "Real-Time Monitoring",
    description:
      "Live dashboard with quantum threat metrics, security scores, and automated alerts for your entire infrastructure",
    color: "text-secondary",
  },
  {
    icon: Lock,
    title: "Post-Quantum Cryptography",
    description:
      "NIST-approved algorithms including CRYSTALS-Kyber, CRYSTALS-Dilithium, and FALCON for future-proof security",
    color: "text-accent",
  },
  {
    icon: Workflow,
    title: "Seamless Migration",
    description:
      "Automated migration paths with zero downtime - no hard forks, no service interruption, no user impact",
    color: "text-quantum-secondary",
  },
  {
    icon: BarChart3,
    title: "Security Analytics",
    description:
      "Advanced threat intelligence with vulnerability scoring, risk assessment, and compliance reporting",
    color: "text-security-medium",
  },
  {
    icon: GitBranch,
    title: "Multi-Chain Support",
    description:
      "Universal compatibility with Ethereum, Solana, Cosmos, Polkadot, and all EVM-compatible chains",
    color: "text-primary",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built for the <span className="text-gradient">quantum era</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enterprise-grade features that keep your blockchain secure against
            quantum threats
          </p>
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
