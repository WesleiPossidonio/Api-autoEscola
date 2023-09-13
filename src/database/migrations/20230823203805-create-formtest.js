'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('created_form_tests', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      release_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vehicles: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      student_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      renach: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instructor: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      class_indication: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      passed_the_test: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      payment_of_duda: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      comments: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('created_form_tests')
  },
}
