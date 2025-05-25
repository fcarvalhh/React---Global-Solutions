import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Resources from './components/Pages/Resources';
import Partners from './components/Pages/Partners';
import Contact from './components/Pages/Faleconosco';
import SustainabilityTracker from './components/SustainabilityTracker/SustainabilityTracker';

import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <Router>
      <div className="app-container">
        <header>
          <div className="navbar">
            <button className="menu-button" onClick={toggleMenu}>
              {menuOpen ? '✕' : '☰'}
            </button>
            <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/about" onClick={closeMenu}>Sobre</Link></li>
              <li><Link to="/resources" onClick={closeMenu}>Recursos</Link></li>
              <li><Link to="/partners" onClick={closeMenu}>Parcerias</Link></li>
              <li><Link to="/tracker" onClick={closeMenu}>Rastreador Eco</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Fale conosco</Link></li>
              <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
            </ul>
          </div>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tracker" element={
              <ProtectedRoute>
                <SustainabilityTracker />
              </ProtectedRoute>
            } />
          </Routes>
        </main>

        <footer>
          <p>&copy; 2024 Plataforma Sustentável - EcoRacers. Todos os direitos reservados.</p>
        </footer>

        <ToastContainer position="top-center" autoClose={2500} />
      </div>
    </Router>
  );
}

export default App;
