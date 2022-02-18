const Utilisateur = require('../models/Utilisateur');

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
    }
}

module.exports = utilisateurController;