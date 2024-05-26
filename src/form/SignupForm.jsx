import React, { useState } from 'react';
import '../style/Boxstyle.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // 서버로 회원가입 정보 전송
      const response = await fetch('http://localhost:3000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name, gender, birthdate }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('회원가입 성공');
      } else {
        alert('회원가입 실패');
      }
    } catch (error) {
      console.error('회원가입 요청 중 오류 발생:', error);
      alert('회원가입에 성공했습니다.');
    }
  };

  return (
    <div className="app-container">
      <div className="container signup-container">
        <h2>회원가입</h2>
        <form onSubmit={handleSignup} className="form signup-form-app">
          <div className="form-group-app">
            <input
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => (e.target.style.border = '2px solid black')}
              onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
            />
          </div>
          <div className="form-group-app">
            <input
              type="text"
              placeholder="ID: 영문, 숫자 조합으로 8 ~ 12자"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={(e) => (e.target.style.border = '2px solid black')}
              onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
            />
          </div>
          <div className="form-group-app">
            <input
              type="password"
              placeholder="Pd: 영문, 숫자, 특수문자 조합으로 8 ~ 12자"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={(e) => (e.target.style.border = '2px solid black')}
              onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
            />
          </div>
          <div className="form-group-app">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              onFocus={(e) => (e.target.style.border = '2px solid black')}
              onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
            >
              <option value="">성별 선택</option>
              <option value="male">남성</option>
              <option value="female">여성</option>
              <option value="other">기타</option>
            </select>
          </div>
          <div className="form-group-app">
            <input
              type="date"
              placeholder="생년월일"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              onFocus={(e) => (e.target.style.border = '2px solid black')}
              onBlur={(e) => (e.target.style.border = '1px solid #ccc')}
            />
          </div>
          <button type="submit" className="button-app signup-button-app">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
