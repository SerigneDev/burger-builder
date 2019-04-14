import React, { Component } from 'react';
import cssModule from './BurgerIngredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {

    render () {

        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom') :
                ingredient = <div className={cssModule.BreadBottom}></div>;
                break;
            case ('bread-top') :
                ingredient = (
                    <div className={cssModule.BreadTop}>
                        <div className={cssModule.Seed1}></div>
                        <div className={cssModule.Seed2}></div>
                    </div>  
                );
                break;
            case ('meat') :
                ingredient = <div className={cssModule.Meat}></div>;
                break;
            case ('cheese') :
                ingredient = <div className={cssModule.Cheese}></div>;
                break;
            case ('salad') :
                ingredient = <div className={cssModule.Salad}></div>;
                break;
            case ('bacon') :
                ingredient = <div className={cssModule.Bacon}></div>;
                break;
            default: 
                ingredient = null;
        }

        return ingredient;
    }
        
}

BurgerIngredient.propTypes = {
    type : PropTypes.string.isRequired
};

export default BurgerIngredient;