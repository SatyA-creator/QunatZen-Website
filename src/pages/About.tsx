import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TeamMemberImage } from "@/components/ui/team-member-image";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import { useNavigate } from "react-router-dom";

import { 
  Building, 
  Users, 
  Target, 
  Shield, 
  Globe, 
  Award,
  Heart,
  Eye,
  Lightbulb,
  Handshake,
  TrendingUp,
  CheckCircle,
  Linkedin,
  Twitter,
  Mail
} from "lucide-react";

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Steve V.",
      role: "Director Of Consulting",
      expertise: "Quantum Security Defense",
      // background: "",
      image: "/pic1.jpg",
      fallbackImage: "/pic1.jpg"
    },
    {
      name: "Anna Beata Kalisz Hedegaard",
      role: "CEO",
      expertise: "Quantum Security Defense and QuantumPrime",
      // background: "Top 10 Women in Engineering PL'2025",
      image: "/pic2.jpg",
      fallbackImage: "/pic2.jpg"
    },
    {
      name: "xyz",
      role: "Head of Research",
      expertise: "Post‑Quantum Cryptography, Algorithm Design",
      // background: "Former NIST PQC Standardization Committee, PhD from Tokyo Institute of Technology",
      image: "/pic3.jpg",
      fallbackImage: "/pic3.jpg"
    },
    {
      name: "xyz",
      role: "VP of Engineering",
      expertise: "SDK Development, Developer Experience",
      // background: "Former Engineering Lead at ConsenSys, Solidity & Rust expert",
      image: "/pic4.jpg",
      fallbackImage: "/pic4.jpg"
    },
    {
      name: "xyz",
      role: "Head of Business Development",
      expertise: "Enterprise Partnerships, Go‑to‑Market",
      // background: "Former Director at Chainanalysis, MBA from Wharton",
      image: "/pic5.jpg",
      fallbackImage: "/pic5.jpg"
    },
    {
      name: "Ashish Janghel",
      role: "Founder Zenith Studio",
      expertise: "Certified Quantum Security Engineer",
      // background: "Former Senior Researcher at IBM Research, PhD in Applied Cryptography",
      image: "/pic6.jpg",
      fallbackImage: "/pic6.jpg"
    }
  ];

  const coreValues = [
    {
      icon: Shield,
      title: "Security First",
      description: "Every decision prioritizes the security and integrity of our users' data and transactions."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We push the boundaries of what's possible in quantum‑resistant cryptography and blockchain technology."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We believe in open standards, community‑driven development, and transparent communication."
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, research rigor, and customer service."
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Quantum‑resistant security should be accessible to developers and organizations of all sizes."
    },
    {
      icon: Heart,
      title: "Purpose",
      description: "We're committed to protecting the future of digital transactions and preserving user privacy."
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <div className="bg-gradient-to-br from-background to-secondary/10 overflow-x-hidden w-full">
      {/* Navigation Spacing */}
      <div className="h-16"></div>

          {/* Frame 1: Company Overview */}
    <section className="py-24 overflow-x-hidden w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
            About <span className="text-gradient">QuantZen™</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            We saw two broken paths: either wait for each chain to do multi‑year protocol surgery, or ask users to trade UX for security. We chose a third way . A pragmatic, Chain‑Agnostic layer developers can drop in today. It’s the shortest route from “at risk” to quantum‑ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Company Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We saw two broken paths: either wait for each chain to do multi‑year protocol surgery, or ask users to trade UX for security. We chose a third way — a pragmatic, chain‑agnostic layer developers can drop in today. It’s the shortest route from “at risk” to quantum‑ready.
              </p>
              {/* Claire: Add info on Zenith Studio partnership, origins, and milestones here if desired. Keep sentence length and tone consistent with the paragraph above. */}
            </div>
          </motion.div>

          {/* Right: Company Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="gaming-card p-8">
              <h3 className="text-2xl font-bold mb-6 text-quantum-primary">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "2024", label: "Founded" },
                  { number: "15+", label: "Team Members" },
                  { number: "3", label: "PQC Algorithms" },
                  { number: "5+", label: "Blockchain Networks" },
                  { number: "$5M", label: "Seed Funding" },
                  { number: "50+", label: "Enterprise Partners" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-quantum-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Company Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Building,
              title: "Industry Leadership",
              description: "Pioneering quantum‑resistant solutions for blockchain security"
            },
            {
              icon: Award,
              title: "Research Excellence",
              description: "Published papers in top‑tier cryptography and blockchain conferences"
            },
            {
              icon: Users,
              title: "Community Driven",
              description: "Open‑source approach with active developer community"
            }
          ].map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="gaming-card p-6 text-center h-full">
                <highlight.icon className="w-12 h-12 text-quantum-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Frame 2: Mission */}
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
            Mission & <span className="text-gradient">Values</span>
          </h2>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className="gaming-card p-12 max-w-4xl mx-auto text-center">
            <Eye className="w-16 h-16 text-quantum-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Give every Web3 transaction a future‑proof second signature, so the industry never has to choose between usability today and security tomorrow.
            </p>
          </Card>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="gaming-card p-6 h-full">
                <value.icon className="w-12 h-12 text-quantum-primary mb-4" />
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16"
        >
          <Card className="gaming-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Commitments</h3>
            <div className="grid grid-cols-1 gap-6">
              {[
                "Open‑source development and transparent research",
                "Rigorous security audits and peer review processes",
                "Compliance with international cryptographic standards",
                "Accessible documentation and developer resources",
                "Responsible disclosure of security vulnerabilities",
                "Environmental consciousness in our technology choices"
              ].map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm leading-relaxed">{commitment}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>

    {/* Frame 3: Problem */}
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
            What’s the Problem?
          </h2>
          {/* Data sources in comments:
              - Beosin H1 2025: 90 incidents, ~$2.093B losses; exchanges ~$1.591B[1]
              - Hacken Q1 2025: ~ $2B, +96% YoY[2]
              - SlowMist July 2025: ~$147M monthly losses (secondary coverage)[3]
              - Quantum threat background (Shor’s, ECC/RSA risk): industry explainers; keep high-level statement
          */}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="gaming-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">Today’s Threats</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Web3 security landscape is already hostile: in H1 2025, 90 major incidents caused about $2.093B in losses, with six exchange attacks alone accounting for roughly $1.591B. {/*  */}[1]
                </p>
                <p>
                  In Q1 2025, losses reached about $2B in just three months, a 96% increase over Q1 2024, driven largely by operational failures and access control exploits. {/*  */}[2]
                </p>
                <p>
                  Month by month, single periods still see heavy damage — July 2025 alone was estimated at ~$147M in losses spanning hacks, contract flaws, supply‑chain abuses, and phishing. {/*  */}[3]
                </p>
                <p>
                  Attackers increasingly blend social engineering, compromised tooling, and stealthy vault flaws to bypass defenses, eroding real assets, trust, and reputations. {/* Synthesis of reports  */}[1][2]
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="gaming-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">The Quantum Clock</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The quantum threat is a ticking time bomb: algorithms like Shor’s can break today’s public‑key systems (ECC, RSA) on sufficiently powerful quantum hardware. {/* Industry explainer context */}
                </p>
                <p>
                  Adversaries already harvest‑now, decrypt‑later — collecting data and signatures today to break them once quantum capabilities arrive — a growing concern in critical infrastructure discourse. {/* Industry/WEF context */}
                </p>
                <p>
                  For Web3, protocol‑level migration demands hard forks, consensus changes, governance cycles, multi‑year audits, and coordination across stakeholders — a path many networks will delay or resist. {/* Synthesis from sector realities */}
                </p>
                <p>
                  Quantum‑resistant cryptography is no longer optional; without timely adoption, sensitive transactions and smart contracts remain exposed to future decryption. 
                  </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Frame 4: Solution */}
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
            That’s Where We Come In
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            QuantZen™ offers a third path: let applications - wallets, dApps, bridges . Adopt quantum-safe security now, without waiting for chain upgrades or risking community splits. This is not about replacing blockchains but augmenting them: you remain on your chosen chain, with the same UX, while gaining a future-proof dual-signature layer that defends against both today’s and tomorrow’s threats.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="gaming-card p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">How We Do It</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              QuantZen™ is the Dual‑Signature Layer™ for Web3. With a drop‑in SDK, it adds NIST‑standard post‑quantum signatures (e.g., Dilithium) alongside ECDSA, creating a metadata‑bound audit trail that blocks replays, signature tampering, and HNDLV, without forking any chain. QuantZen™ gives wallets, dApps, bridges, and L1/L2 teams a pragmatic path to quantum‑resilient security today.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>

    {/* Frame 5: Team */}
   {/* Frame 5: Team */}
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
        Meet Our <span className="text-gradient">Team</span>
      </h2>
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
        Our team combines deep expertise in quantum cryptography, blockchain technology, and enterprise security to deliver world-class solutions.
      </p>
    </motion.div>

    {/* Team Member Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {teamMembers.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -6, transition: { duration: 0.2 } }}
          className="w-full flex justify-center"
        >
          <Card className="gaming-card p-6 h-full w-full hover:shadow-xl transition-all duration-300">
            {/* Image First */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gradient-to-r from-quantum-primary to-quantum-secondary shadow-md">
              <TeamMemberImage
                name={member.name}
                image={member.image}
                fallbackImage={member.fallbackImage}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Below Image */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
              <p className="text-sm text-quantum-primary font-medium mb-2">{member.role}</p>
              <Badge className="bg-quantum-primary/20 text-quantum-primary font-medium text-xs px-2 py-1 mb-3">
                {member.expertise.split(',')[0].trim()}
              </Badge>
              {/* <p className="text-sm text-muted-foreground mb-4 leading-relaxed px-2">
                {member.background}
              </p> */}

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                {[Linkedin, Twitter, Mail].map((Icon, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center cursor-pointer hover:bg-primary/20 hover:scale-110 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4 text-foreground" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </div>

    {/* Team Culture */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="mt-16"
    >
      <Card className="gaming-card p-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Our Culture</h3>
          <p className="text-muted-foreground leading-relaxed">
            We foster an environment of continuous learning, open collaboration, and shared ownership.
            Our team members are encouraged to contribute to open-source projects, publish research, and
            speak at conferences. We believe that the best solutions emerge from diverse perspectives and rigorous peer review.
          </p>
        </div>
      </Card>
    </motion.div>
  </div>
</section>


    {/* Join Us CTA */}
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
            <Target className="w-16 h-16 text-quantum-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">
              Join Our <span className="text-gradient">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Are you passionate about cryptography, blockchain security, or quantum computing? We're always looking for talented individuals to join our team and help secure the future of digital transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-quantum-primary to-quantum-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
                className="px-8 py-3 border border-quantum-primary text-quantum-primary rounded-lg font-semibold hover:bg-quantum-primary/10 transition-all duration-300 cursor-pointer"
              >
                Contact Us
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

export default About;