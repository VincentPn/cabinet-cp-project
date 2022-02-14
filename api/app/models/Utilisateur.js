const CoreModel = require('./coreModel');
const db = require('../database');

class Utilisateur extends CoreModel {
  static tableName = "user";

  constructor(obj={}) {
    super(obj);
    for(const propName in obj) {
      this[propName] = obj[propName];
    }
  }

  static async findByEmail(email) {
    try {
      const {rows} = await db.query('SELECT * FROM "utilisateur" WHERE "email" = $1', [email]);
      return rows[0];
    } catch (error) {
      if(error.detail) throw new Error(error.detail.message);
      else throw error;
    }
  }
}

module.exports = Utilisateur;