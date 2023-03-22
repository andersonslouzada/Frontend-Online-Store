import React from 'react';
import PropTypes from 'prop-types';

class CartProductCard extends React.Component {
  render() {
    const { title, amount, thumbnail, id, changeAmount, price } = this.props;
    const decrease = -1;
    const increase = 1;
    const remove = 0;
    return (
      <>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="shopping-cart-product-name">
          { title }
        </p>
        <button
          data-testid="product-decrease-quantity"
          disabled={ amount === 1 }
          onClick={ () => changeAmount(id, decrease) }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">
          { amount }
        </p>
        <button
          data-testid="product-increase-quantity"
          onClick={ () => changeAmount(id, increase) }
        >
          +
        </button>
        <button
          data-testid="remove-product"
          onClick={ () => changeAmount(id, remove) }
        >
          X
        </button>
        <p>
          { `R$ ${price}` }
        </p>
      </>
    );
  }
}

CartProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  changeAmount: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartProductCard;
