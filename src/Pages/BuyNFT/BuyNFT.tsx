import Container from "@mui/material/Container";
import NavBar from "../../Components/NavBar/NavBar";
import { Typography } from "@mui/material";
import "./BuyNFT.css"

const BuyNFT = () => {
  return (
    <div>
      <NavBar />
      <Typography
        variant="h1"
        align="center"
        component="div"
        gutterBottom
        className="header-text"
      >
        HOW TO BUY NFT
      </Typography>
    </div>
  );
};

export default BuyNFT;
