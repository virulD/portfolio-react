/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services';

const App = () => {
  return (
    <Router>
    <div>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/Services" element={<Services />} />
          
      </Routes>
    </div>
    </Router>

  )
}

export default App