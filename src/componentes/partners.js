import React from 'react';
import LogoFortalecidos from '../logo/logofortalecidos.png';
import LogoCicc from '../logo/cicc.png';
import LogoIbps from '../logo/ibps.png';
import LogoCcc from '../logo/ccc.png';
import LogoUnisymes from '../logo/unisymes.png';
import './styles.css';

const Partners = () => {
  // Lista de logos, agrega más URLs si es necesario
  const logos = [
    LogoFortalecidos,
    LogoCicc,
    LogoIbps,
    LogoCcc,
    LogoUnisymes
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} className="partner-logo" />
        ))}
      </div>
    </section>
  );
};

export default Partners;