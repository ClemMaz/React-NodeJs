const nodemailer = require('nodemailer')

let transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "dfa508b0ab0a3d",
        pass: "ab1ffb0501ef57"
    }
});

const contact = (req, res) => {
    console.log(req.body)

    transport.sendMail({
        from: '"Robin Couet" <robin@prepavenir.fr>', // Adresse d'envoi
        to: "sylvain@prepavenir.fr", // Receveur
        subject: "Nouvelle prise de contact", // Objet de l'email 
        html: `
            <p>Prenom : ${req.body.firstName}</p>
            <p>Nom : ${req.body.lastName}</p>
            <p>Email : ${req.body.email}</p>
            <p>Message : ${req.body.message}</p>
        `,
        text: "Coucou Sylvain"
    })

    res.json('coucou')
}

module.exports = {
    contact
}