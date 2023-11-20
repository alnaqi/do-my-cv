import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function Test() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}
export default Test;
