import React, { useState } from "react";
import LogoFacebook from '../../logo/facebookinscripciones.png';
import LogoIg from '../../logo/instagraminscripciones.png';
import "../styles.css";

const Inscripciones = () => {
  const [formData, setFormData] = useState({
    curso: '',
    nombreCompleto: '',
    correo: '',
    telefono: '',
    sexo: '',
    edad: '',
    comentario: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/inscripcioncurso", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Inscripción a curso exitosa");
        setFormData({
          curso: '',
          nombreCompleto: '',
          correo: '',
          telefono: '',
          sexo: '',
          edad: '',
          comentario: '',
        });
      })
      .catch((error) => {
        console.error("Error al enviar la inscripción:", error);
      });
  };

  return (
    <section className="inscripciones-section">
      <div className="inscripciones-grid">
        <div className="datos-contacto">
          <h2 className="datos-contacto-title">Datos de Contacto</h2>
          <p className="contacto-item">
            <strong>Dirección:</strong> Calle 18 #11-114 B. Gaitán
          </p>
          <p className="contacto-item">
            <strong>Teléfono:</strong> +57 316 472 78 14
          </p>
          <p className="contacto-item">
            <strong>Correo:</strong> webivbcc@gmail.com
          </p>
          <p className="contacto-item">
            <strong>Horario de Oficina:</strong> Lunes a Viernes, 8:00 AM - 5:00 PM
          </p>

          <p className="strong-siguenos"><strong>Siguenos en nuestras redes sociales:</strong></p>
          <br></br>
          <a href="https://www.facebook.com/p/Iglesia-Valle-De-Bendici%C3%B3n-Cruzada-Cristiana-100064649477817/" target="_blank" rel="noopener noreferrer">
              <img src={LogoFacebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/iglesiavalledebendicion?igsh=ZTBrOHAzanM1NjFr" target="_blank" rel="noopener noreferrer">
              <img src={LogoIg} alt="Instagram" className="social-icon" />
            </a>
        </div>
        <div className="formulario-container">
          <h2 className="formulario-title">Formulario de Inscripciones</h2>
          <form className="inscripciones-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="curso">
                Selecciona una opción<span className="required">*</span>
              </label>
              <select
                id="curso"
                name="curso"
                value={formData.curso}
                onChange={handleChange}
                required
              >
                <option value="" disabled>-- Seleccione su curso--</option>
                <option value="cefi">CEFI</option>
                <option value="ibps">IBPS</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nombreCompleto">
                Nombre<span className="required">*</span>
              </label>
              <input
                type="text"
                id="nombreCompleto"
                name="nombreCompleto"
                value={formData.nombreCompleto}
                onChange={handleChange}
                placeholder="Nombre completo"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo">
                Correo Electrónico<span className="required">*</span>
              </label>
              <input
                type="email"
                id="correo"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">
                Teléfono<span className="required">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="123-456-7890"
                required
              />
            </div>
            <div className="form-group sexo-edad">
              <div className="sexo-container">
                <label htmlFor="sexo">
                  Sexo<span className="required">*</span>
                </label>
                <select
                  id="sexo"
                  name="sexo"
                  value={formData.sexo}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>-- Seleccione --</option>
                  <option value="f">F</option>
                  <option value="m">M</option>
                </select>
              </div>
              <div className="edad-container">
                <label htmlFor="edad">
                  Edad<span className="required">*</span>
                </label>
                <input
                  type="number"
                  id="edad"
                  name="edad"
                  value={formData.edad}
                  onChange={handleChange}
                  placeholder="Edad"
                  required
                  min="0"
                  max="120"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="comentario">Comentarios</label>
              <textarea
                id="comentario"
                name="comentario"
                value={formData.comentario}
                onChange={handleChange}
                rows="4"
                placeholder="Escribe tus comentarios aquí"
              ></textarea>
            </div>
            <button /* type="submit" */ className="inscripciones-button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inscripciones;