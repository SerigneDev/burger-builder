import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad : 1,
            cheese : 1,
            meat : 1,
            bacon : 1
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredientProps={this.state.ingredients}/>
                <p>Builder Controls</p>
            </Aux>
        );
    }
}

export default BurgerBuilder;