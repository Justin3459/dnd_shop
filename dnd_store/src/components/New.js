import React from "react";
import "./CSS/New.css";

function New() {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new 
        FormData(e.target))
    fetch("http://localhost:3000/shop", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
  };

  return (
    <form onSubmit={onSubmit} className="newItemForm">
      <label>
        Name:
        <input name="name"></input>
      </label>
      <label>
        Cost:
        <input name="cost"></input>
      </label>
      <label>
        Damage:
        <input name="damage"></input>
      </label>
      <label>
        Weight:
        <input name="weight"></input>
      </label>
      <label>
        Properties:
        <textarea name="properties"></textarea>
      </label>
      <label>
        Type:
        <select>
          <option>Simple Weapon</option>
          <option>Martial Weapon</option>
          <option>Light Armor</option>
          <option>Medium Armor</option>
          <option>Heavy Armor</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default New;
