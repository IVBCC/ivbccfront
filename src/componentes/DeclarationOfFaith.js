import React from "react";
import "./styles.css";

const DeclarationOfFaith = () => {
  const faithDeclarations = [
    "La plena inspiración por el Espíritu Santo de las Sagradas Escrituras como regla única e infalible de fe y conducta.",
    "El Eterno Dios Padre, Dios Hijo, y Dios Espíritu Santo; Dios en tres Personas",
    "La plenitud de la Deidad y Realeza de nuestro Señor Jesucristo y su verdadera humanidad impecable.",
    "Que el Señor Jesucristo fue engendrado por el Espíritu Santo, siendo María virgen.",
    "La muerte sustitutiva y expiatoria de nuestro Señor Jesucristo en la Cruz.",
    "Que el Señor Jesucristo resucitó de entre los muertos con un cuerpo glorificado y que volverá en poder y gran gloria.",
    "La salvación por gracia soberana de Dios, alcanzada por medio de la fe en nuestro Señor Jesucristo.",
    "Que solamente hay dos lugares como destino eterno del ser humano: El Cielo para los redimidos por el Señor Jesucristo y el infierno para los que lo rechacen.",
    "Que la regeneración del ser humano es por el Espíritu Santo y la Palabra de Dios.",
    "La unidad espiritual de todos los redimidos por la Sangre del Señor Jesucristo.",
    "La necesidad de mantener conforme al Evangelio, la pureza de la Iglesia en doctrina y conducta.",
    "La necesidad de mantener conforme al Evangelio, la pureza de la Iglesia en doctrina y conducta."
  ];

  return (
    <section className="faith-section">
      <h2 className="faith-title">DECLARACIÓN DE FÉ</h2>
      <h3 className="faith-h3">LA IGLESIA CRUZADA CRISTIANA,
      TIENE COMO BASE FUNDAMENTAL LAS SAGRADAS ESCRITURAS Y LA SIGUIENTE DECLARACIÓN DE FÉ:</h3>
      <div className="faith-container">
        {faithDeclarations.map((text, index) => (
          <div className="faith-item" key={index}>
            <span className="faith-number">{index + 1}.</span>
            <p className="faith-text">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeclarationOfFaith;
