// Map.jsx
import React from 'react';
import '../style/MapComponent.css';
import mapImage from '../img/map_vol0.2.png';

const Map = () => (
  <img src={mapImage} alt="지도" className="map-image" />
);

export default Map;