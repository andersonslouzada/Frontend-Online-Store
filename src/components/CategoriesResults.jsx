import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Categories extends Component {
  state = {
    categories: [],
    categoryItens: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  productsCategory = async (categoryId) => {
    const response = await getProductsFromCategoryAndQuery(categoryId, null);
    this.setState({ categoryItens: [...response.results] });
  };

  onClick = async ({ target }) => {
    this.productsCategory(target.id);
    console.log(target.id);
  };

  render() {
    const { categories, categoryItens } = this.state;
    return (
      <>
        <h1>Categorias</h1>
        <ul>
          { categories.map((cat) => (
            <button
              key={ cat.id }
              data-testid="category"
              id={ cat.id }
              onClick={ this.onClick }
            >
              { cat.name }
            </button>)) }
        </ul>
      </>
    );
  }
}
