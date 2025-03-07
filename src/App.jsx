import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Resources from './components/Pages/Resources';
import Partners from './components/Pages/Partners';
import Contact from './components/Pages/Faleconosco';

function App() {
  return (
    <Router>
      <header>
        <div className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/resources">Recursos</Link></li>
            <li><Link to="/partners">Parcerias</Link></li>
            <li><Link to="/contact">Fale conosco</Link></li>
          </ul>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2024 Plataforma Sustentável - EcoRacers. Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
}

export default App;