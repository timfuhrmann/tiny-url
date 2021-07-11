const router = require("express").Router();
const LinkController = require("../controller/LinkController");

router.post("/create", LinkController.createLink);

router.post("/link", LinkController.getLinks);

router.get("/:id", LinkController.redirectLink);

module.exports = router;
