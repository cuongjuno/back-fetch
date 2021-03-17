"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Right_Job", [
      {
        id: "8483d9a9-00a3-4343-a92a-d5273c176c4f",
        id_job: "b874de38-f082-4a05-a24f-f4e6bf4de1d1",
        id_right: "8c4c8dbb-3be0-400d-82be-1dda39d58105",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "8483d9a9-00a3-4343-a92a-d5273c176c5f",
        id_job: "b874de38-f082-4a05-a24f-f4e6bf4de1d1",
        id_right: "3a96f62f-7c51-4afa-81e4-b050244c0f17",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "8483d9a9-00a3-4343-a92a-d5273c176c6f",
        id_job: "b874de38-f082-4a05-a24f-f4e6bf4de1d1",
        id_right: "df35537b-f63c-4fdd-b60f-36fcffe5d325",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Right_Job", null, {});
  },
};
