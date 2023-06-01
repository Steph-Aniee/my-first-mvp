import { useState, useEffect } from "react";

export default function Edit_Item() {
  const [itemId, setItemId] = useState("");
  const [item, setItem] = useState(null);
  const [editedItem, setEditedItem] = useState({
    item_name: "",
    item_name_GER: "",
    // will add more fields later
  });

  const handleIdChange = (e) => {
    setItemId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Fetch the item with the given ID from the database
    try {
      const response = await fetch(`/api/menu/${itemId}`);
      if (!response.ok) {
        alert("Item not found");
        throw new Error("Item not found");
      }
      const data = await response.json();
      setItem(data);
      setEditedItem({
        item_name: data.item_name,
        item_name_GER: data.item_name_GER,
        // will set more values later
      });
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

  const handleUpdateItem = () => {
    // Validating input fields
    if (
      editedItem.item_name.trim() === "" ||
      editedItem.item_name_GER.trim() === ""
    ) {
      alert("Please fill in all fields");
      return;
    }
    // Send the PUT request to update the item
    fetch(`/api/menu/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedItem),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update item");
        }
        alert("Item updated successfully");
        setItem(null);
        setItemId("");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to update item");
      });
  };

  return (
    <div>
      <h1>Edit Item</h1>
      {item === null ? (
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
          {/* will add more input fields for other item properties later */}
          <button type="submit">Update Item</button>
        </form>
      )}
    </div>
  );
}
