import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";

import {
  createTheme,
  CssBaseline,
  Divider,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";

import getDesignTokens from "styles/MyTheme";
import Header from "components/Header/Header";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" m={3}>
      {"Copyright © "}
      <Link
        color="inherit"
        target="_blank"
        href="https://turki-alnaqi.web.app/"
      >
        Turki Alnaqi
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const MainRoot = () => {
  localStorage.getItem("theme") || localStorage.setItem("theme", "light")
  const [mode, setMode] = useState(localStorage.getItem("theme"));
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header {...{ drawerWidth, setMode }} />

      <Box
        component="main"
        sx={{
          [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          },
          height: `calc(100vh - ${64}px)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box component="div" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        <Box component="div" className="cv-footer">
          <Divider />
          <Copyright />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainRoot;
