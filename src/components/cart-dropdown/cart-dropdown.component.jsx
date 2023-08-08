import { useContext } from 'react';

import Button from '../button/button.component';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className='cart-dropdown-container'>
      {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
    <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropdown;