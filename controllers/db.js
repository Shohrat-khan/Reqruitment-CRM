const mysql = require('mysql2');
require('dotenv').config();

// Create a connection pool for better performance
const pool = mysql.createPool({
    host: process.env.DB_HOST,     // Database host
    user: process.env.DB_USER,     // Database username
    password: process.DB_PASSWORD, // Database password
    database: process.env.DB_NAME, // Database name
    port : process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

// Export a promise-based pool for async/await
const promisePool = pool.promise();

module.exports = promisePool;