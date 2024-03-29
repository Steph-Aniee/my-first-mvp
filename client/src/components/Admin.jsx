import { useEffect, useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Admin() {
  const [itemsOverView, setItemsOverview] = useState([]);

  useEffect(() => {
    fetchAllItems();
  }, []);

  const fetchAllItems = async () => {
    try {
      const response = await fetch("/api/menu");
      if (!response.ok) {
        throw new Error("Request failed");
      }
      const data = await response.json();
      setItemsOverview(data);
    } catch (error) {
      console.error(error);
    }
  };

  const thStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const cellStyleURL = {
    maxWidth: "10em",
    overflow: "auto",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  function formatDate(sqlDate) {
    const dateObj = new Date(sqlDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  }

  return (
    <div className="adminArea">
      <h1 className="addHeadline">Welcome, Mad Chocoholic!</h1>
      <p style={{ paddingLeft: "1%" }}>
        This is your current selection of high-class chocolate treats:
      </p>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Item Name</th>
              <th style={thStyle}>Item Name GER</th>
              <th style={thStyle}>Item Name FR</th>
              <th style={thStyle}>Ingredients</th>
              <th style={thStyle}>Ingredients GER</th>
              <th style={thStyle}>Ingredients FR</th>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Description GER</th>
              <th style={thStyle}>Description FR</th>
              <th style={thStyle}>Price</th>
              <th style={thStyle}>Type</th>
              <th style={thStyle}>Image Source</th>
              <th style={thStyle}>Choc of Month</th>
            </tr>
          </thead>
          <tbody>
            {itemsOverView ? (
              itemsOverView.map((menu) => (
                <tr key={menu.id}>
                  <td>{menu.id}</td>
                  <td>{menu.item_name}</td>
                  <td>{menu.item_name_GER}</td>
                  <td>{menu.item_name_FR}</td>
                  <td>{menu.ingredients}</td>
                  <td>{menu.ingredients_GER}</td>
                  <td>{menu.ingredients_FR}</td>
                  <td>{menu.description}</td>
                  <td>{menu.description_GER}</td>
                  <td>{menu.description_FR}</td>
                  <td>{menu.price.toFixed(2)}€</td>
                  <td>
                    {menu.isWarmBeverage ? "Warm beverage" : null}
                    {menu.isColdBeverage ? "Cold beverage" : null}
                    {menu.isAlcoholicBeverage ? "Alcoholic beverage" : null}
                    {menu.isLunch ? "Lunch" : null}
                    {menu.isDessert ? "Dessert" : null}
                  </td>
                  <td style={cellStyleURL}>{menu.image_source}</td>
                  <td>{formatDate(`${menu.date}`)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">
                  ... the server is trying to get what you need from the
                  database!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Link to="/add">
        <button className="addBtn" type="button">
          Add a New Item
        </button>
      </Link>
      <Link to="/edit">
        <button className="editBtn" type="button">
          Edit an Item
        </button>
      </Link>
      <Link to="/delete">
        <button className="deleteBtn" type="button">
          Delete an Item
        </button>
      </Link>
    </div>
  );
}
