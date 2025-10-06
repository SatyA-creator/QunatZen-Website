import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevSeconds, setPrevSeconds] = useState(0);

  const countdownDate = new Date("2030-01-01T00:00:00").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setPrevSeconds(timeLeft.seconds);
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft.seconds]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product & Tech", href: "/product-tech" },
    { name: "Call for POCs", href: "/call-for-pocs" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Countdown Box with flip animation for seconds
  const CountdownBox = ({ label, value, isSeconds }) => {
    return (
      <div 
        className="flex flex-col items-center justify-center backdrop-blur-md text-white px-4 py-2 rounded-lg shadow-lg border border-white/20 min-w-[60px] sm:min-w-[70px]"
        style={{
          background: "linear-gradient(135deg, hsl(220, 89%, 35%) 0%, hsl(200, 70%, 60%) 50%, hsl(185, 65%, 58%) 100%)"
        }}
      >
        {isSeconds ? (
          <motion.div
            key={value}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: 90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg sm:text-xl font-bold"
            style={{ textShadow: "0 0 5px rgba(0,0,0,0.5)" }}
          >
            {value}
          </motion.div>
        ) : (
          <span className="text-lg sm:text-xl font-bold" style={{ textShadow: "0 0 5px rgba(0,0,0,0.5)" }}>
            {value}
          </span>
        )}
        <span className="text-xs sm:text-sm uppercase">{label}</span>
      </div>
    );
  };

  return (
    <>
      {/* Static Header: Countdown + Navigation */}
      <div className="w-full flex flex-col bg-background/90 backdrop-blur-xl border-b border-quantum-primary/30">
        {/* Countdown Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 border-b border-quantum-primary/20 gap-3 sm:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/quantzen-logo.jpg"
              alt="QuantZen Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <span className="text-xl sm:text-2xl font-bold text-gradient">QuantZen</span>
          </div>

          {/* Countdown Boxes */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-end mt-2 sm:mt-0">
            <CountdownBox label="Days" value={timeLeft.days} isSeconds={undefined} />
            <CountdownBox label="Hours" value={timeLeft.hours} isSeconds={undefined} />
            <CountdownBox label="Minutes" value={timeLeft.minutes} isSeconds={undefined} />
            <CountdownBox label="Seconds" value={timeLeft.seconds} isSeconds />
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="flex flex-col sm:flex-row items-center justify-center h-auto sm:h-16 px-4 sm:px-6 py-2 gap-2">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm sm:text-base font-medium text-foreground/80 hover:text-foreground transition-smooth"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 sm:gap-4 ml-6">
            <Button variant="ghost" size="sm">
              Documentation
            </Button>
            <Button variant="quantum" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-between w-full mt-2">
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
              className="md:hidden border-t border-border bg-card"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block py-2 text-foreground/80 hover:text-foreground transition-smooth"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-2 space-y-2">
                  <Button variant="ghost" className="w-full">
                    Documentation
                  </Button>
                  <Button variant="quantum" className="w-full">
                    Get Started
                  </Button>
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
