import React from 'react';
import ImagenPrincipal from '../../image/conzauliglesia2.1.png';
import ImagenConsagracion from '../../image/consagracion.jpeg';
import ImagenMeet from '../../image/meet.jpeg';
import VideoMujeres from '../../video/mujeres.mp4';
import '../styles.css';

function Publicaciones() {
    return (
        <>
            {/* Banner de Publicaciones */}
            <section className="publicaciones-banner">
                <img
                    src={ImagenPrincipal}
                    alt="Banner Publicaciones"
                    className="banner-image"
                />
                <div className="banner-overlay">
                    <h1 className="banner-title">Publicaciones</h1>
                </div>
            </section>

            {/* Sección de Noticias y Videos */}
            <div className="publicaciones-content">
                {/* Noticias Destacadas */}
                <section className="noticias-section">
                    <h2>Publicaciones Destacadas</h2>
                    <br />
                    {/* Tarjetas */}
                    <div className="tarjetas-container">
                        {/* Tarjeta 1 */}
                        <div className="tarjeta">
                            <img
                                src={ImagenConsagracion}
                                alt="Consagracion"
                                className="tarjeta-image"
                            />
                            <h2 className="tarjeta-subtitulo">Consagración</h2>
                            <p className="tarjeta-descripcion">
                                La consagración es dedicar tu vida a un propósito superior, alineando tus acciones con la voluntad de Dios. Requiere dejar de lado las distracciones y enfocarse en el crecimiento espiritual.
                                A través de la consagración, encontraremos claridad y fuerza para cumplir nuestro propósito en Él. Pero sobre todo este compromiso transformará tu relación con Dios profundizando tu fe
                            </p>
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="tarjeta">
                            <img
                                src={ImagenMeet}
                                alt="Tiempo de conquista"
                                className="tarjeta-image"
                            />
                            <h2 className="tarjeta-subtitulo">TIEMPO DE CONQUISTA</h2>
                            <p className="tarjeta-descripcion">
                                TIEMPO DE CONQUISTA La Iglesia Valle de Bendición Cruzada Cristiana te invita a unirte a la plataforma de Oración 5:00 AM en Google Meet, haz clic en este botón:
                            </p>

                            {/* Botón Ir a Meet */}
                            <a href="https://meet.google.com/vev-ewhz-ymo" target="_blank" rel="noopener noreferrer">
                                <button className="meet-button">Ir a Meet</button>
                            </a>
                        </div>

                        {/* Tarjeta 3 */}
                        {/* <div className="tarjeta">
                            <img
                                src=''
                                alt="Inscripciones"
                                className="tarjeta-image"
                            />
                            <h2 className="tarjeta-subtitulo">Inscripciones Ministerio</h2>
                            <p className="tarjeta-descripcion">
                                ¿Quieres ser parte de un ministerio? ¡Inscríbete ahora y sé parte de nuestra misión!
                            </p>
                        </div> */}
                    </div>
                </section>

                {/* Sección de Videos */}
                <section className="videos-section">
                    {[
                        {
                            title: "Dominicales",
                            src: "https://www.youtube.com/embed/n2xU4Lvwo7I",
                            description: "Bienvenidos a nuestra transmision. Domingos de palabra poderosa, comparte con amigos y familiares"
                        },
                        {
                            title: "Miércoles de estudio bíblico",
                            src: "https://www.youtube.com/embed/GtR9vCxBhvU",
                            description: "Bienvenidos a nuestra transmision. TIEMPO DE CONQUISTA. Miércoles de estudio bíblico, APRENDAMOS DEL LIBRO DE JOSUÉ. Comparte con amigos y familiares de YouTube."
                        }
                    ].map((video, index) => (
                        <div key={index} className="video-card">
                            <h3>{video.title}</h3>
                            <iframe
                                className="video-frame"
                                src={video.src}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                            <p>{video.description}</p>
                        </div>
                    ))}

                    <div className="video-card">
                        <h3>Conferencia para Mujeres</h3>
                        <video width="100%" controls>
                            <source src={VideoMujeres} type="video/mp4" />
                        </video>
                        <p>Un evento especial para mujeres, lleno de enseñanza y fe.</p>
                    </div>
                </section>

            </div>
        </>
    );
}

export default Publicaciones;
