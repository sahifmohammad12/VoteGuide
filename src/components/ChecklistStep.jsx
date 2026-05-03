import { useState } from 'react';
import { motion } from 'framer-motion';

const ChecklistStep = ({ step, isCompleted, onToggle, isActive }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`relative ${isActive ? 'scale-105' : ''}`}
    >
      <div className={`bg-white rounded-lg shadow-lg border-2 overflow-hidden transition-all duration-300 ${
        isActive 
          ? 'border-gold shadow-xl' 
          : isCompleted 
            ? 'border-green-500 bg-green-50/30' 
            : 'border-navy/20'
      }`}>
        <div className="p-6">
          <div className="flex items-start space-x-4">
            {/* Step number and icon */}
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl ${
                isCompleted 
                  ? 'bg-green-500 text-white' 
                  : isActive 
                    ? 'bg-gold text-navy' 
                    : 'bg-navy/10 text-navy/60'
              }`}>
                {isCompleted ? '✓' : step.icon}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy mb-2">
                    Step {step.id}: {step.title}
                  </h3>
                  <p className="text-navy/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Complete checkbox */}
                <button
                  onClick={() => onToggle(step.id)}
                  className={`ml-4 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    isCompleted 
                      ? 'bg-green-500 border-green-500' 
                      : 'border-navy/40 hover:border-gold'
                  }`}
                  aria-label={`Mark ${step.title} as ${isCompleted ? 'incomplete' : 'complete'}`}
                >
                  {isCompleted && (
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>

              {/* Tips section */}
              <div className="mt-4">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-gold hover:text-gold/80 text-sm font-semibold flex items-center space-x-1"
                >
                  <span>{showDetails ? 'Hide' : 'Show'} Tips & Resources</span>
                  <motion.svg
                    animate={{ rotate: showDetails ? 180 : 0 }}
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                <motion.div
                  initial={false}
                  animate={{ 
                    height: showDetails ? 'auto' : 0,
                    opacity: showDetails ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 space-y-4">
                    {/* Tips */}
                    <div className="bg-ivory/50 rounded-lg p-4">
                      <h4 className="font-semibold text-navy mb-2 flex items-center">
                        <span className="mr-2">💡</span>
                        Tips
                      </h4>
                      <ul className="space-y-2">
                        {step.tips.map((tip, index) => (
                          <li key={index} className="text-sm text-navy/80 flex items-start">
                            <span className="text-gold mr-2 mt-1">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Items */}
                    <div className="bg-blue-50/50 rounded-lg p-4">
                      <h4 className="font-semibold text-navy mb-2 flex items-center">
                        <span className="mr-2">✅</span>
                        Action Items
                      </h4>
                      <ul className="space-y-2">
                        {step.actionItems.map((item, index) => (
                          <li key={index} className="text-sm text-navy/80 flex items-start">
                            <span className="text-blue-500 mr-2 mt-1">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Resources */}
                    <div className="bg-gold/20 rounded-lg p-4">
                      <h4 className="font-semibold text-navy mb-2 flex items-center">
                        <span className="mr-2">🔗</span>
                        Resources
                      </h4>
                      <ul className="space-y-2">
                        {step.resources.map((resource, index) => (
                          <li key={index}>
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-gold hover:text-gold/80 underline flex items-center"
                            >
                              <span className="mr-2">📎</span>
                              {resource.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChecklistStep;
