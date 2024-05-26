// MarkerDetail.jsx
import React from 'react';
import PropTypes from 'prop-types';
import '../style/MarkerDetail.css';

const MarkerDetail = ({ product, onClose, onRemove }) => (
  <div className="marker-detail-container">
    <div className="marker-detail-popup">
      <p>상품명: {product.name}</p>
      <p>가격: {product.price}원</p>
      <button onClick={onClose} className="close-button">
        x
      </button>
      {/* <button onClick={() => onRemove(product)} className="remove-button close-button">
        지도에서 이 상품 제거하기
      </button> */}
    </div>
  </div>
);

MarkerDetail.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default MarkerDetail;
