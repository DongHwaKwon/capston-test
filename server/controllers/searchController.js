// server/controllers/searchController.js

const Product = require('../models/productModel');
const parseExcelFile = require('../utils/excelParser');

const searchProduct = async (req, res) => {
  const { query } = req.params;

  try {
    // 엑셀 파일 읽어오기
    const excelData = parseExcelFile(req.file.buffer);

    // 상품명에 대해 부분 일치하는 상품 검색
    const result = excelData.filter(item => item.name.includes(query));

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

module.exports = {
  searchProduct
};
