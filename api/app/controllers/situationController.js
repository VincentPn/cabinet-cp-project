const Situation = require('../models/Situation.js');

const situationController = {
    findAll: async (request, response) => {
        try {
            const situations = await Situation.findAll();
            response.json(situations);
        } catch (error) {
            response.status(500).end(error.message);
        }
    }
};

module.exports = situationController;