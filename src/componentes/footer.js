import React from 'react';
import LogoUbicacion from '../logo/ubicacion1.png';
import LogoTelefono from '../logo/mobile.png';
import LogoEmail from '../logo/email.png';
import LogoFacebook from '../logo/facebook.png';
import LogoYoutube from '../logo/youtube.png';
import LogoIg from '../logo/ig.png';
import LogoWpp from '../logo/wpp.png';
import LogoVB from '../logo/logoblanco.png';

import './styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <div className="contact-logo">
            <img
              src={LogoVB} /* Ruta de la imagen */
              alt="Logo Cruzada Cristiana"
            />
          </div>
          <div className="footer-contact-item">
            <img src={LogoUbicacion} alt="Dirección" className="contact-icon" />
            <p>Valledupar, Colombia</p>
            <p> - Calle 18 #11-114 B. Gaitán
            </p>
          </div>
          <div className="footer-contact-item">
            <img src={LogoTelefono} alt="Teléfono" className="contact-icon" />
            <p>+57 123 456 7890
            </p>
          </div>
          <div className="footer-contact-item">
            <img src={LogoEmail} alt="Email" className="contact-icon" />
            <p>webivbcc@gmail.com
            </p>
          </div>
        </div>


        {/* Sección de redes sociales */}
        <div className="footer-column">
          <h3>Síguenos</h3>
          <div className="footer-socials">
            <a href="https://www.facebook.com/p/Iglesia-Valle-De-Bendici%C3%B3n-Cruzada-Cristiana-100064649477817/" target="_blank" rel="noopener noreferrer">
              <img src={LogoFacebook} alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.youtube.com/@iglesiavalledebendicioncru4554" target="_blank" rel="noopener noreferrer">
              <img src={LogoYoutube} alt="YT" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/iglesiavalledebendicion?igsh=ZTBrOHAzanM1NjFr" target="_blank" rel="noopener noreferrer">
              <img src={LogoIg} alt="Instagram" className="social-icon" />
            </a>
            <a href="https://wa.me/+573187166545" target="_blank" rel="noopener noreferrer">
              <img src={LogoWpp} alt="WhatsApp" className="social-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Aviso de derechos reservados */}
      <div className="footer-bottom">
        <p>Copyright &copy; 2025 Cruzada Cristiana Valle de Bendición | Powered by Valle de Bendición</p>
      </div>
    </footer>
  );
};

export default Footer;