// db.js

const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/capston-product-DB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB 연결 오류:', error);
  });

  db.once('open', () => {
    console.log('MongoDB에 연결되었습니다.');
  });

  return db;  // 이 부분을 수정
};

module.exports = connectToDatabase;  // 이 부분을 수정

