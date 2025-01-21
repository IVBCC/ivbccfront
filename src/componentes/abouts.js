import React from 'react';
import './styles.css';

const AboutUs = () => {
  return (
    <section className="about-us-section" id="nosotros">
      {/* Título principal de la sección */}
      <div className="about-us-header">
        <h1>Nosotros</h1>
      </div>

      {/* Contenido principal */}
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>¿Quiénes somos?</h2>
          <p>
            Somos una iglesia comprometida con los valores del evangelio, dedicada a transformar vidas 
            a través de la palabra de Dios y el servicio a la comunidad. Con una presencia activa en 
            diferentes partes del país, nuestro propósito es llevar el mensaje de esperanza y amor a 
            todos los rincones.
          </p>
          <p>
            Nuestra historia se remonta a hace más de 50 años, cuando un grupo de creyentes decidió 
            unirse para formar una comunidad basada en la fe, el amor y el servicio. Hoy en día, esa 
            visión sigue viva, guiando cada uno de nuestros pasos.
          </p>
        </div>

        {/* Imagen */}
        <div className="about-us-image">
          <img 
            src="https://www.cruzadacristiana.org/wp-content/uploads/2020/05/quienes-somos.jpg" 
            alt="Quienes somos" 
          />
        </div>
      </div>

      {/* Valores y misión */}
      <div className="about-us-values">
        <h2>Nuestros valores</h2>
        <div className="values-grid">
          <div className="value-item">
            <h3>Amor</h3>
            <p>Promovemos el amor como el principal motor de nuestras acciones y relaciones.</p>
          </div>
          <div className="value-item">
            <h3>Servicio</h3>
            <p>Estamos comprometidos con servir a nuestra comunidad y a quienes más lo necesitan.</p>
          </div>
          <div className="value-item">
            <h3>Unidad</h3>
            <p>Fomentamos la unidad entre los miembros de nuestra iglesia y la sociedad en general.</p>
          </div>
          <div className="value-item">
            <h3>Esperanza</h3>
            <p>Llevamos un mensaje de esperanza basado en la fe en Jesucristo.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;