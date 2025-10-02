import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code2, Terminal, BookOpen, ArrowRight } from "lucide-react";

const DeveloperCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-quantum-dark to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
              Start building in <span className="text-gradient glow-text">minutes</span>
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Get started with our comprehensive SDK and documentation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Code2,
                title: "Quick Start",
                description: "Install the SDK and make your first quantum-safe transaction",
                time: "5 min",
              },
              {
                icon: Terminal,
                title: "Interactive Playground",
                description: "Test PQC algorithms in your browser with live examples",
                time: "10 min",
              },
              {
                icon: BookOpen,
                title: "Full Documentation",
                description: "Complete API reference and integration guides",
                time: "30 min",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <Card className="gaming-card p-6 h-full group">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-quantum-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/70">
                      {item.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="gaming-card gaming-border p-8 animate-border-flow">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2 animate-glow-pulse">
                    Ready to secure your blockchain?
                  </h3>
                  <p className="text-muted-foreground">
                    Join leading Web3 projects already using QuantZen
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="quantum" size="lg" className="group relative overflow-hidden">
                      <span className="relative z-10">Get Started Free</span>
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-quantum-accent to-quantum-secondary"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" size="lg" className="hover-lift">
                      View Docs
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Code Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="p-6 bg-quantum-dark/50 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-security-medium" />
                  <div className="w-3 h-3 rounded-full bg-security-high" />
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  example.ts
                </span>
              </div>
              <pre className="text-sm font-mono text-primary-foreground overflow-x-auto">
                <code>{`import { QuantZen } from '@quantzen/sdk';

// Initialize the SDK
const qz = new QuantZen({
  apiKey: process.env.QUANTZEN_API_KEY,
  network: 'ethereum-mainnet'
});

// Upgrade transaction to quantum-safe
const result = await qz.transaction.upgrade({
  from: walletAddress,
  to: recipientAddress,
  value: ethers.utils.parseEther('1.0'),
  pqcAlgorithm: 'FALCON-512'
});

console.log('Quantum-safe tx:', result.hash);`}</code>
              </pre>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperCTA;
