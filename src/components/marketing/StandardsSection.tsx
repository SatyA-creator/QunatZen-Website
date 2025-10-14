import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Award, CheckCircle, Mail, FileText, Shield, Loader2 } from "lucide-react";
import { useState } from "react";
import { sendSubscriptionEmail } from "@/lib/emailService";
import { useToast } from "@/hooks/use-toast";

const standards = [
  {
    icon: Award,
    title: "NIST-Standardized Algorithms",
    description: "Implements post-quantum cryptography using NIST-approved algorithms such as CRYSTALS-Dilithium for digital signatures and CRYSTALS-Kyber for key encapsulation.",
    status: "Compliant"
  },
  {
    icon: Shield,
    title: "Open Standards & Flexibility", 
    description: "Ensuring algorithms remain modular and pluggable as the ecosystem evolves.",
    status: "Implemented"
  },
  {
    icon: FileText,
    title: "Enterprise-Grade Assurance",
    description: "Designed with a clear enterprise readiness path, including managed verification services, SOC 2 readiness, and independent security audits.",
    status: "Certified"
  },
  {
    icon: CheckCircle,
    title: "Future-Proof Design",
    description: "Architected to seamlessly integrate emerging post-quantum standards, maintaining long-term resilience against quantum threats.",
    status: "Validated"
  }
];

const certifications = [
  "CRYSTALS-Dilithium Digital Signatures",
  "CRYSTALS-KYBER Key Encapsulation",
  //  "Liboqs and open standards", 
  //  "Enterprise-readiness"
];

const StandardsSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const result = await sendSubscriptionEmail(email);
      
      if (result.success) {
        setIsSubscribed(true);
        setEmail("");
        toast({
          title: "Successfully subscribed!",
          description: result.message,
          variant: "default",
        });
      } else {
        toast({
          title: "Subscription failed",
          description: result.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/5 to-quantum-primary/5 overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">Proof &</span> Standards
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Uses NIST-standardized post-quantum algorithms (e.g., CRYSTALS-Dilithium, Kyber for KEM).

          </p>
        </motion.div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto mb-16">
          {standards.map((standard, index) => (
            <motion.div
              key={standard.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1
              }}
              whileHover={{ y: -5 }}
            >
              <Card className="gaming-card p-6 h-full text-center group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="inline-flex p-3 rounded-full bg-gradient-to-br from-quantum-primary/20 to-secondary/20 mb-4 group-hover:from-quantum-primary/30 group-hover:to-secondary/30 transition-all duration-300"
                >
                  <standard.icon className="w-6 h-6 text-quantum-primary" />
                </motion.div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-quantum-primary transition-colors">
                  {standard.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {standard.description}
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-medium text-green-500">
                    {/* {standard.status} */}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certification Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <Card className="gaming-card p-8">
            <h3 className="text-2xl font-bold text-center mb-8">
              Implemented Post-Quantum Algorithms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-quantum-primary/10 to-secondary/10 rounded-lg border border-quantum-primary/20"
                >
                  <CheckCircle className="w-5 h-5 text-quantum-primary flex-shrink-0" />
                  <span className="font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="gaming-card p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-quantum-primary mr-3" />
              <h3 className="text-2xl font-bold">THE Q2Z NEWSLETTER
</h3>
            </div>
            <p className="text-muted-foreground mb-8 text-lg">
              Your Friday 5-minute read on post-quantum security, Web3 risk, and practical migration insights.
Stay informed  subscribe to get the latest in your inbox.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto px-4 sm:px-0">
                <div className="flex flex-col gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1"
                  />
                  <Button 
                    type="submit" 
                    className="bg-quantum-primary hover:bg-quantum-primary/90 text-white px-8 w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      'Subscribe'
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="bg-gradient-to-r from-green-500/20 to-quantum-primary/20 rounded-lg p-6 border border-green-500/30"
              >
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="text-lg font-bold text-green-500 mb-2">
                  Successfully Subscribed!
                </h4>
                <p className="text-muted-foreground">
                  You'll receive the latest quantum security updates and QuantZen™ news.
                </p>
              </motion.div>
            )}
          </Card>
        </motion.div>

        {/* Compliance Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          {/* <div className="bg-gradient-to-r from-quantum-primary/10 to-secondary/10 rounded-2xl p-8 max-w-4xl mx-auto border border-quantum-primary/20">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-quantum-primary mr-3" />
              <h3 className="text-2xl font-bold">Enterprise-Grade Compliance</h3>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              QuantZen™ meets the most stringent security requirements for government, financial, and enterprise use. 
              Our quantum-safe infrastructure is audited, certified, and ready for mission-critical applications.
            </p>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default StandardsSection;