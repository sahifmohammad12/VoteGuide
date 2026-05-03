import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';

const Home = React.lazy(() => import('./pages/Home'));
const Timeline = React.lazy(() => import('./pages/Timeline'));
const Guide = React.lazy(() => import('./pages/Guide'));
const Assistant = React.lazy(() => import('./pages/Assistant'));
const FAQ = React.lazy(() => import('./pages/FAQ'));

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Suspense fallback={<div className="flex items-center justify-center min-h-[60vh]"><div className="text-xl font-serif text-navy">Loading...</div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/guide" element={<Guide />} />
              <Route path="/assistant" element={<Assistant />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Suspense>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
