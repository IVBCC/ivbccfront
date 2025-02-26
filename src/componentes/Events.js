import React from 'react';
import ImagenMiercoles from '../image/Miercoles.jpeg';
import ImagenAyuno from '../image/Ayuno.jpeg';
import ImagenDominical from '../image/Dominical.jpeg';
import LogoFacebook from '../logo/facebookinscripciones.png';
import LogoYoutube from '../logo/youtubeivb.png';
import './styles.css';

const Events = () => {
  const events = [
    {
      title: 'Miércoles de fé y poder',
      description: 'Ven y juntos adoremos y seamos testigos del amor y el poder de Dios en medio nuestro, mientras estudiamos su palabra.',
      image: ImagenMiercoles
    },
    {
      title: 'Ayuno congregacional',
      description: 'Únete a un tiempo especial de ayuno y oración en nuestra casa, tu casa.',
      image: ImagenAyuno
    },
    {
      title: 'Dominicales',
      description: 'Un tiempo para disfrutar de la presencia de Dios y seguir preparándonos para conquistar sus promesas. ¡Conéctate a nuestros lives!',
      image: ImagenDominical,
      showIcons: true
    },
  ];

  return (
    <section className="events-section">
      <h4>Anuncios</h4>
      <h2>Agendate con nosotros</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event-item">
            <img src={event.image} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            {event.showIcons && (
              <div className="event-icons">
                <a href="https://www.facebook.com/p/Iglesia-Valle-De-Bendici%C3%B3n-Cruzada-Cristiana-100064649477817/" target="_blank" rel="noopener noreferrer">
                  <img src={LogoFacebook} alt="Facebook" className="social-icon" />
                </a>
                
                <a href="https://www.youtube.com/@iglesiavalledebendicioncru4554" target="_blank" rel="noopener noreferrer">
                  <img src={LogoYoutube} alt="YouTube" className="social-icon" />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;