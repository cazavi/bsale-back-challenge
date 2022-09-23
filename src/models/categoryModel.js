
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  'bsale_test', 'bsale_test', 'bsale_test',{
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect: 'mysql',

  }
)

const categoryModel = sequelize.define('category',{
  'id': {type: DataTypes.INTEGER, primaryKey: true},
  'name': DataTypes.STRING
},  {
  tableName: 'category'})

module.exports= categoryModel;