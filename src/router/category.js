const express = require('express');
const router = express.Router();
const {getCategory} = require('../controllers/getCategory');


module.exports = app => { 
router.get('/', getCategory)

app.use('/category', router)
}