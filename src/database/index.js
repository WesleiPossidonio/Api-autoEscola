
import Sequelize from 'sequelize';
import User from '../app/models/User.js';
import CreatedFormTest from '../app/models/CreatedFormTest.js';
import getConfig from '../config/database.js';

const models = [User, CreatedFormTest];
const configDatabase = getConfig(Sequelize); 

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(configDatabase);
    models.forEach((model) => model.init(this.connection));
  }
}

export default new Database();
