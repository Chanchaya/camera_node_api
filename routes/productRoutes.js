const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const productController = require('../controllers/productController');
const userController = require('../controllers/userController');
const postController = require('../controllers/postController');
const router = express.Router();
//กําหนดโฟลเดอรgสําหรับจัดเก็บไฟลgที่อัพโหลด
const upload_path = './public/images';
// ตรวจสอบวKามีโฟลเดอรg uploads หรือไมK
if (!fs.existsSync(upload_path)) {
// ถ8าไมKมีให8สร8างใหมK
fs.mkdirSync(upload_path, { recursive: true });
}
//ตั้งคKา multer สําหรับจัดการไฟลgอัปโหลด
const storage = multer.diskStorage({
destination: (req, file, cb) => {
//กําหนดให8อัพโหลดไปไฟลgไปไว8ที่โฟลเดอรg public/images
cb(null, 'public/images/');
},
filename: (req, file, cb) => {
//ตั้งชื่อไฟลgโดยใช8วันที่และเวลาปûจจุบัน
cb(null, Date.now() + path.extname(file.originalname));
},
});
const upload = multer({ storage: storage });

// กําหนดเส8นทางหรือ url สําหรับเรียกใช8งานแตKละ api

router.post('/products', upload.single('image'), productController.createProduct);
router.get('/products', productController.getdata);
// url สําหรับแก8ไขข8อมูลสินค8า
router.put('/products/:proId', upload.single('image'), productController.updateProduct);
// url สําหรับลบข8อมูลสินค8า
router.delete('/products/:proId', productController.deleteProduct);

// User routes
router.post('/login', userController.login);
router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.post('/login', userController.login);
// Post routes
router.post('/users/:userId/posts', postController.createPost);
router.get('/users/:userId/posts', postController.getUserPosts);
router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPostById);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;