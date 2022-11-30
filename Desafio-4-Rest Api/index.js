import express from 'express';
import { Router } from 'express';
import Products from './products';

const app = express()
const PORT = 8080
app.listen(PORT)
const products = new Products()
const productsRouter = new Router()


productsRouter.use(express.json())
productsRouter.use(express.urlencoded({ extended: true }))


app.use(express.static("public"))
app.use('/products', productsRouter)




const server = app.listen(PORT, () => {
    console.log(`escuchando servidor in ${server.address().port} `)
})


server.on("error", console.log("error en el servidor"))
