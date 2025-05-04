import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../styles.css";
import "../leaflet/leafletIconFix";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

export default function InfoRegionModals({ isOpen, onClose, iglesias  }) {
    if (!isOpen) return null;

    const bounds = L.latLngBounds(iglesias.map(i => i.coords));
    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-btn" onClick={onClose}>✖</button>
                <h2>Iglesias </h2>
                <MapContainer bounds={bounds} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    {iglesias.map((iglesia, idx) => (
                        <Marker key={idx} position={iglesia.coords}>
                            <Popup>{iglesia.nombre}</Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
}