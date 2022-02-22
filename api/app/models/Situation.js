const CoreModel = require('./coreModel');
const client = require('../database');

class Situation extends CoreModel {
    static tableName = "situation";

    constructor(obj={}) {
        super(obj);
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }

    static async findByUserId(user_id) {
        try {
            const {rows} = await client.query(`SELECT * FROM "situation" WHERE "user_id" =$1`, [user_id]);
            return rows[0];
        } catch (error) {
            if(error.detail) throw new Error(error.detail.message);
            else throw error;
        }

    }
}

module.exports = Situation;