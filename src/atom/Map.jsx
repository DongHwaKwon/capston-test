// Map.jsx
import React from 'react';
import '../style/MapComponent.css';
const mapImage = '/img/map.png';

const Map = () => (
  <img src={mapImage} alt="지도" className="map-image" />
);

export default Map;