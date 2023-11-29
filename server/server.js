const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const corsMiddleware = require('./utils/cors');
const autoRoutes = require('./routes/authRoutes');
const searchRoutes = require('./routes/searchRoutes');
const db = require('./utils/db');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(corsMiddleware);
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', autoRoutes);
app.use('/search', searchRoutes); // 변경된 부분

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
