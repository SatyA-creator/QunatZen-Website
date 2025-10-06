import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Rocket, 
  Shield, 
  Users, 
  Globe,
  Code2,
  Building,
  Star,
  TrendingUp,
  Target,
  Zap
} from "lucide-react";

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "Q1 2025",
      title: "Foundation & Core SDK",
      status: "current",
      icon: Code2,
      color: "from-quantum-primary to-quantum-secondary",
      milestones: [
        "Core SDK release (TypeScript/WASM, Rust)",
        "Basic Ethereum/EVM integration",
        "Dilithium + Falcon algorithm support",
        "Local key management & hardware wallet integration",
        "Developer documentation & getting started guides"
      ]
    },
    {
      quarter: "Q2 2025", 
      title: "Multi‑Chain Expansion",
      status: "upcoming",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      milestones: [
        "Cosmos SDK integration (Tendermint consensus)",
        "Solana adapter development",
        "SPHINCS+ algorithm integration",
        "Enhanced key registry with cross‑chain support",
        "First enterprise pilot partnerships"
      ]
    },
    {
      quarter: "Q3 2025",
      title: "Enterprise & Compliance",
      status: "planned",
      icon: Building,
      color: "from-purple-500 to-pink-500",
      milestones: [
        "Enterprise security features (HSM, audit logs)",
        "Compliance frameworks (SOC2, ISO27001)",
        "Advanced verification infrastructure",
        "IPFS proof anchoring for regulatory compliance",
        "White‑label solutions for institutions"
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Ecosystem & Scale",
      status: "future",
      icon: Rocket,
      color: "from-green-500 to-emerald-500",
      milestones: [
        "Full production deployments",
        "Advanced analytics & monitoring dashboard",
        "Plugin ecosystem for major wallets",
        "Go SDK release",
        "Global partner network expansion"
      ]
    }
  ];

  const keyAchievements = [
    {
      achievement: "Algorithm Implementation",
      description: "All NIST‑approved PQC algorithms integrated",
      timeline: "Q1‑Q2 2025"
    },
    {
      achievement: "Chain Coverage",
      description: "Support for 5+ major blockchain networks",
      timeline: "Q2‑Q3 2025"
    },
    {
      achievement: "Enterprise Ready", 
      description: "Full compliance & enterprise security features",
      timeline: "Q3 2025"
    },
    {
      achievement: "Production Scale",
      description: "1M+ transactions processed with PQC",
      timeline: "Q4 2025"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current": return "bg-quantum-primary";
      case "upcoming": return "bg-blue-500";
      case "planned": return "bg-purple-500";
      case "future": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "current": return Clock;
      case "upcoming": return Target;
      case "planned": return Calendar;
      case "future": return Star;
      default: return Clock;
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <div className="bg-gradient-to-br from-background to-secondary/10 overflow-x-hidden w-full">
      {/* Navigation Spacing */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="py-24 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Product <span className="text-gradient">Roadmap</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Our journey to quantum‑resistant blockchain security. From core SDK development to global enterprise adoption, here's how we're building the future of post‑quantum cryptography in Web3.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                Current: Q1 2025
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Target className="w-4 h-4 mr-2" />
                Timeline: 12 Months
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <TrendingUp className="w-4 h-4 mr-2" />
                4 Major Phases
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-quantum-primary to-green-500 hidden lg:block"></div>
            
            {/* Roadmap Items */}
            <div className="space-y-16">
              {roadmapData.map((phase, index) => {
                const StatusIcon = getStatusIcon(phase.status);
                const isEven = index % 2 === 0;
                
                return (
                  <motion.div
                    key={phase.quarter}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-lg border-4 border-background`}
                      >
                        <phase.icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                      <Card className="gaming-card p-8 relative">
                        {/* Mobile Timeline Icon */}
                        <div className="lg:hidden flex items-center mb-4">
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center mr-4`}>
                            <phase.icon className="w-6 h-6 text-white" />
                          </div>
                          <Badge className={`${getStatusColor(phase.status)} text-white`}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {phase.status}
                          </Badge>
                        </div>

                        {/* Quarter and Status */}
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold">{phase.quarter}</h3>
                          <Badge className={`${getStatusColor(phase.status)} text-white hidden lg:flex`}>
                            <StatusIcon className="w-3 h-3 mr-1" />
                            {phase.status}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold mb-6 text-quantum-primary">{phase.title}</h4>

                        {/* Milestones */}
                        <div className="space-y-3">
                          {phase.milestones.map((milestone, milestoneIndex) => (
                            <motion.div
                              key={milestoneIndex}
                              initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.5, delay: index * 0.2 + milestoneIndex * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{milestone}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Arrow indicator */}
                        <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-transparent hidden lg:block ${
                          isEven 
                            ? 'right-0 translate-x-full border-l-8 border-l-border' 
                            : 'left-0 -translate-x-full border-r-8 border-r-border'
                        }`}></div>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Key <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Critical milestones that mark our progress toward quantum‑resistant blockchain security adoption.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyAchievements.map((item, index) => (
              <motion.div
                key={item.achievement}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="gaming-card p-6 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-quantum-primary/20">
                      <Star className="w-6 h-6 text-quantum-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{item.achievement}</h3>
                      <p className="text-muted-foreground mb-3">{item.description}</p>
                      <Badge variant="outline" className="text-quantum-primary border-quantum-primary">
                        {item.timeline}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Evolution */}
      <section className="py-24 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Technology <span className="text-gradient">Evolution</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current State */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="gaming-card p-6 h-full">
                <div className="text-center mb-6">
                  <Shield className="w-12 h-12 text-quantum-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Current State</h3>
                  <p className="text-sm text-muted-foreground">Where we are today</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>• Traditional ECDSA/EdDSA signatures only</div>
                  <div>• Quantum vulnerability in blockchain</div>
                  <div>• Limited post‑quantum research</div>
                  <div>• No production‑ready solutions</div>
                </div>
              </Card>
            </motion.div>

            {/* Transition */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="gaming-card p-6 h-full border-quantum-primary">
                <div className="text-center mb-6">
                  <Zap className="w-12 h-12 text-quantum-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-quantum-primary">QuantZen Bridge</h3>
                  <p className="text-sm text-muted-foreground">Our solution in 2025</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>• Dual‑signature hybrid approach</div>
                  <div>• NIST‑approved PQC algorithms</div>
                  <div>• Chain‑agnostic middleware</div>
                  <div>• Production‑ready enterprise features</div>
                </div>
              </Card>
            </motion.div>

            {/* Future Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="gaming-card p-6 h-full">
                <div className="text-center mb-6">
                  <Rocket className="w-12 h-12 text-quantum-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold">Future Vision</h3>
                  <p className="text-sm text-muted-foreground">Quantum‑safe ecosystem</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>• Native PQC in all major blockchains</div>
                  <div>• Global quantum‑resistant standard</div>
                  <div>• Seamless user experience</div>
                  <div>• Complete ecosystem protection</div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-24 bg-gradient-to-br from-quantum-primary/10 to-secondary/10 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="gaming-card p-12 max-w-4xl mx-auto">
              <Users className="w-16 h-16 text-quantum-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Be Part of the <span className="text-gradient">Journey</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our early access program and help shape the future of quantum‑resistant blockchain security. Your feedback drives our roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-quantum-primary to-quantum-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Join Early Access
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-quantum-primary text-quantum-primary rounded-lg font-semibold hover:bg-quantum-primary/10 transition-all duration-300"
                >
                  View Technical Docs
                </motion.button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;