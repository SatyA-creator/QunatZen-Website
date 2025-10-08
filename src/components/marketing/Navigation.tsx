import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevSeconds, setPrevSeconds] = useState(0);

  useEffect(() => {
    const countdownDate = new Date("2030-01-01T00:00:00").getTime();

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
  }, [timeLeft.seconds]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why Us", href: "/product-tech" },
    { name: "Product", href: "/product" },
    { name: "Partners", href: "/call-for-pocs" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "News", href: "/news" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const CountdownBox = ({ label, value, isSeconds }) => {
    return (
      <div className="flex flex-col items-center justify-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg border border-white/20 min-w-[50px] sm:min-w-[70px] text-white backdrop-blur-md"
        style={{
          background: "linear-gradient(135deg, hsl(220, 89%, 35%) 0%, hsl(200, 70%, 60%) 50%, hsl(185, 65%, 58%) 100%)"
        }}>
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
      <div className="w-full flex flex-col bg-background/90 backdrop-blur-xl border-b border-quantum-primary/30">

        {/* Countdown Section */}
        {/* Countdown Section */}
<div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 border-b border-quantum-primary/20 gap-3 sm:gap-0 relative">

  {/* Logo */}
  <div className="flex items-center gap-3 z-10">
    <img src="src/assets/quant_logo1-bg.png" alt="QuantZen Logo" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
    <span className="text-xl sm:text-2xl font-bold text-gradient">QuantZen</span>
  </div>

  {/* Countdown Message - Responsive Centered */}
  <div className="flex justify-center items-center w-full sm:w-auto mt-2 sm:mt-0 z-10">
    <motion.h2
      className="text-center text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug select-none"
      style={{
        backgroundImage: "linear-gradient(90deg, hsl(200, 85%, 65%), hsl(185, 80%, 60%), hsl(200, 85%, 65%))",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 0 8px rgba(60,150,255,0.7)",
        animation: "shine 3s linear infinite",
      }}
    >
      Countdown to Q-Day ✨
    </motion.h2>
  </div>

  {/* Countdown Boxes with GIF */}
  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-end mt-4 sm:mt-0 items-center">
    <img src="src/assets/hourglass1-unscreen.gif" alt="Animated GIF" className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg"/>
    <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
      <CountdownBox label="Days" value={timeLeft.days} isSeconds={undefined} />
      <CountdownBox label="Hours" value={timeLeft.hours} isSeconds={undefined} />
      <CountdownBox label="Minutes" value={timeLeft.minutes} isSeconds={undefined} />
      <CountdownBox label="Seconds" value={timeLeft.seconds} isSeconds />
    </div>
  </div>
</div>


        {/* Navigation Bar */}
        <nav className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-3 gap-3">

          {/* Desktop Links */}
          <div className="hidden md:flex flex-wrap justify-start items-center gap-3 lg:gap-4">
            {navLinks.map((link, index) => (
              <motion.div key={link.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} whileHover={{ scale: 1.05, y: -2 }}>
                <Link to={link.href}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium text-white shadow-md border border-white/20 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_12px_rgba(80,200,255,0.6)]"
                  style={{ background: "linear-gradient(135deg, hsl(220, 89%, 35%) 0%, hsl(200, 70%, 60%) 50%, hsl(185, 65%, 58%) 100%)" }}
                >
                  <span className="text-sm sm:text-base">{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-90"/>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-between w-full">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-muted transition-smooth">
              {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden border-t border-border bg-card">
              <div className="px-4 py-4 space-y-3 flex flex-col">
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-2 rounded-lg font-medium text-white backdrop-blur-md border border-white/20 transition-all duration-300 hover:shadow-[0_0_12px_rgba(80,200,255,0.6)]"
                    style={{ background: "linear-gradient(135deg, hsl(220, 89%, 35%) 0%, hsl(200, 70%, 60%) 50%, hsl(185, 65%, 58%) 100%)" }}
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-90"/>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Glitter Animation Keyframes */}
      <style>
        {`
          @keyframes shine {
            0% { background-position: 0% center; }
            50% { background-position: 100% center; }
            100% { background-position: 0% center; }
          }
        `}
      </style>
    </>
  );
};

export default Navigation;
