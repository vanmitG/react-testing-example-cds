import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";

const productList = [
  { id: 1, name: "Oranges", price: 1000 },
  { id: 2, name: "Apples", price: 50.25 },
  { id: 3, name: "Bananas", price: 20.99 },
  { id: 4, name: "Kiwis", price: 10000 }
];

function App() {
  return (
    <div className="App">
      <h1>My E-Commerce Site</h1>
      <ProductList products={productList} />
    </div>
  );
}

export default App;
