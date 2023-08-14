import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

  if(existingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ?  {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem;
    });
  }

  return [...cartItems, {...productToAdd, quantity: 1}];
};

const removeCartItem = (cartItems, cartItemToRemove) => cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);

const decreaseQuantity = ((cartItems, productToDecrement) => {
  const existingCartItem = cartItems.find((cartItem) =>
    cartItem.id === productToDecrement.id);

  if(existingCartItem.quantity === 1) {
    return removeCartItem(cartItems, productToDecrement);
  } else {
    return cartItems.map((cartItem) => 
      cartItem.id === productToDecrement.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
      );
  }

});

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  totalPrice: 0,
  decrementProduct: () => {},
});

export const CartProvider = ({children}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);
  
  useEffect(() => {
    const cartCounter = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    } ,0);
    setTotalPrice(cartCounter);
    }
  );

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const decrementProduct = (productToDecrement) => {
    setCartItems(decreaseQuantity(cartItems, productToDecrement));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    totalPrice,
    decrementProduct,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};