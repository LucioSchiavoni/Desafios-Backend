const express = require("express");
const app = express();
const PORT = 8080

app.set("view engine", "ejs");

app.use('/', require("./router"));

app.listen(PORT, () => {
    console.log(`escuchando servidor en http://localhost:${PORT} `)
})

