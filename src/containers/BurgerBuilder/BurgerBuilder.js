import React, { Component, Fragment } from 'react';
import BurgerIngredient from '../../components/Burger/BurgerIngredient/BurgerIngredient';

class BurgerBuilder extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Burger</div>
        <div>Build Controls</div>
        <BurgerIngredient />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;