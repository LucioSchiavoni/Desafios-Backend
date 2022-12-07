import express from 'express'
const app = express()
app.use(express.json())
import productRouter from './routes/products'
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));


app.get("/", (_req, res) => {
    res.send("Buenas")
})


app.use("/products", productRouter)

app.listen(PORT, () => {
    console.log(`Escuchando puerto en http://localhost:${PORT} `)
})