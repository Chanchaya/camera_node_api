const express = require('express');
const multer = require('multer');
const { uploadImage } = require('../controllers/productController');
const router = express.Router();
// ตั้งคKา multer สำหรับจัดการไฟลgอัปโหลด
const storage = multer.diskStorage({
 destination: (req, file, cb) => {
 cb(null, 'uploads/');
 },
 filename: (req, file, cb) => {
 cb(null, Date.now() + path.extname(file.originalname));
 },
});
const upload = multer({ storage });
// กำหนดเส8นทางสำหรับอัปโหลดภาพ
router.post('/upload', upload.single('image'), uploadImage);
module.exports = router;