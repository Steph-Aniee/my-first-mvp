import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Visit_the_Cafe from "./Visit_the_Cafe";
import GoMenu from "./GoMenu";

export default function home() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <div>
        <button onClick={() => handleLanguageChange("de")}>Deutsch</button>
        <button onClick={() => handleLanguageChange("en")}>English</button>
        <button onClick={() => handleLanguageChange("fr")}>Français</button>
      </div>
      <h1>Mademoiselle Chocoholic</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/visit-the-cafe">Visit the Café</Link>
          </li>
        </ul>
      </nav>
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
