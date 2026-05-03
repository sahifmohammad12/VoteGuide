import { motion } from 'framer-motion';

const ChatBubble = ({ message, isUser, timestamp }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start space-x-2`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm ${
          isUser 
            ? 'bg-navy text-ivory ml-2' 
            : 'bg-gold text-navy mr-2'
        }`}>
          {isUser ? '👤' : '⚖️'}
        </div>

        {/* Message bubble */}
        <div className={`relative px-4 py-3 rounded-2xl ${
          isUser 
            ? 'bg-navy text-ivory rounded-br-none' 
            : 'bg-white text-navy border border-navy/20 rounded-bl-none'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {message}
          </p>
          
          {/* Timestamp */}
          <div className={`text-xs mt-1 ${isUser ? 'text-ivory/60' : 'text-navy/50'}`}>
            {timestamp}
          </div>

          {/* Tail */}
          <div className={`absolute top-0 ${
            isUser 
              ? 'right-0 translate-x-1 -translate-y-1' 
              : 'left-0 -translate-x-1 -translate-y-1'
          }`}>
            <div className={`w-0 h-0 border-l-8 border-r-8 border-b-8 ${
              isUser 
                ? 'border-l-transparent border-r-transparent border-b-navy' 
                : 'border-l-transparent border-r-transparent border-b-white'
            }`}></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatBubble;
