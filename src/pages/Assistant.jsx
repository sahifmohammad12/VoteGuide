import { useState, useRef, useEffect } from 'react';
import ChatBubble from '../components/ChatBubble';
import TypingIndicator from '../components/TypingIndicator';
import SuggestedQuestion from '../components/SuggestedQuestion';
import { motion, AnimatePresence } from 'framer-motion';

const Assistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Lex, your AI civic education assistant. I'm here to help you understand how elections work, from voter registration to the Electoral College. What would you like to know today?",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestedQuestions = [
    "How does the Electoral College work?",
    "What ID do I need to vote?",
    "What's the difference between primary and general elections?",
    "How are votes counted?",
    "Can I vote if I'm a college student?",
    "What if I'm out of town on Election Day?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGeminiAPI = async (conversationHistory) => {
    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": API_KEY
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{
              text: `You are Lex, a friendly, non-partisan civic education assistant. Your job is to help citizens of all ages and backgrounds understand how elections work — including timelines, voter registration, how ballots are counted, the Electoral College, primaries, and more. Always be:
- Clear and simple (avoid jargon)
- Non-partisan and factual
- Encouraging and empowering
- Concise but thorough
If asked about a specific country, default to explaining the US federal election process unless specified otherwise.`
            }]
          },
          contents: conversationHistory
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      // Fallback response for demo purposes
      return "I'm having trouble connecting right now, but I'd be happy to help with your voting questions! Could you try asking again, or check out our FAQ section for common questions about the election process?";
    }
  };

  const handleSendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: messageText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Prepare conversation history for Gemini
    const conversationHistory = messages.map(msg => ({
      role: msg.isUser ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));
    conversationHistory.push({ role: 'user', parts: [{ text: messageText }] });

    try {
      const response = await callGeminiAPI(conversationHistory);

      const assistantMessage = {
        id: Date.now() + 1,
        text: response,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setTimeout(() => {
        setMessages(prev => [...prev, assistantMessage]);
        setIsTyping(false);
      }, 1500); // Simulate typing delay
    } catch (error) {
      setIsTyping(false);
    }
  };

  const handleSuggestedQuestion = (question) => {
    setInputValue(question);
    handleSendMessage(question);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div className="min-h-screen bg-ivory flex flex-col">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-navy text-ivory py-6 px-4 shadow-lg"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center text-2xl">
              ⚖️
            </div>
            <h1 className="font-serif text-2xl lg:text-3xl font-bold">Ask Lex</h1>
          </div>
          <p className="text-ivory/80">
            Your AI-powered civic education assistant
          </p>
        </div>
      </motion.div>

      {/* Chat Container */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg border border-navy/20 h-[600px] flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <ChatBubble
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}
              {isTyping && <TypingIndicator />}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="px-6 pb-4"
            >
              <p className="text-sm text-navy/60 mb-3">Try asking:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <SuggestedQuestion
                    key={question}
                    question={question}
                    onClick={handleSuggestedQuestion}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Input Area */}
          <div className="border-t border-navy/20 p-4">
            <form onSubmit={handleSubmit} className="flex space-x-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything about voting and elections..."
                className="flex-1 px-4 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-navy/60">
            Lex provides general civic education information. For specific voting questions about your location,
            please check with your local election officials.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Assistant;
