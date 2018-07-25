import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { openSidebar, closeSidebar } from '../../store/actions/layout.actions';
import { withRouter } from 'react-router-dom';

import { mailFolderListItems } from './tileData';
import { styles } from './dashboard.style';
import { SideBar, MenuBar, Content } from '../../components';
import routes from '../../routes';

class Dashboard extends React.Component {
  render() {
    const { classes, openSidebar, closeSidebar } = this.props;

    return (
      <div className={classes.root}>
        <MenuBar open={this.props.sideBar} openSidebar={openSidebar} />
        <SideBar
          open={this.props.sideBar}
          closeSidebar={closeSidebar}
          items={mailFolderListItems}
        />
        <Content routes={routes} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sideBar: state.layout.sideBar,
});

export default withRouter(
  connect(
    mapStateToProps,
    { openSidebar, closeSidebar }
  )(withStyles(styles, { withTheme: true })(Dashboard))
);
