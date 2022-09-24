const categoryModel = require('../models/categoryModel');


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

module.exports= {getCategory};