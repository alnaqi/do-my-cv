import MenuIcon from '@mui/icons-material/Menu';
import {
  Menu,
  Toolbar,
  AppBar,
  Avatar,
  Typography,
  useTheme,
  IconButton,
  Box,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import ListItemsAppbarAvatar from './ListItemsAppbarAvatar';

import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase/config"

const MUIAppbar = ({ drawerWidth, showDrawer }) => {
  const [user, loading, error] = useAuthState(auth)
  const theme = useTheme();

  const settingsLogout = [
    {
      text: "Profile",
      navigate: "/main/Contact",
    },
    {
      text: "Logout",
      navigate: "/main/registration",
      handleAuth: () => {
        signOut(auth).then(() => {
          console.log("Sign out seccssfully !")
        }).catch((error) => {

        })
      }
    }
  ];
  const settingsLogin = [
    {
      text: "Sign In",
      navigate: "/main/registration",
    },
    {
      text: "Sign Up",
      navigate: "/main/registration",
    },
  ];

  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        [theme.breakpoints.up("md")]: {
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
        }
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={showDrawer}
          sx={{
            [theme.breakpoints.up("md")]: {
              display: "none",
            },
            mr: "9px",
          }}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1 }}
        >{user && (user.displayName !== null ? user.displayName : user.email)}</Typography>
        {/* <Link
          style={{
            textDecoration: "none",
            color: "inherit"
          }}
          to="/main"
        >
          <Typography variant="body1" color="inherit">
            Guts
          </Typography>
        </Link>
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/main"
        >
          <Avatar alt="Turki Alnaqi" src={logo} />
        </Link> */}
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="User settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <ListItemsAppbarAvatar settings={user ? settingsLogout : settingsLogin} handleCloseUserMenu={handleCloseUserMenu} />
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MUIAppbar;
