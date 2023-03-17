import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class QueryResults extends Component {
  render() {
    const { queryResult } = this.props;
    return (
      <>
        <h1>pesquisa</h1>
        { queryResult.length === 0 && <p>Nenhum produto foi encontrado</p>}
        <ul>
          { queryResult.map((item) => (
            <li data-testid="product" key={ item.id }>
              <img src={ item.thumbnail } alt={ item.title } />
              <p>{ item.title }</p>
              <p>{`R$ ${item.price} `}</p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

QueryResults.propTypes = {
  queryResult: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired).isRequired,
};
