import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import colors from 'styleguide/colors'
import { H5 } from 'styleguide/typography'

import {
  SupportText,
  SupportIcon,
  SupportIconContainer,
  UserIcon,
  PowerIcon,
  MessageIcon,
  ResponsiveIconButtonContainer,
} from './elements'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    maxWidth: '1200px',
  },
  appBar: {
    boxShadow: 'none',
  },
  toolbar: {
    backgroundColor: `${colors.backgroundColor}`,
    color: `${colors.grey500}`,
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: `${colors.grey500}`,
  },
  title: {
    flexGrow: 1,
    color: `${colors.textBlack}`,
    '@media (max-width: 480px)': {
      textAlign: 'center',
    },
  },
}))

const MenuAppBar: React.FC = () => {
  const classes = useStyles()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleUserMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorEl(null)
  }
  const handleAuthChange = (event) => {
    setAuth(!auth)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge='start'
            className={classes.menuButton}
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            McMakler
          </Typography>
          <SupportIconContainer>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar-auth'
              aria-haspopup='true'
              onClick={handleAuthChange}
              color='primary'
            >
              <SupportIcon />
            </IconButton>
            <SupportText>
              <H5>Contact Support</H5>
            </SupportText>
          </SupportIconContainer>
          {auth && (
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar-auth'
              aria-haspopup='true'
              color='primary'
            >
              <MessageIcon />
            </IconButton>
          )}
          <ResponsiveIconButtonContainer>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleUserMenu}
              color='primary'
            >
              <UserIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
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
              ) : (
                'Log in to continue ->'
              )}
            </Menu>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar-auth'
              aria-haspopup='true'
              onClick={handleAuthChange}
              color='primary'
            >
              <PowerIcon />
            </IconButton>
          </ResponsiveIconButtonContainer>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
