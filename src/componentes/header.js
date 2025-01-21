import React, { useState } from 'react';
import './styles.css';

const Header = ({onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <li><button onClick={()=>onNavigate('inicio')}>Inicio</button></li>
          <li><button onClick={()=>onNavigate('nosotros')}>Nosotros</button></li>
          <li><button onClick={()=>onNavigate('formacion')}>Formación</button></li>
          <li><button onClick={()=>onNavigate('iglesias')}>Iglesias</button></li>
          <li><button onClick={()=>onNavigate('noticias')}>Noticias</button></li>
          <li><button onClick={()=>onNavigate('eventos')}>Eventos</button></li>
          <li><button onClick={()=>onNavigate('publicaciones')}>Publicaciones</button></li>
          <li><button onClick={()=>onNavigate('descargas')}>Descargas</button></li>
          <li><button onClick={()=>onNavigate('contacto')}>Contáctanos</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;