import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchToggle = () => {
    setIsSearchOpen((prevIsSearchOpen) => !prevIsSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      // 서버로 검색 요청 보내기
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: searchQuery,
        }),
      });

      if (!response.ok) {
        throw new Error('검색 요청이 실패했습니다.');
      }

      const result = await response.json();
      setSearchResults(result.result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="search-toggle-container">
        <button
          className="search-toggle-home"
          onClick={handleSearchToggle}
          onAnimationEnd={() => setIsSearchOpen(false)}
        >
          {isSearchOpen ? '검색창 열기' : '검색창 닫기'}
        </button>
      </div>
      <div className={`search-container-home ${isSearchOpen ? 'open' : ''}`}>
        <form onSubmit={handleSearchSubmit} className="form home">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="상품명 검색"
            className="input home"
          />
          <button type="submit" className="button home">
            검색
          </button>
        </form>
        {/* 검색 결과 표시 */}
        {searchResults.length > 0 && (
          <div className="search-results">
            <h3>검색 결과</h3>
            <ul>
              {searchResults.map((item, index) => (
                <li key={index}>{item.name} - 가격: {item.price}</li>
              ))}
            </ul>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default SearchBar;
