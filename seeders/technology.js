"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Technology", [
      {
        id: "bca7a11b-db73-41d1-8206-f2b771de0b3d",
        name: "Java",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a992752a-b159-4df3-9bfb-2e93644e5ad1",
        name: "Angular",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a992752a-b159-4df3-9bfb-2e93644e5ad2",
        name: "Python",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a992752a-b159-4df3-9bfb-2e93644e5ad3",
        name: "Android",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a992752a-b159-4df3-9bfb-2e93644e5ad4",
        name: ".NET",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a992752a-b159-4df3-9bfb-2e93644e5ad5",
        name: "Front-end",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a992752a-b159-4df3-9bfb-2e93644e5ad6",
        name: "Node JS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a992752a-b159-4df3-9bfb-2e93644e5ad7",
        name: "C/C++",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a992752a-b159-4df3-9bfb-2e93644e5ad8",
        name: "Testing",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "a992752a-b159-4df3-9bfb-2e93644e5ad9",
        name: "iOS",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "0a8934dc-dac4-4efc-8e10-6a8fdaaae3b5",
        name: "C/Embedded",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "0a8934dc-dac4-4efc-8e10-6a8fdaaae3b6",
        name: "Khác",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "0a8934dc-dac4-4efc-8e10-6a8fdaaae3b7",
        name: "BA",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "0a8934dc-dac4-4efc-8e10-6a8fdaaae3b8",
        name: "Golang",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Technology", null, {});
  },
};
