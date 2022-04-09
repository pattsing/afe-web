import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import NavBar from "../../Components/NavBar/NavBar";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import MockImageData from "../../Data/MockImageData.json";
import { Typography } from "@mui/material";
import "./Artworks.css"

export default function Artworks() {
  return (
    <div>
      <NavBar />
      <Typography
        variant="h1"
        align="center"
        component="div"
        gutterBottom
        className="header-text"
      >
        ARTWORKS
      </Typography>
      <ImageList variant="masonry" cols={3} gap={8}>
        {MockImageData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}`}
              srcSet={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar title={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
      {/* </Box> */}
    </div>
  );
}
