// // GNB.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import QRCodeComponent from '../atom/QRcodComponent';
import '../style/GNB.css';

const account_img = "/img/account_circle.png";

const GNB = ({ isAuthenticated, onLogout }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAccountImageClick = () => {
    // 현재 경로가 '/home'일 때만 팝업창을 열고 닫음
    if (location.pathname !== '/home') {
      console.log("경로 이동")
      navigate('/login');
      return;
    }
    console.log("경로 미이동")

    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="gnb-container">
      <div className="logo-container">
        <Link to="/home">
          <img src="/img/Logo.png" alt="Main Logo" />
        </Link>
      </div>

      <div className="login-management">
      <img
              src={account_img}
              alt="로그"
              className="account_image"
              onClick={handleAccountImageClick}
            />
            {isPopupOpen && (
              <div className="account-popup">
                <img src={account_img} alt="Account" />
                <div className="user-info">
                  <p>권동화 고객님</p>
                  <p>capstontest1234</p>
                  <QRCodeComponent />
                </div>
              </div>
            )}
        {/* {isAuthenticated ? (
          <>
            <span>로그인 중</span>
            <button onClick={onLogout}>로그아웃</button>
            <img
              src={account_img}
              alt="로그"
              className="account_image"
              onClick={handleAccountImageClick}
            />
            {isPopupOpen && (
              <div className="account-popup">
                <img src={account_img} alt="Account" />
                <div className="user-info">
                  <p>이름: John Doe</p>
                  <p>아이디: johndoe123</p>
                </div>
              </div>
            )}
          </>
        ) : (
          <Link to="/login">
            <img src={account_img} alt="로그인" className="account_image" />
          </Link>
        )} */}
      </div>
    </div>
  );
};

export default GNB;
