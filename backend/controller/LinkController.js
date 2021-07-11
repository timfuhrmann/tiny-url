const { client } = require("../redis/index");
const { getAsync } = require("../redis/index");
const createUniqueIdentifier = require("../util/identifier");
const getTinyUrl = require("../util/tinyUrl");

class LinkController {
  static async createLink(req, res) {
    const { link } = req.body;

    if (!link) {
      return res.status(400).send("Link not provided.");
    }

    try {
      const id = await createUniqueIdentifier();

      client.set("link:" + id, link);

      const tinyUrl = getTinyUrl(req, id);
      res.status(200).json({ id, tinyUrl, link, clicks: 0 });
    } catch (error) {
      console.log(error);
      res.status(500).send("Error trying to create link.");
    }
  }

  static async getLinks(req, res) {
    try {
      const { identifiers } = req.body;

      if (!identifiers || identifiers.length === 0) {
        res.status(400).send("No identifiers provided.");
        return;
      }

      const urls = [];

      for (const id of identifiers) {
        const link = await getAsync("link:" + id);
        const clicks = (await getAsync("clicks:" + id)) || 0;
        const tinyUrl = getTinyUrl(req, id);
        urls.push({ id, tinyUrl, link, clicks });
      }

      res.status(200).json(urls);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error trying to find link.");
    }
  }

  static async redirectLink(req, res) {
    try {
      const { id } = req.params;

      const url = await getAsync("link:" + id);

      if (!url) {
        return res.status(400).send("Couldn't find redirect url.");
      }

      let clicks = await getAsync("clicks:" + id);

      if (!clicks) {
        client.set("clicks:" + id, 1);
      } else {
        const newClicks = parseInt(clicks, 10) + 1;
        client.set("clicks:" + id, newClicks);
      }

      res.status(301).redirect(url);
    } catch (error) {
      console.log(error);
      res.status(500).send("Error trying to redirect.");
    }
  }
}

module.exports = LinkController;
