import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const stats = [
  {
    value: "$50B+",
    label: "Assets Protected",
    description: "Blockchain value secured against quantum threats",
  },
  {
    value: "99.99%",
    label: "Uptime",
    description: "Enterprise-grade reliability and availability",
  },
  {
    value: "<100ms",
    label: "Latency",
    description: "Lightning-fast quantum-safe transaction processing",
  },
  {
    value: "50+",
    label: "Blockchains",
    description: "Supported networks and counting",
  },
];

const Stats = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Trusted by the <span className="text-gradient">ecosystem</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            Industry-leading performance and security metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="gaming-card p-8 text-center h-full group">
                <motion.div 
                  className="text-4xl sm:text-5xl font-bold text-gradient mb-3 animate-glow-pulse"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg font-semibold mb-2 group-hover:text-quantum-primary transition-colors">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
