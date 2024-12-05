import React, { Component } from "react";
import "./CalculatorForm.css"

class CalculatorForm extends Component {
  state = {
    charge: "",
    amount: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { charge, amount } = this.state;
    if (charge && amount) {
      const newPrice = {
        id: Date.now(),
        charge,
        amount: parseInt(amount),
      };
      this.props.onAddPrice(newPrice);
      this.setState({ charge: "", amount: "" });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>지출 항목</label>
          <input
            type="text"
            name="charge"
            value={this.state.charge}
            onChange={this.handleInputChange}
            placeholder="예) 렌트비"
          />
        </div>
        <div>
          <label>금액</label>
          <input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleInputChange}
            placeholder="예) 1000"
          />
        </div>
        <button type="submit">추가</button>
      </form>
    );
  }
}

export default CalculatorForm;
