const { nanoid } = require("nanoid");
const { getAsync } = require("../redis");

const createUniqueIdentifier = () => {
  return new Promise(async (resolve) => {
    const identifier = nanoid(6);
    const exists = await getAsync("link:" + identifier);

    if (!!exists) {
      createUniqueIdentifier();
    } else {
      resolve(identifier);
    }
  });
};

module.exports = createUniqueIdentifier;
