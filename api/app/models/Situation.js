const CoreModel = require('./coreModel');

class Situation extends CoreModel {
    static tableName = "situation";

    constructor(obj={}) {
        super(obj);
        for(const propName in obj) {
            this[propName] = obj[propName];
        }
    }
}

module.exports = Situation;