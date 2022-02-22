export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItems = cartItems.some(cartItem => cartItem.id === cartItemToAdd.id);

  if (existingCartItems) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const decreaseQty = (cartItems, cartItemToDecrement) => {
  if (cartItemToDecrement.quantity > 1) {    
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToDecrement.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 } 
        : cartItem
    );
  } else {
    return cartItems;
  }
}