import React, { useState } from 'react';
import '../style/MapComponent.css'; // 스타일 파일 추가
import mapImage from '../img/map_vol0.2.png'
import markerImage from '../img/marker2.png'

const MapComponent = () => {
  const [productCoordinates, setProductCoordinates] = useState({ x: 0, y: 0 });
  const [isMarkerVisible, setIsMarkerVisible] = useState(false);

  const toggleMarkerVisibility = () => {
    setIsMarkerVisible((prev) => !prev);
  };

  return (
    <div className="map-container"> {/* 스타일 클래스 추가 */}
      {/* 지도 이미지 */}
      <img
        src={mapImage}
        alt="지도"
        className="map-image"
      />

      {/* 표시 이미지 */}
      {isMarkerVisible && (
        <img
          src={markerImage}
          alt="표시"
          style={{
            width: 200,
            height: 200,
            position: 'absolute',
            top: `${productCoordinates.y}%`,
            left: `${productCoordinates.x}%`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}

      {/* 예시: 중앙에 '표시' 이미지를 출력하는 버튼 */}
      <button
        onClick={() => {
          setProductCoordinates({ x: 33, y: 32 });
          toggleMarkerVisibility();
        }}
      ></button>
    </div>
  );
};

export default MapComponent;
