import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Heart } from 'lucide-react'; // Librería ligera para íconos
import Imagen1iglesia from '../../image/conazuliglesia.jpg';
import Imagen2iglesia from '../../image/fondo.jpg';
import Imagen3iglesia from '../../image/ministerioalabanza.jpg';
import ImagenNuevaIglesia from '../../image/todalaiglesia.jpeg';
import ImagenCanasta from '../../image/tetocaati.jpeg';
import ImagenMinisterio from '../../image/Ayuno.jpeg';
import "../styles.css";

const Noticias = () => {
  const carouselImages = [
    Imagen1iglesia, // Reemplaza con las URLs de tus imágenes
    Imagen2iglesia,
    Imagen3iglesia,
  ];

  // Estado del contador de "Me gusta"
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  // Manejar el click del corazón
  const handleHeartClick = () => {
    setLiked(!liked);
    setLikes(prevLikes => (liked ? prevLikes - 1 : prevLikes + 1));
  };


  return (
    <section className="noticias-section">
      {/* Título */}
      <h1 className="noticias-title">Noticias</h1>

      {/* Carrusel */}
      <div className="carousel-container">
        <Carousel
          additionalTransfrom={0}
          autoPlay
          autoPlaySpeed={3000}
          centerMode={false}
          infinite
          arrows={false}
          responsive={{
            superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 1 },
            desktop: { breakpoint: { max: 1024, min: 768 }, items: 1 },
            tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
        >
          {carouselImages.map((image, index) => (
            <img key={index} src={image} alt={`Carousel ${index + 1}`} />
          ))}
        </Carousel>
      </div>

      {/* Descripción */}
      <p className="noticias-description">
        Bienvenido a nuestra sección de noticias. Aquí encontrarás las últimas actualizaciones,
        eventos y actividades importantes relacionadas con nuestra comunidad.
      </p>

      {/* Tarjetas */}
      <div className="tarjetas-container">
        {/* Tarjeta 1 */}
        <div className="tarjeta">
          <img
            src={ImagenNuevaIglesia}
            alt="Nueva iglesia"
            className="tarjeta-image"
          />
          <h2 className="tarjeta-subtitulo">Nueva Iglesia</h2>
          <p className="tarjeta-descripcion">
            ¡Estamos emocionados de anunciar la apertura de una nueva iglesia! Únete a nosotros
            para celebrar este gran logro.
          </p>
        </div>

        {/* Tarjeta 2 */}
        <div className="tarjeta">
          <img
            src={ImagenCanasta}
            alt="Canasta de amor"
            className="tarjeta-image"
          />
          <h2 className="tarjeta-subtitulo">Canasta Familiar</h2>
          <p className="tarjeta-descripcion">
            Haz parte de nuestra campaña Canasta de Amor, donde bendecimos a familias de nuestra congregación y mostramos el amor de Dios hacia los demás. !Bendice con un alimento no perecedero!
          </p>
          {/* Corazón interactivo */}
          <div className="reaction-container" onClick={handleHeartClick}>
            <Heart color={liked ? 'red' : 'gray'} fill={liked ? 'red' : 'none'} />
            <span className="like-counter">{likes}</span>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="tarjeta">
          <img
            src={ImagenMinisterio}
            alt="Inscripciones"
            className="tarjeta-image"
          />
          <h2 className="tarjeta-subtitulo">Inscripciones Ministerio</h2>
          <p className="tarjeta-descripcion">
            ¿Quieres ser parte de un ministerio? ¡Inscríbete ahora y sé parte de nuestra misión!
          </p>
          <button className="tarjeta-boton">Inscribirme</button>
        </div>
      </div>
    </section>
  );
};

export default Noticias;
