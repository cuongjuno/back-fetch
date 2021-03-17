require("dotenv").config();

const envVariables = {
  env: process.env.NODE_ENV,
  app: {
    port: process.env.APP_PORT || 1910,
    secretKey: process.env.APP_SECRET_KEY || "Fetch-2021",
  },
  serverLink: process.env.SERVERLINK || "http://localhost:3000"
};
module.exports = envVariables;
