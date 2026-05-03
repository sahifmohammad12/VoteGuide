import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    {
      icon: '📅',
      title: 'Election Timeline',
      description: 'Follow the key phases of the election process from candidate registration to inauguration.',
      link: '/timeline'
    },
    {
      icon: '📝',
      title: 'Step-by-Step Guide',
      description: 'Complete interactive checklist to ensure you\'re ready to vote with confidence.',
      link: '/guide'
    },
    {
      icon: '🤖',
      title: 'Ask the Assistant',
      description: 'Get personalized answers to your voting questions from our AI civic education assistant.',
      link: '/assistant'
    }
  ];

  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy text-ivory">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-serif text-5xl lg:text-7xl font-bold mb-6"
            >
              Understanding Your Vote,
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block text-gold"
              >
                Step by Step
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl lg:text-2xl text-ivory/90 max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Navigate the election process with confidence. From voter registration to casting your ballot, 
              we're here to make democracy accessible to everyone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/guide"
                className="inline-flex items-center px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-gold/90 transition-colors duration-200 text-lg"
              >
                Start Learning
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <Link
                to="/assistant"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-ivory text-ivory font-bold rounded-lg hover:bg-ivory hover:text-navy transition-colors duration-200 text-lg"
              >
                Ask a Question
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 right-10 text-6xl opacity-10">🗳️</div>
        <div className="absolute bottom-10 left-10 text-6xl opacity-10">🏛️</div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-navy/70 max-w-2xl mx-auto">
              Explore our comprehensive resources designed to make the election process clear and accessible.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={feature.link}
                  className="block h-full bg-white rounded-xl shadow-lg border border-navy/20 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-5xl mb-6">{feature.icon}</div>
                  <h3 className="font-serif text-2xl font-bold text-navy mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-navy/70 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center text-gold font-semibold">
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 lg:py-24 bg-accent-red/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-navy mb-6">
              Ready to Make Your Voice Heard?
            </h2>
            <p className="text-xl text-navy/70 mb-8 leading-relaxed">
              Every vote matters. Start your journey to becoming an informed and confident voter today.
            </p>
            <Link
              to="/guide"
              className="inline-flex items-center px-8 py-4 bg-accent-red text-ivory font-bold rounded-lg hover:bg-accent-red/90 transition-colors duration-200 text-lg"
            >
              Get Started Now
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
