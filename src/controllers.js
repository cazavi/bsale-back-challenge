const {categoryModel} = require('./models/categoryModel');
const {productModel} = require('./models/productModel');



const getCategory = (req, res) => {
  categoryModel
  .findAll({attributes:['id', 'name']})
  .then((result) => {
    return res.status(200).json({ success: true, message: "Operación exitosa", result })
    // console.log(catModel)
  })
  .catch( (error) =>{
    res.status(500).json({ success: false, message: "Error al conectarse a la base de datos, intenta nuevamente" })
    // console.log(error)
  })
}

const getProduct = (req, res) => {
  productModel
  findAll({attributes:['id', 'name', 'url_image', 'price', 'discount', 'category' ]})
    .then((result) => {
      return res.status(200).json({ success: true, message: "Operación exitosa", result })
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: "Error al conectarse a la base de datos, intenta nuevamente" })
    })
}

module.exports= {getProduct, getCategory};