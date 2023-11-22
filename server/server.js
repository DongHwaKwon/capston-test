// server.js

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const corsMiddleware = require('./utils/cors'); // CORS 설정 모듈
const autoRoutes = require('./routes/authRoutes');
const searchRoutes = require('./routes/searchRoutes');
const db = require('./utils/db'); // MongoDB 연결 모듈

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(corsMiddleware); // CORS 미들웨어 사용

app.use('/api', autoRoutes);
app.use('/api', searchRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
