import React, { useState, useEffect  } from 'react';
import { Link } from 'react-router-dom';
import LogoVBBlanco from '../logo/logoblanco.png';
import './styles.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  // Cierra el submenú al hacer clic fuera
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target)) {
        setIsSubMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img
          src={LogoVBBlanco}
          alt="Iglesia Cruzada Cristiana Valle de Bendicion"
        />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
        <ul className='navbar-ul'>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
          <li className="dropdown">
            <Link onClick={toggleSubMenu}>
              Formación <span className="static-arrow">&#9662;</span>
            </Link>
            {isSubMenuOpen && (
              <ul className="submenu">
                <li><Link to="/formacion/cefi" onClick={closeMenu}>CEFI</Link></li>
                <li><Link to="/formacion/ibps" onClick={closeMenu}>IBPS</Link></li>
                <li><Link to="/formacion/inscripciones" onClick={closeMenu}>Inscripciones</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/iglesias" onClick={closeMenu}>Iglesias</Link></li>
          <li><Link to="/noticias" onClick={closeMenu}>Noticias</Link></li>
          <li><Link to="/eventos" onClick={closeMenu}>Eventos</Link></li>
          <li><Link to="/publicaciones" onClick={closeMenu}>Publicaciones</Link></li>
          <li><Link to="/descargas" onClick={closeMenu}>Descargas</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
