'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Booking', {
    // statusId: DataTypes.STRING,
    // doctorId: DataTypes.INTEGER,
    // patientId: DataTypes.STRING,
    // timeType: DataTypes.STRING,
    // date: DataTypes.STRING,
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.STRING
      },
      doctorId: {
        type: Sequelize.INTEGER
      },
      patientID: {
        type: Sequelize.INTEGER
      },
      timeType: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('booking');
  }
};