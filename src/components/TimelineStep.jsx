import { useState } from 'react';
import { motion } from 'framer-motion';

const TimelineStep = ({ step, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30" />
      
      {/* Timeline dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-gold rounded-full border-4 border-navy shadow-lg" />
      
      {/* Content card */}
      <motion.div
        className="ml-16 bg-white rounded-lg shadow-lg border border-navy/20 overflow-hidden cursor-pointer"
        whileHover={{ scale: 1.02 }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-6">
          <div className="flex items-start space-x-4">
            <div className="text-3xl">{step.icon}</div>
            <div className="flex-1">
              <h3 className="font-serif text-xl font-bold text-navy mb-2">
                {step.title}
              </h3>
              <p className="text-gold font-semibold text-sm mb-2">
                {step.dateRange}
              </p>
              <p className="text-navy/80 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
          
          <motion.div
            initial={false}
            animate={{ 
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-4 pt-4 border-t border-navy/10">
              <div className="bg-ivory/50 rounded-lg p-4">
                <h4 className="font-semibold text-navy mb-2">Details</h4>
                <p className="text-navy/80 text-sm leading-relaxed mb-4">
                  {step.details}
                </p>
                
                <div className="bg-accent-red/10 rounded-lg p-3 border-l-4 border-accent-red">
                  <p className="text-sm font-semibold text-navy mb-1">
                    📋 What You Should Do:
                  </p>
                  <p className="text-sm text-navy/80">
                    {step.voterAction}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="mt-4 flex justify-between items-center">
            <button className="text-gold hover:text-gold/80 text-sm font-semibold flex items-center space-x-1">
              <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
              <motion.svg
                animate={{ rotate: isExpanded ? 180 : 0 }}
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineStep;
