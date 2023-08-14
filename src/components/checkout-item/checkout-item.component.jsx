import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CheckoutItemContainer, ImageContainer } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { removeItemFromCart, addItemToCart, decrementProduct } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const decrementItemHandler = () => decrementProduct(cartItem);
  const clearItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer><img src={imageUrl} alt={`${name}`} /></ImageContainer>
      <div className="name">{name}</div>
      <span className="quantity">
        <div className="arrow" onClick={decrementItemHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>&#10005;</div>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;