import pg from 'pg';

export default (Sequelize) => {
  return {
    dialect: 'postgres',
    dialectModule: pg,
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    define: {
      timespamps: true,
      underscored: true,
      underscoredAll: true,
    },
  };
};

// module.exports = {
//   dialect: 'postgres',
//   host: process.env.HOST,
//   username: process.env.USERNAME,
//   password: process.env.PASSWORD,
//   database: process.env.DATABASE,
//   define: {
//     timespamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// }

// module.exports = {
//   dialect: 'postgres',
//   url: process.env.URLDATABASE,
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };