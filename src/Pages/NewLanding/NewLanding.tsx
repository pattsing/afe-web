import Container from "@mui/material/Container";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";
import SlideShow from "../../Components/SlideShow/SlideShow";
import { SlideShowImage } from "../../Model/ImageModel";
import translation from "../../Locals/en.json";
import "./NewLanding.css";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "react-slick";

import fire from "../../Assets/fire.mp4";
import logo_white from "../../Assets/only-a-logo-white-nobg.png";
import logo_can from "../../Assets/canlogo.jpeg";
import logo_wwf from "../../Assets/wwflogo.jpeg";
import mother_of_earth from "../../Assets/mother_of_earth.png";
import mother_of_rice from "../../Assets/mother_of_rice.png";
import AFEButton from "../../Components/AFEButton/AFEButton";

const NewLanding = () => {
  const trans = translation.LandingPage;
  const imageList = [mother_of_earth, mother_of_rice];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    touchMove: false,
  };

  const eiei = () => {
    console.log("click");
  };
  return (
    <div>
      <NewNavBar></NewNavBar>
      <div className="page-wrapper">
        <div className="landing-banner">
          <Container>
            <div>
              <div>
                <div className="banner-quote">{trans.bannerQuote}</div>
                <div className="banner-desc">{trans.bannerDesc}</div>
              </div>
              <img className="banner-bg" src={logo_white}></img>
            </div>
          </Container>
        </div>
        <div className="content-world">
          <Container className="fire-container">
            <div className="fire-wrapper">
              <video className="fire-vdo" autoPlay muted loop>
                <source src={fire} type="video/mp4"></source>
              </video>
              <div>
                <div className="fire-title">{trans.worldTitle}</div>
                <div className="fire-desc">{trans.worldDesc}</div>
                <div className="fire-button-right">
                  <AFEButton
                    title={"MORE ENVIRONMENT THEME"}
                    onclick={() => eiei}
                    isBlack={false}
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Container className="content-nft">
          <div className="nft-wrapper">
            <div className="nft-text">
              <div className="title">{trans.nftTitle}</div>
              <div className="desc">{trans.nftDesc}</div>
              <div className="smartcontract">
                SMART CONTRACT ADDRESS:{" "}
                <a
                  href="https://etherscan.io/"
                  style={{
                    color: "#000000",
                  }}
                >
                  0x0e5c6b92196a5C7C0CB913e955335a407F3b50fA
                </a>
              </div>

              <div className="fire-button-left">
                <AFEButton
                  title={"GO TO OPENSEA COLLECTION"}
                  onclick={() => eiei}
                  isBlack={true}
                />
              </div>
            </div>
            <div className="nft-img">
              <Card className="card">
                <img src={logo_wwf} />
              </Card>
              <Card className="card">
                <img src={logo_can} />
              </Card>
            </div>
          </div>
        </Container>
        {/* </div> */}
      </div>
      <div className="content-world">
        <Container className="fire-container">
          <div className="fire-wrapper">
            <div className="slide-div">
              <Slider {...settings}>
                {imageList.map((item, index) => (
                  <div>
                    <img className="img-third-para" src={item}></img>
                  </div>
                ))}
              </Slider>
            </div>

            <div>
              <div className="fire-title">{trans.sourceTitle}</div>
              <div className="fire-desc">{trans.sourceDesc}</div>
              <div className="fire-button-right">
                <AFEButton
                  title={"List of artworks"}
                  onclick={() => eiei}
                  isBlack={false}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default NewLanding;
