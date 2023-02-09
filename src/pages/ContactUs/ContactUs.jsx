import React from "react";
import { Helmet } from "react-helmet-async";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "./ContactUs.css";

const ContactUs = () => {
  const position = [51.505, -0.09];

  return (
    <div>
      <Helmet>
        <title>ToriTorkari Bazar - Contact</title>
        <meta
          name="description"
          content="Contact information of the authority."
        />
      </Helmet>

      {/* Map */}
      <div>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>{position}</Popup>
          </Marker>
        </MapContainer>
      </div>

      {/* Contact form */}
      <div></div>
    </div>
  );
};

export default ContactUs;
