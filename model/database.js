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
    "DROP TABLE if exists `ChocOfMonth`; DROP TABLE if exists `menu`; CREATE TABLE `menu` (`id` INT UNSIGNED NOT NULL AUTO_INCREMENT, `item_name` VARCHAR(255) NOT NULL, `item_name_GER` VARCHAR(255) NOT NULL, `item_name_FR` VARCHAR(255) NOT NULL, `ingredients` TEXT NOT NULL, `ingredients_GER` TEXT NOT NULL, `ingredients_FR` TEXT NOT NULL, `price` DECIMAL(5,2) NOT NULL, `isWarmBeverage` TINYINT(1) NOT NULL, `isColdBeverage` TINYINT(1) NOT NULL, `isAlcoholicBeverage` TINYINT(1) NOT NULL, `isLunch` TINYINT(1) NOT NULL, `isDessert` TINYINT(1) NOT NULL, `image_source` VARCHAR(255) NOT NULL, `date` DATE NOT NULL, UNIQUE KEY `unique_date` (`date`), PRIMARY KEY(`id`)); CREATE TABLE `ChocOfMonth` (`id` INT UNSIGNED NOT NULL AUTO_INCREMENT, `description` LONGTEXT NOT NULL, `description_GER` LONGTEXT NOT NULL, `description_FR` LONGTEXT NOT NULL, `menu_id` INT UNSIGNED NOT NULL, PRIMARY KEY(`id`), CONSTRAINT `chocofmonth_menu_id_foreign` FOREIGN KEY (`menu_id`) REFERENCES `menu` (`id`));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table creation `ChocOfMonth` and `menu` was successful!");

    console.log("Closing...");
  });

  let insertDesserts = `INSERT INTO menu (item_name, item_name_GER, item_name_FR, ingredients, ingredients_GER, ingredients_FR, price, isWarmBeverage, isColdBeverage, isAlcoholicBeverage, isLunch, isDessert, image_source, date) VALUES ("Chocolate Pecan Pie", "Schokoladen-Pekannusskuchen", "Tourte au Chocolat et aux Noix de Pécan", "Chocolate, vegan butter, sugar, flour, egg substitute, vanilla extract, salt", "Schokolade, vegane Butter, Zucker, Mehl, Eiersatz, Vanilleextrakt, Salz", "Chocolat, beurre végétalien, sucre, farine, substitut d'œuf, extrait de vanille, sel", 5.50, FALSE, FALSE, FALSE, FALSE, TRUE, 'https://images.unsplash.com/photo-1588848009831-18daae4945a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=852&q=80', "2023-10-01"), ("Chocolate Truffle Cake", "Schokoladentrüffelkuchen", "Gâteau Truffe au Chocolat", "Chocolate, vegan butter, sugar, egg substitute, flour, cocoa powder, vanilla extract, salt", "Schokolade, vegane Butter, Zucker, Eiersatz, Mehl, Kakaopulver, Vanilleextrakt, Salz", "Chocolat, beurre végétalien, sucre, substitut d'œuf, farine, cacao en poudre, extrait de vanille, sel", 4.80, FALSE, FALSE, FALSE, FALSE, TRUE, 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',	"2023-11-01")`;
  let insertLunch = `INSERT INTO menu (item_name, item_name_GER, item_name_FR, ingredients, ingredients_GER, ingredients_FR, price, isWarmBeverage, isColdBeverage, isAlcoholicBeverage, isLunch, isDessert, image_source, date) VALUES ("Chocolate Chip Scones", "Chocolate-Chip-Teegebäck", "Scones au Chocolat", "Chocolate chips, flour, sugar, baking powder, salt, vegan butter, oat milk, egg substitute, vanilla extract", "Schokoladenstückchen, Mehl, Zucker, Backpulver, Salz, vegane Butter, Hafermilch, Eiersatz, Vanilleextrakt", "Pépites de chocolat, farine, sucre, levure chimique, sel, beurre végétalien, lait d'avoine, substitut d'œuf, extrait de vanille", 3.20, FALSE, FALSE, FALSE, FALSE, TRUE, 'https://images.unsplash.com/photo-1611337854278-d50f443c3a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2NvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', "2023-12-01"), ("Austrian Sachertorte", "Sachertorte", "Sachertorte Autrichienne", "Chocolate, vegan butter, sugar, egg substitute, flour, apricot jam, rum", "Schokolade, vegane Butter, Zucker, Eiersatz, Mehl, Marillenmarmelade, Rum", "Chocolat, beurre végétalien, sucre, substitut d'œuf, farine, confiture d'abricot, rhum", 6.00, FALSE, FALSE, FALSE, FALSE, TRUE, 'https://images.unsplash.com/photo-1582650949011-13bacf9a35fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9rb2t1Y2hlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', "2024-02-01"), ("Chocolate and Brie Panini", "Schokolade und Brie Panini", "Panini au Chocolat et au Brie", "Chocolate, vegan Brie alternative, baguette, vegan butter", "Schokolade, vegane Brie-Alternative, Baguette, vegane Butter", "Chocolat, alternative végétalienne au Brie, baguette, beurre végétalien", 7.50, FALSE, FALSE, FALSE, TRUE, FALSE, 'https://images.unsplash.com/photo-1617993663472-5e20dab2111f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFuaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', "2024-03-01")`;
  let insertMoreChocs = `INSERT INTO menu (item_name, item_name_GER, item_name_FR, ingredients, ingredients_GER, ingredients_FR, price, isWarmBeverage, isColdBeverage, isAlcoholicBeverage, isLunch, isDessert, image_source, date) VALUES ("Chocolate Berry Smoothie Bowl", "Schokoladen-Beeren-Smoothie-Bowl", "Bol Smoothie au Chocolat et aux Baies", "Chocolate, strawberries, raspberries, blueberries, banana, oat milk, soy yogurt, agave syrup", "Schokolade, Erdbeeren, Himbeeren, Blaubeeren, Banane, Hafermilch, Sojajoghurt, Agavendicksaft", "Chocolat, fraises, framboises, myrtilles, banane, lait d'avoine, yaourt de soja, sirop d'agave", 6.80, FALSE, FALSE, FALSE, TRUE, FALSE, 'https://images.unsplash.com/photo-1583577012041-b9fe16bf9345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlcnJ5JTIwY2hvY29sYXRlJTIwYm93bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', "2024-04-01"), ("Chocolate Chili Sin Carne", "Schokoladen-Chili-sin-Carne", "Chili Sin Carne au Chocolat", "Chocolate, kidney beans, bell peppers, onions, garlic, tomatoes, chili powder, cumin, salt, pepper", "Schokolade, Kidneybohnen, Paprika, Zwiebeln, Knoblauch, Tomaten, Chilipulver, Kreuzkümmel, Salz, Pfeffer", "Chocolat, haricots rouges, poivrons, oignons, ail, tomates, poudre de chili, cumin, sel, poivre", 8.50, FALSE, FALSE, FALSE, TRUE, FALSE, 'https://images.unsplash.com/photo-1658308767269-42ac00314021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGklMjBzaW4lMjBjYXJuZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', "2024-06-01"), ("Vegan Cocoa-Spiced Chicken Skewers", "Vegane kakaogewürzte Hähnchenspieße", "Brochettes de Poulet Végétalien Épicées au Cacao", "Cocoa spice blend, soy meat substitute, vegetable broth, paprika, garlic powder, onion powder, salt, pepper, oil", "Kakao-Gewürzmischung, Sojafleischersatz, Gemüsebrühe, Paprikapulver, Knoblauchpulver, Zwiebelpulver, Salz, Pfeffer, Öl", "Mélange d'épices au cacao, substitut de viande de soja, bouillon de légumes, paprika, poudre d'ail, poudre d'oignon, sel, poivre, huile", 9.20, FALSE, FALSE, FALSE, TRUE,	FALSE, 'https://images.unsplash.com/photo-1644204010804-827f6e0e2da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGglQzMlQTRobmNoZW5zcGllJUMzJTlGfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', "2024-08-01");`;

  con.query(insertDesserts, function (err, result) {
    if (err) throw err;
  });

  con.query(insertLunch, function (err, result) {
    if (err) throw err;
  });

  con.query(insertMoreChocs, function (err, result) {
    if (err) throw err;
  });

  con.end();
});
