import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why Us", href: "/why-us" },
    { name: "Product", href: "/product" },
    { name: "Partners", href: "/call-for-pocs" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div className="w-full border-b border-quantum-primary/30 backdrop-blur-md">
        <nav className="flex items-center justify-between px-6 sm:px-10 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-10">
            <motion.img
              src="/logo.png"
              alt="QuantZen Logo"
              className="w-28 h-auto object-contain transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Link
                  to={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-black shadow-sm border border-quantum-primary/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:border-quantum-primary"
                >
                  <span className="text-sm sm:text-base">{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-90 text-quantum-primary" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-smooth"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-white"
            >
              <div className="px-4 py-4 space-y-3 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-2 rounded-lg font-medium text-black border border-quantum-primary/50 transition-all duration-300 hover:shadow-[0_0_12px_rgba(80,200,255,0.6)]"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-90" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
