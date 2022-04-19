import Container from "@mui/material/Container";
import NavBarData from "../../Data/NavBarData.json";
import "./NewNavBar.css";

import nav_icon from "../../Assets/afelogo-left-white-nobg.png";

const NewNavBar = () => {
  return (
    <div className="nav-wrapper">
      <Container maxWidth="xl">
        <div className="nav-wrapper">
          <div className="nav-content-wrapper">
            <img className="nav-icon" src={nav_icon} />
            <div className="nav-space" />
            <div className="nav-list">
              {NavBarData.map((el) => {
                return <div>{el.tabName}</div>;
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default NewNavBar;
