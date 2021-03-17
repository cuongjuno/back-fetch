const { Location, Place } = require("../../models");

const getPlaceByCondition = async (condition, attributes, type) => {
  let course = null;
  let queryObj = {
    attributes: attributes ? [...attributes] : null,
    where: condition ? { ...condition } : null,
    include: [
      {
        model: Location,
        attributes: ["id", "name"],
      },
    ],
  };
  if (type === "FIND_ALL") {
    course = await Place.findAll(queryObj);
  } else if (type === "FIND_ONE") {
    course = await Place.findOne(queryObj);
  }
  return course;
};

module.exports = {
  getPlaceByCondition,
};
