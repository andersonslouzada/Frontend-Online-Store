import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          type="text"
          placeholder="Digite algum termo de pesquisa ou esolha uma categoria"
        />
      </div>
    );
  }
}
