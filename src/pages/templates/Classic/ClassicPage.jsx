import { Box, useTheme } from "@mui/material";
import Classic from "./Classic";

function ClassicPage() {
  const theme = useTheme()
  return (
    <Box
      sx={{
        position: "absolute",
        [theme.breakpoints.up("xs")]: {
          top: "-317px",
          left: "-197px",
          scale: "0.5",
        },
        [theme.breakpoints.down(399)]: {
          top: "-374px",
          left: "-237px",
          scale: "0.4",
        },
      }}
    >
      <Classic />
    </Box>
  );
}
export default ClassicPage;
