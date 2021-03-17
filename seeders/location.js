"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Location", [
      {
        id: "0f721ade-c509-4335-91d4-f4de2d871f3a",
        name: "Tòa nhà FPT Complex, đường Nam Kỳ Khởi Nghĩa, Q.Ngũ Hành Sơn",
        id_place: "c8860c5d-dc40-4078-ae73-74daf7bad884",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "2fb015a3-70b3-468e-ad1d-20eb2c71057c",
        name: "FPT Software",
        id_place: "c8860c5d-dc40-4078-ae73-74daf7bad884",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "efe66aa5-befd-4c10-9179-67a5a715c224",
        name: "Tòa nhà Ftown – Lô T2, đường D1, khu Công nghệ cao, phường Tân Phú, quận 9",
        id_place: "c8860c5d-dc40-4078-ae73-74daf7bad884",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Location", null, {});
  },
};
