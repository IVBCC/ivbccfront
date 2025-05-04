import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import "../leaflet/leafletIconFix";
import 'leaflet/dist/leaflet.css';
import "../styles.css";
import InfoRegionModals from './infoRegionModal';
import DirectorioIglesias from '../iglesias/directorio/directorioIglesias';

const Iglesiacccolombia = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [iglesiasRegion, setIglesiasRegion] = useState([]);
    const [regiones, setRegiones] = useState([]);
    const [pdfsColombia, setPdfs] = useState([]);

    useEffect(() => {
        const fetchRegiones = async () => {
            try {
                const res = await fetch("https://ivbccserve.vercel.app/api/iglesias"); // Ajusta al endpoint real
                const data = await res.json();
                setRegiones(data);
            } catch (error) {
                console.error("Error al cargar las regiones:", error);
            }
        };
        fetchRegiones();
    }, []);
    useEffect(() => {
        const fetchPdfs = async () => {
            try {
                const res = await fetch("http://ivbccserve.vercel.app/api/iglesias/pdf/colombia");
                const data = await res.json();
                setPdfs(data);
            } catch (error) {
                console.error("Error al cargar los PDFs:", error);
            }
        };
        fetchPdfs();
    }, []);

    const abrirModal = (iglesias) => {
        setIglesiasRegion(iglesias);
        setModalOpen(true);
    };

    return (
        <section className="iglesias-colombia">
            <h1>Iglesias CC en Colombia</h1>
            <p className="subtitulo">Conoce iglesias Cruzada Cristiana en Colombia.</p>

            <div className="region-grid">
                {regiones.map((region, index) => (
                    <div className="region-card" key={index} onClick={() => abrirModal(region.iglesias)}>
                        <MapContainer
                            center={region.iglesias[0]?.coords || [4.5, -74]} // fallback
                            zoom={6}
                            style={{ height: "150px", width: "100%" }}
                            scrollWheelZoom={false}
                            dragging={false}
                            doubleClickZoom={false}
                            zoomControl={false}
                        >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {region.iglesias.map((iglesia, idx) => (
                                <Marker key={idx} position={iglesia.coords} />
                            ))}
                        </MapContainer>
                        <h2>{region.nombre}</h2>
                    </div>
                ))}
            </div>

            <InfoRegionModals
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                iglesias={iglesiasRegion}
            />
            <div>
                <DirectorioIglesias
                    pdfs={pdfsColombia}
                    titulo="Directorio de Iglesias CC en Colombia"
                    carpeta="colombia"
                />
            </div>
        </section>
    );
};

export default Iglesiacccolombia;