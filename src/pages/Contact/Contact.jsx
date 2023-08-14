import { Box, Link, Typography } from "@mui/material"
import { pink } from '@mui/material/colors';

function Contact() {
  return (
    <Box component="div" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80%" }}>
      <Box>
        <Typography variant="h3" mb={2}>Contact Us</Typography>
        <Typography variant="h4" mb={4}>We’re all ears.</Typography>
        <ul>
          <li>Email enquiries: <Link href="mailto:alnaqi.turki@gmail.com" color={pink[200]}>alnaqi.turki@gmail.com</Link></li>
          <li>Website: <Link target="_blank" href="https://turki-alnaqi.web.app/" color={pink[200]}>https://turki-alnaqi.web.app/</Link></li>
        </ul>
      </Box>
    </Box>
  )
}

export default Contact