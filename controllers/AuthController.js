const User = require('../models/Users')
// J'importe bcrypt qui me permettra de hasher mes mots de passe
const bcrypt = require('bcrypt')
// J'importe validationResult dans mon controller pour recuperer les resultats de la validation de ma requete
const { validationResult } = require('express-validator')

const login = (req, res) => {
    console.log(req.body)
}

const register = async (req, res) => {
    // Je récupère le résultat de ma validation dans une constante errors
    const errors = validationResult(req)
    // si errors n'est pas vide alors
    if (!errors.isEmpty()) {
        // je fait un return pour stopper ma fonction (et donc ne pas sauvegarder des informations fausses)
        // Je renvois un code 422 pour préciser que le serveur n'attendais pas ce genre de données
        // et en json je renvois le tableau d'erreurs
        return res.status(422).json(errors.errors)
    }

    let user = new User()
    user.lastName = req.body.lastName
    user.firstName = req.body.firstName
    user.email = req.body.email
    // avec le await bcrypt, j'attend le resultat pour avoir mon mot de passe hashé (donc indecryptable)
    // la fonction hash prend 2 argument, en 1er le mot de passe bien sur
    // en 2eme le nombre de passage qu'il doit faire pour hasher le mot de passe, generalement on laisse 10
    const hash = await bcrypt.hash(req.body.password, 10)
    // Une fois le hash récupéré, je définis le mot de passe de mon user avec le mot de passe hashé
    user.password = hash

    // Je sauvegarde mon  utilisateur puis je récupère sa version sauvegardé pour le renvoyer au front
    user.save().then(savedUser => {
        res.json(savedUser)
    })
        // Si il y a une erreur, je la console.log
        .catch(error => console.log(error))
}

module.exports = {
    login,
    register
}