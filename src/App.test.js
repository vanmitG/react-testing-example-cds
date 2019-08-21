import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";
import ProductList from "./components/ProductList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders the name of my site", () => {
  const wrapper = shallow(<App />);
  const header = wrapper.find("h1").first();
  expect(header.contains("My E-Commerce Site")).toBe(true);
});

it("contains a product list", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(ProductList).length).toBe(1);
});
