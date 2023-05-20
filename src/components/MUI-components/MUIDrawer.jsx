import {
  Divider,
  Drawer,
  List,
  useTheme,
  IconButton,
  Box,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  ContactPage,
  Create,
  Home,
} from "@mui/icons-material";
import { yellow } from "@mui/material/colors";

import ListItemsDrawer from "./ListItemsDrawer";

const drawerValues = [
  {
    Text: "Home",
    Icon: <Home />,
    navigate: "/main",
  },
  {
    Text: "Create",
    Icon: <Create />,
    navigate: "/main/create",
  },
  {
    Text: "Contact us",
    Icon: <ContactPage />,
    navigate: "/main/Contact",
  }
];

const MUIDrawer = ({ drawerWidth, setMode, isDrawerOpen, drawerType, closeDrawer }) => {
  const theme = useTheme();
  const handleChangeTheme = () => {
    localStorage.setItem(
      "theme",
      theme.palette.mode === "dark" ? "light" : "dark"
    );
    setMode(theme.palette.mode === "dark" ? "light" : "dark");
  };
  return (
    <Box component="nav">
      <Drawer
        sx={{
          [theme.breakpoints.down("md")]: {
            display: isDrawerOpen,
          },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={closeDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 1,
            p: 1,
          }}
        >
          <IconButton onClick={handleChangeTheme} color="inherit">
            {theme.palette.mode === "light" ? (
              <Brightness7 sx={{ color: yellow[600] }} />
            ) : (
              <Brightness4 />
            )}
          </IconButton>
        </Box>
      
        <nav aria-label="main mailbox folders">
          <List>
            <Divider />
            <ListItemsDrawer {...{drawerValues, theme}} />
          </List>
        </nav>
      </Drawer>
    </Box>
  );
};

export default MUIDrawer;