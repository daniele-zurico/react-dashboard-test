import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './SideBar.style';
import { mailFolderListItems } from './tileData';
const DrawerBar  = ({ classes, open, closeSidebar, theme }) => {

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          ),
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={closeSidebar}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>{mailFolderListItems}</List>
      </Drawer>
    );
};

const SideBar = withStyles(styles, { withTheme: true })(DrawerBar);
export { SideBar };
