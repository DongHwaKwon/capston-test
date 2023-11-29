// SearchResults.jsx

import React from "react";
import SearchResultBox from "../atom/SearchResultBox";

const SearchResults = ({ searchResults, onProductFocus, onShowMap, selectedProductId }) => {
  return (
    <div className="search-results-container">
      {searchResults.map((product, index) => (
        <SearchResultBox
          key={index}
          product={product}
          onProductFocus={onProductFocus}
          onShowMap={onShowMap}
          isSelected={selectedProductId === product.id} // isSelected 추가
        />
      ))}
    </div>
  );
};

export default SearchResults;
