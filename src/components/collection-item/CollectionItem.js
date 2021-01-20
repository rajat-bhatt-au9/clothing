import React from "react";
import "./collection.scss";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="product">
      <div className="product-content">
        <div className="product-img">
          <img className="image" src={imageUrl} alt="product image" />
        </div>
        <div className="product-btns">
          <button
            type="button"
            onClick={() => addItem(item)}
            className="btn-cart"
          >
            add to cart
            <span>
              <i class="fas fa-shopping-cart"></i>
            </span>
          </button>
        </div>
      </div>

      <div className="product-info">
        <span className="product-name">{name}</span>
        <p className="product-price">₹{price}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
