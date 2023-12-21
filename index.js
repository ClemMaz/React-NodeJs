const express = require('express')
const app = express()
const cors = require('cors')
const { connectDB } = require('./database')
const bodyParser = require('body-parser')
const contactRoute = require('./routes/contact')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/products')

connectDB()
    .then(() => console.log('Connexion OK'))
    .catch(error => console.log(error))

// Va me permettre d'autoriser n'importe qui d'utiliser mon API
app.use(cors({
    origin: '*'
}))

// Permet de decoder le JSON recu par le front
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Permet d'utiliser les Routes définies dans le fichier ./routes/contact
app.use(contactRoute)
app.use(authRoute)
app.use(productRoute)
// Lance le serveur nodeJs sur le port 3001
app.listen(3001, () => {
    console.log('le serveur est lancé')
})