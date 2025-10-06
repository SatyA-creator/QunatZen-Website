import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import { 
  Newspaper, 
  Calendar, 
  ExternalLink, 
  Award, 
  Users, 
  TrendingUp,
  Globe,
  Building,
  Rocket,
  Shield,
  Clock,
  ArrowRight,
  Download,
  Play,
  Code2
} from "lucide-react";

const News = () => {
  const pressReleases = [
    {
      title: "QuantZen Raises $5M Seed Round to Accelerate Quantum‑Resistant Blockchain Security",
      date: "December 15, 2024",
      category: "Funding",
      excerpt: "Leading venture capital firms back QuantZen's mission to protect blockchain infrastructure against quantum computing threats.",
      content: "QuantZen, the pioneering quantum‑resistant blockchain security platform, today announced the completion of a $5 million seed funding round led by Blockchain Capital, with participation from Coinbase Ventures, Multicoin Capital, and prominent angel investors including Ethereum co‑founder Vitalik Buterin.",
      featured: true,
      tags: ["Funding", "Series A", "Blockchain Capital"]
    },
    {
      title: "QuantZen SDK Alpha Release: First Quantum‑Resistant Signatures on Ethereum Testnet",
      date: "November 28, 2024",
      category: "Product",
      excerpt: "Developers can now integrate post‑quantum cryptography into their Ethereum applications with QuantZen's developer SDK.",
      content: "QuantZen today released the alpha version of its developer SDK, enabling the first quantum‑resistant digital signatures on Ethereum testnets. The SDK supports Dilithium and Falcon algorithms approved by NIST.",
      featured: true,
      tags: ["SDK", "Ethereum", "Alpha Release"]
    },
    {
      title: "Strategic Partnership with ConsenSys to Integrate PQC into MetaMask",
      date: "November 10, 2024",
      category: "Partnership",
      excerpt: "Collaboration will bring quantum‑resistant security features to millions of MetaMask users worldwide.",
      content: "QuantZen announces strategic partnership with ConsenSys to explore integration of post‑quantum cryptographic capabilities into MetaMask, the world's leading self‑custodial wallet.",
      featured: false,
      tags: ["ConsenSys", "MetaMask", "Partnership"]
    },
    {
      title: "QuantZen Co‑Founder Dr. Sarah Chen Keynotes Quantum Security Summit 2024",
      date: "October 22, 2024",
      category: "Speaking",
      excerpt: "Industry leaders gather to discuss the urgent need for quantum‑resistant blockchain infrastructure.",
      content: "Dr. Sarah Chen, CEO and Co‑Founder of QuantZen, delivered the opening keynote at the Quantum Security Summit 2024, addressing over 500 industry leaders about the timeline and implications of quantum threats to blockchain security.",
      featured: false,
      tags: ["Conference", "Keynote", "Quantum Security"]
    },
    {
      title: "Research Paper: 'Hybrid Signature Schemes for Blockchain Transition to Post‑Quantum Era'",
      date: "October 8, 2024",
      category: "Research",
      excerpt: "QuantZen research team publishes breakthrough findings on practical PQC implementation in blockchain systems.",
      content: "QuantZen's research team published a peer‑reviewed paper in the Journal of Cryptographic Engineering, presenting novel approaches to hybrid signature schemes that maintain backward compatibility.",
      featured: false,
      tags: ["Research", "Academic", "Cryptography"]
    },
    {
      title: "QuantZen Joins Linux Foundation's Post‑Quantum Cryptography Consortium",
      date: "September 15, 2024",
      category: "Community",
      excerpt: "Collaboration with leading technology companies to advance open‑source post‑quantum cryptography standards.",
      content: "QuantZen becomes a founding member of the Linux Foundation's newly formed Post‑Quantum Cryptography Consortium, joining IBM, Google, and Microsoft in developing open standards.",
      featured: false,
      tags: ["Linux Foundation", "Open Source", "Standards"]
    }
  ];

  const newsCategories = [
    { name: "All", count: pressReleases.length, active: true },
    { name: "Funding", count: 1, active: false },
    { name: "Product", count: 1, active: false },
    { name: "Partnership", count: 1, active: false },
    { name: "Research", count: 1, active: false },
    { name: "Community", count: 1, active: false }
  ];

  const recentUpdates = [
    {
      type: "milestone",
      title: "50+ Enterprise Partners",
      description: "Reached milestone of 50 enterprise partnerships for early access program",
      date: "2 days ago",
      icon: Users
    },
    {
      type: "development",
      title: "Cosmos SDK Integration",
      description: "Successfully completed integration testing with Cosmos SDK",
      date: "1 week ago",
      icon: Code2
    },
    {
      type: "security",
      title: "Security Audit Completed",
      description: "Passed comprehensive security audit by Trail of Bits",
      date: "2 weeks ago",
      icon: Shield
    },
    {
      type: "recognition",
      title: "CryptoWeekly Feature",
      description: "Featured as 'Startup to Watch' in CryptoWeekly magazine",
      date: "3 weeks ago",
      icon: Award
    }
  ];

  const mediaKit = [
    { name: "Company Logos", type: "ZIP", size: "2.4 MB" },
    { name: "Executive Photos", type: "ZIP", size: "8.1 MB" },
    { name: "Product Screenshots", type: "ZIP", size: "5.3 MB" },
    { name: "Brand Guidelines", type: "PDF", size: "1.2 MB" }
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
              News & <span className="text-gradient">Press</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest developments, partnerships, and milestones in our journey to secure blockchain technology against quantum threats.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
              <Button variant="quantum" size="lg">
                <Download className="w-5 h-5 mr-2" />
                Media Kit
              </Button>
              <Button variant="outline" size="lg">
                <Globe className="w-5 h-5 mr-2" />
                Press Inquiries
              </Button>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {[
              { number: "6", label: "Press Releases", icon: Newspaper },
              { number: "15+", label: "Media Mentions", icon: Globe },
              { number: "5", label: "Awards", icon: Award },
              { number: "$5M", label: "Funding Raised", icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
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

      {/* Featured Press Release */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="gaming-card p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <Badge className="bg-quantum-primary text-white mr-3">Featured</Badge>
                <Badge variant="outline">Latest News</Badge>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{pressReleases[0].title}</h2>
                  <div className="flex items-center text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{pressReleases[0].date}</span>
                    <Badge variant="secondary" className="ml-3">{pressReleases[0].category}</Badge>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {pressReleases[0].content}
                  </p>
                  <Button variant="quantum" className="group">
                    Read Full Release
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="relative">
                  <Card className="gaming-card p-6 bg-gradient-to-br from-quantum-primary/10 to-secondary/10">
                    <div className="text-center">
                      <Rocket className="w-16 h-16 text-quantum-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Major Milestone</h3>
                      <p className="text-muted-foreground text-sm">
                        This funding round represents a major validation of our quantum‑resistant blockchain security vision.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Press Releases Grid */}
      <section className="py-24 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex flex-wrap justify-center gap-2 px-4">
              {newsCategories.map((category, index) => (
                <motion.button
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    category.active 
                      ? 'bg-quantum-primary text-white' 
                      : 'bg-secondary text-muted-foreground hover:bg-quantum-primary/20'
                  }`}
                >
                  {category.name} ({category.count})
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Press Releases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.slice(1).map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="gaming-card p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary">{release.category}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {release.date}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 leading-tight">{release.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                    {release.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {release.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" className="group">
                    Read More
                    <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-24 bg-gradient-to-br from-secondary/5 to-quantum-primary/5 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Recent Updates */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Recent Updates</h2>
              <div className="space-y-6">
                {recentUpdates.map((update, index) => (
                  <motion.div
                    key={update.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="gaming-card p-4">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-quantum-primary/20">
                          <update.icon className="w-5 h-5 text-quantum-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold mb-1">{update.title}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{update.description}</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="w-3 h-3 mr-1" />
                            {update.date}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Media Kit */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="gaming-card p-8">
                <h3 className="text-2xl font-bold mb-6">Media Kit</h3>
                <p className="text-muted-foreground mb-6">
                  Access high‑resolution logos, executive photos, product screenshots, and brand guidelines for media coverage.
                </p>
                
                <div className="space-y-4 mb-6">
                  {mediaKit.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-3">
                        <Download className="w-4 h-4 text-quantum-primary" />
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.type} • {item.size}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <Button variant="quantum" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Complete Media Kit
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press Contact */}
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
              <Building className="w-12 h-12 text-quantum-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Press Inquiries</h3>
              <p className="text-muted-foreground mb-6">
                For press inquiries, interview requests, or additional information, please contact our media relations team.
              </p>
              <div className="space-y-2 text-sm mb-6">
                <div><strong>Email:</strong> press@quantzen.io</div>
                <div><strong>Phone:</strong> +1 (555) 123-4567</div>
                <div><strong>Response Time:</strong> Within 24 hours</div>
              </div>
              <Button variant="outline">
                <Globe className="w-4 h-4 mr-2" />
                Contact Press Team
              </Button>
            </Card>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default News;