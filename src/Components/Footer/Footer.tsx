import logo from "../../Assets/afelogo-black-nobg.png"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
        Copyright ©2022 Art for environment NFT. All Right Reserved
        <span className="logo">
          <img src={logo} alt="afe-logo" width={20} height={20} />
        </span>
      </footer>
    )
}

export default Footer;