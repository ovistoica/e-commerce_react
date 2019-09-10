export const addItemToCart: Object[] = (
  cartItems: [],
  cartItemToAdd: Object,
) => {
  const existingCartItem: Object = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id,
  );

  if (existingCartItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart: Object[] = (
  cartItems: Object[],
  cartItemToClear: Object,
) => {
  const existingCartItem: Object = cartItems.find(
    cartItem => cartItem.id === cartItemToClear.id,
  );
  if (existingCartItem) {
    return existingCartItem.quantity > 1
      ? cartItems.map(cartItem =>
          cartItem.id === cartItemToClear.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
      : cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id);
  }
  return cartItems;
};
