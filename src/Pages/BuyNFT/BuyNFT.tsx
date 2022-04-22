import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import translation from "../../Locals/en.json";
import "./BuyNFT.css";

import binance_icon from "../../Assets/Howtobuy/binance-icon.png";
import bitkub_icon from "../../Assets/Howtobuy/bitkub-icon.png";
import coinbase_icon from "../../Assets/Howtobuy/coinbase-icon.png";
import zipmex_icon from "../../Assets/Howtobuy/zipmex-icon.png";
import meta_mark from "../../Assets/Howtobuy/meta-mask.png";

const BuyNFT = () => {
  const trans = translation.HowToBuyNFTPage;
  return (
    <Container>
      <div className="buyNFT-wrapper" id="buyNFT">
        <div className="title">{trans.title}</div>
        <div className="desc">{trans.pageDecs}</div>
        <div className="step-title">{trans.step.title}</div>
        <Card className="card-step">
          <div style={{ backgroundColor: "rgb(249,185,46)" }}>1</div>
          <div>{trans.step.step1}</div>
          <div id="card-step-1-details">
            <img src={bitkub_icon} />
            <img src={coinbase_icon} />
            <img src={zipmex_icon} />
            <img src={binance_icon} />
          </div>
        </Card>
        <Card className="card-step">
          <div style={{ backgroundColor: "rgb(190,157,51)" }}>2</div>
          <div id="card-step-2-details">
            <img src={meta_mark} />
          </div>
          <div>{trans.step.step2}</div>
        </Card>
        <Card className="card-step">
          <div style={{ backgroundColor: "rgb(93,110,60)" }}>3</div>
          <div>{trans.step.step3}</div>
        </Card>
        <Card className="card-step">
          <div style={{ backgroundColor: "rgb(51,86,67)" }}>4</div>
          <div>{trans.step.step4}</div>
        </Card>
        <Card className="card-step">
          <div style={{ backgroundColor: "rgb(35,73,77)" }}>5</div>
          <div>{trans.step.step5}</div>
        </Card>
        <Card className="card-step">
          <div style={{ backgroundColor: "rgb(21,60,67)" }}>6</div>
          <div>{trans.step.step6}</div>
        </Card>
        <Card className="card-step">
          <div style={{ backgroundColor: "rgb(5,45,97)" }}>7</div>
          <div>{trans.step.step7}</div>
        </Card>
      </div>
    </Container>
  );
};

export default BuyNFT;
