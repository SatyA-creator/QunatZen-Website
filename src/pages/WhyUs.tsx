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
  Lock,
} from "lucide-react";

const WhyUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 flex flex-col">
      <Navigation />

      <main className="flex-1 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 text-center overflow-x-hidden w-full">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-snug">
                Why <span className="text-gradient">QuantZen™</span>?
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto px-2">
                The quantum threat is real, but waiting for protocol-level changes isn’t an option.
                Here’s why QuantZen™ is the quantum protection your users need today:
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-red-50/80 to-orange-50/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 sm:p-8 bg-white shadow-xl border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center mb-6 gap-4">
                  <AlertTriangle className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-500 mx-auto sm:mx-0" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center sm:text-left">
                    The Current Challenge
                  </h2>
                </div>
                <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <p>
                    ETH/SOL are working on PQC but this will take{" "}
                    <strong className="text-slate-900">years to achieve and cost billions</strong>.
                    Apart from that, migration requires new key distribution, validator updates,
                    smart contract re-engineering, and breaks backward compatibility.
                  </p>
                  <p>
                    Even if they do the changes after 5 years  what if new Quantum algorithms
                    emerge by NIST? That would mean another{" "}
                    <strong className="text-slate-900">$100M+ engineering effort + years of coordination</strong>.
                  </p>
                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-4 sm:p-6 rounded-lg border border-red-500/20">
                    <p className="text-red-500 font-semibold text-center sm:text-left">
                      Meanwhile, community assets remain exposed. Security won’t appear overnight  someone
                      must protect users during this transition.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">
                That’s Why <span className="text-gradient">Zenith Studio</span> Built QuantZen™
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-700 max-w-3xl mx-auto">
                QuantZen™ doesn’t compete with ETH and SOL,it complements them.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[{
                icon: Shield,
                title: "Plug-in Solution",
                desc1:
                  "The plug-in solution layer SDK ensures forward compatibility if ever NIST evolve the PQC libraries  we’ll swap them in our SDK massive fast.",
                desc2:
                  "Our layer works on every EVM and NON-EVM chain, regardless of PQC integration status.",
              },
              {
                icon: Lock,
                title: "Quantum-Proof Evidence",
                desc1:
                  "Even if Quantum hacks occur, courts and enterprises can trace and verify who created the hacked transaction.",
                desc2:
                  "QuantZen™ ensures it’s impossible to alter our system post-Quantum hack ensuring integrity and traceability.",
              }].map(({ icon: Icon, title, desc1, desc2 }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <Card className="p-6 sm:p-8 bg-white shadow-xl border border-gray-200 h-full">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">
                      {title}
                    </h3>
                    <p className="text-slate-700 mb-3 sm:mb-4 text-sm sm:text-base">{desc1}</p>
                    <p className="text-slate-700  text-sm sm:text-base">{desc2}</p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 sm:p-8 text-center bg-white shadow-xl border border-gray-200">
                <Globe className="w-14 h-14 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-xl sm:text-2xl font-bold text-gradient">
                  we are the first to provide this solution.
                </h3>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Collaboration Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-50/80 to-purple-50/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-slate-900">
                Let’s Turn This Into{" "}
                <span className="text-gradient">Collaboration</span> Rather Than Competing
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {[{
                icon: Clock,
                title: "Your Protocol-Level PQC",
                items: [
                  "Critical for the long term",
                  "Takes years and massive resources",
                  "Chain-level upgrades for the future",
                ],
                color: "text-green-500",
              },
              {
                icon: Zap,
                title: "QuantZen™ Bridge Solution",
                items: [
                  "Plug-in solution that gives protection today",
                  "Creates a bridge until base-layer migrations are live",
                  "Secures users immediately",
                ],
                color: "text-blue-600",
              }].map(({ icon: Icon, title, items, color }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <Card className="p-6 sm:p-8 bg-white shadow-xl border border-gray-200 h-full">
                    <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 mb-4 sm:mb-6" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-slate-900">
                      {title}
                    </h3>
                    <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                      {items.map((item, j) => (
                        <li key={j} className="flex items-start">
                          <CheckCircle className={`w-5 h-5 ${color} mr-2 mt-1 flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-6 sm:p-8 text-center bg-white shadow-xl border border-gray-200">
                <Users className="w-14 h-14 sm:w-16 sm:h-16 text-blue-600 mx-auto mb-4 sm:mb-6" />
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-900">
                  Together, We Can{" "}
                  <span className="text-gradient">Secure Your Users Now</span>
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-slate-700">
                  While you prepare the chain-level upgrades for the future  together, we make
                  every public address on Earth quantum-proof by default.
                </p>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Card className="p-6 sm:p-10 md:p-12 bg-white shadow-xl border border-gray-200 rounded-2xl">
                <Target className="w-14 h-14 sm:w-20 sm:h-20 text-blue-600 mx-auto mb-6 sm:mb-8" />
                <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-slate-900">
                  One Last <span className="text-gradient">Question</span>?
                </h2>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 sm:p-8 rounded-lg mb-6 sm:mb-8 border border-blue-200">
                  <p className="text-lg sm:text-2xl font-bold text-blue-800">
                    “Do you want to wait 5+ years for quantum safety, or do you want protection
                    starting this quarter 2025?”
                  </p>
                </div>
                <p className="text-base sm:text-lg text-slate-700 mb-6 sm:mb-8">
                  We’re not waiting for Ethereum 3.0. {" "}
                  <strong className="text-slate-900">We’re securing Web3 today.</strong>
                </p>

                {/* ✅ Updated Button Section */}
                <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-6 mt-4 sm:mt-6 w-full">
                  {/* Button 1 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      size="lg"
                      onClick={() => navigate("/contact")}
                      className="w-full sm:w-auto bg-gradient-to-r from-quantum-primary to-quantum-secondary text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:shadow-lg hover:shadow-quantum-primary/50 transition-all duration-300"
                    >
                      Start Protecting Users Today
                      <ArrowRight className="ml-2 w-5 h-5 inline-block" />
                    </Button>
                  </motion.div>

                  {/* Button 2 */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => navigate("/product")}
                      className="w-full sm:w-auto border-2 border-quantum-primary text-quantum-primary hover:bg-quantum-primary/10 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300"
                    >
                      Learn More About Our Solution
                    </Button>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WhyUs;
