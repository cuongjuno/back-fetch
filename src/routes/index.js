const Router = require("express").Router();
const authRoutes = require("./auth");
const courseRoutes = require("./course");

Router.use(authRoutes);
Router.use(courseRoutes);

module.exports = Router;
