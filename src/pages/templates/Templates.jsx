import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";

function Templates() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}
export default Templates;
