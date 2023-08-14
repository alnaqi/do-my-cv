import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import imgCV from "../../assets/images/test.webp"

function Home() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <Box
        component="section"
        py="60px"
        px="60px"
        sx={{
          [theme.breakpoints.down("sm")]: {
            px: "30px",
          },
        }}
      >
        <Grid container spacing={4} columns={12}>
          <Grid
            xs={12}
            sm={7}
            md={10}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              gap: "26px",
            }}
          >
            <Box
              component="div"
              sx={{
                [theme.breakpoints.up("lg")]: {
                  width: "80%",
                },
              }}
            >
              <Typography variant="h3">
                Build your professional CV in minutes
              </Typography>
              <Typography variant="body1">
                Start using the easiest and fastest resume builder to get professional CV.
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/main/create")}
            >
              Create My CV
            </Button>
          </Grid>
          <Grid xs={12} sm={5} md={12} lg={6}>
            <Box
              component="div"
              sx={{
                m: "40px auto 0",
                [theme.breakpoints.only("xs")]: {
                  width: "250px",
                  height: "350px",
                },
                [theme.breakpoints.only("sm")]: {
                  width: "220px",
                  height: "320px",
                },
                [theme.breakpoints.up("md")]: {
                  width: "350px",
                  height: "450px",
                },
              }}
            >
              <img
                src={imgCV}
                alt="logo"
                style={{
                  width: "inherit",
                  height: "inherit",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Home;
