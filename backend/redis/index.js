const redis = require("redis");
const { promisify } = require("util");
const { configRedis } = require("../config");

const client = redis.createClient({ url: configRedis.url });

client.on("error", (error) => {
  console.error(error);
});

const getAsync = promisify(client.get).bind(client);

module.exports = { client, getAsync };
