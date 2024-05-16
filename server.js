const express = require('express')
const path = require('path')
const app = express()

// Sirve los archivos estáticos del directorio 'build'
app.use(express.static(path.join(__dirname, 'dist')))

// Redirige todas las solicitudes a 'index.html'
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`)
})
