import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import navBarData from "../../Data/NavBarData.json";
import { setNavState } from "../../ReduxStore/NavBarSlice";
import store from "../../ReduxStore/store";
import "./NavBar.css";
import navlogo from "../../Assets/afelogo-left-white-nobg.png";
import { style } from "@mui/system";

const NavBar = () => {
  const { navBar } = store.getState();
  const [value, setValue] = useState<number>(navBar.value);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    store.dispatch(setNavState({ value: newValue }));
  };

  const handleClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
    route?: string
  ) => {
    setAnchorEl(event.currentTarget);
    setActiveTabIndex(index);
    route && navigate(route);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getMenuList = (index: number) => {
    if (navBarData.length >= index && navBarData[index].tabMenu) {
      return (
        <Menu
          id={`fade-menu-${index}`}
          MenuListProps={{
            "aria-labelledby": `tab-${index}`,
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          {navBarData[index].tabMenu?.map((menu) => {
            return <MenuItem onClick={handleClose}>{menu}</MenuItem>;
          })}
        </Menu>
      );
    }
  };

  return (
    <Box
      sx={{
        width: "95%",
        display: "flex",
        flexDirection: "row",
      }}
      className={"menu-bar"}
    >
      <div style={{ width: "20%" }}>
        <img src={navlogo} className="menu-logo" />
      </div>
      <div
        style={{ width: "80%", display: "flex", flexDirection: "row-reverse" }}
      >
        <Tabs value={value} onChange={handleChange}>
          {navBarData.map((tab, index) => {
            return (
              <Tab
                label={tab.tabName}
                id={`tab-${index}`}
                onClick={(event: React.MouseEvent<HTMLElement>) => {
                  handleClick(event, index, tab.tabRoute);
                }}
                aria-controls={open ? `fade-menu-${index}` : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                style={{
                  fontSize: "1vw",
                  color: "#ffffff",
                }}
              />
            );
          })}
        </Tabs>
      </div>
      {getMenuList(activeTabIndex)}
    </Box>
  );
};

export default NavBar;
