import React from 'react';
import ImagenMiercoles from '../image/Miercoles.jpeg';
import ImagenAyuno from '../image/Ayuno.jpeg';
import ImagenDomingo from '../image/Domingo.jpeg';
import './styles.css';

const Events = () => {
  const events = [
    {
      title: 'Miércoles de fé y poder',
      description: 'Un evento especial para jóvenes donde se impartirán talleres y predicaciones.',
      image: ImagenMiercoles
    },
    {
      title: 'Ayuno congregacional',
      description: 'Únete a un tiempo especial de ayuno y oración en nuestra casa, tu casa.',
      image: ImagenAyuno
    },
    {
      title: 'Dominicales',
      description: 'Un tiempo para disfrutar de la presencia de Dios y seguir preparándonos para conquistar sus promesas.',
      image: ImagenDomingo
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;