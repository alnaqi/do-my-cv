import { Box, useTheme } from "@mui/material";
import TheOpenSea from "./TheOpenSea";
function TheOpenSeaPage() {
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
      <TheOpenSea />
    </Box>
  );
}
export default TheOpenSeaPage;
