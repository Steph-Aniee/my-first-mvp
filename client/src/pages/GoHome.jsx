import { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Visit_the_Cafe from "./Visit_the_Cafe";
import GoMenu from "./GoMenu";

export default function GoHome() {
  const [language, setLanguage] = useState("en");
  const [chocomo, setChocomo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  useEffect(() => {
    fetchChocomo();
  }, []);

  const fetchChocomo = async () => {
    try {
      const response = await fetch("/api/menu");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();

      const isChoc = data.filter((e) => e.isChocOfMonth === 1);
      setChocomo(isChoc[0]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="top">
        <div className="lang-buttons">
          <button className="german" onClick={() => handleLanguageChange("de")}>
            Deutsch
          </button>
          <button
            className="english"
            onClick={() => handleLanguageChange("en")}
          >
            English
          </button>
          <button className="french" onClick={() => handleLanguageChange("fr")}>
            Français
          </button>
        </div>
        <h1>Mademoiselle Chocoholic</h1>
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink to="" activeclassname="active" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeclassname="active" className="nav-link">
                Menu
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
        <h2>Choc of the Month</h2>
        {isLoading ? (
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">...Loading</h6>
            </div>
          </div>
        ) : (
          <div className="card">
            <img
              style={{ marginBottom: "2%" }}
              className="card-img-top"
              src={`${chocomo.image_source}`}
              alt={`${chocomo.item_name}`}
            />
            <div className="card-body">
              <h6 className="card-title">{`${chocomo.item_name}`}</h6>
              <p className="card-text">{`${chocomo.description}`}</p>
            </div>
          </div>
        )}
      </div>
      <Routes>
        <Route path="/menu" element={<GoMenu language={language} />} />
        <Route
          path="/visit-the-cafe"
          element={<Visit_the_Cafe language={language} />}
        />
      </Routes>
    </>
  );
}
