import { useState } from "react";
import MUIAppbar from "../MUI-components/MUIAppbar";
import MUIDrawer from "../MUI-components/MUIDrawer";

function Header({ drawerWidth, setMode }) {
  // show and hide app bar
  const [isDrawerOpen, IsDrawerOpen] = useState("none");
  const [drawerType, setDrawerType] = useState("permanent");
  const showDrawer = () => {
    IsDrawerOpen("block");
    setDrawerType("temporary");
  };
  const closeDrawer = () => {
    IsDrawerOpen("none");
    setDrawerType("permanent");
  };
  return (
    <>
      <MUIAppbar {...{ drawerWidth, showDrawer }} />
      <MUIDrawer
        {...{ drawerWidth, setMode, isDrawerOpen, drawerType, closeDrawer }}
      />
    </>
  );
}

export default Header;