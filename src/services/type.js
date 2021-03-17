const { Type } = require("../../models");

const getTypeByCondition = async (condition, attributes, type) => {
  let course = null;
  let queryObj = {
    attributes: attributes ? [...attributes] : null,
    where: condition ? { ...condition } : null,
  };
  if (type === "FIND_ALL") {
    course = await Type.findAll(queryObj);
  } else if (type === "FIND_ONE") {
    course = await Type.findOne(queryObj);
  }
  return course;
};

module.exports = {
  getTypeByCondition,
};
