import translation from "../../Locals/en.json";
import Container from "@mui/material/Container";
import "./About.css";
import whiteLogo from "../../Assets/afelogo-left-white-nobg.png";
import jorn from "../../Assets/jorn.jpeg";
import derek from "../../Assets/derek.jpeg";
import mild from "../../Assets/mild.jpeg";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  const trans = translation.AboutPage;

  return (
    <div>
      <NewNavBar></NewNavBar>
      <div className="about-wrapper" id="about">
        <Container>
          <div className="logo-wrapper">
            <img src={whiteLogo} style={{ width: "40%" }} />
          </div>
          <div className="desc">{trans.desc}</div>
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
                <img className="avatar" alt="John" src={mild} />
              </div>
              <div className="name">{trans.supanat}</div>
              <div className="team-desc">{trans.supanatDesc}</div>
            </div>
          </div>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
