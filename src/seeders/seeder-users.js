'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  //email: DataTypes.STRING,
    // password: DataTypes.STRING,
    // firstName: DataTypes.STRING,
    // lastName: DataTypes.STRING,
    // email: DataTypes.STRING,
    // address: DataTypes.STRING,
    // roleid: DataTypes.STRING,
    // gender: DataTypes.BOOLEAN,
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email:'nguyenvanhung@gmail.com',
      password: '12345',
      firstName: 'Hung',
      lastName: 'Nguyen van',
      address: 'DaNang',
      typeRole: 'ROLE',
      keyRole: 'R1',
      Gender: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
