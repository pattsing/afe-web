import Container from "@mui/material/Container";
import NavBarData from "../../Data/NavBarData.json";
import "./NewNavBar.css";

import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

import nav_icon from "../../Assets/afelogo-left-white-nobg.png";

const NewNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  var buyNFTElement = document.getElementById("buyNFT");
  var aboutElement = document.getElementById("about");
  var faqElement = document.getElementById("faq");
  useEffect(() => {
    // Update the document title using the browser API
    buyNFTElement = document.getElementById("buyNFT");
    aboutElement = document.getElementById("about");
    faqElement = document.getElementById("faq");
  });

  const navBarTab = (tabName: String) => {
    switch (tabName) {
      case "FAQ":
        return <div onClick={() => navigate("/faq")}>{tabName}</div>;
      case "Artworks":
        return <div onClick={() => navigate("/artworks")}>{tabName}</div>;
      case "About Us":
        return <div onClick={() => navigate("/about")}>{tabName}</div>;
      case "Home":
        return <div onClick={() => navigate("/")}>{tabName}</div>;
      case "Environmental Themes":
        return <div onClick={() => navigate("/environmental")}>{tabName}</div>;
      case "How to Buy NFT":
        return <div onClick={() => navigate("/buy-nft")}>{tabName}</div>;

      default:
        return <div>{tabName}</div>;
    }
  };

  return (
    <div className="nav-wrapper">
      <Container maxWidth="xl">
        <div className="nav-wrapper">
          <div className="nav-content-wrapper">
            <img className="nav-icon" src={nav_icon} />
            <div className="nav-space" />
            <div className="nav-list">
              {NavBarData.map((el) => {
                return navBarTab(el.tabName);
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default NewNavBar;
