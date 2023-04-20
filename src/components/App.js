import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const pizzaUrl = "http://localhost:3001/pizzas/"
  const [pizzas, setPizzas] = useState([])
  const [pizzaInfo, setPizzaInfo] = useState({
    id: 0,
    topping: "",
    size: "",
    vegetarian: null,
  })

  useEffect(()=> {
    fetch(pizzaUrl)
    .then(r => r.json())
    .then(data => setPizzas(data))
  }, [])

  function sendInfoToForm(pizza) {
    setPizzaInfo(pizza)
  }

  function editPizzaInfo(key, val) {
    console.log(key, val)
    setPizzaInfo({...pizzaInfo, [key]: val})
  }

  function submitEdittedPizza(e) {
    e.preventDefault()

    const patchRequest = {
      method: "PATCH",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(pizzaInfo)
    }

    fetch(pizzaUrl + pizzaInfo.id, patchRequest)
      .then(r => r.json())
      .then(data => setPizzas(pizzas.map(pizza => {
        if (pizza.id === data.id) return data;
        return pizza
      })))

    setPizzaInfo({
      id: 0,
      topping: "",
      size: "",
      vegetarian: null,
    })
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaInfo={pizzaInfo} editPizza={editPizzaInfo} submitEdittedPizza={submitEdittedPizza}/>
      <PizzaList pizzas={pizzas} sendInfoToForm={sendInfoToForm}/>
    </>
  );
}

export default App;
