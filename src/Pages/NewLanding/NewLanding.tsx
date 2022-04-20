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

import fire from "../../Assets/fire.mp4";
import logo_white from "../../Assets/only-a-logo-white-nobg.png";
import logo_can from "../../Assets/canlogo.jpeg";
import logo_wwf from "../../Assets/wwflogo.jpeg";
// import mother_of_earth from "../../Assets/mother_of_earth.tiff";
// import mother_of_rice from "../../Assets/mother_of_rice.tiff";

const NewLanding = () => {
  const trans = translation.LandingPage;
  //   const mockImgList = [
  //     new SlideShowImage(mother_of_earth, "mother_of_earth"),
  //     new SlideShowImage(mother_of_rice, "mother_of_rice"),
  //   ];
  return (
    <div>
      <NewNavBar></NewNavBar>
      <div className="page-wrapper">
        <div className="landing-banner">
          <Container maxWidth="xl">
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
          <Container maxWidth="xl" className="fire-container">
            <div className="fire-wrapper">
              <video className="fire-vdo" autoPlay muted loop>
                <source src={fire} type="video/mp4"></source>
              </video>
              <div>
                <div className="fire-title">{trans.worldTitle}</div>
                <div className="fire-desc">{trans.worldDesc}</div>
              </div>
            </div>
          </Container>
        </div>
        <div className="content-slide">
          <Container maxWidth="xl">
            {/* <SlideShow data={mockImgList} /> */}
          </Container>
        </div>
        {/* <div className="content-nft"> */}
        <Container className="content-nft" maxWidth="xl">
          <div className="nft-wrapper">
            <div className="nft-text">
              <div className="title">{trans.nftTitle}</div>
              <div className="desc">{trans.nftDesc}</div>
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
    </div>
  );
};
export default NewLanding;
