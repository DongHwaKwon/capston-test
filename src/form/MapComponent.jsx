// MapComponent.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Map from '../atom/Map';
import Marker from '../atom/Marker';

const MapComponent = ({ isMarkerVisible, product }) => {
  const [markers, setMarkers] = useState([]);

  const handleRemoveMarker = (removedProduct) => {
    setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.product !== removedProduct));
  };

  return (
    <div className="map-container">
      <Map />
      {isMarkerVisible && (
        <Marker coordinates={product.coordinates} product={product} onRemove={handleRemoveMarker} />
      )}
    </div>
  );
};

MapComponent.propTypes = {
  isMarkerVisible: PropTypes.bool.isRequired,
  product: PropTypes.shape({
    coordinates: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

export default MapComponent;
