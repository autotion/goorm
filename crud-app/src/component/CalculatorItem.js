import React, { Component } from "react";
import "./CalculatorItem.css";

export class CalculatorItem extends Component {
  state = {
    isEditing: false,
    charge: this.props.price.charge,
    amount: this.props.price.amount,
  };

  handleEditToggle = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSave = () => {
    const { charge, amount } = this.state;
    const updatedPrice = { charge, amount: parseInt(amount) };
    this.props.onEdit(this.props.price.id, updatedPrice);
    this.setState({ isEditing: false });
  };

  render() {
    const { charge, amount } = this.props.price;
    const { isEditing, charge: editedCharge, amount: editedAmount } = this.state;

    return (
      <li>
        <div>
          {isEditing ? (
            <div>
              <input
                type="text"
                name="charge"
                value={editedCharge}
                onChange={this.handleInputChange}
              />
              <input
                type="number"
                name="amount"
                value={editedAmount}
                onChange={this.handleInputChange}
              />
            </div>
          ) : (
            <div>
              <span>{charge}</span>: <span>{amount} 원</span>
            </div>
          )}
        </div>
        <div>
          {isEditing ? (
            <button onClick={this.handleSave}>저장</button>
          ) : (
            <button onClick={this.handleEditToggle}>수정</button>
          )}
          <button onClick={() => this.props.onDelete(this.props.price.id)}>삭제</button>
        </div>
      </li>
    );
  }
}

export default CalculatorItem;