import React from "react";
import { Filters } from "./components /Filters/Filters";
import { Home } from "./components /ProductList/Home/Home";
import { Cart } from "./components /ShoppingCart/Cart/Cart";

function App() {
  return (
    <div>
      <Filters />
      <Home />
      <Cart />
    </div>
  );
}

export default App;
