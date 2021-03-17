"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Position", [
      {
        id: "ef88e398-1fd7-4545-b437-079c388eafd3",
        name: "Fresher",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ef88e399-1fd7-4545-b437-079c388eafd3",
        name: "Internship",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ef88e395-1fd7-4545-b437-079c388eafd3",
        name: "On the job training",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ef88e368-1fd7-4545-b437-079c388eafd3",
        name: "Junior",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ef88e328-1fd7-4545-b437-079c388eafd3",
        name: "Senior",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "ef88e698-1fd7-4545-b437-079c388eafd3",
        name: "Non - tech",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Position", null, {});
  },
};
