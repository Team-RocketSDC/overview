// const mysql = require('mysql');

// // const pool = mysql.createPool({
// //   host: 'db',
// //   port: '3306',
// //   user: 'root',
// //   password: 'test',
// //   database: 'overview',
// // });

// const pool = mysql.createConnection({
//   user: 'root',
//   database: 'overview',
// });
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/overview';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch((err) => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = db;
