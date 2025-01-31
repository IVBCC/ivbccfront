import React from "react";
import "../styles.css";

const FormularioInscripcionMinisterio = ({ isOpen, onClose }) => {

    return (
        <>

            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>INSCRIPCIÓN A MINISTERIO</h2>
                        <form className="modal-form">
                            <input type="text" placeholder="Cédula" required />
                            <input type="text" placeholder="Nombre Completo" required />
                            <input type="number" placeholder="Edad" required />
                            <input type="tel" placeholder="Celular" required />
                            <select required>
                                <option value="">Seleccione Ministerio</option>
                                <option value="alabanza">Alabanza</option>
                                <option value="danza">Danza</option>
                                <option value="medios">Medios</option>
                                <option value="ujier">Ujier</option>
                                <option value="aseo">Aseo</option>
                                <option value="maestro">Maestro(a)</option>
                            </select>
                            <button type="submit" className="submit-button">
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
