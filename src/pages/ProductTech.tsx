import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import { 
  Shield, 
  Key, 
  CheckCircle, 
  Code2, 
  ArrowRight, 
  Download,
  Layers,
  Database,
  Zap,
  Lock
} from "lucide-react";

const ProductTech = () => {
  const coreComponents = [
    {
      icon: Layers,
      title: "Dual‑Signature Layer™",
      description: "hybrid ECDSA/EdDSA + PQC (Dilithium, Falcon, SPHINCS+)."
    },
    {
      icon: Database,
      title: "Key Registry (on‑chain)",
      description: "map accounts to PQ public keys or commitments."
    },
    {
      icon: CheckCircle,
      title: "Verification",
      description: "on‑chain (contracts/precompiles) + off‑chain (managed verifier, audit log)."
    },
    {
      icon: Code2,
      title: "SDKs",
      description: "TypeScript (WASM), Rust, Go (roadmap), with simple APIs: signPQC, verifyPQC, registerKey."
    }
  ];

  const apis = [
    "generatePQKeypair(algo)",
    "registerKey(account, pqKeyCommitment)",
    "signPQC(message, algo, metadata)",
    "verifyPQC(signature, account, metadata)"
  ];

  const securityWins = [
    "Non‑repudiation & user‑intent proofs for regulated and enterprise flows.",
    "Replay‑proof across chains via chain‑scoped metadata binding.",
    "Bridge/custody workflows become tamper‑evident.",
    "Safer prompts reduce blind‑signing risk."
  ];

  const supportedChains = [
    "Ethereum / BNB / Polygon",
    "Cosmos SDK / Tendermint", 
    "Solana (adapter)",
    "Others on request"
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <div className="bg-gradient-to-br from-background to-secondary/10 overflow-x-hidden w-full">
      {/* Navigation Spacing */}
      <div className="h-16"></div>

      {/* Frame 1: What Is QuantZen? */}
      <section className="py-24 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                What Is <span className="text-gradient">QuantZen</span>?
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                A chain‑agnostic middleware layer that adds PQC signing and verification to blockchain transactions, independent of the underlying chain. It intercepts or augments normal transaction flows to add a PQ layer without forking the blockchain.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 text-quantum-primary">Core components</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coreComponents.map((component, index) => (
                  <motion.div
                    key={component.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="gaming-card p-6 h-full">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-quantum-primary/20">
                          <component.icon className="w-6 h-6 text-quantum-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold mb-2">{component.title}</h4>
                          <p className="text-sm text-muted-foreground">{component.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Card className="gaming-card p-8 w-full max-w-md">
                <div className="space-y-6">
                  <div className="text-center">
                    <Shield className="w-16 h-16 text-quantum-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold">QuantZen Flow</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { step: 1, text: "Middleware Interception", icon: Layers },
                      { step: 2, text: "Dual Signing", icon: Key },
                      { step: 3, text: "Verification", icon: CheckCircle }
                    ].map((item, index) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-quantum-primary/10 to-secondary/10"
                      >
                        <div className="w-8 h-8 rounded-full bg-quantum-primary text-white flex items-center justify-center font-bold text-sm">
                          {item.step}
                        </div>
                        <item.icon className="w-5 h-5 text-quantum-primary" />
                        <span className="text-sm font-medium">{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frame 2: Developer Experience */}
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
              Developer <span className="text-gradient">Experience</span>
            </h2>
            
            {/* Flow Steps */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              {[
                "Import the SDK",
                "Register a PQ key", 
                "Hybrid‑sign",
                "Verify"
              ].map((step, index) => (
                <div key={step} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="px-4 py-2 bg-quantum-primary/20 rounded-full text-sm font-medium"
                  >
                    {step}
                  </motion.div>
                  {index < 3 && (
                    <ArrowRight className="w-4 h-4 text-quantum-primary mx-2" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Capabilities */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Auto‑detects chain hashing (Keccak vs SHA‑256) and applies the right scheme under the hood.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Works with Ethers.js / CosmWasm / Solana clients; pluggable call‑data formatting.</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Minimal gas/latency overhead; choose Dilithium/Falcon per use case.</span>
                  </div>
                </div>

                {/* Security Notes */}
                <Card className="gaming-card p-6">
                  <h4 className="font-bold mb-4 flex items-center">
                    <Shield className="w-5 h-5 text-quantum-primary mr-2" />
                    Security Notes
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div>High‑entropy RNG, secure enclaves/keystores, key zeroization.</div>
                    <div>WASM modules audited to reduce JS side‑channel risk.</div>
                    <div>Optional IPFS proof anchoring for compliance.</div>
                  </div>
                </Card>

                {/* Supported Chains */}
                <div>
                  <h4 className="font-bold mb-4">Supported Chains (initial/roadmap)</h4>
                  <div className="flex flex-wrap gap-2">
                    {supportedChains.map((chain, index) => (
                      <motion.span
                        key={chain}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="px-3 py-1 bg-gradient-to-r from-quantum-primary/20 to-secondary/20 rounded-full text-sm border border-quantum-primary/30"
                      >
                        {chain}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: APIs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="gaming-card p-6">
                <h4 className="font-bold mb-4 flex items-center">
                  <Code2 className="w-5 h-5 text-quantum-primary mr-2" />
                  APIs (examples)
                </h4>
                <div className="space-y-3">
                  {apis.map((api, index) => (
                    <motion.div
                      key={api}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-black/20 rounded-lg p-3 font-mono text-sm border border-quantum-primary/20"
                    >
                      <code className="text-quantum-primary">{api}</code>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frame 3: Architecture At a Glance */}
      <section className="py-24 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16"
          >
            Architecture <span className="text-gradient">(At a Glance)</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-quantum-primary rounded-full mt-3"></div>
                  <span>Client calls signTransaction → QuantZen SDK also calls signPQC.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-quantum-primary rounded-full mt-3"></div>
                  <span>Call‑data includes PQ signature (algoID + signature bytes).</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-quantum-primary rounded-full mt-3"></div>
                  <span>The contract checks ECDSA as usual and verifies PQC via registry/precompile.</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-quantum-primary rounded-full mt-3"></div>
                  <span>Verifier optionally stores proofs off‑chain and returns attestations.</span>
                </div>
              </div>
              
              <Card className="gaming-card p-6 bg-gradient-to-r from-quantum-primary/10 to-secondary/10 border border-quantum-primary/30">
                <div className="font-bold text-quantum-primary mb-2">Result:</div>
                <div>transaction executes only if both checks pass (policy‑configurable).</div>
              </Card>
            </motion.div>

            {/* Right: Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Card className="gaming-card p-8 w-full">
                <div className="space-y-8">
                  {[
                    { label: "Client", icon: Lock, color: "from-blue-500/20 to-cyan-500/20" },
                    { label: "QuantZen SDK", icon: Layers, color: "from-quantum-primary/20 to-secondary/20" },
                    { label: "Contract + Registry", icon: Database, color: "from-green-500/20 to-emerald-500/20" },
                    { label: "Verifier", icon: CheckCircle, color: "from-purple-500/20 to-pink-500/20" }
                  ].map((step, index) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className={`bg-gradient-to-r ${step.color} rounded-lg p-4 border border-white/10`}
                    >
                      <div className="flex items-center space-x-3">
                        <step.icon className="w-6 h-6 text-quantum-primary" />
                        <span className="font-medium">{step.label}</span>
                      </div>
                      {index < 3 && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                          className="w-0.5 h-6 bg-gradient-to-b from-quantum-primary to-secondary mx-3 mt-2"
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Frame 4: Security Wins Beyond Quantum */}
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
              Security Wins <span className="text-gradient">Beyond Quantum</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {securityWins.map((win, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="gaming-card p-6 h-full">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{win}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="gaming-card p-8 max-w-4xl mx-auto mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Even if you believe quantum is "years away," QuantZen pays for itself by reducing today's losses and by future‑proofing your users' history against HNDL.
              </p>
            </Card>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="quantum" 
                size="lg" 
                className="group relative overflow-hidden"
              >
                <Download className="w-5 h-5 mr-2" />
                DOWNLOAD WHITEPAPER / TECHNICAL DOCUMENTS
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-quantum-accent to-quantum-secondary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductTech;