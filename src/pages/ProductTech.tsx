import { motion } from "framer-motion";import { motion } from "framer-motion";import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";

import { Button } from "@/components/ui/button";import { Card } from "@/components/ui/card";import { Card } from "@/components/ui/card";

import Navigation from "@/components/marketing/Navigation";

import Footer from "@/components/marketing/Footer";import { Button } from "@/components/ui/button";import { Button } from "@/components/ui/button";

import { useNavigate } from "react-router-dom";

import { import Navigation from "@/components/marketing/Navigation";import Navigation from "@/components/marketing/Navigation";

  Shield, 

  Clock,import Footer from "@/components/marketing/Footer";import Footer from "@/components/marketing/Footer";

  Target,

  CheckCircle,import { useNavigate } from "react-router-dom";import { useNavigate } from "react-router-dom";

  AlertTriangle,

  Zap,import { import { 

  Globe,

  ArrowRight,  Shield,   Shield, 

  Users,

  Lock  Clock,  Clock,

} from "lucide-react";

  Target,  Target,

const ProductTech = () => {

  const navigate = useNavigate();  CheckCircle,  CheckCircle,



  return (  AlertTriangle,  AlertTriangle,

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">

      <Navigation />  Zap,  Zap,

      

      <div className="pt-20">  Globe,  Globe,

        {/* Hero Section */}

        <section className="py-24 overflow-x-hidden w-full">  ArrowRight,  ArrowRight

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

            <motion.div  Users,} from "lucide-react";

              initial={{ opacity: 0, y: 30 }}

              animate={{ opacity: 1, y: 0 }}  Building,

              transition={{ duration: 0.8 }}

              className="text-center mb-16"  Lockconst ProductTech = () => {

            >

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">} from "lucide-react";  const navigate = useNavigate(); 

                Why <span className="text-gradient">QuantZen™</span>?

              </h1>

              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">

                The quantum threat is real, but waiting for protocol-level changes isn't an option. const ProductTech = () => {      title: "Dual‑Signature Layer™",

                Here's why QuantZen™ is the quantum protection your users need today.

              </p>  const navigate = useNavigate();

            </motion.div>

          </div>      description: "hybrid ECDSA/EdDSA + PQC (Dilithium, Falcon, SPHINCS+)."} from "lucide-react";

        </section>

  return (

        {/* The Problem Section */}

        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">    },

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

            <motion.div      <Navigation />

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}          {  Target,  Target,

              viewport={{ once: true }}

              transition={{ duration: 0.8 }}      <div className="pt-20">

              className="mb-16"

            >        {/* Hero Section */}      icon: Database,

              <Card className="gaming-card p-8">

                <div className="flex items-center mb-6">        <section className="py-24 overflow-x-hidden w-full">

                  <AlertTriangle className="w-12 h-12 text-yellow-500 mr-4" />

                  <h2 className="text-3xl font-bold">The Current Challenge</h2>          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">      title: "Key Registry (on‑chain)",const ProductTech = () => {

                </div>

                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">            <motion.div

                  <p>

                    ETH/SOL are working on PQC but this will take <strong className="text-foreground">years to achieve and cost billions</strong>.               initial={{ opacity: 0, y: 30 }}      description: "map accounts to PQ public keys or commitments."

                    Apart from that migration requires new key distribution, validator updates, smart contract re-engineered 

                    and break backward compatibility.              animate={{ opacity: 1, y: 0 }}

                  </p>

                  <p>              transition={{ duration: 0.8 }}    },  const whyChooseUs = [  Clock,  Clock,

                    Even if they do the changes lets say after 5 years what if new Quantum algorithms come by NIST, 

                    in that case will they re-work again and spend time and money again - that was a               className="text-center mb-16"

                    <strong className="text-foreground">$100M+ engineering effort + years of coordination</strong>.

                  </p>            >    {

                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-lg border border-red-500/20">

                    <p className="text-red-400 font-semibold">              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">

                      Meanwhile, community assets remain exposed. Security will not appear overnight, 

                      and someone must protect users during this transition.                Why <span className="text-gradient">QuantZen™</span>?      icon: CheckCircle,    {

                    </p>

                  </div>              </h1>

                </div>

              </Card>              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">      title: "Verification",

            </motion.div>

          </div>                The quantum threat is real, but waiting for protocol-level changes isn't an option. 

        </section>

                Here's why QuantZen™ is the quantum protection your users need today.      description: "on‑chain (contracts/precompiles) + off‑chain (managed verifier, audit log)."      icon: Target,  Users,  Users,

        {/* Our Solution Section */}

        <section className="py-20">              </p>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

            <motion.div            </motion.div>    },

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}          </div>

              viewport={{ once: true }}

              transition={{ duration: 0.8 }}        </section>    {      title: "Pragmatic Solution",

              className="text-center mb-16"

            >

              <h2 className="text-4xl font-bold mb-6">

                That's Why <span className="text-gradient">Zenith Studio</span> Built QuantZen™        {/* The Problem Section */}      icon: Code2,

              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">        <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">

                QuantZen™ doesn't compete with ETH and SOL rather it complements it.

              </p>          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">      title: "SDKs",      description: "No need to wait for chain-wide hard forks or governance battles. Add quantum security today."  ArrowRight,  ArrowRight,

            </motion.div>

            <motion.div

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

              <motion.div              initial={{ opacity: 0, y: 30 }}      description: "TypeScript (WASM), Rust, Go (roadmap), with simple APIs: signPQC, verifyPQC, registerKey."

                initial={{ opacity: 0, x: -30 }}

                whileInView={{ opacity: 1, x: 0 }}              whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{ duration: 0.6 }}              viewport={{ once: true }}    }    },

              >

                <Card className="gaming-card p-8 h-full">              transition={{ duration: 0.8 }}

                  <Shield className="w-12 h-12 text-quantum-primary mb-6" />

                  <h3 className="text-2xl font-bold mb-4">Plug-in Solution</h3>              className="mb-16"  ];

                  <p className="text-muted-foreground mb-4">

                    The plug-in solution layer SDK ensures forward compatibility if ever NIST evolve the PQC libraries             >

                    we will just swap them in our SDK <strong className="text-foreground">massive fast</strong> then the ETH/SOL PQC solution.

                  </p>              <Card className="gaming-card p-8">    {  CheckCircle,  CheckCircle,

                  <p className="text-quantum-primary font-semibold">

                    Our layer works on every EVM and NON-EVM chains regardless of whether the chain has PQC integrated or not.                <div className="flex items-center mb-6">

                  </p>

                </Card>                  <AlertTriangle className="w-12 h-12 text-yellow-500 mr-4" />  const developerSteps = [

              </motion.div>

                  <h2 className="text-3xl font-bold">The Current Challenge</h2>

              <motion.div

                initial={{ opacity: 0, x: 30 }}                </div>    "Import the SDK",      icon: Clock,

                whileInView={{ opacity: 1, x: 0 }}

                viewport={{ once: true }}                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">

                transition={{ duration: 0.6, delay: 0.2 }}

              >                  <p>    "Register a PQ key", 

                <Card className="gaming-card p-8 h-full">

                  <Lock className="w-12 h-12 text-quantum-primary mb-6" />                    ETH/SOL are working on PQC but this will take <strong className="text-foreground">years to achieve and cost billions</strong>. 

                  <h3 className="text-2xl font-bold mb-4">Quantum-Proof Evidence</h3>

                  <p className="text-muted-foreground mb-4">                    Apart from that migration requires new key distribution, validator updates, smart contract re-engineered     "Hybrid‑sign",      title: "Future-Proof Now",  AlertTriangle,  AlertTriangle,

                    Let's say Quantum Proof Layer has been integrated by ETH/SOL and one day Quantum hack happens 

                    then how court/enterprises trace and find evidence that the hacked transaction was really from "XYZ" user                     and break backward compatibility.

                    since after the hack everything will be tampered.

                  </p>                  </p>    "Verify"

                  <p className="text-quantum-primary font-semibold">

                    QuantZen™ has built such a system that Enterprises, regulators, and courts can later verify                   <p>

                    who was the original creator of that particular hacked transaction cos it's impossible to alter 

                    our QuantZen™ system after Quantum hack happens.                    Even if they do the changes lets say after 5 years what if new Quantum algorithms come by NIST,   ];      description: "Protect your users' transaction history against harvest-now-decrypt-later attacks."

                  </p>

                </Card>                    in that case will they re-work again and spend time and money again - that was a 

              </motion.div>

            </div>                    <strong className="text-foreground">$100M+ engineering effort + years of coordination</strong>.



            <motion.div                  </p>

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}                  <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 p-6 rounded-lg border border-red-500/20">  const apis = [    },  Zap  Zap

              viewport={{ once: true }}

              transition={{ duration: 0.8 }}                    <p className="text-red-400 font-semibold">

            >

              <Card className="gaming-card p-8 text-center">                      Meanwhile, community assets remain exposed. Security will not appear overnight,     "generatePQKeypair(algo)",

                <Globe className="w-16 h-16 text-quantum-primary mx-auto mb-6" />

                <h3 className="text-2xl font-bold mb-4 text-gradient">                      and someone must protect users during this transition.

                  We are the first one in the planet to provide this solution.

                </h3>                    </p>    "registerKey(account, pqKeyCommitment)",    {

              </Card>

            </motion.div>                  </div>

          </div>

        </section>                </div>    "signPQC(message, algo, metadata)",



        {/* Collaboration Section */}              </Card>

        <section className="py-20 bg-gradient-to-br from-quantum-primary/10 to-secondary/10">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">            </motion.div>    "verifyPQC(signature, account, metadata)"      icon: Shield,} from "lucide-react";} from "lucide-react";

            <motion.div

              initial={{ opacity: 0, y: 30 }}          </div>

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}        </section>  ];

              transition={{ duration: 0.8 }}

              className="text-center mb-16"

            >

              <h2 className="text-4xl font-bold mb-6">        {/* Our Solution Section */}      title: "Battle-Tested Standards",

                Let's Turn This Into <span className="text-gradient">Collaboration</span> Rather Than Competing

              </h2>        <section className="py-20">

            </motion.div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">  const supportedChains = [

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">

              <motion.div            <motion.div

                initial={{ opacity: 0, x: -30 }}

                whileInView={{ opacity: 1, x: 0 }}              initial={{ opacity: 0, y: 30 }}    "Ethereum / BNB / Polygon",      description: "Built on NIST-approved post-quantum cryptography (Dilithium, Falcon, SPHINCS+, Kyber)."

                viewport={{ once: true }}

                transition={{ duration: 0.6 }}              whileInView={{ opacity: 1, y: 0 }}

              >

                <Card className="gaming-card p-8 h-full">              viewport={{ once: true }}    "Cosmos SDK / Tendermint",

                  <Clock className="w-12 h-12 text-blue-500 mb-6" />

                  <h3 className="text-2xl font-bold mb-4">Your Protocol-Level PQC</h3>              transition={{ duration: 0.8 }}

                  <ul className="space-y-3 text-muted-foreground">

                    <li className="flex items-start">              className="text-center mb-16"    "Solana (adapter)",    },

                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />

                      Critical for the long term            >

                    </li>

                    <li className="flex items-start">              <h2 className="text-4xl font-bold mb-6">    "Others on request"

                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />

                      Takes years and massive resources                That's Why <span className="text-gradient">Zenith Studio</span> Built QuantZen™

                    </li>

                    <li className="flex items-start">              </h2>  ];    {const ProductTech = () => {const ProductTech = () => {

                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />

                      Chain-level upgrades for the future              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">

                    </li>

                  </ul>                QuantZen™ doesn't compete with ETH and SOL rather it complements it.

                </Card>

              </motion.div>              </p>



              <motion.div            </motion.div>  const securityWins = [      icon: Users,

                initial={{ opacity: 0, x: 30 }}

                whileInView={{ opacity: 1, x: 0 }}

                viewport={{ once: true }}

                transition={{ duration: 0.6, delay: 0.2 }}            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">    {

              >

                <Card className="gaming-card p-8 h-full">              <motion.div

                  <Zap className="w-12 h-12 text-quantum-primary mb-6" />

                  <h3 className="text-2xl font-bold mb-4">QuantZen™ Bridge Solution</h3>                initial={{ opacity: 0, x: -30 }}      title: "Non‑repudiation & user‑intent proofs",      title: "Drop-In Integration",  const whyChooseUs = [  const whyChooseUs = [

                  <ul className="space-y-3 text-muted-foreground">

                    <li className="flex items-start">                whileInView={{ opacity: 1, x: 0 }}

                      <CheckCircle className="w-5 h-5 text-quantum-primary mr-2 mt-1 flex-shrink-0" />

                      Plug-in solution that gives protection today                viewport={{ once: true }}      description: "for regulated and enterprise flows."

                    </li>

                    <li className="flex items-start">                transition={{ duration: 0.6 }}

                      <CheckCircle className="w-5 h-5 text-quantum-primary mr-2 mt-1 flex-shrink-0" />

                      Creates a bridge until base-layer migrations are live              >    },      description: "No forks. No governance deadlocks. No migrations. Just drop in, sign, and you're quantum-safe."

                    </li>

                    <li className="flex items-start">                <Card className="gaming-card p-8 h-full">

                      <CheckCircle className="w-5 h-5 text-quantum-primary mr-2 mt-1 flex-shrink-0" />

                      Secures users immediately                  <Shield className="w-12 h-12 text-quantum-primary mb-6" />    {

                    </li>

                  </ul>                  <h3 className="text-2xl font-bold mb-4">Plug-in Solution</h3>

                </Card>

              </motion.div>                  <p className="text-muted-foreground mb-4">      title: "Replay‑proof across chains",    }    {    {

            </div>

                    The plug-in solution layer SDK ensures forward compatibility if ever NIST evolve the PQC libraries 

            <motion.div

              initial={{ opacity: 0, y: 30 }}                    we will just swap them in our SDK <strong className="text-foreground">massive fast</strong> then the ETH/SOL PQC solution.      description: "via chain‑scoped metadata binding."

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}                  </p>

              transition={{ duration: 0.8 }}

            >                  <p className="text-quantum-primary font-semibold">    },  ];

              <Card className="gaming-card p-8 text-center">

                <Users className="w-16 h-16 text-quantum-primary mx-auto mb-6" />                    Our layer works on every EVM and NON-EVM chains regardless of whether the chain has PQC integrated or not.

                <h3 className="text-3xl font-bold mb-6">

                  Together, We Can <span className="text-gradient">Secure Your Users Now</span>                  </p>    {

                </h3>

                <p className="text-xl text-muted-foreground mb-6">                </Card>

                  While you prepare the chain-level upgrades for the future. Together, we make every public address 

                  on Earth quantum-proof by default securing users immediately and keeping Ethereum/Solana ahead               </motion.div>      title: "Bridge/custody workflows",      icon: Target,      icon: Target,

                  as leaders in Web3 security.

                </p>

              </Card>

            </motion.div>              <motion.div      description: "become tamper‑evident."

          </div>

        </section>                initial={{ opacity: 0, x: 30 }}



        {/* Final Call to Action */}                whileInView={{ opacity: 1, x: 0 }}    },  const problems = [

        <section className="py-24">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">                viewport={{ once: true }}

            <motion.div

              initial={{ opacity: 0, y: 30 }}                transition={{ duration: 0.6, delay: 0.2 }}    {

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}              >

              transition={{ duration: 0.8 }}

              className="text-center"                <Card className="gaming-card p-8 h-full">      title: "Safer prompts",    {      title: "Pragmatic Solution",      title: "Pragmatic Solution",

            >

              <Card className="gaming-card p-12">                  <Lock className="w-12 h-12 text-quantum-primary mb-6" />

                <Target className="w-20 h-20 text-quantum-primary mx-auto mb-8" />

                <h2 className="text-4xl font-bold mb-8">                  <h3 className="text-2xl font-bold mb-4">Quantum-Proof Evidence</h3>      description: "reduce blind‑signing risk."

                  One Last <span className="text-gradient">Question</span>?

                </h2>                  <p className="text-muted-foreground mb-4">

                <div className="bg-gradient-to-r from-quantum-primary/20 to-secondary/20 p-8 rounded-lg mb-8">

                  <p className="text-2xl font-bold text-quantum-primary mb-4">                    Let's say Quantum Proof Layer has been integrated by ETH/SOL and one day Quantum hack happens     }      title: "Current Web3 Security Crisis",

                    "Do you want to wait 5+ years for quantum safety, or do you want your users to be protected starting this quarter 2025?"

                  </p>                    then how court/enterprises trace and find evidence that the hacked transaction was really from "XYZ" user 

                </div>

                <p className="text-xl text-muted-foreground mb-8">                    since after the hack everything will be tampered.  ];

                  We're not waiting for Ethereum 3.0 - <strong className="text-foreground">we're securing Web3 today.</strong>

                </p>                  </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>                  <p className="text-quantum-primary font-semibold">      stats: "$2.093 billion stolen in H1 2025",      description: "No need to wait for chain-wide hard forks or governance battles. Add quantum security today."      description: "No need to wait for chain-wide hard forks or governance battles. Add quantum security today."

                    <Button 

                      size="lg"                    QuantZen™ has built such a system that Enterprises, regulators, and courts can later verify 

                      onClick={() => navigate('/contact')}

                      className="bg-gradient-to-r from-quantum-primary to-quantum-secondary text-white px-8 py-4 text-lg font-semibold hover:shadow-lg hover:shadow-quantum-primary/50 transition-all duration-300"                    who was the original creator of that particular hacked transaction cos it's impossible to alter   const architectureSteps = [

                    >

                      Start Protecting Users Today                    our QuantZen™ system after Quantum hack happens.

                      <ArrowRight className="ml-2 w-5 h-5" />

                    </Button>                  </p>    "Client calls signTransaction → QuantZen SDK also calls signPQC",      description: "90 major incidents, with six exchange attacks alone accounting for $1.591 billion in losses."

                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>                </Card>

                    <Button 

                      variant="outline"              </motion.div>    "Call‑data includes PQ signature (algoID + signature bytes)",

                      size="lg"

                      onClick={() => navigate('/product')}            </div>

                      className="border-quantum-primary text-quantum-primary hover:bg-quantum-primary/10 px-8 py-4 text-lg font-semibold transition-all duration-300"

                    >    "The contract checks ECDSA as usual and verifies PQC via registry/precompile",    },    },    },

                      Learn More About Our Solution

                    </Button>            <motion.div

                  </motion.div>

                </div>              initial={{ opacity: 0, y: 30 }}    "Verifier optionally stores proofs off‑chain and returns attestations"

              </Card>

            </motion.div>              whileInView={{ opacity: 1, y: 0 }}

          </div>

        </section>              viewport={{ once: true }}  ];    {

      </div>

                    transition={{ duration: 0.8 }}

      <Footer />

    </div>            >

  );

};              <Card className="gaming-card p-8 text-center">



export default ProductTech;                <Globe className="w-16 h-16 text-quantum-primary mx-auto mb-6" />  return (      title: "Escalating Threats",    {    {

                <h3 className="text-2xl font-bold mb-4 text-gradient">

                  We are the first one in the planet to provide this solution.    <div className="min-h-screen overflow-x-hidden">

                </h3>

              </Card>      <Navigation />      stats: "96% increase in Q1 2025",

            </motion.div>

          </div>      

        </section>

      {/* Hero Section */}      description: "Over $2 billion vanished in just three months, driven by operational failures and access control exploits."      icon: Clock,      icon: Clock,

        {/* Collaboration Section */}

        <section className="py-20 bg-gradient-to-br from-quantum-primary/10 to-secondary/10">      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-quantum-dark/20 to-background">

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

            <motion.div        <div className="container mx-auto px-4 sm:px-6">    },

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}          <motion.div

              viewport={{ once: true }}

              transition={{ duration: 0.8 }}            initial={{ opacity: 0, y: 20 }}    {      title: "Future-Proof Now",      title: "Future-Proof Now",

              className="text-center mb-16"

            >            animate={{ opacity: 1, y: 0 }}

              <h2 className="text-4xl font-bold mb-6">

                Let's Turn This Into <span className="text-gradient">Collaboration</span> Rather Than Competing            transition={{ duration: 0.6 }}      title: "Quantum Threat Timeline", 

              </h2>

            </motion.div>            className="text-center mb-16"



            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">          >      stats: "2030-2035 estimated",      description: "Protect your users' transaction history against harvest-now-decrypt-later attacks."      description: "Protect your users' transaction history against harvest-now-decrypt-later attacks."

              <motion.div

                initial={{ opacity: 0, x: -30 }}            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">

                whileInView={{ opacity: 1, x: 0 }}

                viewport={{ once: true }}              Why Choose QuantZen?      description: "Research suggests quantum computers capable of breaking RSA-2048 may emerge within this timeframe."

                transition={{ duration: 0.6 }}

              >            </h1>

                <Card className="gaming-card p-8 h-full">

                  <Clock className="w-12 h-12 text-blue-500 mb-6" />            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">    }    },    },

                  <h3 className="text-2xl font-bold mb-4">Your Protocol-Level PQC</h3>

                  <ul className="space-y-3 text-muted-foreground">              The chain‑agnostic solution for quantum-safe blockchain security

                    <li className="flex items-start">

                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />            </p>  ];

                      Critical for the long term

                    </li>          </motion.div>

                    <li className="flex items-start">

                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />        </div>    {    {

                      Takes years and massive resources

                    </li>      </section>

                    <li className="flex items-start">

                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />  return (

                      Chain-level upgrades for the future

                    </li>      {/* Frame 1: What Is QuantZen */}

                  </ul>

                </Card>      <section className="py-20 bg-card/30">    <div className="min-h-screen overflow-x-hidden">      icon: Shield,      icon: Shield,

              </motion.div>

        <div className="container mx-auto px-4 sm:px-6">

              <motion.div

                initial={{ opacity: 0, x: 30 }}          <motion.div      <Navigation />

                whileInView={{ opacity: 1, x: 0 }}

                viewport={{ once: true }}            initial={{ opacity: 0, y: 20 }}

                transition={{ duration: 0.6, delay: 0.2 }}

              >            whileInView={{ opacity: 1, y: 0 }}            title: "Battle-Tested Standards",      title: "Battle-Tested Standards",

                <Card className="gaming-card p-8 h-full">

                  <Zap className="w-12 h-12 text-quantum-primary mb-6" />            viewport={{ once: true }}

                  <h3 className="text-2xl font-bold mb-4">QuantZen™ Bridge Solution</h3>

                  <ul className="space-y-3 text-muted-foreground">            transition={{ duration: 0.6 }}      {/* Hero Section */}

                    <li className="flex items-start">

                      <CheckCircle className="w-5 h-5 text-quantum-primary mr-2 mt-1 flex-shrink-0" />            className="max-w-6xl mx-auto"

                      Plug-in solution that gives protection today

                    </li>          >      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-quantum-dark/20 to-background">      description: "Built on NIST-approved post-quantum cryptography (Dilithium, Falcon, SPHINCS+, Kyber)."      description: "Built on NIST-approved post-quantum cryptography (Dilithium, Falcon, SPHINCS+, Kyber)."

                    <li className="flex items-start">

                      <CheckCircle className="w-5 h-5 text-quantum-primary mr-2 mt-1 flex-shrink-0" />            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">

                      Creates a bridge until base-layer migrations are live

                    </li>              What Is <span className="text-gradient">QuantZen</span>?        <div className="container mx-auto px-4 sm:px-6">

                    <li className="flex items-start">

                      <CheckCircle className="w-5 h-5 text-quantum-primary mr-2 mt-1 flex-shrink-0" />            </h2>

                      Secures users immediately

                    </li>            <p className="text-lg text-foreground/80 mb-12 text-center max-w-4xl mx-auto">          <motion.div    },    },

                  </ul>

                </Card>              A chain‑agnostic middleware layer that adds PQC signing and verification to blockchain transactions, 

              </motion.div>

            </div>              independent of the underlying chain. It intercepts or augments normal transaction flows to add a PQ             initial={{ opacity: 0, y: 20 }}



            <motion.div              layer without forking the blockchain.

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}            </p>            animate={{ opacity: 1, y: 0 }}    {    {

              viewport={{ once: true }}

              transition={{ duration: 0.8 }}

            >

              <Card className="gaming-card p-8 text-center">            <h3 className="text-2xl font-bold mb-8 text-center">Core Components</h3>            transition={{ duration: 0.6 }}

                <Users className="w-16 h-16 text-quantum-primary mx-auto mb-6" />

                <h3 className="text-3xl font-bold mb-6">            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  Together, We Can <span className="text-gradient">Secure Your Users Now</span>

                </h3>              {coreComponents.map((component, index) => (            className="text-center mb-16"      icon: Users,      icon: Users,

                <p className="text-xl text-muted-foreground mb-6">

                  While you prepare the chain-level upgrades for the future. Together, we make every public address                 <motion.div

                  on Earth quantum-proof by default securing users immediately and keeping Ethereum/Solana ahead 

                  as leaders in Web3 security.                  key={index}          >

                </p>

              </Card>                  initial={{ opacity: 0, y: 20 }}

            </motion.div>

          </div>                  whileInView={{ opacity: 1, y: 0 }}            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">      title: "Drop-In Integration",      title: "Drop-In Integration",

        </section>

                  viewport={{ once: true }}

        {/* Final Call to Action */}

        <section className="py-24">                  transition={{ duration: 0.6, delay: index * 0.1 }}              Why Choose QuantZen?

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

            <motion.div                >

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}                  <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-quantum-primary/20 hover:border-quantum-primary/40 transition-all duration-300">            </h1>      description: "No forks. No governance deadlocks. No migrations. Just drop in, sign, and you're quantum-safe."      description: "No forks. No governance deadlocks. No migrations. Just drop in, sign, and you're quantum-safe."

              viewport={{ once: true }}

              transition={{ duration: 0.8 }}                    <div className="flex items-start gap-4">

              className="text-center"

            >                      <div className="p-3 rounded-lg bg-quantum-primary/20">            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">

              <Card className="gaming-card p-12">

                <Target className="w-20 h-20 text-quantum-primary mx-auto mb-8" />                        <component.icon className="w-6 h-6 text-quantum-primary" />

                <h2 className="text-4xl font-bold mb-8">

                  One Last <span className="text-gradient">Question</span>?                      </div>              The shortest route from "at risk" to quantum-ready, without waiting for protocol surgery    }    }

                </h2>

                <div className="bg-gradient-to-r from-quantum-primary/20 to-secondary/20 p-8 rounded-lg mb-8">                      <div className="flex-1">

                  <p className="text-2xl font-bold text-quantum-primary mb-4">

                    "Do you want to wait 5+ years for quantum safety, or do you want your users to be protected starting this quarter 2025?"                        <h4 className="text-lg font-semibold mb-2">{component.title}</h4>            </p>

                  </p>

                </div>                        <p className="text-foreground/70">{component.description}</p>

                <p className="text-xl text-muted-foreground mb-8">

                  We're not waiting for Ethereum 3.0 - <strong className="text-foreground">we're securing Web3 today.</strong>                      </div>          </motion.div>  ];  ];

                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">                    </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>

                    <Button                   </Card>        </div>

                      size="lg"

                      onClick={() => navigate('/contact')}                </motion.div>

                      className="bg-gradient-to-r from-quantum-primary to-quantum-secondary text-white px-8 py-4 text-lg font-semibold hover:shadow-lg hover:shadow-quantum-primary/50 transition-all duration-300"

                    >              ))}      </section>

                      Start Protecting Users Today

                      <ArrowRight className="ml-2 w-5 h-5" />            </div>

                    </Button>

                  </motion.div>          </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={ 0.95 }}>

                    <Button         </div>

                      variant="outline"

                      size="lg"      </section>      {/* Problem Statement */}  const problems = [  const problems = [

                      onClick={() => navigate('/product')}

                      className="border-quantum-primary text-quantum-primary hover:bg-quantum-primary/10 px-8 py-4 text-lg font-semibold transition-all duration-300"

                    >

                      Learn More About Our Solution      {/* Frame 2: Developer Experience */}      <section className="py-20 bg-card/30">

                    </Button>

                  </motion.div>      <section className="py-20">

                </div>

              </Card>        <div className="container mx-auto px-4 sm:px-6">        <div className="container mx-auto px-4 sm:px-6">    {    {

            </motion.div>

          </div>          <motion.div

        </section>

      </div>            initial={{ opacity: 0, y: 20 }}          <motion.div

      

      <Footer />            whileInView={{ opacity: 1, y: 0 }}

    </div>

  );            viewport={{ once: true }}            initial={{ opacity: 0, y: 20 }}      title: "Current Web3 Security Crisis",      title: "Current Web3 Security Crisis",

};

            transition={{ duration: 0.6 }}

export default ProductTech;
            className="max-w-6xl mx-auto"            whileInView={{ opacity: 1, y: 0 }}

          >

            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">            viewport={{ once: true }}      stats: "$2.093 billion stolen in H1 2025",      stats: "$2.093 billion stolen in H1 2025",

              Developer <span className="text-gradient">Experience</span>

            </h2>            transition={{ duration: 0.6 }}



            {/* Developer Steps */}            className="max-w-6xl mx-auto"      description: "90 major incidents, with six exchange attacks alone accounting for $1.591 billion in losses."      description: "90 major incidents, with six exchange attacks alone accounting for $1.591 billion in losses."

            <div className="mb-12">

              <div className="flex flex-wrap justify-center gap-4 mb-8">          >

                {developerSteps.map((step, index) => (

                  <div key={index} className="flex items-center">            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">    },    },

                    <div className="px-4 py-2 bg-quantum-primary/20 rounded-lg text-sm font-medium">

                      {step}              The <span className="text-gradient">Problem</span> We're Solving

                    </div>

                    {index < developerSteps.length - 1 && (            </h2>    {    {

                      <ArrowRight className="w-4 h-4 mx-2 text-quantum-primary" />

                    )}

                  </div>

                ))}            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">      title: "Escalating Threats",      title: "Escalating Threats",

              </div>

              <div className="text-center space-y-4 mb-8">              {problems.map((problem, index) => (

                <p className="text-foreground/70">

                  Auto‑detects chain hashing (Keccak vs SHA‑256) and applies the right scheme under the hood.                <motion.div      stats: "96% increase in Q1 2025",      stats: "96% increase in Q1 2025",

                </p>

                <p className="text-foreground/70">                  key={index}

                  Works with Ethers.js / CosmWasm / Solana clients; pluggable call‑data formatting.

                </p>                  initial={{ opacity: 0, y: 20 }}      description: "Over $2 billion vanished in just three months, driven by operational failures and access control exploits."      description: "Over $2 billion vanished in just three months, driven by operational failures and access control exploits."

                <p className="text-foreground/70">

                  Minimal gas/latency overhead; choose Dilithium/Falcon per use case.                  whileInView={{ opacity: 1, y: 0 }}

                </p>

              </div>                  viewport={{ once: true }}    },    },

            </div>

                  transition={{ duration: 0.6, delay: index * 0.1 }}

            {/* APIs and Other Info */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">                >    {    {

              <div>

                <h3 className="text-xl font-bold mb-6">APIs (examples)</h3>                  <Card className="p-6 h-full bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">

                <div className="space-y-3">

                  {apis.map((api, index) => (                    <AlertTriangle className="w-8 h-8 text-destructive mb-4" />      title: "Quantum Threat Timeline",       title: "Quantum Threat Timeline", 

                    <div key={index} className="p-3 bg-card/50 rounded-lg border border-quantum-primary/20">

                      <code className="text-sm text-quantum-primary">{api}</code>                    <h4 className="text-lg font-semibold mb-2">{problem.title}</h4>

                    </div>

                  ))}                    <p className="text-2xl font-bold text-destructive mb-2">{problem.stats}</p>      stats: "2030-2035 estimated",      stats: "2030-2035 estimated",

                </div>

              </div>                    <p className="text-foreground/70 text-sm">{problem.description}</p>



              <div>                  </Card>      description: "Research suggests quantum computers capable of breaking RSA-2048 may emerge within this timeframe."      description: "Research suggests quantum computers capable of breaking RSA-2048 may emerge within this timeframe."

                <h3 className="text-xl font-bold mb-6">Security Notes</h3>

                <ul className="space-y-2 text-foreground/70 text-sm">                </motion.div>

                  <li>• High‑entropy RNG, secure enclaves/keystores, key zeroization</li>

                  <li>• WASM modules audited to reduce JS side‑channel risk</li>              ))}    }    }

                  <li>• Optional IPFS proof anchoring for compliance</li>

                </ul>            </div>

              </div>

  ];  ];

              <div>

                <h3 className="text-xl font-bold mb-6">Supported Chains (initial/roadmap)</h3>            <div className="text-center bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-2xl p-8 border border-destructive/20">

                <div className="space-y-2">

                  {supportedChains.map((chain, index) => (              <p className="text-lg text-foreground/80">

                    <div key={index} className="text-foreground/70 text-sm">• {chain}</div>

                  ))}                <strong>The security landscape in Web3 is already extremely hostile.</strong> Meanwhile, the quantum threat 

                </div>

              </div>                isn't a distant sci-fi concept—it's a ticking time bomb. Current cryptographic systems depend on problems   return (  return (

            </div>

          </motion.div>                that Shor's algorithm can solve exponentially faster on quantum hardware.

        </div>

      </section>              </p>    <div className="min-h-screen overflow-x-hidden">    <div className="min-h-screen overflow-x-hidden">



      {/* Frame 3: Architecture */}            </div>

      <section className="py-20 bg-card/30">

        <div className="container mx-auto px-4 sm:px-6">          </motion.div>      <Navigation />      <Navigation />

          <motion.div

            initial={{ opacity: 0, y: 20 }}        </div>

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}      </section>            

            transition={{ duration: 0.6 }}

            className="max-w-6xl mx-auto text-center"

          >

            <h2 className="text-3xl sm:text-4xl font-bold mb-12">      {/* Our Solution */}      {/* Hero Section */}      {/* Hero Section */}

              Architecture <span className="text-gradient">(At a Glance)</span>

            </h2>      <section className="py-20">



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">        <div className="container mx-auto px-4 sm:px-6">      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-quantum-dark/20 to-background">      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-quantum-dark/20 to-background">

              {architectureSteps.map((step, index) => (

                <div key={index} className="p-6 bg-gradient-to-br from-card to-card/50 rounded-lg border border-quantum-primary/20">          <motion.div

                  <div className="w-8 h-8 bg-quantum-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">

                    <span className="text-quantum-primary font-bold">{index + 1}</span>            initial={{ opacity: 0, y: 20 }}        <div className="container mx-auto px-4 sm:px-6">        <div className="container mx-auto px-4 sm:px-6">

                  </div>

                  <p className="text-sm text-foreground/70">{step}</p>            whileInView={{ opacity: 1, y: 0 }}

                </div>

              ))}            viewport={{ once: true }}          <motion.div          <motion.div

            </div>

            transition={{ duration: 0.6 }}

            <div className="bg-gradient-to-r from-quantum-primary/10 to-quantum-secondary/10 rounded-2xl p-8 border border-quantum-primary/20">

              <p className="text-lg text-foreground/80">            className="max-w-6xl mx-auto text-center"            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

                <strong>Result:</strong> transaction executes only if both checks pass (policy‑configurable).

              </p>          >

            </div>

          </motion.div>            <h2 className="text-3xl sm:text-4xl font-bold mb-8">            animate={{ opacity: 1, y: 0 }}            animate={{ opacity: 1, y: 0 }}

        </div>

      </section>              Our <span className="text-gradient">Solution</span>



      {/* Frame 4: Security Wins Beyond Quantum */}            </h2>            transition={{ duration: 0.6 }}            transition={{ duration: 0.6 }}

      <section className="py-20">

        <div className="container mx-auto px-4 sm:px-6">            <p className="text-lg text-foreground/80 mb-12 max-w-4xl mx-auto">

          <motion.div

            initial={{ opacity: 0, y: 20 }}              QuantZen offers a third path: let applications—wallets, dApps, bridges—adopt quantum-safe security now,             className="text-center mb-16"            className="text-center mb-16"

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}              without waiting for chain upgrades or risking community splits. This is not about replacing blockchains 

            transition={{ duration: 0.6 }}

            className="max-w-6xl mx-auto"              but augmenting them.          >          >

          >

            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">            </p>

              Security Wins <span className="text-gradient">Beyond Quantum</span>

            </h2>            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gradient">



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {securityWins.map((win, index) => (

                <motion.div              {whyChooseUs.map((reason, index) => (              Why Choose QuantZen?              Why Choose QuantZen?

                  key={index}

                  initial={{ opacity: 0, y: 20 }}                <motion.div

                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true }}                  key={index}            </h1>            </h1>

                  transition={{ duration: 0.6, delay: index * 0.1 }}

                >                  initial={{ opacity: 0, y: 20 }}

                  <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-quantum-primary/20">

                    <h4 className="text-lg font-semibold mb-2 text-quantum-primary">{win.title}</h4>                  whileInView={{ opacity: 1, y: 0 }}            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">            <p className="text-xl text-foreground/80 max-w-4xl mx-auto">

                    <p className="text-foreground/70">{win.description}</p>

                  </Card>                  viewport={{ once: true }}

                </motion.div>

              ))}                  transition={{ duration: 0.6, delay: index * 0.1 }}              The shortest route from "at risk" to quantum-ready, without waiting for protocol surgery              The shortest route from "at risk" to quantum-ready, without waiting for protocol surgery

            </div>

                >

            <div className="text-center bg-gradient-to-r from-quantum-primary/10 to-quantum-secondary/10 rounded-2xl p-8 border border-quantum-primary/20">

              <p className="text-lg text-foreground/80 mb-8">                  <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-quantum-primary/20 hover:border-quantum-primary/40 transition-all duration-300">            </p>            </p>

                Even if you believe quantum is "years away," QuantZen pays for itself by reducing today's 

                losses and by future‑proofing your users' history against HNDL.                    <div className="flex items-start gap-4">

              </p>

              <Button                       <div className="p-3 rounded-lg bg-quantum-primary/20">          </motion.div>          </motion.div>

                variant="quantum" 

                size="lg"                         <reason.icon className="w-6 h-6 text-quantum-primary" />

                className="group"

              >                      </div>        </div>        </div>

                <FileText className="w-5 h-5 mr-2" />

                Download Whitepaper / Technical Documents                      <div className="flex-1">

                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />

              </Button>                        <h4 className="text-lg font-semibold mb-2">{reason.title}</h4>      </section>      </section>

            </div>

          </motion.div>                        <p className="text-foreground/70">{reason.description}</p>

        </div>

      </section>                      </div>



      <Footer />                    </div>

    </div>

  );                  </Card>      {/* Problem Statement */}      {/* Problem Statement */}

};

                </motion.div>

export default ProductTech;
              ))}      <section className="py-20 bg-card/30">      <section className="py-20 bg-card/30">

            </div>

          </motion.div>        <div className="container mx-auto px-4 sm:px-6">        <div className="container mx-auto px-4 sm:px-6">

        </div>

      </section>          <motion.div          <motion.div



      {/* How We Do It */}            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

      <section className="py-20 bg-card/30">

        <div className="container mx-auto px-4 sm:px-6">            whileInView={{ opacity: 1, y: 0 }}            whileInView={{ opacity: 1, y: 0 }}

          <motion.div

            initial={{ opacity: 0, y: 20 }}            viewport={{ once: true }}            viewport={{ once: true }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}            transition={{ duration: 0.6 }}            transition={{ duration: 0.6 }}

            transition={{ duration: 0.6 }}

            className="max-w-6xl mx-auto text-center"            className="max-w-6xl mx-auto"            className="max-w-6xl mx-auto"

          >

            <h2 className="text-3xl sm:text-4xl font-bold mb-8">          >          >

              How We <span className="text-gradient">Do It</span>

            </h2>            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">

            <div className="bg-gradient-to-r from-quantum-primary/10 to-quantum-secondary/10 rounded-2xl p-8 border border-quantum-primary/20">

              <p className="text-lg text-foreground/80 mb-8">              The <span className="text-gradient">Problem</span> We're Solving              The <span className="text-gradient">Problem</span> We're Solving

                QuantZen is the <strong>Dual‑Signature Layer™</strong> for Web3. With a drop‑in SDK, it adds 

                NIST‑standard post‑quantum signatures (e.g., Dilithium) alongside ECDSA, creating a metadata‑bound             </h2>            </h2>

                audit trail that blocks replays, signature tampering, and HNDLV, without forking any chain.

              </p>

              <p className="text-lg text-foreground/80">

                QuantZen gives wallets, dApps, bridges, and L1/L2 teams a pragmatic path to quantum‑resilient security today.            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

              </p>

            </div>              {problems.map((problem, index) => (              {problems.map((problem, index) => (

          </motion.div>

        </div>                <motion.div                <motion.div

      </section>

                  key={index}                  key={index}

      {/* Value Proposition */}

      <section className="py-20">                  initial={{ opacity: 0, y: 20 }}                  initial={{ opacity: 0, y: 20 }}

        <div className="container mx-auto px-4 sm:px-6">

          <motion.div                  whileInView={{ opacity: 1, y: 0 }}                  whileInView={{ opacity: 1, y: 0 }}

            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}                  viewport={{ once: true }}                  viewport={{ once: true }}

            viewport={{ once: true }}

            transition={{ duration: 0.6 }}                  transition={{ duration: 0.6, delay: index * 0.1 }}                  transition={{ duration: 0.6, delay: index * 0.1 }}

            className="max-w-4xl mx-auto text-center"

          >                >                >

            <h2 className="text-3xl sm:text-4xl font-bold mb-8">

              Even If Quantum Is <span className="text-gradient">"Years Away"</span>                  <Card className="p-6 h-full bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">                  <Card className="p-6 h-full bg-gradient-to-br from-destructive/5 to-destructive/10 border-destructive/20">

            </h2>

            <div className="bg-gradient-to-r from-quantum-primary/10 to-quantum-secondary/10 rounded-2xl p-8 border border-quantum-primary/20 mb-8">                    <AlertTriangle className="w-8 h-8 text-destructive mb-4" />                    <AlertTriangle className="w-8 h-8 text-destructive mb-4" />

              <p className="text-lg text-foreground/80 mb-6">

                QuantZen pays for itself by reducing today's losses and by future‑proofing your users' history against                     <h4 className="text-lg font-semibold mb-2">{problem.title}</h4>                    <h4 className="text-lg font-semibold mb-2">{problem.title}</h4>

                harvest-now-decrypt-later attacks.

              </p>                    <p className="text-2xl font-bold text-destructive mb-2">{problem.stats}</p>                    <p className="text-2xl font-bold text-destructive mb-2">{problem.stats}</p>

              <div className="flex items-center justify-center gap-4 text-quantum-primary">

                <CheckCircle className="w-6 h-6" />                    <p className="text-foreground/70 text-sm">{problem.description}</p>                    <p className="text-foreground/70 text-sm">{problem.description}</p>

                <span className="font-semibold">Start protecting your users today</span>

              </div>                  </Card>                  </Card>

            </div>

                            </motion.div>                </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button variant="quantum" size="lg" className="group">              ))}              ))}

                Get Started Now

                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />            </div>            </div>

              </Button>

              <Button variant="outline" size="lg">

                Learn More

              </Button>            <div className="text-center bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-2xl p-8 border border-destructive/20">            <div className="text-center bg-gradient-to-r from-destructive/10 to-destructive/5 rounded-2xl p-8 border border-destructive/20">

            </div>

          </motion.div>              <p className="text-lg text-foreground/80">              <p className="text-lg text-foreground/80">

        </div>

      </section>                <strong>The security landscape in Web3 is already extremely hostile.</strong> Meanwhile, the quantum threat                 <strong>The security landscape in Web3 is already extremely hostile.</strong> Meanwhile, the quantum threat 



      <Footer />                isn't a distant sci-fi concept—it's a ticking time bomb. Current cryptographic systems depend on problems                 isn't a distant sci-fi concept—it's a ticking time bomb. Current cryptographic systems depend on problems 

    </div>

  );                that Shor's algorithm can solve exponentially faster on quantum hardware.                that Shor's algorithm can solve exponentially faster on quantum hardware.

};

              </p>              </p>

export default ProductTech;
            </div>            </div>

          </motion.div>          </motion.div>

        </div>        </div>

      </section>      </section>



      {/* Our Solution */}      {/* Our Solution */}

      <section className="py-20">      <section className="py-20">

        <div className="container mx-auto px-4 sm:px-6">        <div className="container mx-auto px-4 sm:px-6">

          <motion.div          <motion.div

            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}            viewport={{ once: true }}

            transition={{ duration: 0.6 }}            transition={{ duration: 0.6 }}

            className="max-w-6xl mx-auto text-center"            className="max-w-6xl mx-auto text-center"

          >          >

            <h2 className="text-3xl sm:text-4xl font-bold mb-8">            <h2 className="text-3xl sm:text-4xl font-bold mb-8">

              Our <span className="text-gradient">Solution</span>              Our <span className="text-gradient">Solution</span>

            </h2>            </h2>

            <p className="text-lg text-foreground/80 mb-12 max-w-4xl mx-auto">            <p className="text-lg text-foreground/80 mb-12 max-w-4xl mx-auto">

              QuantZen offers a third path: let applications—wallets, dApps, bridges—adopt quantum-safe security now,               QuantZen offers a third path: let applications—wallets, dApps, bridges—adopt quantum-safe security now, 

              without waiting for chain upgrades or risking community splits. This is not about replacing blockchains               without waiting for chain upgrades or risking community splits. This is not about replacing blockchains 

              but augmenting them.              but augmenting them.

            </p>            </p>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {whyChooseUs.map((reason, index) => (              {whyChooseUs.map((reason, index) => (

                <motion.div                <motion.div

                  key={index}                  key={index}

                  initial={{ opacity: 0, y: 20 }}                  initial={{ opacity: 0, y: 20 }}

                  whileInView={{ opacity: 1, y: 0 }}                  whileInView={{ opacity: 1, y: 0 }}

                  viewport={{ once: true }}                  viewport={{ once: true }}

                  transition={{ duration: 0.6, delay: index * 0.1 }}                  transition={{ duration: 0.6, delay: index * 0.1 }}

                >                >

                  <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-quantum-primary/20 hover:border-quantum-primary/40 transition-all duration-300">                  <Card className="p-6 h-full bg-gradient-to-br from-card to-card/50 border-quantum-primary/20 hover:border-quantum-primary/40 transition-all duration-300">

                    <div className="flex items-start gap-4">                    <div className="flex items-start gap-4">

                      <div className="p-3 rounded-lg bg-quantum-primary/20">                      <div className="p-3 rounded-lg bg-quantum-primary/20">

                        <reason.icon className="w-6 h-6 text-quantum-primary" />                        <reason.icon className="w-6 h-6 text-quantum-primary" />

                      </div>                      </div>

                      <div className="flex-1">                      <div className="flex-1">

                        <h4 className="text-lg font-semibold mb-2">{reason.title}</h4>                        <h4 className="text-lg font-semibold mb-2">{reason.title}</h4>

                        <p className="text-foreground/70">{reason.description}</p>                        <p className="text-foreground/70">{reason.description}</p>

                      </div>                      </div>

                    </div>                    </div>

                  </Card>                  </Card>

                </motion.div>                </motion.div>

              ))}              ))}

            </div>            </div>

          </motion.div>          </motion.div>

        </div>        </div>

      </section>      </section>



      {/* How We Do It */}      {/* How We Do It */}

      <section className="py-20 bg-card/30">      <section className="py-20 bg-card/30">

        <div className="container mx-auto px-4 sm:px-6">        <div className="container mx-auto px-4 sm:px-6">

          <motion.div          <motion.div

            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}            viewport={{ once: true }}

            transition={{ duration: 0.6 }}            transition={{ duration: 0.6 }}

            className="max-w-6xl mx-auto text-center"            className="max-w-6xl mx-auto text-center"

          >          >

            <h2 className="text-3xl sm:text-4xl font-bold mb-8">            <h2 className="text-3xl sm:text-4xl font-bold mb-8">

              How We <span className="text-gradient">Do It</span>              How We <span className="text-gradient">Do It</span>

            </h2>            </h2>

            <div className="bg-gradient-to-r from-quantum-primary/10 to-quantum-secondary/10 rounded-2xl p-8 border border-quantum-primary/20">            <div className="bg-gradient-to-r from-quantum-primary/10 to-quantum-secondary/10 rounded-2xl p-8 border border-quantum-primary/20">

              <p className="text-lg text-foreground/80 mb-8">              <p className="text-lg text-foreground/80 mb-8">

                QuantZen is the <strong>Dual‑Signature Layer™</strong> for Web3. With a drop‑in SDK, it adds                 QuantZen is the <strong>Dual‑Signature Layer™</strong> for Web3. With a drop‑in SDK, it adds 

                NIST‑standard post‑quantum signatures (e.g., Dilithium) alongside ECDSA, creating a metadata‑bound                 NIST‑standard post‑quantum signatures (e.g., Dilithium) alongside ECDSA, creating a metadata‑bound 

                audit trail that blocks replays, signature tampering, and HNDLV, without forking any chain.                audit trail that blocks replays, signature tampering, and HNDLV, without forking any chain.

              </p>              </p>

              <p className="text-lg text-foreground/80">              <p className="text-lg text-foreground/80">

                QuantZen gives wallets, dApps, bridges, and L1/L2 teams a pragmatic path to quantum‑resilient security today.                QuantZen gives wallets, dApps, bridges, and L1/L2 teams a pragmatic path to quantum‑resilient security today.

              </p>              </p>

            </div>            </div>

          </motion.div>          </motion.div>

        </div>        </div>

      </section>      </section>



      {/* Value Proposition */}      {/* Value Proposition */}

      <section className="py-20">      <section className="py-20">

        <div className="container mx-auto px-4 sm:px-6">        <div className="container mx-auto px-4 sm:px-6">

          <motion.div          <motion.div

            initial={{ opacity: 0, y: 20 }}            initial={{ opacity: 0, y: 20 }}

            whileInView={{ opacity: 1, y: 0 }}            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}            viewport={{ once: true }}

            transition={{ duration: 0.6 }}            transition={{ duration: 0.6 }}

            className="max-w-4xl mx-auto text-center"            className="max-w-4xl mx-auto text-center"

          >          >

            <h2 className="text-3xl sm:text-4xl font-bold mb-8">            <h2 className="text-3xl sm:text-4xl font-bold mb-8">

              Even If Quantum Is <span className="text-gradient">"Years Away"</span>              Even If Quantum Is <span className="text-gradient">"Years Away"</span>

            </h2>            </h2>

            <div className="bg-gradient-to-r from-quantum-primary/10 to-quantum-secondary/10 rounded-2xl p-8 border border-quantum-primary/20 mb-8">            <div className="bg-gradient-to-r from-quantum-primary/10 to-quantum-secondary/10 rounded-2xl p-8 border border-quantum-primary/20 mb-8">

              <p className="text-lg text-foreground/80 mb-6">              <p className="text-lg text-foreground/80 mb-6">

                QuantZen pays for itself by reducing today's losses and by future‑proofing your users' history against                 QuantZen pays for itself by reducing today's losses and by future‑proofing your users' history against 

                harvest-now-decrypt-later attacks.                harvest-now-decrypt-later attacks.

              </p>              </p>

              <div className="flex items-center justify-center gap-4 text-quantum-primary">              <div className="flex items-center justify-center gap-4 text-quantum-primary">

                <CheckCircle className="w-6 h-6" />                <CheckCircle className="w-6 h-6" />

                <span className="font-semibold">Start protecting your users today</span>                <span className="font-semibold">Start protecting your users today</span>

              </div>              </div>

            </div>            </div>

                        

            <div className="flex flex-col sm:flex-row gap-4 justify-center">            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button variant="quantum" size="lg" className="group">              <Button variant="quantum" size="lg" className="group">

                Get Started Now                Get Started Now

                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />

              </Button>              </Button>

              <Button variant="outline" size="lg">              <Button variant="outline" size="lg">

                Learn More                Learn More

              </Button>              </Button>

            </div>            </div>

          </motion.div>          </motion.div>

        </div>        </div>

      </section>      </section>



      <Footer />      <Footer />

    </div>    </div>

  );  );

};};

    {

export default ProductTech;      icon: CheckCircle,
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