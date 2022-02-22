import React from "react";
import { connect } from "react-redux";
import { removeItem, addItem, decreaseQty } from "../../redux/cart/cart.actions";

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, removeItem, addItem, decreaseQty }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={ imageUrl } alt="item" />
      </div>

      <span className="name">{ name }</span>

      <div className="quantity">
        <div className="arrow" onClick={() => decreaseQty(cartItem)}>&#10094;</div>
        <span className="value">{ quantity }</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </div>

      <span className="price">${ price }</span>
      
      <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
    </div>
)}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
  decreaseQty: item => dispatch(decreaseQty(item))
}); 

export default connect(null, mapDispatchToProps)(CheckoutItem);