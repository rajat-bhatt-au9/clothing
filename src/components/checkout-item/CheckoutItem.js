import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./checkout-item.scss";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>

      <span className="name">{name}</span>

      <span className="quantity">
        <div className="minus" onClick={() => removeItem(cartItem)}>
          <i className="far fa-minus-square" />
        </div>
        <span className="value">{quantity}</span>
        <div className="plus" onClick={() => addItem(cartItem)}>
          <i className="far fa-plus-square" />
        </div>
      </span>

      <span className="price">₹{price}</span>

      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        <span className="fas fa-trash-alt"></span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
