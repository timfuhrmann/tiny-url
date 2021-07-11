const getTinyUrl = (req, identifier) => {
  return `${req.protocol}://${req.get("host")}/${identifier}`;
};

module.exports = getTinyUrl;
