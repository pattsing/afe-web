import Container from "@mui/material/Container";
import NavBar from "../../Components/NavBar/NavBar";
import "./Landing.css";
import tempImage from "../../Assets/temp_img.jpg";
import wwfLogo from "../../Assets/wwflogo.jpeg"
import panadaImg from "../../Assets/panda.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import MockImageData from "../../Data/MockImageData.json";
import "swiper/css";
import "swiper/css/pagination";
import Slider from "react-slick";

const Landing = () => {
  const settings = {
    className: "center",
    dots: true,
    arrows: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500
  };

  return (
    <div>
      <NavBar />
      <div
        style={{
          padding: "10px",
          textAlign: "center",
        }}
      >
        {/* <p
          style={{
            fontFamily: "Helvetica",
            fontSize: "2em",
          }}
        >
          ART FOR ENVIRONMENT
        </p> */}
        <div style={{
          margin: "20px"
        }}>
        <Slider {...settings}>

{MockImageData.map((item) => (
        // <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=300&h=300&fit=crop&auto=format`}
            srcSet={`${item.img}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        // </ImageListItem>
    ))}
</Slider>
        </div>
        
        <div className="group-card">
        <div style={{
          width: "30%",
          padding: "1em",
          position: "relative",
          height: "200px"
        }}>
<img src={panadaImg} className="first-paragraph-image-left"></img>
<img src={wwfLogo} className="first-paragraph-image-right"></img>

        </div>
          <div className="first-paragraph">
            Mother Earth needs your help. With the fallout from climate change
            and mass extinctions looming, she is slipping away right under our
            noses. Art for Environment – NFT (AFE-NFT) aims to slow her decay by
            becoming a vehicle for aiding her recovery.
          </div>
          
        </div>

        {/* <div className="group-card">
          <div className="card">
            Mother Earth needs your help. With the fallout from climate change
            and mass extinctions looming, she is slipping away right under our
            noses. Art for Environment – NFT (AFE-NFT) aims to slow her decay by
            becoming a vehicle for aiding her recovery.
          </div>
          <img src={tempImage} className="image-card"></img>
        </div>
        <div style={{
          height: '300px'
        }}>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={3}
            autoplay={{
              delay: 10,
              disableOnInteraction: false
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="swiper"
          >
            {MockImageData.map((item) => (
              <SwiperSlide>
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=300&h=300&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=300&h=300&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="group-card">
          <div className="card-full">
            AFE-NFT features an online collection of high-quality artworks that
            poignantly address current and pressing environmental issues. Minted
            as single or limited edition NFTs (Non-Fungible Tokens), these
            artworks by renowned artists can be bought and safely accessed
            through your ‘wallet’ of choice. Each limited edition contains three
            (3) of the same NFT, priced at USD 2,700 per piece. Twenty percent
            of all our proceeds will be donated to several environmental
            charities, including the World Wildlife Fund (WWF) and Climate
            Action Network (CAN). The remaining balance will be equally divided
            between the artist and the project.
          </div>
        </div>

        <div className="group-card">
          <div className="card">
            Coded into the Ethereum blockchain, the NFT itself represents a
            proof of ownership that resembles a provenance. This means that any
            NFT you buy from our site will remain yours forever or until you
            wish to resell it. You will be provided a high resolution image of
            the underlying original artwork in TIFF format as your NFT.
          </div>
          <img src={tempImage} className="image-card"></img>
        </div>

        <div className="group-card">
          <img src={tempImage} className="image-card"></img>
          <div className="card">
            The environmental artworks on AFE-NFT have been meticulously curated
            from Southeast Asia and elsewhere around the globe. The pieces on
            display were created by celebrated artists, whose works have been
            sold at international auction houses and recognized worldwide in
            numerous art exhibitions, museums and biennales. Their originals
            were conceived in a variety of media, such as paintings, prints, art
            installations, video stills, and photography among others.
          </div>
        </div>

        <div style={{ margin: "3em" }}>
          <a className="link-button" href="">
            {" "}
            ART FOR ENVIRONMENT NFT ON OPENSEA
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Landing;
