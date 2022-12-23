const express = require("express");
const router = express.Router();

const conexion = require("./database/db");

router.get('/', (req, res) => {
    res.render("index")
})

router.get("/productos", (req, res) => {
    conexion.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render("productos", { results: results });
        }
    })
})

//Ruta crear registro
router.get('/create', (req, res) => {
    res.render("create")
})

//Ruta editar registros
router.get("/edit/:id", (req, res) => {
    const id = req.params.id;
    conexion.query("SELECT * FROM users WHERE id=?", [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('edit.ejs', { user: results[0] })
        }
    })
})


//Ruta para borrar registro

router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query("DELETE FROM users WHERE id= ?", [id], (error, results) => {
        if (error) {
            throw error;
        } else {
            res.redirect('/')
        }
    })
})

const crud = require("./controllers/crud");
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;