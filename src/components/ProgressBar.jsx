import { motion } from 'framer-motion';

const ProgressBar = ({ currentStep, totalSteps, completedSteps }) => {
  const progressPercentage = (completedSteps / totalSteps) * 100;

  return (
    <div className="w-full bg-navy/10 rounded-full h-3 mb-6 overflow-hidden">
      {/* Background track */}
      <div className="absolute inset-0 bg-navy/10 rounded-full" />
      
      {/* Progress fill */}
      <motion.div
        className="h-full bg-gradient-to-r from-gold to-accent-red rounded-full relative"
        initial={{ width: 0 }}
        animate={{ width: `${progressPercentage}%` }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Animated shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Step indicators */}
      <div className="absolute inset-0 flex justify-between items-center px-1">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full border-2 ${
              i < completedSteps
                ? 'bg-gold border-gold'
                : i === currentStep - 1
                  ? 'bg-white border-navy/50'
                  : 'bg-white border-navy/20'
            }`}
          />
        ))}
      </div>

      {/* Progress text */}
      <div className="absolute -bottom-6 left-0 right-0 text-center">
        <span className="text-sm text-navy/70 font-medium">
          {completedSteps} of {totalSteps} steps completed
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
