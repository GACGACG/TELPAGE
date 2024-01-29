"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map({ coordinates, campus, address, campusName }) {
    return (
        <div>
            <h2>Ubicación {campusName}</h2>
            <MapContainer className="map" center={coordinates} zoom={17} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coordinates}>
                    <Popup>
                        Universidad Técnica Federico Santa María - {campus}
                        <br />
                        {address}
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default Map;