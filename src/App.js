import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductOverview from './pages/ProductOverview';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/cart" component={ Cart } />
            <Route exact path="/productDetail/:id" component={ ProductOverview } />
          </Switch>

        </BrowserRouter>
      </div>
    );
  }
}
