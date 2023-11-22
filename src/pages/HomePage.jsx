import React from 'react';
import '../style/Homestyle.css';
import SearchBar from '../form/SearchBar';
import MapComponent from '../form/MapComponent';


const HomePage = () => {
  return (
    <div className="home-container">
        <SearchBar />
        <MapComponent />
    </div>
  );
};

export default HomePage;
