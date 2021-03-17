const LocalStrategy = require("passport-local").Strategy;
const TokenStrategy = require("passport-accesstoken").Strategy;
const userService = require("../services/user");
const { compare } = require("../common/hash");
const util = require("../common/util");
const strategyOptions = {
  tokenHeader: "token",
  // tokenField:     'custom-token'
};

module.exports = function (passport) {
  passport.use(
    "local-login",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      (req, email, password, done) => {
        process.nextTick(async () => {
          try {
            const user = await userService.getUserByCondition(
              { email: email },
              null,
              "FIND_ONE"
            );

            if (!user) {
              const data = util.sendError(
                200,
                "EMAIL_NOT_FOUND",
                "email is not exist"
              );
              return done(null, false, data);
            }
            const hashPassword = user.password;
            const variable = await compare(password, hashPassword);
            if (variable) {
              return done(null, user);
            }
            const data = util.sendError(
              400,
              "PASSWORD_INCORRECT",
              "Your password is incorrect"
            );
            return done(null, false, data);
          } catch (e) {
            console.log(e);
            const data = util.sendError(
              400,
              "PASSWORD_INCORRECT",
              "Your password is incorrect"
            );
            return done(null, false, data);
          }
        });
      }
    )
  );
};

module.exports = function (passport) {
  passport.use(new TokenStrategy(strategyOptions, function (token, done) {
    
  }));
};
