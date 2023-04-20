import React, { useState } from "react";

function PizzaForm({ pizzaInfo, editPizza, submitEdittedPizza }) {
  const { topping, size, vegetarian } = pizzaInfo

  function handleFormTextInputChange(e) {
    editPizza(e.target.name, e.target.value )
  }

  function handleRadioInputChange(e) {
    editPizza(e.target.name, e.target.value === "Vegetarian")
  }

  return (
    <form onSubmit={submitEdittedPizza}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            onChange={handleFormTextInputChange}
            value={topping}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={handleFormTextInputChange} value={size} >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleRadioInputChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleRadioInputChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
