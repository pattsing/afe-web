import Container from "@mui/material/Container";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import "./Environmental.css";
import translation from "../../Locals/en.json";
import logo_white from "../../Assets/only-a-logo-white-nobg.png";
import iceMelt from "../../Assets/icemelt.mp4";
import forestCut from "../../Assets/forestcut.mp4";
import plastic from "../../Assets/plastic.mp4";
import people from "../../Assets/people.mp4";
import consumer from "../../Assets/consumer.mp4";
import fire from "../../Assets/fire.mp4";

const Environmental = () => {
  const trans = translation.Environmental;
  return (
    <div>
      <NewNavBar></NewNavBar>
      <div className="page-wrapper">
        {/* <div className="landing-banner">
          <Container>
            <div>
              <div>
                <div className="banner-quote">{trans.title}</div>
              </div>
              <img className="banner-bg" src={logo_white}></img>
            </div>
          </Container>
        </div> */}
        <div className="content-black">
          <Container className="content-container">
            <div className="black-wrapper">
              <video className="fire-video" autoPlay muted loop>
                <source src={fire} type="video/mp4"></source>
              </video>
              <div className="morther-wrapper">
                <div className="morther-title">{trans.worldTitle}</div>
                <div className="morther-desc">{trans.worldDesc}</div>
              </div>
            </div>
          </Container>
        </div>
        <div className="content-white">
          <Container className="content-container">
            <div className="white-wrapper">
              <div>
                <div className="title">{trans.climateChange}</div>
              </div>
              <video className="video" autoPlay muted loop>
                <source src={iceMelt} type="video/mp4"></source>
              </video>
            </div>
          </Container>
        </div>
        <div className="content-black">
          <Container className="content-container">
            <div className="black-wrapper">
              <video className="video" autoPlay muted loop>
                <source src={forestCut} type="video/mp4"></source>
              </video>
              <div>
                <div className="title">{trans.biodiversity}</div>
              </div>
            </div>
          </Container>
        </div>
        <div className="content-white">
          <Container className="content-container">
            <div className="white-wrapper">
              <div>
                <div className="title">{trans.plastic}</div>
              </div>
              <video className="video" autoPlay muted loop>
                <source src={plastic} type="video/mp4"></source>
              </video>
            </div>
          </Container>
        </div>
        <div className="content-black">
          <Container className="content-container">
            <div className="black-wrapper">
              <video className="video" autoPlay muted loop>
                <source src={people} type="video/mp4"></source>
              </video>
              <div>
                <div className="title">{trans.population}</div>
              </div>
            </div>
          </Container>
        </div>
        <div className="content-white">
          <Container className="content-container">
            <div className="white-wrapper">
              <div>
                <div className="title">{trans.consumer}</div>
              </div>
              <video className="video" autoPlay muted loop>
                <source src={consumer} type="video/mp4"></source>
              </video>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Environmental;
