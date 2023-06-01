import { useState, useEffect } from "react";

export default function Delete_Item() {
  const [itemId, setItemId] = useState("");
  const [item, setItem] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);

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
      } else setItem(data);
    } catch (error) {
      console.error(error);
      // Handle the error or throw it to the calling function/component
      throw error;
    }
  };

  const handleConfirmDelete = async () => {
    try {
      // Send delete request to the server to remove the item from the database
      const response = await fetch(`/api/menu/${itemId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete item");
      }
      // Reset the state
      setItemId("");
      setItem([]);
      setConfirmDelete(false);
      alert("Item deleted successfully!");
    } catch (error) {
      console.error(error);
      // Handle the error or throw it to the calling function/component
      throw error;
    }
  };

  return (
    <div>
      <h1>Delete Item</h1>
      {item.length < 1 ? (
        <form onSubmit={handleSubmit}>
          <label>
            Enter Item ID:
            <input type="text" value={itemId} onChange={handleIdChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <p>Item ID: {item[0].id}</p>
          <p>Item Name: {item[0].item_name}</p>
          {!confirmDelete ? (
            <>
              <p>Are you sure you want to delete this item?</p>
              <button onClick={() => setConfirmDelete(true)}>Yes</button>
              <button onClick={() => setItem([])}>No</button>
            </>
          ) : (
            <>
              <p>Deleting item...</p>
              <button onClick={handleConfirmDelete}>Confirm Delete</button>
            </>
          )}
        </>
      )}
    </div>
  );
}
