"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Right", [
      {
        id: "8c4c8dbb-3be0-400d-82be-1dda39d58105",
        content: "Bảo hiểm sức khỏe FPT care do AON cung cấp và dành riêng cho nhân viên của FPT.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "3a96f62f-7c51-4afa-81e4-b050244c0f17",
        content: "Đánh giá lương 2 lần / năm hoặc về thành tích xuất sắc.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: "df35537b-f63c-4fdd-b60f-36fcffe5d325",
        content: "Kỳ nghỉ hè hàng năm: Môi trường làm việc quốc tế, năng động, thân thiện.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Right", null, {});
  },
};
