import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import translation from "../../Locals/en.json";
import "./BuyNFT.css";

const BuyNFT = () => {
  const trans = translation.HowToBuyNFTPage;
  return (
    <Container>
      <div className="buyNFT-wrapper" id="buyNFT">
        <div className="title">{trans.title}</div>
        <div className="desc">{trans.pageDecs}</div>
        <div className="step-title">{trans.step.title}</div>
        <Card className="card-step">
          <div>1</div>
          <div>{trans.step.step1}</div>
          <div
            style={{ width: "100%", height: "10vw", backgroundColor: "pink" }}
          ></div>
        </Card>
        <Card className="card-step">
          <div>2</div>
          <div>{trans.step.step2}</div>
        </Card>
        <Card className="card-step">
          <div>3</div>
          <div>{trans.step.step3}</div>
        </Card>
        <Card className="card-step">
          <div>4</div>
          <div>{trans.step.step4}</div>
        </Card>
        <Card className="card-step">
          <div>5</div>
          <div>{trans.step.step5}</div>
        </Card>
        <Card className="card-step">
          <div>6</div>
          <div>{trans.step.step6}</div>
        </Card>
        <Card className="card-step">
          <div>7</div>
          <div>{trans.step.step7}</div>
        </Card>
      </div>
    </Container>
  );
};

export default BuyNFT;
