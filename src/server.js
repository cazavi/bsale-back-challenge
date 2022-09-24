const cors = require('cors');
const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const {username, password, database, host, dialect} = require('../config/config');
// const categoryRouter = require('./router/category');
// const productRouter = require('./router/product');
require('./router/category')(app);
require('./router/product')(app);



app.use(cors())

const sequelize = new Sequelize(
  database, username, password,{
    host,
    dialect,
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
  
  
  const categoryModel = require(`${__dirname}/models/categoryModel`)(sequelize,Sequelize);
  const productModel = require(`${__dirname}/models/productModel`)(sequelize, Sequelize);
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
//   res.json({ msg: 'API conectada' })
// })
app.use(express.json())
// app.use('/category', categoryRouter)
// app.use('/product', productRouter)





const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>{
  console.log(`SERVER UP ON ${PORT}`)
})
