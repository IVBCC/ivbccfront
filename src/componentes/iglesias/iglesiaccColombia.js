import React from "react";
import "../styles.css";
import regionCentro from "../../image/region central (2).png";
import regionAtlantico from "../../image/region atlantico.png";
import regionAndinaSur from "../../image/region andina sur.png";
import regionLlanos from "../../image/region llanos.png";
import regionNoroccidente from "../../image/region noroccidente.png";
import regionNororiente from "../../image/region nororiente.png";
import regionOccidente from "../../image/region occidente.png";
import regionPacifico from "../../image/region pacifico.png";
const iglesiacccolombia = () => {
    const regiones = [
        {
            nombre: "Región Central",
            imagen: regionCentro,
        },
        {
            nombre: "Región Atlántico",
            imagen: regionAtlantico,
        },
        {
            nombre: "Región Andina Sur",
            imagen: regionAndinaSur,
        },
        {
            nombre: "Región Llanos",
            imagen: regionLlanos,
        },
        {
            nombre: "Región Noroccidente",
            imagen: regionNoroccidente,
        },
        {
            nombre: "Región Nororiente",
            imagen: regionNororiente,
        },
        {
            nombre: "Región Occidente",
            imagen: regionOccidente,
        },
        {
            nombre: "Región Pacífico",
            imagen: regionPacifico,
        },
    ];

    return (
        <section className="iglesias-colombia">
            <h1>Iglesias CC en Colombia</h1>
            <p className="subtitulo">Conoce iglesias Cruzada Cristiana en Colombia.</p>
            {/* Agrega este contenedor para aplicar el grid */}
            <div className="region-grid">
                {regiones.map((region, index) => (
                    <div className="region-card" key={index}>
                        <img src={region.imagen} alt={region.nombre} />
                        <h2>{region.nombre}</h2>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default iglesiacccolombia;