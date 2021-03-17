const { User } = require("../../models");
const { Op } = require("sequelize");

const createUser = async (data) => {
  const newUser = await User.create(data);
  return newUser;
};

const getUserByCondition = async (condition, attributes, type) => {
  console.log(condition);
  let user = null;
  let queryObj = {
    attributes: attributes ? [...attributes] : null,
    where: { ...condition },
  };
  if (type === "FIND_ALL") {
    user = await User.findAll(queryObj);
  } else if (type === "FIND_ONE") {
    user = await User.findOne(queryObj);
  }
  return user;
};

module.exports = {
  createUser,
  getUserByCondition,
};
