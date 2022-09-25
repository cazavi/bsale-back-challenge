const cors = require("cors");
const express = require("express");

const { Sequelize, DataTypes } = require("sequelize");
const app = express();
const {
  username,
  password,
  database,
  host,
  dialect,
} = require("../config");
const { getProduct } = require("./product");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

const catModel = sequelize.define(
  "category",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
  },
  {
    tableName: "category",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("CONEXIÓN EXITOSA");
  })
  .catch((error) => {
    console.log("ERROR DE CONEXIÓN:" + error);
  });

const getCategory = (req, res) => {
  catModel
    .findAll({ attributes: ["id", "name"] })
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

app.get("/", (req, res) => {
  return getCategory(req, res);
});

app.get("/product", (req, res) => {
  return getProduct(req, res);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`SERVER UP ON ${PORT}`);
});
