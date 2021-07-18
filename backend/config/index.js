require("dotenv").config();

module.exports = {
  origin:
    "production" === process.env.NODE_ENV
      ? "https://tiny-url-pied.vercel.app"
      : "http://localhost:3000",
  configRedis: {
    url: process.env.REDIS_URL,
  },
};
