import logo from "../../Assets/afelogo-black-nobg.png";
import "./Footer.css";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Footer() {
  const [width, setWindowWidth] = useState(0);
  const navigate = useNavigate();

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
        <a style={{ color: "black" }} onClick={() => navigate("/privacy")}>
          Privacy Policy
        </a>
      </div>
    </div>
  );
}

export default Footer;
