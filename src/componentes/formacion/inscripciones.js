import React from "react";
import LogoFacebook from '../../logo/facebookinscripciones.png';
import LogoIg from '../../logo/instagraminscripciones.png';
import "../styles.css";

const Inscripciones = () => {
  return (
    <section className="inscripciones-section">
      <div className="inscripciones-grid">
        {/* Sección de datos de contacto */}
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

          <p className="strong-siguenos"><strong className="">Siguenos en nuestras redes sociales:</strong></p>
          <br></br>
          <a href="https://www.facebook.com/p/Iglesia-Valle-De-Bendici%C3%B3n-Cruzada-Cristiana-100064649477817/" target="_blank" rel="noopener noreferrer">
              <img src={LogoFacebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/iglesiavalledebendicion?igsh=ZTBrOHAzanM1NjFr" target="_blank" rel="noopener noreferrer">
              <img src={LogoIg} alt="Instagram" className="social-icon" />
            </a>
        </div>
        {/* Formulario de inscripciones */}
        <div className="formulario-container">
          <h2 className="formulario-title">Formulario de Inscripciones</h2>
          <form className="inscripciones-form">
            {/* NUEVA SECCIÓN: Selector obligatorio */}
            <div className="form-group">
              <label htmlFor="opciones">
                Selecciona una opción<span className="required">*</span>
              </label>
              <select
                id="opciones"
                name="opciones"
                required
                defaultValue="" // Forzamos al usuario a elegir una opción
              >
                <option value="" disabled>-- Seleccione su curso--</option>
                <option value="cefi">CEFI</option>
                <option value="ibps">IBPS</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nombre">
                Nombre<span className="required">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
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
                placeholder="123-456-7890"
                required
              />
            </div>
            {/* NUEVO: Campo para seleccionar sexo y edad */}
            <div className="form-group sexo-edad">
              <div className="sexo-container">
                <label htmlFor="sexo">
                  Sexo<span className="required">*</span>
                </label>
                <select
                  id="sexo"
                  name="sexo"
                  required
                  defaultValue="" // Forzamos al usuario a elegir una opción
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
                  placeholder="Edad"
                  required
                  min="0"
                  max="120"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="comentarios">Comentarios</label>
              <textarea
                id="comentarios"
                name="comentarios"
                rows="4"
                placeholder="Escribe tus comentarios aquí"
              ></textarea>
            </div>
            <button type="submit" className="inscripciones-button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Inscripciones;
