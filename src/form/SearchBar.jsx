// SearchBar.jsx
import React, { useState } from "react";
import SearchResults from "./SearchResults";
import appleimg1 from "../img/apple1.png";
import appleimg2 from "../img/apple2.png";
import VirtualKeyboard from '../atom/VirtualKeyboard'; // 수정: VirtualKeyboard import 추가

const SearchBar = ({ onProductDetails }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [allProducts, setAllProducts] = useState([
    { id: 1, name: "[엔비사과 4~6입/봉 (1.3kg내외)] 엔비사과 4~6입/봉 (1.3kg내외)", price: "16,900", imageURL: appleimg1, coordinates: { x: 0, y: 0 } },
    { id: 2, name: "[당도선별] 유명산지 청송사과 1.5kg (봉)", price: "16,900", imageURL: appleimg2, coordinates: { x: 100, y: 100 } },
  ]);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMarkerVisible, setIsMarkerVisible] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredResults = allProducts.filter(product =>
      product.name.includes(query)
    );
    setSearchResults(filteredResults);

    setShowResults(query.length > 0);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
    setSelectedProduct(null);
  };

  const handleProductFocus = (productId) => {
    const product = allProducts.find(p => p.id === productId);
    setSelectedProduct(product);
  };

  const handleCloseResults = () => {
    setShowResults(false);
    setSelectedProduct(null);
  };

  const onShowMap = () => {
    setShowResults(false);
    setSelectedProduct(null);
    setIsMarkerVisible(true);
    onProductDetails(selectedProduct);
  };

  return (
    <div className="search-container-home">
      <form onSubmit={handleSearchSubmit} className="form home">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="상품명 검색"
          className="input home"
          onFocus={() => setIsMarkerVisible(false)} // 수정: 검색창에 focus되면 Marker를 숨김
        />
        <VirtualKeyboard onProductDetails={onProductDetails} /> {/* 수정: VirtualKeyboard 추가 */}
        <button type="submit" className="button home">
          검색
        </button>
      </form>

      {showResults && (
        <>
          <SearchResults
            searchResults={searchResults}
            onProductFocus={handleProductFocus}
            onShowMap={onShowMap}
          />
          <button onClick={handleCloseResults} className="button home search-close">
            닫기
          </button>
        </>
      )}

    </div>
  );
};

export default SearchBar;
