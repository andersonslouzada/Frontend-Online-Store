import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CategoriesResults from '../components/CategoriesResults';
import QueryResults from '../components/QueryResults';
import { getProductsByQuery } from '../services/api';

export default class Home extends Component {
  state = { query: '', queryResult: [] };

  handleChange = (event) => {
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  onClick = async () => {
    const { query } = this.state;
    const queryResult = await getProductsByQuery(query);
    this.setState({ queryResult: queryResult.results });
    // console.log(queryResult.results);
  };

  render() {
    const { queryResult } = this.state;
    return (
      <>
        <div>
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            data-testid="query-input"
            type="text"
            name="query"
            placeholder="Digite algum termo de pesquisa ou esolha uma categoria"
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            // name="query"
            onClick={ this.onClick }
            type="button"

          >
            pesquisar
          </button>
          <Link to="/cart" data-testid="shopping-cart-button">
            <button
              type="button"
            >
              carrinho
            </button>
          </Link>
        </div>
        <div>
          <QueryResults queryResult={ queryResult } />
        </div>

        <div>
          <CategoriesResults />
        </div>
      </>
    );
  }
}
