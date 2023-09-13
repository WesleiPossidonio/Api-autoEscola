// module.exports = {
//   dialect: 'postgres',
//   host: 'silly.db.elephantsql.com',
//   username: 'kthljhxs',
//   password: 'ER-26CHhV04fOYqmuWqSFBMLj1J_v9ES',
//   database: 'autoescola-postgres',
//   define: {
//     timespamps: true,
//     underscored: true,
//     underscoredAll: true,
//   },
// }

module.exports = {
  dialect: 'postgres',
  url: process.env.URLDATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};