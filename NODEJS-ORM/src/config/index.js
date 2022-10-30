require('dotenv').config();

// DB_NAME = "db_food"
// DB_USER = "root"
// DB_PASS = "1234"
// DB_HOST = "localhost"
// DB_DIALECT = "mysql"
// DB_PORT = "3307"
module.exports = {
    db_name : process.env.DB_NAME,
    db_user : process.env.DB_USER,
    db_pass : process.env.DB_PASS,
    db_host : process.env.DB_HOST,
    db_dialect : process.env.DB_DIALECT,
    db_port: process.env.DB_PORT,
}