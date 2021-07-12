require("dotenv").config();

module.exports = {
  configRedis: {
    url: process.env.REDIS_URL,
  },
};
