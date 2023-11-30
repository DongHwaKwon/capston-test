// SearchBar.js

import React, { useState, useRef } from "react";
import SearchResults from "./SearchResults";
import ProductData from "../atom/productdata"; // productsData.js 파일에서 필요한 경로로 조정

const SearchBar = ({ onProductDetails }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(ProductData);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMarkerVisible, setIsMarkerVisible] = useState(false);
  const inputRef = useRef(null);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const filteredResults = products.filter(product =>
      product.name.includes(query)
    );
    setSearchResults(filteredResults);

    setShowResults(query.length > 0);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  const handleProductFocus = (productId) => {
    const product = products.find(p => p.id === productId);
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
          onFocus={() => {
            setIsMarkerVisible(false);
          }}
          ref={inputRef}
        />
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
