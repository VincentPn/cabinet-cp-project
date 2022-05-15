const Utilisateur = require('../models/Utilisateur');
const bcrypt = require('bcrypt');

const utilisateurController = {
    findAll : async (request, response) => {
        try {
            const utilisateurs = await Utilisateur.findAll();
            for(const utilisateur of utilisateurs) {
                delete utilisateur.password
                for(const field in utilisateur) !utilisateur[field] ? delete utilisateur[field] : null
            }
            response.json(utilisateurs);
        } catch (error) {
            response.status(500).end(error.message);
        }
    },

    findById : async (request, response) => {
        try {
            const utilisateur = await Utilisateur.findById(request.body.id);
            delete utilisateur.password;
            for(const key in utilisateur) !utilisateur[key] ? delete utilisateur[key] : null;

            response.json(utilisateur);
        } catch (error) {
            response.status(500).end(error.message);
        }
    },

    update : async (request, response) => {
        try {
            const utilisateur = await Utilisateur.findById(request.body.id);

            if(request.body.password) {
                delete request.body.passwordConfirm;
                const salt = await bcrypt.genSalt(10);
                utilisateur.password = await bcrypt.hash(request.body.password, salt);
            } else {
                for(const field in request.body) {
                    utilisateur[field] = request.body[field];
                }
            };

            const updatedUtilisateur = await utilisateur.update();

            console.log(updatedUtilisateur);
            
            delete utilisateur.password;
            for(const key in user) !user[key] ? delete user[key] : null;
            response.json(updatedUtilisateur);
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
}

module.exports = utilisateurController;