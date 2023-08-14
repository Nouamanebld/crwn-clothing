import { CartItemContainer, CartImg, ItemDetails, Name } from './cart-item.styles';

const CartItem = ({cartItem}) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartImg src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className='price'>{quantity} x ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;