import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function GoMenu({ language, onLanguageChange }) {
  const [dessertItems, setDessertItems] = useState([]);
  const [savoryItems, setSavoryItems] = useState([]);
  const [coldBeverageItems, setColdBeverageItems] = useState([]);
  const [warmBeverageItems, setWarmBeverageItems] = useState([]);
  const [alcoholicBeverageItems, setAlcoholicBeverageItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await fetch("/api/menu");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();

      setDessertItems(data.filter((item) => item.isDessert === 1));
      setSavoryItems(data.filter((item) => item.isLunch));
      setColdBeverageItems(data.filter((item) => item.isColdBeverage));
      setWarmBeverageItems(data.filter((item) => item.isWarmBeverage === 1));
      setAlcoholicBeverageItems(
        data.filter((item) => item.isAlcoholicBeverage)
      );
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getItemName = (item) => {
    if (language === "en") {
      return item.item_name;
    } else if (language === "de") {
      return item.item_name_GER;
    } else if (language === "fr") {
      return item.item_name_FR;
    }
    return item.item_name;
  };

  const getIngredients = (item) => {
    if (language === "en") {
      return item.ingredients;
    } else if (language === "de") {
      return item.ingredients_GER;
    } else if (language === "fr") {
      return item.ingredients_FR;
    }
    return item.ingredients;
  };

  return (
    <>
      <div className="top">
        <div className="lang-buttons">
          <button className="german" onClick={() => onLanguageChange("de")}>
            Deutsch
          </button>
          <button className="english" onClick={() => onLanguageChange("en")}>
            English
          </button>
          <button className="french" onClick={() => onLanguageChange("fr")}>
            Français
          </button>
        </div>
        <h1>
          <img
            className="logo"
            style={{ transform: "scaleX(-1)" }}
            src=".\src\assets\mad_choc_logo.png"
          />
          Mademoiselle Chocoholic
          <img className="logo" src=".\src\assets\mad_choc_logo.png" />
        </h1>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" className="nav-link">
                {language === "en" && `Home`}
                {language === "de" && `Homepage`}
                {language === "fr" && `Accueil`}
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeclassname="active" className="nav-link">
                {language === "en" && `Menu`}
                {language === "de" && `Speisekarte`}
                {language === "fr" && `Menu`}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/visit-the-cafe"
                activeclassname="active"
                className="nav-link"
              >
                {language === "en" && `Visit the Café`}
                {language === "de" && `Besuchen Sie uns`}
                {language === "fr" && `Visitez le Café`}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="below">
        <h2 className="menuHead">
          {language === "en" && `Menu`}
          {language === "de" && `Speisekarte`}
          {language === "fr" && `Menu`}
        </h2>{" "}
        <div className="menu">
          <div className="menuItem">
            {isLoading ? (
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">...Loading</h6>
                </div>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>
                      {language === "en" && `Best Things First: Dessert`}
                      {language === "de" && `Das Beste zuerst: Dessert`}
                      {language === "fr" &&
                        `Les meilleures choses en premier: Dessert`}
                    </th>
                    <th>
                      {language === "en" && `Ingredients`}
                      {language === "de" && `Zutaten`}
                      {language === "fr" && `Ingrédients`}
                    </th>

                    <th>
                      <span className="price">
                        {language === "en" && `Price`}
                        {language === "de" && `Preis`}
                        {language === "fr" && `Prix`}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dessertItems.map((item) => (
                    <tr key={item.id}>
                      <td>{getItemName(item)}</td>
                      <td>{getIngredients(item)}</td>

                      <td>
                        <span className="price">{item.price.toFixed(2)} €</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="menuItem">
            {isLoading ? (
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">...Loading</h6>
                </div>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>
                      {language === "en" && `Savoury Treats`}
                      {language === "de" && `Herzhaftes`}
                      {language === "fr" && `Gourmandises Salées`}
                    </th>
                    <th>
                      {language === "en" && `Ingredients`}
                      {language === "de" && `Zutaten`}
                      {language === "fr" && `Ingrédients`}
                    </th>

                    <th>
                      <span className="price">
                        {" "}
                        {language === "en" && `Price`}
                        {language === "de" && `Preis`}
                        {language === "fr" && `Prix`}
                      </span>{" "}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {savoryItems.map((item) => (
                    <tr key={item.id}>
                      <td>{getItemName(item)}</td>
                      <td>{getIngredients(item)}</td>

                      <td>
                        <span className="price">{item.price.toFixed(2)} €</span>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="menuItem">
            {isLoading ? (
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">...Loading</h6>
                </div>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>
                      {language === "en" && `Quench Your Thirst`}
                      {language === "de" && `Durstlöscher`}
                      {language === "fr" && `Étancher Votre Soif`}
                    </th>
                    <th>
                      {language === "en" && `Ingredients`}
                      {language === "de" && `Zutaten`}
                      {language === "fr" && `Ingrédients`}
                    </th>

                    <th>
                      <span className="price">
                        {language === "en" && `Price`}
                        {language === "de" && `Preis`}
                        {language === "fr" && `Prix`}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coldBeverageItems.map((item) => (
                    <tr key={item.id}>
                      <td>{getItemName(item)}</td>
                      <td>{getIngredients(item)}</td>

                      <td>
                        <span className="price">{item.price.toFixed(2)} €</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="menuItem">
            {isLoading ? (
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">...Loading</h6>
                </div>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>
                      {language === "en" && `Warm Your Heart`}
                      {language === "de" && `Heiße Liebe`}
                      {language === "fr" && `Réchauffez votre cœur`}
                    </th>
                    <th>
                      {language === "en" && `Ingredients`}
                      {language === "de" && `Zutaten`}
                      {language === "fr" && `Ingrédients`}
                    </th>
                    <th>
                      <span className="price">
                        {language === "en" && `Price`}
                        {language === "de" && `Preis`}
                        {language === "fr" && `Prix`}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {warmBeverageItems.map((item) => (
                    <tr key={item.id}>
                      <td>{getItemName(item)}</td>
                      <td>{getIngredients(item)}</td>

                      <td>
                        <span className="price">{item.price.toFixed(2)} €</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <div className="menuItem">
            {" "}
            {isLoading ? (
              <div className="card">
                <div className="card-body">
                  <h6 className="card-title">...Loading</h6>
                </div>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>
                      {language === "en" && `For the Extra Kick`}
                      {language === "de" && `Für den extra Kick`}
                      {language === "fr" &&
                        `Pour un Coup de Fouet Supplémentaire`}
                    </th>
                    <th>
                      {language === "en" && `Ingredients`}
                      {language === "de" && `Zutaten`}
                      {language === "fr" && `Ingrédients`}
                    </th>

                    <th>
                      <span className="price">
                        {language === "en" && `Price`}
                        {language === "de" && `Preis`}
                        {language === "fr" && `Prix`}
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {alcoholicBeverageItems.map((item) => (
                    <tr key={item.id}>
                      <td>{getItemName(item)}</td>
                      <td>{getIngredients(item)}</td>

                      <td>
                        <span className="price">
                          {item.price.toFixed(2)} €{" "}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
