import { useContext } from 'react';
import { ProductCardContainer } from './product-card.styles';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const {addItemToCart} = useContext(CartContext);

  const addToCart = () => addItemToCart(product);
    return (
      <ProductCardContainer>
        <img src={imageUrl} alt={name}/>
        <div className='footer'>
          <span className='name'>{name}</span>
          <span className='price'>{price}</span>
        </div>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addToCart}>ADD TO CART</Button>
      </ProductCardContainer>
    );
};

export default ProductCard;