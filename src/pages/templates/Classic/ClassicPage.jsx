import { Box, useTheme } from "@mui/material";
import Classic from "./Classic";

function ClassicPage() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: "absolute",
        [theme.breakpoints.up("xs")]: {
            position: "absolute",
            top: "-363px",
            left: "-230px",
            scale: "0.42",
        },
        [theme.breakpoints.down(480)]: {
          top: "-354px",
          left: "-220px",
          scale: "0.43",
        },
        [theme.breakpoints.down(399)]: {
          top: "-374px",
          left: "-234px",
          scale: "0.41",
        },
      }}
    >
      <Classic />
    </Box>
  );
}
export default ClassicPage;

