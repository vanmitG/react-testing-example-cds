import React from "react";
import { shallow } from "enzyme";
import ProductList from "./ProductList";

const productList = [
  { id: 1, name: "Oranges", price: 1000 },
  { id: 2, name: "Apples", price: 50.25 },
  { id: 3, name: "Bananas", price: 20.99 },
  { id: 4, name: "Kiwis", price: 10000 }
];

it("renders correct number of items", () => {
  const wrapper = shallow(<ProductList products={productList} />);
  expect(wrapper.find("li").length).toEqual(4);
});

it("renders price for each item", () => {
  const wrapper = shallow(<ProductList products={productList} />);
  const firstProduct = wrapper.find("li").first();
  expect(firstProduct.text()).toMatch("$1,000.00 USD");
});

// const texts = wrapper.find(".foo").map(node => node.text());
// expect(texts).to.eql(["bax", "bar", "baz"]);
