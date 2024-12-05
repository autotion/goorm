import React, { Component } from "react";
import "./App.css";
import CalculatorForm from "./component/CalculatorForm";
import CalculatorList from "./component/CalculatorList";

class App extends Component {
  state = {
    prices: [],
  };

  handleAddPrice = (price) => {
    this.setState({
      prices: [...this.state.prices, price],
    });
  };

  handleDeletePrice = (id) => {
    this.setState({
      prices: this.state.prices.filter((price) => price.id !== id),
    });
  };

  handleEditPrice = (id, updatedPrice) => {
    const updatedPrices = this.state.prices.map((price) =>
      price.id === id ? { ...price, ...updatedPrice } : price
    );
    this.setState({ prices: updatedPrices });
  };


  render() {
    return (
      <header className="app-container">
        <h1>예산 계산기</h1>

      
        <div style={{ width: "100%", backgroundColor: "white", paddingTop: "10px",  paddingBottom: "10px"}}>
          <CalculatorForm onAddPrice={this.handleAddPrice} />
        </div>

   
        <div style={{ width: "100%", backgroundColor: "white", paddingTop: "10px", paddingBottom: "10px"}}>
          <CalculatorList
            prices={this.state.prices}
            onDelete={this.handleDeletePrice}
            onEdit={this.handleEditPrice}
          />
        </div>

   
        <div style={{ display: "flex", justifyContent: "end", marginTop: "1rem" }}>
          <p style={{ fontSize: "2rem" }}>
            총지출:
            <span>
              {this.state.prices.reduce((acc, price) => acc + price.amount, 0)} 원
            </span>
          </p>
        </div>
      </header>
    );
  }
}

export default App;
