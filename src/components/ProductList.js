import React, { Component } from "react";

export default class ProductList extends Component {
  formatter(price) {
    var formatterC = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    });
    return formatterC.format(price);
  }

  // cutTwoZeros(price){
  //   if(){

  //   }
  // }

  render() {
    console.log("propss", this.props);
    return (
      <ul>
        ProductList
        {this.props.products.map(el => {
          return <li>{`${this.formatter(el.price)} USD`}</li>;
        })}
      </ul>
    );
  }
}
