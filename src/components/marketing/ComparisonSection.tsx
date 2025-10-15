import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const advantages = [
  { advantage: "Zero Migration Required", quantzen: "✓ Works with existing blockchains", traditional: "✗ Requires complete blockchain rebuild" },
  { advantage: "Backward Compatibility", quantzen: "✓ Supports all current applications", traditional: "✗ Breaks existing smart contracts" },
  { advantage: "Implementation Speed", quantzen: "✓ Deploy in days, not years", traditional: "✗ Multi-year migration timeline" },
  { advantage: "Network Effects", quantzen: "✓ Preserves existing ecosystem", traditional: "✗ Loses network effects" },
  { advantage: "User Experience", quantzen: "✓ Seamless transition", traditional: "✗ User re-onboarding required" },
  { advantage: "Cost Efficiency", quantzen: "✓ Minimal integration costs", traditional: "✗ Expensive full migration" }
];

const ComparisonSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Compared to L1/L2 Migration,{" "}
            <span className="text-gradient">QuantZen™</span> Is the Clear Saviour
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Traditional migrations are costly and slow {" "}
            <span className="text-gradient">QuantZen™</span> integrates seamlessly
            with your current blockchain.
          </p>
        </motion.div>

        {/* Comparison Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-quantum-primary/5 to-secondary/5 rounded-2xl p-6 sm:p-10 mb-12 border border-quantum-primary/20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h3 className="text-2xl font-bold mb-2">Current Approach</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                L1/L2 migrations rebuild the entire blockchain infrastructure.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center space-x-2"
              >
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                <span className="text-green-600 font-semibold text-lg sm:text-xl">vs</span>
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </motion.div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-2">QuantZen™ Way</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Adds a secure quantum layer  zero rebuild required.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Advantage Table */}
        <div className="flex flex-col gap-6">
          {advantages.map((item, index) => (
            <motion.div
              key={item.advantage}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border border-border hover:border-quantum-primary/30 rounded-2xl p-6 sm:p-8 transition-all bg-gradient-to-br from-background/60 to-muted/20 backdrop-blur-md">
                <h4 className="text-xl font-bold text-center mb-4">
                  {item.advantage}
                </h4>

                <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-8 text-center sm:text-left">
                  <div className="flex-1 bg-gradient-to-br from-green-600/10 to-secondary/10 p-4 rounded-xl flex items-center justify-center sm:justify-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-green-600 font-medium">
                      {item.quantzen.replace("✓ ", "")}
                    </span>
                  </div>

                  <div className="flex-1 bg-gradient-to-br from-destructive/10 to-transparent p-4 rounded-xl flex items-center justify-center sm:justify-start space-x-2">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-destructive font-medium">
                      {item.traditional.replace("✗ ", "")}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-quantum-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-10 border border-quantum-primary/20 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">The Bottom Line</h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              QuantZen™ provides <span className="text-gradient font-semibold">quantum protection today.</span> 
              No migration, No downtime, No loss of ecosystem integrity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
