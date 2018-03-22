'use strict'

var app = require('./app')
var mongoose = require('mongoose')
var port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost:27017/cursofavoritos', (err, res) => {
    if (err) {
        throw err
    } else {
        console.log("Conexión a mongo correctamente")
        app.listen(port, () => {
            console.log(`API REST favorito funcionando en http://localhost:${port}`)
        })
    }

})