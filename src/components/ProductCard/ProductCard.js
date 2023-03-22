import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { productName, productImg, productPrice, addToCart, product } = this.props;
    return (
      <div>
        <p>
          { productName }
        </p>
        <img
          src={ productImg }
          alt={ productName }
        />
        <p>
          { `R$ ${productPrice}` }
        </p>
        <button
          onClick={ () => addToCart(product) }
          data-testid="product-add-to-cart"
        >
          Adiciona ao Carrinho

        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: PropTypes.string.isRequired,
  productImg: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
  product: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
