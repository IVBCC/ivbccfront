import React, { useState } from "react";
import "../styles.css";

const FormularioInscripcionMinisterio = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    cedula: '',
    nombreCompleto: '',
    edad: '',
    celular: '',
    ministerio: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://ivbccfront.vercel.app/noticias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Inscripción exitosa");
        setFormData({
          cedula: '',
          nombreCompleto: '',
          edad: '',
          celular: '',
          ministerio: '',
        });
        onClose(); // Cerrar modal
      })
      .catch((error) => {
        console.error("Error al enviar la inscripción:", error);
      });
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>INSCRIPCIÓN A MINISTERIO</h2>
            <form className="modal-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="cedula"
                placeholder="Cédula"
                value={formData.cedula}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="nombreCompleto"
                placeholder="Nombre Completo"
                value={formData.nombreCompleto}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="edad"
                placeholder="Edad"
                value={formData.edad}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="celular"
                placeholder="Celular"
                value={formData.celular}
                onChange={handleChange}
                required
              />
              <select
                name="ministerio"
                value={formData.ministerio}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione Ministerio</option>
                <option value="alabanza">Alabanza</option>
                <option value="danza">Danza</option>
                <option value="medios">Medios</option>
                <option value="ujier">Ujier</option>
                <option value="aseo">Aseo</option>
                <option value="maestro">Maestro(a)</option>
              </select>
              <button /* type="submit" */ className="submit-button">
                Enviar
              </button>
            </form>
            <button onClick={onClose} className="close-button">
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormularioInscripcionMinisterio;
