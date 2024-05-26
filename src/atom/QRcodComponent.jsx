import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = () => {
  const url = 'https://store.emart.com/main/main.do';

  return (
      <div>
        <p>자세한 정보가 필요하다면?</p>
      <QRCode 
      value={url}
      size={64} // 크기 조절 (픽셀 단위)
      bgColor={"#ffffff"} // 배경색
      fgColor={"#000000"} // 전경색
      level={"H"} // 오류 수정 수준 (L, M, Q, H)
       />
    </div>
  );
};

export default QRCodeComponent;