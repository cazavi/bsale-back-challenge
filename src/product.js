const { Sequelize, DataTypes } = require("sequelize");
const {
  username,
  password,
  database,
  host,
  dialect,
} = require("../config");

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});
const productModel = sequelize.define(
  "product",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    url_image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    discount: DataTypes.INTEGER,
    category: DataTypes.INTEGER,
  },
  {
    tableName: "product",
  }
);

const getProduct = (req, res) => {
  productModel
    .findAll({
      attributes: ["id", "name", "url_image", "price", "discount", "category"],
    })
    .then((result) => {
      return res.status(200).json({ message: "Operación exitosa", result });
    })
    .catch((error) => {
      res
        .status(500)
        .json({
          success: false,
          message: "Error al conectarse a la base de datos, intenta nuevamente",
        });
    });
};

module.exports = { getProduct };
