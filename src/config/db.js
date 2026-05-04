const mysql = require("mysql2/promise")

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "@Erosenin1",
    database: "eventos"
})

module.exports = pool