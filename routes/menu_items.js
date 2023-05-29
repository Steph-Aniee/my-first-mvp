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
    res.status(500).send(error);
  }
});

/* GET specific menu items. */
router.get("/:id", async function (req, res, next) {
  try {
    const menuID = req.params.id;
    const results = await db(`SELECT * FROM menu WHERE id = ${menuID};`);
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* POST new menu item. */
router.post("/", async function (req, res, next) {
  try {
    // Insert menu item and get the generated id
    await db(
      `INSERT INTO menu (item_name, item_name_GER, item_name_FR, ingredients, ingredients_GER, ingredients_FR, price, isWarmBeverage, isColdBeverage, isAlcoholicBeverage, isLunch, isDessert, image_source, date) VALUES ('${req.body.item_name}','${req.body.item_name_GER}', '${req.body.item_name_FR}', '${req.body.ingredients}', '${req.body.ingredients_GER}', '${req.body.ingredients_FR}', '${req.body.price}', '${req.body.isWarmBeverage}', '${req.body.isColdBeverage}', '${req.body.isAlcoholicBeverage}', '${req.body.isLunch}', '${req.body.isDessert}', '${req.body.image_source}', '${req.body.date}');`
    );

    // Accessing the generated menu id through the unique key where we can definitely only have one of a kind, the date
    const gettingID = await db(
      `SELECT id FROM menu WHERE date = '${req.body.date}'`
    );

    const menuID = gettingID.data[0].id;
    // Insert into ChocOfMonth with the matching menu_id
    const addingChocomo = await db(
      `INSERT INTO ChocOfMonth (description, description_GER, description_FR, menu_id) VALUES ('${req.body.description}','${req.body.description_GER}','${req.body.description_FR}', ${menuID});`
    );

    if (!addingChocomo.ok) {
      await db(`DELETE FROM menu WHERE id = ${menuID};`);
      res.send({
        message:
          "Something went wrong with adding the choc of month descriptions.",
      });
    }

    // Fetch the updated data
    const response = await db(
      `SELECT * FROM menu LEFT JOIN ChocOfMonth ON menu.id = chocofmonth.menu_id;`
    );
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
});

/* DELETE menu items. */
router.delete("/:id", async function (req, res, next) {
  try {
    const menuID = req.params.id;

    //need too delete first choc of month data (because otherwise there will be an error if you try to delete the parent with the connecting key/id first)
    await db(`DELETE FROM ChocOfMonth WHERE menu_id = ${menuID};`);
    // then we can delete the rest of the menu item
    await db(`DELETE FROM menu WHERE id = ${menuID};`);

    //and finally send back the updated items and choc of month data in the response
    const results = await db(
      `SELECT * FROM menu LEFT JOIN ChocOfMonth ON menu.id = chocofmonth.menu_id;`
    );
    res.send(results.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

/* PUT menu items. */
router.put("/:id", async function (req, res, next) {
  try {
    const menuID = req.params.id;
    //update menu item
    await db(
      `UPDATE menu SET item_name = '${req.body.item_name}', item_name_GER = '${req.body.item_name_GER}', item_name_FR = '${req.body.item_name_FR}', ingredients = '${req.body.ingredients}', ingredients_GER = '${req.body.ingredients_GER}', ingredients_FR = '${req.body.ingredients_FR}', price = ${req.body.price}, isWarmBeverage = ${req.body.isWarmBeverage}, isColdBeverage = ${req.body.isColdBeverage}, isAlcoholicBeverage = ${req.body.isAlcoholicBeverage}, isLunch = ${req.body.isLunch}, isDessert = ${req.body.isDessert}, image_source = '${req.body.image_source}', date = '${req.body.date}' WHERE id = ${menuID};`
    );

    // Update ChocOfMonth description
    await db(
      `UPDATE ChocOfMonth SET description = '${req.body.description}', description_GER = '${req.body.description_GER}', description_FR = '${req.body.description_FR}' WHERE menu_id = ${menuID};`
    );

    // Fetch the updated data
    const response = await db(
      `SELECT * FROM menu LEFT JOIN ChocOfMonth ON menu.id = chocofmonth.menu_id;`
    );
    res.send(response.data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
