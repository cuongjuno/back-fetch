"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Candidate", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: {
        type: Sequelize.STRING,
      },
      date_of_birth: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      sex: {
        type: Sequelize.BOOLEAN,
      },
      school: {
        type: Sequelize.STRING,
      },
      faculty: {
        type: Sequelize.STRING,
      },
      graduation_year: {
        type: Sequelize.STRING,
      },
      score: {
        type: Sequelize.STRING,
      },
      another_skill: {
        type: Sequelize.STRING,
      },
      language: {
        type: Sequelize.STRING,
      },
      experience: {
        type: Sequelize.STRING,
      },
      profiles: {
        type: Sequelize.STRING,
      },
      id_position: {
        type: Sequelize.UUID,
      },
      id_type: {
        type: Sequelize.UUID,
      },
      id_skill: {
        type: Sequelize.UUID,
      },
      id_job: {
        type: Sequelize.UUID,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Candidate");
  },
};
