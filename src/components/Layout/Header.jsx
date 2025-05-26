import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('logado') === 'true';
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('logado');
    toast.info('Logout realizado!');
    navigate('/');
    setMenuOpen(false);
  };

  return (
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
          {!isLoggedIn ? (
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          ) : (
            <li>
              <button className="logout-link" onClick={handleLogout}>
                Sair
              </button>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;
