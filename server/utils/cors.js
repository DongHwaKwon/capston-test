// cors.js

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // 클라이언트의 주소로 변경 (실제 클라이언트 주소에 맞게 변경)
  credentials: false, // 필요에 따라 설정 => 쿠키나 인증을 사용하는가?
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
