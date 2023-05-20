import { useState } from "react";
import { Box, Fade, Modal, Typography, useTheme } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import DownloadPage from "components/DownloadCV";

import TheOpenSea from "pages/templates/TheOpenSea/TheOpenSea";
import imgTheOpenSea from "../../assets/images/templates/TheOpenSea.jpg";
import Classic from "pages/templates/Classic/Classic";
import imgClassic from "../../assets/images/templates/Classic.jpg"

function Results() {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Choose template.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CustomImageList />
      </Box>
    </>
  );
}

export default Results;

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function CustomImageList() {
  const theme = useTheme();

  const [open, setOpen] = useState(false);
  const [frame, setFrame] = useState("false");

  const handleClose = () => {
    setOpen(false);
  };

  const handleIframe = (value) => {
    setFrame(value);
    setOpen(true);
  };

  return (
    <>
      <Box component="span" sx={{ position: "absolute", left: "-1000px" }}>
        <TheOpenSea />
        <Classic />
      </Box>
      <ImageList
        sx={{
          width: 350,
          height: 450,
          transform: "translateZ(0)",
          cursor: "pointer",
        }}
        rowHeight={200}
        gap={1}
      >
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.img} cols={cols} rows={rows}>
              <img
                {...srcset(item.img, 250, 200, rows, cols)}
                alt={item.title}
                loading="lazy"
                onClick={(e) => handleIframe(item.iframe)}
              />
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <DownloadPage
                    rootElementId={item.id}
                    downloadFileName="CV"
                    title={item.title}
                  />
                }
                actionPosition="right"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&:hover": {
            backgroundcolor: "red",
          },
        }}
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Box
          component="span"
          sx={{
            [theme.breakpoints.up("sm")]: {
              height: "570px",
              width: "402px",
            },
            width: "402px",
            [theme.breakpoints.down("sm")]: {
              height: "455px",
              width: "322px"
            },
          }}
        >
          <Fade in={open} timeout={500} style={{ outline: "none" }}>
            <iframe
              src={`https://do-my-cv.web.app/templates/${frame}`}
              title="Iframe Example"
              style={{ height: "100%", width: "100%" }}
              scrolling="no"
            ></iframe>
          </Fade>
        </Box>
      </Modal>
    </>
  );
}

const itemData = [
  {
    title: "The Open Sea",
    author: "Abdullah my brother",
    img: imgTheOpenSea,
    iframe: "the_open_sea",
    id: "TheOpenSea",
    featured: true,
  },
  {
    title: "Classic",
    author: "Guts",
    img: imgClassic,
    iframe: "classic",
    id: "Classic",
    featured: true,
  },
];
