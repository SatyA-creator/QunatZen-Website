import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/marketing/Navigation";
import Footer from "@/components/marketing/Footer";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Filter,
  ExternalLink,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  TrendingUp,
  Code2,
  Shield,
  Lightbulb,
  Globe
} from "lucide-react";

const Blog = () => {
  const featuredArticle = {
    title: "The Quantum Threat Timeline: Why Blockchain Security Can't Wait",
    excerpt: "An in‑depth analysis of quantum computing developments and their implications for current blockchain security models. We explore the latest research from IBM, Google, and leading quantum computing companies to understand when the cryptographic apocalypse might arrive.",
    author: "Dr. Sarah Chen",
    role: "CEO & Co‑Founder",
    date: "December 20, 2024",
    readTime: "12 min read",
    category: "Quantum Computing",
    image: "/api/placeholder/800/400",
    tags: ["Quantum Computing", "Blockchain Security", "Cryptography", "Timeline"]
  };

  const blogPosts = [
    {
      title: "Understanding NIST Post‑Quantum Cryptography Standards",
      excerpt: "A comprehensive guide to the newly standardized post‑quantum cryptographic algorithms and their practical applications in blockchain systems.",
      author: "Dr. Yuki Tanaka",
      role: "Head of Research",
      date: "December 18, 2024",
      readTime: "8 min read",
      category: "Technical Deep Dive",
      image: "/api/placeholder/400/250",
      tags: ["NIST", "PQC", "Standards"],
      likes: 156,
      comments: 23
    },
    {
      title: "Hybrid Signature Schemes: Bridging Classical and Quantum‑Resistant Cryptography",
      excerpt: "Exploring the technical architecture behind dual‑signature systems that provide both backward compatibility and quantum resistance.",
      author: "Elena Petrov",
      role: "VP of Engineering",
      date: "December 15, 2024",
      readTime: "10 min read",
      category: "Engineering",
      image: "/api/placeholder/400/250",
      tags: ["Hybrid Signatures", "Engineering", "Implementation"],
      likes: 203,
      comments: 31
    },
    {
      title: "Enterprise Adoption: Post‑Quantum Cryptography in Financial Services",
      excerpt: "Case studies and insights from early enterprise adopters of quantum‑resistant blockchain security solutions.",
      author: "James Park",
      role: "Head of Business Development",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Enterprise",
      image: "/api/placeholder/400/250",
      tags: ["Enterprise", "Financial Services", "Case Studies"],
      likes: 89,
      comments: 12
    },
    {
      title: "Developer Guide: Integrating QuantZen SDK in 10 Minutes",
      excerpt: "Step‑by‑step tutorial for adding quantum‑resistant signatures to your Web3 application using our TypeScript SDK.",
      author: "Elena Petrov",
      role: "VP of Engineering", 
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Developer Tutorial",
      image: "/api/placeholder/400/250",
      tags: ["SDK", "Tutorial", "Developer Experience"],
      likes: 342,
      comments: 45
    },
    {
      title: "The Economics of Quantum‑Resistant Security: Cost vs. Risk Analysis",
      excerpt: "Analyzing the economic implications of implementing post‑quantum cryptography versus the cost of potential quantum attacks.",
      author: "Dr. Sarah Chen",
      role: "CEO & Co‑Founder",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Business Strategy",
      image: "/api/placeholder/400/250",
      tags: ["Economics", "Risk Analysis", "Business Strategy"],
      likes: 128,
      comments: 19
    },
    {
      title: "Community Spotlight: Open Source Contributors Making PQC Accessible",
      excerpt: "Highlighting the amazing work of our open‑source community in advancing post‑quantum cryptography adoption.",
      author: "Marcus Rodriguez",
      role: "CTO & Co‑Founder",
      date: "December 5, 2024",
      readTime: "4 min read",
      category: "Community",
      image: "/api/placeholder/400/250",
      tags: ["Open Source", "Community", "Contributors"],
      likes: 94,
      comments: 16
    }
  ];

  const categories = [
    { name: "All Posts", count: 25, active: true, icon: BookOpen },
    { name: "Technical Deep Dive", count: 8, active: false, icon: Code2 },
    { name: "Quantum Computing", count: 6, active: false, icon: Shield },
    { name: "Engineering", count: 5, active: false, icon: Code2 },
    { name: "Developer Tutorial", count: 4, active: false, icon: Lightbulb },
    { name: "Enterprise", count: 3, active: false, icon: Globe },
    { name: "Business Strategy", count: 2, active: false, icon: TrendingUp }
  ];

  const popularTags = [
    "Quantum Computing", "Post-Quantum Cryptography", "Blockchain Security", 
    "SDK", "NIST Standards", "Developer Experience", "Enterprise", 
    "Cryptography", "Open Source", "Web3"
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
              QuantZen <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Insights, tutorials, and deep dives into quantum‑resistant blockchain security. Stay informed about the latest developments in post‑quantum cryptography and Web3 security.
            </p>
            
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-md mx-auto relative"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 quantum-input"
              />
            </motion.div>
          </motion.div>

          {/* Blog Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {[
              { number: "25+", label: "Published Articles", icon: BookOpen },
              { number: "50K+", label: "Monthly Readers", icon: User },
              { number: "1.2K+", label: "Newsletter Subscribers", icon: Heart },
              { number: "15", label: "Expert Contributors", icon: MessageCircle }
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

      {/* Featured Article */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-8">
              <Badge className="bg-quantum-primary text-white mr-3">Featured Article</Badge>
              <Badge variant="outline">Latest</Badge>
            </div>
            
            <Card className="gaming-card p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge variant="secondary" className="mb-4">{featuredArticle.category}</Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuredArticle.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {featuredArticle.excerpt}
                  </p>
                  
                  {/* Article Meta */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-quantum-primary to-quantum-secondary flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{featuredArticle.author}</div>
                        <div className="text-xs text-muted-foreground">{featuredArticle.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="quantum" size="lg" className="group">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="relative">
                  <Card className="gaming-card p-6 bg-gradient-to-br from-quantum-primary/10 to-secondary/10">
                    <div className="text-center">
                      <Shield className="w-16 h-16 text-quantum-primary mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">Must Read</h3>
                      <p className="text-muted-foreground text-sm">
                        Our most comprehensive analysis of quantum threats and their timeline for blockchain security.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 order-2 lg:order-1"
            >
              {/* Categories */}
              <Card className="gaming-card p-6 mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <motion.button
                      key={category.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className={`w-full flex items-center justify-between p-2 rounded-lg text-left transition-all duration-300 ${
                        category.active 
                          ? 'bg-quantum-primary text-white' 
                          : 'hover:bg-secondary/50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className="w-4 h-4" />
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <span className="text-xs">{category.count}</span>
                    </motion.button>
                  ))}
                </div>
              </Card>

              {/* Popular Tags */}
              <Card className="gaming-card p-6">
                <h3 className="text-lg font-bold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <motion.button
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-secondary/50 hover:bg-quantum-primary/20 rounded-full text-xs font-medium transition-all duration-300"
                    >
                      {tag}
                    </motion.button>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Articles Grid */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {blogPosts.map((post, index) => (
                  <motion.div
                    key={post.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="gaming-card h-full flex flex-col overflow-hidden">
                      {/* Article Image */}
                      <div className="relative h-48 bg-gradient-to-br from-quantum-primary/20 to-secondary/20 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-quantum-primary" />
                        <Badge className="absolute top-3 left-3 bg-quantum-primary text-white">
                          {post.category}
                        </Badge>
                      </div>
                      
                      {/* Article Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold mb-3 leading-tight">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed">
                          {post.excerpt}
                        </p>
                        
                        {/* Article Meta */}
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-quantum-primary to-quantum-secondary flex items-center justify-center">
                              <User className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-medium">{post.author}</div>
                              <div className="text-xs text-muted-foreground">{post.role}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {post.date}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="flex items-center">
                                <Heart className="w-3 h-3 mr-1" />
                                {post.likes}
                              </div>
                              <div className="flex items-center">
                                <MessageCircle className="w-3 h-3 mr-1" />
                                {post.comments}
                              </div>
                            </div>
                          </div>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1">
                            {post.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          {/* Read More */}
                          <Button variant="outline" size="sm" className="w-full group">
                            Read Article
                            <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-0.5 transition-transform" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Load More */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mt-12"
              >
                <Button variant="outline" size="lg">
                  Load More Articles
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-quantum-primary/10 to-secondary/10 overflow-x-hidden w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="gaming-card p-12 max-w-2xl mx-auto">
              <BookOpen className="w-16 h-16 text-quantum-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">
                Stay <span className="text-gradient">Informed</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our newsletter for weekly insights on quantum‑resistant security, blockchain technology, and industry developments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email" 
                  className="quantum-input flex-1"
                />
                <Button variant="quantum">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Join 1,200+ subscribers. Unsubscribe anytime.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;