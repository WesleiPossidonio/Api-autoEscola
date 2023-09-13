module.exports = {
  dialect: 'postgres',
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  define: {
    timespamps: true,
    underscored: true,
  },
}

// module.exports = {
//   dialect: 'postgres',
//   url: process.env.URLDATABASE,
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// };