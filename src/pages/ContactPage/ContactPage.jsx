import { MapContainer, TileLayer, useMap } from 'react-leaflet';

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
                    I am interested in freelance opportunities and working on startups. I am especially intrested in projects that aim to improve our everyday lives. If you have any requests or questions, don't hesitate to contact me on LinkedIn.
                    </p>
                </div>
                <div className="map-container">
                    <MapContainer center={[51,0]} zoom={13}>
                        <TileLayer attribution='contributer'/>
                    </MapContainer>
                </div>
            </div>
        </div>
    );
}