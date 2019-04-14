import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import burgerCss from './Burger.css';

const burger = (props) => {

    const transformedIngredient = Object.keys(props.ingredientProps).map(idIngredient => {
        return [...Array(props.ingredientProps[idIngredient])].map((_, index) => {
            return <BurgerIngredient key={idIngredient + index} type={idIngredient}/>;
        })
    });

    return (
        <div className={burgerCss.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;