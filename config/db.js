const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postapp_xk69', 'post_app_user_pg', '9GPvLhNuaUl0xyMvB7zQu28Mi89l3g5y', {
host: 'dpg-croe0tq3esus73c0cgig-a',
dialect: 'postgres',
});

//const sequelize = new Sequelize('camera_db', 'postgres', '12345678', {
   // host: 'localhost',
    //dialect: 'postgres',
   //});


module.exports = sequelize;