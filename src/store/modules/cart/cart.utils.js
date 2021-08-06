export const addItemToCart = (cartItems, cartItemToAdd) => {
    
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, amount: cartItem.amount + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, amount: 1 }];
  };

  export const removeItemToCart = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.amount === 1){
      return cartItems.filter(cartItem=> cartItem.id !== cartItemToRemove.id);
    }

    return cartItems.map(cartItem=> cartItem.id === cartItemToRemove.id? {...cartItem, amount: cartItem.amount - 1 } : cartItem)

  }