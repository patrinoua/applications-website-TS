import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import colors from '../../styleguide/colors'
import {
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Menu, 
  MenuItem
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import styled from 'styled-components'

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`
export const SupportIcon = styled(Icon)`
  background-image: url('./icons/support.svg');
`
export const UserIcon = styled(Icon)`
  background-image: url('./icons/user.svg');
`
export const PowerIcon = styled(Icon)`
  background-image: url('./icons/power.svg');
`
export const MessageIcon = styled(Icon)`
  background-image: url('./icons/message.svg');
`
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    boxShadow: 'none'
  },
  toolbar:{
    backgroundColor: `${colors.backgroundColor}`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: `${colors.grey500}`,
  },
  title: {
    flexGrow: 1,
    color: `${colors.textBlack}`,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleUserMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };
const handleAuthChange = (event) => {
    setAuth(!auth);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.toolbar}> 
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            McMakler
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUserMenu}
              color="primary"
            >
              <UserIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleCloseUserMenu}
            >
            {auth ? (
            <div> 
              <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
            </div>
            )
            :'Log in to continue ->'
            }
            </Menu>
          </div>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar-auth"
              aria-haspopup="true"
              onClick={handleAuthChange}
              color="primary"
              >
              <PowerIcon />
            </IconButton>
            {console.log(auth)}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
