

import React from "react";

function Filter({ onCategoryChange }) {
  const handleCategoryChange = (event) => {
    // Invoke the callback function to notify the parent (ShoppingList) of the category change
    onCategoryChange(event.target.value);
  };

  return (
    <div className="Filter">
      <label htmlFor="filter">Filter by category:</label>
      <select id="filter" name="filter" onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

