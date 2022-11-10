import express from "express"
import productos from './services/products.json'
import productsRouter from './routes/products'

const app = express()

app.use(express.json())

const PORT = 8080


app.get("/", (_req, res) => {
    console.log("Hola")
    res.send("Bienvenidos")
})

app.get("/productosRandom", (_req, res) => {
    const randomProduct = productos[Math.floor(Math.random() * productos.length)]
    res.send(randomProduct)
})


app.use("/productos", productsRouter)



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT} `)

})