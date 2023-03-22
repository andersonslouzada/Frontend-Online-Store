import React from 'react';
import PropTypes from 'prop-types';
import CartProductCard from './CartProductCard';

class CartProducts extends React.Component {
  render() {
    const { cartProducts, changeAmount } = this.props;
    let content;

    if (cartProducts.length > 0) {
      content = (
        <ul>
          {cartProducts.map((product) => (
            <li
              data-testid="product"
              key={ product[0].id }
            >
              <CartProductCard
                title={ product[0].title }
                amount={ product[1] }
                thumbnail={ product[0].thumbnail }
                id={ product[0].id }
                changeAmount={ (id, operation) => changeAmount(id, operation) }
                price={ product[0].price }
              />
            </li>
          ))}
        </ul>
      );
    } else {
      content = (
        <p
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </p>
      );
    }

    return (
      content
    );
  }
}

CartProducts.propTypes = {
  cartProducts: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.object.isRequired,
        PropTypes.number.isRequired,
      ]),
    ).isRequired,
  ).isRequired,
  changeAmount: PropTypes.func.isRequired,
};

export default CartProducts;
