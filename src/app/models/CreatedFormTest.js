import { Sequelize, Model } from 'sequelize'

class CreatedFormTest extends Model {
  static init(sequelize) {
    super.init(
      {
        release_date: Sequelize.STRING,
        vehicles: Sequelize.STRING,
        student_name: Sequelize.STRING,
        cpf: Sequelize.STRING,
        renach: Sequelize.STRING,
        instructor: Sequelize.STRING,
        class_indication: Sequelize.STRING,
        passed_the_test: Sequelize.STRING,
        payment_of_duda: Sequelize.STRING,
        comments: Sequelize.STRING,
      },
      {
        sequelize,

      },
    )
    return this
  }
}

export default CreatedFormTest
