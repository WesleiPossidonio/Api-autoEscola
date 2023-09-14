// import Sequelize from 'sequelize'

// import User from '../app/models/User.js'
// import configDataBase from '../config/database.js'

// import CreatedFormTest from '../app/models/CreatedFormTest.js'

// const models = [User, CreatedFormTest]
// class Database {
//   constructor() {
//     this.init()
//   }

//   init() {
//     this.connection = new Sequelize(configDataBase)
//     models.map((model) => model.init(this.connection))
//   }
// }





// import Sequelize from 'sequelize'


// import configDataBase from '../config/database'
// import CreatedFormTest from '../app/models/CreatedFormTest'

// import User from '../app/models/User'

// const models = [CreatedFormTest, User ]

// class Database {
//   constructor() {
//     this.init()
//   }

//   init() {
//     this.connection = new Sequelize(configDataBase)
//     models
//       .map((model) => model.init(this.connection))
//   }
// }

// export default new Database()

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
