import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductById } from '../../services/api';

export default class ProductOverview extends Component {
  state = {
    name: '',
    img: '',
    price: '',
    details: [],
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const productData = await getProductById(id);
    console.log(productData);
    this.setState({
      name: productData.title,
      img: productData.thumbnail,
      price: productData.price,
      details: [...productData.attributes],
    });
  }

  render() {
    const { name, img, price, details } = this.state;
    return (
      <div>
        <button type="button">
          <Link
            to="/cart"
            data-testid="shopping-cart-button"
          >
            Carrinho de compras
          </Link>
        </button>

        <div>
          <p data-testid="product-detail-name">{ name }</p>
          <img data-testid="product-detail-image" src={ img } alt={ name } />
          <p data-testid="product-detail-price">{ price }</p>
          <ul>
            { details.map(({ value_name: valueName, id, name: nome }) => (
              <li key={ id }>
                <p>{`${nome}: ${valueName}`}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ProductOverview.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
