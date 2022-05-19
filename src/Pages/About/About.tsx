import translation from "../../Locals/en.json";
import Container from "@mui/material/Container";
import "./About.css";
import whiteLogo from "../../Assets/afelogo-left-white-nobg.png";
import jorn from "../../Assets/jorn.jpeg";
import derek from "../../Assets/derek.jpeg";
import mild from "../../Assets/mild.jpeg";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import Footer from "../../Components/Footer/Footer";
import { useMediaQuery } from "react-responsive";

const About = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const trans = translation.AboutPage;

  const team = () => {
    if (isMobile) {
      return (
        <div style={{ padding: "5vw" }}>
          <div className="team-content-wrapper">
            <div className="avatar-wrapper">
              <img className="avatar-mobile" alt="John" src={jorn} />
            </div>
            <div className="morther-wrapper">
              <div
                className={isMobile ? "morther-title-mobile" : "morther-title"}
              >
                {trans.john}
              </div>
              <div
                className={isMobile ? "morther-desc-mobile" : "morther-desc"}
              >
                {trans.johnDesc}
              </div>
            </div>
          </div>
          <div className="team-content-wrapper">
            <div className="avatar-wrapper">
              <img className="avatar-mobile" alt="derek" src={derek} />
            </div>
            <div className="morther-wrapper">
              <div
                className={isMobile ? "morther-title-mobile" : "morther-title"}
              >
                {trans.derek}
              </div>
              <div
                className={isMobile ? "morther-desc-mobile" : "morther-desc"}
              >
                {trans.derekDesc}
              </div>
            </div>
          </div>
          <div className="team-content-wrapper">
            <div className="avatar-wrapper">
              <img className="avatar-mobile" alt="mild" src={mild} />
            </div>
            <div className="morther-wrapper">
              <div
                className={isMobile ? "morther-title-mobile" : "morther-title"}
              >
                {trans.supanat}
              </div>
              <div
                className={isMobile ? "morther-desc-mobile" : "morther-desc"}
              >
                {trans.supanatDesc}
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="team-wrapper">
          <div className="team-container">
            <div className="avatar-wrapper">
              <img className="avatar" alt="John" src={jorn} />
            </div>
            <div className="name">{trans.john}</div>
            <div className="team-desc">{trans.johnDesc}&#x2122;</div>
          </div>
          <div className="team-container">
            <div className="avatar-wrapper">
              <img className="avatar" alt="derek" src={derek} />
            </div>
            <div className="name">{trans.derek}</div>
            <div className="team-desc">{trans.derekDesc}</div>
          </div>
          <div className="team-container">
            <div className="avatar-wrapper">
              <img className="avatar" alt="mild" src={mild} />
            </div>
            <div className="name">{trans.supanat}</div>
            <div className="team-desc">{trans.supanatDesc}</div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <NewNavBar></NewNavBar>
      <div
        className={isMobile ? "about-wrapper-mobile" : "about-wrapper"}
        id="about"
      >
        <Container>
          <div className="logo-wrapper">
            <img src={whiteLogo} style={{ width: "40%" }} />
          </div>
          <div className="desc">{trans.desc}</div>
          {team()}
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
