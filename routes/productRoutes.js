const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const productController = require('../controllers/productController');
const router = express.Router();
//กำหนดโฟลเดอรgสำหรับจัดเก็บไฟลgที่อัพโหลด
const upload_path = './public/images';
// ตรวจสอบวKามีโฟลเดอรg uploads หรือไมK
if (!fs.existsSync(upload_path)) {
 // ถ8าไมKมีให8สร8างใหมK
 fs.mkdirSync(upload_path, { recursive: true });
}
//ตั้งคKา multer สำหรับจัดการไฟลgอัปโหลด
const storage = multer.diskStorage({
 destination: (req, file, cb) => {
 //กำหนดให8อัพโหลดไปไฟลgไปไว8ที่โฟลเดอรg public/images
 cb(null, 'public/images/');
 },
 filename: (req, file, cb) => {
 //ตั้งชื่อไฟลgโดยใช8วันที่และเวลาปûจจุบัน
 cb(null, Date.now() + path.extname(file.originalname));
 },
});
const upload = multer({ storage: storage });
// กำหนดเส8นทางหรือ url สำหรับเรียกใช8งานแตKละ api
router.post('/products', upload.single('image'), productController.createProduct);
router.get('/products', productController.getdata);
module.exports = router;