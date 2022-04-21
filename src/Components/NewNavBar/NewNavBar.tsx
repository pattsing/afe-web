import Container from "@mui/material/Container";
import NavBarData from "../../Data/NavBarData.json";
import "./NewNavBar.css";

import nav_icon from "../../Assets/afelogo-left-white-nobg.png";

const NewNavBar = () => {
  var element = document.getElementById("buyNFT");

  const navBarTab = (tabName: String) => {
    switch (tabName) {
      case "How to Buy NFT":
        return (
          <div
            onClick={() =>
              element
                ? element.scrollIntoView({ behavior: "smooth" })
                : console.log("can't find")
            }
          >
            {tabName}
          </div>
        );

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
