const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient({ host: "127.0.0.1", port: "6379" });

client.on("error", (error) => {
  console.error(error);
});

const getAsync = promisify(client.get).bind(client);

module.exports = { client, getAsync };
