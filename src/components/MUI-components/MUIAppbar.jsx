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
import { useState } from "react";
import ListItemsAppbarAvatar from './ListItemsAppbarAvatar';

import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase/config"
import useLocalStorage from 'hooks/useLocalStorage';

const MUIAppbar = ({ drawerWidth, showDrawer }) => {
  const [user, loading, error] = useAuthState(auth)
  const theme = useTheme();

  const [firstName, setFirstName] = useLocalStorage("firstName", "");
  const [lastName, setLastName] = useLocalStorage("lastName", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phone, setPhone] = useLocalStorage("phone", "");
  const [aboutMe, setAboutMe] = useLocalStorage("aboutMe", "");
  const [urlLists, setUrlLists] = useLocalStorage("url", [{ url: "" }]);

  // Acadmic
  const [academicDegree, setAcademicDegree] = useLocalStorage("academicDegree", "");
  const [collage, setCollage] = useLocalStorage("collage", "");
  const [specialist, setSpecialist] = useLocalStorage("specialist", "");
  const [degreeNo, setDegreeNo] = useLocalStorage("degreeNo", "");
  const [degreeNoSelect, setDegreeNoSelect] = useLocalStorage("degreeNoSelect", "");
  const [educationDate, setEducationDate] = useLocalStorage("eduDate", "");
  const [experLists, setExperLists] = useLocalStorage("exper", [
    { titleExper: "", company: "", descExper: "", startDate: "", endDate: "", checkedEndDate: true },
  ]);

  // General
  const [skillLists, setSkillLists] = useLocalStorage("skillLists", [{ titleSkill: "" }]);
  const [courseLists, setCourseLists] = useLocalStorage("courseLists", [
    { titleCourse: "", courseDate: "" },
  ]);

  const settingsLogout = [
    {
      text: "Profile",
      navigate: "/main/profile",
    },
    {
      text: "Logout",
      navigate: "/main/registration",
      handleAuth: () => {
        signOut(auth).then(() => {
          setFirstName("")
          setLastName("")
          setEmail("")
          setPhone("")
          setAboutMe("")
          setUrlLists([{ url: "" }])

          // academic
          setAcademicDegree("")
          setCollage("")
          setSpecialist("")
          setDegreeNo("")
          setDegreeNoSelect("")
          setEducationDate("")
          setExperLists([
            { titleExper: "", company: "", descExper: "", startDate: "", endDate: "", checkedEndDate: true },
          ])

          // General
          setSkillLists([{ titleSkill: "" }])
          setCourseLists([
            { titleCourse: "", courseDate: "" },
          ])
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

  const [anchorElUser, setAnchorElUser] = useState(null);
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
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {user && (user.displayName !== null ? `Hello, ${user.displayName}` : user.email)}
        </Typography>

        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="User settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt={user && (user.displayName !== null ? user.displayName : "")} src="/static/images/avatar/2.jpg" />
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
