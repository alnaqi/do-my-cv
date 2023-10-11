import { Box, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import DownloadPage from "components/DownloadCV";

import TheOpenSea from "pages/templates/TheOpenSea/TheOpenSea";
import Classic from "pages/templates/Classic/Classic";
import TheOpenSeaPage from "pages/templates/TheOpenSea/TheOpenSeaPage";
import ClassicPage from "pages/templates/Classic/ClassicPage";

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

function CustomImageList() {

  return (
    <>
      <Box component="span" sx={{ position: "absolute", left: "-1000px",  }}>
        <TheOpenSea />
        <Classic />
      </Box>
      <ImageList
        sx={{
          width: 350,
          height: 450,
          transform: "translateZ(0)",
        }}
        rowHeight={200}
        gap={1}
      >
        
        {itemData.map((item) => {
          const cols = item.featured ? 2 : 1;
          const rows = item.featured ? 2 : 1;

          return (
            <ImageListItem key={item.id} cols={cols} rows={rows}>
              {item.page}
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
                    downloadFileName={`${JSON.parse(localStorage.getItem("firstName"))}'s CV`}
                    title={item.title}
                  />
                }
                actionPosition="right"
              />
              
            </ImageListItem>
            
          );
        })}
      </ImageList>
      
    </>
  );
}

const itemData = [
  {
    title: "The Open Sea",
    author: "Abdullah my brother",
    page: <TheOpenSeaPage/>,
    id: "TheOpenSea",
    featured: true,
  },
  {
    title: "Classic",
    author: "Guts",
    page: <ClassicPage/>,
    id: "Classic",
    featured: true,
  },
];
