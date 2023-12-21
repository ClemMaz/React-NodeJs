// J'importe la fonction check d'express-validator pour pouvoir faire mes validations
const { check } = require('express-validator')

// Je crée un tableau dans le quel je vais ajouter toutes mes validations pour chaque champs
let validation = [
    // 1er champs : email, je verifie que le format de l'email est bon
    // La fonction isEmail() est une fonction de express-validator qui va verifier que le format
    // correspond bien a xxx@xxx.xx
    // Si ce n'est pas bon, le message contenu dans withMessage() sera envoyé au front
    check('email').isEmail().withMessage('L\'email n\'est pas au bon format'),
    // 2eme champ: mot de passe
    check('password')
        // je vérifie si sa taille fait minimum 8 caracteres
        .isLength({ min: 8 }).withMessage('Le mot de passe doit faire 8 caracteres de long minimum')
        // si il y a au moins un chiffre
        .matches('[0-9]').withMessage('Le mot de passe doit contenir un chiffre')
        // Au moins une majuscule
        .matches('[A-Z]').withMessage('Le mot de passe doit contenir une majuscule')
        // Au moins un caractere special
        .matches("[$&+,:;=?@#|'<>.^*()%!-]").withMessage('Le mot de passe doit contenir un caractere special')
    // Sinon, a chaque fois, le message dans withMessage sera renvoyé au front
]

module.exports = validation