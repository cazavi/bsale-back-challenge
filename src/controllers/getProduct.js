const {productModel} = require('../models/productModel');
const express = require('express');
const getProduct = (req, res) => {
  productModel
  .findAll({attributes:['id', 'name', 'url_image', 'price', 'discount', 'category' ]})
    .then((result) => {
      return res.status(200).json({ success: true, message: "Operación exitosa", result })
    })
    .catch((error) => {
      res.status(500).json({ success: false, message: "Error al conectarse a la base de datos, intenta nuevamente" })
    })
}

module.exports= {getProduct};