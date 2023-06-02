import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Visit_the_Cafe from "./Visit_the_Cafe";
import GoHome from "./GoHome";

export default function GoMenu() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
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
              <NavLink to="/" activeclassname="active" className="nav-link">
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
                Visit the Café
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
