const Router = require("express").Router();
const { celebrate, Joi, errors } = require("celebrate");
const controller = require("../controllers");


const courseController = controller.Course;

Router.post(
  "/api/course",
  celebrate({
    body: Joi.object().keys({
      content: Joi.object(),
      title: Joi.string(),
      study_time: Joi.string(),
      tuition_number: Joi.string(),
      expect_opening: Joi.string(),
      is_show: Joi.boolean(),
      id_location: Joi.string(),
      id_type: Joi.string(),
      id_technology: Joi.string(),
      imageTitle: Joi.string(),
    }),
  }),
  courseController.createCourse
);
Router.post("/api/course-image", courseController.uploadImageCourse);
Router.post("/api/editor/course-image", courseController.uploadImageCourseEditor);
Router.post("/api/editor/course-image-url", courseController.uploadImageCourseEditorByURL);
Router.patch(
  "/api/course",
  celebrate({
    body: Joi.object().keys({
      id: Joi.string(),
      content: Joi.string(),
      study_time: Joi.string(),
      tuition_number: Joi.string(),
      expect_opening: Joi.string(),
      is_show: Joi.boolean(),
      id_location: Joi.string(),
      id_type: Joi.string(),
      id_technology: Joi.string(),
    }),
  }),
  courseController.updateCourse
);
Router.get("/api/course", courseController.getAllCourse);
Router.get("/api/course/:id", courseController.getCourseById);
Router.get("/api/init-course", courseController.initCourse);

Router.use(errors());
module.exports = Router;
