import React, { Component } from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Card from './Card';

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

  // componentDidUpdate() {
  //   const { categoryItens } = this.state;

  //   return categoryItens.map((item) => (
  //     <Card
  //       key={ item.id }
  //       title={ item.title }
  //       thumbnail={ item.thumbnail }
  //       price={ item.price }
  //     />));
  // }

  onClick = async ({ target }) => {
    const response = await getProductsFromCategoryAndQuery(target.id, null);
    this.setState({ categoryItens: response.results });
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
        <ul>
          { categoryItens.length !== 0 && categoryItens.map((item) => (
            <Card
              key={ item.id }
              title={ item.title }
              thumbnail={ item.thumbnail }
              price={ item.price }
            />))}
        </ul>
      </>
    );
  }
}
