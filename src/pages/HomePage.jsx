// HomePage.jsx
import React, { useState } from 'react';
import '../style/Homestyle.css';
import SearchBar from '../form/SearchBar';
import MapComponent from '../form/MapComponent';

const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductDetails = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="home-container">
      <SearchBar onProductDetails={handleProductDetails} />
      <div className="home-content">
        <MapComponent isMarkerVisible={selectedProduct !== null} product={selectedProduct} />
      </div>
    </div>
  );
};

export default HomePage;