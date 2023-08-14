import { Menu } from "@mui/icons-material";
import {
  Toolbar,
  AppBar,
  Avatar,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"

const MUIAppbar = ({ drawerWidth, showDrawer }) => {
  const theme = useTheme();

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
          <Menu />
        </IconButton>
        <Typography sx={{flexGrow: 1}}
        ></Typography>
        <Link
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
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default MUIAppbar;
