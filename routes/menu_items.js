var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    console.log("hi");
    res.send("Express");
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
