import Container from "@mui/material/Container";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import Card from "@mui/material/Card";
import translation from "../../Locals/en.json";
import "./NewLanding.css";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import logo_white from "../../Assets/only-a-logo-white-nobg.png";
import logo_rfus_back from "../../Assets/RFUS_vertical_greenonblack_RGB.jpeg";
import logo_rfus from "../../Assets/rfus_logo.png";
import mother_of_earth from "../../Assets/mother_of_earth.png";
import mother_of_rice from "../../Assets/mother_of_rice.png";
import AFEButton from "../../Components/AFEButton/AFEButton";
import Footer from "../../Components/Footer/Footer";

const NewLanding = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const navigate = useNavigate();
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
        <div className={isMobile ? "landing-banner-mobile" : "landing-banner"}>
          <div>
            <div>
              <div
                className={isMobile ? "banner-quote-mobile" : "banner-quote"}
              >
                {trans.bannerQuote}
              </div>
              <div className={isMobile ? "banner-desc-mobile" : "banner-desc"}>
                {trans.bannerDesc}
              </div>
            </div>
            <img
              className={isMobile ? "banner-bg-mobile" : "banner-bg"}
              src={logo_white}
            ></img>
          </div>
        </div>
        <div className={isMobile ? "nft-wrapper-mobile" : "nft-wrapper"}>
          <div className={isMobile ? "nft-text-mobile" : "nft-text"}>
            <div className="world-title">{trans.nftTitle}</div>
            <div className="world-desc">{trans.nftDesc}</div>
            <div
              className={isMobile ? "smartcontract-mobile" : "smartcontract"}
            >
              SMART CONTRACT ADDRESS:{" "}
              <a
                href="https://etherscan.io/address/0x24fd209263288209c9E2A6909E6Bf9e9df8A4c9d#code"
                style={{
                  color: "#000000",
                }}
              >
                0x24fd209263288209c9E2A6909E6Bf9e9df8A4c9d
              </a>
            </div>

            <div
              className={
                isMobile ? "fire-button-left-mobile" : "fire-button-left"
              }
            >
              
              <AFEButton
                title={"GO TO OPENSEA COLLECTION"}
                onclick={() => window.open("https://opensea.io/collection/afe-nft", '_blank')}
                isBlack={true}
              />
            </div>
          </div>
          <a
            className={isMobile ? "nft-img-mobile" : "nft-img"}
            href="https://rainforestfoundation.org/"
          >
            <Card className="card">
              <img src={logo_rfus_back} />
            </Card>
          </a>
        </div>
      </div>
      <div className={isMobile ? "content-world-mobile" : "content-world"}>
        <div className="fire-wrapper">
          <div className={isMobile ? "slide-div-mobile" : "slide-div"}>
            <Slider {...settings}>
              {imageList.map((item, index) => (
                <div>
                  <img className="img-third-para" src={item}></img>
                </div>
              ))}
            </Slider>
          </div>

          <div>
            <div className={isMobile ? "fire-title-mobile" : "fire-title"}>
              {trans.sourceTitle}
            </div>
            <div className={isMobile ? "fire-desc-mobile" : "fire-desc"}>
              {trans.sourceDesc}
            </div>
            <div className="fire-button-right">
              <AFEButton
                title={"List of artworks"}
                onclick={() => navigate("/artworks")}
                isBlack={false}
              />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "5vw" }}></div>
      <Footer></Footer>
    </div>
  );
};
export default NewLanding;
