import React from "react";
import LogoUnisymes from '../../logo/logounisymes.png';
import ImageRemotoIbps from '../../image/remotoibps.webp';
import ImageVirtualIbps from '../../image/virtualibps.webp';
import "../styles.css";

const IBPS = () => {
  return (
    <div className="ibps-page">
      {/* Logo */}
      <section className="ibps-logo">
        <img
          src={LogoUnisymes}
          alt="Logo IBPS"
          className="ibps-logo-img"
        />
      </section>

      {/* Título */}
      <section className="ibps-title-section">
        <h1 className="ibps-main-title">INSTITUTO BÍBLICO PATRICIO SYMES
        </h1>
      </section>

      {/* Texto */}
      <section className="ibps-intro-text">
        <p>
          Formación integral para el ministerio y servicio en la obra de Dios en las diferentes áreas como: Biblia, Teología, Sociales, educación Cristiana, Apologética, Ministerios, Liderazgo e Investigación.
        </p>
      </section>

      {/* Dos imágenes centradas */}
      <section className="ibps-images-section">
        <div className="ibps-images-container">
          <img
            src={ImageRemotoIbps}
            alt="Estudiantes del IBPS"
            className="ibps-image"
          />

          <img
            src={ImageVirtualIbps}
            alt="Clases del IBPS"
            className="ibps-image"
          />
        </div>
      </section>

      {/* Pregunta */}
      <section className="ibps-question">
        <h2 className="ibps-question-title">¿Que es el IBPS?</h2>
      </section>

      {/* Otro texto */}
      <section className="ibps-more-text">
        <p>
          El Instituto Bíblico Patricio Symes IBPS es una institución sin ánimo de lucro que desarrolla su actividad con el auspicio de la Iglesia Cruzada Cristiana. Lleva el nombre de uno de los pioneros de la evangelización en Colombia, el misionero australiano Patricio Symes, que arribó a nuestro país en 1933. El es un ejemplo desafiante para la fe cristiana. en pro de la evangelización y el crecimiento integral de los pastores y líderes.
        </p>
        <br></br>
        <p>El IBPS continua con este legado.
          capacitando para cumplir con excelencia el mandato de la Gran Comisión</p>
      </section>

      {/* Botón de contáctanos */}
      <section className="ibps-contact-button-section">
        <button className="ibps-contact-button">          
          <a href="https://wa.me/+573187166545" target="" rel="noopener noreferrer">Contáctanos</a>
        </button>
      </section>

      {/* Correo y Teléfono */}
      <section className="ibps-contact-info">
        <p className="ibps-email">Escríbenos:
          ibps@unisymes.edu.co</p>
        <p className="ibps-phone">Llámanos:
          +57 316 472 78 14</p>
      </section>
    </div>
  );
};

export default IBPS;