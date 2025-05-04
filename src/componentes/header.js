import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoVBNegro from '../logo/logonegro.png';
import { FaSearch } from 'react-icons/fa';
import './styles.css';

// Lista de enlaces para buscar
const links = [
  { name: 'Inicio', path: '/' },
  { name: 'Nosotros', path: '/nosotros' },
  { name: 'CEFI', path: '/formacion/cefi' },
  { name: 'IBPS', path: '/formacion/ibps' },
  { name: 'Inscripciones', path: '/formacion/inscripciones' },
  { name: 'Iglesias CC Internacionales', path: '/ccinternacionales' },
  { name: 'Iglesias CC Colombia', path: '/ccencolombia' },
  { name: 'Iglesias CC Valledupar', path: '' },
  { name: 'Noticias', path: '/noticias' },
  { name: 'Eventos', path: '/eventos' },
  { name: 'Publicaciones', path: '/publicaciones' },
  { name: 'Descargas', path: '' },
  { name: 'Contacto', path: '/contacto' }
];
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLinks, setFilteredLinks] = useState([]); // Estado para almacenar resultados de búsqueda
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menuName) => {
    setIsSubMenuOpen(prev => prev === menuName ? '' : menuName);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchQuery(''); // Limpiar búsqueda al abrir/cerrar
    setFilteredLinks([]); // Reiniciar resultados
  };

  // Filtrar enlaces según la búsqueda
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredLinks([]);
    } else {
      const results = links.filter(link =>
        link.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredLinks(results);
    }
  }, [searchQuery]);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="logo">
        <img src={LogoVBNegro} alt="Iglesia Cruzada Cristiana Valle de Bendicion" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>{isMenuOpen ? '✖' : '☰'}</button>
      <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
        <ul className="navbar-ul">
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
          <li className="dropdown">
            <Link onClick={() => toggleSubMenu('formacion')}>
              Formación <span className="static-arrow">&#9662;</span>
            </Link>
            {isSubMenuOpen === 'formacion' && (
              <ul className="submenu">
                <li><Link to="/formacion/cefi" onClick={closeMenu}>CEFI</Link></li>
                <li><Link to="/formacion/ibps" onClick={closeMenu}>IBPS</Link></li>
                <li><Link to="/formacion/inscripciones" onClick={closeMenu}>Inscripciones</Link></li>
              </ul>
            )}
          </li>
          <li className="dropdown">
            <Link onClick={() => toggleSubMenu('iglesias')}>
            Iglesias <span className="static-arrow">&#9662;</span>
            </Link>
            {isSubMenuOpen === 'iglesias' && (
              <ul className="submenu">
                <li><Link to="/ccinternacionales" onClick={closeMenu}>Iglesias CC Internacional</Link></li>
                <li><Link to="/ccencolombia" onClick={closeMenu}>Iglesias CC Colombia</Link></li>
                <li><Link to="" onClick={closeMenu}>Iglesias CC Valledupar</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/noticias" onClick={closeMenu}>Noticias</Link></li>
          {/* <li><Link to="/eventos" onClick={closeMenu}>Eventos</Link></li> */}
          <li><Link to="/publicaciones" onClick={closeMenu}>Publicaciones</Link></li>
          <li><Link to="" onClick={closeMenu}>Descargas</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
        </ul>
      </nav>

      {/* Icono de búsqueda */}
      <div className="search-container">
        <FaSearch className="search-icon" onClick={toggleSearch} />

        {/* Barra de búsqueda */}
        {isSearchOpen && (
          <div className="search-overlay">
            <input
              type="text"
              className="search-input"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="close-search" onClick={toggleSearch}>✖</button>

            {/* Mostrar resultados de búsqueda */}
            {filteredLinks.length > 0 && (
              <ul className="search-results">
                {filteredLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} onClick={toggleSearch}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            )}

          </div>
        )}
      </div>
    </header>
  );
};

export default Header;