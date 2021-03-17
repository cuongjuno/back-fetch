"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Type", [
      {
        id: "5a0a7ae8-d70f-4032-ae34-4e6687d133c7",
        name: "Full Time",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ab3bc620-292f-464f-9c6f-e9c0b2f78216",
        name: "Part Time",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3c89fcc4-dd7b-41d7-b4c4-96d659287965",
        name: "Full Time/Part Time",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Type", null, {});
  },
};
