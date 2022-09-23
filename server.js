
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host:'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//   user: 'bsale_test',
//   password: 'bsale_test',
//   database: 'bsale_test'
// })


// const handleConnect = connection.connect((err) => {
//   if (err){
//   console.log('error when connecting to db:', err);
//   } 
// })


// setInterval(() => {
//   handleConnect()
// }, 4500);

const express = require('express');
const { Sequelize, DataTypes, Model } = require('sequelize');
const app = express();


// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize(
  'bsale_test', 'bsale_test', 'bsale_test',{
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect: 'mysql',

  }
)

const catModel = sequelize.define('category',{
  'id': {type: DataTypes.INTEGER, primaryKey: true},
  'name': DataTypes.STRING
},  {
  tableName: 'category'})

const productModel = sequelize.define('product',{
  'id': {type: DataTypes.INTEGER, primaryKey: true},
  'name': DataTypes.STRING,
  'url_image': DataTypes.STRING,
  'price': DataTypes.FLOAT,
  'discount': DataTypes.INTEGER,
  'category': DataTypes.INTEGER
},  {
  tableName: 'product'})

sequelize.authenticate()
  .then(()=>{
    console.log('CONEXIÓN EXITOSA')
  })
  .catch(error =>{
    console.log('ERROR DE CONEXIÓN:' +error)
  })

productModel.findAll({attributes:['id', 'name', 'url_image', 'price', 'discount', 'category' ]})
  .then(productModel =>{
    console.log(productModel)
  })
  .catch( error =>{
    console.log(error)
  })

catModel.findAll({attributes:['id', 'name']})
  .then(catModel =>{
    console.log(catModel)
  })
  .catch( error =>{
    console.log(error)
  })


app.listen(3000, () =>{
  console.log('SERVER UP ON http://mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com')
})





//   user: 'bsale_test',
//   password: 'bsale_test',
//   database: 'bsale_test'
// });

// const auth = async() =>{
// try {
//   await sequelize.authenticate();
//   console.log('Connection has been established successfully.');
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }
// }

// auth()