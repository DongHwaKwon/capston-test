// Marker.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MarkerDetail from './MarkerDetail';
import markerImage from '../img/marker2.png';

const Marker = ({ coordinates, product, onRemove }) => {
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  const handleMarkerClick = () => {
    setIsDetailVisible(true);
  };

  const handleDetailClose = () => {
    setIsDetailVisible(false);
  };

  const handleRemove = () => {
    onRemove(product);
    setIsDetailVisible(false);
  };

  return (
    <div className="marker-container" style={{ position: 'absolute', left: `${coordinates.x}%`, top: `${coordinates.y}%` }}>
      <div className="marker" onClick={handleMarkerClick}>
        <img
          src={markerImage}
          alt="표시"
          className="marker"
          style={{
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
      {isDetailVisible && (
        <MarkerDetail product={product} onClose={handleDetailClose} onRemove={handleRemove} />
      )}
    </div>
  );
};

Marker.propTypes = {
  coordinates: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Marker;
