import React, { useState, useEffect } from "react";

function Menu({ categories, allItems }) {
  const [category, setCategory] = useState(categories[0]);
  const [selectedItem, setSelectedItem] = useState({});
  const [items, setItems] = useState(allItems);
  const [ordered, setOrdered] = useState([]);

  function handleCategoryChange(category) {
    setItems(allItems.filter((i) => i.type == category));
    setCategory(category);
    setSelectedItem(null);
  }

  function addToOrder(item) {
    if (item != null) {
      console.log(`adding ${item.name} to order...`);
      setOrdered([...ordered, item]);
      setSelectedItem(null);
    }
  }

  return (
    <div className="menu">
      <div className="dropdown category">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="categoryDropdown"
          data-toggle="dropdown"
        >
          Select Category
        </button>
        <ul className="dropdown-menu">
          {categories.map((category, i) => (
            <li key={i}>
              <a
                className="dropdown-item"
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Items Selection */}
      <div className="dropdown items">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="categoryDropdown"
          data-toggle="dropdown"
        >
          Select Item
        </button>
        <ul className="dropdown-menu">
          {items.map((item, i) => (
            <li key={i}>
              <a
                className="dropdown-item"
                onClick={() => setSelectedItem(item)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => addToOrder(selectedItem)}
      >
        Add
      </button>

      <p>Selected Category: {category}</p>
      <p>Selected Item: {JSON.stringify(selectedItem)}</p>
      <p>Ordered Items: {JSON.stringify(ordered)}</p>
    </div>
  );
}

export default Menu;
