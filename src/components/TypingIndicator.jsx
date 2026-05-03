import { motion } from 'framer-motion';

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start mb-4"
    >
      <div className="flex items-start space-x-2">
        {/* Avatar */}
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-navy flex items-center justify-center text-sm">
          ⚖️
        </div>

        {/* Typing bubble */}
        <div className="bg-white text-navy border border-navy/20 rounded-2xl rounded-bl-none px-4 py-3">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-navy/40 rounded-full"
                animate={{
                  y: ['0%', '-50%', '0%'],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>

        {/* Tail */}
        <div className="absolute top-0 left-0 -translate-x-1 -translate-y-1">
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;
