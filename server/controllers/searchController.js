const Product = require('../models/productModel');

const searchProduct = async (req, res) => {
  const { query } = req.params;

  try {
    const results = await Product.find({ name: { $regex: new RegExp(query, 'i') } });
    res.status(200).json({ success: true, result: results });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


module.exports = {
  searchProduct,
};