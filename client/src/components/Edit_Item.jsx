import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Edit_Item() {
  const [itemId, setItemId] = useState("");
  const [item, setItem] = useState([]);
  //prettier-ignore
  const [editedItem, setEditedItem] = useState({
    item_name: "",
    item_name_GER: "",
    item_name_FR: "",
    ingredients: "",
    ingredients_GER: "",
    ingredients_FR: "",
    price: 0,
    isWarmBeverage: 0,
    isColdBeverage: 0,
    isAlcoholicBeverage: 0,
    isLunch: 0,
    isDessert: 0,
    isChocOfMonth: 0,
    description: "",
    description_GER: "",
    description_FR: "",
    image_source: "",
    date: ""
  });

  const handleIdChange = (e) => {
    setItemId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fetch the item with the given ID from the database
    try {
      const response = await fetch(`/api/menu/${itemId}`);
      const data = await response.json();
      if (data.length < 1) {
        alert("Item not found");
        setItem([]);
      } else {
        setItem(data);
        //prettier-ignore
        setEditedItem({
        item_name: data[0].item_name,
        item_name_GER: data[0].item_name_GER,
        item_name_FR: data[0].item_name_FR,
        ingredients: data[0].ingredients,
        ingredients_GER: data[0].ingredients_GER,
        ingredients_FR: data[0].ingredients_FR,
        price: data[0].price,
        isWarmBeverage: data[0].isWarmBeverage ? 1 : 0,
        isColdBeverage: data[0].isColdBeverage ? 1 : 0,
        isAlcoholicBeverage: data[0].isAlcoholicBeverage ? 1 : 0,
        isLunch: data[0].isLunch ? 1 : 0,
        isDessert: data[0].isDessert ? 1 : 0,
        isChocOfMonth: data[0].isChocOfMonth ? 1 : 0,
        description: data[0].description,
        description_GER: data[0].description_GER,
        description_FR: data[0].description_FR,
        image_source: data[0].image_source,
        date: data[0].date
      });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateItem = async (e) => {
    e.preventDefault();
    // Validating input fields by checking if no empty or just white spaces are input data / the trim() method helpds check that
    if (
      editedItem.item_name.trim() === "" ||
      editedItem.item_name_GER.trim() === "" ||
      editedItem.item_name_FR.trim() === "" ||
      editedItem.ingredients.trim() === "" ||
      editedItem.ingredients_GER.trim() === "" ||
      editedItem.ingredients_FR.trim() === "" ||
      editedItem.description.trim() === "" ||
      editedItem.description_GER.trim() === "" ||
      editedItem.description_FR.trim() === "" ||
      editedItem.date.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    // Send the PUT request to update the item
    try {
      const response = await fetch(`/api/menu/${itemId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedItem),
      });
      if (!response.ok) {
        throw new Error("Failed to update item");
      }
      alert("Item updated successfully");
      setItem([]);
      setItemId("");
    } catch (error) {
      console.error(error);
      alert("Failed to update item");
    }
  };

  const handleCancel = () => {
    setItem([]);
    setItemId("");
    setEditedItem({
      item_name: "",
      item_name_GER: "",
      item_name_FR: "",
      ingredients: "",
      ingredients_GER: "",
      ingredients_FR: "",
      price: 0,
      isWarmBeverage: 0,
      isColdBeverage: 0,
      isAlcoholicBeverage: 0,
      isLunch: 0,
      isDessert: 0,
      isChocOfMonth: 0,
      description: "",
      description_GER: "",
      description_FR: "",
      image_source: "",
      date: "",
    });
  };

  return (
    <div>
      <h1>Edit Item</h1>
      {item.length < 1 ? (
        <form onSubmit={handleSubmit}>
          <label>
            Enter Item ID:
            <input type="text" value={itemId} onChange={handleIdChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <form onSubmit={handleUpdateItem}>
          <label>
            Item Name:
            <input
              type="text"
              name="item_name"
              value={editedItem.item_name}
              onChange={handleChange}
            />
          </label>
          <label>
            Item Name (German):
            <input
              type="text"
              name="item_name_GER"
              value={editedItem.item_name_GER}
              onChange={handleChange}
            />
          </label>
          <label>
            Item Name (French):
            <input
              type="text"
              name="item_name_FR"
              value={editedItem.item_name_FR}
              onChange={handleChange}
            />
          </label>
          <label>
            Ingredients:
            <input
              type="text"
              name="ingredients"
              value={editedItem.ingredients}
              onChange={handleChange}
            />
          </label>
          <label>
            Ingredients (German):
            <input
              type="text"
              name="ingredients_GER"
              value={editedItem.ingredients_GER}
              onChange={handleChange}
            />
          </label>
          <label>
            Ingredients (French):
            <input
              type="text"
              name="ingredients_FR"
              value={editedItem.ingredients_FR}
              onChange={handleChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={editedItem.price}
              onChange={handleChange}
            />
          </label>
          <label>
            Warm beverage?
            <select
              name="isWarmBeverage"
              value={editedItem.isWarmBeverage}
              onChange={handleChange}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <label>
            Cold Beverage?
            <select
              name="isColdBeverage"
              value={editedItem.isColdBeverage}
              onChange={handleChange}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <label>
            Alcoholic beverage?
            <select
              name="isAlcoholicBeverage"
              value={editedItem.isAlcoholicBeverage}
              onChange={handleChange}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <label>
            Lunch?
            <select
              name="isLunch"
              value={editedItem.isLunch}
              onChange={handleChange}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <label>
            Dessert?
            <select
              name="isDessert"
              value={editedItem.isDessert}
              onChange={handleChange}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <label>
            Choc of Month?
            <select
              name="isChocOfMonth"
              value={editedItem.isChocOfMonth}
              onChange={handleChange}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={editedItem.description}
              onChange={handleChange}
            />
          </label>
          <label>
            Description (German):
            <input
              type="text"
              name="description_GER"
              value={editedItem.description_GER}
              onChange={handleChange}
            />
          </label>
          <label>
            Description (French):
            <input
              type="text"
              name="description_FR"
              value={editedItem.description_FR}
              onChange={handleChange}
            />
          </label>
          <label>
            Image Source:
            <input
              type="text"
              name="image_source"
              value={editedItem.image_source}
              onChange={handleChange}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={editedItem.date}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Update Item</button>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      )}
      <Link to="/admin">
        <button type="button">Back to the Overview</button>{" "}
      </Link>
    </div>
  );
}
