import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const pizzaUrl = "http://localhost:3001/pizzas/"
  const [pizzas, setPizzas] = useState([])
  useEffect(()=> {
    fetch(pizzaUrl)
    .then(r => r.json())
    .then(data => setPizzas(data))
  }, [])

  return (
    <>
      <Header />
      <PizzaForm />
      <PizzaList pizzas={pizzas}/>
    </>
  );
}

export default App;
