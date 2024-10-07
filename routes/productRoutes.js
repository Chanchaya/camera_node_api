const express = require('express');
const multer = require('multer');
const path = require('path');
const productController = require('../controllers/productController');
const router = express.Router();
//สร8างการอัพโหลดไฟลg
const storage = multer.memoryStorage();
const upload = multer({ storage });
// กำหนดเส8นทางสำหรับอัปโหลดภาพ
router.post('/upload', upload.single('image'), productController.uploadImage);
router.get('/products', productController.getdata);
module.exports = router;