const express = require('express');
const mysql = require('mysql');

const router = express.Router();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'airapos'
});

router.get('/', function(req, res, next) {
    connection.connect(function(err){
        if(err){
            res.send('something wrong with mysql database connection');
            connection.end();
        } else {
            res.send('koneksi terbuka');
        }
    });
});

module.exports = router;