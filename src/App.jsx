import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-dark-bg min-h-screen text-white selection:bg-primary selection:text-white">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about-me" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        {/* Simple Footer */}
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Virul De Silva. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;