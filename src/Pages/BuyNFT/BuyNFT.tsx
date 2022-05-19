import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import translation from "../../Locals/en.json";
import "./BuyNFT.css";
import NewNavBar from "../../Components/NewNavBar/NewNavBar";

import binance_icon from "../../Assets/Howtobuy/binance-icon.png";
import bitkub_icon from "../../Assets/Howtobuy/bitkub-icon.png";
import coinbase_icon from "../../Assets/Howtobuy/coinbase-icon.png";
import zipmex_icon from "../../Assets/Howtobuy/zipmex-icon.png";
import meta_mark from "../../Assets/Howtobuy/meta-mask.png";
import connectBank from "../../Assets/Howtobuy/connectbank.png";
import deposit from "../../Assets/Howtobuy/deposit.png";
import eth from "../../Assets/Howtobuy/ethereum.png";
import oslogo from "../../Assets/Howtobuy/oslogo.png";
import Footer from "../../Components/Footer/Footer";
import { useMediaQuery } from "react-responsive";

const BuyNFT = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const trans = translation.HowToBuyNFTPage;
  return (
    <div>
      <NewNavBar></NewNavBar>
      <Container>
        <div
          className={isMobile ? "buyNFT-wrapper-mobile" : "buyNFT-wrapper"}
          id="buyNFT"
        >
          <div className="title">{trans.title}</div>
          <div className="desc">{trans.pageDecs}</div>
          <div className="step-title">{trans.step.title}</div>
          <Card className={isMobile ? "card-step-mobile" : "card-step"}>
            <div style={{ backgroundColor: "rgb(249,185,46)" }}>1</div>
            <div className="content-wrapper">
              <div>{trans.step.step1}</div>
              <div id="card-step-details-multi">
                <img src={bitkub_icon} alt="bitkub icon" />
                <img src={coinbase_icon} alt="coinbase icon" />
                <img src={zipmex_icon} alt="zipmex icon" />
                <img src={binance_icon} alt="binance icon" />
              </div>
            </div>
          </Card>
          <Card className={isMobile ? "card-step-mobile" : "card-step"}>
            <div style={{ backgroundColor: "rgb(190,157,51)" }}>2</div>
            <div className="content-wrapper">
              <div id="card-step-details-single">
                <img src={meta_mark} alt="meta mask icon" />
              </div>
              <div>{trans.step.step2}</div>
            </div>
          </Card>
          <Card className={isMobile ? "card-step-mobile" : "card-step"}>
            <div style={{ backgroundColor: "rgb(93,110,60)" }}>3</div>
            <div className="content-wrapper">
              <div>{trans.step.step3}</div>
              <div id="card-step-details-single">
                <img src={connectBank} alt="connectBank" />
              </div>
            </div>
          </Card>
          <Card className={isMobile ? "card-step-mobile" : "card-step"}>
            <div style={{ backgroundColor: "rgb(51,86,67)" }}>4</div>
            <div className="content-wrapper">
              <div id="card-step-details-single">
                <img src={deposit} alt="connectBank" />
              </div>
              <div>{trans.step.step4}</div>
            </div>
          </Card>
          <Card className={isMobile ? "card-step-mobile" : "card-step"}>
            <div style={{ backgroundColor: "rgb(35,73,77)" }}>5</div>
            <div className="content-wrapper">
              <div>{trans.step.step5}</div>
              <div id="card-step-details-single">
                <img src={eth} alt="connectBank" />
              </div>
            </div>
          </Card>
          <Card className={isMobile ? "card-step-mobile" : "card-step"}>
            <div style={{ backgroundColor: "rgb(21,60,67)" }}>6</div>
            <div className="content-wrapper">
              <div id="card-step-details-single">
                <img src={oslogo} alt="connectBank" style={{ height: "90%" }} />
              </div>
              <div>{trans.step.step6}</div>
            </div>
          </Card>
          <Card className={isMobile ? "card-step-mobile" : "card-step"}>
            <div style={{ backgroundColor: "rgb(5,45,97)" }}>7</div>
            <div className="content-wrapper">
              <div>{trans.step.step7}</div>
            </div>
          </Card>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default BuyNFT;
