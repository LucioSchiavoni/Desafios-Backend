import express from 'express'
const app = express()
app.use(express.json())
import productRouter from './routes/products'
import path from 'path'

const PORT = 8080;


app.set("views", './views');
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));

let usuarios: string[] = []

app.get("/", (_req, res) => {
    res.render("index", { usuarios })
})

app.post("/create", (req, res) => {
    usuarios.push(req.body)
    res.redirect("/")
})



app.use("/user", productRouter)

app.listen(PORT, () => {
    console.log(`Escuchando puerto en http://localhost:${PORT} `)
})