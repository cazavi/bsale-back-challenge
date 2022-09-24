const cors = require('cors');
const express = require('express');
// const router = express.Router();

const {Sequelize, DataTypes} = require('sequelize');
const app = express();
const {username, password, database, host, dialect} = require('../config/config');
// const {getCategory} = require('./controllers/getCategory');
// const {getProduct} = require('./controllers/getProduct');




app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
const sequelize = new Sequelize(
  database, username, password,{
    host,
    dialect,
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
  
  
  // const categoryModel = require(`${__dirname}/models/categoryModel`)(sequelize,Sequelize);
  // const productModel = require(`${__dirname}/models/productModel`)(sequelize, Sequelize);


  // app.get('/product', (req, res) => { getProduct(req, res) })
  // app.get('/category', (req, res) => { getCategory(req, res) })
  // app.get('/test', (req, res)=> {
  //   res.send('la ruta funciona')
  // })
// router.get('/category', (req, res) => {
//   getCategory(req, res)
// })

// router.get('/product', (req, res) => {
//   getProduct(req, res)
// })
catModel.findAll({attributes:['id', 'name']})
  .then(catModel =>{
    console.log(catModel)
  })
  .catch( error =>{
    console.log(error)
  })
  
productModel.findAll({attributes:['id', 'name', 'url_image', 'price', 'discount', 'category' ]})
  .then(productModel =>{
    console.log(productModel)
  })
  .catch( error =>{
    console.log(error)
  })

app.get('/', (req, res) => {
  res.json({ msg: 'API conectada' })
})
// app.use('/category', router)
// app.use('/product', router)




const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>{
  console.log(`SERVER UP ON ${PORT}`)
})
