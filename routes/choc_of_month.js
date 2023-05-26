var express = require("express");
var router = express.Router();
const db = require("../model/helper");
var createError = require("http-errors");

/* GET all chocs of the month. */
router.get("/", async function (req, res, next) {
  try {
    const results = await db(
      "SELECT c.menu_id, c.description, c.description_GER, c.description_FR, m.image_source FROM ChocOfMonth as c LEFT JOIN menu as m ON c.menu_id = m.id ORDER BY c.menu_id ASC;"
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* GET current choc of the month. */
router.get("/:id", async function (req, res, next) {
  try {
    const menuID = req.params.id;
    const results = await db(
      `SELECT c.menu_id, c.description, c.description_GER, c.description_FR, m.image_source FROM ChocOfMonth as c LEFT JOIN menu as m ON c.menu_id = m.id WHERE ${menuID} = c.menu_id;`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
