const { Course, Location, Place, Technology, Type } = require("../../models");

const createCourse = async (data) => {
  const course = await Course.create(data);
  return course;
};

const updateCourse = async (data) => {
  const course = await Course.findByPk(data.id);
  await course.update(data);
  return course;
};

const getCourseByCondition = async (condition, attributes, type, id_place) => {
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
            where: id_place
              ? {
                  id: id_place,
                }
              : null,
          },
        ],
      },
      {
        model: Technology,
      },
      {
        model: Type,
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

module.exports = {
  createCourse,
  getCourseByCondition,
  updateCourse,
};
