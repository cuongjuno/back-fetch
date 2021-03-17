"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Course", {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      imageTitle: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      content: {
        type: Sequelize.JSON,
      },
      tuition_number: {
        type: Sequelize.STRING,
      },
      expect_opening: {
        type: Sequelize.STRING,
      },
      study_time: {
        type: Sequelize.STRING,
      },
      is_show: {
        type: Sequelize.BOOLEAN,
      },
      id_location: {
        type: Sequelize.UUID,
      },
      id_type: {
        type: Sequelize.UUID,
      },
      id_technology: {
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
    await queryInterface.dropTable("Course");
  },
};
