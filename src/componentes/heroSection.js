import React from 'react';
import './styles.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-content">
        <h1>Bienvenidos a Valle de Bendición</h1>
        <img 
          src="https://www.cruzadacristiana.org/wp-content/uploads/2024/03/Logo-Cruzada-Cristiana-Negro-1.png" 
          alt="Logo Cruzada Cristiana"
          className="hero-logo"
        />
        <div className="arrow-container">
          <span className="arrow-down"></span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;