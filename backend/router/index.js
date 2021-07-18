const router = require("express").Router();
const LinkController = require("../controller/LinkController");

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Create a tiny url
 *     requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      link:
 *                          type: string
 *                          example: https://www.youtube.com/
 *                          description: Link which is to be shortened
 *
 *     responses:
 *       200:
 *         description: Ready to use tiny url.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: abcdef
 *                   description: The unique identifier.
 *                 tinyUrl:
 *                   type: string
 *                   example: http://localhost:3000/abcdef
 *                   description: The newly generated tiny url.
 *                 link:
 *                   type: string
 *                   example: https://www.youtube.com/
 *                   description: The original link the user will be redirected to.
 *                 clicks:
 *                   type: integer
 *                   example: 0
 *       400:
 *         description: Unknown/invalid url.
 *       500:
 *         description: Error trying to create link.
 */
router.post("/create", LinkController.createLink);

/**
 * @swagger
 * /link:
 *   post:
 *     summary: Get links
 *     description: Get a single or multiple links at once.
 *     requestBody:
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  properties:
 *                      identifiers:
 *                          type: array
 *                          items:
 *                              type: string
 *                          example: ["abcdef", "ghijkl"]
 *     responses:
 *       200:
 *         description: An array of all requested tiny urls.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                      id:
 *                          type: string
 *                      tinyUrl:
 *                          type: string
 *                      link:
 *                          type: string
 *                      clicks:
 *                          type: integer
 *             example:
 *                  - id: abcdef
 *                    tinyUrl: http://localhost:3000/abcdef
 *                    link: https://www.youtube.com/
 *                    example: 4
 *                  - id: ghijkl
 *                    tinyUrl: http://localhost:3000/ghijkl
 *                    link: https://www.twitch.tv/
 *                    example: 20
 *       400:
 *         description: No identifiers provided.
 *       500:
 *         description: Error trying to find link.
 */
router.post("/link", LinkController.getLinks);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Redirect to link
 *     description: Tiny url to redirect to original link.
 *     parameters:
 *       -  in: path
 *          name: id
 *          required: true
 *          description: Tiny url identifier
 *          schema:
 *              type: string
 *              example: abcdef
 *     responses:
 *       301:
 *         description: Redirect to original link.
 *       400:
 *         description: Couldn't find redirect url.
 *       500:
 *         description: Error trying to redirect.
 */
router.get("/:id", LinkController.redirectLink);

module.exports = router;
