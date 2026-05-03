import { timelineData } from '../data/timelineData';
import TimelineStep from '../components/TimelineStep';
import { motion } from 'framer-motion';

const Timeline = () => {
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
            Election Timeline
          </h1>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
            Follow the key phases of the US federal election process from start to finish. 
            Click on each phase to learn more about what happens and what you should do.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {timelineData.map((step, index) => (
            <TimelineStep
              key={step.id}
              step={step}
              index={index}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gold/20 rounded-lg p-6 border border-gold/30">
            <h3 className="font-serif text-xl font-bold text-navy mb-3">
              🗳️ Remember: Your Participation Matters
            </h3>
            <p className="text-navy/80 leading-relaxed">
              Every phase of the election process offers opportunities for citizen engagement. 
              Stay informed, ask questions, and make your voice heard throughout the entire election cycle.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;
