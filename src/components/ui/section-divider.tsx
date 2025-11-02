import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: 'gradient' | 'dots' | 'wave' | 'line' | 'particles';
  className?: string;
}

const SectionDivider = ({ variant = 'gradient', className = '' }: SectionDividerProps) => {
  const variants = {
    gradient: (
      <div className={`relative py-8 ${className}`}>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-quantum-primary/30 dark:via-quantum-primary/20 to-transparent"></div>
          </div>
          <div className="relative bg-background dark:bg-gray-900 px-6">
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-quantum-primary to-quantum-secondary rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    ),
    
    dots: (
      <div className={`relative py-8 flex justify-center items-center ${className}`}>
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-quantum-primary/60 dark:bg-quantum-primary/40 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    ),
    
    wave: (
      <div className={`relative py-8 overflow-hidden ${className}`}>
        <svg
          className="w-full h-8 text-quantum-primary/30 dark:text-quantum-primary/20"
          viewBox="0 0 1200 40"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,20 Q300,0 600,20 T1200,20"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    ),
    
    line: (
      <div className={`relative py-6 ${className}`}>
        <motion.div 
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-quantum-primary/40 dark:via-quantum-primary/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    ),

    particles: (
      <div className={`relative py-8 overflow-hidden ${className}`}>
        <div className="relative flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-quantum-primary/20 dark:via-quantum-primary/15 to-transparent"></div>
          {/* Floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-quantum-primary/60 rounded-full"
              initial={{ 
                x: `${-50 + (i * 25)}%`,
                y: 0,
                opacity: 0,
                scale: 0
              }}
              animate={{ 
                y: [0, -10, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    )
  };

  return variants[variant];
};

export default SectionDivider;