const Product = require('../models/product');
// ฟûงกgชันสำหรับเพิ่มข8อมูลสินค8าใหมK
exports.createProduct = async (req, res) => {
 try {
 // รับข8อมูล proname และ price
 const { proname, price } = req.body;
 // รับข8อมูลชื่อไฟลgรูปภาพ
 const image_file_name = req.file ? req.file.filename : null;
 const product = await Product.create({
 proname: proname,
 image: image_file_name,
 price: price
 });
 res.status(200).json({ message: 'Add new product successfully', product });
 } catch (error) {
 res.status(500).json({ message: 'Failed to add new product', error });
 }
};
// แสดงข8อมูล products ทั้งหมด
exports.getdata = async (req, res) => {
 try {
 const products = await Product.findAll();
 res.status(200).json(products);
 } catch (error) {
 res.status(500).json({ error: error.message });
 }
};