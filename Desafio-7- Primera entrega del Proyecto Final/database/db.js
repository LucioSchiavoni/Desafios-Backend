const mysql = require("mysql");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "db_coder"
})

conexion.connect((error) => {
    if (error) {
        console.error("Error en la conexion");
        return
    }
    console.log("Conectado a la Base de datos");
})

module.exports = conexion;