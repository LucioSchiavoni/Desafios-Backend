import express from "express"
import * as productServices from '../services/productServices'

const router = express.Router()

router.get("/", (_req, res) => {
    res.send(productServices.getEntriesWithoutSensitiveInfo())
})


router.get("/:id", (req, res) => {
    const prodcuts = productServices.findById(+req.params.id)
    return prodcuts ? res.send(prodcuts) : res.sendStatus(404)
})

router.post("/", (_req, res) => {
    res.send("Como estan todos")
})


export default router