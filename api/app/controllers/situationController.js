const Situation = require('../models/Situation.js');

const situationController = {
    findAll: async (request, response) => {
        try {
            const situations = await Situation.findAll();
            response.json(situations);
        } catch (error) {
            response.status(500).end(error.message);
        }
    },

    create: async (request, response) => {
        try {
            const{user_id} = request.body;
            const situation = await Situation.findByUserId(user_id);
            if(situation) return response.status(401).end("This user already have a situation");

            const newSituation = await new Situation(request.body).create();
            console.log(newSituation);
            if(!newSituation) throw new Error('Situation creation error');
            response.status(201).json({message: "Situation created"});
        } catch (error) {
            response.status(500).send(error.message);
        }
    }
};

module.exports = situationController;