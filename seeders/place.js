"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Place", [
      {
        id: "c8860c5d-dc40-4078-ae73-74daf7bad884",
        name: "Hà Nội",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "5586ec71-9785-44ce-ad9f-26c14a42bba0",
        name: "TP HCM",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "c3eeed9e-3629-4473-a294-393213a2ced4",
        name: "Cần Thơ",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Place", null, {});
  },
};
