import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class QueryResults extends Component {
  render() {
    const { queryResult } = this.props;
    return (
      <>
        <h1>pesquisa</h1>
        <ul>
          { queryResult.map((item) => (
            <Card
              data-testid="product"
              key={ item.id }
              id={ item.id }
              price={ item.price }
              title={ item.title }
              thumbnail={ item.thumbnail }
            />
          ))}
        </ul>
        { queryResult.length === 0 && <p>Nenhum produto foi encontrado</p>}
      </>
    );
  }
}

QueryResults.propTypes = {
  queryResult: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  }).isRequired).isRequired,
};
