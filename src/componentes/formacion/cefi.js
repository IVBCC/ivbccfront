import React, { useState } from 'react';
import cefi1 from '../../image/cefi1.jpeg';
import cefi2 from '../../image/cefi2.jpeg';
import cefi3 from '../../image/cefi3.jpeg';
import cefi4 from '../../image/cefi4.jpeg';
import '../styles.css';

const CEFI = () => {

  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    { question: "¿Cómo descargo el material?", answer: "Haz clic en el botón Descargar para obtener el material." },
    { question: "¿El material es gratuito?", answer: "¡Haz clic en el botón Descargar y averigualo!" },
    { question: "¿Qué temas se cubren?", answer: "Se cubren temas clave para mejorar tu desempeño en el ICFES." },
  ];


  return (
    <div className="cefi-section">
      <h1 className="cefi-title">MATERIAL DE CEFI</h1>
      <div className="material-grid">
        {/* Primer Material */}
        <div className="material-item">
          <img src={cefi1} alt="Material 1" />
          <h3 className="material-subtitle">Mi Nueva Vida</h3>
          <p className="material-text">
            Tiene los temas necesarios para que la persona que acepta a Jesús como Su Señor y Salvador, empiece a conocer y aplicar en su vida las bases cristianas que lo llevará a tener una vida victoriosa en Cristo. Encontrará enseñanzas como: El nuevo nacimiento, la Biblia, el Bautismo en agua, Dios y Sus valores, entre otros.
          </p>
          <button className="download-button">Descargar</button>
        </div>

        {/* Segundo Material */}
        <div className="material-item">
          <img src={cefi2} alt="Material 2" />
          <h3 className="material-subtitle">Creciendo en mi FE</h3>
          <p className="material-text">
            Entrena, desafía y da una guía completa para tener una relación íntima con Dios. Enseñanzas como: La Trinidad, sanidad interior, bautismo, obediencia, rompiendo maldiciones, entre otras, estas, le permitirán llevar una vida de fe y abundancia en Dios.
          </p>
          <button className="download-button">Descargar</button>
        </div>

        {/* Tercer Material */}
        <div className="material-item">
          <img src={cefi3} alt="Material 3" />
          <h3 className="material-subtitle">Desarrollando el Propósito de Dios</h3>
          <p className="material-text">
            Capacita al creyente con las herramientas básicas para que pueda ganar a otros para Cristo. También es la orientación y procedimientos de la estrategia usada por la Iglesia Cruzada Cristiana, denominada “Ruta de Crecimiento” para apertura de grupos y nuevas iglesias.
          </p>
          <button className="download-button">Descargar</button>
        </div>

        {/* Cuarto Material */}
        <div className="material-item">
          <img src={cefi4} alt="Material 4" />
          <h3 className="material-subtitle">Líder de Excelencia</h3>
          <p className="material-text">
            Brinda a cada creyente los principios de liderazgo. A través de enseñanzas como: El líder y su familia, la toalla del servicio, dones y ministerios, consejería, entre otros le permitirá desarrollar el llamado que Dios le haya hecho para la edificación del cuerpo de Cristo.
          </p>
          <button className="download-button">Descargar</button>
        </div>
      </div>
      <div className="faq-section">
        <h2 className='question-h2'>Preguntas Frecuentes</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item" onClick={() => toggleFAQ(index)}>
            <h3>{faq.question}</h3>
            {open === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CEFI;

