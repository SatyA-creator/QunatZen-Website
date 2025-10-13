import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
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
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft.seconds]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Why Us", href: "/why-us" },
    { name: "Product", href: "/product" },
    { name: "Partners", href: "/call-for-pocs" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "News", href: "/news" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const CountdownBox = ({ label, value, isSeconds }) => {
    return (
      <div
        className="flex flex-col items-center justify-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg border border-quantum-primary/50 min-w-[50px] sm:min-w-[70px] text-white backdrop-blur-md"
        style={{
          background:
            "linear-gradient(135deg, rgb(48, 110, 232) 0%, rgb(82, 177, 224) 50%, rgb(78, 206, 218) 100%)",
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
          <span
            className="text-lg sm:text-xl font-bold"
            style={{ textShadow: "0 0 5px rgba(0,0,0,0.5)" }}
          >
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
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 py-3 border-b border-quantum-primary/20 gap-3 sm:gap-0 relative">

          {/* Logo */}
          <div className="flex items-center gap-3 z-10">
            <img
              src="/quant_logo1-bg.png"
              alt="QuantZen Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <span className="text-xl sm:text-2xl font-bold text-gradient">
              QuantZen™
            </span>
          </div>

          {/* Countdown Boxes and Message */}
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-end mt-4 sm:mt-0 items-center">

            {/* Countdown text (now before hourglass) */}
            <h2
              className="text-center text-lg sm:text-xl md:text-2xl font-semibold select-none"
              style={{
                backgroundImage: "linear-gradient(90deg, #00bcd4, #3f51b5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 6px rgba(0, 188, 212, 0.4)",
              }}
            >
              COUNTDOWN TO Q-DAY ✨
            </h2>

            {/* Hourglass GIF */}
            <img
              src="/hourglass1-unscreen.gif"
              alt="Hourglass Animation"
              className="w-14 h-14 sm:w-20 sm:h-20 rounded-lg"
            />

            {/* Countdown boxes */}
            <div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
              <CountdownBox label="Days" value={timeLeft.days} />
              <CountdownBox label="Hours" value={timeLeft.hours} />
              <CountdownBox label="Minutes" value={timeLeft.minutes} />
              <CountdownBox label="Seconds" value={timeLeft.seconds} isSeconds />
            </div>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 py-3 gap-3">
          {/* Desktop Links */}
          <div className="hidden md:flex flex-wrap justify-start items-center gap-3 lg:gap-4">
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
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl font-medium text-black shadow-md border border-quantum-primary/50 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:border-quantum-primary"
                >
                  <span className="text-sm sm:text-base">{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-90 text-quantum-primary" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-between w-full">
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
              <div className="px-4 py-4 space-y-3 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-2 rounded-lg font-medium text-black backdrop-blur-md border border-quantum-primary/50 transition-all duration-300 hover:shadow-[0_0_12px_rgba(80,200,255,0.6)]"
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
