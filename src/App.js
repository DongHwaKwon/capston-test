// App.js
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import InitialPage from './pages/InitialPage';
import HomePage from './pages/HomePage';
import GNB from './pages/GNB'; // GNB 컴포넌트 추가
import './App.css';

const App = () => {
  // isAuthenticated와 handleLogout을 App 컴포넌트에서 관리
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    // 로그아웃 로직 구현 (예: 토큰 삭제, 상태 변경 등)
    // ...

    // 사용자 로그아웃 상태 갱신
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        {/* GNB에 isAuthenticated와 onLogout을 전달 */}
        <GNB isAuthenticated={isAuthenticated} onLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;