import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

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
    <div className="adminArea">
      <div className="deleteArea">
        <h1 className="addHeadline">Delete Item</h1>
        {item.length < 1 ? (
          <form className="deleteForm" onSubmit={handleSubmit}>
            <label>
              Enter Item ID:{" "}
              <input type="text" value={itemId} onChange={handleIdChange} />
            </label>
            <button
              style={{
                marginLeft: "2%",
              }}
              type="submit"
            >
              Submit
            </button>
          </form>
        ) : (
          <>
            <div className="deleteForm">
              <p>
                Item ID: <strong>{item[0].id}</strong>
              </p>
              <p>
                Item Name: <strong>{item[0].item_name}</strong>
              </p>
              {!confirmDelete ? (
                <>
                  <p>Are you sure you want to delete this item?</p>
                  <button
                    style={{
                      margin: "0 2% 2% 0",
                      justifyContent: "center",
                      backgroundColor: "#c7ecc8",
                    }}
                    onClick={() => setConfirmDelete(true)}
                  >
                    Yes
                  </button>
                  <button
                    style={{
                      backgroundColor: "#ee9f9f",
                    }}
                    onClick={() => setItem([])}
                  >
                    No
                  </button>
                </>
              ) : (
                <>
                  <p>Deleting item...</p>
                  <button onClick={handleConfirmDelete}>Confirm Delete</button>
                </>
              )}
            </div>
          </>
        )}
        <Link to="/admin">
          <button
            style={{
              margin: "2% auto 80% 2%",
              justifyContent: "center",
              backgroundColor: "#e9c2d1",
            }}
            type="button"
          >
            Back to the Overview
          </button>{" "}
        </Link>
      </div>
    </div>
  );
}
