const userService = require("../services/user");
const util = require("../common/util");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const config = require("../../config");
const { hash } = require('../common/hash');

const createUser = async (req, res) => {
  try {
    const data = req.body;
    //check user đã tồn tại hay chưa
    const checkUser = await userService.getUserByCondition( 
      { email: data.email },
      null,
      "FIND_ONE"
    );
    if (checkUser) {
      return res
        .status(409)
        .send(util.sendError(409, "Email already exitsts!"));
    }
    //hash password
    const hashPassword = await hash(req.body.password.toString().trim());
    const newUser = await userService.createUser({...req.body, password: hashPassword});
    return res.send(util.sendSuccess(newUser.toJSON()));
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(util.sendError(500, util.errorCodes.INTERNAL_SERVER_ERROR));
  }
};

const sigin = async (req, res, next) => {
  try {
    passport.authenticate("local-login", async (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(500).send(info);
      }
      // Sử dụng JWT để sinh ra token chứa info của user đã login
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
        },
        config.app.secretKey
      );
      return res.send(
        util.sendSuccess({
          id: user.id,
          email: user.email,
          token,
        })
      );
    })(req, res, next);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send(util.sendError(500, util.errorCodes.INTERNAL_SERVER_ERROR));
  }
};

module.exports = {
  createUser,
  sigin,
};
