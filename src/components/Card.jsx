import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <li data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <p>{`R$ ${price} `}</p>
      </li>
    );
  }
}

Card.propTypes = {
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};
