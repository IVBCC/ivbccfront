import React, { useState } from 'react';
import './styles.css';

const Header = ({onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleNavigation = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);  // Cierra el menú al navegar
  };

  return (
    <header className="header">
      <div className="logo">
        <img 
          src="https://www.cruzadacristiana.org/wp-content/uploads/2024/03/Logo-Cruzada-Cristiana-Negro-1.png" 
          alt="Iglesia Cruzada Cristiana" 
        />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
        <ul>
          <li><button onClick={()=>handleNavigation('inicio')}>Inicio</button></li>
          <li><button onClick={()=>handleNavigation('nosotros')}>Nosotros</button></li>
          <li><button onClick={()=>handleNavigation('formacion')}>Formación</button></li>
          <li><button onClick={()=>handleNavigation('iglesias')}>Iglesias</button></li>
          <li><button onClick={()=>handleNavigation('noticias')}>Noticias</button></li>
          <li><button onClick={()=>handleNavigation('eventos')}>Eventos</button></li>
          <li><button onClick={()=>handleNavigation('publicaciones')}>Publicaciones</button></li>
          <li><button onClick={()=>handleNavigation('descargas')}>Descargas</button></li>
          <li><button onClick={()=>handleNavigation('contacto')}>Contáctanos</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;