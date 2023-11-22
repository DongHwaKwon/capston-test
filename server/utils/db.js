// db.js

const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose.connect('mongodb://localhost:27017/shoppingApp', {
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

  return db;
};

module.exports = connectToDatabase();
