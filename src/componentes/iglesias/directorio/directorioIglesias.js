import React, { useState } from 'react';
import "../../styles.css";

export default function DirectorioIglesias({ pdfs, titulo, carpeta }) {
    const [show, setShow] = useState(false);

    return (
        <>
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                <button className="directorio-button" onClick={() => setShow(true)}>
                    Directorio
                </button>
            </div>

            {show && (
                <div className="modal-overlay" onClick={() => setShow(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2 className='h2-iglesia'>{titulo || 'Directorio de Iglesias'}</h2>
                        <ul className="pdf-list">
                            {pdfs.map((pdf, index) => (
                                <li key={index}>
                                    <a
                                        href={`https://ivbccserve.vercel.app/pdf/${carpeta}/${pdf.archivo}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        📕 {pdf.nombre}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <button className="close-btn" onClick={() => setShow(false)}>
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}