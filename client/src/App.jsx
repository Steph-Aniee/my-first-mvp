import "./App.css";
import Add_Item from "./components/Add_Item";
import Edit_Item from "./components/Edit_Item";
import Delete_Item from "./components/Delete_Item";
import Admin from "./components/Admin";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import GoHome from "./pages/GoHome";
import Visit_the_Cafe from "./pages/Visit_the_Cafe";
import GoMenu from "./pages/GoMenu";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <GoHome
              language={language}
              onLanguageChange={handleLanguageChange}
            />
          }
          exact
        />
        <Route
          path="/visit-the-cafe"
          element={
            <Visit_the_Cafe
              language={language}
              onLanguageChange={handleLanguageChange}
            />
          }
        />
        <Route
          path="/menu"
          element={
            <GoMenu
              language={language}
              onLanguageChange={handleLanguageChange}
            />
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit" element={<Edit_Item />} />
        <Route path="/add" element={<Add_Item />} />
        <Route path="/delete" element={<Delete_Item />} />
      </Routes>
    </>
  );
}

export default App;
