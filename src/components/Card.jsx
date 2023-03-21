import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <li data-testid="product">
        <Link data-testid="product-detail-link" to={ `/productDetail/${id}` }>
          <img src={ thumbnail } alt={ title } />
          <p>{ title }</p>
          <p>{`R$ ${price} `}</p>
        </Link>
      </li>
    );
  }
}

Card.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
