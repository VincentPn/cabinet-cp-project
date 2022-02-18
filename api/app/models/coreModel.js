const client = require('../database');

class CoreModel {
  static async findAll() {
    try {
      const {rows} = await client.query(`SELECT * FROM "${this.tableName}"`);
      const instances = [];
      for(const instance of rows) {
        instances.push(new this(instance));
      }
      return instances
    } catch (error) {
      if(error.detail) throw new Error(error.detail)
      else throw error;
    }
  }

  static async findById(id) {
    try {
      const {rows} = await client.query(`SELECT * FROM "${this.tableName}" WHERE id = $1`, [id]);
      if(!rows[0]) return;
      return new this(rows[0]);
    } catch (error) {
      if(error.detail) throw new Error(error.detail);
      else throw error;
    }
  }

  static async findByUserId(id) {
    try {
      const {rows} = await client.query(`SELECT * FROM "${this.tableName}" WHERE "utilisateur_id" = $1`, [id]);
      const instances = [];
      for(const instance of rows) {
        instances.push(new this(instance));
      }
      return instances;
    } catch (error) {
      if(error.detail) throw new Error(error.detail);
      else throw error;
    }
  }

  async create() {
    try {
      const properties = [];
      const values = [];
      const valuesCount = [];
      let count = 0;

      for(const prop in this) {
        const property = prop;
        if(prop === 'id') continue;
        properties.push(`"${property}"`);
        valuesCount.push(`$${++count}`);
        values.push(this[property]);
      }

      const {rows} = await client.query(`INSERT INTO "${this.constructor.tableName}"(${properties}) VALUES(${valuesCount}) RETURNING id`, values);

      this.id = rows[0].id;

      return this.id;
    
    } catch (error) {
      if(error.detail) throw new Error(error.detail);
      else throw error;
    }
  }


  async update() {
    try {
      await client.query(`SELECT update_${this.constructor.tableName}($1)`, [this]);
    } catch (error) {
      if(error.detail) throw new Error(error.detail);
      else throw error;
    }
  }

  static async delete(id) {
    try {
      const {rowCount} = await client.query(`DELETE FROM "${this.tableName}" WHERE id =$1`, [id]);
      return rowCount;
    } catch (error) {
      if(error.detail) throw new Error(error.detail);
      else throw error;
    }
  }
}

module.exports = CoreModel;