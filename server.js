const express = require('express');
const PORT = process.env.PORT || 3001;
const mysql = require('mysql2');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to Database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Rootpass5359!',
        database: 'tracker'
    },
    console.log('Connected to the tracker database.')
);

// Default response
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});