const CoreModel = require('./coreModel');
const client = require('../database');

class Utilisateur extends CoreModel {
  static tableName = "utilisateur";

  constructor(obj={}) {
    super(obj);
    for(const propName in obj){
      this[propName] = obj[propName];
    }
  }

  static async findByEmail(email) {
      try {
      const {rows} = await client.query(`SELECT * FROM "utilisateur" WHERE "email" = $1`, [email]);
      return rows[0];
    } catch (error) {
      if(error.detail) throw new Error(error.detail.message);
      else throw error;
    }
  }
}

module.exports = Utilisateur;