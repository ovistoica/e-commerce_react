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
