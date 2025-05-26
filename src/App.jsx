import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
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
import Header from './components/Layout/Header';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tracker" element={<SustainabilityTracker />} />
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
