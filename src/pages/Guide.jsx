import { useState } from 'react';
import { guideSteps } from '../data/guideSteps';
import ChecklistStep from '../components/ChecklistStep';
import ProgressBar from '../components/ProgressBar';
import { motion } from 'framer-motion';

const Guide = () => {
  const [completedSteps, setCompletedSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);

  const handleToggleStep = (stepId) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const isStepCompleted = (stepId) => completedSteps.includes(stepId);

  const isStepActive = (stepId) => {
    if (completedSteps.length === 0) return stepId === 1;
    const nextIncomplete = guideSteps.find(step => !completedSteps.includes(step.id));
    return nextIncomplete?.id === stepId;
  };

  return (
    <div className="min-h-screen bg-ivory py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
            Step-by-Step Voter Guide
          </h1>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
            Complete this interactive checklist to ensure you're ready to vote with confidence. 
            Mark each step as complete to track your progress.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <ProgressBar
            currentStep={currentStep}
            totalSteps={guideSteps.length}
            completedSteps={completedSteps.length}
          />
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {guideSteps.map((step, index) => (
            <ChecklistStep
              key={step.id}
              step={step}
              isCompleted={isStepCompleted(step.id)}
              onToggle={handleToggleStep}
              isActive={isStepActive(step.id)}
            />
          ))}
        </div>

        {/* Completion Message */}
        {completedSteps.length === guideSteps.length && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="font-serif text-3xl font-bold text-green-700 mb-4">
                Congratulations! You're Ready to Vote
              </h2>
              <p className="text-green-600 mb-6 leading-relaxed">
                You've completed all the steps to become an informed voter. Your participation in democracy 
                makes a difference in your community and country.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/assistant"
                  className="inline-flex items-center px-6 py-3 bg-gold text-navy font-bold rounded-lg hover:bg-gold/90 transition-colors duration-200"
                >
                  Ask a Question
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </a>
                <a
                  href="/timeline"
                  className="inline-flex items-center px-6 py-3 bg-navy text-ivory font-bold rounded-lg hover:bg-navy/90 transition-colors duration-200"
                >
                  View Timeline
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-accent-red/10 rounded-lg p-6 border border-accent-red/30">
            <h3 className="font-serif text-xl font-bold text-navy mb-3">
              ❓ Need Help?
            </h3>
            <p className="text-navy/80 mb-4">
              If you have questions about any step in the voting process, our AI assistant is here to help.
            </p>
            <a
              href="/assistant"
              className="inline-flex items-center text-gold font-semibold hover:text-gold/80"
            >
              Chat with Lex
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Guide;
