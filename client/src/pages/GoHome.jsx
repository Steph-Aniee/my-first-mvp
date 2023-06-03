import { ReactFragment } from "react";
import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Visit_the_Cafe from "./Visit_the_Cafe";
import GoMenu from "./GoMenu";

export default function GoHome({ language, onLanguageChange }) {
  const [chocomo, setChocomo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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

  const addLink = (text) => {
    const linkTexts = {
      en: "click here",
      de: "klicken Sie hier",
      fr: "cliquez ici",
    };
    const link = (
      <Link to="/menu" className="linkStyle">
        {linkTexts[language]}
      </Link>
    );

    const parts = text.split(linkTexts[language]);
    const lastIndex = parts.length - 1;

    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index !== lastIndex && link}
      </React.Fragment>
    ));
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
              <NavLink to="" activeclassname="active" className="nav-link">
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
        <h2>
          {language === "en" && `Choc of the Month`}
          {language === "de" && `Schoko des Monats`}
          {language === "fr" && `Chocolat du Mois`}
        </h2>
        {isLoading ? ( // need this part so that there is some time to fetch the data before the code and page breaks
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
              alt={
                (language === "en" && `${chocomo.item_name}`) ||
                (language === "de" && `${chocomo.item_name_GER}`) ||
                (language === "fr" && `${chocomo.item_name_FR}`)
              }
            />
            <div className="card-body">
              <h6 className="card-title">
                {(language === "en" && `${chocomo.item_name}`) ||
                  (language === "de" && `${chocomo.item_name_GER}`) ||
                  (language === "fr" && `${chocomo.item_name_FR}`)}
              </h6>
              <p className="card-text">
                {addLink(
                  language === "en"
                    ? chocomo.description
                    : language === "de"
                    ? chocomo.description_GER
                    : chocomo.description_FR
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
