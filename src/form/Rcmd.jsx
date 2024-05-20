// Recommand
import React, { useState } from 'react';
import '../style/RecBtn.css';
import allProducts from '../atom/productdata';

const RecommendationButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const recommendedProducts = allProducts.slice(1,9);
  
//   [
//     { name: '[당도선별] 유명산지 청송사과 1.5kg (봉)', price: '₩16,900', image: '/* 사과 이미지 URL */' },
//     { name: '홍삼', price: '₩10,000', image: '/* 홍삼 이미지 URL */' },
//     { name: '[고려은단] 비타민C1000 이지+비타민D 120정', price: '₩13,800', image: '/* 비타민 이미지 URL */' },
//     { name: '[고려은단] 알티지 오메가3', price: '₩14,900', image: '/* 오메가3 이미지 URL */' },
//     { name: '[2023년산]이맛쌀 20kg', price: '₩59,880', image: '/* 쌀 이미지 URL */' }
//   ];

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button className="recommendation-button" onClick={handleButtonClick}>
        이런 상품들은 어때요?
      </button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <div className="popup-header">
              <h2>AI가 추천하는 맞춤 상품</h2>
              <button className="close-button" onClick={handleClosePopup}>x</button>
            </div>
            <ul className="product-list">
            {recommendedProducts.map((product) => (
                <div key={product.id} className="product-item">
                  <img src={product.imageURL} alt={product.name} className="product-image" />
                  <div className="product-details">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}원</p>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecommendationButton;