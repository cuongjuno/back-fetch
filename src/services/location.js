const { Course, Location, Place, Technology } = require("../../models");

const getLocationByCondition = async (condition, attributes, type) => {
  let course = null;
  let queryObj = {
    attributes: attributes ? [...attributes] : null,
    where: condition ? { ...condition } : null,
    include: [
      {
        model: Location,
        include: [
          {
            model: Place,
          },
        ],
      },
      {
        model: Technology,
      },
    ],
  };
  if (type === "FIND_ALL") {
    course = await Course.findAll(queryObj);
  } else if (type === "FIND_ONE") {
    course = await Course.findOne(queryObj);
  }
  return course;
};
