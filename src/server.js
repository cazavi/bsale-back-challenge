
const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
// const {router} = require('./routes')


const sequelize = new Sequelize(
  'bsale_test', 'bsale_test', 'bsale_test',{
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect: 'mysql',

  }
)

// const catModel = sequelize.define('category',{
//   'id': {type: DataTypes.INTEGER, primaryKey: true},
//   'name': DataTypes.STRING
// },  {
//   tableName: 'category'})

// const productModel = sequelize.define('product',{
//   'id': {type: DataTypes.INTEGER, primaryKey: true},
//   'name': DataTypes.STRING,
//   'url_image': DataTypes.STRING,
//   'price': DataTypes.FLOAT,
//   'discount': DataTypes.INTEGER,
//   'category': DataTypes.INTEGER
// },  {
//   tableName: 'product'})

sequelize.authenticate()
  .then(()=>{
    console.log('CONEXIÓN EXITOSA')
  })
  .catch(error =>{
    console.log('ERROR DE CONEXIÓN:' +error)
  })

  
// catModel.findAll({attributes:['id', 'name']})
//   .then(catModel =>{
//     console.log(catModel)
//   })
//   .catch( error =>{
//     console.log(error)
//   })
  
// productModel.findAll({attributes:['id', 'name', 'url_image', 'price', 'discount', 'category' ]})
//   .then(productModel =>{
//     console.log(productModel)
//   })
//   .catch( error =>{
//     console.log(error)
//   })

// app.get('/', (req, res) => {
//   res.json({ msg: 'API conectada ;)' })
// })
// app.use('/', router)


const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>{
  console.log(`SERVER UP ON ${PORT}`)
})
