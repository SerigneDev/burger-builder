import React from 'react';
import Aux from '../../hoc/Aux';
import css from './layout.css'

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={css.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;