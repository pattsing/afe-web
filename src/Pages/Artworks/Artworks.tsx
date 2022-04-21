import * as React from "react";
import Container from "@mui/material/Container";
import "./Artworks.css";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import translation from "../../Locals/en.json";
import logo_white from "../../Assets/only-a-logo-white-nobg.png";
import mother_of_earth from "../../Assets/mother_of_earth.png";
import mother_of_rice from "../../Assets/mother_of_rice.png";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Card from "@mui/material/Card";

export default function Artworks() {
  const trans = translation.ArtWorks;
  const imageData = [
    {
      img: mother_of_rice,
      title: "Mother of rice",
      artist: "Vasan",
    },
    {
      img: mother_of_earth,
      title: "Mother of earth",
      artist: "Vasan",
    },
  ];
  return (
    <div className="art-wrapper">
      <NewNavBar />
      <div className="landing-banner">
        <Container>
          <div>
            <div>
              <div className="banner-quote">{trans.title}</div>
            </div>
            <img className="banner-bg" src={logo_white}></img>
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <div className="art-list">
            {imageData.map((item) => (
              <Card className="card-wrapper">
                <img
                  className="art-img"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="info-wrapper">
                  <div className="art-title">{item.title.toUpperCase()}</div>
                  <div className="art-artist">{item.artist}</div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
