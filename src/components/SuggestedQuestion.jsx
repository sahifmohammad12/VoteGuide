import { motion } from 'framer-motion';

const SuggestedQuestion = ({ question, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(question)}
      className="inline-flex items-center px-4 py-2 bg-gold/20 hover:bg-gold/30 text-navy rounded-full text-sm font-medium border border-gold/30 hover:border-gold/50 transition-all duration-200"
    >
      <span className="mr-2">💬</span>
      {question}
    </motion.button>
  );
};

export default SuggestedQuestion;
