import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './Content.style';
import { Route, Switch } from 'react-router-dom';

class Main extends Component {
  render() {
    const { classes, routes } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </Switch>
      </main>
    );
  }
}

const Content = withStyles(styles, { withTheme: true })(Main);
export { Content };
