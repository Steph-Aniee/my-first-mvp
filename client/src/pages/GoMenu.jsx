import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Visit_the_Cafe from "./Visit_the_Cafe";
import GoHome from "./GoHome";

export default function GoMenu({ language, onLanguageChange }) {
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
        <h1>Mademoiselle Chocoholic</h1>
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
        <p>test</p>
      </div>
    </>
  );
}
