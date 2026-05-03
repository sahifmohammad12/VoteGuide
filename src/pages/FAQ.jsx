import { useState } from 'react';
import { faqData } from '../data/faqData';
import FAQAccordion from '../components/FAQAccordion';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQs = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-navy/70 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about voting, elections, and the democratic process. 
            Search or browse through our comprehensive FAQ.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search questions..."
              className="block w-full pl-10 pr-3 py-3 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg className="h-5 w-5 text-navy/40 hover:text-navy/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Results Count */}
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-6"
          >
            <p className="text-navy/70">
              Found {filteredFAQs.length} {filteredFAQs.length === 1 ? 'result' : 'results'} for "{searchTerm}"
            </p>
          </motion.div>
        )}

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQAccordion
                key={faq.id}
                faq={faq}
                searchTerm={searchTerm}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                No results found
              </h3>
              <p className="text-navy/70 mb-6">
                We couldn't find any answers matching your search. Try different keywords or browse all questions.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="inline-flex items-center px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors duration-200"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>

        {/* Categories */}
        {!searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <h2 className="font-serif text-2xl font-bold text-navy mb-8 text-center">
              Browse by Topic
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-navy/20">
                <h3 className="font-semibold text-navy mb-3 flex items-center">
                  <span className="mr-2">🗳️</span>
                  Voting Process
                </h3>
                <p className="text-sm text-navy/70 mb-4">
                  Learn about registration, polling places, and casting your ballot.
                </p>
                <button
                  onClick={() => setSearchTerm('vote')}
                  className="text-gold text-sm font-semibold hover:text-gold/80"
                >
                  View Questions →
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-navy/20">
                <h3 className="font-semibold text-navy mb-3 flex items-center">
                  <span className="mr-2">🏛️</span>
                  Electoral College
                </h3>
                <p className="text-sm text-navy/70 mb-4">
                  Understand how the Electoral College works in presidential elections.
                </p>
                <button
                  onClick={() => setSearchTerm('electoral')}
                  className="text-gold text-sm font-semibold hover:text-gold/80"
                >
                  View Questions →
                </button>
              </div>

              <div className="bg-white rounded-lg p-6 border border-navy/20">
                <h3 className="font-semibold text-navy mb-3 flex items-center">
                  <span className="mr-2">📋</span>
                  Requirements
                </h3>
                <p className="text-sm text-navy/70 mb-4">
                  Find out about eligibility, ID requirements, and registration rules.
                </p>
                <button
                  onClick={() => setSearchTerm('requirement')}
                  className="text-gold text-sm font-semibold hover:text-gold/80"
                >
                  View Questions →
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-accent-red/10 rounded-lg p-6 border border-accent-red/30">
            <h3 className="font-serif text-xl font-bold text-navy mb-3">
              ❓ Still have questions?
            </h3>
            <p className="text-navy/80 mb-4">
              Can't find what you're looking for? Our AI assistant Lex is here to help with personalized answers.
            </p>
            <a
              href="/assistant"
              className="inline-flex items-center px-6 py-3 bg-gold text-navy font-bold rounded-lg hover:bg-gold/90 transition-colors duration-200"
            >
              Ask Lex
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
