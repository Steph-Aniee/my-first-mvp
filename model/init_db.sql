DROP TABLE if exists `menu`; CREATE TABLE `menu` (`id` INT UNSIGNED NOT NULL AUTO_INCREMENT, `item_name` VARCHAR(255) NOT NULL, `item_name_GER` VARCHAR(255) NOT NULL, `item_name_FR` VARCHAR(255) NOT NULL, `ingredients` TEXT NOT NULL, `ingredients_GER` TEXT NOT NULL, `ingredients_FR` TEXT NOT NULL, `price` DECIMAL(5,2) NOT NULL, `isWarmBeverage` TINYINT(1) NOT NULL, `isColdBeverage` TINYINT(1) NOT NULL, `isAlcoholicBeverage` TINYINT(1) NOT NULL, `isLunch` TINYINT(1) NOT NULL, `isDessert` TINYINT(1) NOT NULL, `isChocOfMonth` TINYINT(1) NOT NULL, `description` LONGTEXT NOT NULL, `description_GER` LONGTEXT NOT NULL, `description_FR` LONGTEXT NOT NULL, `image_source` VARCHAR(255) NOT NULL, `date` DATE NOT NULL, UNIQUE KEY `unique_date` (`date`), PRIMARY KEY(`id`)); INSERT INTO menu (item_name, item_name_GER, item_name_FR, ingredients, ingredients_GER, ingredients_FR, price, isWarmBeverage, isColdBeverage, isAlcoholicBeverage, isLunch, isDessert, isChocOfMonth, description, description_GER, description_FR, image_source, date) VALUES ("Chocolate Pecan Pie", "Schokoladen-Pekannusskuchen", "Tourte au Chocolat et aux Noix de Pécan", "Chocolate, vegan butter, sugar, flour, egg substitute, vanilla extract, salt", "Schokolade, vegane Butter, Zucker, Mehl, Eiersatz, Vanilleextrakt, Salz", "Chocolat, beurre végétalien, sucre, farine, substitut d'œuf, extrait de vanille, sel", 5.50, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, 'Indulge in a rich and velvety chocolate pecan pie, with a buttery crust and a luscious filling that combines the sweetness of chocolate with the crunch of pecans. To discover more tantalizing details about this luxurious treat, click here.', "Tauchen Sie ein in einen reichen und samtigen Schokoladen-Pekannuss-Kuchen mit buttrigem Teig und einer köstlichen Füllung, die die Süße der Schokolade mit dem Knacken der Pekannüsse vereint. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Laissez-vous tenter par une délicieuse tarte au chocolat et aux noix de pécan, avec une croûte beurrée et une garniture onctueuse qui marie la douceur du chocolat au croquant des noix de pécan. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1588848009831-18daae4945a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=852&q=80', "2023-10-01"), ("Chocolate Truffle Cake", "Schokoladentrüffelkuchen", "Gâteau Truffe au Chocolat", "Chocolate, vegan butter, sugar, egg substitute, flour, cocoa powder, vanilla extract, salt", "Schokolade, vegane Butter, Zucker, Eiersatz, Mehl, Kakaopulver, Vanilleextrakt, Salz", "Chocolat, beurre végétalien, sucre, substitut d'œuf, farine, cacao en poudre, extrait de vanille, sel", 4.80, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, 'Immerse yourself in pure chocolate bliss with our decadent chocolate truffle cake. Every bite is a symphony of rich, velvety chocolate that melts in your mouth. To discover more tantalizing details about this luxurious treat, click here.', "Genießen Sie puren Schokoladengenuss mit unserem dekadenten Schokoladentrüffelkuchen. Jeder Bissen ist eine Symphonie aus reicher, samtiger Schokolade, die auf der Zunge zergeht. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Plongez dans le bonheur pur du chocolat avec notre somptueux gâteau au chocolat truffé. Chaque bouchée est une symphonie de chocolat riche et velouté qui fond dans la bouche. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',	"2023-11-01"), ("Chocolate Chip Scones", "Chocolate-Chip-Teegebäck", "Scones au Chocolat", "Chocolate chips, flour, sugar, baking powder, salt, vegan butter, oat milk, egg substitute, vanilla extract", "Schokoladenstückchen, Mehl, Zucker, Backpulver, Salz, vegane Butter, Hafermilch, Eiersatz, Vanilleextrakt", "Pépites de chocolat, farine, sucre, levure chimique, sel, beurre végétalien, lait d'avoine, substitut d'œuf, extrait de vanille", 3.20, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, 'Start your day with our delightful chocolate chip scones, boasting a tender and buttery texture studded with generous chocolate chips for the perfect balance of sweetness. To discover more tantalizing details about this luxurious treat, click here.', "Starten Sie Ihren Tag mit unseren köstlichen Schokoladen-Chip-Scones, die eine zarte und buttrige Textur mit großzügigen Schokoladenstückchen für die perfekte Balance aus Süße bieten. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Commencez votre journée avec nos délicieux scones aux pépites de chocolat, offrant une texture tendre et beurrée parsemée de généreuses pépites de chocolat pour l'équilibre parfait de douceur. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1611337854278-d50f443c3a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2NvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60', "2023-12-01"), ("Austrian Sachertorte", "Sachertorte", "Sachertorte Autrichienne", "Chocolate, vegan butter, sugar, egg substitute, flour, apricot jam, rum", "Schokolade, vegane Butter, Zucker, Eiersatz, Mehl, Marillenmarmelade, Rum", "Chocolat, beurre végétalien, sucre, substitut d'œuf, farine, confiture d'abricot, rhum", 6.00, FALSE, FALSE, FALSE, FALSE, TRUE, FALSE, 'Experience the iconic Austrian Sachertorte, a moist chocolate cake with a layer of apricot jam, enveloped in a glossy chocolate glaze for a harmonious blend of flavors. To discover more tantalizing details about this luxurious treat, click here.', "Erleben Sie die ikonische österreichische Sachertorte, einen saftigen Schokoladenkuchen mit einer Schicht Aprikosenmarmelade, umhüllt von einer glänzenden Schokoladenglasur für eine harmonische Geschmackskombination. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Découvrez l'emblématique Sachertorte autrichienne, un gâteau au chocolat moelleux avec une couche de confiture d'abricot, enrobé d'un glaçage chocolaté brillant pour une harmonie de saveurs. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1582650949011-13bacf9a35fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNjaG9rb2t1Y2hlbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', "2024-10-01"), ("Chocolate and Brie Panini", "Schokolade und Brie Panini", "Panini au Chocolat et au Brie", "Chocolate, vegan Brie alternative, baguette, vegan butter", "Schokolade, vegane Brie-Alternative, Baguette, vegane Butter", "Chocolat, alternative végétalienne au Brie, baguette, beurre végétalien", 7.50, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, 'Treat your taste buds to a delightful combination of melted brie cheese and indulgent chocolate, perfectly grilled between two slices of artisan bread for a savory-sweet sensation. To discover more tantalizing details about this luxurious treat, click here.', "Verwöhnen Sie Ihren Gaumen mit einer köstlichen Kombination aus geschmolzenem Brie-Käse und verwöhnender Schokolade, perfekt gegrillt zwischen zwei Scheiben handwerklichem Brot für eine herzhaft-süße Geschmacksexplosion. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Régalez vos papilles avec la délicieuse combinaison de fromage brie fondu et de chocolat indulgent, parfaitement grillée entre deux tranches de pain artisanal pour une sensation sucrée-salée. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1617993663472-5e20dab2111f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFuaW5pfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', "2024-03-01"), ("Chocolate Berry Smoothie Bowl", "Schokoladen-Beeren-Smoothie-Bowl", "Bol Smoothie au Chocolat et aux Baies", "Chocolate, strawberries, raspberries, blueberries, banana, oat milk, soy yogurt, agave syrup", "Schokolade, Erdbeeren, Himbeeren, Blaubeeren, Banane, Hafermilch, Sojajoghurt, Agavendicksaft", "Chocolat, fraises, framboises, myrtilles, banane, lait d'avoine, yaourt de soja, sirop d'agave", 6.80, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, 'Energize your day with our refreshing chocolate berry smoothie bowl, packed with antioxidant-rich berries, creamy chocolate, and a delightful assortment of toppings. To discover more tantalizing details about this luxurious treat, click here.', "Geben Sie Ihrem Tag einen Energieschub mit unserer erfrischenden Schokoladen-Beeren-Smoothie-Bowl, vollgepackt mit antioxidantienreichen Beeren, cremiger Schokolade und einer köstlichen Auswahl an Toppings. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Donnez un coup de fouet à votre journée avec notre rafraîchissant smoothie bowl au chocolat et aux baies, rempli de baies riches en antioxydants, de chocolat crémeux et d'un assortiment délicieux de garnitures. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1583577012041-b9fe16bf9345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlcnJ5JTIwY2hvY29sYXRlJTIwYm93bHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', "2024-04-01"), ("Chocolate Chili Sin Carne", "Schokoladen-Chili-sin-Carne", "Chili Sin Carne au Chocolat", "Chocolate, kidney beans, bell peppers, onions, garlic, tomatoes, chili powder, cumin, salt, pepper", "Schokolade, Kidneybohnen, Paprika, Zwiebeln, Knoblauch, Tomaten, Chilipulver, Kreuzkümmel, Salz, Pfeffer", "Chocolat, haricots rouges, poivrons, oignons, ail, tomates, poudre de chili, cumin, sel, poivre", 8.50, FALSE, FALSE, FALSE, TRUE, FALSE, FALSE, 'Embark on a flavor adventure with our bold and spicy chocolate chili sin carne, featuring a hearty blend of beans, vegetables, and aromatic spices, infused with a touch of dark chocolate for a magical twist. To discover more tantalizing details about this luxurious treat, click here.', "Begeben Sie sich auf ein Geschmacksabenteuer mit unserem gewagten und würzigen Schokoladen-Chili-Sin-Carne, das eine herzhafte Mischung aus Bohnen, Gemüse und aromatischen Gewürzen bietet, verfeinert mit einer Prise dunkler Schokolade für einen magischen Twist. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Partez à l'aventure des saveurs avec notre chili sin carne au chocolat audacieux et épicé, composé d'un mélange copieux de haricots, de légumes et d'épices aromatiques, agrémenté d'une touche de chocolat noir pour une touche magique. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1658308767269-42ac00314021?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGklMjBzaW4lMjBjYXJuZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', "2024-06-01"), ("Vegan Cocoa-Spiced Chicken Skewers", "Vegane kakaogewürzte Hähnchenspieße", "Brochettes de Poulet Végétalien Épicées au Cacao", "Cocoa spice blend, soy meat substitute, vegetable broth, paprika, garlic powder, onion powder, salt, pepper, oil", "Kakao-Gewürzmischung, Sojafleischersatz, Gemüsebrühe, Paprikapulver, Knoblauchpulver, Zwiebelpulver, Salz, Pfeffer, Öl", "Mélange d'épices au cacao, substitut de viande de soja, bouillon de légumes, paprika, poudre d'ail, poudre d'oignon, sel, poivre, huile", 9.20, FALSE, FALSE, FALSE, TRUE,	FALSE, FALSE, 'Savor the succulent and tender vegan cocoa-spiced chicken skewers, marinated in a harmonious blend of cocoa and spices, creating a delightful balance of flavors. To discover more tantalizing details about this luxurious treat, click here.', "Genießen Sie die saftigen und zarten veganen Hühnerspieße mit Kakaogewürz, mariniert in einer harmonischen Mischung aus Kakao und Gewürzen, die eine köstliche Geschmacksbalance bieten. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Savourez les brochettes de poulet végétalien à la fois succulentes et tendres, marinées dans un mélange harmonieux de cacao et d'épices, créant un équilibre délicieux de saveurs. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1644204010804-827f6e0e2da6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGglQzMlQTRobmNoZW5zcGllJUMzJTlGfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', "2024-08-01"), ("Classic Hot Chocolate", "Klassische heiße Schokolade", "Chocolat Chaud Classique", "Chocolate, oat milk, sugar, vanilla extract, vegan whipped cream", "Schokolade, Hafermilch, Zucker, Vanilleextrakt, veganes Schlagobers", "Chocolat, lait d'avoine, sucre, extrait de vanille, crème fouettée végétalienne", 4.50, TRUE,	FALSE,	FALSE,	FALSE,	FALSE,	FALSE, 'Warm your soul with our classic hot chocolate, a velvety-smooth beverage made with premium cocoa, indulgent milk, and a touch of sweetness, topped with a dollop of whipped cream. To discover more tantalizing details about this luxurious treat, click here.', "Wärmen Sie Ihre Seele mit unserer klassischen heißen Schokolade, einem samtig-weichen Getränk aus hochwertigem Kakao, verwöhnender Milch und einer Prise Süße, gekrönt mit einem Klecks Schlagsahne. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Réchauffez votre âme avec notre classique chocolat chaud, une boisson veloutée et onctueuse à base de cacao de qualité, de lait indulgent et d'une touche de douceur, garnie d'une cuillerée de crème fouettée. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwY2hvY29sYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',	"2024-02-01"), ("Spiced Hot Chocolate with Cinnamon and Nutmeg", "Heiße Schokolade mit Zimt und Muskatnuss", "Chocolat Chaud Épicé avec Cannelle et Muscade", "Chocolate, oat milk, sugar, cinnamon, nutmeg, vanilla extract, vegan whipped cream", "Schokolade, Hafermilch, Zucker, Zimt, Muskat, Vanilleextrakt, veganes Schlagobers", "Chocolat, lait d'avoine, sucre, cannelle, muscade, extrait de vanille, crème fouettée végétalienne", 5.20, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, 'Indulge in a cozy and aromatic spiced hot chocolate, infused with the comforting flavors of cinnamon and nutmeg, providing a delightful warmth to your senses. To discover more tantalizing details about this luxurious treat, click here.', "Tauchen Sie ein in eine gemütliche und aromatische gewürzte heiße Schokolade, angereichert mit den wohltuenden Aromen von Zimt und Muskatnuss, die Ihren Sinnen wohltuende Wärme verleiht. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Délectez-vous d'un chocolat chaud épicé et parfumé, imprégné des saveurs réconfortantes de la cannelle et de la muscade, offrant une chaleur délicieuse à vos sens. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1512035986687-f3cc6aefba8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwY2hvY29sYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', "2024-05-01"), ("White Chocolate Lavender Latte", "Weißer Schokolade-Lavendel-Latte", "Latté au Chocolat Blanc et à la Lavande", "Vegan white chocolate, oat milk, lavender syrup, espresso", "Vegane weiße Schokolade,Hafermilch, Lavendelsirup, Espresso", "Chocolat blanc végétalien, lait d'avoine, sirop de lavande, expresso", 5.80, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, 'Delight in the delicate floral notes of lavender combined with the creamy sweetness of white chocolate in our luxurious latte, creating a truly indulgent and aromatic experience. To discover more tantalizing details about this luxurious treat, click here.', "Freuen Sie sich auf die delikaten floralen Noten von Lavendel in Kombination mit der cremigen Süße von weißer Schokolade in unserem luxuriösen Latte, für ein wirklich verwöhnendes und aromatisches Erlebnis. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Plongez dans les délicates notes florales de la lavande combinées à la douceur crémeuse du chocolat blanc dans notre luxueux latte, créant une expérience véritablement indulgente et aromatique. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.pexels.com/photos/377903/pexels-photo-377903.jpeg?auto=compress&cs=tinysrgb&w=300', "2024-07-01"), ("Dark Chocolate Espresso", "Dunkler Schokoladen-Espresso", "Expresso au Chocolat Noir", "Dark chocolate, espresso", "Dunkle Schokolade, Espresso", "Chocolat noir, expresso", 3.80, TRUE, FALSE, FALSE, FALSE, FALSE, FALSE, 'Experience the perfect harmony of rich dark chocolate and bold espresso in every sip, offering a sophisticated and robust flavor profile that will satisfy your coffee cravings. To discover more tantalizing details about this luxurious treat, click here.', "Erleben Sie die perfekte Harmonie von dunkler Schokolade und kräftigem Espresso in jedem Schluck, für ein raffiniertes und robustes Geschmackserlebnis, das Ihre Kaffeegelüste stillt. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Découvrez l'harmonie parfaite entre le riche chocolat noir et l'espresso corsé à chaque gorgée, offrant un profil de saveurs sophistiqué et robuste qui comblera vos envies de café. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1517578239113-b03992dcdd25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwY2hvY29sYXRlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',	"2024-09-01"); 
INSERT INTO menu (item_name, item_name_GER, item_name_FR, ingredients, ingredients_GER, ingredients_FR, price, isWarmBeverage, isColdBeverage, isAlcoholicBeverage, isLunch, isDessert, isChocOfMonth, description, description_GER, description_FR, image_source, date) VALUES ("Chocolate Mint Smoothie", "Schokoladenminz-Smoothie", "Smoothie Menthe Chocolat", "Chocolate, mint, banana, spinach, soy milk, agave syrup", "Schokolade, Minze, Banane, Spinat, Sojamilch, Agavendicksaft", "Chocolat, menthe, banane, épinards, lait de soja, sirop d'agave", 5.50, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, 'Refresh yourself with our invigorating chocolate mint smoothie, blending the coolness of fresh mint leaves with creamy chocolate, creating a delightful and revitalizing treat. To discover more tantalizing details about this luxurious treat, click here.', "Gönnen Sie sich unsere erfrischende Schokoladen-Minz-Smoothie, die die Frische von frischer Minze mit cremiger Schokolade vereint und so für eine köstliche und belebende Erfrischung sorgt. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Rafraîchissez-vous avec notre revitalisant smoothie au chocolat et à la menthe, mêlant la fraîcheur des feuilles de menthe à la crémosité du chocolat, créant une gâterie délicieuse et revigorante. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1586985288206-3cdc4f67cd03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2Nob2tvJTIwbWlueiUyMHNoYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60', "2023-06-01"), ("Chocolate Hazelnut Milkshake", "Schokoladen-Haselnuss-Milchshake", "Milkshake au Chocolat et aux Noisettes", "Chocolate, hazelnuts, vegan vanilla ice cream, soy milk", "Schokolade, Haselnüsse, veganes Vanilleeis, Sojamilch", "Chocolat, noisettes, glace vanille végétalienne, lait de soja", 6.20, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, 'Indulge in a creamy and velvety chocolate hazelnut milkshake, featuring the irresistible combination of smooth chocolate and the nutty goodness of hazelnuts, topped with a dollop of whipped cream. To discover more tantalizing details about this luxurious treat, click here.', "Genießen Sie einen cremigen und samtigen Schokoladen-Haselnuss-Milchshake, der die unwiderstehliche Kombination von cremiger Schokolade und der nussigen Güte von Haselnüssen bietet, gekrönt mit einem Klecks Schlagsahne. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Accordez-vous un milkshake au chocolat et aux noisettes crémeux et velouté, offrant l'irrésistible combinaison de chocolat onctueux et de la bonté noisettée des noisettes, garni d'une cuillerée de crème fouettée. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1584680744830-465a1dcd78e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdCUyMGNob2NvbGF0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60', "2023-07-01"), ("Chocolate Raspberry Iced Tea", "Schokoladen-Himbeer-Eistee", "Thé Glacé au Chocolat et aux Framboises", "Chocolate, raspberries, iced tea, lemon slices, mint leaves", "Schokolade, Himbeeren, Eistee, Zitronenscheiben, Minzeblätter", "Chocolat, framboises, thé glacé, tranches de citron, feuilles de menthe", 4.80, FALSE, TRUE, FALSE, FALSE, FALSE, FALSE, 'Quench your thirst with our refreshing chocolate raspberry iced tea, infused with the vibrant flavors of ripe raspberries and a hint of chocolate, creating a delightful and invigorating beverage. To discover more tantalizing details about this luxurious treat, click here.', "Löschen Sie Ihren Durst mit unserem erfrischenden Schokoladen-Himbeer-Eistee, der die lebendigen Aromen reifer Himbeeren und einen Hauch von Schokolade vereint und so ein köstliches und belebendes Getränk entstehen lässt. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Étanchez votre soif avec notre rafraîchissant thé glacé au chocolat et à la framboise, imprégné des saveurs vibrantes des framboises mûres et d'une touche de chocolat, créant une boisson délicieuse et revigorante. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.pexels.com/photos/5455663/pexels-photo-5455663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', "2023-08-01"), ("Salted Caramel Chocolate Martini", "Gesalzener Karamell-Schokoladen-Martini", "Martini au Chocolat et au Caramel Salé", "Chocolate, vegan cream, caramel syrup, vodka, sea salt", "Schokolade, veganes Schlagobers, Karamellsirup, Wodka, Meersalz", "Chocolat, crème végétalienne, sirop de caramel, vodka, sel marin", 9.50, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, 'Sip on the perfect blend of rich chocolate, caramel, and a hint of sea salt in our indulgent salted caramel chocolate martini, a sophisticated and velvety cocktail that will delight your taste buds. To discover more tantalizing details about this luxurious treat, click here.', "Genießen Sie die perfekte Mischung aus reicher Schokolade, Karamell und einer Prise Meersalz in unserem verwöhnenden salted caramel Schokoladen-Martini, ein raffinierter und samtiger Cocktail, der Ihren Gaumen verwöhnt. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Dégustez le mariage parfait entre le chocolat riche, le caramel salé et une pointe de sel de mer dans notre indulgent martini au chocolat caramel salé, un cocktail sophistiqué et velouté qui ravira vos papilles. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.pexels.com/photos/3407778/pexels-photo-3407778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', "2025-01-01"), ("Chocolate Orange Old Fashioned", "Schokoladen-Orangen-Old Fashioned", "Old Fashioned à l'Orange et au Chocolat", "Chocolate liqueur, orange liqueur, orange juice, whisky, orange zest", "Schokoladenlikör, Orangenlikör, Orangensaft, Whisky, Orangenzeste", "Liqueur de chocolat, liqueur d'orange, jus d'orange, whisky, zeste d'orange", 8.80, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, 'Experience a modern twist on a classic cocktail with our chocolate orange old fashioned, combining the richness of chocolate, the citrusy zest of orange, and the smoothness of whiskey for an unforgettable drinking experience. To discover more tantalizing details about this luxurious treat, click here.', "Erleben Sie eine moderne Variante eines klassischen Cocktails mit unserer Schokoladen-Orangen-Old Fashioned, die die Intensität von Schokolade, die zitrische Frische von Orange und die Sanftheit von Whiskey zu einem unvergesslichen Trinkerlebnis vereint. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Vivez une variation moderne d'un cocktail classique avec notre vieux-fashioned au chocolat et à l'orange, associant la richesse du chocolat, l'écorce d'orange acidulée et la douceur du whisky pour une expérience de dégustation inoubliable. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.unsplash.com/photo-1621873495914-1c921811e37b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=734&q=80', "2023-09-01"), ("Chili Chocolate Margarita", "Chili-Schokoladen-Margarita", "Margarita au Chocolat et au Piment", "Chocolate liqueur, tequila, lime juice, agave syrup, chili powder, salt", "Schokoladenlikör, Tequila, Limettensaft, Agavensirup, Chilipulver, Salz", "Liqueur de chocolat, tequila, jus de citron vert, sirop d'agave, poudre de chili, sel", 7.80, FALSE, FALSE, TRUE, FALSE, FALSE, FALSE, 'Delight in the tantalizing combination of spicy chili and rich chocolate in our chili chocolate margarita, a unique and bold cocktail that brings together fiery flavors and indulgent sweetness. To discover more tantalizing details about this luxurious treat, click here.', "Genießen Sie die verlockende Kombination aus würzigem Chili und reicher Schokolade in unserer Chili-Schokoladen-Margarita, ein einzigartiger und kräftiger Cocktail, der feurige Geschmacksrichtungen mit verwöhnender Süße vereint. Um weitere verlockende Details über diese Leckerei zu entdecken, klicken Sie hier.", "Délectez-vous de la combinaison alléchante de chili épicé et de chocolat riche dans notre margarita au chocolat et au chili, un cocktail unique et audacieux qui réunit des saveurs ardentes et une douceur indulgente. Pour découvrir plus de détails alléchants sur cette gourmandise luxueuse, cliquez ici.", 'https://images.pexels.com/photos/12099309/pexels-photo-12099309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', "2024-01-01");