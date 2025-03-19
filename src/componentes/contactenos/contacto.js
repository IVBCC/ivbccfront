import React from "react";
import "../styles.css";
import ImagenMapa from '../../image/fondo.jpg';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h1 className="contacto-titulo">Contáctenos</h1>
      <div className="contacto-contenido">
        {/* Columna Izquierda: Formulario */}
        <div className="contacto-formulario">
          <form className="contacto-form">
            <label>Nombre completo:</label>
            <input type="text" placeholder="Ingrese su nombre" required />

            <label>Correo Electrónico:</label>
            <input type="email" placeholder="Ingrese su correo" required />

            <label>Teléfono o celular:</label>
            <input type="number" placeholder="+57" required />

            <label>Iglesia ICC:</label>
            <input type="text" placeholder="¿A qué iglesia perteneces?" required />

            <label>Mensaje:</label>
            <textarea placeholder="Escriba su mensaje" required></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>

        {/* Columna Derecha: Mapa + Imagen */}
        <div className="contacto-info">          
          <iframe
            title="Ubicación de la iglesia"
            className="contacto-mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d626.6082462884138!2d-73.2498065!3d10.4709311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8ab9b9ff9ae8f9%3A0x25576ea2d85a6aea!2sIglesia%20Valle%20De%20Bendicion%20Cruzada%20Cristiana!5e0!3m2!1ses!2sco!4v1708212345678"            
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <br></br>
          <img src={ImagenMapa} alt="Oficina" className="contacto-imagen" />
        </div>
      </div>
    </div>
  );
};

export default Contacto;