const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const path = require('path')
const connection = require('./connection')
const port = 3000 // Ajusta la ruta según la estructura
const user = require('./routes/usersRouter')
const loggedMiddleware = require('./middlewares/logged')


// Middleware para parsear el body de las solicitudes
app.use(bodyParser.json());
//rutas 
app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use('/users',user)

app.listen(port, () => {
    console.log('listening on port 3000')
})