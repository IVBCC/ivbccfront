import React, { useEffect } from 'react';
import ImagenNosotros from '../image/nosotros.jpeg';
import ImagenPasBY from '../image/PasBlasYiya.jpeg';
import ImagenPasJR from '../image/PasJoseRosa.jpeg';
import ImagenPasJI from '../image/PasJulioIvon.jpeg';
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
      { threshold: 0.5 }
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
            fundamenta en los valores bíblicos, la oración y el servicio a la comunidad.
          </p>
        </div>

        {/* Imagen */}
        <div className="aboutus-image">
          <img
            src={ImagenNosotros}
            alt="Sobre Nosotros"
          />
        </div>
      </div>

      {/* Sección Misión, Visión y Lo que Hacemos */}
<div className="mission-vision-section">
  <div className="section fade-in-trigger">
    <h2 className="section-title">Misión</h2>
    <p>
      Somos una comunidad viva, sin ánimo de lucro, que proclama, practica y enseña el evangelio de fe y poder, formando discípulos para Nuestro Señor Jesucristo, quien es el único mediador entre Dios y los hombres, con el fin de bendecir a Colombia y a las naciones.
    </p>
  </div>
  <div className="section fade-in-trigger">
    <h2 className="section-title">Visión</h2>
    <p>
      Desarrollar un avivamiento espiritual permanente que genere crecimiento integral en las personas para la gloria de Dios.
    </p>
  </div>
  <div className="section fade-in-trigger">
    <h2 className="section-title">Lo que hacemos</h2>
    <p>
      Somos una entidad sin ánimo de lucro, reconocida por el Estado Colombiano que propende por la difusión del evangelio en Colombia y en otros países del mundo. El trabajo realizado desde 1975 ha sido guiado por Dios bajo principios y valores que nos han permitido desarrollar nuestra labor.
    </p>
  </div>
</div>

      <div className="divider-line"></div>
      {/* Sección de Biografías */}
      <div className="biographies-section">
        <div className="biography left fade-in-trigger">
          <img src={ImagenPasBY} alt="Pastores Blas y Yiya" />
          <div className="bio-text">
            <h3>Blas Antonio Pedrozo Florez y Ligia Molina de Pedrozo</h3>
            <p>
            Como visionarios y fundadores de la iglesia, los Pastores Blas y Ligia Pedrozo sembraron la semilla de lo que hoy es una vibrante comunidad de fe. Desde sus inicios, su pasión por el evangelio y su dedicación al servicio a Dios y a los demás guiaron cada paso. Su labor incansable y su amor por las almas marcaron el camino hacia el crecimiento espiritual y el bienestar de la comunidad. Son los pilares sobre los que se construyó esta iglesia, dejando un legado perdurable de fe, amor y compromiso con el Reino de Dios.
            </p>
          </div>
        </div>
        <div className="biography right fade-in-trigger">
          <img src={ImagenPasJR} alt="Pastores José y Rosa" />
          <div className="bio-text">
            <h3>Jose Herrera y Rosa Alicia Blanco</h3>
            <p>
            Los Pastores José y Rosa Blanco asumieron la batuta del ministerio con una unción fresca y renovada, continuando el trabajo iniciado por los fundadores. Con un corazón lleno de visión para el futuro y un profundo amor por la congregación, han fortalecido las bases de la iglesia, guiando a los fieles hacia una vida de crecimiento espiritual y unidad. Su liderazgo ha sido clave para la expansión de la obra y el avivamiento de la comunidad, siempre enfocándose en el discipulado, el amor fraternal y el servicio en el nombre de Cristo.
            </p>
          </div>
        </div>
        <div className="biography left fade-in-trigger">
          <img src={ImagenPasJI} alt="Pastores Julio e Ivon" />
          <div className="bio-text">
            <h3>Julio César López Muñoz e Ivonne Dalila Díaz De Oro</h3>
            <p>
            Con una visión hacia el futuro, los Pastores Julio e Ivonne representan la próxima generación de liderazgo en la iglesia. Jóvenes y llenos de fervor por la obra de Dios, están llamados a continuar la misión de sus predecesores y llevar la iglesia a nuevas alturas. Con un corazón lleno de pasión por los jóvenes y por alcanzar a las nuevas generaciones, ellos tienen el llamado de Dios para seguir edificando sobre el legado que se les ha entregado, avanzando con la fe puesta en un futuro lleno de esperanza y transformación para la comunidad.
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default AboutUs;
