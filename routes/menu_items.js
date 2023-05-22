var express = require("express");
var router = express.Router();

/* GET menu items. */
router.get("/", async function (req, res, next) {
  try {
    res.send("Express");
  } catch (error) {
    res.status(500).send(error);
  }
});

/* POST menu items. */

/* DELETE menu items. */

/* PUT menu items. */

/* PUT only DATE of menu items. */

module.exports = router;
