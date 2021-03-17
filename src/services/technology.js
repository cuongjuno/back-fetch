const { Technology } = require("../../models");

const getTechnologyByCondition = async (condition, attributes, type) => {
  let course = null;
  let queryObj = {
    attributes: attributes ? [...attributes] : null,
    where: condition ? { ...condition } : null,
  };
  if (type === "FIND_ALL") {
    course = await Technology.findAll(queryObj);
  } else if (type === "FIND_ONE") {
    course = await Technology.findOne(queryObj);
  }
  return course;
};

module.exports = {
  getTechnologyByCondition,
};
