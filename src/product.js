// const sequelize =require('./server.js').sequelize
// const {Sequelize, DataTypes} = require('sequelize');
// const express = require('express');

// console.log(sequelize)

// const productModel = sequelize.define('product',{
//   'id': {type: DataTypes.INTEGER, primaryKey: true},
//   'name': DataTypes.STRING,
// 'url_image': DataTypes.STRING,
// 'price': DataTypes.FLOAT,
// 'discount': DataTypes.INTEGER,
// 'category': DataTypes.INTEGER
// },  {
// tableName: 'product'})

 
// module.exports =  getProduct = (req, res) => {
//   productModel.findAll({attributes:['id', 'name', 'url_image', 'price', 'discount', 'category' ]})
//     .then((result) =>{
//       return res
//       .status(200)
//       .json({message: "Operación exitosa", result })
//     })
//     .catch( (error) =>{
//       res.status(500).json({ success: false, message: "Error al conectarse a la base de datos, intenta nuevamente" })
//     })
//   }
  
