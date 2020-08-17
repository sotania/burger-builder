import React, { Fragment } from 'react';
import classes from './Layout.css';

const layout = (props) => (
  <React.Fragment>
    <div>Tollbar , SideDrawer , Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </React.Fragment>
)

export default layout;