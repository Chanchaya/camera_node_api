const Product = require('../models/product');
// ฟçงกgชันสำหรับอัปโหลดภาพ
const uploadImage = async (req, res) => {
 try {
 const image_data = req.file ? req.file.buffer : null; // รับข8อมูลรูปภาพเปuน buffer
 const product = await Product.create({
 image: image_data,
 });
 res.status(200).json({ message: 'Image uploaded successfully', product });
 } catch (error) {
 res.status(500).json({ message: 'Failed to upload image', error });
 }
};
module.exports = {
 uploadImage,
};