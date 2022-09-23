const express = require('express');
const router = express.Router();
const {getProduct} = require('../controllers/getProduct');

router.get('/product', (req, res) => {
  getProduct(req, res)
})


module.exports= router;