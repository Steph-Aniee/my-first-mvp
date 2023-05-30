var express = require("express");
var router = express.Router();
const db = require("../model/helper");
var createError = require("http-errors");

/* GET all menu items. */
router.get("/", async function (req, res, next) {
  try {
    const result = await db(`SELECT * FROM menu;`);
    res.send(result.data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/* GET specific menu items. */
router.get("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const results = await db(`SELECT * FROM menu WHERE id = ${id};`);
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/* POST new menu item. */
router.post("/", async function (req, res, next) {
  try {
    await db(
      `INSERT INTO menu (item_name, item_name_GER, item_name_FR, ingredients, ingredients_GER, ingredients_FR, price, isWarmBeverage, isColdBeverage, isAlcoholicBeverage, isLunch, isDessert, isChocOfMonth, description, description_GER, description_FR, image_source, date) VALUES ('${req.body.item_name}','${req.body.item_name_GER}', '${req.body.item_name_FR}', '${req.body.ingredients}', '${req.body.ingredients_GER}', '${req.body.ingredients_FR}', '${req.body.price}', '${req.body.isWarmBeverage}', '${req.body.isColdBeverage}', '${req.body.isAlcoholicBeverage}', '${req.body.isLunch}', '${req.body.isDessert}', '${req.body.isChocOfMonth}', '${req.body.description}', '${req.body.description_GER}', '${req.body.description_FR}', '${req.body.image_source}', '${req.body.date}');`
    );

    const response = await db(`SELECT * FROM menu;`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/* DELETE menu items. */
router.delete("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;

    await db(`DELETE FROM menu WHERE id = ${id};`);

    const results = await db(`SELECT * FROM menu;`);
    res.send(results.data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

/* PUT menu items. */
router.put("/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    await db(
      `UPDATE menu SET item_name = '${req.body.item_name}', item_name_GER = '${req.body.item_name_GER}', item_name_FR = '${req.body.item_name_FR}', ingredients = '${req.body.ingredients}', ingredients_GER = '${req.body.ingredients_GER}', ingredients_FR = '${req.body.ingredients_FR}', price = ${req.body.price}, isWarmBeverage = ${req.body.isWarmBeverage}, isColdBeverage = ${req.body.isColdBeverage}, isAlcoholicBeverage = ${req.body.isAlcoholicBeverage}, isLunch = ${req.body.isLunch}, isDessert = ${req.body.isDessert}, isChocOfMonth = '${req.body.isChocOfMonth}', description = '${req.body.description}', description_GER = '${req.body.description_GER}', description_FR = '${req.body.description_FR}', image_source = '${req.body.image_source}', date = '${req.body.date}' WHERE id = ${id};`
    );
    // Fetch the updated data
    const response = await db(`SELECT * FROM menu;`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
