import express from 'express';
import * as productServices from '../services/productServices'


const router = express.Router();

router.get('/', (_req, res) => {
    res.render("index", productServices.getEntriesWithoutSensitiveInfo())

})

router.get('/:id', (req, res) => {
    const products = productServices.findById(+req.params.id) //Le estamos diciendo que es de tipo Number con el "+" 
    return products ? res.send(products) : res.sendStatus(404)
})


router.post("/", (req, res) => {
    try {
        const { nombre, edad, comentario, estado, puesto, thumbail } = req.body
        const newProductEntry = productServices.addProduct({
            nombre,
            edad,
            comentario,
            estado,
            puesto,
            thumbail
        }
        )
        res.json(newProductEntry)
    } catch (e) {
        res.status(404).send(e)
    }

})


export default router