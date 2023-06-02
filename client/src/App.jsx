import { useState, useEffect } from "react";
import "./App.css";
import Add_Item from "./components/Add_Item";
import Edit_Item from "./components/Edit_Item";
import Delete_Item from "./components/Delete_Item";
import Admin from "./components/Admin";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import GoHome from "./pages/GoHome";
import Visit_the_Cafe from "./pages/Visit_the_Cafe";
import GoMenu from "./pages/GoMenu";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GoHome />} />
        <Route path="/visit-the-cafe" element={<Visit_the_Cafe />} />
        <Route path="/menu" element={<GoMenu />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/edit" element={<Edit_Item />} />
        <Route path="/add" element={<Add_Item />} />
        <Route path="/delete" element={<Delete_Item />} />
      </Routes>
    </>
  );
}

export default App;
