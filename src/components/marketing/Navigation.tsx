import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Dark mode theme toggle functionality
  // Theme preference is stored in localStorage as 'quantzen-theme' with values: 'dark' | 'light'
  // Falls back to system preference if no stored value exists

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why Us", href: "/why-us" },
    { name: "Product", href: "/product" },
    { name: "Partners", href: "/call-for-pocs" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Twitter",
      href: "https://x.com/quant_zen",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn", 
      href: "https://www.linkedin.com/company/quantzen%E2%84%A2/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem('quantzen-theme');
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
        setIsDark(true);
      } else if (stored === 'light') {
        document.documentElement.classList.remove('dark');
        setIsDark(false);
      } else {
        // fallback to system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          setIsDark(true);
        } else {
          document.documentElement.classList.remove('dark');
          setIsDark(false);
        }
      }
    } catch (e) {
      // ignore storage errors
    }
  }, []);

  const toggleTheme = () => {
    try {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('quantzen-theme', 'light');
        setIsDark(false);
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('quantzen-theme', 'dark');
        setIsDark(true);
      }
    } catch (e) {
      // ignore
    }
  };

  return (
    <>
      <div className="w-full border-b border-quantum-primary/30 dark:border-quantum-primary/20 backdrop-blur-md bg-white/80 dark:bg-black/80">
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

          {/* Right side content container */}
          <div className="flex items-center ml-auto">
            {/* Desktop Links and Social Icons */}
            <div className="hidden md:flex items-center gap-2">
              {/* Navigation Links */}
              <div className="flex items-center gap-2">
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
                      className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-gray-900 dark:text-white bg-white/60 dark:bg-white/10 shadow-sm border border-quantum-primary/40 dark:border-quantum-primary/30 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:border-quantum-primary dark:hover:bg-white/20"
                    >
                      <span className="text-sm sm:text-base">{link.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-90 text-quantum-primary" />
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2 ml-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (navLinks.length + index) * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg text-quantum-primary hover:text-quantum-secondary transition-all duration-300 hover:bg-quantum-primary/10 border border-quantum-primary/30 hover:border-quantum-primary/60 bg-white/40 dark:bg-white/5"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Theme toggle and Mobile Menu (always on right) */}
            <div className="flex items-center gap-2 ml-2">
              <button
                onClick={toggleTheme}
                title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-label="Toggle color theme"
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-smooth focus:outline-none focus:ring-2 focus:ring-quantum-primary bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-gray-600"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-smooth text-gray-700 dark:text-white bg-white/60 dark:bg-white/10 border border-gray-200 dark:border-gray-600"
                >
                  {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border bg-white dark:bg-gray-900"
            >
              <div className="px-4 py-4 space-y-3 flex flex-col">
                {/* Navigation Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-2 rounded-lg font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-quantum-primary/50 dark:border-quantum-primary/30 transition-all duration-300 hover:shadow-[0_0_12px_rgba(80,200,255,0.6)] hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-90 text-quantum-primary" />
                  </Link>
                ))}
                
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-quantum-primary/30 dark:border-quantum-primary/20">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg text-quantum-primary hover:text-quantum-secondary transition-all duration-300 hover:bg-quantum-primary/10 border border-quantum-primary/30 hover:border-quantum-primary/60 bg-white dark:bg-gray-800"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navigation;
