const express = require('express');
const router = express.Router();
const {getProduct} = require('../controllers/getProduct');

module.exports = app => { 
  router.get('/', getProduct)
  
  app.use('/product', router)
  }