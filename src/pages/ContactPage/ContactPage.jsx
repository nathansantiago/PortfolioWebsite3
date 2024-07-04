import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import  './ContactPage.scss';

export default function ContactPage() {
    return (
        <div className="text-zone">
            <div className="contact-page-container">
                <div className="text-container">
                    <h1>
                        <div className="line">
                            <span className="word">
                                <span className="letter">C</span>
                                <span className="letter">o</span>
                                <span className="letter">n</span>
                                <span className="letter">t</span>
                                <span className="letter">a</span>
                                <span className="letter">c</span>
                                <span className="letter">t</span>
                            </span>
                            <span className="word">
                                <span className="letter">M</span>
                                <span className="letter">e</span>
                            </span>
                        </div>
                    </h1>
                    <p>
                    I am interested in freelance opportunities and working on startups. I am particularly interested in projects that aim to improve our everyday lives. If you have any requests or questions, don't hesitate to contact me on LinkedIn.
                    </p>
                </div>
                <div className="map-container">
                    <MapContainer center={[35.9132, -79.0558]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[35.9132, -79.0558]}>
                            <Popup>
                                I currently live in the Chapel Hill area and study at UNC.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}