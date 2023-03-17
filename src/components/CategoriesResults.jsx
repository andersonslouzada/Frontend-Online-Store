import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class CategoriesResults extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
    console.log(categories);
  }

  render() {
    const { categories } = this.state;
    return (
      <>
        <h1>Categorias</h1>
        <ul>
          { categories.map((cat) => (
            <button
              key={ cat.id }
              data-testid="category"
            >
              { cat.name }
            </button>)) }
        </ul>
      </>
    );
  }
}
