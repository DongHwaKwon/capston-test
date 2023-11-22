// GNB.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/GNB.css';

const GNB = ({ isAuthenticated, onLogout }) => {
  return (
    <div className="gnb-container">
      {/* 중앙 상단 메인 로고(또는 대체 텍스트) */}
      <div className="logo-container">
        <Link to="/home">
          <img src="../img/Logo.png" alt="Main Logo" />
        </Link>
      </div>

      {/* 우측 상단 로그인 및 로그아웃 관리 */}
      <div className="login-management">
        {isAuthenticated ? (
          <>
            <span>로그인 중</span>
            <button onClick={onLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <Link to="/login">로그인</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default GNB;