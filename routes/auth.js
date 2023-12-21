const express = require('express')
const router = express.Router()
const { login, register } = require('../controllers/AuthController')
//Je récupère mon tableau de validation que j'ai crée afin de l'utiliser dans ma route register
const validation = require('../validations/register')

router.post('/login', login)
// Entre l'URL et la fonction register, je peux ajouter un Middleware
// En gros, c'est une fonction qui va s'appeler avant ma fonction register et qui va me permettre 
// de faire des verifications
// Ici, mon middleware me sert à valider les champs de mon formulaire
// Le résultat de cette validation se retrouvera coté controller
router.post('/register', validation, register)

module.exports = router