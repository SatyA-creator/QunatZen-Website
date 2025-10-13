import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Clock,
  Target,
  CheckCircle,
  AlertTriangle,
  Zap,
  Globe,
  ArrowRight,
  Users,
  Lock
} from "lucide-react";

const WhyUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-24 overflow-x-hidden w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
                Why <span className="text-gradient">QuantZen™</span>?
              </h1>
              <p className="text-xl text-slate-700 max-w-4xl mx-auto">
                The quantum threat is real, but waiting for protocol-level changes isn't an option. 
                Here's why QuantZen™ is the quantum protection your users need today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 bg-gradient-to-br from-red-50/80 to-orange-50/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <Card className="gaming-card p-8 bg-white shadow-xl border border-gray-200">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="w-12 h-12 text-yellow-500 mr-4" />
                  <h2 className="text-3xl font-bold text-slate-900">The Current Challenge</h2>
                </div>
                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    ETH/SOL are working on PQC but this will take <strong className="text-slate-900">years to achieve and cost billions</strong>. 
                    Apart from that migration requires new key distribution, validator updates, smart contract re-engineered 
                    and break backward compatibility.
                  </p>
                  <p>
                    Even if they do the changes lets say after 5 years what if new Quantum algorithms come by NIST, 
                    in that case will they re-work again and spend time and money again - that was a 
                    <strong className="text-slate-900">$100M+ engineering effort + years of coordination</strong>.
                  </p>
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-lg border border-red-500/20">
                    <p className="text-red-400 font-semibold">
                      Meanwhile, community assets remain exposed. Security will not appear overnight, 
                      and someone must protect users during this transition.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Our Solution Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                That's Why <span className="text-gradient">Zenith Studio</span> Built QuantZen™
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                QuantZen™ doesn't compete with ETH and SOL rather it complements it.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="gaming-card p-8 h-full bg-white shadow-xl border border-gray-200">
                  <Shield className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Plug-in Solution</h3>
                  <p className="text-slate-700 mb-4">
                    The plug-in solution layer SDK ensures forward compatibility if ever NIST evolve the PQC libraries 
                    we will just swap them in our SDK <strong className="text-slate-900">massive fast</strong> then the ETH/SOL PQC solution.
                  </p>
                  <p className="text-blue-700 font-semibold">
                    Our layer works on every EVM and NON-EVM chains regardless of whether the chain has PQC integrated or not.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="gaming-card p-8 h-full bg-white shadow-xl border border-gray-200">
                  <Lock className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Quantum-Proof Evidence</h3>
                  <p className="text-slate-700 mb-4">
                    Let's say Quantum Proof Layer has been integrated by ETH/SOL and one day Quantum hack happens 
                    then how court/enterprises trace and find evidence that the hacked transaction was really from "XYZ" user 
                    since after the hack everything will be tampered.
                  </p>
                  <p className="text-blue-700 font-semibold">
                    QuantZen™ has built such a system that Enterprises, regulators, and courts can later verify 
                    who was the original creator of that particular hacked transaction cos it's impossible to alter 
                    our QuantZen™ system after Quantum hack happens.
                  </p>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="gaming-card p-8 text-center bg-white shadow-xl border border-gray-200">
                <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-gradient">
                  We are the first one in the planet to provide this solution.
                </h3>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50/80 to-purple-50/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                Let's Turn This Into <span className="text-gradient">Collaboration</span> Rather Than Competing
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="gaming-card p-8 h-full bg-white shadow-xl border border-gray-200">
                  <Clock className="w-12 h-12 text-blue-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">Your Protocol-Level PQC</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Critical for the long term
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Takes years and massive resources
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      Chain-level upgrades for the future
                    </li>
                  </ul>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="gaming-card p-8 h-full bg-white shadow-xl border border-gray-200">
                  <Zap className="w-12 h-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">QuantZen™ Bridge Solution</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Plug-in solution that gives protection today
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Creates a bridge until base-layer migrations are live
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      Secures users immediately
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="gaming-card p-8 text-center bg-white shadow-xl border border-gray-200">
                <Users className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-6 text-slate-900">
                  Together, We Can <span className="text-gradient">Secure Your Users Now</span>
                </h3>
                <p className="text-xl text-slate-700 mb-6">
                  While you prepare the chain-level upgrades for the future. Together, we make every public address 
                  on Earth quantum-proof by default securing users immediately and keeping Ethereum/Solana ahead 
                  as leaders in Web3 security.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Card className="gaming-card p-12 bg-white shadow-xl border border-gray-200">
                <Target className="w-20 h-20 text-blue-600 mx-auto mb-8" />
                <h2 className="text-4xl font-bold mb-8 text-slate-900">
                  One Last <span className="text-gradient">Question</span>?
                </h2>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-lg mb-8 border border-blue-200">
                  <p className="text-2xl font-bold text-blue-800 mb-4">
                    "Do you want to wait 5+ years for quantum safety, or do you want your users to be protected starting this quarter 2025?"
                  </p>
                </div>
                <p className="text-xl text-slate-700 mb-8">
                  We're not waiting for Ethereum 3.0 - <strong className="text-slate-900">we're securing Web3 today.</strong>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      size="lg"
                      onClick={() => navigate('/contact')}
                      className="bg-gradient-to-r from-quantum-primary to-quantum-secondary text-white px-8 py-4 text-lg font-semibold hover:shadow-lg hover:shadow-quantum-primary/50 transition-all duration-300"
                    >
                      Start Protecting Users Today
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      variant="outline"
                      size="lg"
                      onClick={() => navigate('/product')}
                      className="border-quantum-primary text-quantum-primary hover:bg-quantum-primary/10 px-8 py-4 text-lg font-semibold transition-all duration-300"
                    >
                      Learn More About Our Solution
                    </Button>
                  </motion.div>
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

export default WhyUs;