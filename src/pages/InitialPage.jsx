import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Initialstyle.css';

const InitialPage = () => {
  return (
    <div className="initial-container">
      <h2>환영합니다!</h2>
      <p>저희 매장을 찾아주셔서 감사합니다. 회원이신가요?</p>
      <div className="link-container">
        <Link to="/login" className="link-box">
          <span>로그인</span>
        </Link>
        <Link to="/signup" className="link-box">
          <span>회원가입</span>
        </Link>
        <Link to="/home" className="additional-text">
          또는 비회원으로 시작하기
        </Link>
      </div>
    </div>
  );
};

export default InitialPage;
