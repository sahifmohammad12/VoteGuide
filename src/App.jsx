import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Guide from './pages/Guide';
import Assistant from './pages/Assistant';
import FAQ from './pages/FAQ';
import { motion } from 'framer-motion';

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </motion.div>
      </div>
    </Router>
  );
}

export default App;
