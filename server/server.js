const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const corsMiddleware = require('./utils/cors');
const autoRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000; // 로컬 개발 시 기본 포트는 5000번으로 설정

app.use(bodyParser.json());
app.use(corsMiddleware);
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', autoRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
