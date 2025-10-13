import { Zap, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    Resources: [
      { name: "Docs", href: "#" },
      { name: "GitHub", href: "#" },
      { name: "Security & Compliance", href: "#" },
    ],
    Company: [
      { name: "Careers", href: "#" },
      { name: "Press & Media", href: "#" },
      { name: "About Us", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Use", href: "#" },
    ],
    Connect: [
      { name: "Newsletter:  Q2Z Newsletter", href: "#" },
    ],
  };

  return (
    <footer className="relative bg-card border-t border-quantum-primary/20 overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-quantum opacity-5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 max-w-full">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="src\assets\quant_logo1-bg.png" 
                alt="QuantZen Logo" 
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-xl font-bold text-gradient">QuantZen™</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Post-quantum cryptography. Pre-quantum peace of mind.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-quantum-primary/20 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2025 QuantZen™. All rights reserved.
          </p>
          <div className="flex gap-4">
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-quantum-primary transition-smooth"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-quantum-primary transition-smooth"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="#" 
              className="text-muted-foreground hover:text-quantum-primary transition-smooth"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
