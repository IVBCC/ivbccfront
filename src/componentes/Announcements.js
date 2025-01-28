import React from 'react';
import Slider from 'react-slick'; // Importa React Slick
import './styles.css';

const Announcements = () => {
  // Imágenes para el carrusel
  const images = [
    require('../image/fondo.jpg'),
    require('../image/imagencarruselinicio.jpeg')
  ];

  // Configuración del carrusel
  const settings = {
    dots: true, // Muestra puntos de navegación
    infinite: false, // Hace que el carrusel sea infinito
    speed: 500, // Velocidad de transición (en ms)
    slidesToShow: 1, // Muestra una imagen a la vez
    slidesToScroll: 1, // Desplaza una imagen a la vez
    autoplay: true, // Desplazamiento automático
    autoplaySpeed: 3000, // Intervalo entre desplazamientos automáticos (en ms)
    arrows: true, // Incluye flechas de navegación
  };

  return (
    <section className="announcements-section">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Announcements;