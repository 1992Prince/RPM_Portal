server.js

const express = require('express');
const mysql = require('mysql');
const PORT = process.env.PORT || 3000;
const rmportal = express();

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '7ujm&UJM',
database: 'rmp'
});

connection.connect(function(err){
    (err)?console.log(err): console.log(connection);
});


 require('./routes/html-routes').default (rmportal);

rmportal.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
 }); 	