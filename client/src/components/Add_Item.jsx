import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

export default function Add_Item() {
  const [itemName, setItemName] = useState("");
  const [itemNameGER, setItemNameGER] = useState("");
  const [itemNameFR, setItemNameFR] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [ingredientsGER, setIngredientsGER] = useState("");
  const [ingredientsFR, setIngredientsFR] = useState("");
  const [price, setPrice] = useState(0);
  const [isWarmBeverage, setIsWarmBeverage] = useState(0);
  const [isColdBeverage, setIsColdBeverage] = useState(0);
  const [isAlcoholicBeverage, setIsAlcoholicBeverage] = useState(0);
  const [isLunch, setIsLunch] = useState(0);
  const [isDessert, setIsDessert] = useState(0);
  const [isChocOfMonth, setIsChocOfMonth] = useState(0);
  const [description, setDescription] = useState("");
  const [descriptionGER, setDescriptionGER] = useState("");
  const [descriptionFR, setDescriptionFR] = useState("");
  const [imageSource, setImageSource] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled out
    if (
      !itemName ||
      !itemNameGER ||
      !itemNameFR ||
      !ingredients ||
      !ingredientsGER ||
      !ingredientsFR ||
      !price ||
      !description ||
      !descriptionGER ||
      !descriptionFR ||
      !imageSource ||
      !date
    ) {
      alert("Please fill out all fields");
      return;
    }

    // Create a new item object
    //prettier-ignore
    const newItem = {
      item_name: itemName,
      item_name_GER: itemNameGER,
      item_name_FR: itemNameFR,
      ingredients: ingredients,
      ingredients_GER: ingredientsGER,
      ingredients_FR: ingredientsFR,
      price: parseFloat(price),
      isWarmBeverage: isWarmBeverage,
      isColdBeverage: isColdBeverage,
      isAlcoholicBeverage: isAlcoholicBeverage,
      isLunch: isLunch,
      isDessert: isDessert,
      isChocOfMonth: isChocOfMonth,
      description: description,
      description_GER: descriptionGER,
      description_FR: descriptionFR,
      image_source: imageSource,
      date: date
    };

    // API request to add the new item to the database
    try {
      const response = await fetch("/api/menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Failed to add new item");
      }

      // Reset form fields
      setItemName("");
      setItemNameGER("");
      setItemNameFR("");
      setIngredients("");
      setIngredientsGER("");
      setIngredientsFR("");
      setPrice(0);
      setIsWarmBeverage(0);
      setIsWarmBeverage(0);
      setIsAlcoholicBeverage(0);
      setIsLunch(0);
      setIsDessert(0);
      setIsChocOfMonth(0);
      setDescription("");
      setDescriptionGER("");
      setDescriptionFR("");
      setImageSource("");
      setDate("");

      await response.json();
    } catch (error) {
      console.error(error);
      // Handle the error or throw it to the calling function/component
      throw error;
    }
  };

  return (
    <div className="adminArea">
      <div>
        <h1 className="addHeadline">Adding a new item...</h1>
        <p style={{ paddingLeft: "2%" }}>
          To add a new item, please fill out the entire form
        </p>
      </div>
      <form className="addForm" onSubmit={handleSubmit}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <label>
          Item Name (German):
          <input
            type="text"
            value={itemNameGER}
            onChange={(e) => setItemNameGER(e.target.value)}
          />
        </label>
        <label>
          Item Name (French):
          <input
            type="text"
            value={itemNameFR}
            onChange={(e) => setItemNameFR(e.target.value)}
          />
        </label>
        <label>
          Ingredients:
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </label>
        <label>
          Ingredients (German):
          <textarea
            value={ingredientsGER}
            onChange={(e) => setIngredientsGER(e.target.value)}
          ></textarea>
        </label>
        <label>
          Ingredients (French):
          <textarea
            value={ingredientsFR}
            onChange={(e) => setIngredientsFR(e.target.value)}
          ></textarea>
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Warm Beverage?
          <select
            value={isWarmBeverage}
            onChange={(e) => setIsWarmBeverage(parseInt(e.target.value))}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </label>
        <label>
          Cold Beverage?
          <select
            value={isColdBeverage}
            onChange={(e) => setIsColdBeverage(parseInt(e.target.value))}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </label>
        <label>
          Alcoholic Beverage?
          <select
            value={isAlcoholicBeverage}
            onChange={(e) => setIsAlcoholicBeverage(parseInt(e.target.value))}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </label>
        <label>
          Lunch?
          <select
            value={isLunch}
            onChange={(e) => setIsLunch(parseInt(e.target.value))}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </label>
        <label>
          Dessert?
          <select
            value={isDessert}
            onChange={(e) => setIsDessert(e.target.value === "1")}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </label>
        <label>
          Chocolate of the Month?
          <select
            value={isChocOfMonth}
            onChange={(e) => setIsChocOfMonth(parseInt(e.target.value))}
          >
            <option value="0">No</option>
            <option value="1">Yes</option>
          </select>
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <label>
          Description (German):
          <textarea
            value={descriptionGER}
            onChange={(e) => setDescriptionGER(e.target.value)}
          ></textarea>
        </label>
        <label>
          Description (French):
          <textarea
            value={descriptionFR}
            onChange={(e) => setDescriptionFR(e.target.value)}
          ></textarea>
        </label>
        <label>
          Image Source:
          <input
            type="text"
            value={imageSource}
            onChange={(e) => setImageSource(e.target.value)}
          />
        </label>
        <label>
          Date:
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button
          style={{
            margin: "2% auto 0 2%",
            justifyContent: "center",
            backgroundColor: "#c7ecc8",
          }}
          type="submit"
        >
          Add Item
        </button>
      </form>
      <Link to="/admin">
        <button
          style={{
            margin: "2% auto 40% 2%",
            justifyContent: "center",
            backgroundColor: "#e9c2d1",
          }}
          type="button"
        >
          Back to the Overview
        </button>
      </Link>
    </div>
  );
}
