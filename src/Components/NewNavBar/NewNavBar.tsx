import Container from "@mui/material/Container";
import NavBarData from "../../Data/NavBarData.json";
import "./NewNavBar.css";
import Drawer from "@mui/material/Drawer";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";

import nav_icon from "../../Assets/afelogo-left-white-nobg.png";
import { useMediaQuery } from "react-responsive";
import menuIcon from "../../Assets/menu.png";

type Anchor = "top" | "left" | "bottom" | "right";

const NewNavBar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
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
        return (
          <div className="nav-item" onClick={() => navigate("/faq")}>
            {tabName}
          </div>
        );
      case "Artworks":
        return (
          <div className="nav-item" onClick={() => navigate("/artworks")}>
            {tabName}
          </div>
        );
      case "About Us":
        return (
          <div className="nav-item" onClick={() => navigate("/about")}>
            {tabName}
          </div>
        );
      case "Home":
        return (
          <div className="nav-item" onClick={() => navigate("/")}>
            {tabName}
          </div>
        );
      case "Environmental Themes":
        return (
          <div className="nav-item" onClick={() => navigate("/environmental")}>
            {tabName}
          </div>
        );
      case "How to Buy NFT":
        return (
          <div className="nav-item" onClick={() => navigate("/buy-nft")}>
            {tabName}
          </div>
        );

      default:
        return <div className="nav-item">{tabName}</div>;
    }
  };

  const listTab = (tabName: String) => {
    switch (tabName) {
      case "FAQ":
        return (
          <ListItemButton onClick={() => navigate("/faq")}>
            <ListItemText primary={tabName} />
          </ListItemButton>
        );
      case "Artworks":
        return (
          <ListItemButton onClick={() => navigate("/artworks")}>
            <ListItemText primary={tabName} />
          </ListItemButton>
        );
      case "About Us":
        return (
          <ListItemButton onClick={() => navigate("/about")}>
            <ListItemText primary={tabName} />
          </ListItemButton>
        );
      case "Home":
        return (
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary={tabName} />
          </ListItemButton>
        );
      case "Environmental Themes":
        return (
          <ListItemButton onClick={() => navigate("/environmental")}>
            <ListItemText primary={tabName} />
          </ListItemButton>
        );
      case "How to Buy NFT":
        return (
          <ListItemButton onClick={() => navigate("/buy-nft")}>
            <ListItemText primary={tabName} />
          </ListItemButton>
        );

      default:
        return (
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemText primary={tabName} />
          </ListItemButton>
        );
    }
  };

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsMenuClicked(open);
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>{NavBarData.map((text, index) => listTab(text.tabName))}</List>
    </Box>
  );

  return (
    <div>
      <div className="nav-wrapper">
        <Container maxWidth="xl">
          <div className="nav-wrapper">
            <div className="nav-content-wrapper">
              <img
                className={isDesktopOrLaptop ? "nav-icon" : "nav-icon-mobile"}
                src={nav_icon}
              />
              <div
                className={isDesktopOrLaptop ? "nav-space" : "nav-space-mobile"}
              />
              {isMobile && (
                <div>
                  <img
                    className="menu-icon"
                    src={menuIcon}
                    onClick={handleMenuClick}
                  />
                </div>
              )}
              {isDesktopOrLaptop && (
                <div className="nav-list">
                  {NavBarData.map((el) => {
                    return navBarTab(el.tabName);
                  })}
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      <React.Fragment key="top">
        <Drawer anchor="top" open={isMenuClicked} onClose={toggleDrawer(false)}>
          {list("top")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
export default NewNavBar;
