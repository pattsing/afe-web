import * as React from "react";
import Container from "@mui/material/Container";
import "./Artworks.css";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import translation from "../../Locals/en.json";
import logo_white from "../../Assets/only-a-logo-white-nobg.png";
import mother_of_earth from "../../Assets/mother_of_earth.png";
import mother_of_rice from "../../Assets/mother_of_rice.png";
import NFT_AG_Covid from "../../Assets/NFT_AG_Covid.png";
import Card from "@mui/material/Card";
import Footer from "../../Components/Footer/Footer";
import { useMediaQuery } from "react-responsive";

export default function Artworks() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

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
    {
      img: NFT_AG_Covid,
      title: "The Battle of Rostam vs The Covid Monster",
      artist: "Arash Groyan",
    },
  ];
  return (
    <div className="art-wrapper">
      <NewNavBar />
      <div className={isMobile ? "landing-banner-mobile" : "landing-banner"}>
        <div>
          <div>
            <div className={isMobile ? "banner-quote-mobile" : "banner-quote"}>
              {trans.title}
            </div>
          </div>
          <img
            className={isMobile ? "banner-bg-mobile" : "banner-bg"}
            src={logo_white}
          ></img>
        </div>
      </div>
      <div>
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
                <div className={isMobile ? "art-title-mobile" : "art-title"}>
                  {item.title.toUpperCase()}
                </div>
                <div className={isMobile ? "art-artist-mobile" : "art-artist"}>
                  {item.artist}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
