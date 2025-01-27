import React from 'react';
import LogoFortalecidos from '../logo/logofortalecidos.png';
import LogoCicc from '../logo/cicc.png';
import LogoIbps from '../logo/ibps.png';
import LogoCcc from '../logo/ccc.png';
import LogoUnisymes from '../logo/unisymes.png';
import LogoCefi from '../logo/logocefi.png';
import './styles.css';

const Partners = () => {
  // Lista de logos con sus respectivas URLs
  const logos = [
    { src: LogoFortalecidos },
    { src: LogoCicc },
    { src: LogoIbps, url: 'https://ivbccfront.vercel.app/formacion/ibps' },
    { src: LogoCcc },
    { src: LogoUnisymes, url: 'https://unisymes.edu.co/' },
    { src: LogoCefi, url: 'https://ivbccfront.vercel.app/formacion/cefi' }
  ];

  return (
    <section className="partners-section">
      <div className="partners-container">
        {logos.map((logo, index) => (
          // Envolvemos cada <img> dentro de un <a> con su respectiva URL
          <a key={index} href={logo.url} rel="noopener noreferrer">
            <img src={logo.src} alt={`Logo ${index + 1}`} className="partner-logo" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Partners;