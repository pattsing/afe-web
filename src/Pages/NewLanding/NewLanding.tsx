import Container from "@mui/material/Container";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";
import translation from "../../Locals/en.json";
import "./NewLanding.css";

import logo_white from "../../Assets/afelogo-white-nobg.png";

const NewLanding = () => {
  const trans = translation.LandingPage;
  return (
    <div>
      <NewNavBar></NewNavBar>
      <div className="page-wrapper">
        <div className="landing-banner">
          <Container maxWidth="xl">
            <div>
              <div className="banner-quote">{trans.bannerQuote}</div>
              <div className="banner-desc">{trans.bannerDesc}</div>
            </div>
            <img className="banner-bg" src={logo_white}></img>
          </Container>
        </div>
      </div>
    </div>
  );
};
export default NewLanding;
