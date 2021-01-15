import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";

import "./cart.scss";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton> Go To Chcekout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(Cart);
