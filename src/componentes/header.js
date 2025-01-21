import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://www.cruzadacristiana.org/wp-content/uploads/2024/03/Logo-Cruzada-Cristiana-Negro-1.png" alt="Iglesia Cruzada Cristiana" />
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#formacion">Formación</a></li>
          <li><a href="#iglesias">Iglesias</a></li>
          <li><a href="#noticias">Noticias</a></li>
          <li><a href="#eventos">Próximos Eventos</a></li>
          <li><a href="#publicaciones">Publicaciones</a></li>
          <li><a href="#descargas">Descargas</a></li>
          <li><a href="#contacto">Contáctanos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;