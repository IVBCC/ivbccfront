import React, { useEffect } from 'react';
import ImagenNosotros from '../image/nosotros.jpeg';
import './styles.css';

const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in'); // Agrega la clase de animación
          }
        });
      },
      { threshold: 0.5 } // Detecta cuando el 50% del elemento es visible
    );

    const elements = document.querySelectorAll('.fade-in-trigger');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="aboutus-section">
      <div className="aboutus-container">
        {/* Texto de introducción */}
        <div className="aboutus-text">
          <h1>Nosotros</h1>
          <p>
            Somos una comunidad comprometida con la fe cristiana y la misión de
            llevar el mensaje de Dios a todas las personas. Nuestra iglesia se
            fundamenta en los valores bíblicos, la oración, y el servicio a la comunidad.
          </p>
        </div>

        {/* Imagen */}
        <div className="aboutus-image">
          <img
            src={ImagenNosotros} // Cambia la ruta si es necesario
            alt="Sobre Nosotros"
          />
        </div>
      </div>

      {/* Sección de Misión, Visión y Lo que hacemos */}
      <div className="mission-vision-container">
        <div className="mission fade-in-trigger">
          <h2>Misión</h2>
          <p>
            Somos una comunidad viva, sin ánimo de lucro, que proclama, practica y enseña el evangelio de fe y poder, formando discípulos para Nuestro Señor Jesucristo, quien es el único mediador entre Dios y los hombres, con el fin de bendecir a Colombia y a las naciones
          </p>
        </div>
        <div className="vision fade-in-trigger">
          <h2>Visión</h2>
          <p>
            Desarrollar un avivamiento espiritual permanente, que genere crecimiento integral en las personas para la gloria de Dios.
          </p>
        </div>
        <div className="what-we-do fade-in-trigger">
          <h2>Lo que hacemos</h2>
          <p>
            Somos una entidad sin ánimo de lucro, reconocida por el Estado Colombiano que propende por la difusión del evangelio en Colombia y en otros países del mundo.
            El trabajo realizado desde 1975, ha sido guiado por Dios bajo principios y valores que nos han permitido desarrollar nuestra labor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;