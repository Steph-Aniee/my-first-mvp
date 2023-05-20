require("dotenv").config();
const mysql = require("mysql");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "mad_chocoholic",
  multipleStatements: true,
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists ChocOfMonth; DROP TABLE if exists menu; CREATE TABLE `ChocOfMonth`(`id` INT UNSIGNED NOT NULL AUTO_INCREMENT, `description` LONGTEXT NOT NULL, `description_GER` LONGTEXT NOT NULL, `description_FR` LONGTEXT NOT NULL, `menu_id` INT NOT NULL, PRIMARY KEY(`id`)); CREATE TABLE `menu`(`id` INT UNSIGNED NOT NULL AUTO_INCREMENT, `item_name` VARCHAR(255) NOT NULL, `item_name_GER` VARCHAR(255) NOT NULL, `item_name_FR` VARCHAR(255) NOT NULL, `ingredients` TEXT NOT NULL, `ingredients_GER` TEXT NOT NULL, `ingredients_FR` TEXT NOT NULL, `price` TINYINT NOT NULL, `isWarmBeverage` TINYINT(1) NOT NULL, `isColdBeverage` TINYINT(1) NOT NULL, `isAlcoholicBeverage` TINYINT(1) NOT NULL, `isLunch` TINYINT(1) NOT NULL, `isDessert` TINYINT(1) NOT NULL, `image_source` VARCHAR(255) NOT NULL, PRIMARY KEY(`id`));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `ChocOfMonth` and `menu` was successful!");

    console.log("Closing...");
  });

  con.end();
});
