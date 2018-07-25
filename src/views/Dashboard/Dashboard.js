import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { openSidebar, closeSidebar } from '../../store/actions/layout.actions';
import { withRouter } from 'react-router-dom';

import { mailFolderListItems } from './tileData';
import { styles } from './dashboard.style';
import { SideBar, MenuBar, Content } from '../../components';
import routes from '../../routes';

const _Dashboard = ({ classes, theme, openSidebar, closeSidebar, sideBar }) => {
  return (
    <div className={classes.root}>
      <MenuBar open={sideBar} openSidebar={openSidebar} />
      <SideBar
        open={sideBar}
        closeSidebar={closeSidebar}
        items={mailFolderListItems}
      />
      <Content routes={routes} />
    </div>
  );
};

const mapStateToProps = state => ({
  sideBar: state.layout.sideBar,
});

const Dashboard = withRouter(
  connect(
    mapStateToProps,
    { openSidebar, closeSidebar }
  )(withStyles(styles, { withTheme: true })(_Dashboard))
);

export default Dashboard;
