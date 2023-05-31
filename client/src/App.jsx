import { useState, useEffect } from "react";
import "./App.css";
import Add_Item from "./components/Add_Item";
import Edit_Item from "./components/Edit_Item";
import Delete_Item from "./components/Delete_Item";
import Admin from "./components/Admin";

function App() {
  const [adminPage, setAdminPage] = useState(true);
  const [item, setItem] = useState("");

  const changeView = () => {
    setAdminPage(true);
    setItem("");
  };

  return (
    <>
      {adminPage === true && (
        <Admin setAdminPage={setAdminPage} setItem={setItem} />
      )}
      {item === "adding" && <Add_Item></Add_Item>}
      {item === "editing" && <Edit_Item></Edit_Item>}
      {item === "deleting" && <Delete_Item></Delete_Item>}
      {!adminPage && (
        <button type="button" onClick={changeView}>
          Back to the Overview
        </button>
      )}
    </>
  );
}

export default App;
