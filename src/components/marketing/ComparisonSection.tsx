import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const advantages = [
  {
    advantage: "Zero Migration Required",
    quantzen: "✓ Works with existing blockchains",
    traditional: "✗ Requires complete blockchain rebuild"
  },
  {
    advantage: "Backward Compatibility",
    quantzen: "✓ Supports all current applications",
    traditional: "✗ Breaks existing smart contracts"
  },
  {
    advantage: "Implementation Speed",
    quantzen: "✓ Deploy in days, not years",
    traditional: "✗ Multi-year migration timeline"
  },
  {
    advantage: "Network Effects",
    quantzen: "✓ Preserves existing ecosystem",
    traditional: "✗ Loses network effects"
  },
  {
    advantage: "User Experience",
    quantzen: "✓ Seamless transition",
    traditional: "✗ User re-onboarding required"
  },
  {
    advantage: "Cost Efficiency",
    quantzen: "✓ Minimal integration costs",
    traditional: "✗ Expensive full migration"
  }
];

const ComparisonSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/5 to-primary/5 overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
           Compared to L1/L2 Migration, 
<span className="text-gradient">QuantZen</span> Is the Clear Saviour
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            While traditional approaches require expensive L1/L2 migrations, QuantZen provides quantum protection without disrupting your existing infrastructure.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-quantum-primary/5 to-secondary/5 rounded-2xl p-8 mb-12 border border-quantum-primary/20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-4">Current Approach</h3>
                <p className="text-muted-foreground">
                  Traditional L1/L2 migration requires rebuilding entire blockchain infrastructure
                </p>
              </div>
              
              <div className="flex justify-center">
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center space-x-2"
                >
                  <ArrowRight className="w-8 h-8 text-quantum-primary" />
                  <span className="text-lg font-semibold text-quantum-primary">vs</span>
                  <ArrowRight className="w-8 h-8 text-quantum-primary" />
                </motion.div>
              </div>
              
              <div className="text-center lg:text-right">
                <h3 className="text-2xl font-bold mb-4">QuantZen Way</h3>
                <p className="text-muted-foreground">
                  Layer on top of existing blockchains with zero migration required
                </p>
              </div>
            </div>
          </motion.div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="min-w-[600px] sm:min-w-full px-4 sm:px-0">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="min-w-full"
              >
              <Card className="gaming-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-4 text-center">Advantage</h4>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-quantum-primary/10 to-quantum-primary/5">
                    <h4 className="text-xl font-bold mb-4 text-center text-quantum-primary">QuantZen</h4>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-destructive/10 to-destructive/5">
                    <h4 className="text-xl font-bold mb-4 text-center text-destructive">L1/L2 Migration</h4>
                  </div>
                </div>

                {advantages.map((item, index) => (
                  <motion.div
                    key={item.advantage}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border border-t border-border hover:bg-muted/30 transition-colors"
                  >
                    <div className="p-6">
                      <div className="font-semibold">{item.advantage}</div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-quantum-primary/5 to-transparent">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-quantum-primary flex-shrink-0" />
                        <span className="text-quantum-primary font-medium">
                          {item.quantzen.replace('✓ ', '')}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-destructive/5 to-transparent">
                      <div className="flex items-center space-x-2">
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                        <span className="text-destructive font-medium">
                          {item.traditional.replace('✗ ', '')}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Card>
            </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-quantum-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto border border-quantum-primary/20">
              <h3 className="text-2xl font-bold mb-4">The Bottom Line</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                QuantZen's infrastructure approach delivers quantum protection <span className="text-quantum-primary font-semibold">today</span> without 
                the massive costs, risks, and timeline delays of blockchain migration. Protect your ecosystem while preserving everything you've built.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;