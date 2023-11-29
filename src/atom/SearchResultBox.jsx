// SearchResultBox.jsx

import React, { useState } from "react";
import '../style/SearchResultBox.css';

const SearchResultBox = ({ product, onProductFocus, onShowMap }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleProductClick = () => {
    setIsFocused(!isFocused);
    onProductFocus(product.id);
  };

  const handleShowMap = () => {
    // 검색 결과 창을 닫고, 상품의 Coordinates를 기준으로 MapComponent에 Marker를 출력하는 함수
    onShowMap(product.coordinates);
  };

  return (
    <div className={`search-result-box ${isFocused ? "focused" : ""}`} onClick={handleProductClick}>
      <img src={product.imageURL} alt={product.name} className="product-image" />
      <div className="product-details">
        <p className="product-name">{product.name}</p>
        <p className="product-price">가격: {product.price}원</p>
        {isFocused && (
          <button onClick={handleShowMap} className="search-flot button home">
            지도에 상품 위치 띄우기
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchResultBox;