import React, { Component } from "react";
import "./CalculatorList.css";
import CalculatorItem from "./CalculatorItem";

export class CalculatorList extends Component {
  render() {
    const { prices, onDelete, onEdit } = this.props; 


    if (!Array.isArray(prices)) {
      return <p>가격 목록이 없습니다.</p>;
    }

    return (
      <ul>
        {prices.map((price) => (
          <CalculatorItem
            key={price.id}
            price={price}
            onDelete={onDelete} 
            onEdit={onEdit} 
          />
        ))}
      </ul>
    );
  }
}

export default CalculatorList;
