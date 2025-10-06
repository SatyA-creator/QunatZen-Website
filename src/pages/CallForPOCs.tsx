import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import { 
  Users, 
  Rocket, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Target,
  TrendingUp,
  Globe,
  Zap,
  Mail,
  Calendar,
  Award
} from "lucide-react";

const CallForPOCs = () => {
  const collaborationTypes = [
    {
      icon: Shield,
      title: "Enterprise Partners",
      description: "Large‑scale deployment pilots",
      benefits: ["Priority support", "Custom integration", "Direct engineering contact"]
    },
    {
      icon: Rocket,
      title: "DeFi Protocols",
      description: "Bridge & custody quantum‑hardening",
      benefits: ["Security audit support", "Gas optimization", "Mainnet deployment"]
    },
    {
      icon: Globe,
      title: "Infrastructure Providers",
      description: "RPC/node quantum readiness",
      benefits: ["Technical documentation", "Implementation guides", "Co‑marketing"]
    },
    {
      icon: Target,
      title: "Research Institutions",
      description: "Academic collaboration & validation",
      benefits: ["Research grants", "Publication support", "Conference presentations"]
    }
  ];

  const benefits = [
    "Early access to QuantZen SDK and documentation",
    "Direct collaboration with our engineering team",
    "Opportunity to shape product roadmap and features",
    "Priority technical support and dedicated account management",
    "Co‑marketing opportunities and case study development",
    "Reduced licensing fees for early adopters",
    "Access to quantum cryptography expertise and training",
    "First‑mover advantage in quantum‑resistant blockchain security"
  ];

  const pocRequirements = [
    "Willingness to integrate QuantZen into existing or new blockchain applications",
    "Technical team capable of SDK integration and testing",
    "Commitment to provide feedback and collaborate on improvements",
    "Ability to participate in 3‑6 month pilot program",
    "Openness to case study development and reference opportunities"
  ];

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
              Call for <span className="text-gradient">Proof‑of‑Concepts</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Be among the first to implement quantum‑resistant blockchain security. Join our Early Access Program to pilot QuantZen in real‑world scenarios and help shape the future of post‑quantum cryptography in Web3.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button variant="quantum" size="lg" className="group">
                <Users className="w-5 h-5 mr-2" />
                Join Early Access Program
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Technical Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              { number: "50+", label: "Partners Sought", icon: Users },
              { number: "3-6", label: "Month Pilot", icon: Calendar },
              { number: "100%", label: "Support Included", icon: Award }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="gaming-card p-6 text-center">
                  <stat.icon className="w-8 h-8 text-quantum-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-quantum-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collaboration Types */}
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
              Collaboration <span className="text-gradient">Opportunities</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're seeking forward‑thinking organizations across various sectors to pioneer quantum‑resistant blockchain security.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collaborationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="gaming-card p-8 h-full">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="p-3 rounded-lg bg-quantum-primary/20">
                      <type.icon className="w-8 h-8 text-quantum-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                      <p className="text-muted-foreground">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-quantum-primary">What you get:</h4>
                    {type.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Early Access <span className="text-gradient">Benefits</span>
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <Star className="w-5 h-5 text-quantum-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Requirements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="gaming-card p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Target className="w-6 h-6 text-quantum-primary mr-2" />
                  POC Requirements
                </h3>
                
                <div className="space-y-4">
                  {pocRequirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-gradient-to-r from-quantum-primary/10 to-secondary/10"
                    >
                      <div className="w-6 h-6 rounded-full bg-quantum-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-sm leading-relaxed">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20"
                >
                  <div className="flex items-center space-x-2 text-green-400">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">Ideal for organizations with 50+ users or high‑value transactions</span>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-quantum-primary/5 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              Apply for <span className="text-gradient">Early Access</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to be a quantum‑resistant pioneer? Tell us about your project and let's explore collaboration opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="gaming-card p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Organization Name *</label>
                    <Input placeholder="Your company or organization" className="quantum-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry/Sector *</label>
                    <Input placeholder="DeFi, Enterprise, Infrastructure, etc." className="quantum-input" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Name *</label>
                    <Input placeholder="Your full name" className="quantum-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input type="email" placeholder="your@email.com" className="quantum-input" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Role/Title *</label>
                    <Input placeholder="CTO, Lead Developer, etc." className="quantum-input" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Team Size</label>
                    <Input placeholder="Number of technical team members" className="quantum-input" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Current Blockchain Infrastructure *</label>
                  <Textarea 
                    placeholder="Describe your current blockchain setup, technologies used, transaction volumes, etc."
                    className="quantum-input min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Use Case for QuantZen *</label>
                  <Textarea 
                    placeholder="Describe how you plan to use QuantZen, what problems you're trying to solve, and your specific requirements"
                    className="quantum-input min-h-[100px]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Timeline & Commitment</label>
                  <Textarea 
                    placeholder="When would you like to start the pilot? What resources can you commit to the POC?"
                    className="quantum-input min-h-[80px]"
                  />
                </div>

                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="quantum" size="lg" className="group">
                      <Mail className="w-5 h-5 mr-2" />
                      Submit Application
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-4">
                    We'll review your application and get back to you within 48 hours.
                  </p>
                </div>
              </form>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Alternative */}
      <section className="py-16 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="gaming-card p-8 max-w-2xl mx-auto">
              <Zap className="w-12 h-12 text-quantum-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Prefer to discuss directly?</h3>
              <p className="text-muted-foreground mb-6">
                Schedule a technical demo or consultation with our team to explore how QuantZen can fit your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Demo
                </Button>
                <Button variant="outline">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Sales
                </Button>
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

export default CallForPOCs;