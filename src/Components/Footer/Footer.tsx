import logo from "../../Assets/afelogo-black-nobg.png";
import "./Footer.css";
import { useState, useEffect } from "react";

function Footer() {
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const logoImage = () => {
    if (width > 425) {
      return <img src={logo} alt="afe-logo" className="logo" />;
    }
  };

  return (
    <div className="footer">
      {logoImage()}
      <div>Copyright ©2022 AFE-NFT. All Right Reserved</div>
      <div>Contact us: info@afe-nft.com</div>
      <div>
        <a href={"www.google.com"} style={{ color: "black" }}>
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Footer;
