import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/actions';
import '../style/Boxstyle.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // 서버로 로그인 정보 전송
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // 서버에서 성공적으로 로그인 처리된 경우에만 Redux 상태 업데이트
        dispatch(loginSuccess(data.user));
        alert('로그인 성공');
      } else {
        alert('로그인 실패');
      }
    } catch (error) {
      console.error('로그인 요청 중 오류 발생:', error);
      alert('아이디 또는 비밀번호를 확인해주세요.');
    }
  };


  return (
    <div className="app-container">
      <div className="container login-container">
        <h2>로그인</h2>
        <form onSubmit={handleLogin} className="form login-form-app">
          <div className="form-group-app">
            <input
              type="text"
              placeholder="아이디/회원번호"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => e.target.style.border = '2px solid black'}
              onBlur={(e) => e.target.style.border = '1px solid #ccc'}
            />
          </div>
          <div className="form-group-app">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => e.target.style.border = '2px solid black'}
              onBlur={(e) => e.target.style.border = '1px solid #ccc'}
            />
          </div>
          <button type="submit" className="button-app login-button-app">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
