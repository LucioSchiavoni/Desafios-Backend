import express from 'express';
import * as productServices from '../services/productServices'


const router = express.Router();



router.get('/:id', (req, res) => {
    const productsId = productServices.findById(+req.params.id) //Le estamos diciendo que es de tipo Number con el "+" 
    return productsId ? res.send(productsId) : res.sendStatus(404)
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