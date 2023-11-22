// server/controllers/authController.js

const users = []; // 실제로는 데이터베이스를 사용해야 합니다.

const signup = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: '이메일과 비밀번호를 모두 입력하세요.' });
  }

  users.push({ email, password });

  res.status(201).json({ success: true, message: '회원가입이 완료되었습니다.' });
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: '이메일과 비밀번호를 모두 입력하세요.' });
  }

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    res.status(200).json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: '로그인 실패' });
  }
};

module.exports = {
  signup,
  login
};
