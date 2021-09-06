const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Rootpass5359!',
        database: 'tracker'
    },
console.log('connected to the tracker database')
);

module.exports = db;