
// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host:'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
//   user: 'bsale_test',
//   password: 'bsale_test',
//   database: 'bsale_test'
// })


// const handleConnect = connection.connect((err) => {
//   if (err){
//   console.log('error when connecting to db:', err);
//   } 
// })


// setInterval(() => {
//   handleConnect()
// }, 4500);

const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (sqlite)
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user: 'bsale_test',
  password: 'bsale_test',
  database: 'bsale_test'
});

const auth = async() =>{
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}

auth()