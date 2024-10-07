const { Sequelize, DataTypes } = require('sequelize');
// เชื่อมตKอกับฐานข8อมูล
const sequelize = require('../config/db');
// สร8าง Model สำหรับ Product
const Product = sequelize.define('Product', {
    proID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },       
 image: {
 type: DataTypes.BLOB('long'), // เก็บรูปภาพในฟåลดgนี้
 allowNull: false,
 },
});
module.exports = Product;
