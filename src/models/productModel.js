
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'bsale_test', 'bsale_test', 'bsale_test',{
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect: 'mysql',

  }
)

const productModel = sequelize.define('product',{
  'id': {type: DataTypes.INTEGER, primaryKey: true},
  'name': DataTypes.STRING,
  'url_image': DataTypes.STRING,
  'price': DataTypes.FLOAT,
  'discount': DataTypes.INTEGER,
  'category': DataTypes.INTEGER
},  {
  tableName: 'product'})

module.exports= productModel;