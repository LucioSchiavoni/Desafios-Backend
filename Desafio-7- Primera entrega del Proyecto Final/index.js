const express = require("express");

const app = express();

const PORT = 8080;


app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', require('./router'));



app.listen(PORT, () => {
    console.log(`Escuchando puerto en http://localhost:${PORT} `)
})
