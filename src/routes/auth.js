const Router = require("express").Router();
const { celebrate, Joi, errors } = require("celebrate");
const controller = require('../controllers');

const authController = controller.Auth;

Router.post(
  "/api/register",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().max(100),
      password: Joi.string().required().min(8),
      name: Joi.string().required().max(100),
    }),
  }),
  authController.createUser
);
Router.post(
  "/api/sigin",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().max(100),
      password: Joi.string().required().min(8),
    }),
  }),
  authController.sigin
);

Router.use(errors());
module.exports = Router;
