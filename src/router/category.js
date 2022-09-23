const express = require('express');
const router = express.Router();
const {getCategory} = require('../controllers/getCategory');



router.get('/category', (req, res) => {
  getCategory(req, res)
})

module.exports= router;