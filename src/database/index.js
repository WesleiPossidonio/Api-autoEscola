import Sequelize from 'sequelize'

import User from '../app/models/User.js'

import configDatabase from '../config/database.js'
import CreatedFormTest from '../app/models/CreatedFormTest.js'

const models = [User, CreatedFormTest]
class Database {
  constructor() {
    this.init()
  }

  init() {
    this.connection = new Sequelize(configDatabase)
    models.map((model) => model.init(this.connection))
  }
}

export default new Database()
