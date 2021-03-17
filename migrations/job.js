"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Job", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      title: {
        type: Sequelize.STRING,
      },
      salary_range: {
        type: Sequelize.STRING,
      },
      experience: {
        type: Sequelize.STRING,
      },
      overview: {
        type: Sequelize.TEXT,
      },
      request: {
        type: Sequelize.TEXT,
      },
      benefits: {
        type: Sequelize.TEXT,
      },
      contact: {
        type: Sequelize.TEXT,
      },
      deadline: {
        type: Sequelize.STRING,
      },
      id_type: {
        type: Sequelize.UUID,
      },
      id_place: {
        type: Sequelize.UUID,
      },
      id_position: {
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
    await queryInterface.dropTable("Job");
  },
};
