import express from 'express';

const app = express()
const PORT = 8000
app.listen(PORT)

app.get('/', (req, res) => res.send(
    "Bienvenido"
))

app.get('/usuarios', (req, res) => res.send(`aqui van los users`))
app.put('/', (req, res) => res.send(`poner`))
app.post('/', (req, res) => res.send(`acutalizar`))
app.delete('/', (req, res) => res.send(`borrar`))

console.log(`listen in http://localhost:${PORT} `)

